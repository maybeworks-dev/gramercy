export default function () {
    'ngInject';
    return {
        restrict: 'A',
        scope: {confirmFunction: '&cpnConfirmDialog'},
        link: function (scope, element, attrs) {
            element.bind('click', function (e) {
                var message = attrs.cpnConfirmClickMessage ? attrs.cpnConfirmClickMessage : 'Are you sure?';
                if (confirm(message)) {
                    scope.confirmFunction();
                }
            });
        }
    };
}