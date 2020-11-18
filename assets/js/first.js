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

    if(fullName.value == "") {
      alert("Please enter your name.");
      fullName.focus();
      return false;
    }

    if(mail.value == "") {
      alert("Please enter a valid e-mail address.");
      mail.focus();
      return false;
    }

    if(mail.value.indexOf("@", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      mail.focus();
      return false;
    }

    return true;
  }


  