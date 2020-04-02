// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            create_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response = await this.chats.add(chat);        
        return response;
    }
    getChats(callback){
        this.chats.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update ui - callback function
                    callback(change.doc.data());
                }
            });
        });
    }
}

const chatroom = new Chatroom('gaming', 'alex');

chatroom.getChats(data => {
    console.log(data);
});
