import React, {useState} from "react";
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
export const CarouselItem = ({width, data}) => {
    const style = { width };
    return(
        <div className="carousel-item" style={style}>
            <img src={data.img} alt={data.title} />
        </div>
    );
};

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlayStatus, setAutoPlayStatus] = useState(false);
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if(newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };
    const updateAutoPlay = (status) => {
        setAutoPlayStatus(!status);
        let newStatus = !status;
        // if(newStatus) {
        //     setInterval(() => {
        //         updateIndex(activeIndex + 1); 
        //     }, 1000)
        // } else {
        //     clearInterval();
        // }
    };
    return(
        <div className="carousel">
            <button className="prevBtn" onClick={() => updateIndex(activeIndex - 1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button className="nextBtn" onClick={() => updateIndex(activeIndex + 1)}><FontAwesomeIcon icon={faAngleRight} /></button>
            <div className="inner"
            style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: '100%'});
                })}
            </div>
            <div className="indicators">
                {autoPlayStatus && <button className="inactive" onClick={() => {updateAutoPlay(autoPlayStatus)}}><FontAwesomeIcon icon={faPause} /></button>}
                {!autoPlayStatus && <button className="inactive" onClick={() => {updateAutoPlay(autoPlayStatus)}}><FontAwesomeIcon icon={faPlay} /></button>}
                {React.Children.map(children, (child, index) => {
                    return (
                        <button className={`${index === activeIndex ? 'active': 'inactive'}`} onClick={() => updateIndex(index)}>
                            {index + 1}
                        </button>
                    )
                })}
            </div>
        </div>
    )
};

export default Carousel;