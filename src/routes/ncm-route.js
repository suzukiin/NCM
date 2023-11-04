'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controller/ncm-controller');

router.get('/', controller.get);
router.get('/:Codigo', controller.getByCod);
router.get('/capitulo/:Codigo', controller.getCapitulo);
module.exports = router