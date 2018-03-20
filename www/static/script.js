var W = new Array('So','Mo','Di','Mi','Do','Fr','Sa','So'),H=new Date(),
E = new Array("Januar","Februar","März","April","Mai","Juni",
"Juli","August","September","Oktober","November","Dezember");

var date= (W[H.getDay()]+". "+H.getDate()+". "+E[H.getMonth()]+" "+H.getFullYear());


$(document).ready(function(){
    $(".date").html(date);
});