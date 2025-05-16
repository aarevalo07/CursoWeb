//
import { useEffect, useState } from "react";


const API = "https://dragonball-api.com/api/characters?page=1&limit=100"
const Personajes = () => {


    //Estructura para leer API`s
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getDatos = async () => {
        try {
            const response = await fetch(API);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setDatos(data.items);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDatos();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Personajes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Personajes</h4>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h4 className="text-center py-4">Personajes {datos.length}</h4>

            <div className="row">
                {datos.map((item) => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card">

                            <div className="card-header p-0">
                                <img style={{
                                    height: "300px",
                                    objectFit: "cover",
                                    width: "100%",
                                    objectPosition: "top",
                                }} src={item.image} alt={item.name} />
                            </div>

                            <div className="card-body text-center">
                                <h3>{item.name}</h3>
                                <p>
                                    <b>Raza:</b> {item.race}<br />
                                    <b>Energia:</b> <span className="badge text-bg-warning"> {item.ki}</span>
                                </p>
                            </div>

                            <div className="card-footer text-center">
                                <a href="#" className="btn btn-outline-info btn-sm me-2" data-bs-toggle="modal" data-bs-target={`#${item.id}`} >Modal</a>
                                <a href="#" className="btn btn-outline-warning btn-sm">Detalle</a>
                            </div>

                        </div>
                        <div>

                            {/* Modal */}
                            <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{item.name}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img className="img-fluid" src={item.image} alt={item.name} />
                                                </div>
                                                <div className="col-8">
                                                    <h3>{item.name}</h3>
                                                    <p>
                                                        <b>Raza:</b> {item.race}<br />
                                                        <b>Energia:</b> <span className="badge text-bg-warning"> {item.ki}</span><br />
                                                        <b>Maxima Energia:</b> {item.maxKi}<br />
                                                        <b>Genero:</b> {item.gender}<br />
                                                    </p>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Personajes