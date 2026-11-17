function CategoryFilter({
    categories,
    selectedCategory,
    setSelectedCategory
}) {

    return (
        <div className="category-filter">

            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All Categories</option>

                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category
                            .split("-")
                            .map(word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default CategoryFilter;