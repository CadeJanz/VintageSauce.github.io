
var ken = $('.ken'),
    chun = $('.chun-li'),
    button = document.getElementById('start'),
    theme = new Howl({
        src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141260/chun-theme.mp3']
    }),
    winner = new Howl({
        src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141260/A36_WINNER_CALL_E_00000000.mp3']
    }),
    punch = new Howl({
        src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141260/punch.mp3']
    });
Howler.volume(0.75);

var onClick = function() {
    theme.play();
    winner.pause();
    punch.pause();
    $(button).hide();
    runIt();
};

button.addEventListener('click', onClick, false);
//Wrap the scene
function runIt() {

    setTimeout(function(){
        walkin(ken, 0,'kenwalk','+=70', 1000);
        walkin(chun, 500,'chunwalk','-=105', 1200);
    }, 2000);
    setTimeout(function(){
        move(ken, 'punch', 500);
        move(chun, 'gethit', 550);
        walkin(chun, 300, 'chunwalk', '+=10', 300);
    }, 3500);
    setTimeout(function(){
        move(chun, 'likick', 500);
        walkin(chun, 300, 'chunwalk', '-=20', 400);
        move(ken, 'hit', 750);
    }, 5000);
    setTimeout(function(){
        move(ken, 'reversekick', 750);
        move(chun, 'gethit', 800);
        walkin(chun, 300, 'chunwalk', '+=10', 400);
    }, 6200);
    setTimeout(function(){
    }, 6500);
    setTimeout(function(){
        move(chun,'lihikick', 500);
        move(ken,'hit', 750);
    }, 8500);
    setTimeout(function(){
        walkin(chun, 250, 'chunwalk', '+=50', 1000);
        walkin(ken, 500, 'chunwalk', '-=75', 1000);
    }, 9500);
    setTimeout(function(){
        move(ken, 'hadoken', 1000);
        setTimeout(function() {
            var $fireball = $('<div/>', { class:'fireball' });
            $fireball.appendTo($(ken));

            var isFireballColision = function(){
                return $fireballPos.left + 75 > 250 ? true : false;
            };

            var explodeIfColision = setInterval(function(){

                $fireballPos = $fireball.offset();
                //console.log('fireballInterval:',$fireballPos.left);

                if (isFireballColision()) {
                    $fireball.addClass('explode').removeClass('moving').css('marginLeft','+=22px');
                    clearInterval(explodeIfColision);
                    setTimeout(function() { $fireball.remove(); }, 500);
                }

            }, 50);

            setTimeout(function() { $fireball.addClass('moving'); }, 20);

            setTimeout(function() {
                $fireball.remove();
                clearInterval(explodeIfColision);
            }, 3020);

        }, (250));
        knockout(chun, 'knockout', 1500);
    }, 11000);
    setTimeout(function(){
        $('.ko').addClass('animate');
    }, 12500);
    setTimeout(function(){
        winner.play();
    }, 13500);
    setTimeout(function(){
        $('.box').addClass('animate');
    }, 16000);
    setTimeout(function(){
        walkin(ken, 0,'kenwalk','+=900', 1000);
    },18000)
    setTimeout(function() {
        // Add a class to trigger the fade away or fall down animation
        document.getElementById("scene").classList.add("fadeOut");
        //document.getElementById("scene").style.display="none";
    }, 18500);
    setTimeout(function() {
        document.getElementById("scene").style.display="none";
    }, 20000);
    setTimeout(function() {
        theme.stop();
    }, 21000);
}
function still(char) {
    $(char).delay(2000).addClass('still').queue(function() {
        $(this).removeClass('still');
        $(this).dequeue();
    });
};

function walkin(char, delay, anim, dist, dur) {
    $(char).delay(delay).addClass(anim).animate({
        left: dist,
    }, dur, function() {}).queue(function() {
        $(this).removeClass(anim);
        $(this).dequeue();
    });
};
function move(char, move, delay) {
    punch.play();
    $(char).delay(delay).addClass(move).queue(function() {
        $(this).removeClass(move);
        $(this).dequeue();
    });
};
function knockout(char, move, delay) {
    $(char).addClass(move);
};