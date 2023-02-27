import styled from "styled-components";

export const BeerItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BeerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 1rem;
  box-shadow: 0 16px 24px 0 rgb(0 0 0 / 12%);
  padding: 3rem;
  border-radius: 15px;
  width: 250px;
  height: 500px;
  cursor: pointer;
  z-index: 10;
`;

export const BeerName = styled.p`
  font-size: 26px;
  font-weight: bold;
`;


export const BeerImg = styled.img`
  height: 350px;
`;

export const BeerAbv = styled.p`
  color: #86957F;
  font-size: 26px;
  font-weight: bold;
  margin: 15px;

  span {
    color: black;
    font-size: 16px;
    font-weight: normal;
  }
`;

export const BeerTagline = styled.p`
  font-size: 16px;
  margin: 0;
  font-weight: 200;
`;

export const ButtonsBeers = styled.div`
  margin: 2rem auto;
  text-align: center;

  button {
    padding: 0.5rem 3rem;
    margin: 1rem;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
