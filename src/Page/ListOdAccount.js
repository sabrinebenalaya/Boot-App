import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "../Components/CardUser";
import "../App.css";

function ListOdAccount() {
  const [acoun, setAcoun] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos/";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setAcoun([...res.data]);
        console.log(acoun)
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className="accountcard">
    { acoun.map((acc)=>(
        <CardUser key={acc.id} account={acc}/>
        ))}
    </div>
  );
}

export default ListOdAccount;
