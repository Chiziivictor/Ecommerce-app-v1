import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile, tablet } from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: white;
  z-index: 10;
`;
const Wrapper = styled.div`
  margin: 0 10%;
  padding: 0.7rem 0;
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
  ${tablet({ display: "none" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;

  ${mobile({ fontSize: "20px" })}
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
  ${mobile({ margin: "2px", fontSize: "10px" })}
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
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>

          <MenuItem>
            <NavLink to="/products" style={linkStyle}>
              PRODUCTS
            </NavLink>
          </MenuItem>
          <MenuItem style={{ padding: "0 10px" }}>SIGN IN</MenuItem>
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
