import { useParams } from "react-router-dom";

const BlogPost = () => {
    let { id } = useParams();
    console.log({params: id})
    return (

        <h1>Blog Post Page at  for your-website.com</h1>
        );
  };
  export default BlogPost;