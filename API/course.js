import * as axios from 'axios'

export async function getCourse(){
    const data = await axios.get(`https://animmo.ir/api/course/`)
    return data ? data.data : null ;
}