import { Carousel } from "antd";

export const HomeCarousel = () => {
    return (
        <Carousel autoplay className="custom-slider" dots={false}>
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" alt="1" height="500" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" alt="2" height="500" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" alt="3" height="500" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" alt="4" height="500" />
            <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" alt="5" height="500" />
        </Carousel>
    )
}