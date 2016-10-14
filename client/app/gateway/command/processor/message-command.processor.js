(function() {
    'use strict';

    function MessageCommandProcessor() {
    }

    MessageCommandProcessor.prototype.process = function (message, commandContext) {
        var room = commandContext.getRoomRepository().getRoom();
        if(!!room){
            room.messages.push(message);
        }
        commandContext.getScope().$broadcast(Event.UPDATE_ROOM);
    };

    window.MessageCommandProcessor = MessageCommandProcessor;
})();