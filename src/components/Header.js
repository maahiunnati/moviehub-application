import React from 'react'
import './Header.css'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
function Header() {
  return (
      <span onClick={()=>window.scroll(0,0)} className='header'>  
      <div className="wavy">
        <MovieCreationIcon/>
        🎬 Movies Hub 🎥
      <MovieCreationIcon/>
    </div>
    </span>
  )
}

export default Header
