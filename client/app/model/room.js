(function() {
    'use strict';

    function Room(id, name){
        this.id = id;
        this.name = name;
        this.users = [];
        this.messages = [];
    }

    window.Room = Room;
})();