var express = require('express');
var router = express.Router();
var config = require('../config');
var stripe = require('stripe')(config.stripe.secret);

var handle_error = function (err, res) {
    console.log(err);
    res.status(400)
        .send(err);
};

router.get('/', function (req, res, next) {
    req.query.include = ['total_count'];
    stripe.coupons.list(
        req.query,
        function (err, coupons) {
            if (err) {
                handle_error(err, res);
            } else {
                res.send(coupons);
            }
        }
    );
});

router.get('/:id', function (req, res, next) {
    stripe.coupons.retrieve(
        req.params.id,
        function (err, coupon) {
            console.log(req.params.id, err, coupon);
            if (err) {
                handle_error(err, res);
            } else {
                res.send(coupon);
            }
        }
    );
});

router.post('/:id?', function (req, res, next) {
    try {
        stripe.coupons.create(req.body, function (err, coupon) {
            if (err) {
                handle_error(err, res);
            } else {
                res.send(coupon);
            }
        });
    } catch (err) {
        handle_error(err, res);
    }
});

router.put('/:id', function (req, res, next) {
    try {
        console.log({metadata: req.body.metadata});
        stripe.coupons.update(req.params.id, {metadata: req.body.metadata}, function (err, coupon) {
            if (!err) {
                res.send(coupon);
            } else {
                handle_error(err, res);
            }
        });
    } catch (err) {
        handle_error(err, res);
    }
});

router.delete('/', function (req, res, next) {
    stripe.coupons.del(req.query.id);
    res.send();
});

module.exports = router;
