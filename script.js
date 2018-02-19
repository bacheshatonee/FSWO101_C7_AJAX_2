var updateNum = 1;

$(document).ready(function(){

  $("#update").click(function(){
    if (updateNum == 1) {
      $("#change").load("update.txt");
      $("#title").load("update.txt");
      updateNum = 0;
    }else {
      $("#change").load("re-update.txt");
      updateNum = 1;
    }});

  $("#update").mouseenter(function(){
          $("#footer").load("footer.txt");
      });

  $("#update").mouseleave(function(){
          $("#footer").load("footer0.txt");
      });
});
