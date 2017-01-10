import angular from 'angular';
import 'angular-sanitize';
import check from './check.filter';
import asArray from './asArray.filter';
import notNull from './notNull.filter';

angular.module('filters', [
    'ngSanitize'
])
    .filter('asArray', asArray)
    .filter('check', check)
    .filter('notNull', notNull);
