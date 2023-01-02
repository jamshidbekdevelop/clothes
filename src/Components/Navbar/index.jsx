import React from "react";
import navbar from "../../Untils/navbar";
import Text from "../Generic/Text";
import { NavLink, useLocation } from "react-router-dom";
import {
  activeStyle,
  Container,
  Img,
  Input,
  InputDiv,
  Nav,
  Navs,
  NavSort,
  Search,
} from "./styled";
const Navbar = () => {
  const location = useLocation();
  return (
    <Container>
      <Nav>
        <InputDiv>
          <Input placeholder="Search" />
          <Search />
        </InputDiv>
        <Text weight={900} size={26}>
          TOMOR
        </Text>
        <Navs>
          {navbar.map(({ hidden, svg, id, path }) => {
            if (path === location.pathname) {
              hidden = true;
            }
            return (
              !hidden && (
                <NavLink key={id} to={path} style={activeStyle}>
                  <Img src={svg} />
                </NavLink>
              )
            );
          })}
        </Navs>
      </Nav>
      <NavSort>
        <Text size={13}>NEW</Text>
        <Text size={13}>DESIGNERS</Text>
        <Text size={13}>CLOTHES</Text>
        <Text size={13}>SHOES</Text>
        <Text size={13}>ACCESSORIES</Text>
        <Text size={13}>BEGS</Text>
        <Text size={13}>JEWLERY</Text>
        <Text size={13}>BEAUTY</Text>
        <Text size={13}>EDITORIAL</Text>
        <Text size={13}>SALE</Text>
      </NavSort>
    </Container>
  );
};

export default Navbar;
