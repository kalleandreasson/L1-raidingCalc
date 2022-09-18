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

        let jsonResponseCraftCost = null

        if (req.body.Item.toLowerCase() === "rocket") {
            jsonResponseCraftCost = await raidingResourceBreakdown.rocketCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "satchel") {
            jsonResponseCraftCost = await raidingResourceBreakdown.satchelCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "c4") {
            jsonResponseCraftCost = await raidingResourceBreakdown.c4Cost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "beancan") {
            jsonResponseCraftCost = await raidingResourceBreakdown.beancanCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "exploammo") {
            jsonResponseCraftCost = await raidingResourceBreakdown.exploAmmoCost(req.body.Amount)
        }

        res
            .status(200)
            .json({
                jsonResponseCraftCost
            })
    }

    async raidingBuildWallCost(req, res, next) {

        let jsonResponseBuildCost = null

        if (req.body.Wall.toLowerCase() === "wood") {
            jsonResponseBuildCost = await raidingResourceBreakdown.woodWall()
        }
        if (req.body.Wall.toLowerCase() === "stone") {
            jsonResponseBuildCost = await raidingResourceBreakdown.stoneWall()
        }
        if (req.body.Wall.toLowerCase() === "metal") {
            jsonResponseBuildCost = await raidingResourceBreakdown.metalWall()
        }
        if (req.body.Wall.toLowerCase() === "hqm") {
            jsonResponseBuildCost = await raidingResourceBreakdown.hqmWall()
        }

        res
        .status(200)
        .json({
            jsonResponseBuildCost
        })

    }

    async calculateFastestRaidWay(req, res, next) {

        req.body.WallType.toLowerCase

    }

}

