$("document").ready(function(){


//Takto zapisovat, pokud něco přidam do dokumentu a chci s tím nadale pracovat
    $(document).on("click","li", function(){
    $(this).toggleClass("cross")

    
    });



$("#Btn1").click(function(){

    let ValueText = document.getElementById("Insert").value;
    $(".Lists").append("<li class=polozka>"+ ValueText + "</li>");
});


});