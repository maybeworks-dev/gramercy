export default function () {
    return function (input) {
        if (input) {
            return Array.from(input);
        }
    };
}