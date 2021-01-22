
// https://github.com/dipt0O/Basic-Java-Assignment


// Solution To The problem no: 01

  function kilometerToMeter(meter){

      
    if ( meter >= 0){
      var Meter=meter*1000;}
      else if ( meter >'a' || meter <'z' || meter >'A' || meter <'Z' ){
          
        return "Please Input Only Numeric value";

      }
      
      
      else if ( meter < 0 ){
         return "";
      }

      else if ( meter == null ){
          return "Please enter any number ";
       }
      
  
    
     return meter;
    
 }
     var RESULT = kilometerToMeter(10);
     console.log("Result (in meter) : ",RESULT); 

//Problem No:1 solved



// Solution To The problem no:02

  function budgetCalculator( watchQuantity, mobileQuantity, laptopQuantity){
      var watchPrice = 50;
      var mobilePrice = 100;
      var laptopPrice = 500;

     if ( watchQuantity < 0 || mobileQuantity <0 || laptopQuantity < 0 ){
      return " positive number only for input";}
      watch = watchQuantity*watchPrice;
      mobile = mobileQuantity* mobilePrice;
      laptop = laptopQuantity*laptopPrice;

       var budget = watch + mobile + laptop;

   return budget;
   }
      var Result = budgetCalculator(2, 3, 2);
      console.log("Total Budget is :",Result);

//Problem No:02 solved



// Solution To The problem no: 03
  
 function hotelCost( day ){
      var rent = 0;
      if ( day < 0 ){
          return "Please enter positive number only for input";}
      else if (day <= 10){
           rent = day * 100;
      }
      else if (day <=20){
          var firstTenDays = 10 * 100;
          var remaining = day - 10;
          var secondTenDays = remaining * 80;
           rent=  firstTenDays + secondTenDays;
  
      } 
      else if (day =>21){
         var  firstTenDays = 10 * 100;
          var secondTenDays = 10 * 80;
         
          var remaining = day-20;
          var afterTwentydays = remaining * 50;
           rent = firstTenDays + secondTenDays + afterTwentydays;

     }
     
   
      return rent;
  }
        
   var rentCost=hotelCost(29);
   console.log("Total Cost is :", rentCost);

   //var rentCost = hotelCost(2);
   //console.log("Rent Cost(in Total):" , rentCost);




//Problem No:03 Solved



//Sultion To the problem No: 04
 function megaFriend(friendNames){

    var max = friendNames[0];
    for (var i=0 ; i < friendNames.length; i++){
       var elements = friendNames[i];
   if ( elements.length > max.length  ){
         max = elements;

   }
   else if ( friendNames[i] >= 0 ||  friendNames[i] < 0 || friendNames[i] == null ){
      return "Please enter an Input";

  }
  
  
    
}
    return max;
   }
 
    var Result = megaFriend([ "Robindro" , "Kazi Nazrul Islam"  , "Jibonando" ]);
   console.log("The Result is :" ,Result);
  

//Problem No : 04 Solved
