import React from 'react'
import Card from './Card'
import CardSlider from './CardSlider'

const Contenedor = () => {
    return (
        <div className="continer-card container text-center">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <CardSlider />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Contenedor