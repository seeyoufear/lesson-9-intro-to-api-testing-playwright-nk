
| # | Method | Scenario                                                                  | Expected result         |
|---|--------|---------------------------------------------------------------------------|-------------------------|
| 1 | GET    | Send request with a valid order ID (1-10)                                 | Status 200 OK           |
| 2 | GET    | Send request with an invalid order ID (outside 1-10 range)                | Status 400 BAD_REQUEST  |
| 3 | PUT    | Update order with valid ID (1-10) and valid 16-digit API key              | Status 200 OK           |
| 4 | PUT    | Send request with invalid API key                                         | Status 401 UNAUTHORIZED |
| 5 | DELETE | Delete order with valid ID (1-10) and valid 16-digit API key              | Status 204 NO_CONTENT   |

CALCULATE RISK DECISION DETAILS

 | #  | Method | Scenario                                                                     | Expected result               |
|----|--------|------------------------------------------------------------------------------|-------------------------------|
| 1  | POST   | Positive decision, low risk                                                  | Status 200 OK, low risk       |
| 2  | POST   | Positive decision, medium risk                                               | Status 200 OK, medium risk    |
| 3  | POST   | Negative decision, very high risk                                            | Status 200 OK, very high risk |
| 4  | POST   | Positive decision, high risk                                                 | Status 200 OK, high risk      |
| 5  | POST   | Valid JSON + boundary values (minimum valid: income = 1, debt = 0, age = 17) | Status 200 OK, very high risk |
| 6  | POST   | income = 0                                                                   | Status 400 BAD_REQUEST        |
| 7  | POST   | debt < 0                                                                     | Status 400 BAD_REQUEST        |