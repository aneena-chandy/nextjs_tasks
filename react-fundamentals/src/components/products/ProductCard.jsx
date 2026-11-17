function ProductCard({ product }) {

    return (
        <div className="product-card">

            <div className="product-image">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                />
            </div>

            <div className="product-details">

                <span className="product-category">
                    {product.category}
                </span>

                <h3>{product.title}</h3>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-info">

                    <span className="product-price">
                        ${product.price}
                    </span>

                    <span className="product-rating">
                        ★ {product.rating}
                    </span>

                </div>

                <div className="product-stock">
                    {product.stock > 0
                        ? `${product.stock} items available`
                        : "Out of stock"}
                </div>

            </div>

        </div>
    );
}

export default ProductCard;