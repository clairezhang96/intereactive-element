$( function() {
    $( ".box-1 h2" ).draggable();
} );

$( function() {
    $( ".box-1 p" ).draggable();
} );

/*$("p").dblclick(function(){
    $(this).hide();
}); */

$("p").mouseleave(function(){
    $(this).hide();
});


$(document).ready(function(){
    $(".box-2").on({
        mouseenter: function(){
            $(this).css("background-color", "red");
        },  
        mouseleave: function(){
            $(this).css("background-color", "blue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });
});

$(document).ready(function(){
    $(".but-1").on("click", function(){
        $(".box-2").hide();
    });
});



  $( function() {
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
  } );
