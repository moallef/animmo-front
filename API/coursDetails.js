import * as axios from 'axios'

export async function getCourseDetail(){
    const theDetail = await axios.get('https://animmo.ir/api/course_subcategory/');
    return theDetail ? theDetail.data : null;
}