package com.zbra.ecet.pucsp.service;

import com.zbra.ecet.pucsp.model.Room;
import com.zbra.ecet.pucsp.model.User;

public interface ChatService {

    Room getActiveRoom();

    Room findRoomById(String id);

    User findUserByName(String userName);

    void addUser(User user);

}
