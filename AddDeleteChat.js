export{ AddDeleteChat , chatName}
const chatName = ['Sushi','Rajeev','Tushar','Rahula','Aadi','Abhijeet','Sadu'];
const chatNameLength= chatName.length;
const chatMessage = ["hello...I heard that you are planing a trip",
                     "Will you be my Date??",
                     "I will call You later when I will get time",
                     "Give proxy for me",
                     "I wish..., I  can eat chicken",
                     "Lockdown again!!! I want to go college"]
const chatMessageLength = chatMessage.length;
const chatAvtaarImgLength = 7;

class AddDeleteChat{
        constructor(chat_List_li, chatTemplate){
            this.HashMap = new Map();
            this.linkedList = null;
            this.chatTemplate = chatTemplate;
            this.chatListLi = chat_List_li;
            let clock =new Date();
            this.hours = clock.getHours();
            this.mins = clock.getMinutes();
        }
// getTheTime userdefined function to create the time for message
        getTheTime(){
            this.mins += 1;
            if(this.mins === 60){
                 this.hours += 1;
                 this.mins = 0;
            }

            if(this.hours === 24){
                this.hours = 0;
            }

            return("0"+this.hours).slice(-2)+":"+("0"+this.mins).slice(-2);

        }
    // Create a NewNode(New Chat)
        
        createNewChat(id){
            let node={};
            node['next']=null;
            node['prev']=null;
             console.log(this.chatTemplate);
            let chatItemForNewNode = this.chatTemplate.cloneNode(true);
            console.log("________________");
            console.log(chatItemForNewNode);
            chatItemForNewNode.querySelector('#Names').innerText = chatName[id%chatNameLength];
            chatItemForNewNode.querySelector('#Message').innerText =chatMessage[id%chatMessageLength];
            chatItemForNewNode.querySelector('#Avtaar').src="Assests/a"+eval(1+(id%chatAvtaarImgLength))+".jfif";
            node['chatItemForNewNode']=chatItemForNewNode;
            return node;


        }

        newMsg(id){
            let node =null;
            if((id in this.HashMap) === false){
                node = this.createNewChat(id);
                this.HashMap[id]=node;

            }
            else{
                node = this.GetNodeFromList(id);
            }

            if(this.linkedList ===null){
                this.linkedList = node;
            }
            else{
                node['next']=this.linkedList;
                if(this.linkedList !== null)
                   this.linkedList['prev']=node;
                this.linkedList=node;
            }
            this.updateList();
        }

        deleteMsg(id){
            let node = this.GetNodeFromList(id);
            delete this.HashMap[id];
            this.updateList();
        }
        GetNodeFromList(id){ 
            let node = this.HashMap[id];
            let prevNode =node['prev'];
            let nextNode =node['next'];

            if(prevNode!==null)
                prevNode['next'] = nextNode;
            if(nextNode !== null)
                 nextNode['prev']=prevNode;
            
                 if (node===this.linkedList){
                     this.linkedList = nextNode;
                 }
            node['next'] = null;
            node['prev'] = null;

            return node;
            
        }

        updateList(){
            let innerHTML ='';
            let head = this.linkedList;
            console.log(head);
            while(head!==null){
                let element = head['chatItemForNewNode'];
                // console.log(chatItemForNewNode);
                if(head===this.linkedList){
                    element.className="msbody msactive"
                   
                    element.querySelector('#Time').innerHTML=this.getTheTime();
                    
                }
                else{
                    element.className ="msbody";
                }
                innerHTML += element.outerHTML;
                head =head['next'];

            }
            console.log("___________");
            console.log(this.chatItemForNewNode);
            this.chatListLi.innerHTML = innerHTML;
            // element.className="msbody msactive"
            element.className="msbody"
        }


}
