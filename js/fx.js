function changeMessage(value) {
    let newMessage = "";
    let characters = $('#welcome-message').text().split('');

    for(let i in characters) {
        newMessage += String.fromCharCode(characters[i].charCodeAt(0) + value);
    }

    $('#welcome-message').text(newMessage);
}

function decryptAnimate(element, time, value) {
    let characters = element.text().split('');
    let size = characters.length;
    for(let i in characters) {
        setTimeout(() => {
            characters.splice(Number(i), 1, String.fromCharCode(characters[i].charCodeAt(0) - value))
            element.text(characters.join(''));
        }, time/size * (Number(i) + 1));
    }
    
}

setInterval(function(){

    $('blink').each(function() {

      $(this).toggle();

    });

  }, 500);

changeMessage(1);