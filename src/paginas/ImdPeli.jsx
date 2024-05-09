import React from 'react'
let img_path = "https://image.tmdb.org/t/p/w500";

function ImdPeli({image}) {
  return (
    <div><img src={img_path +image.file_path}></img></div>
  )
}

export default ImdPeli