import React, { useState } from 'react'
import './item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Item(props) {
    let product = props.product
    const [productPrice, setProductPrice] = useState('')

    const handleInput = function(event){
        setProductPrice(event.target.value)
    }

    const updateProductPrice = function(){
        let updatedProduct = {name: product.name, price: productPrice}
        props.updateProductPrice(updatedProduct)
    }

    return (
        <Card className= {'card'} style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
            <Card.Text>
            <input
                    name='price'
                    type='number'
                    value={productPrice}
                    onChange={handleInput}
                    placeholder='Enter new price: '>
            </input>

                </Card.Text>
            <Button onClick={updateProductPrice} variant="primary">Update</Button>
            <Button className='buy-btn' onClick={() => props.deleteProduct(product.name)}>BUY</Button>
          </Card.Body>
        </Card>
      );
}
