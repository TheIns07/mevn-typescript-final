import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
   res.send("hllo")
});

router.post('/', (req, res) => {
   res.send("hllo")
});

router.get('/', (req, res) => {
   res.send("hllo")
});

export default router;