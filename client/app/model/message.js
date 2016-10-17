(function() {
    'use strict';

    function Message(id, roomId, owner, content) {
        this.id = id;
        this.roomId = roomId;
        this.owner = owner;
        this.content = content;
    }

    window.Message = Message;
})();