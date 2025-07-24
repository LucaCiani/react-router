import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    console.log(products);

    return (
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5">
            {products &&
                products.map((product) => {
                    return (
                        <div key={product.id} className="col">
                            <div className="card h-100">
                                <img
                                    className="card-img-top"
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>
                                    <p>
                                        <b>€ {product.price}</b>
                                    </p>
                                    <p>DESCRIPTION:</p>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
