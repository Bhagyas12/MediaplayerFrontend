import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <div className='row d-flex justify-content-center align-items-center mt-5 w-100 '>
    <div className='col-md-1'> </div>
    <div className='col-md-5 p-5'> 
    <h3 className='mt-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit culpa quibusdam quos possimus sit quae accusantium nobis, praesentium pariatur minus dolorem ad repudiandae a facilis. Fugiat in sapiente cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error esse tempore quod excepturi, voluptatem quo, quasi nemo officia nam maxime praesentium quae sapiente sed commodi harum? Nam, facere fuga?</p>
    <button className='btn btn-warning mt-5'><Link to={'/home'}style={{textDecoration:"none",color:'white'}}></Link> Get Started</button>
    </div>
    <div className='col-md-5 d-flex justify-content-center align-items-center p-5 ' >
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
    </div>
    <div className='col-md-1'> </div>
    </div>

    <div className='row w-100 mt-5'>
      <h3 className=' mt-5 text-center mb-5'>Features</h3>
      <div className="col-md-1 me-md-5"></div>
      <div className="col-md-3 px-5 px-md-4 mt-3">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://c.tenor.com/b8o4QL3NxV4AAAAC/sound-wave-waves.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3  px-5 px-md-4 mt-3 ">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src=" https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-3">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://gifdb.com/images/high/lightning-like-sound-wave-a26vgycddqquootj.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-1 me-md-5"></div>
    </div>

    <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0">
      <div className="col-md-1"></div>
      <div className="col-md-10 border p-5 rounded m-md-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className='text-warning mt-3'>Simple fast and Powerful</h3>
            <p className='mt-4'><span className='fs-4'>Play Everything :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ex repudiandae, commodi eaque blanditiis tempore officiis accusamus dolorem, magni odio optio ratione quasi fuga hic cupiditate eius beatae consectetur nihil?</p>
            <p className='mt-4'><span className='fs-4'>Play Everything :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ex repudiandae, commodi eaque blanditiis tempore officiis accusamus dolorem, magni odio optio ratione quasi fuga hic cupiditate eius beatae consectetur nihil?</p>
            <p className='mt-4'><span className='fs-4'>Play Everything :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ex repudiandae, commodi eaque blanditiis tempore officiis accusamus dolorem, magni odio optio ratione quasi fuga hic cupiditate eius beatae consectetur nihil?</p>
          </div>
          <div className="col-md-6">
            <iframe width="100%" height="526" src="https://www.youtube.com/embed/YfFgAKNyPNY" title="K For Kurukku - Video Song | Guruvayoorambala Nadayil | Prithviraj | Basil | Dabzee | Ankit Menon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
        
      </div>
      <div className="col-md-1"></div>
    </div>
    </>
  )
}

export default Landingpage