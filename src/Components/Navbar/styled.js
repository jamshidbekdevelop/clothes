import styled from "styled-components";
import { ReactComponent as search } from "../../Assets/svg/search.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 40px;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  top: 20px;
  position: sticky;
`;
export const InputDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #000000;
  height: 26px;
  align-items: center;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #000000;
`;
export const Search = styled(search)``;
export const Navs = styled.div`
  display: flex;
  gap: 26px;
`;
export const Img = styled.img`
  width: 20px;
  height: 20px;
  color: black;
`;
export const activeStyle = ({ isActive }) => {
  return {
    textDecoration: "none",
  };
};

export const NavSort = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 40px;
  gap: 20px;
`;
