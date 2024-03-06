import express from 'express'
import { add } from '../controllers/CRUD.js';
const routes = express.Router()


routes.post('/adding', add)

export default routes;