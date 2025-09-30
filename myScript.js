

/******************************************************************************************/
/******************************************************************************************/
/*** Contact Page ***/


/* RegExp function - only letters */
function letters(x){
	var onlyLetters = /^[A-Za-z]+$/;
	if(!x.match(onlyLetters)){
		alert("You must enter a valid name (letters only).");
		return false;
	}
	return true;
}

/* RegExp function - numbers only */
function numbers(x){
	var onlyNumbers = /^[0-9]+$/;
	if(!x.match(onlyNumbers)){
		alert("You must enter a valid phone no. (numbers only).");
		return false;
	}
	return true;
}


/* Function with if/else branching to check the validity of the forms */
function checkForm(){
	
	/* variables targeting the values */
	var contForm = document.getElementById("contactForm");
	var fname = document.forms["contactForm"]["fname"].value;
	var lname = document.forms["contactForm"]["lname"].value;
	var phone = document.forms["contactForm"]["phone"].value;
	var email = document.forms["contactForm"]["email"].value;
	var statusPick = document.forms["contactForm"]["statusPick"].value;
	var message = document.forms["contactForm"]["message"].value;
	
	/* if-else statements for cheching forms one at the time */
	if(fname == ""){
		alert("Please enter your first name.");
		document.getElementById("fname").focus();
		return false;	
	}
	
	else if(!letters(fname)){document.getElementById("fname").focus();}
	
	else if(lname == ""){
		alert("Please enter your last name.");
		document.getElementById("lname").focus();
		return false;
	}
	
	else if(!letters(lname)){document.getElementById("lname").focus();}
	
	else if(phone == ""){
		alert("Please enter your phone no.");
		document.getElementById("phone").focus();
		return false;
	}
	
	else if(!numbers(phone)){document.getElementById("phone").focus();}
	
	else if(email == ""){
		alert("Please enter your email.");
		document.getElementById("email").focus();
		return false;
	}
	
	else if(statusPick == ""){
		alert("You must select a status.");
		document.getElementById("statusPick").focus();
		return false;
	}
	
	else if(message == ""){
		alert("You must enter your message.");
		document.getElementById("message").focus();
		return false;
	}
	
	else{
		alert("Message sent successfully!");
		contForm.reset();
		}
}





/******************************************************************************************/
/******************************************************************************************/
/*** Quizzes Page ***/

/*

******* Variables: ******
			  ***
			  ***
			  ***
			  ***
			 *****
			  ***
			   *
*/

/* Forms for each quizz */
var form1 = document.getElementById("form_1");
var form2 = document.getElementById("form_2");
var form3 = document.getElementById("form_3");


/* Correct answers for each question */
/* quizz 1 */
var answer1 = document.getElementById("q113").value;
var answer2 = document.getElementById("q123").value;
var answer3 = document.getElementById("q134").value;

/* quizz 2 */
var answer4 = document.getElementById("q212").value;
var answer5 = document.getElementById("q223").value;
var answer6 = document.getElementById("q234").value;

/* quizz 3 */
var answer7 = document.getElementById("q314").value;
var answer8 = document.getElementById("q322").value;
var answer9 = document.getElementById("q331").value;


/* Msg. for incorrect answers */
var incorrectMsg1 = "Incorrect, try again."
var incorrectMsg2 = "Incorrect, try again."
var incorrectMsg3 = "Incorrect, try again."


/* Paragraphs for feedback */
var q11msg = document.getElementById("aq11")
var q12msg = document.getElementById("aq12")
var q13msg = document.getElementById("aq13")

var q21msg = document.getElementById("aq21")
var q22msg = document.getElementById("aq22")
var q23msg = document.getElementById("aq23")

var q31msg = document.getElementById("aq31")
var q32msg = document.getElementById("aq32")
var q33msg = document.getElementById("aq33")




/******************************************************
quizzLesson() - function's parameters:

x = form1, form2, form3
y, z, w = correct answers
m = feedback (correct / incorrect)
p, q, s = passing the message to the correct paragraph
******************************************************/

function quizzLesson(x, y, z, w, m, p, q, s){
	/* Check 1st question */
	for(i=0; i<4; i++){
		if(x.elements[i].checked){
			if(x.elements[i].value == y){
				p.innerHTML = "Correct, well done!";
				p.style.color = "#0d9401";
			}
			else{
				p.innerHTML = m;
				p.style.color = "#ff003f";
			}
		}
	}
	
	/* Check 2nd question */
	for(i=4; i<8; i++){
		if(x.elements[i].checked){
			if(x.elements[i].value == z){
				q.innerHTML = "Correct, well done!";
				q.style.color = "#0d9401";
			}
			else{
				q.innerHTML = m;
				q.style.color = "#ff003f";
			}
		}
	}
	
	/* Check 3rd question */
	for(i=8; i<12; i++){
		if(x.elements[i].checked){
			if(x.elements[i].value == w){
				s.innerHTML = "Correct, well done!";
				s.style.color = "#0d9401";
			}
			else{
				s.innerHTML = m;
				s.style.color = "#ff003f";
			}
		}
		
	}

}