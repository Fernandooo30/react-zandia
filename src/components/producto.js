import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ProductDetail = () => {
    const [size, setSize] = useState('S');
    const [quantity, setQuantity] = useState(1);

    const handleSizeClick = (selectedSize) => {
        setSize(selectedSize);
    };

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
    };

    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img
                                className="card-img img-fluid"
                                src="img/polodecolor.png"
                                alt="Product"
                                id="product-detail"
                            />
                        </div>
                        <div className="row"></div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">Polo con Cuello Camisero</h1>
                                <p className="h3 py-2">S/. 30.00</p>
                                <p className="py-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <span className="list-inline-item text-dark">   
                                     &nbsp;Valoración  4.0 | 32 Comentarios
                                    </span>
                                </p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Marca:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted">
                                            <strong>Adidas</strong>
                                        </p>
                                    </li>
                                </ul>
                                <h6>Descripcion:</h6>
                                <p>
                                Este polo con cuello camisero color celeste es una prenda versátil y elegante, 
                                perfecta para cualquier ocasión. Confeccionado con materiales de alta calidad, 
                                ofrece comodidad y estilo. Su diseño clásico y su tono suave lo hacen ideal tanto 
                                para eventos casuales como formales.

                                </p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Colores :</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted">
                                            <strong>Celeste</strong>
                                        </p>
                                    </li>
                                </ul>
                                <h6>Especificacion:</h6>
                                <ul className="list-unstyled pb-3">
                                    <li>Material: Algodón 100%</li>
                                    <li>Cuello: Camisero</li>
                                    <li>Manga: Corta</li>
                                    <li>Lavado: A máquina en frío</li>
                                    <li>Detalles: Costuras reforzadas</li>
                                    <li>Ajuste: Corte clásico</li>
                                    <li>Botones: Dos</li>
                                </ul>
                                <form action="" method="GET">
                                    <input type="hidden" name="product-title" value="Activewear" />
                                    <div className="row">
                                        <div className="col-auto">
                                            <ul className="list-inline pb-3">
                                                <li className="list-inline-item">
                                                    Talla :
                                                    <input type="hidden" name="product-size" id="product-size" value={size} />
                                                </li>
                                                {['S', 'M', 'L', 'XL'].map(s => (
                                                    <li className="list-inline-item" key={s}>
                                                        <span
                                                            className={`btn btn-danger btn-size ${size === s ? 'active' : ''}`}
                                                            onClick={() => handleSizeClick(s)}
                                                        >
                                                            {s}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-auto">
                                            <ul className="list-inline pb-3">
                                                <li className="list-inline-item text-right">
                                                    Cantidad :
                                                    <input type="hidden" name="product-quantity" id="product-quantity" value={quantity} />
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="btn btn-success" onClick={() => handleQuantityChange(-1)}>-</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="badge bg-secondary" id="var-value">{quantity}</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="btn btn-success" onClick={() => handleQuantityChange(1)}>+</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Comprar</button>
                                        </div>
                                        <div className="col d-grid">
                                            <button type="submit" className="btn btn-danger btn-lg" name="submit" value="addtocart">Añadir al carrito</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
