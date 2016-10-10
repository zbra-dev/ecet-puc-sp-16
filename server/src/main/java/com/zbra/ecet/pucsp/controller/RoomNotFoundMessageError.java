package com.zbra.ecet.pucsp.controller;

class RoomNotFoundMessageError implements ErrorMessage {

    private final String message;

    RoomNotFoundMessageError(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
