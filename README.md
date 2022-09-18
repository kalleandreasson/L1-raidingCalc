# L1-raidingCalc



# Test Rapport
Manuella tester:

Datum: 9/18/2022, Verison: 45dd10f, Note: testing endpoints

U1: The user should be able to retrieve the cost for all the raiding materials from the endpoint /costAll
U2: The user should be able to retrieve the cost for one specific raiding material multiplied by their amount input.

TC1.1: endpoint /costAll should be sending a json respon with the cost for all raiding materials.
TC1.2: endpoint /cost should be sending a json response with the cost for one of the raiding materials multiplied by the users amount input

| Test | UC1 | UC2 |
|------|-----|-----|
| TC1.1 | 1/OK | 0 |
| TC2.1 | 0 | 1/OK |
| COVERAGE & SUCCESS | 1/OK | 1/OK |

### Comment

Everything went as planned. 
Exmaple: User sends in c4 and 4 in the body to the API. In the response its calculated how much materials of each sort is needed to craft 4 c4.
