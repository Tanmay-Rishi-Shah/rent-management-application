import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div class='welcomepage'>
      <div class="welcome">
        Welcome
      </div>
      <div class="buttons">
        <Link to="/login"><button>Go to admin</button></Link>
        <br />
        <p>OR</p>
        <br />
        <Link to="/login"><button>Go to resident</button></Link>
      </div>
    </div>
  )
}

export default Welcome