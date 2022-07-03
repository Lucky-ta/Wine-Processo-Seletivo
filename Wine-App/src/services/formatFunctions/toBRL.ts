const convertToBRL = (value: number) => {
  const result = value.toFixed(2).replace(/(\d{1,3}|\G\d{3})(?=(?:\d{3})+(?!\d))/g, '$1,');
  return result;
};

export default convertToBRL;
