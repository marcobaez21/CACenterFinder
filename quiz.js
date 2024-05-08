function submit_button_pressed(){
    let ca_width = document.getElementById("width-answer-box").value;
    let x_position = document.getElementById("x-answer-box").value;
    center = (ca_width/2.0) - ((ca_width-x_position)/2.0)
    alert("To center the object the x coordinate should be set to: "+center)
}