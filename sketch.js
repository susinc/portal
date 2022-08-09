rishi = {
  "username": "rishi",
  "password": "rishi",
  "rank": 2,
  "banned": false
}

bach = {
  "username": "bach",
  "password": "bach",
  "rank": 1
}

daniel = {
  "username": "daniel",
  "password": "daniel",
  "rank": 1
}

function setup() {
  createCanvas(900, 675);
  header = createElement("h1", "Welcome to the Sus Inc. Portal. Please log in.")
  header.position(0, 0)

  usernameMessage = createElement("h3", "Username: ")
  usernameMessage.position(0, 60)

  usernameBox = createInput()
  usernameBox.input(saveUsername)
  usernameBox.position(0, 120)

  passwordMessage = createElement("h3", "Password: ")
  passwordMessage.position(0, 180)

  passwordBox = createInput()
  passwordBox.input(savePassword)
  passwordBox.position(0, 240)

  loginButton = createButton("Log in")
  loginButton.position(0, 270)
  loginButton.mousePressed(login)

  rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is Replacement CEO, or rank 2.")
  rishiRankMessage.position(-100, -100);

  danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is CEO, or rank 1.")
  danielRankMessage.position(-100, -100);

  bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is CEO, or rank 1.")
  bachRankMessage.position(-100, -100);
}

function draw() {
  background(170);

}

function login() {
  if (enteredUsername == rishi["username"] && enteredPassword == rishi["password"]) {
    header.position(-100, -100)
    usernameMessage.position(-100, -100)
    usernameBox.position(-100, -100)
    passwordMessage.position(-100, -100)
    passwordBox.position(-100, -100)
    loginButton.position(-100, -100)
    rishiRankMessage.position(0, 0)
  } 

  if (enteredUsername == daniel["username"] && enteredPassword == daniel["password"]) {
    header.position(-100, -100)
    usernameMessage.position(-100, -100)
    usernameBox.position(-100, -100)
    passwordMessage.position(-100, -100)
    passwordBox.position(-100, -100)
    loginButton.position(-100, -100)
    danielRankMessage.position(0, 0)
  } 

  if (enteredUsername == bach["username"] && enteredPassword == bach["password"]) {
    header.position(-100, -100)
    usernameMessage.position(-100, -100)
    usernameBox.position(-100, -100)
    passwordMessage.position(-100, -100)
    passwordBox.position(-100, -100)
    loginButton.position(-100, -100)
    bachRankMessage.position(0, 0)
  } 
}

function saveUsername() {
  enteredUsername = this.value()
}

function savePassword() {
  enteredPassword = this.value()
}
