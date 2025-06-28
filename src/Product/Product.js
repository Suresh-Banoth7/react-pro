import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const pageSize = 6;

  // 🔸 Fetch categories once
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories")
      .then((res) => {
        const allCategories = ["All", ...res.data];
        console.log("Fetched categories:", allCategories);
        setCategories(allCategories);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // 🔸 Fetch products on filter/sort/page change
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, sortOrder, selectedCategory]);

  const fetchProducts = (page) => {
    let query = `?page=${page}&size=${pageSize}&sort=price,${sortOrder}`;
    if (selectedCategory !== "All") {
      query += `&category=${selectedCategory}`;
    }

    axios
      .get(`http://localhost:8080/api/products${query}`)
      .then((response) => {
        const res = response.data;
        console.log("Fetched products:", res.content);
        setProducts(res.content);
        setTotalPages(res.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching paginated products:", error);
      });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(0);
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4 mb-5">
        <h2 className="mb-4">Product List</h2>

        {/* Filters */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label fw-bold">Filter by Category:</label>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Sort by Price:</label>
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards */}
        <div className="row">
          {products.length === 0 ? (
            <p className="text-center">No products found.</p>
          ) : (
            products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.imageUrl || "https://via.placeholder.com/200x200"}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x200";
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-truncate">{product.description}</p>
                    <p className="text-muted mb-1">
                      <strong>Category:</strong> {product.category}
                    </p>
                    <p className="text-success">
                      <strong>${product.price.toFixed(2)}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, idx) => (
                  <li key={idx} className={`page-item ${idx === currentPage ? "active" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(idx)}>
                      {idx + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages - 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <p className="text-center mt-2">
          Page {currentPage + 1} of {totalPages}
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
