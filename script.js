'use strict';

function getDogImageBreed(breed) {
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    }

function displayResults(responseJson) {
    console.log(responseJson);

    $("div").empty();
    
    if (responseJson.code == 404){
        $("div").append(`<h1> 404 Error </h1>`)
    } else {
        $("div").append(`<img src="${responseJson.message}">`)
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();

        const breed = $('#js-breed').val(); 

        const responseJson = getDogImageBreed(breed); //THIS IS AN ARRAY

    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});