import { useState } from 'react'  
import './App.css'
import Navbar from './components/navBar.jsx'
import Newsboard from './components/Newsboard.jsx'
import NewsItem from './components/NewsItem.jsx'


function App() {
  const [category, setcategory] = useState("general");


  return (
    <>
   <Navbar setcategory={setcategory} />
   <Newsboard category={category}/>
   <NewsItem/>
    
    </>
  )
}

export default App
