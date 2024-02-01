import * as axios from 'axios'


export async function getClassifications(){
    const category = await axios.get("https://animmo.ir/api/course_category/");
    return category ? category.data : null;
}