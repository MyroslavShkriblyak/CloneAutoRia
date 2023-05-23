const router = require('express').Router();

const { carService } = require('../../../services');

router.get('/cars', carService.getAll);
router.post('/car-viewing', );
router.post('/test-drive');
router.post('/contact-seller');
router.post('/contact-dealership');


module.exports = router;
