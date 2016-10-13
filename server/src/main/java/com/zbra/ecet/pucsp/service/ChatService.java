package com.zbra.ecet.pucsp.service;

import com.zbra.ecet.pucsp.model.Room;
import com.zbra.ecet.pucsp.model.User;

import java.util.Optional;

public interface ChatService {

    Room getActiveRoom();

    Room findRoomById(String id);

    Optional<User> findUserByName(String userName);

    void addUser(User user);

    void removeUser(String userName);

}
