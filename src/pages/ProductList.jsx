import styled from "styled-components";
import Products from "../components/Products";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 10% auto 30px;
  font-size: 50px;
`;

const ProductList = () => {
  return (
    <Container>
      <Title>Latest Products</Title>
      <Products />
    </Container>
  );
};

export default ProductList;
