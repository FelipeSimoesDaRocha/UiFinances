import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

import { status, resumes } from "../../models/index"

const Resume = ({ income, expense, total }: status) => {
  const ResumeItem: resumes[] = [
    {
      title: "Entradas",
      Icon: FaRegArrowAltCircleUp,
      value: income
    },
    {
      title: "Saídas",
      Icon: FaRegArrowAltCircleDown,
      value: expense
    },
    {
      title: "Total",
      Icon: FaDollarSign,
      value: total
    }
  ]

  return (
    <C.Container>
      {ResumeItem.map(props => (
        <C.Content>
          <C.Header>
            <C.HeaderTitle>{props.title}</C.HeaderTitle>
            {<props.Icon />}
          </C.Header>
          <C.Total>{props.value}</C.Total>
        </C.Content>
      ))}
    </C.Container>
  );
};

export default Resume;