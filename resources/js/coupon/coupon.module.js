import angular from 'angular';
import service from './coupon.service';
import list from './list/list.component';
import form from './coupon_form/form.component';
import 'angular-resource';
import 'angular-messages';

angular.module('coupon', [
    'ngResource',
    'ngMessages'
])
    .service('Coupon', service)
    .component('list', list)
    .component('couponForm', form);
