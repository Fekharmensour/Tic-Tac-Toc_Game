chosi.children[2].addEventListener('click',function(){
    document.querySelector('.back-st').style.display='none'
    
    play()
})

let cells=document.querySelectorAll(".cell")
let turn = true;
// declar plyer
let player1={
    name:"one",
    Symbol : 'X',
    played :  [] ,
    score : 0
}
let player2={
    name:"two",
    Symbol : 'O',
    played :  [] ,
    score : 0
}
function play(){
for(let i=0 ; i<9;i++){
    cells[i].addEventListener('click' ,() =>{
    if (turn) {
        // write X 
        cells[i].innerHTML=player1.Symbol;
        cells[i].classList.add("no-click")
        // add this cell in list player one
        player1. played.push(i)
        setTimeout(()=>{
            test_win(player1)
        },1000)
        if(player1.played.length==5){
            if(winerXend()){
                test_win(player1)   
            }
            else{end()}
        }
        turn=false;
    }else{
        cells[i].innerHTML=player2.Symbol;
        turn=true;
        player2. played.push(i)
        setTimeout(()=>{
            test_win(player2)
        },1000)
        }
    })
}



}
function end() {
    elm_block.classList.add("no-click")
    title_win.innerHTML="no winer"
    setTimeout(backgroun_try.style.display="block",2000)

}
function test_win(player){
check.some(tab =>{
    if(tab.every(index =>player. played.includes(index))){
    elm_block.classList.add("no-click")
    title_win.innerHTML=   `The winner is " ${player.name} "`
    backgroun_try.style.display="block";
    }
})
}
function winerXend() {
    check.some(tab =>{
        if(tab.every(index =>player1. played.includes(index))){
            return true;
        }
    })
    return false
}

function vide()
{
    console.log("hoi");
    cells.forEach((e)=>{
        e.innerHTML="hi"
    })
}
btn_replay.addEventListener('dblclick',()=>
{
    console.log("hoi");
    cells.forEach((e)=>{
        e.innerHTML=""
        e.classList.remove("no-click")
    })
},);