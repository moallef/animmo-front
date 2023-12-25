import * as axios from 'axios'


export async function getSlider() {
    const data = await axios.get(`http://localhost:8000/header_image/`);
    return data ? data.data : null;
}