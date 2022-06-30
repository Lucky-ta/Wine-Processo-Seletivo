import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get(
    'https://wine-back-test.herokuapp.com/products',
  );
  const { data } = response;
  return data;
};

export default fetchProducts;
