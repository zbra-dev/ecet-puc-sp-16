'use strict';

function JoinRoomCommandProcessor() {
    
    this.process = function(room, commandContext){
        commandContext.getRoomRepository().setRoom(room);
        commandContext.getScope().$broadcast(Event.UPDATE_ROOM);
    }
}