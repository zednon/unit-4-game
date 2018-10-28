var questions = [
    {
        id: '1',
        name: 'Who is the 14th President of the United States?',
        answers: "Franklin Pierce",
   
        choice:  ["Millard Fillmore" , "Franklin Pierce" , "James Buchanan" , "Abraham Lincoln"] 
    } ,

    {
        id: '2',
        name: 'What state was President Pierce from?',
        answers: "New Hampshire",
        choice:  ["Nebraska", "New Hampshire" , "New York" , "Maine"]

    }
    ,
{
    id: '3',
    name: "How many kids did Pierce have?",
    answers: "3",
    choice:  ["12", "6" , "1" , "3"]
}
,
{
    id: '4',
    name: "How did Pierce oldest child die?",
    answers: "train accident",
    choice:  ["Thrown from a horse", "illness" , "train accident" , "bullet wound"]
}
,
{
    id: '5',
    name: "What did Jane Pierce, believe was the cause of her oldest childs death?",
    answers: "a pack with satin to for Pierce to become the president",
    choice:  ["a pack with satin to for Pierce to become the president", "train derailment" , "bad luck" , "the cold"]
}
,
{
    id: '6',
    name: "After Pierces VP King passed away who took the job?",
    answers: "No one",
    choice:  ["James Buchanan", "Jared W. Williams" , "	Leonard Wilcox" , "No one"]
}
,
{
    id: '7',
    name: "Why didn't Peirce swear on a bible during his oath of office?",
    answers: "He felt he was too sinful",
    choice:  ["He did swear on a bible", "he wasn't Christian" , "They couldn't find one to use" , "He felt he was too sinful"]
}
,
{
    id: '8',
    name: "What is Peirce be known for in US history?",
    answers: "Kansas–Nebraska Act",
    choice:  ["The start of he Civil war", "Nothing do to the loss of all of his children he was unable to pass anything" , "End of a Era" , "Kansas–Nebraska Act."]
}
,
{
    id: '9',
    name: "How did Jane Pierce spend her time at the White House",
    answers: "spending her days writing letters to her dead son",
    choice:  ["spending her days writing letters to her dead son", "helping the need in the area" , "working on her sewing" , "handing all the event plaining of the White House"]
}
,
{
    id: '10',
    name: "What were Peirces views on slavery?",
    answers: "He was angaist it but felt it would brake apart the country to end it.",
    choice:  ["He was angaist it but felt it would brake apart the country to end it.", "He held slaves and didn't see a problem" , "He never stated" , "He felt it was a state isseness not a federal"]
}
]

var index = 0
var right = 0
var wrong = 0



$(document).on("click" , ".choice", function(){
    var choice = $(this).text()
    console.log(choice)
    console.log(questions[index].answers)

   if   (choice === questions[index].answers){
        $("#choice").empty()
        alert("you are right!")
        $("#choice").html("You are Right" )
        right ++
        index ++ 
        if (index < questions.length){
            askQuestion()     
        }
    }   else {
        alert("you are wrong")
        $("#choice").empty()
        $("#choice").html("You are Wrong" )
        index ++
        wrong ++
        if (index < questions.length){
            askQuestion()  
        }
    }});
 
function askQuestion(){
    if (index === questions.length-1) {
        alert("game over")
        console.log(gameover)
        document.getElementById("name").innerHTML=""
        $("#choice").empty()
        $("#gameOver").html("you have right:" + right + "you have wrong:" + wrong )
  
    };

    document.getElementById("name").innerHTML=""
    document.getElementById("name").innerHTML="<h2>" + questions[index].name +"</h2>"
    $("#choice").empty()
    for (var i = 0; i < questions[0].choice.length; i++){ 
        console.log("works");
        $("#choice").append("<button class='choice'>" + questions[index].choice[i]+ "</button>")
        // document.getElementById("choice").append("hello")
    }
   

}
askQuestion()  






// function clock (secs,elem) {
// var element = document.getElementById(elem);

// element.innerHTML = "Please wait for" + secs + "seconds";
// if (sec < 1 ) {
//     clearTimeout(timer);
//     element.innerHTML = '<h2>done! </h2>';
    
// }
// sec--;
// var timer = setTimeout('countDown('+ secs +' , "'+elem+'") ' , 1000);
// }

// countDown(10 ,"clock");
// var time = 100
// var Mytimer = setInterval(function(){
//     time--
//     console.log(time)
// if (time === 0){
//     clearInterval (Mytimer)
// } 
// }
// , 1000)
// function endGame (){
//     document.getElementById("gameOver").innerHTML=""
//     document.getElementById("gameOver").innerHTML="<h2>" + questions[index].name +"</h2>"


// }
// var timer = new Timer ();
// timer.start({precision: 'seconds'});
// timer.addEventListener('secondUpdated'. function (e) {
// $("#minutes")html(getTimeValues().minutes);
// $("#seconds")html(getTimeValues().seconds);

// $('#getttingTValues .minutes')html(timer.getTimeValues().minutes);
// $('#getttingTValues .seconds')html(timer.getTimeValues().seconds);





