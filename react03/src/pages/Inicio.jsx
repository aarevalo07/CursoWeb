import React from 'react'
import b1 from "../assets/img/b1.jpg";
import b2 from "../assets/img/b2.jpg";
import b3 from "../assets/img/b3.jpg";
import Carrusel from '../components/Carrusel'

const Inicio = () => {
  return (
    <div>
      <Carrusel />
      <div className="container">
        <h3 className="text-center py-4">Herramientas utilizadas</h3>
        <div className="row">
          <div className="col-md-6 text-end">
            <p><small className="fw-bold">React es una biblioteca de JavaScript utilizada para construir interfaces de usuario tanto en la web como en aplicaciones nativas.</small> Fue desarrollada por Facebook en 2013 y se ha convertido en una de las bibliotecas más populares para el desarrollo de interfaces de usuario.</p>
            <p>Es importante destacar que React no es un framework completo de JavaScript, sino una biblioteca enfocada en la capa de vista de una aplicación. Esto significa que React se puede utilizar junto con otras bibliotecas o frameworks para construir aplicaciones completas.</p>

            <a href="https://react.dev/" className="btn btn-primary" target="_blank">ir a la web oficicial de React</a>

          </div>
          <div className="col-md-6">
            <img src={b1} alt="" className="img-fluid img-thumbnail" />
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <img src={b2} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p><b>DummyJSON es una herramienta que proporciona una API REST falsa de datos JSON para el desarrollo,</b> pruebas y prototipos. Con DummyJSON, puedes obtener rápidamente datos realistas para tus proyectos de front-end sin tener que configurar un servidor complicado. Es perfecto para el desarrollo de front-end, la enseñanza, las pruebas y la creación de prototipos. Puedes explorar la documentación detallada en DummyJSON/Docs para obtener ejemplos rápidos.</p>
            <p>DummyJSON también ofrece endpoints específicos para diferentes recursos, como productos, publicaciones, usuarios, imágenes, autenticación, entre otros. Estos endpoints te permiten obtener datos específicos para tus necesidades de desarrollo.</p>
            <a href="https://dummyjson.com//" className="btn btn-primary" target="_blank">ir a la web oficicial de DummyJson</a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6 text-end">
            <p><b>Bootstrap es un framework de desarrollo web gratuito y de código abierto que facilita el proceso de creación de sitios web responsivos y orientados a dispositivos móviles.</b> Proporciona una colección de sintaxis para diseños de plantillas y estilos para una amplia variedad de componentes y elementos de interfaz. Bootstrap es ampliamente utilizado debido a su facilidad de uso, su estructura de archivos sencilla y su capacidad para adaptarse a diferentes tamaños de pantalla. Permite a los desarrolladores y diseñadores web crear sitios web de manera eficiente y garantiza que los elementos de la interfaz funcionen de manera óptima en todos los dispositivos.</p>

            <a href="https://getbootstrap.com/" className="btn btn-primary" target="_blank">ir a la web oficicial de Bootstrap</a>
          </div>
          <div className="col-md-6">
            <img src={b3} alt="" className="img-fluid" />
          </div>
        </div>
        <hr className="my-4" />
      </div>
    </div>
  )
}

export default Inicio