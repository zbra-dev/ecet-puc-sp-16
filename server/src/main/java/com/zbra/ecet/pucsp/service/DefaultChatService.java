package com.zbra.ecet.pucsp.service;

import com.zbra.ecet.pucsp.model.Room;
import com.zbra.ecet.pucsp.model.User;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Stream;

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
        return room;
    }

    @Override
    public Optional<User> findUserByName(String userName) {
        return Stream.of(room.getUsers()).filter(u -> u.getUserName().equals(userName)).findAny();
    }

    @Override
    public void addUser(User user) {
        room.addUser(user);
    }

    @Override
    public void removeUser(String userName) {
        Optional<User> userMaybe = findUserByName(userName);
        if (userMaybe.isPresent()) {
            room.removeUser(userMaybe.get());
        }
    }
}
