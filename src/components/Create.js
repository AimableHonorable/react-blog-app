import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const blog = {title, author, body}
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(blog)
      
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="blog-details">
      <h2>New blog</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Blog title:</label></td>
              <td>
                <input 
                  type="text" 
                  required 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                </td>
            </tr>
            <tr>
              <td>
                <label>Blog Author:</label>
              </td>
              <td>
                <input 
                  type="text" 
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Blog Body:</label>
              </td>
              <td>
                <textarea 
                  cols="30" 
                  rows="10" 
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button>Add blog</button>
              </td>
            </tr>
          </tbody>
          
        </table>
      </form>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Create
