import { useEffect, useState } from "react";
import "./App.css";
import { AppContainer, Slider } from "./styles";

export default function App() {
  const [images, setImages] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("https://picsum.photos/v2/list");
      const json = await response.json();
      const images = json.map((e: any) => e.download_url);
      setImages(images);
    };
    fetchImages();
  }, []);

  const [currentImg, setCurrentImg] = useState(0);

  const handlerPrevious = () => {
    if (currentImg === 0) {
      setCurrentImg(images.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };
  const handlerNext = () => {
    if (currentImg === images.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  return (
    <AppContainer className="App">
      <h1>Carousel</h1>
      <Slider>
        <button onClick={handlerPrevious}>⬅</button>
        <img
          className="slide"
          src={images[currentImg]}
          alt={images[currentImg]}
        />
        <button onClick={handlerNext}>⮕</button>
        <span>{`${currentImg + 1} of ${images.length}`}</span>
      </Slider>
    </AppContainer>
  );
}
