
export class RaidingResourceBreakdown {

    async rocketCost (amount) {
        const rocket = {
            sulfur: 1400 * amount,
            charcoal: 1950 * amount,
            metalFragments: 100 * amount,
            lowgradeFuel: 30 * amount,
            metalPipes: 2 * amount
        }
        return rocket
    }
    
    async satchelCost (amount) {
        const satchel = {
            sulfur: 420 * amount,
            charcoal: 720 * amount,
            metalFragments: 80 * amount,
            cloth: 10 * amount,
            rope: 1 * amount
        }
        return satchel
    }

    async c4Cost(amount) {
        const c4 = {
            sulfur: 2200 * amount,
            charcoal: 3000 * amount,
            metalFragments: 200 * amount,
            lowgradeFuel: 60 * amount,
            cloth: 5 * amount,
            techTrash: 2 * amount
        }
        return c4
    }

    async exploAmmoCost(amount) {
        const exploAmmo = {
            sulfur: 50 * amount,
            charcoal: 60 * amount,
            metalFragments: 10 * amount
        }
        return exploAmmo
    }

    async beancanCost(amount) {
        const beancan = {
            sulfur: 120 * amount,
            charcoal: 180 * amount,
            metalFragments: 20 * amount
        }
        return beancan
    }

    async woodWallHealth() {
        const woodWall = {
            health: 250,
            beancanDamage: 19,
            satchelDamage: 91,
            c4Damage: 'destroyed',
            rocketDamage: 247,
            exploAmmoDamage: 5
        }
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
    }

    async metalDoorHealth() {
        const metalDoor = {
            health: 250,
            beancanDamage: 14,
            satchelDamage: 70,
            c4Damage: 250,
            rocketDamage: 220,
            exploAmmoDamage: 4
        }
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
    }


}