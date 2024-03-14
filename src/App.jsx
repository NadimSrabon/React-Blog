import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/Header'

function App() {


  const [bookmark , setBookmark] = useState([]);

  const [readingTime , setReadingTime] = useState(0);


  function handleBookmark(blog){

    const newBookmark = [...bookmark,blog]
    setBookmark(newBookmark)

  }

  function handleReading(time ,id){

    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    const remainingBookmarks = bookmark.filter(bookmark => bookmark.id !== id)

    setBookmark(remainingBookmarks)

  }

  return (
    <>
    <Header></Header>

    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs handleBookmark={handleBookmark} handleReading={handleReading}></Blogs>
    <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
    </div>
    
    </>
  )
}

export default App
