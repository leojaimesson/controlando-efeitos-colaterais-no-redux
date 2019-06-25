import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Wrapper = styled.ul``;

const List = ({ children }) => <Wrapper>{children}</Wrapper>;

List.Item = ListItem;

export default List;
