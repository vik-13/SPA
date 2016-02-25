;(function() {
    angular
        .module('chat')
        .controller('ChatController', ChatController);

    /*ngInject*/
    function ChatController($scope, chatService) {

        $scope.messages = chatService.getMessages($scope.chat.id);
        $scope.keyPress = keyPress;

        function keyPress(event) {
            if (event.originalEvent.keyCode == 13) {
                if ($scope.messageField) {
                    chatService
                        .sendMessage($scope.messageField);
                }
            }
        }
    }
})();