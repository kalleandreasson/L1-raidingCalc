import { RaidingResourceBreakdown } from "../matrix/matrix-cost.js"

const raidingResourceBreakdown = new RaidingResourceBreakdown()

export class CalcController {

    async raidGearCost(req, res, next) {

        res
            .status(200)
            .json({
                Rocket: await raidingResourceBreakdown.rocketCost(),
                Satchel: await raidingResourceBreakdown.satchelCost(),
                C4: await raidingResourceBreakdown.c4Cost(),
                Beancan: await raidingResourceBreakdown.beancanCost(),
                ExploAmmo: await raidingResourceBreakdown.exploAmmoCost()
            })
    }

    async raidCraftingCost(req, res, next) {

        let jsonResponseCost = null

        if (req.body.Item.toLowerCase() === "rocket") {
            jsonResponseCost = await raidingResourceBreakdown.rocketCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "satchel") {
            jsonResponseCost = await raidingResourceBreakdown.satchelCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "c4") {
            jsonResponseCost = await raidingResourceBreakdown.c4Cost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "beancan") {
            jsonResponseCost = await raidingResourceBreakdown.beancanCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "exploammo") {
            jsonResponseCost = await raidingResourceBreakdown.exploAmmoCost(req.body.Amount)
        }

        res
            .status(200)
            .json({
                jsonResponseCost
            })
    }

    async calculateFastestRaidWay(req, res, next) {

        req.body.WallType.toLowerCase

    }

}

