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
  
    // $(".w_w_head>a").click(function(e){
    //     $(".w_w_head>a").removeClass('on')
    //     $(this).addClass("on")
    //     e.preventDefault()

    // })

    $(".week_webtoon .w_w_head>a").click(function(e){
        $(".week_webtoon .w_w_head>a").removeClass('on')
        $(this).addClass("on")
        e.preventDefault()
    })
    $(".most_webtoon .w_w_head>a").click(function(e){
        $(".most_webtoon .w_w_head>a").removeClass('on')
        $(this).addClass("on")
        e.preventDefault()
    })
    $(".week_novel .w_w_head>a").click(function(e){
        $(".week_novel .w_w_head>a").removeClass('on')
        $(this).addClass("on")
        e.preventDefault()
    })



    $( ".m_news_type>li>span" ).click(function(){

        $( ".m_news_type>li>a").removeClass('on')
        $(this).addClass('on')
 
    })






    $(".week_webtoon .w_w_head_list>li").click(function(e) {
        let w_t = $(this).index();
        e.preventDefault()

        $(".week_webtoon .w_w_head_list>li").removeClass("on");
        $(this).addClass("on");

        $(".week_webtoon .weeks_n_e>li").each(function(i) {
            if (i === w_t) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    });
    
    $(".most_webtoon .w_w_head_list>li").click(function(e) {
        let w_t = $(this).index();
        e.preventDefault()

        $(".most_webtoon .w_w_head_list>li").removeClass("on");
        $(this).addClass("on");

        $(".most_webtoon .weeks_n_e>li").each(function(i) {
            if (i === w_t) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    });

    $(".week_novel .w_w_head_list>li").click(function(e) {
        let w_t = $(this).index();
        e.preventDefault()

        $(".week_novel .w_w_head_list>li").removeClass("on");
        $(this).addClass("on");

        $(".week_novel .weeks_n_e>li").each(function(i) {
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
    $(".recipe_theme .prev").hide(); 
});

$(".recipe_theme .next").click(function(){
    
    count++
    if(count>4){count=0}
    $(".r_t_list").css("transform",`translateX(${(-20*count)}%)`)
    if(count==4){
        $(".recipe_theme .next").hide()
     }else {
     $(".recipe_theme .next").show()
    }
    if (count === 0) {
        $(".recipe_theme .prev").hide();
    } else {
        $(".recipe_theme .prev").show();
    }
})
$(".recipe_theme .prev").click(function(){
    count--
    if(count<0){count=4}
    $(".r_t_list").css("transform",`translateX(${(-20*count)}%)`)
    if(count==0){
        $(".recipe_theme .prev").hide()
     }else{
     $(".recipe_theme .prev").show()
    }
    if(count==4){
        $(".recipe_theme .next").hide()
     }else {
     $(".recipe_theme .next").show()
    }
    
})
$(document).ready(function() {
    $(".recipe_theme .prev").hide(); 
});

$(".main_news .m_news_arrow .next_b").click(function(){
    count++
    if(count>3){count=0}
    // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
    // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
    $(".m_news_wrap>li").removeClass("on")
    $(".m_news_wrap>li").eq(count).addClass("on")
})
$(".main_news .m_news_arrow .prev_b").click(function(){
    count--
    if(count<0){count=3}
    $(".m_news_wrap>li").removeClass("on")
    $(".m_news_wrap>li").eq(count).addClass("on")
})
$(".main_news .m_news_arrow .next_b").click(function(){
    $(".main_news .m_news_arrow .page_c").html(count+1)
})
$(".main_news .m_news_arrow .prev_b").click(function(){
    $(".main_news .m_news_arrow .page_c").html(count+1)
})














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

    $(".best_sub_content .more_view").click(function(){
        $('.all_list.more').addClass("active")
    })

    $(".main_etc>.content>li>a").click(function(){
        $('.all_list.more').removeClass("active")
    })
    $(".car .more_view").click(function(){
        $('.review_wrap.more').addClass("active")
    })

    $(".main_etc>.content>li>a").click(function(){
        $('.review_wrap.more').removeClass("active")
    })

    $(".b_s_c_category>li").click(function(){
        $(".b_s_c_category>li").removeClass('active')
        $(this).addClass("active")

    })

})