/**
 * Created by yeshuaikai on 2017/9/8.
 */
$(function () {
    $('.nav_btn').click(function () {
        // $('.bgDiv').css({
        //     display: "block",
        //     transition: "opacity .5s"
        // });
        $('.rightNav').css({
            right: "0px",
            transition: "right .7s"
        });

    });
    $('.act').click(function () {
        $('.rightNav').css({
            right: "-100%",
            transition: "right .5s"
        })

    });
    
    
    
    
    
    
});
