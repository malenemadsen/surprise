//Contact
function validatecontact(){
    var con=3; // The variabel is sat to 3, therefore you can only withdraw 3
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error_message = document.getElementById("error_message");
    var error_message2 = document.getElementById("error_message2");
    var error_message3 = document.getElementById("error_message3");

    var text;
    if(name.length < 1){ // This if-statement checks if the name is shorther than 1
      text = "UPS! Du mangler at udfylde noget."; // The text that shows up if filled incorectly
      error_message.innerHTML = text; // Inserts the text in HTML
      error_message.className = 'alert-contact'; // The error-message, styled more in css
      con--; // If not filed correctly it will withdraw 1 from applicant
      return false; 
      }
      
    if(email.indexOf("@") == -1 || email.length < 6){//This if-statement checks if the name is shorther than 6 and includes a @
      text = "UPS! Du mangler at udfylde noget.";
      error_message2.innerHTML = text;
      error_message2.className = 'alert-contact';
      con--;
      return false;
      }
      
      if(isNaN(phone) || phone.length < 8){ 
        text = "UPS! Du mangler at udfylde noget.";
        error_message3.innerHTML = text;
        error_message3.className = 'alert-contact'; 
        con--;
        return false; 
        }
      
      if (con==3) { 
          alert("Succes!");
      }
  }