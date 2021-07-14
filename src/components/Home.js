
import useFetch from '../useFetch'
import BlogList from './BlogList'

const Home = () => {
  const {data, isPending, error} = useFetch('http://localhost:8000/blogs')



  
  return (
    <div className="blog-list">
      { error && <div>{ error }</div> }
      { isPending && <div><h2>Loading, Please wait...</h2></div> }
      {data && <BlogList blogs={data} title="All Blogs"  />}

      {/* filter list items according to various conditions */}
      {data && <BlogList blogs={data.filter((blog) => blog.author === "mario")} title="Mario's blogs"/>}
    </div>
  )
}

export default Home
