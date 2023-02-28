import styled from "styled-components";

export const BeerItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

export const BeerItemColImg = styled.div`
  width: 30%;
  text-align: center;

  img {
    height: 400px;
  }
`;

export const BeerItemColText = styled.div`
  width: 70%;
`;

export const ButtonsToCart = styled.div`
  position: relative;

  a {
    color: white;
    text-underline: none;
  }

  button {
    background-color: rgb(103, 161, 248);
    border: none;
    padding: 12px 16px;
    color: white;
    box-shadow: 1px 1px 5px #929090;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    z-index: 10;
    margin-right: 1rem;

    :hover {
      background-color: rgb(84, 218, 149);
    }
  }
`;
