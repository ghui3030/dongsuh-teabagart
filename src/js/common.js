var canvas = new fabric.Canvas('canvas')

var slick1 = $('.slick_slide.slide_type1').slick({ arrows: false, dots: true })
var slick2 = $('.slick_slide.slide_type2').slick({ arrows: true, dots: false })
var slick3 = $('.slick_slide.slide_type3').slick({ arrows: false, dots: true, adaptiveHeight: true })

$('.about_slide2 .slick_slide.slide_type1').on('afterChange', function() {
    if ($('.about_slide2 .slick_slide.slide_type1').slick('slickCurrentSlide') === 3) {
        $('.about_slide2_wrap .title2_1').addClass('hidden')
        $('.about_slide2_wrap .title2_2').removeClass('hidden')
        $('.about_slide2_wrap .title2_3').addClass('hidden')
        $('.about_slide2_wrap .title2_sub').removeClass('hidden2')
    } else if ($('.about_slide2 .slick_slide.slide_type1').slick('slickCurrentSlide') === 4) {
        $('.about_slide2_wrap .title2_1').addClass('hidden')
        $('.about_slide2_wrap .title2_2').addClass('hidden')
        $('.about_slide2_wrap .title2_3').removeClass('hidden')
        $('.about_slide2_wrap .title2_sub').addClass('hidden2')
    } else {
        $('.about_slide2_wrap .title2_1').removeClass('hidden')
        $('.about_slide2_wrap .title2_2').addClass('hidden')
        $('.about_slide2_wrap .title2_3').addClass('hidden')
        $('.about_slide2_wrap .title2_sub').addClass('hidden2')
    }
})

$('.about_slide3 .slick_slide.slide_type1').on('afterChange', function() {
    if ($('.about_slide3 .slick_slide.slide_type1').slick('slickCurrentSlide') === 2) {
        $('.about_slide3_wrap .title3_sub').addClass('hidden2')
    } else {
        $('.about_slide3_wrap .title3_sub').removeClass('hidden2')
    }
})


// youtube API 불러옴
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 플레이어변수 설정
var youTubePlayer1;

function onYouTubeIframeAPIReady() {
    youTubePlayer1 = new YT.Player('youTubePlayer1', {
        width: '1280',
        height: '720',
        videoId: 'lMVAjLN6YYA',
        playerVars: {rel: 0},//추천영상 안보여주게 설정
        events: {
            'onReady': onPlayerReady, //로딩할때 이벤트 실행
            'onStateChange': onPlayerStateChange //플레이어 상태 변화시 이벤트실행
        }
    });//youTubePlayer1셋팅
}

function onPlayerReady(event) {
    event.target.playVideo();//자동재생
    //로딩할때 실행될 동작을 작성한다.
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
    //플레이어가 재생중일때 작성한 동작이 실행된다.
    }
}
$(document).ready(function () {
    $(".movie_thum").on("click", function () {
        $(this).hide();
        youTubePlayer1.playVideo();//재생
    });
});

function fabricLogic() {
    canvas.clear()
    canvas.on('object:moving', function (e) {
        var obj = e.target
        if (obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width) {
            return
        }
        obj.setCoords();
        if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
            obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top)
            obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left)
        }
        if (obj.getBoundingRect().top+obj.getBoundingRect().height  > obj.canvas.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > obj.canvas.width) {
            obj.top = Math.min(obj.top, obj.canvas.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top)
            obj.left = Math.min(obj.left, obj.canvas.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left)
        }
    });
    canvas.on('mouse:down', function (e) {
        var obj = e.target
        canvas.bringToFront(obj)
    });
    var defaultImage = 'src/img/fabric_cup' + Math.floor((Math.random() * 5) + 1) + '.png'
    fabric.Image.fromURL(defaultImage, function(myImg) {
        var img1 = myImg.set({ left: 0, top: 0 })
        canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas))
    })
}

function fabricImageAdd(type, number) {
    var image = 'src/img/fabric_' + type + number + '.png'
    var imageName = 'fabric_' + type + number
    var canvasObject = canvas._objects
    if (type === 'cup') {
        fabric.Image.fromURL(image, function(myImg) {
            var img1 = myImg.set({ left: 0, top: 0 })
            canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas))
        })
    } else if (type === 'needed') {
        if (number === '1') {
            for (i=0; i<canvasObject.length; i++) {
                if (canvasObject[i].name === 'fabric_needed1') {
                    canvas.remove(canvasObject[i])
                }
            }
        }
        else if (number === '2' || number === '3') {
            for (i=0; i<canvasObject.length; i++) {
                if (canvasObject[i].name === 'fabric_needed2' || canvasObject[i].name === 'fabric_needed3') {
                    canvas.remove(canvasObject[i])
                }
            }
        } else if (number === '4' || number === '5' || number === '6') {
            for (i=0; i<canvasObject.length; i++) {
                if (canvasObject[i].name === 'fabric_needed4' || canvasObject[i].name === 'fabric_needed5' || canvasObject[i].name === 'fabric_needed6') {
                    canvas.remove(canvasObject[i])
                }
            }
        } else if (number === '7' || number === '8' || number === '9') {
            for (i=0; i<canvasObject.length; i++) {
                if (canvasObject[i].name === 'fabric_needed7' || canvasObject[i].name === 'fabric_needed8' || canvasObject[i].name === 'fabric_needed9') {
                    canvas.remove(canvasObject[i])
                }
            }
        }
        fabric.Image.fromURL(image, function(myImg) {
            var randomX = Math.random() * 300
            var randomY = Math.random() * 300
            var img1 = myImg.set({ left: randomX, top: randomY, lockScalingX: true, lockScalingY: true, name: imageName })
            canvas.add(img1)
        })
    } else {
        for (i=0; i<canvasObject.length; i++) {
            if (canvasObject[i].name === imageName) {
                canvas.remove(canvasObject[i])
                return true
            }
        }
        fabric.Image.fromURL(image, function(myImg) {
            var randomX = Math.random() * 300
            var randomY = Math.random() * 300
            var img1 = myImg.set({ left: randomX, top: randomY, lockScalingX: true, lockScalingY: true, name: imageName })
            canvas.add(img1)
        })
    }
}

function fabricImageRemove() {
    var canvasObject = canvas._objects
    if (canvasObject.length > 0) {
        canvas.remove(canvasObject[canvasObject.length - 1])
    }
}

function fabricPageCheck(current, next) {
    var canvasObject = canvas._objects
    var canvasCheck = [0, 0, 0, 0];
    for (i=0; i<canvasObject.length; i++) {
        if (canvasObject[i].name === 'fabric_needed1') {
            canvasCheck[0] = 1;
        } else if (canvasObject[i].name === 'fabric_needed2' || canvasObject[i].name === 'fabric_needed3') {
            canvasCheck[1] = 1;
        } else if (canvasObject[i].name === 'fabric_needed4' || canvasObject[i].name === 'fabric_needed5' || canvasObject[i].name === 'fabric_needed6') {
            canvasCheck[2] = 1;
        } else if (canvasObject[i].name === 'fabric_needed7' || canvasObject[i].name === 'fabric_needed8' || canvasObject[i].name === 'fabric_needed9') {
            canvasCheck[3] = 1;
        }
    }
    if (canvasCheck.indexOf(0) !== -1) {
        var nameList = ['동서캐모마일현미녹차 제품', '녹차', '캐모마일', '현미']
        var alertList = []
        var alertPost = ''
        for (i=0; i<canvasCheck.length; i++) {
            if (canvasCheck[i] === 0) {
                alertList.push(nameList[i])
                if (i === 0 || i === 2) {
                    alertPost = '을'
                } else {
                    alertPost = '를'
                }
            }
        }
        alert(alertList.join(', ') + alertPost + ' 선택해 주세요!')
    } else {
        fabricImageSave()
        tapClose()
        $(current).addClass('hidden')
        $(next).removeClass('hidden')
        window.scrollTo(0,0)
    }
}

function fabricImageSave() {
    var dataURL = canvas.toDataURL({
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0,
        format: 'png',
   });
   document.querySelector('.fabric_save').src = dataURL
   document.querySelector('.fabric_save_iphone').src = dataURL
   document.querySelector('.image_download').setAttribute('imgattr', dataURL)
}

function fabricImageDownload() {
    var a = document.createElement('a')
    a.href = document.querySelector('.image_download').getAttribute('imgattr')
    a.download = 'image.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function pageMove(current, next) {
    if (next === '.page1') {
        fabricLogic()
        tapClose()
    }
    $(current).addClass('hidden')
    $(next).removeClass('hidden')
    window.scrollTo(0,0)
}

function pageCheck(current, next) {
    var pageForms = []
    pageForms.push($(current + ' .user_name input'))
    pageForms.push($(current + ' .user_phone input'))
    pageForms.push($(current + ' .user_agree input'))
    var regexPhone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/
    if (pageForms[0].val() === '') {
        alert('정보를 입력해주세요!')
        pageForms[0].focus()
        pageForms[0].scroll()
        return false
    } else if (pageForms[1].val() === '') {
        alert('정보를 입력해주세요!')
        pageForms[1].focus()
        pageForms[1].scroll()
        return false
    } else if (!regexPhone.test(pageForms[1].val())) {
        alert('연락처를 확인해주세요.')
        pageForms[1].focus()
        pageForms[1].scroll()
        return false
    } else if (pageForms[2].prop('checked') === false) {
        alert('개인 정보 취급/이용 약관에 동의해주세요.')
        pageForms[2].focus()
        pageForms[2].scroll()
        return false
    } else {
        alert('참여가 완료 되었습니다.')
        $(current).addClass('hidden')
        $(next).removeClass('hidden')
        window.scrollTo(0,0)
    }
}

function modalOpen(modal) {
    $('body').addClass('modal_active')
    $('#modal').addClass('active')
    $(modal).removeClass('hidden')
}

function modalClose() {
    $('body').removeClass('modal_active')
    $('#modal').removeClass('active')
    $('.modal_content').addClass('hidden')
}

function modalNext(current, modal) {
    $(current).addClass('hidden')
    $(modal).removeClass('hidden')
}

function modalCheck(modal) {
    var modalForms = []
    modalForms.push($(modal + ' .user_name input'))
    modalForms.push($(modal + ' .user_phone input'))
    modalForms.push($(modal + ' .user_agree input'))
    var regexPhone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/
    if (modalForms[0].val() === '') {
        alert('정보를 입력해주세요!')
        modalForms[0].focus()
        modalForms[0].scroll()
        return false
    } else if (modalForms[1].val() === '') {
        alert('정보를 입력해주세요!')
        modalForms[1].focus()
        modalForms[1].scroll()
        return false
    } else if (!regexPhone.test(modalForms[1].val())) {
        alert('연락처를 확인해주세요.')
        modalForms[1].focus()
        modalForms[1].scroll()
        return false
    } else if (modalForms[2].prop('checked') === false) {
        alert('개인 정보 취급/이용 약관에 동의해주세요.')
        modalForms[2].focus()
        modalForms[2].scroll()
        return false
    } else {
        alert('참여가 완료 되었습니다.')
        $('body').removeClass('modal_active')
        $('#modal').removeClass('active')
        $('.modal_content').addClass('hidden')
    }
}

function tapOpen(button, tap) {
    $('.tap_open').removeClass('on')
    $(button).addClass('on')
    $('.slide_content').addClass('hidden')
    if (tap === '.fabric_cup_slide') {
        $('.objet_remove').addClass('visible_hidden')
    } else {
        $('.objet_remove').removeClass('visible_hidden')
    }
    if (tap === '.fabric_needed_slide') {
        $('.objet_tap_text').removeClass('visible_hidden')
    } else {
        $('.objet_tap_text').addClass('visible_hidden')
    }
    $(tap).removeClass('hidden')
    slick2.slick('refresh')
}

function tapClose() {
    $('.tap_open').removeClass('on')
    $('.tap_open1').addClass('on')
    $('.slide_content').addClass('hidden')
    $('.objet_remove').addClass('visible_hidden')
    $('.objet_tap_text').addClass('visible_hidden')
    $('.fabric_cup_slide').removeClass('hidden')
    slick2.slick('slickGoTo', 0)
}

function hashtagCopy1() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = '#동서캐모마일현미녹차 #캐모마일 #현미녹차 #미니정원';
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function hashtagCopy2() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = '#동서캐모마일현미녹차 #미니정원이벤트';
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function fixedNav() {
    if ($(document).scrollTop() > $('nav').height()) {
        $('header').addClass('fixed')
    } else {
        $('header').removeClass('fixed')
    }
}

$(window).scroll(function() { fixedNav() })
$('.modal_open1').click(function() { modalOpen('.modal_event1_1') })
$('.page_move1').click(function() { pageMove('.page0', '.page1') })
$('.hash_copy1').click(function() { hashtagCopy1() })
$('.hash_copy2').click(function() { hashtagCopy2() })
$('.tap_open1').click(function() { tapOpen('.tap_open1', '.fabric_cup_slide') })
$('.tap_open2').click(function() { tapOpen('.tap_open2', '.fabric_needed_slide') })
$('.tap_open3').click(function() { tapOpen('.tap_open3', '.fabric_selective_slide') })
$('.page_reload1').click(function() { fabricLogic() })
$('.objet_remove').click(function() { fabricImageRemove() })
$('.page_move2').click(function(result) { fabricPageCheck('.page1', '.page2') })
$('.page_move3').click(function() { pageMove('.page2', '.page1') })
$('.page_move4').click(function() { pageMove('.page2', '.page3') })
$('.image_download').click(function() { fabricImageDownload() })
$('.page_move5').click(function() { pageCheck('.page3', '.page4') })
$('.page_move6').click(function() { pageMove('.page4', '.page0') })
$('.modal_next1').click(function() { modalNext('.modal_event1_1', '.modal_event1_2') })
$('.modal_close').click(function() { modalClose() })
$('.modal_check1').click(function() { modalCheck('.modal_event1_2') })
$('.modal_next2').click(function() { modalNext('.modal_event2_1', '.modal_event2_2') })
$('.modal_check2').click(function() { modalCheck('.modal_event2_2') })
$('.result_button1').click(function() { modalOpen('.modal_result1'); slick3.slick('refresh'); })
$('.result_button2').click(function() { modalOpen('.modal_result2'); slick3.slick('refresh'); })
$('.result_button3').click(function() { modalOpen('.modal_result3'); slick3.slick('refresh'); })