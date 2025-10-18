
| # | Method | Scenario                                                                  | Expected result         |
|---|--------|---------------------------------------------------------------------------|-------------------------|
| 1 | GET    | Send request with a valid order ID (1-10)                                 | Status 200 OK           |
| 2 | GET    | Send request with an invalid order ID (outside 1-10 range)                | Status 400 BAD_REQUEST  |
| 3 | PUT    | Update order with valid ID (1-10) and valid 16-digit API key              | Status 200 OK           |
| 4 | PUT    | Send request with invalid API key                                         | Status 401 UNAUTHORIZED |
| 5 | DELETE | Delete order with valid ID (1-10) and valid 16-digit API key              | Status 204 NO_CONTENT   |


