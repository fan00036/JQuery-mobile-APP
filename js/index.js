
$(document).on("mobileinit", function(){
  //settings and stuff
});

$(document).on("ready", function(ev){
	localStorage["currentstep"]="#dlg_1";
 $(".start").on("click", function(ev){
	 
	
	 
	 
    //add listeners to the objects with class="test"
    ev.preventDefault();
    //stop normal navigation
    
 
    $.mobile.pageContainer.pagecontainer("change", localStorage["currentstep"], {anything: "Hello World"});
    /*************************
    Inside $ / jQuery there is an object called mobile.
    Inside mobile there is an object called pageContainer which
    is wrapped around all the data-role="page" elements.
    pageContainer has a method called pagecontainer which will,
    amoung other things, allow us to load a page.
    **************************/
  });
	
  //page is ready to do stuff like have event listeners on buttons
  $(".next").click(function(ev) {
       ev.preventDefault();

	  localStorage["currentstep"]=$(this).attr("href");
        $.mobile.pageContainer.pagecontainer("change", $(this).attr("href"), {changeHash:false, role:"page"});
    });
  
  $(".prev").click( function(ev) {
        ev.preventDefault();
localStorage["currentstep"]=$(this).attr("href");
        $.mobile.pageContainer.pagecontainer("change", $(this).attr("href"), {changeHash:false, role:"page"});
    });
  
  
  
});















