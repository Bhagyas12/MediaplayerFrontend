import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='row w-100 mt-5 p-3'>
       <div className="col-md-4 p-4 ms-md-5">
       <h4 ><FontAwesomeIcon className='text-warning me-3' icon={faVideo}/>Media Player</h4>
       <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam autem, veniam optio illo earum esse architecto eveniet neque odio aperiam, recusandae omnis quas labore quo facere alias dolore explicabo! Voluptate.</p>
       </div>
       <div className="col-md-2 p-4 justify-content-center md-d-flex">
        <div>
            <h4>Links</h4>
            <p className='mt-4'><Link to={'/'}>Landing Page</Link></p>
            <p><Link to={'/home'}>Home Page</Link></p>
            <p><Link to={'/watch-history'}>Watch History</Link></p>
        </div>
       </div>
       <div className="col-md-2 p-4">
        <h4>Guides</h4>
        <p className='mt-4'>React</p>
        <p>React Bootstrap</p>
        <p>Bootstrap</p>
       </div>
       <div className="col-md-3 p-4">
        <h4>Contact Us</h4>
        <div className='d-flex mt-4'>
            <input type="text" className='form-control' placeholder='Email Id' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className="d-flex mt-4 justify-content-between">
            <FontAwesomeIcon icon={faInstagram} size='2x1' />
            <FontAwesomeIcon icon={faFacebook} size='2x1'/>
            <FontAwesomeIcon icon={faTwitter} size='2x1' />
            <FontAwesomeIcon icon={faLinkedin} size='2x1' />
        </div>
       </div>
       <div className='cil-md-1'></div>
    </div>

    </>
  )
}

export default Footer