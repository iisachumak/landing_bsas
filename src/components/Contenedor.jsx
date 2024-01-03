import React from 'react'
import Card from './Card'

const Contenedor = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Contenedor