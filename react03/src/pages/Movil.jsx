import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = 'https://dummyjson.com/products/category/smartphones';


const Movil = () => {

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
      setDatos(data.products);
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
        <h4>Error al cargar los Productos</h4>
        <p>{error}</p>
      </div>
    );
  }


  return (
    <div className="container">
      <h4 className="text-center py-4">Moviles {datos.length}</h4>
      <div className="row">
        {datos.map((item) => (
          <div key={item.id} className="col-md-4 col-xl-3 mb-4">
            <div className="card text-center h-100">
              <div className="card-header p-0">
                <img className="img-fluid" src={item.thumbnail} alt={item.title} />
              </div>
              <div className="card-body align-content-center">
                <h4 className="fs-2">{item.title}</h4>
                <p className="fs-5">
                  Precio: <span className="fw-semibold text-danger rounded">${item.price}</span><br />
                  Stock: <span className="fw-semibold text-success rounded">{item.stock}</span>
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-sm btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Modal</a>
                <Link to={`/detalle/${item.id}/${item.title}`} href="#" className="btn btn-sm btn-outline-info" >Detalles</Link>
              </div>
            </div>

            {/* Modal */}
            <div>
              <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img className="img-fluid" src={item.images[0]} alt={item.title} />
                        </div>
                        <div className="col-md-8">
                          <h4 className="fs-2">{item.title}</h4>
                          <p className="fs-5">
                            Precio: <span className="fw-semibold text-danger me-3">${item.price}</span>
                            Stock: <span className="fw-semibold text-success">{item.stock}</span><br />
                            Categoria: <span className="fw-semibold me-3 ">{item.category}</span>
                            Marca: <span className="fw-semibold text-info-emphasis">{item.brand}</span><br />
                            Tags: <span className="fw-semibold me-3 ">{item.tags.map((tag)=><i className="me-2">{tag}</i>)}</span>
                            Stock: <span className="fw-semibold">{item.stock}</span>
                          </p>
                          <h5>{item.description}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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

export default Movil