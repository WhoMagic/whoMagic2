import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel className="CarouselImg">
                <Carousel.Item>
                    <img className="carouselImg"  width={500} height={500} alt="600x500" src={('https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')}/>
                    <Carousel.Caption>
                        <h3>User Friendly</h3>
                        <p>Easy to use and understand</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="600x500" src={('https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')}/>
                    <Carousel.Caption>
                        <h3>No download neccesary</h3>
                        <p>Just open up the browser and use in your favorite device</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="600x500" src={('https://images.pexels.com/photos/1080852/pexels-photo-1080852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')}/>
                    <Carousel.Caption>
                        <h3>Bringing people together</h3>
                        <p>Great to communicate with others</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;