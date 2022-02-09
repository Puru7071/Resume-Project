var NavBar = document.getElementsByClassName("NvBar") ; 
var animationDone = false ; 
for(let i = 0 ; i < NavBar.length ; i+=1){
    NavBar[i].addEventListener("click",function(event){
        event.preventDefault() ; 
        var targetElementId = NavBar[i].getAttribute("data-value") ; 
        var targetElement = document.getElementById(targetElementId) ; 
        console.log(targetElementId + targetElement) ; 
        var intervalId = setInterval(function(){
            var distanceLeft = targetElement.getBoundingClientRect().top;
            if(targetElementId == "about" ){
                distanceLeft -= 200 ; 
            }
            if(distanceLeft <=100 ){
                clearInterval(intervalId) ; 
                if(targetElementId == "Skills" && !animationDone){
                    SkillSectionAnimation() ; 
                }
                return ; 
            } 
            window.scrollBy(0,100) ; 
        },50) ; 
    }) ; 
} ; 

var skillsSection = document.getElementById("Skills") ; 
var distFromWindowTop = skillsSection.getBoundingClientRect().top ; 


if(distFromWindowTop <= 100){
    SkillSectionAnimation() ;
}
function SkillSectionAnimation(){
    var skillContainer = document.getElementsByClassName("skillContainer") ; 
    for(let i = 0 ; i < skillContainer.length ; i +=1){
        let maxLevel = parseInt(skillContainer[i].getAttribute("data-value")) ; 
        let curLevel = 0 ; 
        var intervalId = setInterval(function(){
            if(curLevel >= maxLevel){
                clearInterval(intervalId) ; 
                return ; 
            }
            curLevel +=  1; 
            skillContainer[i].style.width= curLevel + "%"; 
            
        },10); 
    }
}; 

window.addEventListener("scroll",function(){
    if(skillsSection.getBoundingClientRect().top <=500 && !animationDone){
        SkillSectionAnimation() ; 
        animationDone = true ; 
        return ;
    }
});

function givePercentage(){
    let hght = document.documentElement.scrollHeight ; 
    let contactDiv = document.getElementById("head1").getBoundingClientRect().top; 
    let perecentIs = -(contactDiv - 570)/hght * 100 ; 
    console.log(hght + " " + contactDiv) ; 
    perecentIs = Math.floor(perecentIs) ; 
    document.getElementById("fetchMe").innerText = perecentIs.toString() + "%" ; 
}

givePercentage() ; 

window.addEventListener("scroll" ,function(){
    if(document.getElementById("contact").getBoundingClientRect().top <= 61){
        return ; 
    }
    givePercentage() ; 
    return ; 
});
var TopButton = document.getElementsByClassName("BTT") ;
for(let i = 0 ; i < TopButton.length ; i ++){
    TopButton[i].addEventListener("click",function(event){
        event.preventDefault() ;  
        var headElement = document.getElementById("head1") ; 
        var intervalId = setInterval(function(){
            var distToBeTrav = Math.abs(headElement.getBoundingClientRect().top);
            if(distToBeTrav <= 20){
                clearInterval(intervalId) ; 
                return ; 
            }
            window.scrollBy(0,-100) ; 
        } , 50) ; 
    });
}





