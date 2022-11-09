import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../assets/banner01.jpg';
import banner2 from '../../../assets/banner02.jpg';
import banner3 from '../../../assets/banner03.jpg';
import './Banner.css';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={60000}>
                <img
                    className="d-block w-100 h-100 slider-image"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='banner-heading'>Pre Wedding Shoot</h3>
                    <p className='banner-pra'>We truly believe that couples in love have a distinct glow on them!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={60000}>
                <img
                    className="d-block w-100 h-100 slider-image"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='banner-heading'>Wedding Photoshoot</h3>
                    <p className='banner-pra'>While weddings are seen as glamorous and festive celebrations.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100 slider-image"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className='banner-heading'>Engagement Party</h3>
                    <p className='banner-pra'>Before you walk down the aisle to begin your new life together.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;