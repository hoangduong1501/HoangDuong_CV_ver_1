$(document).ready(function(){
    // var width = $(window).width();
    // console.log(width);
    // if (width < 540){
    //     // $('.left, .right').addClass('responsive_768');
    //     alert('nho hon 540');
    // }
    // else{
    //     // $('.left, .right').removeClass('responsive_768');
    //     alert('lon hon hoac bang 540');
    // }
    $.ajax({url: "https://hoangduong1501.github.io/HoangDuong_CV_ver_1/Infor_Tab.html", 
        success: function(result){
            $("#div1").html(result);
        }
    });
});

// $(window).resize(function(){ 
//     var width = $(window).width();
//     console.log(width);
//     if (width < 540){
//         // $('.left, .right').addClass('responsive_768');
//         alert('nho hon 540');
//     }
//     else{
//         // $('.left, .right').removeClass('responsive_768');
//         alert('lon hon hoac bang 540');
//     }
// });