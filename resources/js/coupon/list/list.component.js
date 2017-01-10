import template from './list.html';

class List {
    constructor($window, Coupon) {
        'ngInject';
        this.$window = $window;
        this.Coupon = Coupon;
        this.perPage = 3;
        this.page = 1;
        this.previousPage = 1;
        this.total = 0;
        this.getPage(this.page);
    }

    remove(coupon) {
        this.Coupon.coupons.remove({id: coupon.id});
        this.coupons.delete(coupon);
    }

    update(coupon) {
        this.$window.location = '#!/coupon/' + coupon.id;
    }

    getPage(page) {
        var params = {limit: this.perPage};
        if (this.coupons) {
            var arr = Array.from(this.coupons);
            if (page > this.previousPage) {
                params.starting_after = arr[0].id;
            } else {
                params.ending_before = arr[arr.length - 1].id;
            }
        }

        this.Coupon.coupons.query(params, res => {
            this.coupons = new Set(res.data);
            this.total = res.total_count;
        });
        this.previousPage = page;
    }
}

export default {
    controller: List,
    templateUrl: template
};