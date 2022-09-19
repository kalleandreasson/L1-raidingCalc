import { RaidingResourceBreakdown } from "../matrix/matrix-cost.js"
import { BuildingResourceBreakdown } from "../matrix/matrix-buildHealth.js"

const raidingResourceBreakdown = new RaidingResourceBreakdown()
const buildingResourceBreakdown = new BuildingResourceBreakdown()

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
            jsonResponseBuildCost = await buildingResourceBreakdown.woodWallCost()
        }
        if (req.body.Wall.toLowerCase() === "stone") {
            jsonResponseBuildCost = await buildingResourceBreakdown.stoneWallCost()
        }
        if (req.body.Wall.toLowerCase() === "metal") {
            jsonResponseBuildCost = await buildingResourceBreakdown.metalWallCost()
        }
        if (req.body.Wall.toLowerCase() === "hqm") {
            jsonResponseBuildCost = await buildingResourceBreakdown.hqmWallCost()
        }

        res
        .status(200)
        .json({
            jsonResponseBuildCost
        })

    }

    async calculateFastestRaidWay(req, res, next) {

        let wallHealth = 0
        let Object = null

        if (req.body.Wall.toLowerCase() === "wood") {
            wallHealth = (await buildingResourceBreakdown.woodWallHealth()).health
            Object = (await buildingResourceBreakdown.woodWallHealth())
        }
        if (req.body.Wall.toLowerCase() === "stone") {
            wallHealth = (await buildingResourceBreakdown.stoneWallHealth()).health
            Object = (await buildingResourceBreakdown.stoneWallHealth())
        }
        if (req.body.Wall.toLowerCase() === "metal") {
            wallHealth = (await buildingResourceBreakdown.metalWallHealth()).health
            Object = (await buildingResourceBreakdown.metalWallHealth())
        }
        if (req.body.Wall.toLowerCase() === "hqm") {
            wallHealth = (await buildingResourceBreakdown.hqmWallHealth()).health
            Object = (await buildingResourceBreakdown.hqmWallHealth())
        }

        //Kolla så den inte är destroyed på direkten
        //Måste på något sätt upprepa första steget om den inte är destroyed. Gick inte att loopa på obj med obj.entries.
        //Kan göra typ 21 ifsatser om jag räknade rätt men känns muppigt.
        //TODO lista ut en bra algoritm. Både för snabbaste och billigaste vägen ner till 0

        if (wallHealth - Object.c4Damage !== 'destroyed') {
            wallHealth = wallHealth - Object.c4Damage
        } if (wallHealth === NaN) {
            wallHealth = wallHealth - Object.rocketDamage
            console.log(wallHealth)
        }
    }

    async calculateCheapestRaidWay(req, res, next) {

        req.body.WallType.toLowerCase

    }

}

