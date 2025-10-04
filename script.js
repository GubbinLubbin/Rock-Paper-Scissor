let info_text = document.querySelector("#info");
let player_score = document.querySelector("#player_score");
let computer_score = document.querySelector("#computer_score");
let buttons = document.querySelectorAll(".button");
let reset_button=document.querySelector("#reset_button")
console.log(buttons);
for (const btn of buttons) {
    btn.addEventListener("click", () => {
        let ran_num = Math.floor(Math.random() * 3) + 1;
        if (btn.id === "rock") {
            if (ran_num == 1) {
                info_text.innerText = "Computer choose rock, it's a tie";
                info_text.style.backgroundColor = "pink";
            }
            if (ran_num == 2) {
                info_text.innerText = "Computer choose paper, you lost";
                info_text.style.backgroundColor = "red";
                computer_score.innerText = parseInt(computer_score.innerText) + 1;
            }
            if (ran_num == 3) {
                info_text.innerText = "Computer choose scissor, you won";
                info_text.style.backgroundColor = "green";
                player_score.innerText = parseInt(player_score.innerText) + 1;
            }
        }
        else if (btn.id === "paper") {
            if (ran_num == 1) {
                info_text.innerText = "Computer choose rock, you won";
                info_text.style.backgroundColor = "green";
                player_score.innerText = parseInt(player_score.innerText) + 1;
            }
            if (ran_num == 2) {
                info_text.innerText = "Computer choose paper, it's a tie";
                info_text.style.backgroundColor = "pink";
            }
            if (ran_num == 3) {
                info_text.innerText = "Computer choose scissor, you lost";
                info_text.style.backgroundColor = "red";
                computer_score.innerText = parseInt(computer_score.innerText) + 1;
            }
        }
        else if (btn.id === "scissor") {
            if (ran_num == 1) {
                info_text.innerText = "Computer choose rock, you lost";
                info_text.style.backgroundColor = "red";
                computer_score.innerText = parseInt(computer_score.innerText) + 1;
            }
            if (ran_num == 2) {
                info_text.innerText = "Computer choose paper, you won";
                info_text.style.backgroundColor = "green";
                player_score.innerText = parseInt(player_score.innerText) + 1;
            }
            if (ran_num == 3) {
                info_text.innerText = "Computer choose scissor, it's a tie";
                info_text.style.backgroundColor = "pink";
            }
        }
        winchecker();
    });
}
function winchecker(){
    if(computer_score.innerText==5){
        info_text.innerText="Computer Won";
        info_text.style.backgroundColor="red";
        for(const btn of buttons)
        {
            btn.disabled=true;
        }
    }
    if(player_score.innerText==5){
        info_text.innerText="You Won!"
        info_text.style.backgroundColor="green";
        for(const btn of buttons){
            btn.disabled=true;
        }
    }
}
reset_button.addEventListener("click",()=>{
    for(const btn of buttons){
        btn.disabled=false;
    }
    computer_score.innerText="0"
    player_score.innerText="0"
    info_text.innerText="Pick Your Move"
})