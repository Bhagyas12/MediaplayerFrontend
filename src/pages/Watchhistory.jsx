import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap'
import { deleteVideoFromHistoryApi, getVideoFromHistoryApi } from '../sevices/allApi'

function Watchhistory() {
  const [videoHistory,setVideoHistory]=useState([])
  const [deleteStatus,setDeleteStatus]=useState([])

  const getHistory=async()=>{
    const result=await getVideoFromHistoryApi()
    
    if(result.status>=200 && result.status<300){
      setVideoHistory(result.data);
    }
  }

  
  console.log(videoHistory);
  useEffect(()=>{
    getHistory()
  },[deleteStatus])
  const deleteHistory=async(id)=>{
    const result=await deleteVideoFromHistoryApi(id)
    console.log(result);
    // if(result.status>=200 && result.status<300){
    setDeleteStatus(result.data)
    // }
    
  }



  return (
    <>
    <div className='d-flex mt-5 p-3 w-100 mb-5'>
      <h4 className='ms-md-5'>Watch History</h4>
      <h5 className='ms-auto me-md-5'><Link to={'/home'} style={{color:'white', textDecoration:'none'}}><FontAwesomeIcon icon={faArrowLeft} className='me-2' /> <span id='h'> Back To Home</span><FontAwesomeIcon icon={faHouse} className='ms-2' /></Link></h5>
    </div>
    <div className='row  w-100'>
      <div className="col-md-2"></div>
      <div className="col-md-8" >
        {videoHistory?.length>0? 
        <Table className='table table-bordered table-light' responsive>
          <thead>
          <tr>
            <td>#</td>
            <td>Caption</td>
            <td>URL</td>
            <td>Time Stamp</td>
            <td>Action</td>
          </tr>
          </thead>
          <tbody>
           { videoHistory?.map((item,index)=>( <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
              <td>{item?.timeStamp}</td>
              <td className='text-center'><button onClick={()=>deleteHistory(item.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
            </tr>)) }
          </tbody>
        </Table>
        :
        <p className='text-warning fs-5'>No watch History</p>}
      </div>
      <div className="col-md-2"></div>
      
    </div>
    </>
  )
}

export default Watchhistory