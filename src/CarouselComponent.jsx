import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNIzsa6dGOfAWIsMh-QhYq80_BDwnYHqQZA&usqp=CAU"
          alt="Second slide"
          style={{ height: "calc(100vh - 85px)" }}
        />
        <Carousel.Caption>
          <h3>Promoção com image</h3>
          <p>descrição da promoção ou algo da sua escolha</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://unsplash.it/1600/400?image=969"
          alt="Third slide"
          style={{ height: "calc(100vh - 85px)" }}
        />

        <Carousel.Caption>
          <h3>Promoção com image</h3>
          <p>descrição da promoção ou algo da sua escolha</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
