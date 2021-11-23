import React from 'react'
import Header from './components/Header/Header'
import {Button,Carousel,Image} from 'react-bootstrap';

function PaginaDOIS() {
    return (
        <div>
            <Header fontSize='20' titulo="Pagina DOIS"/>
            <Button variant="outline-danger" size="lg">Danger</Button>
            <Carousel variant="dark">
                <Carousel.Item>
                    <Image roundedCircle
                    src="logo192.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src="logo192.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src="logo192.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel> 
        </div>
    )
}

export default PaginaDOIS;