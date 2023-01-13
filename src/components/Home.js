import React from 'react'

const Home = () => {
    const blogs = [
    {title:'My New Website', body:'lorem ipsum....',author:'Mahi', id:1},
    {title:'My New Home', body:'lorem ipsum....',author:'John', id:2},
    {title:'My New Car', body:'lorem ipsum....',author:'Doe', id:3}
    ]
  return (
    <div className='home'>
    {blogs.map((blog)=>(
        <div className='blog_preview' key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
        </div>
    ))}

    </div>
  )
}

export default Home;