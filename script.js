// Guided Practice
$(".reply-yes").click(function() {  
    $(".homers-reply").text("Woo Hoo!");
    $(".reply-yes").css("background-color", "yellow");
    $("body").css('background-image', 'url("https://img.freepik.com/free-photo/top-view-delicious-donuts-arrangement_23-2150705329.jpg")');
});

//Independent Practice
$(".reply-no").click(function() {
    $(".homers-reply").text("Doh!").css("background-color", "orange");
    $(".reply-no").css("background-color", "red");
    $("h1").css("color", "Red");
    $("img").css("width", "400px");
    $("img").attr("src","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e929d949-9bb4-4870-a1b4-095faeabffad/dbhm5pu-e492e302-0f6b-4240-b93a-510f602a09d3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U5MjlkOTQ5LTliYjQtNDg3MC1hMWI0LTA5NWZhZWFiZmZhZFwvZGJobTVwdS1lNDkyZTMwMi0wZjZiLTQyNDAtYjkzYS01MTBmNjAyYTA5ZDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9k-i5HPWQrDPSx_GlwJ4o7Fdrq0qEj0HGJlJqH1K1ws");
});
   
