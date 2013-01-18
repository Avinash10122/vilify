//Vilify's main js file

//Game Constants
var FPS = 20; //The number of frames per second (the amount of time for second that things get updated)
var stage = document.getElementById('canvas').getContext('2d'); //create a variable stage to draw upon
var Map; //The game map

function Update() {
    //TODO: Update the game objects
    
    //Draw the game objects
    Draw();
}

function Draw() {
    //Clear stage so we can draw over it
    stage.clearRect(0,0,640,480);
    
    //Draw background (currently just a solid color)
    stage.fillStyle = "black";
    stage.fillRect(0, 0, 640, 480);
    
    //Draw map
    Map.draw();
}

function GameMap(_map) {
    /*
    Game Map Class
    _map: a 2D array, 1 = a tile that can be walked on, 0 = a tile that can't be walked on
    draw: a function that displays the map 
    */
    this._map = _map;
    this.draw = function() {
        for (row=0; row<this._map.length; row++) { //Loop through the rows
            for (column=0; column<this._map[row].length; column++) { //Loop through the column
                //get tile color
                if (this._map[row][column] == 1) { //on path tile
                    stage.fillStyle = "white";
                } else { //not on path tile
                    stage.fillStyle = "grey";
                }
                
                //draw a 64x64 tile in the correct location
                stage.fillRect(row*64, column*64, 64, 64);
            }
        }
    }
}

//Create the game map
Map = new GameMap([
[1,0,1,0,1,0,1],
[0,1,0,1,0,1,0],
[1,0,1,0,1,0,1],
[0,1,0,1,0,1,0],
[1,0,1,0,1,0,1],
[0,1,0,1,0,1,0],
[1,0,1,0,1,0,1]
]);

//Create a timer that calls a function, Update (which updates the game), FPS times per second
setInterval(Update, 1000/FPS);
