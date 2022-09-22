import { RaidingResource } from "../matrix/RaidingResource.js"
import { BuildingResources } from "../matrix/BuildingResources.js"
import { Calculator } from "../calculator/calculator.js"

const calculator = new Calculator
const raidingResource = new RaidingResource()
const buildingResource = new BuildingResources()

export class CalcController {

    async raidGearCost(req, res, next) {

        const amount = 1

        res
            .status(200)
            .json({
                Rocket: raidingResource.getRocketCost(amount),
                Satchel: raidingResource.getSatchelCost(amount),
                C4: raidingResource.getC4Cost(amount),
                Beancan: raidingResource.getBeancanCost(amount),
                ExploAmmo: raidingResource.getExploAmmoCost(amount)
            })
    }

    async raidCraftingCost(req, res, next) {

        let responseCraftCost = null

        if (req.body.Item.toLowerCase() === "rocket") {
            responseCraftCost = raidingResource.getRocketCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "satchel") {
            responseCraftCost = raidingResource.getSatchelCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "c4") {
            responseCraftCost = raidingResource.getC4Cost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "beancan") {
            responseCraftCost = raidingResource.getBeancanCost(req.body.Amount)
        }
        if (req.body.Item.toLowerCase() === "exploammo") {
            responseCraftCost = raidingResource.getExploAmmoCost(req.body.Amount)
        }

        res
            .status(200)
            .json({
                responseCraftCost
            })
    }

    async raidingBuildWallCost(req, res, next) {

        let ResponseBuildCost = null

        if (req.body.Grade.toLowerCase() === "wood") {
            ResponseBuildCost = await buildingResource.woodWallCost()
        }
        if (req.body.Grade.toLowerCase() === "stone") {
            ResponseBuildCost = await buildingResource.stoneWallCost()
        }
        if (req.body.Grade.toLowerCase() === "metal") {
            ResponseBuildCost = await buildingResource.metalWallCost()
        }
        if (req.body.Grade.toLowerCase() === "hqm") {
            ResponseBuildCost = await buildingResource.hqmWallCost()
        }

        res
        .status(200)
        .json({
            ResponseBuildCost
        })

    }

    async calculateCheapEfficentRaidWay(req, res, next) {

        let wallHealth = 0
        let wallObject = null

        if (req.body.Wall.toLowerCase() === "wood") {
            wallObject = buildingResource.getWoodWall()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "stone") {
            wallObject = buildingResource.getStoneWall()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "metal") {
            wallObject = buildingResource.getMetalWall()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "hqm") {
            wallObject = buildingResource.getHqmWall()
            wallHealth = wallObject.health  
        }
        //Doors below, they are treated the same way as walls
        if (req.body.Wall.toLowerCase() === "wooddoor") {
            wallObject = buildingResource.getWoodDoor()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "metaldoor") {
            wallObject = buildingResource.getMetalDoor()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "garagedoor") {
            wallObject = buildingResource.getGarageDoor()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "hqmdoor") {
            wallObject = buildingResource.getHqmDoor()
            wallHealth = wallObject.health  
        }

        const responseRaidResources = await calculator.calculateCheapEfficentRaidWay(wallHealth, wallObject)

        res
        .status(200)
        .json({
            responseRaidResources
        })
    }

    async calculateFastestRaidWay(req, res, next) {

        let wallHealth = 0
        let wallObject = null

        if (req.body.Wall.toLowerCase() === "wood") {
            wallObject = buildingResource.getWoodWall()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "stone") {
            wallObject = buildingResource.getStoneWall()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "metal") {
            wallObject = buildingResource.getMetalWall()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "hqm") {
            wallObject = buildingResource.getHqmWall()
            wallHealth = wallObject.health  
        }

         //Doors below, they are treated the same way as walls
         if (req.body.Wall.toLowerCase() === "wooddoor") {
            wallObject = buildingResource.getWoodDoor()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "metaldoor") {
            wallObject = buildingResource.getMetalDoor()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "garagedoor") {
            wallObject = buildingResource.getGarageDoor()
            wallHealth = wallObject.health  
        }
        if (req.body.Wall.toLowerCase() === "hqmdoor") {
            wallObject = buildingResource.getHqmDoor()
            wallHealth = wallObject.health  
        }

        const responseRaidResources = await calculator.calculateFastestRaidWay(wallHealth, wallObject)

        res
        .status(200)
        .json({
            responseRaidResources
        })

    }

}
