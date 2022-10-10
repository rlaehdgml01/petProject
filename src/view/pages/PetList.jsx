import Checkbox from '@mui/material/Checkbox';
import React from "react";
import Table from "../components/ui/Table";

export default function PetList() {
  const petListData = [
    {
      number: 3,
      title: "나나",
      user: "여",
      date: "4살",
    },
    {
      number: 5,
      title: "까미",
      user: "남",
      date: "6살",
    },
    {
      number: 2,
      title: "뚱이",
      user: "남",
      date: "5살",
    },
    {
      number: 4,
      title: "봄순이",
      user: "여",
      date: "5살",
    },
  ];

  const petHeaderList = [
    <Checkbox size='large'/>,
    "no",
    "이름",
    "성별",
    "나이",
  ];
  return (
    <div>
      <Table data={petListData} header={petHeaderList} />
    </div>
  );
}
