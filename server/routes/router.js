import express from 'express'
import {homeRoutes} from '../services/render.js'
// const app = express()
const router = express.Router()

router.get('/',homeRoutes)
// router.get('/add-user')
// router.get

export default router