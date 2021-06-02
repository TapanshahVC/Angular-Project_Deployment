
const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./users.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({Email, Password}){
  return userdb.user.find(user => user.Email === Email && user.Password === Password)
}

function isExist({Email}){
  const userList = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'));
  return userList.user.find(user => user.Email === Email)
}

// Add New User
server.post('/user', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const {FirstName, LastName, ContactNumber, Email, Password, Address, UserType} = req.body;

  if(isExist({Email})) {
    const status = 400;
    const message = 'Email and Password already exist';
    res.json({status, message});
    return
  }

  fs.readFile("./users.json", (err, data) => {
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    // var last_item_id = data.user[data.user.length-1].id;
    var last_item_id = data.user[data.user.length-1].id;
    // console.log('DATA----', data.user[data.user.length-1].id)
    
    //Add new user
    data.user.push({id: last_item_id+1, Email: Email, Password: Password, UserType: UserType, Address: Address, ContactNumber: ContactNumber, FirstName: FirstName, LastName: LastName}); //add some data
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({status, message})
          return
        }
      });
    });
    res.status(200).json({result: "success"});
})

// Login to one of the users from ./users.json
server.post('/signin', (req, res) => {
  console.log("login endpoint called; request body:");
  console.log('reqbody',req.body);
  const {Email, Password} = req.body;
  const user = isAuthenticated({Email, Password});
  console.log('Email-----', ({Email, Password}))
  console.log('Password-----', Password)
  console.log('user',user);
  if (!isAuthenticated({Email, Password})) {
    const status = 401
    const message = 'Incorrect Email or assword'
    res.json({status, message})
    return
  }
  const access_token = createToken({Email, Password})
  console.log("Access Token:" + access_token);
  res.json({ token :access_token, user:{id: user.id, FirstName: user.FirstName, LastName: user.LastName, ContactNumber: user.ContactNumber, Address: user.Address, Email: user.Email, UserType: user.UserType}});
})

// Edit User
server.put('/edit', (req, res) => {
  console.log("edit user endpoint called; request body:");
  console.log(req.body);
  req.body.UserType = UserType;
  const {Email, id} = req.body;

  fs.readFile("./users.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };
    
    var data = JSON.parse(data.toString());

    const checkUser = data.user.find( user => user.Email === Email && user.id !== id );
    if(checkUser) {
      const status = 400;
      const message = 'Username already exist';
      res.status(status).json({status, message});
      return
    }
    
    // Get current users data
    var foundIndex = data.user.findIndex( user => user.id === id );
    console.log(foundIndex);
    data.user[foundIndex] = req.body;
    //Add new user
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => { 
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({status, message})
          return
        }
    });
    res.status(200).json({result: "success"});
});
});

// Edit User
server.get('/user', (req, res) => {
  console.log("get user endpoint called; request id:");
  console.log(req.params);
  const userId = Number(req.params.userId);

  fs.readFile("./users.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };
      var data = JSON.parse(data.toString());
    // Get current users data
    var userInfo = data.user.find( user => user.id === userId );
    res.status(200).json(userInfo);
  });
})

server.get('/userlist', (req, res) => {
  console.log('UserListing on there specific type')

  fs.readFile("./users.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.json({status, message})
        return
      };
      var data = JSON.parse(data.toString());
      console.log('usertype:',data.user)
      const result = data.user.filter(el => el.UserType === 'admin' || el.UserType === 'user')
      res.status(200).json(result);
  });
})

server.put('/profile', (req, res) => {
  console.log(req.body);
  req.body.UserType = UserType;
  const {id, FirstName, LastName, ContactNumber, Email, Password, Address, UserType} = req.body;

  fs.readFile("./users.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };
    
    var data = JSON.parse(data.toString());
    
    // Get current users data
    var foundIndex = data.user.findIndex( user => user.id === id );
    var userDetails = data.user.find( user => user.id === id );
    userDetails.id = id;
    userDetails.FirstName = FirstName;
    userDetails.LastName = LastName;
    userDetails.ContactNumber = ContactNumber;
    userDetails.Email = Email;
    userDetails.Password = Password;
    userDetails.Address = Address;
    data.user[foundIndex] = userDetails;

    //Add new user
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => { 
        if (err) {
          const status = 401
          const message = err
          res.status(status).json({status, message})
          return
        }
    });
    res.status(200).json({result: "success"});
  });
});

server.delete('/userlist/:userId', (req, res) => {
  console.log("get user endpoint called to delete; request id:");
  console.log('reqparam',req.params);
  const userId = Number(req.params.userId);

  fs.readFile("./users.json", (err, data) => {  
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      };
      var data = JSON.parse(data.toString());
      var foundIndex = data.user.findIndex( user => user.id === userId );
      data.user.splice(foundIndex, 1);

    // Get current users data
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => { 
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({status, message})
        return
      }
    });
    res.status(200).json({result: "success"});
  });
})


server.use(router)

server.listen(8000, () => {
  console.log('Run Auth API Server')
})