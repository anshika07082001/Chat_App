import React from 'react'

interface ChatsProps {
  id:string,
  uid:string,
  txt:string,
  createdAt:string,
  userPic:string,
  user:any
}

const Chats = (props:ChatsProps) => {
  if(props.user.uid === props.uid){
    return(
      <div className='d-flex flex-column align-items-end'>
        <label>{props.createdAt}</label>
        <div className='card d-flex flex-row border border-0  m-1 justify-content-end bg-secondary-subtle '>
          <div className='card d-flex flex-column bg-light ps-2 pe-5 pt-2 ms-2 bg-primary-subtle'>
            
            <p>{props.txt}</p>
          </div>
          <img className='m-2' src={props.userPic} style={{height:'50px',width:'50px',borderRadius:'30px'}} alt=''/>
        </div>
    </div>
    )
  }
  else{
  return (
    <div className='d-flex flex-column align-items-start'>
      <label className='ps-2'>{props.createdAt}</label>
    <div className='card d-flex flex-row border border-0 m-1 bg-secondary-subtle'>
      <img className='m-2' src={props.userPic} style={{height:'50px',width:'50px',borderRadius:'30px'}} alt=''/>
      <div className='card d-flex flex-column bg-light ps-2 pe-5 pt-2 ms-2 bg-primary-subtle'>
          
          <p>{props.txt}</p>
      </div>
    </div>
    </div>
  )
  }
}

export default Chats