export default function () {
    return function (input) {
        return input ? '<span class="glyphicon glyphicon-ok"></span>' : '<span class="glyphicon glyphicon-remove"></span>';
    };
}