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
    arr:any,
}

const ChatComponent = (props:arrProps) => {
    const months = ["Jan","Feb","Mar","Apr","May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; 
    var date = `${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getHours()}:${new Date().getMinutes()}`;
    const chatRef = ref(db,"/messages")
    var [chatList,setChatList]=useState<ChatsProps[]>([])
    var [user,setUser]=useState({})
    var inpRef = useRef<HTMLInputElement>(null)

    // Function renders all chats when app loads after Sign In
    useEffect(()=>{
        onValue(chatRef,(snapshot)=>{
            const chats = snapshot.val()
            const newChatList = []
            for(let id in chats){
                newChatList.push({id,...chats[id]})
            }
            setChatList(newChatList)
        })
        setUser(props.arr)     
    },[db,props.arr])

    // function controls scrolling of the page
    useEffect(()=>{
        window.scrollTo(0, document.body.scrollHeight);
    },[chatList])

    // function sends the chats to the database
    const sendHandler=()=>{
        if(inpRef.current?.value!==''){
            if (inpRef.current !== null) {
                push(ref(db, "/messages"),{
                  uid: props.arr.uid,
                  userPic: props.arr.photoURL,
                  txt: inpRef.current.value,
                  createdAt: date.toString(),
                });
                setUser({...props.arr})           
                inpRef.current.value = "";
            } 
        }
        else{
            alert('please write something')
        }
    }

    if(props.arr.uid !== undefined ){
        return (
        <div className='pb-5 pt-5 mt-5 col-12 position-relative'>
            <div className='col-12 position-relative' >
                {chatList.map((item)=>{
                    return (
                        <Chats userPic={item.userPic} id={item.id} uid={item.uid} txt={item.txt} createdAt={item.createdAt} user={user} />
                    )
                })}
            </div>
            <div className=' position-fixed fixed-bottom align-items-center d-flex justify-content-center col-12 '>
                <input type='text' placeholder='Type Your Message' ref={inpRef} className='col-9 p-2 rounded border border-dark'/>
                <button className='p-2 rounded color-white bg-primary border-0 ps-3 pe-3' onClick={sendHandler}>Send</button>
            </div>
        </div>
        )
    }
    else{
        return (
        <h1 className='text-success m-5 pt-5 fw-bold'>Sign In To start the Chat!!</h1>
        )
    }
}

export default ChatComponent