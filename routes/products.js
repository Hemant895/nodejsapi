const express = require('express');
const router = express.Router();

const {getAllProducts, getAllTestingProducts ,getfruitdata} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/testing').get(getAllTestingProducts);
router.route('/fruitapi').get(getfruitdata);

module.exports = router;