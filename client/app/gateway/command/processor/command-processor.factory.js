(function () {
    'use strict';

    angular
        .module('puc-chat.gateway')
        .factory('commandProcessorFactory', commandProcessorFactory);

    function commandProcessorFactory() {
        var commandProcessors = {};
        commandProcessors[Command.JOIN_ROOM] = new JoinRoomCommandProcessor();
        commandProcessors[Command.MESSAGE] = new MessageCommandProcessor();
        commandProcessors[Command.SIGN_OUT] = new SignOutCommandProcessor();

        return {
            create: create
        };

        function create(name) {
            var commandProcessor = commandProcessors[name];
            if (!!commandProcessor) {
                return new AsyncCommandProcessorDecorator(commandProcessor);
            } else {
                console.log('Error - Could not find processor for ' + name);
                return null;
            }
        }
    }

    function AsyncCommandProcessorDecorator(decorated) {
        var COMMAND_PROCESSOR_TIMEOUT = 100;

        this.process = function (payload, commandProcessorContext) {
            setTimeout(function () {
                decorated.process(payload, commandProcessorContext);
            }, COMMAND_PROCESSOR_TIMEOUT);
        };
    }
})();
