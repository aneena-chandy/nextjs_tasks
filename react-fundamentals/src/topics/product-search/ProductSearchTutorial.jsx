function ProductSearchTutorial() {

    return (
        <div className="topic-content">

            <h2>Product Search with API</h2>

            <p>
                Learn how to fetch data from an API, search products,
                filter categories and manage asynchronous operations
                using React Hooks.
            </p>

            <h3>1. Fetch API using useEffect</h3>

            <p>
                useEffect allows us to perform side effects such as
                fetching data from an external API.
            </p>

            <pre>
{`useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => setProducts(data.products));
}, []);`}
            </pre>

            <h3>2. Controlled Components</h3>

            <p>
                A controlled component is a form element whose value
                is managed by React state.
            </p>

            <pre>
{`const [search, setSearch] = useState("");

<input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>`}
            </pre>

            <h3>3. Async / Await</h3>

            <p>
                async and await make asynchronous JavaScript operations
                easier to read and manage.
            </p>

            <pre>
{`const fetchProducts = async () => {
    const response = await fetch(
        "https://dummyjson.com/products"
    );

    const data = await response.json();

    setProducts(data.products);
};`}
            </pre>

            <h3>4. Debouncing</h3>

            <p>
                Debouncing delays an operation until the user stops
                triggering it for a specified period.
            </p>

            <pre>
{`useEffect(() => {
    const timer = setTimeout(() => {
        fetchProducts();
    }, 500);

    return () => clearTimeout(timer);
}, [search]);`}
            </pre>

            <h3>5. AbortController</h3>

            <p>
                AbortController cancels an ongoing fetch request.
                This is useful when a user changes the search text
                before the previous request finishes.
            </p>

            <pre>
{`useEffect(() => {
    const controller = new AbortController();

    fetch(url, {
        signal: controller.signal
    });

    return () => controller.abort();
}, [search]);`}
            </pre>

            <h3>6. Important concepts to practise</h3>

            <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>Controlled Components</li>
                <li>Fetch API</li>
                <li>Async / Await</li>
                <li>Debouncing</li>
                <li>AbortController</li>
                <li>Conditional Rendering</li>
                <li>Array map() and filter()</li>
            </ul>

        </div>
    );
}

export default ProductSearchTutorial;