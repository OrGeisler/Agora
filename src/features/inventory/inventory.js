import React from "react";
import {
  addProduct,
  removeProduct,
  changePrice,
  selectInventory,
} from "./inventorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './inventory.css'
import Item from "../item/item";


export default function Inventory() {
    const [productInputs, setProductInputs] = useState({name: "", price: ""})
    const inventory = useSelector(selectInventory);
    const dispatch = useDispatch();

    const deleteProduct = function(productName){
        dispatch(removeProduct(productName))
    }

    const addNewProduct = function(){
        let newProduct = {name: productInputs.name, price: productInputs.price}
        dispatch(addProduct(newProduct))
    }

    const updatePrice = function(product){
        dispatch(changePrice(product))
    }

    const handleInput = function(event){
        setProductInputs({...productInputs, [event.target.name]: event.target.value})
    }

    return (
        
        <div>
            <div className="title">Number Of Items: {inventory.length}</div>
            <div className="add-product-container">
                <input
                    type="text"
                    name="name"
                    value={productInputs.name}
                    placeholder="Item Name"
                    onChange={handleInput}
                ></input>

                <input
                    type="number"
                    name="price"
                    value={productInputs.price}
                    placeholder="Item Price"
                    onChange={handleInput}
                ></input>

                <button  onClick={addNewProduct}>Add</button>
            </div>
            <div >
                {inventory.map((product) => (
                    <Item key={product.name} product={product} deleteProduct={deleteProduct} updateProductPrice={updatePrice}/>
                ))}
            </div>
        </div>

    );
}