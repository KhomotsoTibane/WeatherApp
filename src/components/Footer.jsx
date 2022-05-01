import React from 'react'

function Footer() {
    const date= new Date();
    let year = date.getFullYear();
    
  return (
  <footer>
        <span className="footer">© khomotso Tibane {year}</span>
    </footer>
  )
}

export default Footer