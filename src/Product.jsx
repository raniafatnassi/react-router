import React from 'react';


const Product = ({match,data}) => {
    var product = data.find(p=>p.id===match.params.productId);
    var productData;

    if(product)
        productData = <div>
            <h3>{product.name}</h3>
            <h3>{product.description} </h3>
            <hr/>
            <h4>{product.status}</h4>
        </div>;
    else
        productData = <h2>Sorry. Product doesen't exist</h2>;

    return (
        <div>
            <div>
                {productData}
            </div>
        </div>
    )
}

export default Product

