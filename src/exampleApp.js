//Example on route /costALl
const costForAllRaidingMaterials = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/costAll', {
    method: 'GET',
  })

  const costAllResponse = await costForAllRaidingMaterials.json()
  console.log(costAllResponse)



//Example on route /buildCost
const buildCost = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/buildCost', {
    method: 'POST',
    body: JSON.stringify({Grade: 'Stone'})
  })

  const buildCostResponse = await buildCost.json()
  console.log(buildCostResponse)
  


//Example on route /raidCheapestWay
const raidCheapestWay = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/raidCheapestWay', {
    method: 'POST',
    body: JSON.stringify({Wall: 'Stone'})
  })

  const raidCheapestWayResponse = await raidCheapestWay.json()
  console.log(raidCheapestWayResponse)



//Example on route /raidFastestWay
const raidFastestWay = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/raidFastestWay', {
    method: 'POST',
    body: JSON.stringify({Wall: 'Metal'})
  })

  const raidFastestWayResponse = await raidFastestWay.json()
  console.log(raidFastestWayResponse)


  
//Example on route /cost

const body = {
    Item: 'Satchel',
    Amount: '4'
}

  const costForOneRaidingMaterial = await fetch('https://cscloud7-246.lnu.se/rust-raid-calc/cost', {
    method: 'POST',
    body: JSON.stringify(body)
  })

  const costForOneResponse = await costForOneRaidingMaterial.json()
  console.log(costForOneResponse)
