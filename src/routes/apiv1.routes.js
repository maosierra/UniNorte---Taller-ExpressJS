const express = require('express');
const taskController = require('../controllers/task.controller');
const router = express.Router();
const { check, param } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

router
    .route('/task')
    .get(taskController.getAll)
    .post([
        check('description', 'Description is a mandatory field').not().isEmpty(),
        check('author', 'Author is a mandatory field').not().isEmpty(),
        validateFields
    ], taskController.create);

router.route('/task/:id')
    .get([
        param('id', 'id should be a numeric value').toInt().isNumeric(),
        validateFields
    ], taskController.getById)
    .put([
        check('description', 'Description is a mandatory field').not().isEmpty(),
        check('author', 'Author is a mandatory field').not().isEmpty(),
        validateFields
    ], taskController.update)
    .delete([
        param('id', 'id must be a numeric value').toInt().isNumeric(),
        validateFields
    ], taskController.delete);

module.exports = router;