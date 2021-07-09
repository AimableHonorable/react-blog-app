import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlog] = useState([
    {
      title: "Learn react",
      author: "mario",
      id: 1
    },
    {
      title: "my website",
      author: "lucy",
      id: 2
    },
    {
      title: "react native tutorial",
      author: "claire",
      id: 3
    }
  ])

  const handleDelete = (id) => {
    setBlog(blogs.filter((blog) => blog.id !== id))
  }


  // useEffect runs everytime a render occurs
  useEffect(() => {
    console.log("use effect");
  })

  return (
    <div>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />

      {/* filter list items according to various conditions */}
      <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" handleDelete={handleDelete} />
    </div>
  )
}

export default Home
