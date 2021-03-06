//Check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

//
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //Grabbing new todo text from input
    var toDoText = $(this).val();
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
  }
})

$("#plus").click(function(){
  $("input[type='text']").fadeToggle();
})
