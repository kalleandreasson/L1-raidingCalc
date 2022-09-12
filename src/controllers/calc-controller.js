import { RaidingResourceBreakdown } from "../matrix/matrix-cost.js"

const raidingResourceBreakdown = new RaidingResourceBreakdown()

export class CalcController {

    async raidGearCost(req, res, next) {
        res
            .status(200)
            .json({
                Rocket: await raidingResourceBreakdown.rocketCost(),
                Satchel: await raidingResourceBreakdown.satchelCost()
            })
    }

}

