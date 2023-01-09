import React from 'react'
interface ChatsProps {
    id:string;
    uid:string;
    txt:string;
    createdAt:string;
    userPic:string;
}

const Chats = (props:ChatsProps) => {
  return (
    <div className='card d-flex flex-row border border-0 m-1 bg-secondary-subtle'>
        <img className='m-2' src={props.userPic} style={{height:'50px',width:'50px'}} alt=''/>
        <div className='card d-flex flex-column bg-light ps-2 pe-5 pt-2 ms-2 bg-primary-subtle'>
            <label>{props.createdAt}</label>
            <p>{props.txt}</p>
        </div>
    </div>
  )
}

export default Chats