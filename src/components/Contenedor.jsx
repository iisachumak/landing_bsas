import React from 'react'
import Card from './Card'
import CardSlider from './CardSlider'
import CarouselWithThumbnails from './CarouselWithThumbnails'

const Contenedor = () => {
    return (
        <div className="continer-card container text-center p-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <CardSlider />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <CarouselWithThumbnails />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <CardSlider />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <CarouselWithThumbnails />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <CardSlider />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <CarouselWithThumbnails />
                </div>
            </div>
        </div>
    )
}

export default Contenedor