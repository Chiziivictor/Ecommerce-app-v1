import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  margin: 0 10%;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  return (
    <Container>
      {filter.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
