import React from "react";
import styled from "styled-components";

const Wrapper = styled.section``;

const Title = styled.h2``;

const Hero = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Hero;
