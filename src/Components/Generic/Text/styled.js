import styled from "styled-components";

export const Component = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? `${weight}` : "500")};
  font-size: ${({size}) => (size ? `${size}px` : "16px")};
  line-height: ${({size}) => (size ? `${size}px` : "16px")};
  color: ${({color}) => (color ? `${color}` : "#000000")};
`;
