rishi = {
  "username": "rishi",
  "password": "rishi",
  "sr": 69420,
  "restrictedsr": 69420,
  "sd": 0,
  "banned": false
}

bach = {
  "username": "bach",
  "password": "bach",
  "sr": 69420,
  "restrictedsr": 69420,
  "sd": 0,
  "banned": false
}

daniel = {
  "username": "daniel",
  "password": "daniel",
  "sr": 69420,
  "restrictedsr": 69420,
  "sd": 0,
  "banned": false
}

function setup() {
  createCanvas(900, 675);
  header = createElement("h1", "Welcome to the Sus Inc. Portal. Please log in.")
  header.position(0, 0)

  usernameMessage = createElement("h3", "Username: ")
  usernameMessage.position(0, 60)

  usernameBox = createInput()
  usernameBox.input(saveUsername)
  usernameBox.position(0, 100)

  passwordMessage = createElement("h3", "Password: ")
  passwordMessage.position(0, 140)

  passwordBox = createInput()
  passwordBox.input(savePassword)
  passwordBox.position(0, 180)

  loginButton = createButton("Log in")
  loginButton.position(0, 210)
  loginButton.mousePressed(login)

  if (rishi["sr"] == 69420) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is CEO, or rank 1.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 42069) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is Replacement CEO, or rank 2.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 20000) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is SBD, or rank 3.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 17500) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is BD, or rank 4.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 15000) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is UwU Person, or rank 5.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 12500) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is Senior Manager, or rank 6.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 10000) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is Manager, or rank 7.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 7500) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is Junior Manager, or rank 8.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 5000) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is HSW, or rank 9.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 2500) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is SW, or rank 10.")
    rishiRankMessage.position(-100, -100);
  }

  else if (rishi["sr"] >= 1000) {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Your rank is Employee, or rank 11.")
    rishiRankMessage.position(-100, -100);
  }

  else {
    rishiRankMessage = createElement("h2", "Welcome, Rishi, to your Sus Inc. Portal. Youare not in Sus Inc. yet. Keep grinding SR!")
    rishiRankMessage.position(-100, -100);
  }


  if (daniel["sr"] == 69420) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is CEO, or rank 1.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 42069) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is Replacement CEO, or rank 2.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 20000) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is SBD, or rank 3.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 17500) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is BD, or rank 4.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 15000) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is UwU Person, or rank 5.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 12500) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is Senior Manager, or rank 6.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 10000) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is Manager, or rank 7.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 7500) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is Junior Manager, or rank 8.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 5000) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is HSW, or rank 9.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 2500) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is SW, or rank 10.")
    danielRankMessage.position(-100, -100);
  }

  else if (daniel["sr"] >= 1000) {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Your rank is Employee, or rank 11.")
    danielRankMessage.position(-100, -100);
  }

  else {
    danielRankMessage = createElement("h2", "Welcome, Daniel, to your Sus Inc. Portal. Youare not in Sus Inc. yet. Keep grinding SR!")
    danielRankMessage.position(-100, -100);
  }

  if (bach["sr"] == 69420) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is CEO, or rank 1.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 42069) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is Replacement CEO, or rank 2.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 20000) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is SBD, or rank 3.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 17500) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is BD, or rank 4.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 15000) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is UwU Person, or rank 5.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 12500) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is Senior Manager, or rank 6.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 10000) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is Manager, or rank 7.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 7500) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is Junior Manager, or rank 8.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 5000) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is HSW, or rank 9.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 2500) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is SW, or rank 10.")
    bachRankMessage.position(-100, -100);
  }

  else if (bach["sr"] >= 1000) {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Your rank is Employee, or rank 11.")
    bachRankMessage.position(-100, -100);
  }

  else {
    bachRankMessage = createElement("h2", "Welcome, Bach, to your Sus Inc. Portal. Youare not in Sus Inc. yet. Keep grinding SR!")
    bachRankMessage.position(-100, -100);
  }
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
