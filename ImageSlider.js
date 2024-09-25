import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1616070152767-3eb99cf10509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       <h1>I have always imagined that Paradise will be a kind of a library.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                       <h1>The only things that you absolutely have to know,is the location of the library.</h1> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1608454367599-c133fcab1245?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>A library is not a luxury but one of the necessities of lie.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
