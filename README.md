# js-sandbox

Javascript sandbox in docker, use the eval function to execute untrusted code. 

# How to use ?

- It is a simple API that is listening on all the routes
- You can make a _POST_, _PATCH_ or _PULL_ request with your untrusted JS in the body
- You can make a _GET_ or _DELETE_ request with your untrusted JS in the query parameter "data" 

The API will then eval the code and sending the result into the body of the response.
