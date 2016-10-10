package com.zbra.ecet.pucsp.controller;

class UserNotFoundError implements ErrorMessage {

    private final String message;

    UserNotFoundError(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
