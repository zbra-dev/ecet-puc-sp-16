package com.zbra.ecet.pucsp.service;

import com.zbra.ecet.pucsp.model.Room;
import com.zbra.ecet.pucsp.model.User;
import org.springframework.stereotype.Service;

@Service
class DefaultChatService implements ChatService {

    private final Room room;

    DefaultChatService() {
        room = new Room("PUC-SP");
    }

    @Override
    public Room getActiveRoom() {
        return room;
    }

    @Override
    public Room findRoomById(String id) {
        return null;
    }

    @Override
    public User findUserByName(String userName) {
        return null;
    }

    @Override
    public void addUser(User user) {
        room.addUser(user);
    }
}
