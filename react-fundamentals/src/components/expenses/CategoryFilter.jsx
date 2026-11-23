import { categories } from "../../data/expenseData";

function CategoryFilter({
    selectedCategory,
    onCategoryChange
}) {

    return (

        <div className="category-filter">

            <label>Filter by Category</label>

            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >

                <option value="All">All Categories</option>

                {categories.map(category => (

                    <option key={category} value={category}>
                        {category}
                    </option>

                ))}

            </select>

        </div>
    );
}

export default CategoryFilter;