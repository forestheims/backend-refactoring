const { Router } = require('express');
const Order = require('../models/Order');

module.exports = Router()
  .post('/', async (req, res) => {
    const { product, quantity } = req.body;
    res.json(await Order.insert({ product, quantity }));
  })

  .get('/:id', async (req, res) => {
    res.json(await Order.getById(req.params.id));
  })

  .get('/', async (req, res) => {
    res.json(await Order.getAll());
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { product, quantity } = req.body;
      res.json(await Order.updateById(id, { product, quantity }));
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res) => {
    res.json(await Order.deleteById(req.params.id));
  });
