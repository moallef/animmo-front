import * as axios from "axios";

export async function getBlog() {
  const blog = await axios.get(`https://animmo.ir/api/blog/`);
  return blog ? blog.data : null;
}
