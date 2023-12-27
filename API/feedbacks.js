import * as axios from 'axios'

export async function getFeedbacks(){
    const feedback = await axios.get(`http://localhost:8000/feedback/`)
    return feedback ? feedback.data : null ;
}