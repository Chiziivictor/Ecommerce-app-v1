import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 40px;
  display: flex;
  position: relative;
  overflow: hidden;

  ${tablet({
    display: "none",
    visibility: "hidden",
    paddingTop: "50px",
  })}
`;
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff7f7;
  border-radius: 50%;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "3rem"};
  right: ${(props) => props.direction === "right" && "3rem"};
  margin: auto;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  padding-top: 10%;
`;
const Image = styled.img`
  height: 60%;
  margin-left: 200px;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-right: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 10px 0 50px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  opacity: 0.7;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
`;
const loadingStyle = {
  position: "relative",
  left: "50vw",
  top: "40%",
  fontWeight: "200",
};
const linkStyle = {
  color: "inherit",
  outline: "none",
  textDecoration: "none",
  cursor: "pointer",
};

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );
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
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {loading ? (
            <h1 style={loadingStyle}>Loading....</h1>
          ) : (
            <>
              {filter.map((product) => (
                <Slide key={product.id}>
                  <ImgContainer>
                    <Image src={product.image} />
                  </ImgContainer>

                  <InfoContainer>
                    <Title>FEATURED SALE</Title>
                    <Desc>GET FLAT 30% OFF FOR WOMEN'S CLOTHING</Desc>
                    <Button>
                      <NavLink to="/products" style={linkStyle}>
                        SHOP NOW
                      </NavLink>
                    </Button>
                  </InfoContainer>
                </Slide>
              ))}
            </>
          )}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </Container>
  );
};

export default Slider;
