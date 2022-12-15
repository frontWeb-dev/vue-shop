import axios from 'axios';

export const data = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  const results = await response.data;
  console.log(results);
  return results;
};
