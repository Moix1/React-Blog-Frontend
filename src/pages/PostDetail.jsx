import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className='post-detail__buttons'>
            <Link to={`/posts/wasa/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/asasa/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>Post title goes here</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt=""/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti repudiandae quasi enim aperiam quam debitis impedit perferendis sequi officia, animi magnam eveniet pariatur commodi inventore voluptatibus quidem ab, labore dolores obcaecati sapiente soluta laudantium atque! Ullam quos dolorem dignissimos.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat laboriosam numquam magnam quisquam aut ratione vel recusandae veniam officia ea eligendi natus placeat dolore, explicabo perspiciatis blanditiis ab doloremque earum neque ipsam aperiam repudiandae ad amet illum. Autem amet omnis voluptates animi cum tenetur quia qui porro? Sint, voluptatibus at?</p>
      </div>
    </section>
  )
}

export default PostDetail