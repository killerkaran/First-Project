//Check of specific Todo By Clicking 
// 
$("ul").on("click", "li", function(){// here it will toogle all the classes that are new included into the ul thayt's why we included the on("click" , "li" ,function())
//if li is gray
// if($(this).css("color") === "rgb(128, 128, 128)")
// {   //turn it black
// 	$(this).css({
// 		color:"black",
// 		textDecoration:"none"
// });}
//   else 
//   {   //turn it gray
//   	$(this).css({
// color:"gray",
// textDecoration:"line-through"
// });
//   }
$(this).toggleClass("completed");
});
$("ul").on("click" ,"span", function(event){
   $(this).parent().fadeOut(500,function(){
       $(this).remove();
   });
   event.stopPropagation();
});
$("input[type='text']").keypress(function(event)
{
	if(event.which === 13){
		//grabbing new to do text from input
		var todoText = $(this).val();
		$(this).val(""); // for making blank in the input text field
		       //create a new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        }
    });
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
