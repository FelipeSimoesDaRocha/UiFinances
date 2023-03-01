import React from "react";
import * as C from "./styles";
import { itensProp, prop } from "../../models";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const Grid = ({ itens, setItens }: prop) => {
  const onDelete = (id: number) => {
    const newArray = itens.filter((transaction) => transaction.id !== id);
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
        {itens.map((prop: itensProp, index: number) => (
          <C.Tr key={index}>
            <C.Td>{prop.desc}</C.Td>
            <C.Td>{prop.amount}</C.Td>
            <C.Td >
              {prop.expense ? (
                <FaRegArrowAltCircleDown color="red" />
              ) : (
                <FaRegArrowAltCircleUp color="green" />
              )}
            </C.Td>
            <C.Td >
              <FaTrash onClick={() => onDelete(prop.id)} />
            </C.Td>
          </C.Tr>
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;