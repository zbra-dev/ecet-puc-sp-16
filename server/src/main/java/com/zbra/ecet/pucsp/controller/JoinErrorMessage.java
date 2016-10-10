package com.zbra.ecet.pucsp.controller;

class JoinErrorMessage implements ErrorMessage {

    private final String message;

    JoinErrorMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
