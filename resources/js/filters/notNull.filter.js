export default function () {
    return function (input) {
        var res = [];
        if (input) {
            input.forEach(item => {
                if (item.value !== null) {
                    res.push(item);
                }
            });
        }
        return res;
    };
}