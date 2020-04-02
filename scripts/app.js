// dom queries
const chatList = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'alex');

// get the chats and reder
chatroom.getChats(data => chatUI.render(data));