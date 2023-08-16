let startBtn = document.getElementById('clickBtn')
let thumbsUpBtn = document.getElementById('thumbsUp')
let thumbsDownBtn = document.getElementById('thumbsDown')
let backBtn = document.getElementById('backNext')
let nextBtn = document.getElementById('nextBtn')
let quizDiv = document.getElementById('quizDiv')
let introDiv = document.getElementById('introDiv')
let parater = document.getElementById('para')
let imged = document.getElementById('imged')
let wordHead = document.getElementById('word')
let answerPara = document.getElementById('answer')
let answerDiv = document.getElementById('answerDiv')
let progressBar = document.getElementById('progress-bar')
let quizDivInner = document.getElementById('cele')



let loaderDiv = document.getElementById('loaderDiv')
let iConSpecialDiv = document.getElementById('iConSpecial')
let correctAnswerPara = document.getElementById('correctAnswerPara')
let currentNumberPara = document.getElementById('currentNumberPara')






let allQuestions = [{
    id: 1,
    Questions:'I am visiting a site from a company or organization of which I have heard. They want my name and phone number so I can enter a contest. Is it Cool to enter?  ',
    isYes: false,
    isNo: true,
    Answer:'If a legitimate company wants to collect information from children -- even to enter you in a contest -- they must first get your parents’ permission. Ask your parents about the importance of protecting your privacy. ',
    img:`./Yes or No Card/images/Security_Monochromatic.svg`,
    noOfYes: 20,
    noOfNo:80,

},
{
    id: 2,
    Questions:"My parents' and I have established rules as to what I can do on the Internet when I am home, but I am at a friend's house and i decide to follow my parents rules",
    isYes:true,
    isNo:false,
    Answer:"Wherever you are, you should go by your parents’ rules.  ",
    img: `./Yes or No Card/images/undraw_online_popularity_re_nm0s.svg`,
    noOfYes: 90,
    noOfNo:10,


},
{
    id: 3,
    Questions:'I am online and I get a message from my bank asking for my mobile banking password. They say they need it to fix my account, Is it Ok to give to them since they’re from my bank? ',
    isYes:false,
    isNo:true,
    Answer: `You should never give out your password or PIN to anyone other than your parents. Banks and fintech service providers will never ask for your password and sometimes people will pretend that they work for the bank to get your password.`,
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 8,
    noOfNo:92,


},
{
    id: 4,
    Questions:'I have a digital picture of myself and someone I met online wants to see it. Is it OK to send it to that person?',
    isYes:false,
    isNo:true,
    Answer:"  You should NEVER send a picture of yourself to someone you met online, without first checking with your parents!   ",
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 8,
    noOfNo:92,


},
{
    id: 5,
    Questions:'If someone is flattering you online, you should be wary. ',
    isYes:false,
    isNo:true,
    Answer:"  Although there are many people online who are genuinely nice, predators and bad people may use flattery to try to start a relationship with you. You must be careful at all times. Not everyone on the internet has bad intentions and not everyone has good intentions. This is why you must be careful when interacting with strangers online. And seek help at all times from a parent or trusted adult. ",
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 8,
    noOfNo:92,


},
{
    id: 6,
    Questions:'Do not talk to anyone who wants to get too personal. ',
    isYes:true,
    isNo:false,
    Answer:"   If they want to talk about things that are sexual or personal, you should end the conversation. Once you get pulled into a conversation (or a relationship), it may be more difficult to stop. ",
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 92,
    noOfNo:8,


},
{
    id: 7,
    Questions:'Avoid using suggestive screen names or photos. ',
    isYes:true,
    isNo:false,
    Answer:"  These can result in unwanted attention from online predators. ",
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 92,
    noOfNo:8,


},
{
    id: 8,
    Questions:'Keep in mind that people are not always who they say they are.',
    isYes:true,
    isNo:false,
    Answer:"   Predators may pretend to be children or teenagers to talk to kids online. They may use a fake profile picture and add other profile details to appear more convincing.. ",
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 92,
    noOfNo:8,


},
{
    id: 9,
    Questions:' Never arrange to meet with someone you met online..',
    isYes:true,
    isNo:false,
    Answer:"    Predators may try to arrange a face-to-face meeting with a child or teen. Even if the person seems nice, this can be dangerous. ",
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 90,
    noOfNo:10,


},
{
    id: 10,
    Questions:' Tell a parent or trusted adult if you encounter a problem.',
    isYes:true,
    isNo:false,
    Answer:"    If anyone makes you feel uncomfortable online, you should tell a parent or trusted adult immediately. You should also save any emails or other communication because they may be needed as evidence.",
    img: `./Yes or No Card/images/undraw_internet_on_the_go_re_vben.svg`,
    noOfYes: 80,
    noOfNo:20,


},
]
let index = 0
let allNew = []
function duplicateArray(){
    while(allQuestions.length !==0){
        let randomIndex = Math.floor(Math.random()*allQuestions.length);
        allNew.push(allQuestions[randomIndex]);
        allQuestions.splice(randomIndex,1)
    }
}




console.log(allNew)
let score = 1

let dater = allQuestions[Math.floor(Math.random()*allQuestions.length)]

console.log(allNew[0])

let rosed = allQuestions[index]
window.addEventListener('load',()=>{
    loaderDiv.style.display='none'
})
startBtn.addEventListener('click',()=>{
    
    introDiv.style.zIndex =`9`
    introDiv.style.position = `relative`
    introDiv.style.background=`none`
    // let rosed = allQuestions[0]
    
    quizDiv.style.position = `absolute`
    quizDiv.style.top=`0px`
    quizDiv.style.zIndex = `99`
    duplicateArray() 
    quizDiv.classList.toggle('translated')
    quizDiv.style.background=`white`
   
    parater.textContent = allNew[0].Questions
    imged.setAttribute('src',`${allNew[0].img}`)
   
    let emptyVariable ;
    let iTag = document.createElement('i')
    iTag.setAttribute('class','fa fa-circle')
    currentNumberPara.textContent=score

    iConSpecialDiv.append(iTag)

 

})


thumbsUpBtn.addEventListener('click',()=>{
    console.log(allNew[index].noOfYes)
    console.log(allNew[index].noOfNo)
    if(allNew[index].isYes==true){
        answerDiv.style.position = `absolute`
        answerDiv.style.background =`white`
        answerDiv.style.zIndex = `999`
        answerDiv.style.top = `0px`
        wordHead.textContent = 'YES'

        introDiv.style.position = `absolute`
        introDiv.style.zIndex =`9`
        introDiv.style.background=`transparent`
        introDiv.style.top = `0px`
    
        quizDiv.style.position=`absolute`
        quizDiv.style.background = `transparent`
        quizDiv.style.zIndex = `99`
        quizDiv.style.top = `0px`
        quizDiv.classList.toggle('translated')

        answerPara.textContent = `${allNew[index].Answer}`

        progressBar.style.width=`${allNew[index].noOfYes}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=`Correct Answer:Yes | Your Answer: Yes`

      
    }

    else{
        answerDiv.style.position = `absolute`
        answerDiv.style.background =`white`
        answerDiv.style.top = `0px`
        
        quizDiv.style.position=`absolute`
        quizDiv.style.background = `transparent`
        quizDiv.style.zIndex = `99`
        quizDiv.style.top= `0px`
        
        introDiv.style.position = `absolute`
        introDiv.style.zIndex =`9`
        introDiv.style.background=`none`
          introDiv.style.top= `0px`
        answerDiv.style.zIndex = `999`
        wordHead.textContent = 'YES'
    
        answerPara.textContent = `${allNew[index].Answer}`
    
        progressBar.style.width=`${allNew[index].noOfYes}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=` Correct Answer: No | Your Answer: Yes `
    }
})
thumbsDownBtn.addEventListener('click',()=>{
    if(allNew[index].isNo==true){
        answerDiv.style.position = `absolute`
        answerDiv.style.background =`white`
        answerDiv.style.zIndex = `999`
        answerDiv.style.top = `0px`
        wordHead.textContent = 'NO'

        introDiv.style.position = `absolute`
        introDiv.style.zIndex =`9`
        introDiv.style.background=`transparent`
        introDiv.style.top = `0px`
    
        quizDiv.style.position=`absolute`
        quizDiv.style.background = `transparent`
        quizDiv.style.zIndex = `99`
        quizDiv.style.top = `0px`
        
        answerPara.textContent = `${allNew[index].Answer}`
        progressBar.style.width=`${allNew[index].noOfNo}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=` Correct Answer: No | Your Answer: No `
    }

    else{
        answerDiv.style.position = `absolute`
        answerDiv.style.background =`white`
        answerDiv.style.top = `0px`
        
        quizDiv.style.position=`absolute`
        quizDiv.style.background = `transparent`
        quizDiv.style.zIndex = `99`
        quizDiv.style.top= `0px`
        
        introDiv.style.position = `absolute`
        introDiv.style.zIndex =`9`
        introDiv.style.background=`none`
          introDiv.style.top= `0px`
        answerDiv.style.zIndex = `999`
        wordHead.textContent = 'NO'
     
        answerPara.textContent = `${allNew[index].Answer}`
        progressBar.style.width=`${allNew[index].noOfNo}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=` Correct Answer: Yes | Your Answer: No `
    }
})
backBtn.addEventListener('click',()=>{
    index-=1;
    let rosed = allNew[index]
    
    
    quizDiv.style.position=`absolute`
    quizDiv.style.background = `white`
    quizDiv.style.zIndex = `999`
    quizDiv.style.top= `0px`
    
    answerDiv.style.position = `absolute`
    answerDiv.style.background =`white`
    answerDiv.style.top = `0px`
    answerDiv.style.zIndex = `99`
    score-=1
    currentNumberPara.textContent=score
    introDiv.style.position = `absolute`
    introDiv.style.zIndex =`9`
    introDiv.style.background=`none`
      introDiv.style.top= `0px`
    
       
    answerPara.textContent = `${allNew[index].Answer}`
    parater.textContent = allNew[index].Questions
    imged.setAttribute('src',`${allNew[index].img}`)
})
nextBtn.addEventListener('click',()=>{
    index+=1;
    let rosed = allNew[index]
    answerDiv.style.position = `absolute`
    answerDiv.style.background =`white`
    answerDiv.style.top = `0px`
    answerDiv.style.zIndex = `999`
    
    score+=1
    currentNumberPara.textContent=score
    
    quizDiv.style.position=`absolute`
    quizDiv.style.background = `white`
    quizDiv.style.zIndex = `9999`
    quizDiv.style.top= `0px`
    
    introDiv.style.position = `absolute`
    introDiv.style.zIndex =`9`
    introDiv.style.background=`none`
      introDiv.style.top= `0px`
   
      answerPara.textContent = `${allNew[index].Answer}`
      parater.textContent = allNew[index].Questions
      imged.setAttribute('src',`${allNew[index].img}`)
      let emptyVariable ;
      let iTag = document.createElement('i')
     iTag.setAttribute('class','fa fa-circle')
      emptyVariable+=iTag
      iConSpecialDiv.append(iTag)
        if(index == allNew.length-1){
            nextBtn.textContent='Finished'
            nextBtn.addEventListener('click',()=>{
               window.location.href=`./yes_or_no_card.html`
            
            })
        }
  
})