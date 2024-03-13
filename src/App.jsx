import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/Header'

function App() {


  const [bookmark , setBookmark] = useState([]);


  function handleBookmark(blog){

    console.log("ok click hoise");

  }

  return (
    <>
    <Header></Header>

    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs handleBookmark={handleBookmark}></Blogs>
    <Bookmarks></Bookmarks>
    </div>
    
    </>
  )
}

export default App
