# Test Rapport
Manuella tester:

Datum: 9/21/2022, Verison: 35d3575, Note: testing endpoints

U1: The user should be able to retrieve the cost for all the raiding materials from the endpoint /costAll <br>
U2: The user should be able to retrieve the cost for one specific raiding material multiplied by their amount input from the endpoint /cost <br>
U3: The user should be able to retrieve the cost for all buildings for the grade that the user had as input from the endpoint /buildCost <br>
U4: The user should be able to retrieve the cheapest way to destroy a wall/door of any kind from the endpoint /raidCheapestWay <br>
U5: The user should be able to retrieve the fastest way to destroy a wall/door of any kind from the endpoint /raidFastestWay

TC1.1: endpoint /costAll should be sending a json respon with the cost for all raiding materials. <br>
TC2.1: endpoint /cost should be sending a json response with the cost for one of the raiding materials multiplied by the users amount input <br>
TC3.1: endpoint /buildCost should be sending a json response with the cost for all buildings within that grade <br>
TC4.1: endpoint /raidCheapestWay should be sending a json response with the items needed to destroy a wall/door for as low cost as possible <br>
TC5.1: endpoint /raidFastestWay should be sending a json response with the items needed to destroy a wall as fast as possible <br>

| Test | UC1 | UC2 | UC3 | UC4 | UC5 |
|------|-----|-----|-----|-----|-----|
| TC1.1 | 1/OK | 0 | 0 | 0 | 0 |
| TC2.1 | 0 | 1/OK | 0 | 0 | 0 |
| TC3.1 | 0 | 0 | 1/OK | 0 | 0 |
| TC4.1 | 0 | 0 | 0 | 1/OK | 0 |
| TC5.1 | 0 | 0 | 0 | 0 | 1/OK |
| COVERAGE & SUCCESS | 1/OK | 1/OK | 1/OK | 1/OK | 1/OK |

### Comment

Everything went as planned. 
Exmaple TC1.1: The user gets a json response with the cost for each of the different raiding materials <br>
Example TC2.1: The user input is Amount: 3 Item: c4 then the user gets a json response with what is needed to craft 3 c4 <br>
Example TC3.1: The user input is Grade: stone then the user gets a json resposne with all the costs for building with stone <br>
Example TC4.1: The user input is Wall: metal then the user gets a json response with cheapest way to destroy a metal wall <br>
Example TC5.1: The user input is Wall: hqm then the user gets a json response with the fastest way to destroy a metal wall <br>
