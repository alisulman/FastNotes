import express from 'express'
import { add, fetch } from '../controllers/CRUD.js';
const routes = express.Router()


routes.post('/adding', add)
routes.get('/allnotes', fetch)

export default routes;