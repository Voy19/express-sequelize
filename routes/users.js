const express = require('express');

const router = express.Router();

const Users = require.main.require('./models/Users');

router.post('/', async ({ body }, res) => {
  try {
    const createdUser = await Users.create(body);
    res.json(createdUser);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/', async (_, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async ({ params: { id } }, res) => {
  try {
    const user = await Users.findOne({ where: { id }, attributes: ['firstName'] });
    res.json(user);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.delete('/:id', async ({ params: { id } }, res) => {
  try {
    const user = await Users.destroy({ where: { id } });
    res.json(user);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/:id', async ({ params: { id }, body }, res) => {
  try {
    const user = await Users.update(body, { where: { id } });
    res.json(user);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id/address', async ({ params: { id } }, res) => {
  try {
    const user = await Users.findOne({ where: { id }, attributes: ['address'] });
    res.json(user);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
