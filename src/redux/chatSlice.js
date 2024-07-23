import { createSlice } from '@reduxjs/toolkit';

import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'

const initialState = {
    conversations: [
        { id: 1, name: 'Mathew Davidson', avatar: user2, lastMessage: 'Have you seen it yet ?' },
        { id: 2, name: 'Alicia Methews', avatar: user3, lastMessage: 'Was that awesome ?' },
        { id: 3, name: 'Alexa Sanchez', avatar: user3, lastMessage: 'Bro that was amazing' },
    ],
    activeConversation: 1,
    messages: [
        { id: 1, conversationId: 1, pic: null, text: 'Hey !! Helloo', sender: 'them', timestamp: '5:59 pm' },
        { id: 2, conversationId: 1, pic: null, text: 'Hey !! Helloo', sender: 'them', timestamp: '5:59 pm' },
        { id: 3, conversationId: 1, pic: null, text: 'Lorem ipsum dolor sit amet consectetur. Fringilla morbi molestie at eros.', sender: 'them', timestamp: '5:59 pm' },
        { id: 4, conversationId: 1, pic: null, text: 'Lorem ipsum dolor sit amet consectetur. Id porttitor lectus id risus lobortis id eget. Lacus semper cras odio sed.', sender: 'me', timestamp: '5:59 pm' },
        { id: 5, conversationId: 2, pic: null, text: 'Lorem ipsum dolor sit amet consectetur. Fringilla morbi molestie at eros.', sender: 'them', timestamp: '5:59 pm' },
        { id: 6, conversationId: 2, pic: null, text: 'Lorem ipsum dolor sit amet consectetur. Id porttitor lectus id risus lobortis id eget. Lacus semper cras odio sed.', sender: 'me', timestamp: '5:59 pm' },
        { id: 1, conversationId: 3, pic: null, text: 'Hey !! Helloo', sender: 'them', timestamp: '5:59 pm' },
        { id: 2, conversationId: 3, pic: null, text: 'Hey !! Helloo', sender: 'me', timestamp: '5:59 pm' },
        { id: 5, conversationId: 3, pic: null, text: 'Lorem ipsum dolor sit amet consectetur. Fringilla morbi molestie at eros.', sender: 'them', timestamp: '5:59 pm' },
        { id: 6, conversationId: 3, pic: null, text: 'Lorem ipsum dolor sit amet consectetur. Id porttitor lectus id risus lobortis id eget. Lacus semper cras odio sed.', sender: 'me', timestamp: '5:59 pm' },
    ],
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveConversation: (state, action) => {
            state.activeConversation = action.payload;
        },
        sendMessage: (state, action) => {
            state.messages.push(action.payload);
        },
    },
});

export const { setActiveConversation, sendMessage } = chatSlice.actions;
export default chatSlice.reducer;