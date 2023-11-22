$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
        alert("was preventDefault called:" +event.isDefaultPrevented());
    })
})