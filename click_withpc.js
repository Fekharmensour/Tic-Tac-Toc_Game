chosi.children[1].addEventListener('click',function(){
    chosi.style.display="none";
    WithPc.style.display="block";  
    let arry =Array.from(WithPc.children)
    arry.shift()
    // arry.forEach(function(e){
    //     e.onclick=()=>{
    //         document.querySelector('.back-st').style.display='none'
    //     }
    // })

// level profe
arry[0].addEventListener('click',()=>{
    document.querySelector('.back-st').style.display='none'
})

// level mud
arry[1].addEventListener('click',()=>{
    document.querySelector('.back-st').style.display='none'
})

// level easy
arry[2].addEventListener('click',()=>{
    document.querySelector('.back-st').style.display='none'
    play_easy()
})


})

let playlist =document.querySelectorAll(".cell")
let arr=Array.from(playlist)

function play_pro(){

}
function play_mud(){
    
}
function play_easy(){
    let role=true 
    console.log("fkjlr");    
while(player.played.length!==5){
    if(role==true){
        for(let i=0 ;i<arr.length;i++){
            arr[i].addEventListener('click',()=>{
             // write X 
            // console.log("fkjlr");    
            arr[i].innerHTML=player.Symbol;
            arr[i].classList.add("no-click")
                arr[i].classList.add("check")
           // add this cell in list player one
                player.played.push(i)
                role=false
            })
        }
            return play_easy()

    }else{
    let no_check=arr.filter((e)=>{
        return e.classList.contains("check")
    })
    }
}

    // let no_check=arr.filter((e)=>{
    //     return e.classList.contains("check")
    //     console.log(no_check);
function RoleMe(){}
function RolePc(){}
}
let pl=true
let pc_player={
    played:[],
    Symbol:"O",
    score:0,
}
let player={
    played:[],
    Symbol:"X",
    score:0,
}
var myList = [1, 3, 5, 7, 8];
var randomIndex = Math.floor(Math.random() * myList.length);
var randomNum = myList[randomIndex];
console.log(randomNum);

//console.log(cells[0]);

let listb =arr.filter((e)=>{
    return !e.classList.contains('no-click')
})
console.log(listb);
// let no_check=arr.filter((e)=>{
//     return !e.classList.contains("check")
// })
// console.log(no_check);