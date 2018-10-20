
 var goal = Math.floor((Math.random() * 120) + 1);

 var counter = 0;

$("#showOnScreen").text(goal);

    
$("#drink").on("click", function() {
counter += 2;
alert("New score: " + counter);
}); 
$("#eyeball").on("click", function(){
  counter += 8;
  alert("New score: " + counter); 
}); 
  $("#poison").on("click", function() {
    counter += 5;
    alert("New score: " + counter);  
  }); 

    $("#potion").on("click", function() {
      counter += Math.floor((Math.random() * 12) + 1);
      alert("New score: " + counter); 
    });
   
    $("#stuffs").text(counter);
  function checkCounter() {
    if (counter === goal) {
       
        alert("you win"); 
    }   else if  (counter >= goal) {
       
        alert(":(");
  };
};



//I'm leaving everyhing I tried commented out. 

// $("#stuffs").text(counter);




  //   counter += itemdata;
  // var items = ($(this).attr("itemdata"));
  // itemdata = parseInt(itemdata);

// $("counter").text(targetNumb);

// $(".imgstuffs").on("click", function() {
//   var bottleValue = ($(this).attr(""));
//   bottleValue = parseInt(bottleValue);
//   counter += bottleValue;

// for (var i = 0; i < numberOptions.length; i++) {
//   var ImgofIngreats = $("<img>"); 
//   ImgofIngreats.addClass("Potion");
//   ImgofIngreats.attr("");
//   ImgofIngreats.attr("drink-vaule", numberOptions[i]);
//   $("#Potions").append(bottle);
// }

  //  var ingreatinsForPotions = [
//   {
//     id: '1',
//     name: 'drink',
//    vaule: "10",
//     image: "drink.png" ,
//   },
//   {
//     id: '2',
//     name: 'eyeball',
//    vaule: "5",
//     image: "eyeball.png" ,
//   },
//   {
//     id: '3',
//     name: 'poison',
//    vaule: "3",
//     image: "poison.png" ,
//   },
//   {
//     id: '4',
//     name: 'potion',
//    vaule: "7",
//     image: "potion.png" ,
//   },
// ]