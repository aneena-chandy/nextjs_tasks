
import { useState, useEffect, memo, useCallback } from "react";
import useDebounce from "../../hooks/useDebounce";

const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2499, icon: "🎧" },
    { id: 2, name: "Smart Watch", category: "Electronics", price: 3999, icon: "⌚" },
    { id: 3, name: "Running Shoes", category: "Fashion", price: 1999, icon: "👟" },
    { id: 4, name: "Laptop Bag", category: "Accessories", price: 1299, icon: "🎒" },
    { id: 5, name: "Bluetooth Speaker", category: "Electronics", price: 1799, icon: "🔊" },
    { id: 6, name: "Cotton T-Shirt", category: "Fashion", price: 799, icon: "👕" },
    { id: 7, name: "Smartphone", category: "Electronics", price: 15999, icon: "📱" },
    { id: 8, name: "Travel Backpack", category: "Accessories", price: 1499, icon: "👜" }
];

const ProductCard = memo(function ProductCard({ product }) {
    console.log("Product rendered:", product.name);

    return (
        <div className="perf-product-card">
            <div className="perf-product-icon">{product.icon}</div>

            <span className="perf-product-category">
                {product.category}
            </span>

            <h3>{product.name}</h3>

            <strong>
                ₹{product.price.toLocaleString("en-IN")}
            </strong>
        </div>
    );
});

function ProductSearchTask() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [executionCount, setExecutionCount] = useState(0);

    const debouncedSearch = useDebounce(search, 500);

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    useEffect(() => {
        if (debouncedSearch.trim()) {
            setExecutionCount(prev => prev + 1);
        }
    }, [debouncedSearch]);

    const clearSearch = useCallback(() => {
        setSearch("");
    }, []);

    return (
        <div className="perf-demo">

            <div className="perf-task-heading">
                <div>
                    <h3>🛍️ Product Search</h3>
                    <p>Find products using optimized search.</p>
                </div>

                <span className="perf-task-count">
                    {filteredProducts.length} Products
                </span>
            </div>

            <div className="perf-filter-row">

                <input
                    className="perf-search-input"
                    placeholder="Search products..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <button
                    className="perf-secondary-btn"
                    onClick={clearSearch}
                >
                    Clear
                </button>

            </div>

            <select
                className="perf-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
            </select>

            <div className="perf-search-stats">
                <div>
                    <span>Search Executions</span>
                    <h2>{executionCount}</h2>
                </div>

                <div>
                    <span>Search Delay</span>
                    <h2>500 ms</h2>
                </div>
            </div>

            <div className="perf-product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <div className="perf-empty">
                        No products found.
                    </div>
                )}
            </div>

            <div className="perf-info">
                <strong>Optimization Techniques:</strong>
                <p>
                    Debouncing delays filtering until the user pauses typing.
                    ProductCard uses React.memo to avoid unnecessary renders.
                    useCallback preserves the clearSearch function reference.
                </p>
                <p>
                    Note: This example filters local data. In a real
                    API-based application, you can use the debounced value
                    to make a request to your backend.
                </p>
            </div>

        </div>
    );
}

export default ProductSearchTask;
