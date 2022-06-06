function addZero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

const getActualDate = () => {
  const time = new Date();
  let year = time.getFullYear();
  let month = addZero(time.getMonth() + 1);
  let day = addZero(time.getDate());
  let hour = addZero(time.getHours());
  let min = addZero(time.getMinutes());
  let date = year + ". " + month + ". " + day + ".  - " + hour + ":" + min;
  return date;
};

export default getActualDate;
