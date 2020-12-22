function fixedNav() {
    if ($(document).scrollTop() > $('nav').height()) {
        $('#header').addClass('fixed')
    } else {
        $('#header').removeClass('fixed')
    }
}

$(document).ready(function() {
    $(window).scroll(function() {
        fixedNav()
    });



    /* last-year swiper*/


    lastYear = new Swiper('.last-year .swiper-container', {
        speed: 500,
        autoplay: {
            delay: 2500
        },
        //                    loop: true,
        slidesPerView: 3,
        navigation: {
            nextEl: '.last-year .swiper-button-next',
            prevEl: '.last-year .swiper-button-prev'
        }
    });

    prize2 = new Swiper('.prize2 .swiper-container', {
        speed: 500,
        autoplay: {
            delay: 2500
        },
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.prize2 .swiper-button-next',
            prevEl: '.prize2 .swiper-button-prev'
        }
    });


    prize3 = new Swiper('.prize3 .swiper-container', {
        speed: 500,
        autoplay: {
            delay: 2500
        },
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.prize3 .swiper-button-next',
            prevEl: '.prize3 .swiper-button-prev'
        }
    });


    /* modal */
    const targetElement = document.querySelector('#modal');


    function modalOpen() {
        $('body').addClass('modal-active');
        $('#modal').addClass('active');
        bodyScrollLock.disableBodyScroll(targetElement);

    }

    function modalClose() {
        $('body').removeClass('modal-active');
        $('#modal').removeClass('active');
        $('.modal-container').addClass('hidden');
        $('.modal-page').addClass('hidden');
        $('#modal input[type="text"]').val('');
        $('#modal input[type="tel"]').val('');
        $('#modal textarea').val('');
        $('#modal input[type="checkbox"]').prop('checked', false);
        bodyScrollLock.enableBodyScroll(targetElement);
    }

    $(".exit").click(function() {
        modalClose();
        $(".modal-1, .modal-2, .modal-3, .modal-4, .modal-5").removeClass("on");

    });




    $(".main-kv .join").click(function() {
        $(".kvmodal .modal-1").addClass("on");

        modalOpen();

    });

    $(".kvmodal .modal-1 .addimg").click(function() {
        alert('반드시 새 티백이 아닌, 다 마신 티백을 재활용해서 참여해 주세요!');

        
        $(".kvmodal .modal-1").removeClass("on");
        $(".kvmodal .modal-2").addClass("on");
    });


    $(".kvmodal .modal-2 .rechoice").click(function() {
        $(".kvmodal .modal-1").addClass("on");
        $(".kvmodal .modal-2").removeClass("on");
    });

    $(".kvmodal .modal-2 .next").click(function() {
        $(".kvmodal .modal-2").removeClass("on");
        $(".kvmodal .modal-3").addClass("on");
    });



    $(".kvmodal .modal-3 .join").click(function() {
        $(".kvmodal .modal-3").removeClass("on");
        $(".kvmodal .modal-4").addClass("on");
    });


    $(".kvmodal .modal-4 .okay").click(function() {
        modalCheck1()
    });

    $(".kvmodal .modal-5 .okay").click(function() {
        $(".kvmodal .modal-5").removeClass("on");
        modalClose()
    });


    //		$(".modal-1 .rechoice").click(function(){
    //		
    //	});



    function hashtagCopy() {
        var dummy = document.createElement("textarea");
        document.querySelector('.copy-tag').appendChild(dummy);
        dummy.value = '#동서티백아트콘테스트';
        dummy.select();
        document.execCommand("copy");
        document.querySelector('.copy-tag').removeChild(dummy);
        alert('해시태그 복사가 완료되었습니다.');
    }
    $(".copy-tag").click(function() {
        hashtagCopy();
    });


    // kv how to do

    $(".main-kv .howtodo").click(function() {
        $(".how-modal .modal-1").addClass("on");
        modalOpen();
    });


    // vote modal

    $(".vote-list li").click(function() {
        modalOpen();
        $(".vote-modal .modal-1").addClass("on");
    });

    $(".vote-modal .modal-1 .vote").click(function() {
        $(".vote-modal .modal-1").removeClass("on");
        $(".vote-modal .modal-2").addClass("on");
    });


    $(".vote-modal .modal-2 .okay").click(function() {
        modalCheck2()
    });


    // 모달창 버튼
    $(".howto .button-winner1").click(function() {
        $(".winner1-modal .modal-1").addClass("on");
        modalOpen();
        winner1.update();
    });

    // 약관


    $('.form-button-1').click(function() {
        if (!$(this).hasClass('active')) {
            $('.form1').addClass('active');
            $('.form-bg1').addClass('active');
            $('.form-button-1').addClass('active');
        } else {
            $('.form1').removeClass('active');
            $('.form-button-1').removeClass('active');
            $('.form-bg1').removeClass('active');

        }
    });


    $('.form-button-2').click(function() {
        if (!$(this).hasClass('active')) {
            $('.form2').addClass('active');
            $('.form-bg2').addClass('active');
            $('.form-button-2').addClass('active');
        } else {
            $('.form2').removeClass('active');
            $('.form-button-2').removeClass('active');
            $('.form-bg2').removeClass('active');

        }
    });



    // 유효성 체크


    function modalCheck1() {
        if ($(".kvmodal .name-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;

        } else if ($(".kvmodal .phone-number-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;

        } else if (!$("#chkbox1").is(":checked")) {
            alert("개인 정보 취급/이용 약관에 동의해주세요");
            return false;


        } else if (!$("#chkbox2").is(":checked")) {
            alert("마케팅 활용 및 작품 제공에 동의해주세요");
            return false;

        } else {
            alert("참여가 완료되었습니다");
            $(".kvmodal .modal-4").removeClass("on");
            $(".kvmodal .modal-5").addClass("on");
        }

    }


    function modalCheck2() {
        if ($(".vote-modal .name-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;
        } else if ($(".vote-modal .phone-number-check").val() == '') {
            alert("정보를 입력해주세요!");
            return false;

        } else if (!$(".vote-modal .checkbox input").is(":checked")) {
            alert("개인 정보 취급/이용 약관에 동의해주세요");
            return false;

        } else {
            alert("참여가 완료되었습니다");
            $(".vote-modal .modal-2").removeClass("on");
            modalClose()
        }

    }

    let winner1 = new Swiper('.winner1-modal .swiper-container', {
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.winner1-modal .swiper-button-next',
            prevEl: '.winner1-modal .swiper-button-prev'
        }
    });





});