import express from 'express'
// import fsPromises from 'node:fs/promises'
// import "function" from 'file or program'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home');
});

export default router