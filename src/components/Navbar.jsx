import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  width: 170vh;
  height: 70px;
  margin: 0 10%;
  background-color: white;
  z-index: 10;
`;
const Wrapper = styled.div`
  padding: 0.7rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0.7rem 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: none;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin: auto 1rem;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 2rem;
`;
const linkStyle = {
  color: "inherit",
  outline: "none",
  textDecoration: "none",
  cursor: "pointer",
};

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <NavLink to="/" style={linkStyle}>
              I-SHOP
            </NavLink>
          </Logo>
        </Left>
        <Right>
          <Language></Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>

          <MenuItem>
            <NavLink to="/products" style={linkStyle}>
              PRODUCTS
            </NavLink>
          </MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
