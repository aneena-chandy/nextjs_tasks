// This component handles the controlled search input.

function ProductSearch({ search, setSearch }) {

    return (
        <div className="product-search">
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
                <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="clear-search"
                    aria-label="Clear search"
                >
                    ×
                </button>
            )}
        </div>
    );
}

export default ProductSearch;