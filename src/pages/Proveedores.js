import React, { useEffect, useState } from 'react'
import { ApiExtra } from '../utils';

export default function Proveedores() {
    const [listaProveedores, setListaProveedores] = useState([]);
    const [datos, setDatos] = useState([]);
    const [textoBuscar, setTextoBuscar] = useState("");
    const [idproveedor, setIdproveedor] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [productos, setProductos] = useState("");
    const [nombres, setNombres] = useState("");
    const [cargo, setCargo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [telefono, setTelefono] = useState("");


    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiExtra + "proveedores.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                setListaProveedores(data);
                setDatos(data);
            });

    }

    const borrarCampos = () => {
        setEmpresa("")
        setProductos("")
        setNombres("")
        setCargo("")
        setDireccion("")
        setCiudad("")
        setPais("")
        setTelefono("")
    }

    const llenarCampos = (item) => {
        setIdproveedor(item.idproveedor)
        setEmpresa(item.empresa)
        setProductos(item.productos)
        setNombres(item.nombres)
        setCargo(item.cargo)
        setDireccion(item.direccion)
        setCiudad(item.ciudad)
        setPais(item.pais)
        setTelefono(item.telefono)
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead id='proveedores-encabezado'>
                    <tr>
                        <th campo="idproveedor">Código</th>
                        <th campo="empresa">Empresa</th>
                        <th campo="productos">Productos</th>
                        <th campo="nombres">Nombres</th>
                        <th campo="cargo">Cargo</th>
                        <th campo="direccion">Dirección</th>
                        <th campo="ciudad">Ciudad</th>
                        <th campo="pais">País</th>
                        <th campo="telefono">Teléfono</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(item =>
                        <tr key={item.idproveedor}>
                            <td>{item.idproveedor}</td>
                            <td>{item.empresa}</td>
                            <td>{item.productos}</td>
                            <td>{item.nombres}</td>
                            <td>{item.cargo}</td>
                            <td>{item.direccion}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.pais}</td>
                            <td>{item.telefono}</td>
                            <td><i className="bi bi-pencil-fill" onClick={() => llenarCampos(item)}
                                data-bs-toggle="modal" data-bs-target="#updateModal"></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const insertarFila = (event) => {
        event.preventDefault();
        document.querySelector("#insertModal .btn-close").click();
        const rutaServicio = ApiExtra + "proveedores-insertar.php";

        let formData = new FormData();
        formData.append("empresa", empresa);
        formData.append("productos", productos);
        formData.append("nombres", nombres);
        formData.append("cargo", cargo);
        formData.append("direccion", direccion);
        formData.append("ciudad", ciudad);
        formData.append("pais", pais);
        formData.append("telefono", telefono);

        fetch(rutaServicio, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                leerServicio();
                alert("Se ha agregado el proveedor " + empresa + ", con el código " + result);
            })
    }

    const actualizarFila = (event) => {
        event.preventDefault();
        document.querySelector("#updateModal .btn-close").click();
        const rutaServicio = ApiExtra + "proveedores-actualizar.php";

        let formData = new FormData();
        formData.append("idproveedor", idproveedor);
        formData.append("empresa", empresa);
        formData.append("productos", productos);
        formData.append("nombres", nombres);
        formData.append("cargo", cargo);
        formData.append("direccion", direccion);
        formData.append("ciudad", ciudad);
        formData.append("pais", pais);
        formData.append("telefono", telefono);

        fetch(rutaServicio, {
            method: "POST",
            body: formData
        }).then(() => {
            leerServicio();
            alert("Se ha actualizado el proveedor " + empresa + ", con el código " + idproveedor);
        })
    }

    const showInsertModal = () => {
        return (
            <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Proveedor</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <form onSubmit={(event) => insertarFila(event)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Empresa'
                                        value={empresa} required minLength="2"
                                        onChange={(event) => setEmpresa(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Productos'
                                        value={productos} required minLength="4"
                                        onChange={(event) => setProductos(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Nombres'
                                        value={nombres} required minLength="4"
                                        onChange={(event) => setNombres(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Cargo'
                                        value={cargo} required minLength="4"
                                        onChange={(event) => setCargo(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Dirección'
                                        value={direccion} required minLength="4"
                                        onChange={(event) => setDireccion(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Ciudad'
                                        value={ciudad} required minLength="4"
                                        onChange={(event) => setCiudad(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='País'
                                        value={pais} required minLength="4"
                                        onChange={(event) => setPais(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Teléfono'
                                        value={telefono} required minLength="4"
                                        onChange={(event) => setTelefono(event.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-danger">Guardar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

    const showUpdateModal = () => {
        return (
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Actualizar Proveedor</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(event) => actualizarFila(event)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" className='form-control'
                                        value={idproveedor} readOnly />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Empresa'
                                        value={empresa} required minLength="2"
                                        onChange={(event) => setEmpresa(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Productos'
                                        value={productos} required minLength="4"
                                        onChange={(event) => setProductos(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Nombres'
                                        value={nombres} required minLength="4"
                                        onChange={(event) => setNombres(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Cargo'
                                        value={cargo} required minLength="4"
                                        onChange={(event) => setCargo(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Dirección'
                                        value={direccion} required minLength="4"
                                        onChange={(event) => setDireccion(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Ciudad'
                                        value={ciudad} required minLength="4"
                                        onChange={(event) => setCiudad(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='País'
                                        value={pais} required minLength="4"
                                        onChange={(event) => setPais(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control' placeholder='Teléfono'
                                        value={telefono} required minLength="4"
                                        onChange={(event) => setTelefono(event.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-danger">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const buscar = () => {
        let datosFiltrados = listaProveedores.filter(item => {
            return textoBuscar === ""
                ? true
                : item["idproveedor"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["empresa"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["productos"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["nombres"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["cargo"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["direccion"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["ciudad"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["pais"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
                item["telefono"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1

        });
        setDatos(datosFiltrados);
    }

    return (
        <>
            <section className='padded'>
                <div className="container">
                    <h2>Proveedores</h2>
                    <div className="mb-3" id='buscador'>
                        <input type="text" placeholder='Ingrese expresión a buscar' className='form-control'
                            value={textoBuscar} onChange={(event) => setTextoBuscar(event.target.value)} />
                        <button className='btn btn-danger' onClick={() => buscar()} >Buscar</button>
                    </div>
                    <div className="mb-3">
                        <button className='btn btn-danger' onClick={() => borrarCampos()}
                            data-bs-toggle="modal" data-bs-target="#insertModal">
                            Agregar Proveedor
                        </button>
                    </div>
                    {dibujarTabla()}
                </div>
            </section>
            {showInsertModal()}
            {showUpdateModal()}
        </>
    )
}