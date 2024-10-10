import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import '../styles/Carousel.css';



export function Carousel({ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts, loggedIn}) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error loading products:', error));
    }, []);

    const onAddProduct = product => {
        if (!loggedIn){
            window.alert("You must log in to order products")
        }else{
            if (allProducts.find(item => item.id === product.id)) {
                const products = allProducts.map(item => 
                    item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
                setCountProducts(countProducts + product.cantidad);
                setTotal(total + product.precioUnidad * product.cantidad);
                return setAllProducts([...products]);
            }

            setCountProducts(countProducts + 1);
            setTotal(total + product.precioUnidad * product.cantidad);
            setAllProducts([...allProducts, product]);
        }
    };

    const [popupContent, setPopupContent] = useState('');

    return (
        <div className="carousel">
            {productos.map(product => (
                <div key={product.id} className="carousel-item">
                    <div className="price-tag">{product.precioUnidad}Bs</div>
                    <Popup
                        trigger={
                            <div className="image-container">
                                <img
                                    src={product.imagenSRC}
                                    alt={product.nombreProducto}
                                    onMouseEnter={() => setPopupContent(product.descripcion)}
                                    onMouseLeave={() => setPopupContent('')}
                                    className="image"
                                />
                            </div>
                        }
                        closeOnDocumentClick
                        closeOnEscape
                        position="bottom"
                        on="hover"
                    >
                        <div className="popup-content">{popupContent}</div>
                    </Popup>
                    <h3 className="dish-name">{product.nombreProducto}</h3>
                    <button onClick={() => onAddProduct(product)}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}