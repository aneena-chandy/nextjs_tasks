import { useEffect, useState } from "react";

import ProductSearch from "../components/products/ProductSearch";
import CategoryFilter from "../components/products/CategoryFilter";
import ProductList from "../components/products/ProductList";

import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";

import { productCategories } from "../data/productCategories";

import "../topics/product-search/ProductSearch.css";

function ProductSearchPage() {

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {

        const controller = new AbortController();

        const fetchProducts = async () => {

            setLoading(true);
            setError("");

            try {

                let url = "https://dummyjson.com/products";

                const searchValue = search.trim();

                if (searchValue) {

                    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(searchValue)}`;

                } else if (selectedCategory) {

                    url = `https://dummyjson.com/products/category/${encodeURIComponent(selectedCategory)}`;

                }

                const response = await fetch(url, {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error("Unable to fetch products. Please try again.");
                }

                const data = await response.json();

                let fetchedProducts = data.products || [];

                // Apply category filtering when both search and category are selected.
                if (searchValue && selectedCategory) {

                    fetchedProducts = fetchedProducts.filter(
                        product => product.category === selectedCategory
                    );

                }

                setProducts(fetchedProducts);

            } catch (err) {

                if (err.name !== "AbortError") {

                    setError(
                        err.message || "Something went wrong while fetching products."
                    );

                    setProducts([]);

                }

            } finally {

                if (!controller.signal.aborted) {
                    setLoading(false);
                }

            }

        };

        // Debounce API calls to avoid sending a request on every keystroke.
        const timer = setTimeout(() => {
            fetchProducts();
        }, 500);

        // Clear the timer and cancel any previous API request.
        return () => {
            clearTimeout(timer);
            controller.abort();
        };

    }, [search, selectedCategory, retryCount]);

    const handleRetry = () => {
        setRetryCount(previous => previous + 1);
    };

    return (

        <div className="product-page">

            <div className="product-page-header">

                <div>
                    <h1>Product Management</h1>
                    <p>Explore and search products from our collection.</p>
                </div>

                <div className="product-count">
                    {products.length} Products
                </div>

            </div>

            <div className="product-filter-section">

                <ProductSearch
                    search={search}
                    setSearch={setSearch}
                />

                <CategoryFilter
                    categories={productCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

            </div>

            {loading ? (

                <Loading />

            ) : error ? (

                <ErrorMessage
                    message={error}
                    onRetry={handleRetry}
                />

            ) : (

                <ProductList products={products} />

            )}

        </div>

    );
}

export default ProductSearchPage;