//<![CDATA[

  // Global Variables
  var CANVAS_WIDTH = 300;
  var CANVAS_HEIGHT = 220;
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");
  var TIME_INTERVAL; // Interval to end the game
  var GAME_INTERVAL; // Interval to redraw the canvas
  var FPS = 30; // Frames per Second just to update the canvas to get a smooth performance */
  var timeelapsed = 40;
  // Timing and frames per second
  var lastframe = 0;
  var fpstime = 0;
  var framecount = 0;
  var fps = 0;
  // Mouse dragging
  var drag = false;
  // Level object
  var level = {
      x: 10,         // X position
      y: 40,         // Y position
      columns: 8,     // Number of tile columns
      rows: 6,        // Number of tile rows
      tilewidth: 35,  // Visual width of a tile
      tileheight: 35, // Visual height of a tile
      tiles: [],      // The two-dimensional tile array
      selectedtile: { selected: false, column: 0, row: 0 }
  };
  // All of the different tile colors in RGB
  var tilecolors = [[255, 128, 128],
                    [128, 255, 128],
                    [128, 128, 255],
                    [255, 255, 128],
                    [255, 255, 255]];

  var tilesprites = ["calabaza",
                    "botella",
                    "comodin",
                    "fantasma",
                    "vampiro"];
  // Clusters and moves that were found
  var clusters = [];  // { column, row, length, horizontal }
  var moves = [];     // { column1, row1, column2, row2 }
  // Current move
  var currentmove = { column1: 0, row1: 0, column2: 0, row2: 0 };
  // Game states
  var gamestates = { init: 0, ready: 1, resolve: 2 };
  var gamestate = gamestates.init;
  // Score
  var score = 0;
  // Animation variables
  var animationstate = 0;
  var animationtime = 0;
  var animationtimetotal = 0.3;
  // Show available moves
  var showmoves = false;
  // The AI bot
  var aibot = false;
  // Game Over
  var gameover = false;

  /*
   * Init play button to trigger instructions for the game
   */
  $("#play").click(function(){

    /*
     * Remove stage to continue with the next stage
     */
    $("#preview").css({"display":"none", "visibility":"hidden"});
    $(".preview .lemon-container .lemon , .preview .lemon-container .bubbles").addClass("stop");
    /*
     * Anonymus function to remove instructions
     * And triger Game Interval for update all info game stats
     */

    setTimeout(function(){
      $("#instructions").css({"display":"none", "visibility":"hidden"});
      // Call init to start the game
      /*
       * Canvas configuration
       */
       timeelapsed = 40;
       document.getElementById("seconds").innerHTML = timeelapsed;
       score = 0;
       clearInterval(TIME_INTERVAL);
       clearInterval(GAME_INTERVAL);
       init();
    }, 3600);

  });

  /*
   * Play again action button only if the user SUCCEED
   * Reset all parameters like enemies and counters
   * And reactivate de Interval GAME
   */
  $("#play-again-success").click(function(){

    /*
     * Set visible the game section
     */
    $("#game-over").css({"display":"none", "visibility":"hidden"});
    $("#success").css({"display":"none", "visibility":"hidden"});
    $("#game-set").css({"display":"block", "visibility":"visible"});

    /*
     * Clear canvas and init
     */
    $("#instructions").css({"display":"none", "visibility":"hidden"});
    // Call init to start the game
    /*
     * Canvas configuration
     */
    init();
  });

  /*
   * Check if orientation is supported
   */
  if (window.DeviceMotionEvent) {
    // Listen for the event and handle DeviceOrientationEvent object
    window.addEventListener('devicemotion', deviceMotionHandler, false);
  }

  /*
   * Device Motion functionality
   * If the acceleration is greater or minus the player sprite will be moved
   */
  function deviceMotionHandler(eventData) {

      var x = event.accelerationIncludingGravity.x * 5;
      if(x < -2) { player.x -= 5; }
      if(x > 2) { player.x += 5; }

  }

  // Initialize the game
    function init() {
        // Add mouse events
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseout", onMouseOut);

        // Initialize the two-dimensional tile array
        for (var i=0; i<level.columns; i++) {
            level.tiles[i] = [];
            for (var j=0; j<level.rows; j++) {
                // Define a tile type and a shift parameter for animation
                level.tiles[i][j] = { type: 0, shift:0 }
            }
        }

        // New game
        newGame();

        // Enter main loop
        main(0);
    }

    // Main loop
    function main(tframe) {
        // Request animation frames
        GAME_INTERVAL = window.requestAnimationFrame(main);

        // Update and render the game
        update(tframe);
        render();
    }

    // Update the game state
    function update(tframe) {
        var dt = (tframe - lastframe) / 1000;
        lastframe = tframe;

        // Update the fps counter
        updateFps(dt);

        if (gamestate == gamestates.ready) {
            // Game is ready for player input

            // Check for game over
            if (moves.length <= 0) {
                gameover = true;
            }

            // Let the AI bot make a move, if enabled
            if (aibot) {
                animationtime += dt;
                if (animationtime > animationtimetotal) {
                    // Check if there are moves available
                    findMoves();

                    if (moves.length > 0) {
                        // Get a random valid move
                        var move = moves[Math.floor(Math.random() * moves.length)];

                        // Simulate a player using the mouse to swap two tiles
                        mouseSwap(move.column1, move.row1, move.column2, move.row2);
                    } else {
                        // No moves left, Game Over. We could start a new game.
                        // newGame();
                    }
                    animationtime = 0;
                }
            }
        } else if (gamestate == gamestates.resolve) {
            // Game is busy resolving and animating clusters
            animationtime += dt;

            if (animationstate == 0) {
                // Clusters need to be found and removed
                if (animationtime > animationtimetotal) {
                    // Find clusters
                    findClusters();

                    if (clusters.length > 0) {
                        // Add points to the score
                        for (var i=0; i<clusters.length; i++) {
                            // Add extra points for longer clusters

                            if(level.tiles[clusters[i].column][clusters[i].row].type == 2){
                              console.log("Se elimino un comodin y se desapareceran todos");
                              // Find clusters
                              findComodin();
                              removeComodin();
                              //score += 100 * 1;
                            }else{
                              if(clusters[i].length <= 2){
                                score += 100 * 1;
                              }else{
                                score += 100 * (clusters[i].length - 2);
                              }

                            }
                            document.getElementById("points").innerHTML = score;
                        }
                        //console.dir(clusters);
                        // Clusters found, remove them
                        removeClusters();
                        Sound.play("explosion");

                        // Tiles need to be shifted
                        animationstate = 1;
                    } else {
                        // No clusters found, animation complete
                        gamestate = gamestates.ready;
                    }
                    animationtime = 0;
                }
            } else if (animationstate == 1) {
                // Tiles need to be shifted
                if (animationtime > animationtimetotal) {
                    // Shift tiles
                    shiftTiles();

                    // New clusters need to be found
                    animationstate = 0;
                    animationtime = 0;

                    // Check if there are new clusters
                    findClusters();
                    if (clusters.length <= 0) {
                        // Animation complete
                        gamestate = gamestates.ready;
                    }
                }
            } else if (animationstate == 2) {
                // Swapping tiles animation
                if (animationtime > animationtimetotal) {
                    // Swap the tiles
                    swap(currentmove.column1, currentmove.row1, currentmove.column2, currentmove.row2);

                    // Check if the swap made a cluster
                    findClusters();
                    if (clusters.length > 0) {
                        // Valid swap, found one or more clusters
                        // Prepare animation states
                        animationstate = 0;
                        animationtime = 0;
                        gamestate = gamestates.resolve;
                    } else {
                        // Invalid swap, Rewind swapping animation
                        animationstate = 3;
                        animationtime = 0;
                    }

                    // Update moves and clusters
                    findMoves();
                    findClusters();
                }
            } else if (animationstate == 3) {
                // Rewind swapping animation
                if (animationtime > animationtimetotal) {
                    // Invalid swap, swap back
                    swap(currentmove.column1, currentmove.row1, currentmove.column2, currentmove.row2);

                    // Animation complete
                    gamestate = gamestates.ready;
                }
            }

            // Update moves and clusters
            findMoves();
            findClusters();
        }
    }

    function updateFps(dt) {
        if (fpstime > 0.25) {
            // Calculate fps
            fps = Math.round(framecount / fpstime);

            // Reset time and framecount
            fpstime = 0;
            framecount = 0;
        }

        // Increase time and framecount
        fpstime += dt;
        framecount++;
    }

    // Draw text that is centered
    function drawCenterText(text, x, y, width) {
        var textdim = context.measureText(text);
        context.fillText(text, x + (width-textdim.width)/2, y);
    }

    // Render the game
    function render() {
        // Draw the frame
        drawFrame();

        // Draw level background
        var levelwidth = level.columns * level.tilewidth;
        var levelheight = level.rows * level.tileheight;
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fillRect(level.x - 4, level.y - 4, levelwidth + 8, levelheight + 8);

        // Render tiles
        renderTiles();

        // Render clusters
        renderClusters();

        // Render moves, when there are no clusters
        if (showmoves && clusters.length <= 0 && gamestate == gamestates.ready) {
            renderMoves();
        }

        // Game Over overlay
        if (gameover) {

            cancelAnimationFrame(GAME_INTERVAL);
            $("#game-set").css({"display":"none", "visibility":"hidden"});
            $("#success").css({"display":"block", "visibility":"visible"});
            $("#counter-result-goods").html(score);
        }
    }

    // Draw a frame with a border
    function drawFrame() {
        // Draw background and a border
        context.fillStyle = "#000000";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#000000";
        context.fillRect(1, 1, canvas.width-2, canvas.height-2);

        // Display fps
        //context.fillStyle = "#ffffff";
        //context.font = "12px Verdana";
        //context.fillText("Fps: " + fps, 13, 50);
    }

    // Render tiles
    function renderTiles() {
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows; j++) {
                // Get the shift of the tile for animation
                var shift = level.tiles[i][j].shift;

                // Calculate the tile coordinates
                var coord = getTileCoordinate(i, j, 0, (animationtime / animationtimetotal) * shift);

                // Check if there is a tile present
                if (level.tiles[i][j].type >= 0) {
                    // Get the color of the tile
                    var col = tilesprites[level.tiles[i][j].type];
                    // Draw the tile using the color
                    drawSprite(coord.tilex, coord.tiley, col);
                }

                // Draw the selected tile
                if (level.selectedtile.selected) {
                    if (level.selectedtile.column == i && level.selectedtile.row == j) {
                        // Draw a red tile
                        drawTileO(coord.tilex, coord.tiley, 247, 109, 52, 0.8);
                    }
                }
            }
        }

        // Render the swap animation
        if (gamestate == gamestates.resolve && (animationstate == 2 || animationstate == 3)) {
            // Calculate the x and y shift
            var shiftx = currentmove.column2 - currentmove.column1;
            var shifty = currentmove.row2 - currentmove.row1;

            // First tile
            var coord1 = getTileCoordinate(currentmove.column1, currentmove.row1, 0, 0);
            var coord1shift = getTileCoordinate(currentmove.column1, currentmove.row1, (animationtime / animationtimetotal) * shiftx, (animationtime / animationtimetotal) * shifty);
            var col1 = tilesprites[level.tiles[currentmove.column1][currentmove.row1].type];

            // Second tile
            var coord2 = getTileCoordinate(currentmove.column2, currentmove.row2, 0, 0);
            var coord2shift = getTileCoordinate(currentmove.column2, currentmove.row2, (animationtime / animationtimetotal) * -shiftx, (animationtime / animationtimetotal) * -shifty);
            var col2 = tilesprites[level.tiles[currentmove.column2][currentmove.row2].type];

            // Draw a black background
            drawTile(coord1.tilex, coord1.tiley, 0, 0, 0);
            drawTile(coord2.tilex, coord2.tiley, 0, 0, 0);

            // Change the order, depending on the animation state
            if (animationstate == 2) {
                // Draw the tiles
                drawSprite(coord1shift.tilex, coord1shift.tiley, col1);
                drawSprite(coord2shift.tilex, coord2shift.tiley, col2);
            } else {
                // Draw the tiles
                drawSprite(coord2shift.tilex, coord2shift.tiley, col2);
                drawSprite(coord1shift.tilex, coord1shift.tiley, col1);
            }
        }
    }

    // Get the tile coordinate
    function getTileCoordinate(column, row, columnoffset, rowoffset) {
        var tilex = level.x + (column + columnoffset) * level.tilewidth;
        var tiley = level.y + (row + rowoffset) * level.tileheight;
        return { tilex: tilex, tiley: tiley};
    }

    // Draw a tile with a color
    function drawTile(x, y, r, g, b) {
      context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      context.fillRect(x + 2, y + 2, level.tilewidth - 4, level.tileheight - 4);
    }

    // Draw a tile with a color with opacity
    function drawTileO(x, y, r, g, b, o) {
      context.fillStyle = "rgba(" + r + "," + g + "," + b + "," + o + ")";
      context.fillRect(x + 2, y + 2, level.tilewidth - 4, level.tileheight - 4);
    }

    // Draw a sprite
    function drawSprite(x, y, s) {
      var img = document.getElementById(""+s+"");
      context.drawImage(img,x + 2, y + 2, level.tilewidth - 4, level.tileheight - 4);
    }

    // Render clusters
    function renderClusters() {
        for (var i=0; i<clusters.length; i++) {
            // Calculate the tile coordinates
            var coord = getTileCoordinate(clusters[i].column, clusters[i].row, 0, 0);

            if (clusters[i].horizontal) {
                // Draw a horizontal line
                context.fillStyle = "#F76D34";
                context.fillRect(coord.tilex + level.tilewidth/2, coord.tiley + level.tileheight/2 - 4, (clusters[i].length - 1) * level.tilewidth, 8);
                console.log("Se van: " + tilesprites[level.tiles[clusters[i].column][clusters[i].row].type]);
            } else {
                // Draw a vertical line
                context.fillStyle = "#013781";
                context.fillRect(coord.tilex + level.tilewidth/2 - 4, coord.tiley + level.tileheight/2, 8, (clusters[i].length - 1) * level.tileheight);
            }
        }

    }

    // Render moves
    function renderMoves() {
        for (var i=0; i<moves.length; i++) {
            // Calculate coordinates of tile 1 and 2
            var coord1 = getTileCoordinate(moves[i].column1, moves[i].row1, 0, 0);
            var coord2 = getTileCoordinate(moves[i].column2, moves[i].row2, 0, 0);

            // Draw a line from tile 1 to tile 2
            context.strokeStyle = "#ff0000";
            context.beginPath();
            context.moveTo(coord1.tilex + level.tilewidth/2, coord1.tiley + level.tileheight/2);
            context.lineTo(coord2.tilex + level.tilewidth/2, coord2.tiley + level.tileheight/2);
            context.stroke();
        }
    }

    // Start a new game
    function newGame() {
        // Reset score
        timeelapsed = 40;
        document.getElementById("seconds").innerHTML = timeelapsed;
        score = 0;

        // Set the gamestate to ready
        gamestate = gamestates.ready;

        // Reset game over
        gameover = false;

        // Create the level
        createLevel();

        // Find initial clusters and moves
        findMoves();
        findClusters();

        TIME_INTERVAL = setInterval(function() {
          updateTime(); // Update time
        }, 1000);
    }

    function updateTime(){
      timeelapsed--;
      document.getElementById("seconds").innerHTML = timeelapsed;

      if(timeelapsed <= 0){
        clearInterval(TIME_INTERVAL);
        clearInterval(GAME_INTERVAL);
        gameover = true;
      }
    }

    // Create a random level
    function createLevel() {
        var done = false;

        // Keep generating levels until it is correct
        while (!done) {

            // Create a level with random tiles
            for (var i=0; i<level.columns; i++) {
                for (var j=0; j<level.rows; j++) {
                    level.tiles[i][j].type = getRandomTile();
                }
            }

            // Resolve the clusters
            resolveClusters();

            // Check if there are valid moves
            findMoves();

            // Done when there is a valid move
            if (moves.length > 0) {
                done = true;
            }
        }
    }

    // Get a random tile
    function getRandomTile() {
        return Math.floor(Math.random() * tilecolors.length);
    }

    // Remove clusters and insert tiles
    function resolveClusters() {
        // Check for clusters
        findClusters();

        // While there are clusters left
        while (clusters.length > 0) {

            // Remove clusters
            removeClusters();

            // Shift tiles
            shiftTiles();

            // Check if there are clusters left
            findClusters();
        }
    }

    // Find clusters in the level
    function findClusters() {
        // Reset clusters
        clusters = []

        // Find horizontal clusters
        for (var j=0; j<level.rows; j++) {
            // Start with a single tile, cluster of 1
            var matchlength = 1;
            for (var i=0; i<level.columns; i++) {
                var checkcluster = false;

                if (i == level.columns-1) {
                    // Last tile
                    checkcluster = true;
                } else {
                    // Check the type of the next tile
                    if (level.tiles[i][j].type == level.tiles[i+1][j].type &&
                        level.tiles[i][j].type != -1) {
                        // Same type as the previous tile, increase matchlength
                        matchlength += 1;
                    } else {
                        // Different type
                        checkcluster = true;
                    }
                }

                // Check if there was a cluster
                if (checkcluster) {
                    if (matchlength >= 3) {
                        // Found a horizontal cluster
                        clusters.push({ column: i+1-matchlength, row:j,
                                        length: matchlength, horizontal: true });
                    }

                    matchlength = 1;
                }
            }
        }

        // Find vertical clusters
        for (var i=0; i<level.columns; i++) {
            // Start with a single tile, cluster of 1
            var matchlength = 1;
            for (var j=0; j<level.rows; j++) {
                var checkcluster = false;

                if (j == level.rows-1) {
                    // Last tile
                    checkcluster = true;
                } else {
                    // Check the type of the next tile
                    if (level.tiles[i][j].type == level.tiles[i][j+1].type &&
                        level.tiles[i][j].type != -1) {
                        // Same type as the previous tile, increase matchlength
                        matchlength += 1;
                        //console.log("Tipo de imagen: " + tilesprites[level.tiles[i][j].type]);

                    } else {
                        // Different type
                        checkcluster = true;
                    }
                }

                // Check if there was a cluster
                if (checkcluster) {
                    if (matchlength >= 3) {
                        // Found a vertical cluster
                        clusters.push({ column: i, row:j+1-matchlength,
                                        length: matchlength, horizontal: false });
                    }

                    matchlength = 1;
                }
            }
        }
    }

    // Find clusters in the level
    function findComodin() {
        // Reset clusters
        clusters = []

        // Find horizontal clusters
        for (var j=0; j<level.rows; j++) {
            // Start with a single tile, cluster of 1
            var matchlength = 1;
            for (var i=0; i<level.columns; i++) {
                var checkcluster = false;

                if (i == level.columns-1) {
                    // Last tile
                    checkcluster = true;
                } else {
                    // Check the type of the next tile
                    if (level.tiles[i][j].type == level.tiles[i+1][j].type &&
                        level.tiles[i][j].type != -1 && level.tiles[i][j].type == 2) {
                        // Same type as the previous tile, increase matchlength
                        matchlength += 1;
                    } else {
                        // Different type
                        checkcluster = true;
                    }
                }

                // Check if there was a cluster
                if (checkcluster) {
                    if (matchlength >= 1 && level.tiles[i][j].type == 2) {
                        // Found a horizontal cluster
                        clusters.push({ column: i+1-matchlength, row:j,
                                        length: matchlength, horizontal: true });
                    }

                    matchlength = 1;
                }
            }
        }
    }

    // Find available moves
    function findMoves() {
        // Reset moves
        moves = []

        // Check horizontal swaps
        for (var j=0; j<level.rows; j++) {
            for (var i=0; i<level.columns-1; i++) {
                // Swap, find clusters and swap back
                swap(i, j, i+1, j);
                findClusters();
                swap(i, j, i+1, j);

                // Check if the swap made a cluster
                if (clusters.length > 0) {
                    // Found a move
                    moves.push({column1: i, row1: j, column2: i+1, row2: j});
                }
            }
        }

        // Check vertical swaps
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows-1; j++) {
                // Swap, find clusters and swap back
                swap(i, j, i, j+1);
                findClusters();
                swap(i, j, i, j+1);

                // Check if the swap made a cluster
                if (clusters.length > 0) {
                    // Found a move
                    moves.push({column1: i, row1: j, column2: i, row2: j+1});
                }
            }
        }

        // Reset clusters
        clusters = []
    }

    // Loop over the cluster tiles and execute a function
    function loopClusters(func) {
        for (var i=0; i<clusters.length; i++) {
            //  { column, row, length, horizontal }
            var cluster = clusters[i];
            var coffset = 0;
            var roffset = 0;
            for (var j=0; j<cluster.length; j++) {
                func(i, cluster.column+coffset, cluster.row+roffset, cluster);
                if (cluster.horizontal) {
                    coffset++;
                } else {
                    roffset++;
                }
            }
        }
    }

    // Remove the clusters
    function removeComodin() {
        // Change the type of the tiles to -1, indicating a removed tile
        loopClusters(function(index, column, row, cluster) { level.tiles[column][row].type = -1; });

        // Calculate how much a tile should be shifted downwards
        for (var i=0; i<level.columns; i++) {
            var shift = 0;
            for (var j=level.rows-1; j>=0; j--) {
                // Loop from bottom to top
                if (level.tiles[i][j].type == -1) {
                    // Tile is removed, increase shift
                    shift++;
                    level.tiles[i][j].shift = 0;
                } else {
                    // Set the shift
                    level.tiles[i][j].shift = shift;
                }
            }
        }
    }

    // Remove the clusters
    function removeClusters() {
        // Change the type of the tiles to -1, indicating a removed tile
        loopClusters(function(index, column, row, cluster) { level.tiles[column][row].type = -1; });

        // Calculate how much a tile should be shifted downwards
        for (var i=0; i<level.columns; i++) {
            var shift = 0;
            for (var j=level.rows-1; j>=0; j--) {
                // Loop from bottom to top
                if (level.tiles[i][j].type == -1) {
                    // Tile is removed, increase shift
                    shift++;
                    level.tiles[i][j].shift = 0;
                } else {
                    // Set the shift
                    level.tiles[i][j].shift = shift;
                }
            }
        }
    }

    // Shift tiles and insert new tiles
    function shiftTiles() {
        // Shift tiles
        for (var i=0; i<level.columns; i++) {
            for (var j=level.rows-1; j>=0; j--) {
                // Loop from bottom to top
                if (level.tiles[i][j].type == -1) {
                    // Insert new random tile
                    level.tiles[i][j].type = getRandomTile();
                } else {
                    // Swap tile to shift it
                    var shift = level.tiles[i][j].shift;
                    if (shift > 0) {
                        swap(i, j, i, j+shift)
                    }
                }

                // Reset shift
                level.tiles[i][j].shift = 0;
            }
        }
    }

    // Get the tile under the mouse
    function getMouseTile(pos) {
        // Calculate the index of the tile
        var tx = Math.floor((pos.x - level.x) / level.tilewidth);
        var ty = Math.floor((pos.y - level.y) / level.tileheight);

        // Check if the tile is valid
        if (tx >= 0 && tx < level.columns && ty >= 0 && ty < level.rows) {
            // Tile is valid
            return {
                valid: true,
                x: tx,
                y: ty
            };
        }

        // No valid tile
        return {
            valid: false,
            x: 0,
            y: 0
        };
    }

    // Check if two tiles can be swapped
    function canSwap(x1, y1, x2, y2) {
        // Check if the tile is a direct neighbor of the selected tile
        if ((Math.abs(x1 - x2) == 1 && y1 == y2) ||
            (Math.abs(y1 - y2) == 1 && x1 == x2)) {
            return true;
        }

        return false;
    }

    // Swap two tiles in the level
    function swap(x1, y1, x2, y2) {
        var typeswap = level.tiles[x1][y1].type;
        level.tiles[x1][y1].type = level.tiles[x2][y2].type;
        level.tiles[x2][y2].type = typeswap;
    }

    // Swap two tiles as a player action
    function mouseSwap(c1, r1, c2, r2) {
        // Save the current move
        currentmove = {column1: c1, row1: r1, column2: c2, row2: r2};

        // Deselect
        level.selectedtile.selected = false;

        // Start animation
        animationstate = 2;
        animationtime = 0;
        gamestate = gamestates.resolve;
    }

    // On mouse movement
    function onMouseMove(e) {
        // Get the mouse position
        var pos = getMousePos(canvas, e);

        // Check if we are dragging with a tile selected
        if (drag && level.selectedtile.selected) {
            // Get the tile under the mouse
            mt = getMouseTile(pos);
            if (mt.valid) {
                // Valid tile

                // Check if the tiles can be swapped
                if (canSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row)){
                    // Swap the tiles
                    mouseSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row);
                }
            }
        }
    }

    // On mouse button click
    function onMouseDown(e) {
        // Get the mouse position
        var pos = getMousePos(canvas, e);

        // Start dragging
        if (!drag) {
            // Get the tile under the mouse
            mt = getMouseTile(pos);

            if (mt.valid) {
                // Valid tile
                var swapped = false;
                if (level.selectedtile.selected) {
                    if (mt.x == level.selectedtile.column && mt.y == level.selectedtile.row) {
                        // Same tile selected, deselect
                        level.selectedtile.selected = false;
                        drag = true;
                        return;
                    } else if (canSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row)){
                        // Tiles can be swapped, swap the tiles
                        mouseSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row);
                        swapped = true;
                    }
                }

                if (!swapped) {
                    // Set the new selected tile
                    level.selectedtile.column = mt.x;
                    level.selectedtile.row = mt.y;
                    level.selectedtile.selected = true;
                }
            } else {
                // Invalid tile
                level.selectedtile.selected = false;
            }

            // Start dragging
            drag = true;
        }

    }

    function onMouseUp(e) {
        // Reset dragging
        drag = false;
    }

    function onMouseOut(e) {
        // Reset dragging
        drag = false;
    }

    // Get the mouse position
    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
            y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
        };
    }

  /*
   * Detect resize and rellocate all the stuff
   */
  window.onresize = function(event) {
    /* Resize canvas */
    var windowWidth = $(window).width() - 20;
    var windowHeight = $(window).height() - 20;

    if(windowWidth > 320){
      CANVAS_WIDTH = 480; // Canvas Width
      CANVAS_HEIGHT = 370; // Canvas Height
      level = {
          x: 20,         // X position
          y: 20,         // Y position
          columns: 8,     // Number of tile columns
          rows: 6,        // Number of tile rows
          tilewidth: 55,  // Visual width of a tile
          tileheight: 55, // Visual height of a tile
          tiles: [],      // The two-dimensional tile array
          selectedtile: { selected: false, column: 0, row: 0 }
      };
    }else{
      CANVAS_WIDTH = 280; // Canvas Width
      CANVAS_HEIGHT = 360; // Canvas Height
      level = {
          x: 20,         // X position
          y: 20,         // Y position
          columns: 6,     // Number of tile columns
          rows: 8,        // Number of tile rows
          tilewidth: 40,  // Visual width of a tile
          tileheight: 40, // Visual height of a tile
          tiles: [],      // The two-dimensional tile array
          selectedtile: { selected: false, column: 0, row: 0 }
      };
    }
    $("#game-canvas").css({"display": "block", "margin":"40px auto 15px", "width":CANVAS_WIDTH+"px", "height":CANVAS_HEIGHT+"px"}).attr("width",CANVAS_WIDTH).attr("height",CANVAS_HEIGHT);
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Clear canvas
    timeelapsed = 40;
    document.getElementById("seconds").innerHTML = timeelapsed;
    score = 0;
    document.getElementById("points").innerHTML = score;
    clearInterval(TIME_INTERVAL);
    clearInterval(GAME_INTERVAL);
    init();
  };

  /* Resize canvas */
  var windowWidth = $(window).width() - 20;
  var windowHeight = $(window).height() - 20;

  if(windowWidth > 320){
    CANVAS_WIDTH = 480; // Canvas Width
    CANVAS_HEIGHT = 370; // Canvas Height
    level = {
        x: 20,         // X position
        y: 20,         // Y position
        columns: 8,     // Number of tile columns
        rows: 6,        // Number of tile rows
        tilewidth: 55,  // Visual width of a tile
        tileheight: 55, // Visual height of a tile
        tiles: [],      // The two-dimensional tile array
        selectedtile: { selected: false, column: 0, row: 0 }
    };
  }else{
    CANVAS_WIDTH = 280; // Canvas Width
    CANVAS_HEIGHT = 360; // Canvas Height
    level = {
        x: 20,         // X position
        y: 20,         // Y position
        columns: 6,     // Number of tile columns
        rows: 8,        // Number of tile rows
        tilewidth: 40,  // Visual width of a tile
        tileheight: 40, // Visual height of a tile
        tiles: [],      // The two-dimensional tile array
        selectedtile: { selected: false, column: 0, row: 0 }
    };
  }
  $("#game-canvas").css({"display": "block", "margin":"40px auto 15px", "width":CANVAS_WIDTH+"px", "height":CANVAS_HEIGHT+"px"}).attr("width",CANVAS_WIDTH).attr("height",CANVAS_HEIGHT);
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // Clear canvas
  timeelapsed = 40;
  document.getElementById("seconds").innerHTML = timeelapsed;
  score = 0;
  document.getElementById("points").innerHTML = score;
  clearInterval(TIME_INTERVAL);
  clearInterval(GAME_INTERVAL);
  init();

//]]>
