import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import '../CSS/customStyle.css'


function Navbar() {
  return (
    <Fragment >
      <div className='container'>
      <div className='navMain'>
        
             {/* <ul>
              <li> <Link to='/' href='/'>HOME</Link></li>
              <li> <Link to='/addrec' href='/addrec'>ADD RECORD</Link></li>
            </ul> */}

            <ul>
              <li><a href='/'>HOME</a></li>
              <li><a href='/addrec'>ADD</a></li>
            </ul>
    
           
        </div>
      </div>
        <hr></hr>
    </Fragment>
  )
}

export default Navbar
