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
$(".e_s .next").click(function(){
    count++
    if(count>3){count=0}
    // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
    // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
    $(".e_s_list").css("transform",`translateX(${(-25*count)}%)`)
   
})
$(".e_s .prev").click(function(){
    count--
    if(count<0){count=3}
    $(".e_s_list").css("transform",`translateX(${(-25*count)}%)`)

})


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