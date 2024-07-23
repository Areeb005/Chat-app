import React, { useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveConversation } from '../redux/chatSlice';

const ConversationList = () => {
    const conversations = useSelector(state => state.chat.conversations);
    const activeConversation = useSelector(state => state.chat.activeConversation);
    const dispatch = useDispatch();

    const [chats, setchats] = useState(conversations)

    const filterList = (e) => {
        const { value } = e.target;

        if (!value) {
            setchats(conversations);
        }
        const filteredChats = conversations.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
        setchats(filteredChats)

    }

    return (
        <>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search People"
                onChange={filterList}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{ m: 2, width: 'calc(100% - 32px)', position: 'sticky' }}
            />
            <Box sx={{ height: { xs: "150px", sm: '100%' }, overflow: 'auto' }} >
                <List>
                    {chats.map((conversation) => (
                        <ListItem
                            key={conversation.id}
                            button
                            onClick={() => dispatch(setActiveConversation(conversation.id))}
                            sx={{ bgcolor: activeConversation == conversation.id && "primary.light" }}
                        >
                            <ListItemAvatar>
                                <Avatar src={conversation.avatar} alt={conversation.name} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={conversation.name}
                                secondary={conversation.lastMessage}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box >
        </>
    );
};

export default ConversationList;