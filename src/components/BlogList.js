import { Button } from "react-bootstrap"

const BlogList = ({blogs, title, handleDelete}) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <Button onClick={() => handleDelete(blog.id)}>Delet Blog</Button>
          <Button variant="info">bgutonh</Button>
          <Button  backgroundColor="white">Warning</Button>{' '}
        </div>
      ))}
    </div>
  )
}

export default BlogList
