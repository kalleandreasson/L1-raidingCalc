import { RaidingResource } from "../matrix/RaidingResource.js"
import { BuildingResources } from "../matrix/BuildingResources.js"

const raidingResource = new RaidingResource()
const buildingResource = new BuildingResources()

export class CalcController {

    async raidGearCost(req, res, next) {

        res
            .status(200)
            .json({
                Rocket: raidingResource.getRocketCost(),
                Satchel: raidingResource.getSatchelCost(),
                C4: raidingResource.getC4Cost(),
                Beancan: raidingResource.getBeancanCost(),
                ExploAmmo: raidingResource.getExploAmmoCost()
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

        let jsonResponseBuildCost = null

        if (req.body.Wall.toLowerCase() === "wood") {
            jsonResponseBuildCost = await buildingResource.woodWallCost()
        }
        if (req.body.Wall.toLowerCase() === "stone") {
            jsonResponseBuildCost = await buildingResource.stoneWallCost()
        }
        if (req.body.Wall.toLowerCase() === "metal") {
            jsonResponseBuildCost = await buildingResource.metalWallCost()
        }
        if (req.body.Wall.toLowerCase() === "hqm") {
            jsonResponseBuildCost = await buildingResource.hqmWallCost()
        }

        res
        .status(200)
        .json({
            jsonResponseBuildCost
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

        //Kolla så den inte är destroyed på direkten
        //Om det inte är destroyed så testar jag med sprängmedlet som gör mest skada, går det inte sönder då så testar jag igen.
        //Om väggen för under 0 liv så testar jag med ett annat sprängmedel. det som är näst bäst. sen forstätter man och trappar ner tills du kommer så nära 0 som möjligt.
        //TODO lista ut en bra algoritm. Både för snabbaste och billigaste vägen ner till 0

        //Måste på något sätt kunna upprepa samma itteration om det går att köra samma sprängmedel 2 ggr
        //Måste spara vad som använda på något sätt, om man kunde använda det utan att väggen gick sönder ska det sparas.

        //TODO: Göra en koll om jag är på mitt lägsta vapen och har t.ex 1 i liv på väggen så kan jag inte ta sönder, då ska jag ta sönder endån med lägsta vapen.
        //TODO: raidcalculator ska brytas ut till en egen class och inte ligga i controller
    
        let weaponUse = ''

        do {
           
            for (let weapon of wallObject.damageArray.entries()) {
                let weaponName = weapon[0]
                let weaponDamage = weapon[1]
                if (weaponDamage === -1) {
                    continue
                }
                if (wallHealth - weaponDamage < 0) {
                    continue
                }
                wallHealth -= weaponDamage
                weaponUse += weaponName + ', '
                break
            }
            
        } while (wallHealth > 0);
    }

    async calculateCheapestRaidWay(req, res, next) {

        req.body.WallType.toLowerCase

    }

}

