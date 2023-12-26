import * as axios from "axios";

export async function getBlog() {
  const blog = await axios.get(`http://127.0.0.1:8000/blog/`);
  return blog ? blog.data : null;
}
