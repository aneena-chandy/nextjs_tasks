function ProductSearchTask() {

    return (
        <div className="topic-content">

            <h2>Task 2 – Product Search with API</h2>

            <span className="task-level intermediate">
                Intermediate
            </span>

            <p>
                Build a product search dashboard using React and an
                external API. The dashboard should allow users to
                browse products, search by name and filter by category.
            </p>

            <h3>Requirements</h3>

            <ul>
                <li>Fetch products from an external API.</li>
                <li>Display products using responsive product cards.</li>
                <li>Implement a search input.</li>
                <li>Implement category filtering.</li>
                <li>Show a loading indicator while fetching data.</li>
                <li>Handle API errors with a retry option.</li>
                <li>Implement debounced search.</li>
                <li>Cancel outdated API requests.</li>
                <li>Display an empty state when no products match.</li>
            </ul>

            <h3>API Endpoints</h3>

            <ul>
                <li>
                    <a
                        href="https://dummyjson.com/products"
                        target="_blank"
                        rel="noreferrer"
                    >
                        All Products
                    </a>
                </li>

                <li>
                    <a
                        href="https://dummyjson.com/products/search?q=phone"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Search Products
                    </a>
                </li>

                <li>
                    <a
                        href="https://dummyjson.com/products/category-list"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Product Categories
                    </a>
                </li>
            </ul>

            <h3>Practise These Concepts</h3>

            <ul>
                <li>useEffect</li>
                <li>useState</li>
                <li>Fetch API</li>
                <li>Async / Await</li>
                <li>AbortController</li>
                <li>Debouncing</li>
                <li>Cleanup functions</li>
                <li>Conditional rendering</li>
            </ul>

            <h3>Expected Result</h3>

            <p>
                A responsive product dashboard with search, category
                filters, product cards, loading states and error handling.
            </p>

        </div>
    );
}

export default ProductSearchTask;