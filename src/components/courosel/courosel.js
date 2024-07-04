import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Courosel = () => {
  return (
    <div>
      <Carousel width={"500px"}>
                <div>
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Courosel


