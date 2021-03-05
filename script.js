var key = $('.key');

$(key).on('click', function () {
    var audio = $(this).children().attr("id");
    var rock = document.getElementById(audio);
    rock.play();
    rock.currentTime = 0;

    changeColor();
})

$(key).on('mouseup', function () {
    $(this).removeClass("active");
})

$(key).on('mousedown', function () {
    $(this).addClass("active");
})

var keyboard = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'S', 'D', 'G', 'H', 'J']
$(document).on('keydown', function (e) {
    console.log(e.which)
    var y = String.fromCharCode(e.which);
    for (let i = 0; i < keyboard.length; i++) {
        if (y == keyboard[i]) {
            var audio = document.querySelector('.' + y).firstChild.getAttribute("id");
            var rock = document.getElementById(audio);
            rock.play();
            rock.currentTime = 0;
            changeColor();
        }

    }

})


function changeColor() {

    var colorRed = Math.floor(Math.random() * (256 * 10) + 10) / (10);
    var colorGreen = Math.floor(Math.random() * (256 * 10) + 10) / (10);
    var colorBlue = Math.floor(Math.random() * (256 * 10) + 10) / (10);
    document.querySelector('body').style.backgroundColor = 'rgb(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')';
}