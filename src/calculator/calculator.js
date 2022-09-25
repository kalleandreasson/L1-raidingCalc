
export class Calculator {

    async calculateCheapEfficentRaidWay(wallHealth, wallObject) {
        let excessiveDamageMax = -10
        let weaponUse = ""

        do {
           
            for (let weapon of wallObject.damageArray.entries()) {
                let weaponName = weapon[0]
                let weaponDamage = weapon[1]
                if (weaponDamage === -1) {
                    continue
                }
                if (wallHealth - weaponDamage < excessiveDamageMax) {
                    continue
                }
                wallHealth -= weaponDamage
                weaponUse += weaponName + ", "
                if (wallHealth < 0) {
                    console.log(wallHealth)
                    console.log('wall is destroyed')
                    return weaponUse
                }
                break
            }
            
        } while (wallHealth > excessiveDamageMax);

    }

    async calculateFastestRaidWay(wallHealth, wallObject) {
        let excessiveDamageMax = -75
        let weaponUse = ""

        do {
           
            for (let weapon of wallObject.damageArray.entries()) {
                let weaponName = weapon[0]
                let weaponDamage = weapon[1]
                if (weaponDamage === -1) {
                    continue
                }
                if (wallHealth - weaponDamage < excessiveDamageMax) {
                    continue
                }
                wallHealth -= weaponDamage
                weaponUse += weaponName + ", "
                if (wallHealth < 0) {
                    console.log(wallHealth)
                    console.log('wall is destroyed')
                    return weaponUse
                }
                break
            }
            
        } while (wallHealth > excessiveDamageMax);

    }

}