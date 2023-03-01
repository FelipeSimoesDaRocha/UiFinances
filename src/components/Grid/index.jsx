import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const Grid = ({ itens, setItens }) => {

  // type item = {
  //   desc: string;
  //   amount: number;
  //   expense: any;
  //   id: number;
  // }

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };


  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40} >Valor</C.Th>
          <C.Th width={10} >Tipo</C.Th>
          <C.Th width={10} ></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <C.Tr key={index} item={item}>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td >
              {item.expense ? (
                <FaRegArrowAltCircleDown color="red" />
              ) : (
                <FaRegArrowAltCircleUp color="green" />
              )}
            </C.Td>
            <C.Td >
              <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
          </C.Tr>
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;