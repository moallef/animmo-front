import * as axios from 'axios'

export async function getCourse(){
    const data = await axios.get('http://127.0.0.1:8000/course/');
    return data ? data.data : null;
}