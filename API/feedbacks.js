import * as axios from 'axios'

export async function getFeedbacks(){
    const feedback = await axios.get(`https://animmo.ir/api/feedback/`)
    return feedback ? feedback.data : null ;
}
export async function sendFeedbacks(){

}