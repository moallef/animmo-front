import * as axios from "axios";

export async function addToBasket(){
    const data = await axios.post('https://animmo.ir/api/cart/');
    return data ? data.data : null;
}
export async function getBasket(){
    const data = await axios.get('https://animmo.ir/api/cart/');
    return data ? data.data : null;
}