import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = 'https://dummyjson.com/products/category/laptops';


const Laptops = () => {

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
        <p>Cargando Productos...</p>
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
      <h4 className="text-center py-4">Laptops {datos.length}</h4>
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
                  Stock: <span className="fw-semibold text-info rounded">{item.stock}</span>
                </p>
              </div>
              <div className="card-footer">

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Laptops