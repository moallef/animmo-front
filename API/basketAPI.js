import * as axios from "axios";

export async function getBasket(){
    const data = await axios.get('https://animmo.ir/api/cart/', {
        Cookie: 'sessionid=yuz5jkl7qx89sbsqs2l7eumn0yap25dp'
    });
    return data ? data.data : null;
}