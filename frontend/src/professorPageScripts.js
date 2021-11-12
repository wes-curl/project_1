function setup(){
    var slider = document.getElementById("ratingValue");
    var output = document.getElementById("ratingValueDisplay");

    output.innerHTML = slider.value; 
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    if(document.getElementById("ratingValue") != null){
        setup();
    }
  })