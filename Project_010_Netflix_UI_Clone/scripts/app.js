let questions = document.querySelectorAll(".question-answer");
let html = document.querySelector("html");
let languageSelect = document.querySelectorAll("#language-select");

function resetQuestions(except = null){
    questions.forEach(question => {
        if(except === question){
            return;
        }
        else{
            let answer = question.querySelector(".answer");
            answer.classList.remove("show");
            let symbol = question.querySelector(".question-symbol");
            symbol.innerText = "+";
            symbol.style.fontSize = "4rem";
            symbol.style.fontWeight = "100";
        }
    })
}

questions.forEach(question => {
    function showAnswer(){
        let answer = question.querySelector(".answer");
        let symbol = question.querySelector(".question-symbol");
        if(answer.classList.contains("show")){
            answer.classList.remove("show");
            symbol.innerText = "+";
            symbol.style.fontSize = "4rem";
            symbol.style.fontWeight = "100";
        }
        else{
            resetQuestions(question);
            answer.classList.add("show");
            symbol.innerText = "X";
            symbol.style.fontSize = "2.5rem";
            symbol.style.fontWeight = "500";
        }
    }
    question.addEventListener("click",showAnswer);
})

function changeToEnglish(){
    console.log("html language changed to english");
    html.setAttribute.lang = "en";
}

function changeToHindi(){
    console.log("html language changed to hindi");
    html.setAttribute.lang = "hi";
}

languageSelect.forEach(languageChangeButton => {
    languageChangeButton.addEventListener("change", (event) => {
        if (event.target.value === "English") {
            changeToEnglish();
        } else if (event.target.value === "Hindi") {
            changeToHindi();
        }
    });
})