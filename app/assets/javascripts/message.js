$(function(){
  $('#new_message').on('submit', function(e){
       console.log("this");
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).after('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    console.log(this);
    var formData = new FormData(this);
  })
});
