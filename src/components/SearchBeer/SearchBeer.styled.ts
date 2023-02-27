import styled from "styled-components";

export const Search = styled.div`
  position: relative;
  z-index: 20;
  margin: 1rem 1.2rem;
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  padding: 5px 7px 5px 5px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;

  button {
    background-color: rgb(103, 161, 248);
    border: none;
    padding: 12px 16px;
    color: white;
    box-shadow: 1px 1px 5px #929090;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;

    :hover {
      background-color: rgb(84, 218, 149);
    }
  }
`;
