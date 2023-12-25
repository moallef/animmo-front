import * as axios from 'axios'

export async function getFeedbacks(){
    const data = await axios.get(`http://localhost:8000/feedback/`)
    return data ? data.data : null ;
}