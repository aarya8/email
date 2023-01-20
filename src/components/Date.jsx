export const DateComponent = ({ data }) => {
  const date = new Date(data.date);
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  const ddmmyyyy =
    (dd <= 9 ? "0" + dd : dd) + "/" + (mm <= 9 ? "0" + mm : mm) + "/" + yyyy;

  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const am_pm = date.getHours() >= 12 ? "am" : "pm";
  hours = hours < 10 ? "0" + hours : hours;
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const time = hours + ":" + minutes + am_pm;
  return <span style={{ fontSize: "14px" }}>{ddmmyyyy + " " + time}</span>;
};
