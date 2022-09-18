import express from 'express'
import { CalcController } from '../controllers/calc-controller.js'

export const router = express.Router()

const controller = new CalcController()

// test
router.get('/costAll', (req, res, next) => controller.raidGearCost(req, res, next))

router.post('/cost', (req, res, next) => controller.raidCraftingCost(req, res, next))

router.post('/buildCost', (req, res, next) => controller.raidingBuildWallCost(req, res, next))

