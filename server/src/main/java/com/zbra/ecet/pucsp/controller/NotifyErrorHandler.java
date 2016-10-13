package com.zbra.ecet.pucsp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class NotifyErrorHandler {

    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public NotifyErrorHandler(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendError(ErrorMessage errorMessage) {
        messagingTemplate.convertAndSend("/user/queue/error", errorMessage);
    }
}
