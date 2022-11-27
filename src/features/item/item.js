import React, { useState } from 'react'
import './item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Item(props) {
    let product = props.product
    const [itemPrice, setItemPrice] = useState('')

    const handleInput = function(event){
        setItemPrice(event.target.value)
    }

    const updateItem = function(){
        let updatedItem = {name: product.name, price: itemPrice}
        props.updateItem(updatedItem)
    }

    return (
        <Card className= 'card' style={{ width: '20rem' }}>
          <Card.Body >
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
            <Card.Text>
            <input
                    name='price'
                    type='number'
                    value={itemPrice}
                    onChange={handleInput}
                    placeholder='Enter new price: '>
            </input>

                </Card.Text>
            <Button onClick={updateItem} variant="primary">Update</Button>
            <Button className='buy-btn' onClick={() => props.deleteItem(product.name)}>BUY</Button>
          </Card.Body>
        </Card>
      );
}
