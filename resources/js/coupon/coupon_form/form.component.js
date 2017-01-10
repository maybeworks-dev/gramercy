import template from './form.html';

class Form {
    constructor($routeParams, $window, $scope, Coupon) {
        'ngInject';
        this.$window = $window;
        this.Coupon = Coupon;
        this.error = '';
        this.$scope = $scope;
        this.duration_options = {
            forever: 'Forever',
            once: 'Once',
            repeating: 'Repeating'
        };

        if ($routeParams.id) {
            this.edit = true;
            Coupon.coupons.get({couponId: $routeParams.id}, coupon => this.coupon = Coupon.prepareForView(coupon));
        } else {
            this.edit = false;
            this.coupon = Coupon.getNew();
        }
    }

    addMetaData() {
        this.coupon.metadata.push({key: '', value: '', new: true});
    }


    save() {
        this.$scope.form.$submitted = true;
        var handle_success = () => {
            this.$window.location = '#!';
        };

        var handle_error = (err) => {
            this.error = err.data.message;
        };

        if (this.$scope.form.$valid) {
            if (this.edit) {
                this.Coupon.coupons.update(this.Coupon.prepareForSave(this.coupon, true), handle_success, handle_error);
            } else {
                this.Coupon.coupons.create(this.Coupon.prepareForSave(this.coupon, false), handle_success, handle_error);
            }
        }
    }

    cancel() {
        this.$window.location = '#!/';
    }

    remove(metadata) {
        metadata.value = null;
    }
}

export default {
    controller: Form,
    templateUrl: template
};
