//Javascript for simple GET request to Dog API
//define default value for number of images
let number = 3;

//function to generate DOM
function generateHtml(responseJson){
    $('.results').removeClass("hidden");
    $('.results').html(`<h2>Images</h2>`);
    for(let i=0; i<responseJson.message.length; i++){
        let index = i+1;
        $('.results').append(`<img src="${responseJson.message[i]}" alt="Random Dog Photo ${index}">`);
    }
}

//function to send GET request
function getDogPhotos(){
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => generateHtml(responseJson))
}
//function to update number variable
function updateNumber(){
    number = $('.js-form input[name="number"]').val();
    getDogPhotos();
}
//function to watch form submissions
function watchForm(){
    console.log('Page Loaded, watching form');
    $('.js-form').submit(event => {
        event.preventDefault();
        updateNumber();
    })
}

//ready function
$(watchForm());