import React from 'react'
import "./Select.scss";

function Select() {
  return (
    <>
      <main class="page-content">
        {/* <div className='wrapper-class'> */}


       
        <div class="card">
          <div class="content">
            <h2 class="title">Single Play</h2>
            <p class="copy">Practice and improve your skills in this single player mode</p>
            <button class="btn easy">Easy</button>
            <button class="btn med">Medium</button>
            <button class="btn hard">Hard</button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Multiplayer</h2>
            <p class="copy">Compete with others and aim for the win</p>
            <button class="btn easy">Easy</button>
            <button class="btn med">Medium</button>
            <button class="btn hard">Hard</button>
          </div>
        </div>
        {/* </div> */}
      </main>

    </>
  )
}


export default Select