import React, { useState } from 'react';

const CarritoCompras = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 }
  ]);

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Carrito de Compras</h1>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Productos Disponibles</h2>
          <ul className="list-group">
            {productos.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                {producto.nombre}
                <span className="badge bg-primary rounded-pill">${producto.precio}</span>
                <button className="btn btn-success" onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Carrito</h2>
          <ul className="list-group">
            {carrito.map((producto) => (
              <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
                {producto.nombre}
                <span className="badge bg-primary rounded-pill">${producto.precio}</span>
                <button className="btn btn-danger" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p className="mt-3">Total: <span className="badge bg-success">${calcularTotal()}</span></p>
          <button className="btn btn-primary" onClick={() => alert('Ir a confirmar pago')}>Confirmar Pago</button>
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;
