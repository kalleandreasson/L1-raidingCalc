export class BuildingResourceBreakdown {

    async woodWallHealth() {
        const woodWall = {
            health: 250,
            beancanDamage: 19,
            satchelDamage: 91,
            c4Damage: 'destroyed',
            rocketDamage: 247,
            exploAmmoDamage: 5
        }
        return woodWall
    }

    async stoneWallHealth() {
        const stoneWall = {
            health: 500,
            beancanDamage: 11,
            satchelDamage: 51,
            c4Damage: 275,
            rocketDamage: 137,
            exploAmmoDamage: 2
        }
        return stoneWall
    }

    async MetalWallHealth() {
        const metalWall = {
            health: 1000,
            beancanDamage: 9,
            satchelDamage: 43,
            c4Damage: 275,
            rocketDamage: 137,
            exploAmmoDamage: 2
        }
        return metalWall
    }

    async hqmWallHealth() {
        const hqmWall = {
            health: 2000,
            beancanDamage: 9,
            satchelDamage: 43,
            c4Damage: 275,
            rocketDamage: 137,
            exploAmmoDamage: 2
        }
        return hqmWall
    }

    async woodDoorHealth() {
        const woodDoor = {
            health: 200,
            beancanDamage: 35,
            satchelDamage: 170,
            c4Damage: 'destroyed',
            rocketDamage: 'destroyed',
            exploAmmoDamage: 11
        }
        return woodDoor
    }

    async metalDoorHealth() {
        const metalDoor = {
            health: 250,
            beancanDamage: 14,
            satchelDamage: 70,
            c4Damage: 'destroyed',
            rocketDamage: 220,
            exploAmmoDamage: 4
        }
        return metalDoor
    }

    async garageDoorHealth() {
        const garageDoor = {
            health: 600,
            beancanDamage: 14,
            satchelDamage: 70,
            c4Damage: 440,
            rocketDamage: 220,
            exploAmmoDamage: 4,
        }
        return garageDoor
    }


    async hqmDoorHealth() {
        const hqmDoor = {
            health: 800,
            beancanDamage: 14,
            satchelDamage: 70,
            c4Damage: 440,
            rocketDamage: 220,
            exploAmmoDamage: 4
        }
        return hqmDoor
    }

    async woodWallCost() {
        const woodWall = {
            wallCost: 200,
            foundation: 200,
            square: 200,
            triangle: 50,
            triangleFoundation: 100
        }
        return woodWall
    }

    async stoneWallCost() {
        const stoneWall = {
            wallCost: 300,
            foundation: 300,
            square: 150,
            triangle: 150,
            trianlgeFoundation: 150
        }
        return stoneWall
    }

    async metalWallCost() {
        const metalWall = {
            wallCost: 200,
            foundation: 200,
            square: 100,
            triangle: 50,
            triangleFoundation: 100
        }
        return metalWall
    }

    async hqmWallCost() {
        const hqmWall = {
            wallCost: 25,
            foundation: 25,
            roof: 13,
            triangle: 7,
            triangleFoundation: 13
        }
        return hqmWall
    }


}