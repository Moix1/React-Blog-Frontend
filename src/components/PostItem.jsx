import React from 'react'
import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, desc, authorID, thumbnail}) => {
  const shortDescription = desc.length > 145 ? desc.substr(0, 145) + '..Read More' : desc;
  const postTitle = desc.length > 30 ? desc.substr(0, 30) + '...' : title;

  return (
    <article className='post'>
      <div className='post__thumbnail'>
        <img src={thumbnail} alt=""/>
      </div>

      <div className='post___content'>
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className='post__footer'>
          <PostAuthor/>
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  )
}

export default PostItem