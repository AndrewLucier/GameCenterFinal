// wait to run the code until the DOM is fully loaded
$(document).ready(function(){
    //initialize a score variable - set it to 0 to start with
    var score = 0;
    // set up the duration of our game - value is in miliseconds - 1000 is 10 seconds
    var gameDuration = 10000; 
    // set up the interval between boxes showing up
    var boxInterval = 1000;
    // set up an array to store the available colors for our boxes
    var colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#1ABC9C"];

    // function to generate a random number
    function getRandomNumber(max){
        // get a random number that is not greater than our max
        var random = Math.floor(Math.random() * max);
        // return the random number
        return random;
    }

    // create a box element
    function createBox(){
        // pointer to our container
        var container = $('.box-container');
        //create a box div which will be 50px by 50px
        var box = $('<div class="box"></div>');
        // get a random x coordinate
        var positionX = getRandomNumber(container.width()-50);
        // get a random y coordinate
        var positionY = getRandomNumber(container.height()-50);

        // get a random color
        var color = colors[getRandomNumber(colors.length-1)];

        // set up the css for our box
        box.css({ top: positionY + 'px', left: positionX + 'px', backgroundColor: color});

        //click event for when the box is clicked
        box.click(function(){
            // give the user a point if they click the box
            score++;
            // update the score on the page
            $('#score').text(score);

            // change the color of the box
            var newColor = colors[getRandomNumber(colors.length-1)];

            // update the color of the box
            $(this).css('backgroundColor', newColor);
        });

        // add the box to the container
        container.append(box);

        // use set timeout to remove the box
        setTimeout(function(){
            // make the box disappear
            box.remove();
        }, 3000);
    }

    // set up the code to handle the start game button click
    $('#btnStart').click(function(){
        // reset the score to 0
        score = 0;
        // update the score on the page
        $('#score').text(score);

        // create a new box every boxInterval time
        var gameInterval = setInterval(createBox, boxInterval);

        //stop the game
        setTimeout(function(){
            // stop the interval from running
            clearInterval(gameInterval);
            alert("Game over! Your score is: " + score);
        }, gameDuration);
    });
});