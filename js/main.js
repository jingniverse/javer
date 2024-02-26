$(document).ready(function(){

    let da = false
    $(".s_c_icon").click(function(){
        if(da == false){
            $(".menu_group").addClass("open")
            da=true
        }else{
            $(".menu_group").removeClass("open")
            da=false
        }
    })

    $(".m_news_type>li>a").click(function(e){
        e.preventDefault()
    })
    $(".m_shop_type>li>a").click(function(e){
        e.preventDefault()
    })
    $(".main_etc>.content>li>a").click(function(e){
        e.preventDefault()
    })
    $(".b_s_c_category>li>a").click(function(e){
        e.preventDefault()
    })



    $(".m_news_type>li>a").click(function(){
        $(".m_news_type>li>a").removeClass('on')
        $(this).addClass("on")
    })

    $(".news_btn>button").click(function(){
        $(".news_btn>button").removeClass('active')
        $(this).addClass("active")
    })
    
    $(".m_shop_type>li>a").click(function(){
        $(".m_shop_type>li>a").removeClass('on')
        $(this).addClass("on")

    })
    
    $(".main_etc>.content>li>a").click(function(){
        $(".main_etc>.content>li>a").removeClass('on')
        $(this).addClass("on")

    })
    $(".w_w_head>a").click(function(e){
        $(".w_w_head>a").removeClass('on')
        $(this).addClass("on")
        e.preventDefault()

    })
   

    $(".w_w_head_list>li").click(function(e) {
        let w_t = $(this).index();
        e.preventDefault()

        $(".w_w_head_list>li").removeClass("on");
        $(this).addClass("on");

        $(".weeks_n_e>li").each(function(i) {
            if (i === w_t) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    });
    
    $(".content>li").click(function() {
        let etc_li = $(this).index();

        $(".content>li").removeClass("on");
        $(this).addClass("on");

        $(".content_list>li").each(function(i) {
            if (i === etc_li) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    });

    $(".webtoon_ad .ad_close").click(function(){
        $(".webtoon_ad").addClass('on')
    })
$(document).on("click", ".webtoon_ad.on .close", function(){
    $(".webtoon_ad.on").removeClass('on');
});


let count = 0
$(".edition_s .next").click(function(){
    
    count++
    if(count>3){count=0}
    $(".e_s_list").css("transform",`translateX(${(-25*count)}%)`)
    if(count==3){
        $(".edition_s .next").hide()
     }else {
     $(".edition_s .next").show()
    }
    if (count === 0) {
        $(".edition_s .prev").hide();
    } else {
        $(".edition_s .prev").show();
    }
})
$(".edition_s .prev").click(function(){
    count--
    if(count<0){count=3}
    $(".e_s_list").css("transform",`translateX(${(-25*count)}%)`)
    if(count==0){
        $(".edition_s .prev").hide()
     }else{
     $(".edition_s .prev").show()
    }
    if(count==3){
        $(".edition_s .next").hide()
     }else {
     $(".edition_s .next").show()
    }
    
})
$(document).ready(function() {
    $(".edition_s .prev").hide(); 
});

$(".car_content_wrap .next").click(function(){
    
    count++
    if(count>1){count=0}
    $(".car_content").css("transform",`translateX(-69%)`)
    if(count==1){
        $(".car_content_wrap .next").hide()
     }else {
     $(".car_content_wrap .next").show()
    }
    if (count === 0) {
        $(".car_content_wrap .prev").hide();
    } else {
        $(".car_content_wrap .prev").show();
    }
})
$(".car_content_wrap .prev").click(function(){
    count--
    if(count<0){count=1}
    $(".car_content").css("transform",`translateX(0%)`)
    if(count==0){
        $(".car_content_wrap .prev").hide()
     }else{
     $(".car_content_wrap .prev").show()
    }
    if(count==1){
        $(".car_content_wrap .next").hide()
     }else {
     $(".car_content_wrap .next").show()
    }
    
})
$(document).ready(function() {
    $(".car_content_wrap .prev").hide(); 
});

// $(".edition_s .next").click(function(){

// })
// $(".edition_s .prev").click(function(){

// })

    // $(window).scroll(function () {
    //     var sct = $(window).scrollTop();
        
    //     if(sct>20){$('header').addClass('on')}
    //     if(sct<10){$('header').removeClass('on')}
    //     console.log(sct);
    // })



    $(".b_s_c_category>li").click(function(){
        $(".b_s_c_category>li").removeClass('active')
        $(this).addClass("active")

    })

})