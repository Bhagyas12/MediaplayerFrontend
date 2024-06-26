import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { addVideoApi } from '../sevices/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddStatus}) {
  // creae a state to hold data from input fields

  const [video,setVideo] = useState({
    caption:"",
    image:"",
    url:""
  })

    const [show, setShow] = useState(false);
    
    const handleClose = () => {
      setShow(false);
      setVideo({
        caption:"",
        image:"",
        url:""
      })
    }
    const handleShow = () => setShow(true);

    const validateLink=(e)=>{
      console.log(e.target.value);
      const link=e.target.value

      if(link.endsWith('?feature=shared')){
        const yTkey=link.slice(-26,-15)
        console.log(yTkey);
        let embedLink=`https://www.youtube.com/embed/${yTkey}`
        setVideo({...video,url:embedLink})
      }
      else{
        const yTkey=link.slice(-11)
        console.log(yTkey);
        let embedLink=`https://www.youtube.com/embed/${yTkey}`
        setVideo({...video,url:embedLink})
      }
    }

    
    

    const handleUpload=async (e) =>{
      e.preventDefault()

      const {caption,image,url}=video

      if(!caption || !image || !url){
        toast.info('Please fill the form completely')
      }
      else{
        const result = await addVideoApi(video)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('Video uploaded successfully')
          setAddStatus(result.data)
          handleClose()
        }
        else{
          toast.error('Something went wrong')
          handleClose()
        }
      }
    }


    // https://www.youtube.com/watch?v=tOM.nWPcR4u
    // https://www.youtube.com/watch?v=qxbHtcfHq2s
    // https://youtu.be/qxbHtcfHq2s?si=Uou-RHJoktBgRFEt
    // <iframe width="935" height="526" src="https://www.youtube.com/embed/qxbHtcfHq2s" title="SOOSEKI Lyrical Video | Pushpa 2 The Rule | Allu Arjun | Rashmika | Shreya Ghoshal | Sukumar| DSP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    // https://www.youtube.com/embed/qxbHtcfHq2s

    console.log(video);
  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload <span id='h'> new video </span></h5>
        <button className='btn mb-2 'onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            <input type="text" placeholder='Video Image'  className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})} />
            <input type="text" placeholder='Video url' className='form-control mt-3'  onChange={(e)=>validateLink(e)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Add