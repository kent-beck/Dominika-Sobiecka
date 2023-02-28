import styled from "styled-components";

export const ShopTable = styled.div`
  border: 1px solid rgba(0, 0, 0, .1);
  margin: 1rem;
  border-radius: 5px;

  @media (min-width: 730px) {
    max-width: 400px;
  }
`;

export const Table = styled.div`
  position: relative;

  button {
    z-index: 10;
    cursor: pointer;
  }

  td {
    text-align: center;
  }

  img {
    height: 130px;
  }

  th {
    min-width: 50px;
    width: 100px;
    font-weight: 700;
    padding: 9px 12px;
    line-height: 1.5em;
    color: #153552;
  }

  td {
    min-width: 32px;
    border-top: 1px solid rgba(0, 0, 0, .1);
    padding: 9px 12px;
    vertical-align: middle;
    line-height: 1.5em;
  }
`;

export const Summary = styled.div`
  @media (min-width: 730px) {
    position: absolute;
    top: 22%;
    right: 25%;
  }

  h3 {
    background-color: #153552;
    font-weight: 400;
    vertical-align: middle;
    color: white;
    display: block;
    text-align: center;
    margin-bottom: 1em;
    font-size: 1.25em;
    padding: 1em;
    border-radius: 5px;
  }
`;

export const WrapperCart = styled.div`
  margin: 6rem 3rem;
`;
