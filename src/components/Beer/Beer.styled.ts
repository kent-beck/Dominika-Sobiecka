import styled from "styled-components";

export const Mug = styled.div`
  top: 36%;
  right: 30%;
  position: absolute;
  width: 50px;
  height: 100px;
  border-style: none solid solid solid;
  border-width: 0 5px 5px 5px;
  border-color: #e2e2e2;
  border-radius: 0px 0px 60px 60px;
  transform: rotate(7deg);
`;

export const Ear = styled.div`
  position: absolute;
  border: 4px solid #e2e2e2;
  width: 20px;
  height: 36px;
  top: 22px;
  right: -31px;
  border-radius: 40px;

  &::before {
    display: block;
    content: '';
    background: transparent;
    position: absolute;
    top: 3px;
    left: 0;
    width: 20px;
    height: 30px;
    border-radius: 30px;
  }
`;

export const Liquid = styled.div`
  background: #f7a22d;
  position: relative;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(to bottom, rgba(255, 197, 120, 1) 0%, rgba(251, 157, 35, 1) 100%);
  border-radius: 0px 0px 60px 60px;
`;

export const Shine = styled.div`
  display: block;
  position: absolute;
  background: #fff;
  width: 6px;
  height: 52px;
  top: 26px;
  left: 8px;
  border-radius: 20px;
  opacity: 0.4;

  &::after {
    display: block;
    content: '';
    position: absolute;
    background: #fff;
    width: 6px;
    height: 52px;
    top: 0px;
    left: 27px;
    border-radius: 20px;
  }

  &::before {
    display: block;
    content: '';
    position: absolute;
    background: #fff;
    width: 6px;
    height: 52px;
    top: 0px;
    left: 13px;
    border-radius: 20px;
  }
`;

export const Foam = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 1px;
`;

export const FoamWhite = styled.div`
  display: block;
  background: #fff;
  border-radius: 30px;
  height: 19px;
  width: 19px;
  position: absolute;

  &:nth-child(1) {
    top: 16px;
    left: -7px;
  }

  &:nth-child(2) {
    top: 17px;
    left: 36px;
  }

  &:nth-child(3) {
    width: 25px;
    height: 25px;
    border-radius: 40px;
    top: 12px;
    left: 1px;
  }

  &:nth-child(4) {
    width: 17px;
    height: 17px;
    border-radius: 45px;
    top: 7px;
    right: 6px;
  }

  &:nth-child(5) {
    top: 16px;
    right: 8px;
  }

  &:nth-child(6) {
    top: 3px;
    right: 21px;
  }
`;
