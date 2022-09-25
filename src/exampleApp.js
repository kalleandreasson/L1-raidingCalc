import { json } from 'express'
import fetch from 'node-fetch'

//Example on route /costALl
const costForAllRaidingMaterials = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/costAll', {
    method: 'GET',
  })

const costAllResponse = await costForAllRaidingMaterials.json()
console.log(costAllResponse)


const buildCostBody = {
  Grade:"Stone"
}

//Example on route /buildCost
const buildCost = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/buildCost', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({Grade:"Stone"})
  })

const buildCostResponse = await buildCost.json()
console.log(buildCostResponse)
  

//Example on route /raidCheapestWay
const raidCheapestWay = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/raidCheapestWay', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({Wall:"Stone"})
  })

const raidCheapestWayResponse = await raidCheapestWay.json()
console.log(raidCheapestWayResponse)



//Example on route /raidFastestWay
const raidFastestWay = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/raidFastestWay', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({Wall:"Metal"})
  })

const raidFastestWayResponse = await raidFastestWay.json()
console.log(raidFastestWayResponse)


  
//Example on route /cost

const costForOneRaidingMaterial = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/cost', {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({Item:"Satchel", Amount: "4"})
})

const costForOneResponse = await costForOneRaidingMaterial.json()
console.log(costForOneResponse)
