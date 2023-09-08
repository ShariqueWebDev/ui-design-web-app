import React from 'react'

export default function section() {
  return (
    <div className="section">
      <img src="./img/waveImg.png" alt=""/>
      <div className="inner_div">
        <h2>What are CSS Animations</h2>
        <p>
          An animation lets an element gradually change from one style to another.
          You can change as many CSS properties you want, as many times as you want.
          To use CSS animation, you must first specify some keyframes for the animation.
          Keyframes hold what styles the element will have at certain times.
        </p>
        <div id="anchor">
          <a href="https://www.w3schools.com/css/css3_animations.asp">Read more</a>
        </div>
      </div>
    </div>
  )
}
