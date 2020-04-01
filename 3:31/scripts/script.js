$(document) .ready(function() {
  

  /*---------PAGE TRANSITIONS---------*/

  $('body').removeClass('fade-out');
//Class Based Transition

$('.fadeOut').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');
    $('body').addClass('fade-out');
    setTimeout(function() {
      window.location = link
    },1000);
})

// All internal Link Transition

$('a').each(function(e) {
 
  if ( location.hostname === this.hostname || !this.hostname.length ) {
     var link = $(this).attr('href');
    if(link.match("^#")) {
      //insert scroll function  
        
    } else if (link.match("^mailto") || link.match("^tel")) {
    // continue
      
    } else {
      if($(this).attr('target') == '_blank') {
        //continue
      } else {
        $(this).click(function(e){
         e.preventDefault();
          $('body').addClass('fadeOut');
          setTimeout(function() {
            window.location = link;
          },1000);
       });
      }
    }
  }
})

/*---------1---------*/
  
  $('.arrowdown').click('click touchstart', function(){
  $(".title").animate({
    leading: "12px",
    opacity: 2}, 2000);
  });
 
  $( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
  

$(document) .ready(function() {
  
/*---------1---------*/
  
  $('.arrowdown').click('click touchstart', function(){
  $(".title").animate({
    leading: "12px",
    opacity: 2}, 2000);
  });
 
  $( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
  


















});




  
// $(document).ready(function(){
//     $("#readmore").click(function(){
//         $("#about").slideToggle("show");
//         $(this).text(function(i, v){
//           return v === 'read more' ? 'done' : 'read more'
//       })
//     });
// });

  
  
  
 });
