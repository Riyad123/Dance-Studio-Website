//Function for MenuBar

$(document).ready(function(){
    $(window).scroll(function(event){
        var y = $(this).scrollTop();
        if(y>=120){
            $('.MenuBar').addClass('addingclass');
        }
        else{
            $('.MenuBar').removeClass('addingclass');
        }
    });
});


$(document).ready(function () {
 
  // preloader
  $(window).load(function(){
    $('#loading').css("display","none");
  })
 
})



// Function for SearchBar

function SearchBarShow(){
    $(".Search").toggleClass('hidden');
    $(".Cross").toggleClass('showme');
    $(".SearchBt").show("slide",{direction:"down"},500);
}
function SearchBarHide(){
    $(".Search").toggleClass('hidden');
    $(".Cross").toggleClass('showme');
      $(".SearchBt").hide("slide",{direction:"down"},500);
}


// function for slider
$(document).ready(function(){
//function for slider
var slideInDiv=1;
var slideOutdiv=0;
var countPlus=5;
var countMinus=0;
var slideNo=1;
var theInterval;
function slideThis(){
    slideNo++;
    slideInDiv++;
    slideOutdiv++;
    if(slideNo<countPlus){
         $(".slide"+slideOutdiv).hide("slide",{direction:"left"},1000);
        $(".slide"+slideInDiv).show("slide",{direction:"right"},1000);
    }
   else{
        $(".slide4").hide("slide",{direction:"left"},1000);
       $(".slide1").show("slide",{direction:"right"},1000);
       slideNo=1;
       slideInDiv=1;
       slideOutdiv=0;
   }
};
    function startSlide() {
    theInterval = setInterval(slideThis, 5000);
}
function stopSlide() {
    clearInterval(theInterval);
}
    
    $(function () {
    startSlide();
    $('.sec2').hover(function () {
        stopSlide();
    }, function () {
        startSlide();
    })
});
    
    //function for next button
    
  $(".RightArrow").click(function(){
           slideNo++;
    slideInDiv++;
    slideOutdiv++;
    if(slideNo<countPlus){
         $(".slide"+slideOutdiv).hide("slide",{direction:"left"},1000);
        $(".slide"+slideInDiv).show("slide",{direction:"right"},1000);
    }
   else{
        $(".slide4").hide("slide",{direction:"left"},1000);
       $(".slide1").show("slide",{direction:"right"},1000);
       slideNo=1;
       slideInDiv=1;
       slideOutdiv=0;
   }
  })
    
    
    //function for prev button
    
     $(".LeftArrow").click(function(){
             slideNo--;
    slideInDiv--;
    slideOutdiv--;
    var add=slideOutdiv+2;
    if(slideNo>countMinus){
         $(".slide"+add).hide("slide",{direction:"right"},1000);
        $(".slide"+slideInDiv).show("slide",{direction:"left"},1000);
    }
   else{
        $(".slide1").hide("slide",{direction:"right"},1000);
       $(".slide4").show("slide",{direction:"left"},1000);
       slideNo=4;
       slideInDiv=4;
       slideOutdiv=3;
   }
  })
    
    
    
    
} );
   
//Function for Calendar


$(document).ready(function() {
    $("#SubmitDate").datepicker({
        
        inline: true,
      showOtherMonths: true,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        
        dateFormat: 'dd MM',
    });
    
  });
