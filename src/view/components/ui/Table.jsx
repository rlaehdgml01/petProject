import React from "react";
import Checkbox from '@mui/material/Checkbox';

export default function Table({ data, header }) {
  return (
    <table>
      <thead>
        <tr className="tr-style">
          {header.map((item, index) => {
            return <th className="th-style" key={index}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {/*map=for*/}
        {data.map((item, index) => {
          //map은 react에서 제일 많이 쓰임
          return (
            <tr className="tr-style" key={index}>
              <td>
                <Checkbox size="large"/>
              </td>
              <td>{item.number}</td>
              <td>{item.title}</td>
              <td>{item.user}</td>
              <td>{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

