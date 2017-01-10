import angular from 'angular';
import config from './stripeApp.config';

angular.module('stripeApp', [
    'ngRoute',
    'ngAnimate',
    'angularUtils.directives.dirPagination',
    'coupon',
    'filters'
])
    .config(config);