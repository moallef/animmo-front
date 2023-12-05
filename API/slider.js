import * as axios from 'axios'


export async function getSlider() {
    const data = await axios.get("http://127.0.0.1:8000");
    return data ? data.data[0] : null;
}