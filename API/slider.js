import axios from 'axios'


export async function getSlider() {
    const data = axios.get(`${process.env.BASE_URL}`);
    return Response.data;
}