import * as axios from 'axios'


export async function getClassifications(){
    const category = await axios.get("http://127.0.0.1:8000/course_category/");
    return category ? category.data : null;
}