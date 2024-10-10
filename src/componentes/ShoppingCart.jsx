import '../styles/ShoppingCart.css';
import regresarIcon from '../assets/botonRegresar.svg';
import xItem from '../assets/xItem.svg';

import { useNavigate } from 'react-router-dom';

export function ShoppingCart({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) {
    const navigate = useNavigate();

    const retornar = () => {
        navigate('/');
    };
    const onDeleteProduct = (product) => {
        if (product.cantidad === 1) {
            const results = allProducts.filter(item => item.id !== product.id);
            setAllProducts(results);
        } else {
            const results = allProducts.map(item => 
                item.id === product.id ? { ...item, cantidad: item.cantidad - 1 } : item
            );
            setAllProducts(results);
        }
        setTotal(total - product.precioUnidad);
        setCountProducts(countProducts - 1);
    };

    const onPagar = () => {
        if (allProducts.length === 0) {
            alert("The cart is empty. Please add some products first!");
            return;
        }
    
        const order = allProducts.map(product => 
            `${product.cantidad}x ${product.nombreProducto} - ${product.cantidad * product.precioUnidad}Bs`
        ).join('\n');
    
        const mensage = `This is my order Aroma Restaurant!!\n\n${order}\n\nTotal: ${total}Bs`;
        const mensageCodificated = encodeURIComponent(mensage);
    
        const numberWhatsApp = '59161882040';
        const url = `https://api.whatsapp.com/send?phone=${numberWhatsApp}&text=${mensageCodificated}`;
    
        window.open(url, '_blank');
    };
    
    
    return (
        <div className='pageShoppingCart'>
            <button onClick={retornar} className='botonRegresar'>
                <img src={regresarIcon} alt="Regresar" />
                </button>
            <div className="logoConTexto">
                <br />
                
                {/*<img src={logoTexto} alt="Aroma Gourmet" />*/}
            </div>
            <div className="contenedorShoppingCart">
                <div className="tituloContenedor">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="contenedor">
                    <div className="tituloTabla">
                        <span></span>
                        <span></span>
                        <span>Prece</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </div>
                    <div className="shoppingCart">
                        <div className="listaItems">
                            {allProducts.map(product => (
                                <div className="item" key={product.id}>
                                    <img className='xItem' src={xItem} alt="Delete" onClick={() => onDeleteProduct(product)} />
                                    <img className="imagenShoppingCart" src={product.imagenSRC} alt={product.nombreProducto} />
                                    <span>{product.nombreProducto}</span>
                                    <div className="detalleItem">
                                        <span>{product.precioUnidad}Bs</span>
                                    </div>
                                    <div className="detalleItem">
                                        <span>{product.cantidad}</span>
                                    </div>
                                    <div className="detalleItem subtotalItem">
                                        <span>{product.cantidad * product.precioUnidad}Bs</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="resultItem">
                        <button onClick={onPagar}>Pay</button>
                        <div className="totalItems">
                            <div className="totalItem">
                                <span>TOTAL</span>
                                <span className="resultados">{total}Bs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}