var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

var ships =[{ locations: ["10", "20", "30"], hits: ["", "", ""] },
            { locations: ["32", "33", "34"], hits: ["", "", ""] },
            { locations: ["63", "64", "65"], hits: ["", "", "hits"] }];

var mode1 = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [{ locations: ["0", "0", "0"], hits: ["", "", ""] },
          { locations: ["0", "0", "0"], hits: ["", "", ""] },
          { locations: ["0", "0", "0"], hits: ["", "", ""] }],
          fire: function(guess) {
            for (var i = 0; i < this,numShips; i++) {
                 var ship = this.ships[i];
                 var locations = ship.locations;
                 var index = ship.locations.indexOf(guess);
                 if (index >= 0) {
                 ship.hits[index] = "hit";
                 view.displayHit(guess);
                 view.displayMessage("You sank my battleship!");
                 if (this.isSunk(ship)) {
                   view.displayMessage("You sank my battleship!");
                  this.shipsSunk++;
                 }
                 return true;
            }
          }
          view.displayMiss(guess) 
          view.displayMessage("You missed.");
          return false;
        },
        isSunk: function(ship) {
          for (var i = 0; i < this.shipLength; i++)  {
            if (ship.hits[i] !== "hit") {
              return false;
            }
          }
          return true;
        }
      };
      function parseGuess(guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
          alert("Oops, please enter a letter and a number on the board,");
        } else {
          firstChar = guess.charAt(0);
          var row = alphabet.indexOf(firstChar);
          var column = guess.charAt(1);

          if (isNaN(row) || isNaN(column))  {
            alert("Oops, that isn't on the board.");
          } else if (row < 0 || row >= model.boardSize ||
          column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
          } else {
            return row + column;
          }
        }
        return null;
      }
      var controller = {
        guesses: 0,
        
        processGuess: function(guess) {
          var location = parseGuess(guess);
          if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
              view.displayMessage("You sank all my battleships, in " +
              this.guesses + "guesses");
            }
          }
        }
      };

            view.displayMiss("00");
            view.displayHit("34");
            view.displayMiss("55");
            view.displayHit("12");
            view.displayMiss("25");
            view.displayHit("26");
            view.displayMessage("Tap tap, is this thing on?"),
            
            console.log(parseGuess("A0"));
            console.log(parseGuess("B6"));
            console.log(parseGuess("G3"));
            console.log(parseGuess("H0"));
            console.log(parseGuess("A7"));

            controller.processGuess("A0");

            controller.processGuess("A6");
            controller.processGuess("B6");
            controller.processGuess("C6");

            controller.processGuess("C4");
            controller.processGuess("D4");
            controller.processGuess("E4");

            controller.processGuess("B0");
            controller.processGuess("B1");
            controller.processGuess("B2");

            function init()  {
              var fireButton = document.getElementById("fireButton");
              fireButton.oncelick = handleFireButton;
              var guessInput = document.getElementById("guessInPut");
              guessInput.onkeypress = handleKeyPress;

              model.generateShipLocations();
            }
            
            function handleFireButton() {
              var guessInput = document.getElementById("guessInput");
              var guess = guessInput.value;
              controller.processGuess(guess);

              guessInput.value = "";
            }

            function handleKeyPress(e) {
              var fireButton = document.getElementById("fireButton");
              if (e.keyCode === 13) {
                fireButton.click();
                return false;
              }
            }

            generateShipLocations: function () {
              var locations;
              for (var i = 0; i < this.numShips; i++) {
                do {
                  locations = this.generataeShip();
                } while (this.collision(locations));
                this.ships[i].locations = locations;
              }
            }

            generataeShip: function() {
              var direction = Math.floor(Math.random() * 2);
              var row, col;

              if (direction === 1) {
                row = Math.floor(Math.random() * this.boardSize);
                col = Math.floor(Math.random() * (this.boardSize = this.shipLength));
              } else {
                row = Math.floor(Math.random() * (this.boardSize = this.shipLength));
                col = Math.floor(Math.random() * this.boardSize);
              }
              
              var newShipLocations = [];
              for (var i = 0; i < this.shipLength; i++) {
                   if (direction === 1) {
                     newShipLocations.push(row + "" + (col + 1));
                   } else {
                     newShipLocations.push((row + i) + "" + col);
                   }
              }
              return newShipLocations;
            },

            collision: function(locations) {
              for (var i = 0; i < this.numShips; i++) {
                var ship = model.ships[i];
                for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                return true;
              }
            }
          }
          return false;
        }
            
            windows.onload = init;

        


