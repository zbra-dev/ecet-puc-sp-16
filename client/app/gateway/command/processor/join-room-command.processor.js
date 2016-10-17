(function() {
    'use strict';

    function JoinRoomCommandProcessor() { 
    }

    JoinRoomCommandProcessor.prototype.process = function(room, commandContext){
        commandContext.getRoomRepository().setRoom(room);
        commandContext.getScope().$broadcast(Event.UPDATE_ROOM);
    };

    window.JoinRoomCommandProcessor = JoinRoomCommandProcessor;
})();