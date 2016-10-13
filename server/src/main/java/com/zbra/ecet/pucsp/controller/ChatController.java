package com.zbra.ecet.pucsp.controller;

import com.zbra.ecet.pucsp.model.Message;
import com.zbra.ecet.pucsp.model.Room;
import com.zbra.ecet.pucsp.model.User;
import com.zbra.ecet.pucsp.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class ChatController {

    private final ChatService chatService;
    private final NotifyErrorHandler notifyErrorHandler;

    @Autowired
    public ChatController(ChatService chatService, NotifyErrorHandler notifyErrorHandler) {
        this.chatService = chatService;
        this.notifyErrorHandler = notifyErrorHandler;
    }

    @MessageMapping("/join")
    @SendToUser("/queue/join")
    public Room join(@Payload JoinMessage message) {

        String userName = message.getUserName();
        if (userName == null || userName.isEmpty()) {
            notifyErrorHandler.sendError(new JoinErrorMessage("Nome do usuário inválido"));
            return null;
        }

        User newUser = new User(message.getUserName());

        chatService.addUser(newUser);

        return chatService.getActiveRoom();
    }

    @MessageMapping("/message")
    @SendToUser("/queue/message")
    public Message sendMessage(@Payload RoomMessage message) {

        Room room = chatService.findRoomById(message.getRoomId());
        if (room == null) {
            notifyErrorHandler.sendError(new RoomNotFoundMessageError("A mensagem foi enviada para uma sala de chat inválida"));
            return null;
        }

        Optional<User> userMaybe = chatService.findUserByName(message.getUserName());
        if (!userMaybe.isPresent()) {
            notifyErrorHandler.sendError(new UserNotFoundError("A mensagem foi enviada para uma sala de chat inválida"));
            return null;
        }

        String messageContent = message.getContent();
        if (messageContent == null || messageContent.isEmpty()) {
            notifyErrorHandler.sendError(new UserNotFoundError("A mensagem foi enviada para uma sala de chat inválida!"));
            return null;
        }

        Message newMessage = new Message(userMaybe.get(), message.getContent());

        room.addMessage(newMessage);

        return newMessage;
    }

    @MessageMapping("/signout")
    @SendTo("/topic/signout")
    public SingOutMessage signOut(@Payload SingOutMessage message) {
        chatService.removeUser(message.getUserName());
        return message;
    }
}
