import styled from "styled-components";
import { keyframes } from "styled-components";

const Logo = () => {
  return (
    <LogoDiv>
      <Cube>
        <Top></Top>
        <CubeDiv>
          <CubeSide i={0}></CubeSide>
          <CubeSide i={1}></CubeSide>
          <CubeSide i={2}></CubeSide>
          <CubeSide i={3}></CubeSide>
        </CubeDiv>
      </Cube>
      <LogoText>Dash Blog</LogoText>
    </LogoDiv>
  );
};

// styles

// this will wrap the whole logo
const LogoDiv = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// this is the rotations animation of the cube
const animate = keyframes`
    0%
    {
        transform: rotateX(-30deg) rotateY(0deg);
    }
    100%{
        transform: rotateX(-30deg) rotateY(360deg);
    }
`;

// this is the cube itself
const Cube = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  transform-style: preserve-3d;
  animation: ${animate} 4s linear infinite;
`;

// this is all the 5 sides of the cube (6th side is not mandatory)
const CubeDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

// this is all the sides of the cube except the top one
const CubeSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#00a9b9, #d7e6e6);
  border: 0.1px solid #3c494f;
  transform: rotateY(calc(90deg * ${(props) => props.i})) translateZ(15px);
`;

// this is the top side of the cube
const Top = styled(CubeDiv)`
  transform: rotateX(90deg) translateZ(15px);
  background: #00a9b9;
  border: 0.5px solid #3c494f;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: rgb(0, 213, 255);
    transform: translateZ(-50px);
    filter: blur(20px);
    box-shadow: 0 0 120px #00a9b933, 0 0 200px rgba(5, 71, 100, 0.4),
      0 0 300px rgba(0, 221, 255, 0.6), 0 0 400px rgba(0, 225, 255, 0.8),
      0 0 500px rgb(0, 208, 255);
  }
`;

const LogoText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3c494f;
  margin-left: 1.5rem;
`;

export default Logo;
