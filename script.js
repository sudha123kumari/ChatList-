import {AddDeleteChat , chatName} from './AddDeleteChat.js';

onload = function(){

    const chatlist = document.getElementById('chatListItemUl');
    const add = document.getElementById('generate-step');
    const text = document.getElementById('temptext');

    const templates = document.getElementsByTagName('template')[0];
    const chat_item = templates.content.querySelector("li");

    const addtt = new AddDeleteChat(chatlist,chat_item);
    console.log(addtt);
    let chats=[];
    // document.getElementById("temptext").addEventListener("click", myfun());
    add.onclick =function (){
        var earlierText = text.innerHTML
        if(Math.random()>0.75 && chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            let idToDelete = chats[index];
            text.innerHTML = "Deleted message from "+chatName[idToDelete]+"<br><hr>"+ earlierText ;
            addtt.deleteMsg(idToDelete);
            
                chats.splice(index, 1);
        } else{
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            
            text.innerHTML = "New message from "+chatName[idOfMsg]+"<br><hr>"+earlierText ;
            addtt.newMsg(idOfMsg);
            
        }
    };
};
        
   
