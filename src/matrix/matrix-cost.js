
export class RaidingResourceBreakdown {

    async rocketCost () {
        const rocket = {
            sulfur: 1400,
            charcoal: 1950,
            metalFragments: 100,
            lowgradeFuel: 30,
            metalPipes: 2
        }
        return rocket
    }
    
    async satchelCost () {
        const satchel = {
            sulfur: 420,
            charcoal: 720,
            metalFragments: 80,
            cloth: 10,
            rope: 1
        }
        return satchel
    }

}