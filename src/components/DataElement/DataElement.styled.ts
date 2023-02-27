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
