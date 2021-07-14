import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlog] = useState(null)

  // initially set the loading state to true in order to show the loading message on the screen while fetching data from the server. 
  const [isPending, setisPending] = useState(true)

  const handleDelete = (id) => {
    setBlog(blogs.filter((blog) => blog.id !== id))
  }


  // useEffect runs everytime a render occurs
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBlog(data);

      // after fetching the data we need to stop showing loading message to the screen by setting isPending function state to false
      setisPending(false);
    })
  }, [])

  return (
    <div>
      { isPending && <div className="loader"></div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}

      {/* filter list items according to various conditions */}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" handleDelete={handleDelete} />}
    </div>
  )
}

export default Home
