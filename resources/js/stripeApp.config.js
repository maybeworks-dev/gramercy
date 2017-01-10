export default function config ($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            template: '<list></list>'
        })
        .when('/coupon/:id?', {
            template: '<coupon-form></coupon-form>'
        })
        .otherwise('/');
}