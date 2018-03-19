var show_content = function(destination){
    $.ajax({
        url: 'content/'+destination +'.html', 
        success: function(response) {
            $('.content').html(response);
        }
    })
};


// var W = new Array('So','Mo','Di','Mi','Do','Fr','Sa','So'),H=new Date(),
// E = new Array("Januar","Februar","März","April","Mai","Juni",
// "Juli","August","September","Oktober","November","Dezember");

// //(W[H.getDay()]+"., "+H.getDate()+". "+E[H.getMonth()]+" "+H.getFullYear()



// function somefunction(){
//     var date = "date";
//     $(".date").html(date);
//   }

// somefunction();

$(document).ready(function(){
    show_content('home');
    $('#navi li a').on('click', function(){
        var dest = $(this).data('id');
        show_content(dest); 
    });
    
  



});