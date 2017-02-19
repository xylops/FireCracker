Nodejs Backend template including the following function (Developing)

**Function**
* RESTAPI (expressjs)
* Logging (Wistonjs)
* Authentication (bcrypt, JWT token)
* Database (Mongodb, mongoose)
* RealTime websocket (Socket.io)
* GUI for managing users (handlebars)

**PS**
* refreshing token are handled by front end

**API call flow**
* 1. client create api call with token to server(axios)
* 2. client got data from server
* 3. do whatever you want with the data in the callback
* 4. at the same time inside the callback request a new token
* 5. then store the token in the localStorage token
