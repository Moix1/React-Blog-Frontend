import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeartBroken } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <h2>Page doesn't exists</h2>
        <p>Are you lost? <FaHeartBroken /> don't worry we can get you home!</p>
        <Link to="/" className='btn primary gobackhome'>Get Me Back Home</Link>
      </div>
    </section>
  )
}

export default ErrorPage