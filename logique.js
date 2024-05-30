// backgroun game 
// declaration les variable
let main_title =document.querySelector(".back-st .body-st h1")
let botton_start =document.querySelector(".back-st .body-st  button")
let chosi =document.querySelector(".back-st .body-st .chosi")
let WithPc =document.querySelector(".back-st .body-st .with-pc")
//click in botton start game 
botton_start.addEventListener('click',function(){
    // disp none of title and botton
    main_title.style.display="none";
    botton_start.style.display="none";
    // disb block of background suiv 
    chosi.style.display="block";
})

let elm_block = document.getElementById("block")
let backgroun_try =document.getElementById("try")
let title_win = document.getElementById("resultat")
// les posibles
let check=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8]
]
// slect botton try again 
let again=document.getElementById("try-again")
again.addEventListener('click', () => {
    // Reload the page when the "try" button is clicked
    window.location.reload();
});
let btn_replay = document.getElementById("btn_replay")