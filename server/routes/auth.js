import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.send(`<h2>This is auth</h2>`)
})


export default router
