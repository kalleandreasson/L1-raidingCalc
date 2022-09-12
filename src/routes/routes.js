import express from 'express'
import { CalcController } from '../controllers/calc-controller.js'

export const router = express.Router()

const controller = new CalcController()

// test
router.get('/test', (req, res, next) => controller.raidGearCost(req, res, next))

