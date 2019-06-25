import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Menu;
