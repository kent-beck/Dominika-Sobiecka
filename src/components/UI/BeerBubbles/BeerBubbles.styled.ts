import styled from "styled-components";

export const Bubbles = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Bubble = styled.div`
  width: 20px;
  height: 20px;
  background: #ffb200;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  position: absolute;

  &:nth-child(1) {
    transform: scale(0.9);
    opacity: 0.2;
    animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;
  }

  &:nth-child(2) {
    left: 200px;
    transform: scale(0.6);
    opacity: 0.5;
    animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;
  }

  &:nth-child(3) {
    left: 350px;
    transform: scale(0.8);
    opacity: 0.3;
    animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
  }

  &:nth-child(4) {
    left: 470px;
    transform: scale(0.75);
    opacity: 0.35;
    animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;
  }

  &:nth-child(5) {
    left: 150px;
    transform: scale(0.8);
    opacity: 0.3;
    animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;
  }


  @keyframes moveclouds {
    0% {
      top: 500px;
    }
    100% {
      top: -500px;
    }
  }
  @keyframes sideWays {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: 50px;
    }
  }
`;
