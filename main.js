var request = new XMLHttpRequest()
request.open('GET','https://catfact.ninja/fact' , true)
request.onload = function () {
    if (request.readyState === request.DONE) {
        if (request.status === 200) {
            console.log(request.response);
            console.log(request.responseText);
        }
    }

    
    var data = JSON.parse(request.responseText);

    $("#catFact").text(data.fact);

}

request.send();