export default class {
    constructor($resource, $filter) {
        'ngInject';
        this.$filter = $filter;
        this.coupons = $resource('/coupons/:couponId', {couponId: '@id'}, {
            create: {
                method: 'POST'
            },
            update: {
                method: 'PUT'
            },
            query: {
                isArray: false
            }
        });
    }

    prepareForSave(coupon, edit) {
        var prepared_coupon = {};
        if (!edit) {
            for (var propName in coupon) {
                if (coupon.hasOwnProperty(propName) && coupon[propName]) {
                    prepared_coupon[propName] = coupon[propName];
                }
            }
            if (prepared_coupon.redeem_by) {
                prepared_coupon.redeem_by = Date.parse(prepared_coupon.redeem_by) / 1000;
            }

            if (prepared_coupon.duration !== 'repeating') {
                delete prepared_coupon.duration_in_months;
            }
        } else {
            prepared_coupon.id = coupon.id;
        }

        var metadata = {};

        coupon.metadata.forEach(v => metadata[v.key] = v.value);
        prepared_coupon.metadata = metadata;
        return prepared_coupon;
    }

    prepareForView(coupon) {
        var metadata = [];
        for (var key in coupon.metadata) {
            if (coupon.metadata.hasOwnProperty(key)) {
                metadata.push({key: key, value: coupon.metadata[key]});
            }
        }
        coupon.metadata = metadata;
        coupon.redeem_by = coupon.redeem_by ? new Date(coupon.redeem_by * 1000) : '';
        return coupon;
    }

    getNew() {
        return {
            id: '',
            duration: '',
            amount_off: '',
            currency: 'usd',
            duration_in_months: '',
            max_redemptions: '',
            percent_off: '',
            redeem_by: '',
            metadata: []
        };
    }
}