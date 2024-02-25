import * as axios from 'axios'

export async function getCourse(){
    const feedback = await axios.get(`https://animmo.ir/api/course/`)
    return feedback ? feedback.data : null ;
}