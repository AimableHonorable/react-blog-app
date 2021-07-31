import { useState } from 'react'
import useFetch from '../useFetch'
import BlogList from './BlogList'
import Pagination from './Pagination'

const Home = () => {
  const {data, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  // pagination logic
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = number => setCurrentPage(number)
  
  return (

    <div className="blog-list">
      { error && <div>{ error }</div> }
      { isPending && <div className="loader"></div> }
      {data && <BlogList blogs={currentPosts} title="All Blogs"  />}
      <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
      {/* filter list items according to various conditions */}
      {/* {data && <BlogList blogs={data.filter((blog) => blog.author === "mario")} title="Mario's blogs"/>} */}
    </div>
  )
}

export default Home
