import styled from "styled-components";

type props = {
  width: number;
}

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: "center";
  width: ${(props: props) => (props.width ? props.width + "%" : "auto")};
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: "center";
  word-break: break-all;
  svg {
    width: 18px;
    height: 18px;
  }
`;