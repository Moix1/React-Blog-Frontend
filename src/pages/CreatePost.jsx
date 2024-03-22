import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')


  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image'
  ]

  const POST_CATEGORIES = ["Select Category", "Agriculture", "Art", "Education", "Technology", "Sports"]

  return (
    <section className='create-post'>
      <div className='container'>
        <h2>Create Post</h2>
        <p className='form__error-message'>Error Page</p>
        <form className='form create-post___form'>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name='category' id='category' value={category} onChange={e => setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <input type='file' name='thumbnail' onChange={e => setCategory(e.target.files[0])} accept='png, jpg, jpeg'/>
          <ReactQuill className='ql-editor' modules={modules} formats={formats} value={description} onChange={setDescription}/>
          <button type='submit' className='btn primary'>Create Post</button>  
        </form>
      </div>
    </section>
  )
}

export default CreatePost