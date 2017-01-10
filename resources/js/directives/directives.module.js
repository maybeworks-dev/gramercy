import angular from 'angular';
import confirmDialog from './confirmDialog.directive';

angular.module('directives', [])
    .directive('cpnConfirmDialog', confirmDialog);
