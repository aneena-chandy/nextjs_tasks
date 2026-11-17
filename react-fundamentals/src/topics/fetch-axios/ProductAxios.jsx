import { useEffect, useState } from "react";
import axios from "axios";

function ProductAxios() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get("https://dummyjson.com/products")
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error("Error:", error);
            });

    }, []);

    return (
        <div>
            <h2>Product List</h2>

            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductAxios;