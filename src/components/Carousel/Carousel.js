import React, {useState} from "react";
import './Carousel.css';
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
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = 0;
        } else if(newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    };
    return(
        <div className="carousel">
            <button className="prevBtn" onClick={() => updateIndex(activeIndex - 1)}>{`<`}</button>
            <button className="nextBtn" onClick={() => updateIndex(activeIndex + 1)}>{`>`}</button>
            <div className="inner"
            style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: '100%'});
                })}
            </div>
            <div className="indicators">
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