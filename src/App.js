import './App.css';
import Carousel, { CarouselItem } from './components/Carousel/Carousel';
function App() {
  const sliderData = [
    {id: 1, title: 'Item 1', img: 'https://picsum.photos/1024/300?random=1'},
    {id: 2, title: 'Item 2', img: 'https://picsum.photos/1024/300?random=2'},
    {id: 3, title: 'Item 3', img: 'https://picsum.photos/1024/300?random=3'}
  ]
  return (
    <div className="App">
      <div className="head">
        <h1>Career Opportunities</h1>
        <Carousel>
          {sliderData?.map((data) => (
            <CarouselItem key={data?.id} data={data}></CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
