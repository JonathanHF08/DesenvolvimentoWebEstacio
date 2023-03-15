function imagens(){

    var imageText = document.getElementById("search-images").value;
    var request = new XMLHttpRequest();
    var key = "34245729-7b310113028a472d5ba0f0cac"
    var url = `https://pixabay.com/api/?key=${key}&q=${imageText}`
   
    request.open("GET", url, true);
    request.setRequestHeader("Accept", "aplication/json");

    request.onreadystatechange = function (){
        if (request.readyState == 3) {
             var loading = "" 
        }
        if (request.readyState ==4){
            console.log("imageText" + request.responseText);
            var jsonResponse = JSON.parse(request.responseText);
            document.getElementById("show").innerHTML = jsonResponse.imageText
        }
    }
}
