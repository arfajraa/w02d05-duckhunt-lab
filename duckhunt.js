$(document).ready(function () {
  var playerName = "ali";
  var difficulty = 5000;

  swal("Please enter your name:", {
    content: "input",
  }).then((value) => {
    playerName = value;

    swal("Please choose difficulty: ", {
      buttons: {
        cakewalk: {
          text: "Cakewalk",
          value: "cakewalk",
        },
        basic: {
          text: "Normal",
          value: "basic",
        },
        gooseChase: {
          text: "Hard",
          value: "gooseChase",
        },
        hell: {
          text: "Hell!!!",
          value: "hell",
        }
      },
    })
      .then((value) => {
        switch (value) {

          case "cakewalk":
            difficulty = 5000;
            break;

          case "basic":
            difficulty = 2000;
            break;

          case "gooseChase":
            difficulty = 1200;
            break;
          case "hell":
            difficulty = 800;
            break;
          default:
            difficulty = 3000;
        }


        var $body = $('body');

        // 1. Can you create a <div> with the class "duck" and name it "duck"
        function createDuck() {
          var $newDiv = $("<div/>").addClass("duck leftDuck");
          $newDiv.css({
            "top": `${getRandPos()}%`,
            "left": `${getRandPos()}%`
          })

          window.setTimeout(function () {
            var topRand = getRandPos();
            var leftRand = getRandPos();


            if (($newDiv.position().left / $newDiv.parent().height() * 100) < leftRand) {

              $newDiv.removeClass("rightDuck");
              $newDiv.addClass("leftDuck");
              flapLeft = setInterval(function () {
                $newDiv.toggleClass("leftFlap");
              }, 250)
              window.setTimeout(function () {
                window.clearInterval(flapLeft);
              }, 1000)
            }
            else {
              $newDiv.removeClass("leftDuck");
              $newDiv.addClass("rightDuck");

              flapRight = setInterval(function () {
                $newDiv.toggleClass("rightFlap");
              }, 250)
              window.setTimeout(function () {
                window.clearInterval(flapRight);
              }, 1000)
            }

            $newDiv.animate({
              "top": `${topRand}%`,
              "left": `${leftRand}%`
            }, 1000);

          }, 10)



          var flapRight;
          var flapLeft;

          $newDiv.on("click", function () {
            console.log("CLICKED!");

            window.clearInterval(flapLeft);
            window.clearInterval(flapRight);
            window.clearInterval(animateInterval);

            $newDiv.addClass("shot");

            // $newDiv.finish();
            $newDiv.stop(true, false);
            // $newDiv.clearQueue();
            // $newDiv.hide();
            // $newDiv.fadeIn(100);
            // $newDiv.animate({
            //   "width": "80px",
            //   "height": "80px"
            // })

            window.setTimeout(function () {
              $newDiv.remove();
              checkForWinner();
            }, 1000)

            

          });

          $body.append($newDiv);


          var animateInterval = window.setInterval(function () {
            var topRand = getRandPos();
            var leftRand = getRandPos();
            // var topDiff = Math.abs($newDiv.position().top - topRand);
            // var leftDiff = Math.abs($newDiv.position().left - leftRand);
            // var speedModifier = ((topDiff + leftDiff) / 2) * 100;
            // console.log($newDiv.position().left)


            if (($newDiv.position().left / $newDiv.parent().height() * 100) < leftRand) {

              // console.log("animateInterval IF")

              // window.clearInterval(flapRight);

              // $newDiv.removeClass("flapRight");
              // $newDiv.css("background-position", "-200px -160px");
              $newDiv.removeClass("rightDuck");
              $newDiv.addClass("leftDuck");
              flapLeft = setInterval(function () {
                $newDiv.toggleClass("leftFlap");
              }, 250)
              window.setTimeout(function () {
                window.clearInterval(flapLeft);
              }, 1000)
            }
            else {
              // console.log("animateInterval ELSE")

              // window.clearInterval(flapLeft);

              // $newDiv.removeClass("flapLeft");

              // $newDiv.css("background-position", "-100px -160px");
              $newDiv.removeClass("leftDuck");
              $newDiv.addClass("rightDuck");

              flapRight = setInterval(function () {
                $newDiv.toggleClass("rightFlap");
              }, 250)
              window.setTimeout(function () {
                window.clearInterval(flapRight);
              }, 1000)
            }

            $newDiv.animate({
              "top": `${topRand}%`,
              "left": `${leftRand}%`
            }, 500);

          }, 1500)


        }

        function getRandPos() {
          return Math.random() * 100;
        }

        /* function getWidthDirection() {
          return Math.random() * window.innerHeight;
        }
      
        function getHeightDirection() {
          return Math.random() * window.innerWidth;
        } */

        // console.log(getHeightDirection());

        for (var i = 0; i < 5; i++) {
          var randTime = Math.random() * 2000;
          window.setTimeout(createDuck, randTime);
        }

        var addDuckInterval = window.setInterval(function () {

          if ($body.children().length == 1) {
            window.clearInterval(addDuckInterval);
          }
          else {
            createDuck();
          }
        }, difficulty)

        function checkForWinner() {
          console.log("In checkForWinner");
          if ($body.children().length == 1) {
            if (playerName == null) {
              // window.clearInterval(winInterval);
              // window.alert(`Congratulations, you have mastered duck hunting.`);
              swal("Congratulations, you have mastered duck hunting.");
            }
            else {
              // console.log("checkWin else")
              // window.clearInterval(winInterval);
              // window.alert(`Congratulations ${playerName}, you have mastered duck hunting.`);
              swal(`Congratulations ${playerName}, you have mastered duck hunting.`);
            }
          }
        }

        // var winInterval = window.setInterval(checkForWinner, 100);


        // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)


        // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"


        // 4. Try making the duck move to a different location after 1 second


        // 5. Congratulations!

        // 5. ——— Part 2: Here we go! —— 
        // 6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
        // called createDuck that "returns" the duck object

        // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
        //    using our fancy new createDuck() function

        // 8a. If you go to the dev tools you'll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
        // each time it creates a duck, it appears in a random location. 
        // 8b. The ducks should also move to a random location after 1 second
        // HINT: Use Math.random() * window.innerWidth    for "left"
        //       And Math.random() * window.innerHeight   for "top"

        // 9. Our ducks are going to be easy targets if they only move once.
        //    Modify createDuck() so the ducks keep moving around!

        // 10. Well Done!  

        // ——— Part 3:  We're almost there! —— 

        // 11. BOOM. Attach a "click" handler that adds the "shot" class to
        //     the duck when you click on it!

        // 12. After a duck has been clicked on, remove it from the DOM after
        //     a short delay (1 second)

        // 13. Create a new function named checkForWinner() that reads the DOM
        //     to see if there are any ducks left. If not, alert "YOU WIN!"

        // 14. BONUS: The ducks are moving pretty erratically, can you think
        //     of a way to adjust the ducks speed based on how far needs to move?

        // 15. BONUS: Add the "left" and "right" class to the duck based on the
        //     direction the duck is flying

        // FIN. You win 1 trillion tokens.  Play the day away!

      })
  })
});
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>