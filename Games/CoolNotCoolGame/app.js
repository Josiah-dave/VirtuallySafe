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
let thumbsDownIcon = document.getElementById('thumbsDownIcon')
let thumbsUpIcon = document.getElementById('thumbsUpIcon')
let thumbsUpPara = document.getElementById('thumbsUpPara')
let thumbsDownPara = document.getElementById('thumbsDownPara')
let iConSpecialDiv = document.getElementById('iConSpecial')
let correctAnswerPara = document.getElementById('correctAnswerPara')
let currentNumberPara = document.getElementById('currentNumberPara')






let allQuestions = [{
    id: 1,
    Questions:'I am visiting a site from a company or organization of which I have heard. They want my name and phone number so I can enter a contest. Is it Cool to enter?  ',
    isCool: false,
    isNotCool: true,
    Answer:'If a legitimate company wants to collect information from children -- even to enter you in a contest -- they must first get your parents’ permission. Ask your parents about the importance of protecting your privacy. ',
    img:`./images/Security_Monochromatic.svg`,
    noOfCool: 20,
    noOfNotCool:80,

},
{
    id: 2,
    Questions:"My parents' and I have established rules as to what I can do on the Internet when I am home, but I am at a friend's house and i decide to follow my parents rules",
    isCool:true,
    isNotCool:false,
    Answer:"Wherever you are, you should go by your parents’ rules.  ",
    img: `./images/undraw_online_popularity_re_nm0s.svg`,
    noOfCool: 90,
    noOfNotCool:10,


},
{
    id: 3,
    Questions:'I am online and I get a message from my Internet service provider asking for my password. They say they need it to fix my account, I gave it to them ',
    isCool:false,
    isNotCool:true,
    Answer:"About 99% of fraudster pretends to be employee of company you might be associated with, so avoid sharing your information anyhow.",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 8,
    noOfNotCool:92,


},
{
    id: 4,
    Questions:'I have a digital picture of myself and someone I met online wants to see it. Is it OK to send it to that person?',
    isCool:false,
    isNotCool:true,
    Answer:"  You should NEVER send a picture of yourself to someone you met online, without first checking with your parents!   ",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 8,
    noOfNotCool:92,


},
{
    id: 5,
    Questions:'If someone is flattering you online, you should be wary. ',
    isCool:false,
    isNotCool:true,
    Answer:"  Although many people online are genuinely nice, predators may use flattery to try to start a relationship with a teen. This does not mean you need to be suspicious of everyone, but you should be careful.  ",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 8,
    noOfNotCool:92,


},
{
    id: 6,
    Questions:'Do not talk to anyone who wants to get too personal. ',
    isCool:true,
    isNotCool:false,
    Answer:"   If they want to talk about things that are sexual or personal, you should end the conversation. Once you get pulled into a conversation (or a relationship), it may be more difficult to stop. ",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 92,
    noOfNotCool:8,


},
{
    id: 7,
    Questions:'Avoid using suggestive screen names or photos. ',
    isCool:true,
    isNotCool:false,
    Answer:"  These can result in unwanted attention from online predators. ",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 92,
    noOfNotCool:8,


},
{
    id: 8,
    Questions:'Keep in mind that people are not always who they say they are.',
    isCool:true,
    isNotCool:false,
    Answer:"   Predators may pretend to be children or teenagers to talk to kids online. They may use a fake profile picture and add other profile details to appear more convincing.. ",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 92,
    noOfNotCool:8,


},
{
    id: 9,
    Questions:' Never arrange to meet with someone you met online..',
    isCool:true,
    isNotCool:false,
    Answer:"    Predators may try to arrange a face-to-face meeting with a child or teen. Even if the person seems nice, this can be dangerous. ",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 90,
    noOfNotCool:10,


},
{
    id: 10,
    Questions:' Tell a parent or trusted adult if you encounter a problem.',
    isCool:true,
    isNotCool:false,
    Answer:"    If anyone makes you feel uncomfortable online, you should tell a parent or trusted adult immediately. You should also save any emails or other communication because they may be needed as evidence.",
    img: `./images/undraw_internet_on_the_go_re_vben.svg`,
    noOfCool: 80,
    noOfNotCool:20,


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
    console.log(allNew[index].noOfCool)
    console.log(allNew[index].noOfNotCool)
    if(allNew[index].isCool==true){
        answerDiv.style.position = `absolute`
        answerDiv.style.background =`white`
        answerDiv.style.zIndex = `999`
        answerDiv.style.top = `0px`
        wordHead.textContent = 'WAS COOL'

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
        thumbsUpPara.textContent=`${allNew[index].noOfCool}%`
        thumbsUpIcon.style.color=`green`
        thumbsDownIcon.style.color=`#2f1446`
        thumbsDownPara.textContent=`${allNew[index].noOfNotCool}%`

        progressBar.style.width=`${allNew[index].noOfCool}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=`Correct Answer:Cool | Your Answer: Cool`

      
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
        wordHead.textContent = 'WAS COOL'
        thumbsUpPara.textContent=`${allNew[index].noOfCool}%`
        thumbsDownPara.textContent=`${allNew[index].noOfNotCool}%`
        answerPara.textContent = `${allNew[index].Answer}`
        thumbsUpIcon.style.color=`#2f1446`
        thumbsDownIcon.style.color=`green`
        progressBar.style.width=`${allNew[index].noOfCool}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=` Correct Answer: Not Cool | Your Answer: Cool `
    }
})
thumbsDownBtn.addEventListener('click',()=>{
    if(allNew[index].isNotCool==true){
        answerDiv.style.position = `absolute`
        answerDiv.style.background =`white`
        answerDiv.style.zIndex = `999`
        answerDiv.style.top = `0px`
        wordHead.textContent = 'WAS NOT COOL'

        introDiv.style.position = `absolute`
        introDiv.style.zIndex =`9`
        introDiv.style.background=`transparent`
        introDiv.style.top = `0px`
    
        quizDiv.style.position=`absolute`
        quizDiv.style.background = `transparent`
        quizDiv.style.zIndex = `99`
        quizDiv.style.top = `0px`
        thumbsDownIcon.style.color=`green`
        thumbsUpIcon.style.color=` #2f1446`
        thumbsDownPara.textContent=`${allNew[index].noOfNotCool}%`
        thumbsUpPara.textContent=`${allNew[index].noOfCool}%`
        answerPara.textContent = `${allNew[index].Answer}`
        progressBar.style.width=`${allNew[index].noOfNotCool}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=` Correct Answer: Not Cool | Your Answer: Not Cool `
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
        wordHead.textContent = 'WAS COOL'
        thumbsDownPara.textContent=`${allNew[index].noOfNotCool}%`
        thumbsUpPara.textContent=`${allNew[index].noOfCool}%`
        thumbsDownIcon.style.color=`#2f1446`
        thumbsUpIcon.style.color=`green`
        answerPara.textContent = `${allNew[index].Answer}`
        progressBar.style.width=`${allNew[index].noOfNotCool}%`
        progressBar.style.height=`100%`
        progressBar.style.background=`#7527b9`
        progressBar.style.borderRadius=`30px`
        correctAnswerPara.textContent=` Correct Answer: Cool | Your Answer: Not Cool `
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
               window.location.href=`./index.html`
            
            })
        }
  
})