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

    $(".content>li").click(function() {
        // 선택된 요소에 대한 인덱스를 가져옵니다.
        let etc_li = $(this).index();
        
        // 첫 번째 ul의 li에 on 클래스를 설정합니다.
        $(".content>li").removeClass("on");
        $(this).addClass("on");

        // 두 번째 ul의 li에 클래스를 설정하거나 제거합니다.
        $(".content_list>li").each(function(i) {
            if (i === etc_li) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    });






    $(".b_s_c_category>li").click(function(){
        $(".b_s_c_category>li").removeClass('active')
        $(this).addClass("active")

    })

})