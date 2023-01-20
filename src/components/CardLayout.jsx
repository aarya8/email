import { useEmail } from "../context/EmailContext";
import { Card } from "./Card";

export const CardLayout = () => {
  const { filter, apiData, pageno } = useEmail();
  let data;
  switch (filter) {
    case "":
      data = apiData;
      break;
    case "read":
      data = apiData.filter((item) => item.read === true);
      break;
    case "unread":
      data = apiData.filter((item) => item.read === false);
      break;
    case "favorites":
      data = apiData.filter((item) => item.favorite === true);
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
