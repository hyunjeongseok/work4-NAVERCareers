
$(function(){


    /**
     * @헤더gnb마우스오버
     * mouseenter -> 마우스가 어떤 요소 안으로 들어오는 순간 작동
     * mouseleaver -> 마우스가 어떤 요소가 밖으로 이동하는 순간 작동
     * .change -> 해당 셀렉값이 변할경우 변화 캐치하는 이벤트
     */
    $('.gnb-item').mouseenter(function(){
        const child = $(this).children('ul');
        if(child.length){
            $(this).children('ul').addClass('on');
            $('.header').addClass('on');
        }
    });
    $('.gnb-item').mouseleave(function(){
        $('.sub-list,.header').removeClass('on');
    });

    $('.sc-search select').change(function(){
        $(this).css('color','#000');
    })

    
    $('.btn-menu').click(function (e) { 
        e.preventDefault();

        $(this).toggleClass('on');
        $('.side-nav').toggleClass('on');
        
    });



    /**
     * @사이드메뉴열닫
     * $(this).children() -> 상위요소의 자식
     */
    $('.side-item').click(function (e) { 
        e.preventDefault();
        const child = $(this).children('ul');
        if(child.length){
            $(this).toggleClass('on');
            $('.side-item .sub-list').toggleClass('on');
        }
    });


    
    let intro = new Swiper(".intro", {
        loop:true,
        speed: 1000,
        autoplay:{
            delay: 5000
        },
    });


    /**
     * @searchJobs선택
     * .btn-job 검색창 클릭해서 직군/직무,고용,경력 선택하기
     */
    $('.btn-job').click(function (e) { 
        e.preventDefault();
        $(this).addClass('on');
        $('.pop-search').addClass('on');
    });
    $('.pop-search .btn-close').click(function (e) { 
        e.preventDefault();
        $('.pop-search').removeClass('on');
    });


    /**
     *@체크박스선택및해제
     *.prop('checked',true/false) -> '체크'되어라/되지마라
     *.is(':checked') -> 어떠한요소를 체크해라
     */
    $('#techall').click(function(){
        let checked = $('#techall').is(':checked');

        if (checked) {
            $('.tech').prop('checked',true);
        } else{
            $('.tech').prop('checked',false);
        }
    })
    $('#designall').click(function(){
        let checked = $('#designall').is(':checked');

        if (checked) {
            $('.design').prop('checked',true);
        } else{
            $('.design').prop('checked',false);
        }
    })
    $('#serviceall').click(function(){
        let checked = $('#serviceall').is(':checked');

        if (checked) {
            $('.service').prop('checked',true);
        } else{
            $('.service').prop('checked',false);
        }
    })
    $('#corporall').click(function(){
        let checked = $('#corporall').is(':checked');

        if (checked) {
            $('.corpor').prop('checked',true);
        } else{
            $('.corpor').prop('checked',false);
        }
    })

    // mo - search Jobs 체크박스(clear filters)
    /**
     * @clearFilters
     * 체크박스 전체 해제
     * .prop('.checked',false)
     */
    $('.btn-clear').click(function(){
       
        $('.filter-box input:checkbox').prop('checked',false)
        
    })


    /**
     * @체크필터박스열고닫기
     * hasClass()
     * siblings()
     */
    //부모요소 열,닫
    $('.filter-box .btn-item').click(function(){

        if ($(this).hasClass('on')) {
            $(this).siblings('.sub-list').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).siblings('.sub-list').addClass('on');
        }

    })
    //자식요소 열,닫
    $('.filter-box .btn-sub').click(function(){

        if ($(this).hasClass('on')) {
            $(this).siblings('.item-list').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).siblings('.item-list').addClass('on');
        }

    })



    /**
     * @반응형swiper효과
     * swiper-breakpoints -> 반응형에 따라 Swiper효과를 다르게 주고 싶을 때 사용
     * breakpoints는 초기값을 모바일로 두고, 차츰 사이즈를  늘려가면 조절해야함.
     * breakpoints안에 기입하는 숫자는 슬라이드 크기이고, 안에 적힌 값들은 브라우저가 해당 크기보다 클 떄 적용된다.
     */
    let people = new Swiper(".people", {
        slidesPerView:1,
        spaceBetween:30,

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        breakpoints:{
            768: {
                slidesPerView: 1.2,
            },
        }

    });

    let benefits = new Swiper(".benefits", {
        slidesPerView:1,
        spaceBetween:30,

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        breakpoints:{
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3,
            },
        }
    });



    /**
     * @footer사이트맵열고닫기
     * toggleClass()
     */
    $('.site-wrap').click(function(){
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $('.site-list').stop().show();
        } else {
            $('.site-list').stop().hide();
        }
    })

    
});