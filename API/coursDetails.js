import * as axios from 'axios'

export async function getCourseDetail(){
    const theDetail = await axios.get('http://127.0.0.1:8000/course_subcategory/');
    return theDetail ? theDetail.data : null;
}