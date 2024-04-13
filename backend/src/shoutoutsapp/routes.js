const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getShout_outs);
router.post('/', controller.addShout_out);
router.get('/:soid', controller.getShout_outBySOId);
router.put('/:soid', controller.updateShout_out);
router.delete('/:soid', controller.removeShout_out);

module.exports = router;