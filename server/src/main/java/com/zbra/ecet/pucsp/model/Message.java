package com.zbra.ecet.pucsp.model;

import java.util.UUID;

public class Message {

    private final String id;
    private final User owner;
    private final String content;

    private String roomId;

    public Message(User owner, String content) {
        id = UUID.randomUUID().toString();
        this.owner = owner;
        this.content = content;
    }

    public User getOwner() {
        return owner;
    }

    public String getContent() {
        return content;
    }

    public String getId() {
        return id;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }
}
