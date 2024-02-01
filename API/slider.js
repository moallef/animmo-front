import * as axios from 'axios'


export async function getSlider() {
    const data = await axios.get(`https://animmo.ir/api/header_image/`);
    return data ? data.data : null;
}