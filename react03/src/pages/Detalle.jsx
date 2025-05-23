import React from 'react'
import { useParams } from 'react-router-dom'

const Detalle = () => {

    const param = useParams()

  return (
    <div className="text-center py-5">Detalle del producto {param.title}</div>
  )
}

export default Detalle