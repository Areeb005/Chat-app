import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, TextField, IconButton, Avatar, Input, styled, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../redux/chatSlice';
import avatarImg from '../assets/Avatar.png'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ChatArea = () => {

    const chatAreaRef = useRef(null);

    const [newMessage, setNewMessage] = useState('');
    const [newPic, setNewPic] = useState(null);
    const activeConversation = useSelector(state => state.chat.activeConversation);
    const messages = useSelector(state => state.chat.messages.filter(m => m.conversationId === activeConversation));
    const conversation = useSelector(state => state.chat.conversations.find(c => c.id === activeConversation));
    const dispatch = useDispatch();


    // Function to scroll to the bottom
    const scrollToBottom = () => {
        chatAreaRef.current?.scrollTo(0, chatAreaRef.current.scrollHeight);
    };


    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setNewPic(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (newMessage.trim() || newPic) {
            dispatch(sendMessage({
                id: Date.now(),
                conversationId: activeConversation,
                text: newMessage,
                sender: "me",
                pic: newPic,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }));
            setNewMessage('');
            setNewPic(null)
            document.getElementById('pic').value = ""
        }
    };

    useEffect(() => {
        scrollToBottom()
    }, [messages])


    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: "flex", alignItems: "center", p: 2, border: 1, borderColor: 'divider', borderRadius: "0px 20px 0px 0px" }}>
                <Box>
                    <Avatar src={conversation?.avatar} sx={{ mr: 1 }} />
                </Box>
                <Box>
                    <Typography variant="h6">{conversation?.name}</Typography>
                    <Typography variant="body2">Active Now</Typography>
                </Box>
            </Box>
            <Box ref={chatAreaRef} sx={{ flexGrow: 1, overflowY: 'auto', p: 2, height: "500px", }}>
                {messages.map((message) => (
                    <Box
                        key={message.id}
                        sx={{
                            display: 'flex',
                            justifyContent: message.sender === 'me' ? 'flex-end' : 'flex-start',
                            mb: 2
                        }}
                    >
                        {message.sender !== 'me' && <Avatar src={conversation?.avatar} sx={{ mr: 1 }} />}
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '70%' }}>
                            <Box
                                sx={{
                                    bgcolor: message.sender === 'me' ? 'primary.light' : 'grey.200',
                                    p: 2,
                                    padding: {
                                        xs: 1,
                                        md: message.sender === 'me' ? "20px 20px 20px 100px" : "20px 100px 20px 20px",
                                    },
                                    borderRadius: message.sender === 'me' ? "20px 0px 20px 0px" : "0px 20px 0px 20px",
                                }}
                            >
                                <Typography variant="body1">{message.text}</Typography>
                                {
                                    message.pic &&
                                    <img id='pic' src={message.pic} style={{ maxWidth: '100%', maxHeight: '100px' }} />
                                }
                            </Box>
                            <Typography variant="caption" display="block" textAlign={message.sender === 'me' ? 'left' : 'right'}>
                                {message.timestamp}
                            </Typography>
                        </Box>
                        {message.sender === 'me' && <Avatar src={avatarImg} sx={{ ml: 1 }} />}
                    </Box>
                ))}
            </Box>
            <Box onSubmit={handleSend} component={"form"} sx={{ borderTop: 0, borderColor: 'divider' }}>
                {newPic && (
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <img src={newPic} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100px' }} />
                    </Box>
                )}
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Write a Message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <>
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant=""
                                    tabIndex={-1}
                                >
                                    <AttachFileIcon></AttachFileIcon>
                                    <VisuallyHiddenInput id='pic' onChange={handleImage} name='pic' type="file" />
                                </Button>
                            </>
                        ),
                        endAdornment: (
                            <IconButton type='submit'>
                                <SendIcon />
                            </IconButton>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
};

export default ChatArea;