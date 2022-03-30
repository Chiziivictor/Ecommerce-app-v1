import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  margin: 0 10%;
  display: flex;
  flex-wrap: wrap;
`;
const loadingStyle = {
  position: "relative",
  left: "50%",
  top: "100%",
  fontWeight: "200",
};

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <h1 style={loadingStyle}>Loading....</h1>
      ) : (
        <>
          {filter.map((product) => (
            <Product item={product} key={product.id} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Products;
