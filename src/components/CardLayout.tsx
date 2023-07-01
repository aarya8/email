import React from "react";
import { useData } from "../context/DataContext";
import { Card } from "./Card";

export const CardLayout = () => {
  const { filter, emailData, pageno } = useData();
  let data = emailData;
  switch (filter) {
    case "":
      data = emailData;
      break;
    case "read":
      data = emailData.filter((item) => item.read === true);
      break;
    case "unread":
      data = emailData.filter((item) => item.read === false);
      break;
    case "favorites":
      data = emailData.filter((item) => item.favorite === true);
      break;

    default:
      break;
  }

  if (pageno === 2 && data.length > 10) {
    data = data.slice(10);
  }
  if (pageno === 1 && data.length > 10) {
    data = data.slice(0, 10);
  }
  return (
    <>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </>
  );
};
