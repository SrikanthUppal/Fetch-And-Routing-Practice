// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogItem
  return (
    <li className="blog-Item">
      <Link to={`/blogs/${id}`} className="blogs-link">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="content-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img
                src={avatarUrl}
                alt={`avatar${id}`}
                className="avatar-image"
              />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
