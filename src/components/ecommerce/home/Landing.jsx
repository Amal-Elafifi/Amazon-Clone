import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Landing () {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="h-[200px]">
            <Carousel className='max-h-[600px] overflow-hidden'>
            <Carousel.Item>
                <video src="/public/assets/videos/1.mp4" type="video/mp4" width="100%"  autoPlay muted loop onLoadedData={(e) => e.target.play()}  
                />
            </Carousel.Item>
            <Carousel.Item>
                <video src="/public/assets/videos/2.mp4" type="video/mp4" width="100%"  autoPlay muted loop onLoadedData={(e) => e.target.play()}  
                />
            </Carousel.Item>
            <Carousel.Item>
             <video src="/public/assets/videos/3.mp4" type="video/mp4" width="100%"  autoPlay muted loop onLoadedData={(e) => e.target.play()}  
             />
            </Carousel.Item>
        </Carousel>

        </div>
  
    )
}


export default Landing;