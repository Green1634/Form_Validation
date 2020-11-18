// alert("Hello! I am an alert box!!");

// var myName = "Oluwakemi";
// console.log(myName);

// var room1 = 40

// var room2 = 35

// var total = room1 + room2

// console.log(total);

// var score = 89;

// if(score >= 90){
//   document.write("Excellent");
// } 

// else if (score >= 60 &&  score<90){
//   document.write("passed");
// }

// else{
//   document.write("failed");
// }

// function myFunction() {
//     alert("Hello! I am an alert box!!");
//     console.log(myFunction());
// }

// function myFirsty ()

// function myFunction() {
//     alert("Hello World!");
//   }
//   document.write (myFunction());
  

//   var y = 5;

//   var myFunc = function () {
//       var x = 4;
//       console.log(x)
//   }
//   console.log(x)

//   var myName = 


function validation() {
    let fullName = document.forms["my_form"]["first_name"];
    let mail =  document.forms["my_form"]["E-mail"];
    let msg;

    if(fullName.value == "") {
      msg = "Please enter your name.";
      document.getElementById("msg").innerHTML = msg;
      // fullName.focus();
      return false;
    }
    
    if(mail.value == "") {
      msg = "Please enter a valid email.";
      document.getElementById("msg2").innerHTML = msg;
      // mail.focus();
      return false;
    }

    if(mail.value.indexOf("@", 0) < 0) {
      msg = "Please enter a valid email.";
      document.getElementById("msg2").innerHTML = msg;
      // mail.focus();
      return false;
    }

    return true;
  }


  