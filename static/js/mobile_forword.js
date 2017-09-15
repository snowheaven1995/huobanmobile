/**
 * Created by yeshuaikai on 2017/9/8.
 */
$(function () {
    console.log('address is',window.location.href);
    var add  = window.location.href;
    console.log(typeof(add));
    var address = add.split('//')[1].split('/')[1];
    console.log(address);
    if(address ==''){
        $('#to_index').find('span').addClass('active');
    }
    if(address =='mobile_partner'){
        $('#to_partner').find('span').addClass('active');
    }
    if(address =='mobile_cloud'){
        $('#to_cloud').find('span').addClass('active');
    }
    if(address =='mobile_introduction'){
        $('#to_introduction').find('span').addClass('active');
    }
    if(address =='mobile_history'){
        $('#to_history').find('span').addClass('active');
    }
    if(address =='mobile_honer'){
        $('#to_honer').find('span').addClass('active');
    }

    $('.nav_btn').click(function () {
        $('.bgDiv').css({
            visibility: "visible",
            opacity: '1',
            transition: "all .5s"
        });
        $('.rightNav').css({
            left: "0px",
            transition: "left .2s"
        });


    });
    $('.act').click(function () {
        $('.rightNav').css({
            left: "-100%",
            transition: "left .5s"
        });
         $('.bgDiv').css({
            visibility: "hidden",
            opacity: '0',
            transition: "all .9s"
        });

    });
    $('#to_index').find('span').click(function () {
        $(this).addClass('active');
        setTimeout(toIndex,500)
    });
    $('#to_partner').find('span').click(function () {
         $(this).addClass('active');
        setTimeout(toPartner,500)
    });
    $('#to_cloud').find('span').click(function () {
        $(this).addClass('active');
         setTimeout(toCloud,500)
    });
    $('#to_introduction').find('span').click(function () {
       $(this).addClass('active');
       setTimeout(toIntroduction,500)
    });
    $('#to_honer').find('span').click(function () {
        $(this).addClass('active');
        setTimeout(toHoner,500)
    });

    $('#to_reg').find('span').click(function () {
       $(this).addClass('active');
        setTimeout(toReg,500)
    });
    $('#to_history').find('span').click(function () {
         $(this).addClass('active');
         setTimeout(toHistory,500)
    });
    function toHoner(){
           window.location.href='mobile_honer'
    }
    function toIndex(){
           window.location.href='/'
    }
    function toPartner(){
           window.location.href='mobile_partner'
    }
    function toIntroduction(){
           window.location.href='mobile_introduction'
    }
    function toReg(){
           window.location.href='mobile_reg'
    }
    function toCloud(){
           window.location.href='mobile_cloud'
    }
    function toHistory(){
           window.location.href='mobile_history'
    }
    $('.user').click(function () {
        window.location.href='mobile_login'
    });
    
    
    
});
