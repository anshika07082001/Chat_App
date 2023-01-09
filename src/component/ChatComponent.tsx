import React, { useEffect, useRef, useState } from 'react'
import {db} from '../firebaseConfig';
import {onValue, push, ref} from 'firebase/database'
import Chats from './Chats';

interface ChatsProps {
    id:string;
    uid:string;
    txt:string;
    createdAt:string;
    userPic:string;
}

interface arrProps {
    arr:Object
}

interface objProps {
    uid:string
}


const ChatComponent = (props:arrProps) => {
    const months = ["Jan","Feb","Mar","Apr","May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; 

    var date = `${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getHours()}:${new Date().getMinutes()}`;
    const chatRef = ref(db,"/messages")
    var [chatList,setChatList]=useState<ChatsProps[]>([])
    var [user,setUser]=useState<objProps>()

    console.log(props.arr)

    

    useEffect(()=>{
        onValue(chatRef,(snapshot)=>{
            const chats = snapshot.val()
            const newChatList = []
            for(let id in chats){
                newChatList.push({id,...chats[id]})
            }
            // console.log(newChatList)
            setChatList(newChatList)
        })
    },[db])

    var inpRef = useRef<HTMLInputElement>(null)

    const sendHandler=()=>{
        if (inpRef.current !== null) {
            let date = `${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getHours()}:${new Date().getMinutes()}`;
            push(ref(db, "/messages"), {
              uid: props.arr,
              userPic: props.arr,
              txt: inpRef.current.value,
              createdAt: date.toString(),
            });
            inpRef.current.value = "";
        } 
    }

    // console.log(chatList)

  return (
    <div className='pb-5 position-relative' style={{width:'50%'}}>
        {chatList.map((item)=>{
            // console.log(props.pic)
            return (
                <Chats userPic={item.userPic} id={item.id} uid={item.uid} txt={item.txt} createdAt={item.createdAt} />
            )
        })}

        {}
        
        <div className='card d-flex flex-row border border-0  m-1 justify-content-end bg-secondary-subtle '>
            <div className='card d-flex flex-column bg-light ps-2 pe-5 pt-2 ms-2 bg-primary-subtle'>
                <label className='fw-bold'>You</label>
                <p>yfgdfd jdfdsf jfdhsfdsf jfhdf hello</p>
            </div>
            <img className='m-2' src='https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp' style={{height:'50px',width:'50px'}} alt=''/>
        </div>
        
        {/*   
        
        
        */}
        <div className=' position-fixed bottom-0 col-6 align-items-center d-flex justify-content-center '>
            <input type='text' placeholder='Type Your Message' ref={inpRef} className=' p-2 rounded border border-dark' style={{width:'70%'}}/>
            <button className='p-2 rounded color-white bg-primary border-0' onClick={sendHandler}>Send</button>
        </div>
    </div>
  )
}

export default ChatComponent