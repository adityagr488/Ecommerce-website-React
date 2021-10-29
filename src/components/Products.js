import React from 'react'
import ProductsList from './ProductsList'

const Products = (props) =>{
    let updatedList;
    const product = ProductsList();
    if(props.category==='all'){
        updatedList =  product;
    }
    else{
        updatedList = product.filter((currItem)=>{
            return currItem.category === props.category;
        })
    }
    return (
        <>
            {
                updatedList.map((currProduct,index)=>{
                    return (
                        <div className={currProduct.myclass} key = {index}>
                            <div className="container">
                                <h1 className="text-center">{currProduct.productName}</h1>
                                <div className="row row-content">
                                    {
                                        currProduct.item.map((curr) =>{
                                            return (
                                                <div className="col text-center" key={curr.id}>
                                                    <img src={curr.img} alt=""/>
                                                    <h3 className="brandname">{curr.brand}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Products;