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
      
    </Container>
  );
};

export default Navbar;
