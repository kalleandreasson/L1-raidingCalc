export class BuildingResources {

    getWoodWall() {
        const woodWall = {
            health: 250,
            damageArray: new Map([
                ['c4Damage', -1],
                ['rocketDamage', 247],
                ['satchelDamage', 91],
                ['beancanDamage', 19],
                ['exploAmmoDamage', 5],
            ])
        }
        return woodWall
    }

    getStoneWall() {
        const stoneWall = {
            health: 500,
            damageArray: new Map([
                ['c4Damage', 275],
                ['rocketDamage', 137],
                ['satchelDamage', 51],
                ['beancanDamage', 11],
                ['exploAmmoDamage', 2],
            ])
            }
        return stoneWall
    }

    getMetalWall() {
        const metalWall = {
            health: 1000,
            damageArray: new Map([
                ['c4Damage', 275],
                ['rocketDamage', 137],
                ['satchelDamage', 43],
                ['beancanDamage', 9],
                ['exploAmmoDamage', 2],
            ])
        }
        return metalWall
    }

    getHqmWall() {
        const hqmWall = {
            health: 2000,
            damageArray: new Map([
                ['c4Damage', 275],
                ['rocketDamage', 137],
                ['satchelDamage', 43],
                ['beancanDamage', 9],
                ['exploAmmoDamage', 2],
            ])
        }
        return hqmWall
    }

    getWoodDoor() {
        const woodDoor = {
            health: 200,
            damageArray: new Map([
                ['c4Damage', -1],
                ['rocketDamage', -1],
                ['satchelDamage', 170],
                ['beancanDamage', 35],
                ['exploAmmoDamage', 11],
            ])
        }
        return woodDoor
    }

    getMetalDoor() {
        const metalDoor = {
            health: 250,
            damageArray: new Map([
                ['c4Damage', -1],
                ['rocketDamage', 220],
                ['satchelDamage', 70],
                ['beancanDamage', 14],
                ['exploAmmoDamage', 4],     
            ])
        }
        return metalDoor
    }

    getGarageDoor() {
        const garageDoor = {
            health: 600,
            damageArray: new Map([
                ['c4Damage', 440],
                ['rocketDamage', 220],
                ['satchelDamage', 70],
                ['beancanDamage', 14],
                ['exploAmmoDamage', 4],
            ])
        }
        return garageDoor
    }


    getHqmDoor() {
        const hqmDoor = {
            health: 800,
            damageArray: new Map([
                ['c4Damage', 440],
                ['rocketDamage', 220],
                ['satchelDamage', 70],
                ['beancanDamage', 14],
                ['exploAmmoDamage', 4],
            ])
        }
        return hqmDoor
    }


    //COSTS NOT DAMAGE SHEET


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