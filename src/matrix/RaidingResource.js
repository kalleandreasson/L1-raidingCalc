
export class RaidingResource {

    getRocketCost (amount) {
        const rocket = {
            sulfur: 1400 * amount,
            charcoal: 1950 * amount,
            metalFragments: 100 * amount,
            lowgradeFuel: 30 * amount,
            metalPipes: 2 * amount
        }
        return rocket
    }
    
    getSatchelCost (amount) {
        const satchel = {
            sulfur: 420 * amount,
            charcoal: 720 * amount,
            metalFragments: 80 * amount,
            cloth: 10 * amount,
            rope: 1 * amount
        }
        return satchel
    }

    getC4Cost(amount) {
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

    getExploAmmoCost(amount) {
        const exploAmmo = {
            sulfur: 50 * amount,
            charcoal: 60 * amount,
            metalFragments: 10 * amount
        }
        return exploAmmo
    }

    getBeancanCost(amount) {
        const beancan = {
            sulfur: 120 * amount,
            charcoal: 180 * amount,
            metalFragments: 20 * amount
        }
        return beancan
    }
}