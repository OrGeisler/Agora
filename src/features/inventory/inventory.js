import React from "react";
import {
    addItem,
  removeItem,
  changePrice,
  selectInventory,
} from "./inventorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './inventory.css'
import Item from "../item/item";


export default function Inventory() {
    const [itemInputs, setitemInputs] = useState({name: "", price: ""})
    const inventory = useSelector(selectInventory);
    const dispatch = useDispatch();

    const handleInput = function(event){
        setitemInputs({...itemInputs, [event.target.name]: event.target.value})
    }

    const deleteItem = function(productName){
        dispatch(removeItem(productName))
    }

    const updatePrice = function(product){
        dispatch(changePrice(product))
    }

    const addNewItem = function(){
        let newProduct = {name: itemInputs.name, price: itemInputs.price}
        dispatch(addItem(newProduct))
    }

    return (
        
        <div>
            <div className="title">Number Of Items: {inventory.length}</div>
            <div className="add-product-container">
                <input
                    type="text"
                    name="name"
                    value={itemInputs.name}
                    placeholder="Item Name"
                    onChange={handleInput}
                ></input>

                <input
                    type="number"
                    name="price"
                    value={itemInputs.price}
                    placeholder="Item Price"
                    onChange={handleInput}
                ></input>

                <button  onClick={addNewItem}>Add</button>
            </div>
            <div >
                {inventory.map((product) => (
                    <Item key={product.name} product={product} deleteItem={deleteItem} updateItem={updatePrice}/>
                ))}
            </div>
        </div>

    );
}