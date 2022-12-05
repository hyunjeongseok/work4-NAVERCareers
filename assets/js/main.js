
$(function(){


    // header gnb
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

    // $('inpuxt').prop('checked',true);

    // 

    $('.btn-menu').click(function (e) { 
        e.preventDefault();

        $(this).toggleClass('on');
        $('.side-nav').toggleClass('on');
        
    });



    // 사이드메뉴 
    $('.side-item').click(function (e) { 
        e.preventDefault();
        const child = $(this).children('ul');
        if(child.length){
            $(this).toggleClass('on');
            $('.side-item .sub-list').toggleClass('on');
        }
    });


    // 인트로 영상
    let intro = new Swiper(".intro", {
        loop:true,
        speed: 1000,
        autoplay:{
            delay: 5000
        },
    });



    // mo - search Jobs
    $('.btn-job').click(function (e) { 
        e.preventDefault();
        $(this).addClass('on');
        $('.pop-search').addClass('on');
    });
    $('.pop-search .btn-close').click(function (e) { 
        e.preventDefault();
        $('.pop-search').removeClass('on');
    });

    // mo - search Jobs 체크박스(전체)
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
    $('.btn-clear').click(function(){
       
        $('.filter-box input:checkbox').prop('checked',false)
        
    })


    // mo - search Jobs 메뉴 열기/닫기

    // 부모요소 열기/닫기
    $('.filter-box .btn-item').click(function(){

        if ($(this).hasClass('on')) {
            $(this).siblings('.sub-list').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).siblings('.sub-list').addClass('on');
        }

    })
    // 자식요소 열기/닫기
    $('.filter-box .btn-sub').click(function(){

        if ($(this).hasClass('on')) {
            $(this).siblings('.item-list').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).siblings('.item-list').addClass('on');
        }

    })





    // People
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


    
    // Benefits
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



    //footer 관련사이트
    $('.site-wrap').click(function(){
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $('.site-list').stop().show();
        } else {
            $('.site-list').stop().hide();
        }
    })

    
});