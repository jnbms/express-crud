import express from 'express'
import {homeRoutes, addUser} from '../services/render.js'
import {find ,create, remove, update} from '../controller/controller.js'
// const app = express()
const router = express.Router()


router.get('/',homeRoutes)
router.get('/add-user',addUser)
// router.get

// API
router.get('/api/users',find)
router.post('/api/users',create)
router.put('/api/users/:id',update)
router.delete('/api/users/:id',remove)


export default router