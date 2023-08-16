
// assign Quests and options
let questD = document.getElementById("questD");
let btn_A = document.getElementById("btnA");
let btn_B = document.getElementById("btnB");
let btn_C = document.getElementById("btnC");
let btn_D = document.getElementById("btnD");
let Qimg = document.getElementById("Qimg");
let btn_Prev = document.getElementById("btnPrev");
let btn_Next = document.getElementById("btnNext");
let idNum = document.getElementById("idNum");
let arrLen = document.getElementById("arrLen");
let btn_Submit = document.getElementById("btnSubmit");
let current = document.getElementById("current");
let range = document.getElementById("range");
let yes = document.getElementById("yes");
let progress = document.getElementById("progress");
let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')
let Time = document.getElementById('Time')
// Questions

const QuestionsSheet = [
    {
        id: 1,
        ask: "Kodu game lab is an Application use to program _______ for young ones.",
        correctOption: "Games",
        options: ["Fights", "Games", "Shooting", "eating codes"],
    },
    {
        id: 2,
        ask: "In the startup page of the Kodu Game Lab as shown above, you are required to fill your ________ in the Creator’s section",
        correctOption: "Nick name ",
        options: ["Real Name", "Nick name ", "Parent Name", "No name"],
    },
    {
        id: 3,
        ask: "To create a new game on kodu game lab, you have to click on _______",
        correctOption: "New world",
        options: ["New world", "load world", "kodu", "Community"],
    },
    {
        id: 4,
        ask: "To open a previous kodu game lab project, you have to click on ___________",
        correctOption: "load world",
        options: ["load world", "kodu", "Community", "New world"],
    },
    {
        id: 5,
        ask: "Kodu game lab has how many pre-designed worlds?",
        correctOption: "3",
        options: ["1", "2", "3", "4"],
    },
    {
        id: 6,
        ask: "World in Kodu game lab means ___________",
        correctOption: "Environment",
        options: ["Object", "house", "Environment", "universe"],
    },
    {
        id: 7,
        ask: "What tool do you use to add more field to your world?",
        correctOption: "Ground brush",
        options: ["Ground brush", "Home tool", "Object tool", "Path tool"],
    },
    {
        id: 8,
        ask: "To delete fields from your world, you need to _______ on the field spaces",
        correctOption: "Right click",
        options: ["Right click", "Left Click", "scroll", "Double click"],
    },
    {
        id: 9,
        ask: "To add fields your world using the object tool, you need to _______ on the empty spaces",
        correctOption: "Left Click",
        options: ["Left Click", "Right click", "scroll", "Double click"],
    },
    {
        id: 10,
        ask: "What tool do you use to add a character to your world?",
        correctOption: "Object tool",
        options: ["Object tool", "Home tool", "Ground brush", "Path tool"],
    },
    {
        id: 11,
        ask: "You delete a character by right clicking on it then selecting ______",
        correctOption: "Cut",
        options: ["Cut", "change setting", "program", "copy"],
    },
    {
        id: 12,
        ask: "To change the colour of a character, you put the arrow on it and press ______",
        correctOption: "Left and right arrow key",
        options: [
            "Left and right arrow key",
            "None",
            "Up and down arrow key",
            "Scroll button",
        ],
    },
    {
        id: 13,
        ask: "To change the direction a character facing, you put the arrow on it and press ______",
        correctOption: "Up and down arrow key",
        options: [
            "Left and right arrow key",
            "None",
            "Up and down arrow key",
            "Scroll button",
        ],
    },
    {
        id: 14,
        ask: "Apple is always hidden in what part of the select menu in kodu?",
        correctOption: "Objects",
        options: ["Objects", "None of the above", "Combat", "Rocks"],
    },
    {
        id: 15,
        ask: "The last line of code in Apple eating game is mainly for __________",
        correctOption: "Winning or ending",
        options: [
            "Winning or ending",
            "movement",
            "eating apple",
            "playing the game",
        ],
    },
    {
        id: 16,
        ask: "The first line of code in Apple eating game is mainly for__________",
        correctOption: "3D Animation",
        options: [
            "Winning or ending",
            "movement",
            "eating apple",
            "playing the game",
        ],
    },
    {
        id: 17,
        ask: "The Forward added to the shot missile prevents the Missile from _____________",
        correctOption: "Targeting our character continuously",
        options: [
            "Targeting our character continuously",
            "disappearing",
            "Moving on a straight path",
            "killing our character",
        ],
    },
    {
        id: 18,
        ask: "We _______ on a character to change its settings",
        correctOption: "Left Click",
        options: ["Left Click", "Right click", "scroll", "Double click"],
    },
    {
        id: 19,
        ask: "What tool do you use to save your world?",
        correctOption: "Home tool",
        options: ["Object tool", "Home tool", "Ground brush", "Path tool"],
    },
    {
        id: 20,
        ask: "The programming of Kodu Game Lab is based on two functions namely",
        correctOption: "When and Do",
        options: ["While and Do", "When and If", "If and Do", "When and Do"],
    },
];

console.log(QuestionsSheet)
let mins = 10;
let time = mins * 60;
let score = [];
let getindex = 0;
let questTrack = 1;

function timers() {
    let sMin = Math.floor(time / 60);
    let sSec = time % 60;
    Time.textContent = `Time: ${sMin} : ${sSec}`;
    time--;

}

function Start() {
    function randomize(QuestionsSheet) {
        let cIndex = QuestionsSheet.length,
            rIndex;
        while (cIndex != 0) {
            rIndex = Math.floor(Math.random() * cIndex);
            cIndex--;
            [QuestionsSheet[cIndex], QuestionsSheet[rIndex]] = [
                QuestionsSheet[rIndex],
                QuestionsSheet[cIndex],
            ];
        }
        console.log(QuestionsSheet)
        return QuestionsSheet;
    }

    // Randomize option function
    function randomize(arr) {
        let cIndex = arr.length,
            rIndex;
        while (cIndex != 0) {
            rIndex = Math.floor(Math.random() * cIndex);
            cIndex--;
            [arr[cIndex], arr[rIndex]] = [arr[rIndex], arr[cIndex]];
        }
        return arr;
    }

    let option = randomize(QuestionsSheet[getindex].options);
    console.log(option);




    // progress bar
    progress.style.width = `${(questTrack / QuestionsSheet.length) * 100}%`;
    range.textContent = `${(questTrack / QuestionsSheet.length) * 100}%`
    current.textContent = `${questTrack} / ${QuestionsSheet.length}`
  

    questD.textContent = QuestionsSheet[getindex].ask;
    btn_A.textContent = QuestionsSheet[getindex].options[0];
    btn_B.textContent = QuestionsSheet[getindex].options[1];
    btn_C.textContent = QuestionsSheet[getindex].options[2];
    btn_D.textContent = QuestionsSheet[getindex].options[3];



    btn_A.addEventListener("click", () => {
        if (btn_A.textContent === QuestionsSheet[getindex].correctOption) {
          btn_A.style.backgroundColor = "green";
          btn_B.style.backgroundColor = "";
          btn_C.style.backgroundColor = "";
          btn_D.style.backgroundColor = "";
          score.push({ id: QuestionsSheet[getindex].id, score: 2 });
          console.log(true);
        } else {
          btn_A.style.backgroundColor = "green";
          btn_B.style.backgroundColor = "";
          btn_C.style.backgroundColor = "";
          btn_D.style.backgroundColor = "";
          console.log(false);
        }
      });
      btn_B.addEventListener("click", () => {
        if (btn_B.textContent === QuestionsSheet[getindex].correctOption) {
          btn_B.style.backgroundColor = "green";
          btn_A.style.backgroundColor = "";
          btn_C.style.backgroundColor = "";
          btn_D.style.backgroundColor = "";
          score.push({ id: QuestionsSheet[getindex].id, score: 2 });
          console.log(true);
        } else {
          btn_B.style.backgroundColor = "green";
          btn_A.style.backgroundColor = "";
          btn_C.style.backgroundColor = "";
          btn_D.style.backgroundColor = "";
          console.log(false);
        }
      });

      btn_C.addEventListener("click", () => {
        if (btn_C.textContent === QuestionsSheet[getindex].correctOption) {
          score.push({ id: QuestionsSheet[getindex].id, score: 2 });
          btn_C.style.backgroundColor = "green";
          btn_A.style.backgroundColor = "";
          btn_B.style.backgroundColor = "";
          btn_D.style.backgroundColor = "";
          console.log(true);
        } else {
          btn_C.style.backgroundColor = "green";
          btn_A.style.backgroundColor = "";
          btn_B.style.backgroundColor = "";
          btn_D.style.backgroundColor = "";
          console.log(false);
        }
      });
      btn_D.addEventListener("click", () => {
        if (btn_D.textContent === QuestionsSheet[getindex].correctOption) {
          score.push({ id: QuestionsSheet[getindex].id, score: 2 });
          btn_D.style.backgroundColor = "green";
          btn_A.style.backgroundColor = "";
          btn_B.style.backgroundColor = "";
          btn_C.style.backgroundColor = "";
          console.log(true);
        } else {
          btn_D.style.backgroundColor = "green";
          btn_A.style.backgroundColor = "";
          btn_B.style.backgroundColor = "";
          btn_C.style.backgroundColor = "";
          console.log(false);
        }
        console.log(score);
      });


      
    //    Next Questions display

   nextBtn.addEventListener("click", () => {
        if (QuestionsSheet.length !== questTrack) {
          questTrack += 1;
              // progress bar
    progress.style.width = `${(questTrack / QuestionsSheet.length) * 100}%`;

    range.textContent = `${(questTrack / QuestionsSheet.length) * 100}%`
    current.textContent = `${questTrack} / ${QuestionsSheet.length}`
        } else {
          // btn_Submit.style.display = ''
          // btn_Next.style.display = 'none'
        }
  
        if (QuestionsSheet.length == questTrack) {
        //   btn_Submit.style.display = "";
        //   btn_Next.style.display = "none";
        }
        // btn_Prev.style.display = "none";
        getindex++;
  
        btn_A.style.backgroundColor = "";
        btn_B.style.backgroundColor = "";
        btn_C.style.backgroundColor = "";
        btn_D.style.backgroundColor = "";
  
        // arrLen.textContent = QuestionsSheet.length;
        questD.textContent = QuestionsSheet[getindex].ask;
        questD.textContent = QuestionsSheet[getindex].ask;
        btn_A.textContent = QuestionsSheet[getindex].options[0];
        btn_B.textContent = QuestionsSheet[getindex].options[1];
        btn_C.textContent = QuestionsSheet[getindex].options[2];
        btn_D.textContent = QuestionsSheet[getindex].options[3];
      
  
        btn_A.addEventListener("click", () => {
          if (btn_A.textContent === QuestionsSheet[getindex].correctOption) {
            score.push({ id: QuestionsSheet[getindex].id, score: 2 });
            btn_A.style.backgroundColor = "green";
            btn_B.style.backgroundColor = "";
            btn_C.style.backgroundColor = "";
            btn_D.style.backgroundColor = "";
            console.log(true);
          } else {
            btn_A.style.backgroundColor = "green";
            btn_B.style.backgroundColor = "";
            btn_C.style.backgroundColor = "";
            btn_D.style.backgroundColor = "";
            console.log(false);
          }
        });
        btn_B.addEventListener("click", () => {
          if (btn_B.textContent === QuestionsSheet[getindex].correctOption) {
            score.push({ id: QuestionsSheet[getindex].id, score: 2 });
            btn_B.style.backgroundColor = "green";
            btn_A.style.backgroundColor = "";
            btn_C.style.backgroundColor = "";
            btn_D.style.backgroundColor = "";
            console.log(true);
          } else {
            btn_B.style.backgroundColor = "green";
            btn_A.style.backgroundColor = "";
            btn_C.style.backgroundColor = "";
            btn_D.style.backgroundColor = "";
            console.log(false);
          }
        });
        btn_C.addEventListener("click", () => {
          if (btn_C.textContent === QuestionsSheet[getindex].correctOption) {
            score.push({ id: QuestionsSheet[getindex].id, score: 2 });
            btn_C.style.backgroundColor = "green";
            btn_A.style.backgroundColor = "";
            btn_B.style.backgroundColor = "";
            btn_D.style.backgroundColor = "";
            console.log(true);
          } else {
            btn_C.style.backgroundColor = "green";
            btn_A.style.backgroundColor = "";
            btn_B.style.backgroundColor = "";
            btn_D.style.backgroundColor = "";
            console.log(false);
          }
        });
        btn_D.addEventListener("click", () => {
          if (btn_D.textContent === QuestionsSheet[getindex].correctOption) {
            score.push();
            btn_D.style.backgroundColor = "green";
            btn_A.style.backgroundColor = "";
            btn_B.style.backgroundColor = "";
            btn_C.style.backgroundColor = "";
            console.log(true);
          } else {
            btn_D.style.backgroundColor = "green";
            btn_A.style.backgroundColor = "";
            btn_B.style.backgroundColor = "";
            btn_C.style.backgroundColor = "";
            console.log(false);
          }
        });
        console.log(score);
      });
  
    //   btn_Submit.addEventListener("click", () => {
    //     modalbox.style.opacity = "1";
    //     modalbox.style.display = "block";
    //     modalbox.style.transition = "2s";
    //     // modalbox.style.zIndex = '9999999999999999'
  
    //     yes.addEventListener("click", () => {
    //       congrate.classList.toggle("last");
    //       clearInterval(set);
    //       let result = [
    //         ...new Map(score.map((resu) => [resu.id, resu])).values(),
    //       ];
  
    //       const final_score = result.reduce((a, b) => {
    //         a += b.score;
    //         return a;
    //       }, 0);
  
    //       // Local Database
    //       function Store() {
    //         let NameV = nameD.textContent;
    //         let scoreV = final_score;
    //         let id = candidate.id;
    //         let details = [];
    //         details = JSON.parse(localStorage.getItem("scores")) || [];
    //         details.push({ score: scoreV, name: NameV, num: id });
    //         localStorage.setItem("scores", JSON.stringify(details));
    //       }
    //       Store();
    //       console.log(final_score);
    //     });
    //   });
   



}



let set = setInterval(timers, 1000);
Start()