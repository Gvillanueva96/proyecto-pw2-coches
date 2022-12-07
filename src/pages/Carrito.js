import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Carrito() {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    leerDatosCarrito();
  }, [])

  const leerDatosCarrito = async () => {
    let datosCarrito = await JSON.parse(sessionStorage.getItem("carrito"));
    setItemsCarrito(datosCarrito);
    calcularTotal(datosCarrito);

  }

  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Modelo</th>
            <th className='text-end'>Precio</th>
            <th className='text-center'>Cantidad</th>
            <th className='text-end'>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itemsCarrito.map(item =>
            <tr key={item.idvehiculo}>
              <td>{item.idvehiculo}</td>
              <td>{item.modelo}</td>
              <td className='text-end'>{parseFloat(item.precio).toFixed(2)}</td>
              <td className='text-center'>{item.cantidad}</td>
              <td className='text-end'>{(item.precio * item.cantidad).toFixed(2)}</td>
              <td><i className="bi bi-x-lg btnEliminar"
                onClick={() => eliminarItemCarrito(item)}></i></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr><th colSpan="4" className='text-end'>Total</th><th className='text-end'>S/ {total.toFixed(2)}</th></tr>
        </tfoot>
      </table>
    )
  }

  const eliminarItemCarrito = (item) => {
    let carritoMenos = itemsCarrito.filter(itemC => itemC.idvehiculo !== item.idvehiculo);
    setItemsCarrito(carritoMenos);
    sessionStorage.setItem("carrito", JSON.stringify(carritoMenos));
    calcularTotal(carritoMenos);
  }

  const vaciarCarrito = () => {
    sessionStorage.removeItem("carrito");
    setItemsCarrito(null);
    setTotal(0);
  }

  const calcularTotal = (datosCarrito) => {
    let totalCarrito = datosCarrito.reduce((acumulador, item) => acumulador + item.cantidad * item.precio, 0);

    setTotal(totalCarrito);
  }


  return (
    <section className='padded'>
      <div className="container">
        <h2>Carrito de compras</h2>
        <div className="row">
          <div className="col-md-10">
            {itemsCarrito === null || itemsCarrito.length === 0
              ? "El carrito está vacío"
              : dibujarTabla()}
          </div>
          <div className="col-md-2">
            <button className='btn btn-danger' onClick={() => vaciarCarrito()}>
              Vaciar carrito</button>
          </div>
        </div>
      </div>
    </section>
  )
}
