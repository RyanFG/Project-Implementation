const alertContainer = document.getElementById("alertContainer");

function checkBooking1(){
    const booking = document.getElementById("book");

    booking.addEventListener("next",function(event){
        event.preventDefault();
        const check = checkBooking1FilledOut();
        if(check){
            alert("success","Form succesfully filled out.");
            window.location.href = "book2.html"; 
        }
        else{
            alert("danger","Please fill out all sections of the form.");
        }
    });
}

function checkBooking1FilledOut(){
    const petName = document.querySelector("#pet_name");
    const petType = document.querySelector("#pet_type");
    const service = document.querySelector("#service");
    const staff = document.querySelector("#staff");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");
    const ampm = document.querySelector("#ampm");

    if(petName == "" || petType == "Select Type" || service == "Select Service" || staff == "Select Staff" || date == "yyyy-mm-dd" || time == "Select Time" || ampm == "Select Type"){
        return false;
    }else{
        return true;
    }
}

function alert(type, msg){
    const alertEle = document.createElement("div");

    alertEle.classList.add("alert",`alert-${type}`);
    alertEle.textContent = msg;

    alertContainer.innerHTML = "";
    alertContainer.appendChild(alertEle);

    setTimeout(function() {alertEle.remove();}, 7500);
}