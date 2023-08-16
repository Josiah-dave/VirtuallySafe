/* Created and coded by Josiah David */
// Quiz source Virtually Safe
let mins = 5;
let time = mins * 60;

function timers() {
    let sMin = Math.floor(time / 60);
    let sSec = time % 60;
    document.getElementById('Time').textContent = `Time: ${sMin} : ${sSec}`;
    time--;


	if (sMin === 0 && sSec === 0) {

clearInterval(t)
	}
}

let t = setInterval(timers, 1000)

let quiz = {
	"JS": [
		{
			"id": 1,
			"question": "If you are in a gaming room and someone (same age as you or older) that you don't know ask personal information, what do you do?",
			"options": [
				{
					"a": "A: Tell them just a little bit about yourself",
					"b": "B: Don't ever give out any personal information",
					"c": "C: Tell them everything they want to know",
					"d": "D: Don't trust what people say on the internet. They could be something different than they say",
					"e": "E: Both B and D"
				}
			],
			"answer": "Both B and D",
			"score": 0,
			"status": ""
		},
		{
			"id": 2,
			"question": "The Internet gives us access to information and resources not found offline",
			"options": [
				{
					"a": "True",
					"b": "False"
				}
			],
			"answer": "True",
			"score": 0,
			"status": ""
		},
		{
			"id": 3,
			"question": "If a website makes you feel uncomfortable, you should?",
			"options": [
				{
					"a": "A: Leave the site",
					"b": "B: Tell an adult",
					"c": "C: Click on another part, maybe it will be better",
					"d": "D: Both A and B"
				}
			],
			"answer": "Both A and B",
			"score": 0,
			"status": ""
		},
		{
			"id": 4,
			"question": "What makes a good password?",
			"options": [
				{
					"a": "Easy for you to remember but difficult for others to figure it out",
					"b": "It is long and usually consist of your name or your boy/girl friend’s name",
					"c": "It is written in all capital letters and in blue"
				}
			],
			"answer": "Easy for you to remember but difficult for others to figure it out",
			"score": 0,
			"status": ""
		},
		{
			"id": 5,
			"question": "Do not share your personal information on the Internet example; home address, phone number, parent's information and PIN.",
			"options": [
				{
					"a": "True",
					"b": "False"
				}
			],
			"answer": "True",
			"score": 0,
			"status": ""
		},
		{
			"id": 6,
			"question": "What is cyberbullying?",
			"options": [
				{
					"a": "Bullying on the playground, bus stop or public place",
					"b": "Bullying through emails, messaging apps, websites, cell phone and other online platforms",
					"c": "Physically hurting some who cannot stand up for themselves",
					"d": "Hurting someone on Facebook"
				}
			],
			"answer": "Bullying through emails, messaging apps, websites, cell phone and other online platforms",
			"score": 0,
			"status": ""
		},
		{
			"id": 7,
			"question": "Which of the following are examples of threats you may encounter online?",
			"options": [
				{
					"a": "Phishing",
					"b": "Spyware",
					"c": "Viruses",
					"d": "All of the above"
				}
			],
			"answer": "All of the above",
			"score": 0,
			"status": ""
		},
		{
			"id": 8,
			"question": " Which of these passwords is most secure?",
			"options": [
				{
					"a": "MyPassword1234",
					"b": "Qwertyuiop",
					"c": "LaGo5-5+A+3@?`$"
				}
			],
			"answer": "LaGo5-5+A+3@?`$",
			"score": 0,
			"status": ""
		},
		{
			"id": 9,
			"question": "What should you do if you receive a message from someone you do not know?",
			"options": [
				{
					"a": "E-mail them a picture of yourself",
					"b": "Tell them to chat with your friend",
					"c": "Be cautious, talk to an adult about it and don't give them any personal information",
					"d": "Do not respond"
				}
			],
			"answer": "Be cautious, talk to an adult about it and don't give them any personal information",
			"score": 0,
			"status": ""
		},
		{
			"id": 10,
			"question": "When targeting victims, dangerous criminals disguise their identities on the internet",
			"options": [
				{
					"a": "True",
					"b": "False"
				}
			],
			"answer": "True",
			"score": 0,
			"status": ""
		},
		{
			"id": 11,
			"question": "Since the Internet is loaded with educational information, I should use it as much as I like and go to all the sites I want to see",
			"options": [
				{
					"a": "You're the coolest, keep browsing!",
					"b": "My parents/teachers should help me decide which sites are OK and which sites I shouldn't view",
					"c": "The Internet has very few 'bad' sites. I don't have to worry about that kind of stuff"
				}
			],
			"answer": "My parents/teachers should help me decide which sites are OK and which sites I shouldn't view",
			"score": 0,
			"status": ""
		},
		{
			"id": 12,
			"question": "If a flashing pop-up appears saying that you are the 1000th visitor and it wants you to ‘click here’ to claim your prize. What do you do?",
			"options": [
				{
					"a": "Click on it immediately before it disappears",
					"b": "Share the oppurtunity with friends",
					"c": "Send them your email",
					"d": "Close the advertisement"
				}
			],
			"answer": "Close the advertisement",
			"score": 0,
			"status": ""
		},
		{
			"id": 13,
			"question": "_________ are messages that try to trick you into providing sensitive information?",
			"options": [
				{
					"a": "Plug-ins",
					"b": "Phishing",
					"c": "Password",
					"c": "Cookies"
				}
			],
			"answer": "Phishing",
			"score": 0,
			"status": ""
		},
		{
			"id": 14,
			"question": "What is a browser cookies?",
			"options": [
				{
					"a": "A type of food you can buy online",
					"b": "A plug-in that allows you to view special types of web content",
					"c": "A type of phishing scam",
					"d": "A small piece of data that tracks your preferences on different websites"
				}
			],
			"answer": "A small piece of data that tracks your preferences on different websites",
			"score": 0,
			"status": ""
		},
		{
			"id": 15,
			"question": "To see if a website is using a secure connection, what should you look for? Select all that apply",
			"options": [
				{
					"a": "'https at a very beginning of the URL'",
					"b": "A plus sign (+) to the right of the tab",
					"c": "A star icon to the right of the URL",
					"d": "A lock icon to the left of the URL"
				}
			],
			"answer": "None of the above",
			"score": 0,
			"status": ""
		},
		{
			"id": 16,
			"question": "What is spam?",
			"options": [
				{
					"a": "Malicious code that includes virus and worms that can infect computers",
					"b": "Unwanted or unsolicited electronic messages",
					"c": "Software that runs at startup designed to take control of your computer",
					"d": "Security Prevention And Maintenance (S.P.A.M)"
				}
			],
			"answer": "Unwanted or unsolicited electronic messages",
			"score": 0,
			"status": ""
		},
		{
			"id": 17,
			"question": "What information should your online friends be able to find or see on your timeline?",
			"options": [
				{
					"a": "All your information",
					"b": "Private information",
					"c": "They can just see your pictures",
					"d": "Only what you want them to see"
				}
			],
			"answer": "Only what you want them to see",
			"score": 0,
			"status": ""
		},
		{
			"id": 18,
			"question": "It is okay to give out personal information such as my address, telephone number, parents’ work address/telephone number, or¬¬ the name and location of my school without my parents’ permission",
			"options": [
				{
					"a": "True",
					"b": "False"

				}
			],
			"answer": "False",
			"score": 0,
			"status": ""
		},
		{
			"id": 19,
			"question": "Which of these is not a cyber-bully?",
			"options": [
				{
					"a": "Someone who is nice to newbie's",
					"b": "Someone who feels better by making other feel worse",
					"c": "Someone who uses the Internet to knock/put others down",
					"d": "Someone who is happy when they provoke or torment others"

				}
			],
			"answer": "Someone who is nice to newbie's",
			"score": 0,
			"status": ""
		},
		{
			"id": 20,
			"question": "If someone online asks to meet you in person what should you do?",
			"options": [
				{
					"a": "Set up a time and place to meet them",
					"b": "Talk to a parent or trusted adult",
					"c": "Keep emailing the person"
				}
			],
			"answer": "Talk to a parent or trusted adult",
			"score": 0,
			"status": ""
		},
		{
			"id": 21,
			"question": "I should tell only my best friend my password",
			"options": [
				{
					"a": "True",
					"b": "False"
				}
			],
			"answer": "False",
			"score": 0,
			"status": ""
		},
		{
			"id": 22,
			"question": "At what age should I be on social media?",
			"options": [
				{
					"a": "Whenever my parent gets me a device",
					"b": "When my friends sends me a link to join",
					"c": "When I'm 18 years old",
					"c": "Age varies for each platform, always check guideline for appropriate age"
				}
			],
			"answer": "Age varies for each platform, always check guideline for appropriate age",
			"score": 0,
			"status": ""
		},
		{
			"id": 23,
			"question": "When is it okay to submit your personal information to an app",
			"options": [
				{
					"a": "When all your friends have already done it",
					"b": "When you receive a text requesting personal information",
					"c": "When your parents say its okay",
					"d": "When you're being promised money in return"
				}
			],
			"answer": "When your parents say its okay",
			"score": 0,
			"status": ""
		},
		{
			"id": 24,
			"question": "If someone is cyberbullying you, what should you do?",
			"options": [
				{
					"a": "Delete the messages and log off the site",
					"b": "Block the person and report it to the site's administrator(s)",
					"c": "Try to forget it and move on",
					"d": "Confront the cyberbully in person"
				}
			],
			"answer": "Block the person and report it to the site's administrator(s)",
			"score": 0,
			"status": ""
		},
		{
			"id": 25,
			"question": "Posting something on a social networking site is more like;",
			"options": [
				{
					"a": "Announcing something in a public space",
					"b": "Talking on the phone with a friend",
					"c": "Talking to friends in classroom"
				}
			],
			"answer": "Announcing something in a public space",
			"score": 0,
			"status": ""
		}
	]
}



let quizApp = function () {

	this.score = 0;
	this.qno = 1;
	this.currentque = 0;
	let totalque = quiz.JS.length;


	this.displayQuiz = function (cque) {
		this.currentque = cque;
		if (this.currentque < totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');

			    // progress bar
				document.getElementById('progress').style.width = `${(this.currentque / totalque) * 100}%`;
				document.getElementById('range').textContent = `${Math.floor((this.currentque / totalque) * 100)}%`
				current.textContent = `${this.currentque +1 } / ${totalque}`


			$("#question").html(quiz.JS[this.currentque].question);
			$("#question-options").html("");
			for (let key in quiz.JS[this.currentque].options[0]) {
				if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {

					$("#question-options").append(
						"<div class=' form_items text-center'>" +
						"<label class='step_1 animate__animated animate__fadeInRight animate_50ms position-relative rounded-pill text-start active lab'>" +
						"<input type='radio' class='form-check-input' name='option'   id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval' class='mx-3 ' >" +
						quiz.JS[this.currentque].options[0][key] +
						"</span></label>"
					);
				}
			}
		}
		if (this.currentque == quiz.JS.length-1) {
			document.getElementById('next').textContent = "Submit"
		}

		if (this.currentque <= 0) {
			$("#previous").attr("disabled", true);
		}
		if (this.currentque >= totalque) {

			$('#next').attr('disabled', true);
			for (let i = 0; i < totalque; i++) {
				this.score = this.score + quiz.JS[i].score;
			}
			return this.showResult(this.score);
		}

		
	}





	this.showResult = function (scr) {
		$("#result").addClass('result');
		$("#result").html("<br> <button type='reset' style='font-weight: 700; font-size: 1.5rem;' class='btn next_btn w-50 py-3' onclick='history.go(0)'>Restart</button> <br> <br> <h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
		// $("#result").html("<button type='reset' onclick='history.go(0)'>Restart</button>");
		for (let j = 0; j < totalque; j++) {
			let res;
			if (quiz.JS[j].score == 0) {
				res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong text-danger"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct text-success"></i>';
			}
			$("#result").append(
				'<div class="result-question" style="color: black; font-weight:100;"><i><span>Q ' + quiz.JS[j].id + '</span></i> &nbsp;' + quiz.JS[j].question + '</div>' +
				'<div style="color: black; font-weight:100;"><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
				'<div class="last-row" style="color: black; font-weight:200;"><b>Score:</b> &nbsp;' + res +
				
				'</div>' 
				

			);
			

		}
	}

	this.checkAnswer = function (option) {
		let answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g, "&lt;")   //for <
		option = option.replace(/\>/g, "&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if (option == quiz.JS[this.currentque].answer) {
			if (quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
			}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}

	}

	this.changeQuestion = function (cque) {
		this.currentque = this.currentque + cque;
		this.displayQuiz(this.currentque);

	}

}


let jsq = new quizApp();

let selectedopt;
$(document).ready(function () {
	jsq.displayQuiz(0);

	$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {

		//let radio = $(this).find('input:radio');
		$(this).prop("checked", true);
		selectedopt = $(this).val();
	});



});




$('#next').click(function (e) {
	e.preventDefault();
	if (selectedopt) {
		jsq.checkAnswer(selectedopt);
	}
	jsq.changeQuestion(1);
});

$('#previous').click(function (e) {
	e.preventDefault();
	if (selectedopt) {
		jsq.checkAnswer(selectedopt);
	}
	jsq.changeQuestion(-1);
});



