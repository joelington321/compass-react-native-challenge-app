import axios from 'axios';
import urls from '../../global/urls';

export const fetchProducts = () => {
    return axios.get(urls.fakestoreProducts);
};
