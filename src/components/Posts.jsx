import React from 'react'

const Posts = () => {
  return (
    <div className='container'>
        {/* whats on your mind ? */}
        <div className='post'>
          <img src="https://external-preview.redd.it/Tz6nNKdrp6UlZhO26SIFcl8Tl1aH_eF7YLYK7A7N3RU.jpg?auto=webp&s=a9189138061b013f03beefdc3111d4dc97d97a1a" alt="" className='yoda'/>
          <input type="text" placeholder='On your mind , What is ?' className='bar'/>
        </div>
        <hr />
        {/* three icons live , photo, feelings */}
        <div className='icons'>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/hk5Kx2QFmmk.png" alt="" className='images' /> <p>Live Video</p>
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/4lAYcqypgif.png" alt="" className='images' /> Photo/video
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/2qUC865ACHv.png" alt="" className="images"/> Feeling/activity
        </div>
      
    </div>
  )
}

export default Posts
