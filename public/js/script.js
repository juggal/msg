$(document).ready(function(){
  $(".send").click(function(){
    console.log("clicked");
    $.ajax({
        method: "POST",
        url: "/send",
        data: {msg: $(".message").val()},
        dataType: "JSON",
        // processData: false,
        success:function(data){
          console.log(data);
          if(data.state) {
            $('#results').html(data.message);
          }
          else {
            alert("Please clarify the message");
          }
      },
    });
    return false;
  });
});
