import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcomepage'>

      <div class="welcome">
        Welcome
      </div>

      <div class="buttons">
        <a class="button" href="admin-login.html"><span>Admin</span></a>
        <br />
        <p>OR</p>
        <br />
        <a class="button" href="resident-login.html"><span>Resident</span></a>
      </div>



    </div>
  )
}

export default Welcome