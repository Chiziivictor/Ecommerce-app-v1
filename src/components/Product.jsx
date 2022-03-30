import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;
const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const ImageContainer = styled.div`
  z-index: 2;
`;
const Image = styled.img`
  height: 250px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  object-fit: contain;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;
const nameStyle = {
  position: "absolute",
  top: "315px",
  left: "20px",
  width: "150px",
};
const priceStyle = {
  position: "absolute",
  top: "315px",
  left: "250px",
  width: "150px",
};
const linkStyle = {
  color: "inherit",
  outline: "none",
  textDecoration: "none",
  cursor: "pointer",
};

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <ImageContainer>
        <Image src={item.image} />
      </ImageContainer>
      <Info>
        <Icon>
          <NavLink to={`/products/${item.id}`} style={linkStyle}>
            <ShoppingCartOutlined />
          </NavLink>
        </Icon>
        <Icon>
          <NavLink to={`/products/${item.id}`} style={linkStyle}>
            <SearchOutlined />
          </NavLink>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Details>
        <h4 style={nameStyle}>{item.title.substring(0, 12)}</h4>
        <p style={priceStyle}>${item.price} </p>
      </Details>
    </Container>
  );
};

export default Product;
