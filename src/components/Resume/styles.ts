import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 15px 2rem;
  width: 30%;
  box-shadow: 0px 0px 20px 0px #00000069;

  @media (max-width: 750px) {
    width: 20%;
    p {
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }
    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;