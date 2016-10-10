package com.zbra.ecet.pucsp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class NotifyErrorHandler {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public void sendError(ErrorMessage errorMessage) {
        messagingTemplate.convertAndSend("/topic/error", errorMessage);
    }
}
