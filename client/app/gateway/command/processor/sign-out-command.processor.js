(function() {
    'use strict';

    function SignOutCommandProcessor() {
    }

    SignOutCommandProcessor.prototype.process = function(signOutMessage, commandContext) {
        var room = commandContext.getRoomRepository().getRoom();
        room.users = _.filter(room.users, function(u){
            return u.userName != signOutMessage.userName;
        });
        commandContext.getScope().$broadcast(Event.UPDATE_ROOM);
    };

    window.SignOutCommandProcessor = SignOutCommandProcessor;
})();