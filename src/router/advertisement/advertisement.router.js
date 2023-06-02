const router = require('express').Router();

const { advertisementController } = require('../../controller');

router.get('/', advertisementController.getAll);
router.post('/', advertisementController.create);


router.get('/:advertId', advertisementController.findById);
router.put('/:advertId', advertisementController.updatedAt);
router.delete('/:advertId', advertisementController.deleteAdvertOne);


module.exports = router;
