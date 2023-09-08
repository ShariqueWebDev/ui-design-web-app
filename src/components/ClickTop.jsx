import React from 'react'

export default function ClickTop() {
    const ScrolltoTop = () => {
        window.scroll({
            top:"0",
            behavior:"smooth"
        })
    }
  return (
    <div className='ClickTop' onClick={ScrolltoTop}>
        <p className='innerDiv'>  &#813; </p>
    </div>
  )
}
