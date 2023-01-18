import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    padding: 1rem;
  }
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4%;

  button {
    width: 5%;
    aspect-ratio: 1/1;
    border-radius: 999px;
    background-color: black;
    box-shadow: 0.2rem 0.2rem 1rem black;
    font-size: 1rem;
    color: white;
  }
  img {
    max-width: 70%;
    max-height: 60vh;
    object-fit: contain;
    box-shadow: 0.2rem 0.2rem 1rem black;
  }
  span {
    display: block;
    width: 100%;
    padding: 1rem;
    text-align: center;
  }
`;

export { AppContainer, Slider };
