//===============================================================
// Hàm debounce
//===============================================================
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


//===============================================================
// Liên quan đến menu
//===============================================================

// Quản lý selector bằng biến
var $menubar = $('#menubar');
var $menubarHdr = $('#menubar_hdr');

// Menu
$(window).on("load resize", debounce(function() {
    if(window.innerWidth <= 900) {	// Đây là điểm chia cắt cho các thiết bị nhỏ
        // Xử lý cho các thiết bị nhỏ
        $('body').addClass('small-screen').removeClass('large-screen');
        $menubar.addClass('display-none').removeClass('display-block');
        $menubarHdr.removeClass('display-none ham').addClass('display-block');
    } else {
        // Xử lý cho các thiết bị lớn
        $('body').addClass('large-screen').removeClass('small-screen');
        $menubar.addClass('display-block').removeClass('display-none');
        $menubarHdr.removeClass('display-block').addClass('display-none');

        // Nếu menu thả xuống đang mở, đóng nó lại
        $('.ddmenu_parent > ul').hide();
    }
}, 10));

$(function() {

    // Xử lý khi nhấn vào menu hamburger
    $menubarHdr.click(function() {
        $(this).toggleClass('ham');
        if ($(this).hasClass('ham')) {
            $menubar.addClass('display-block');
        } else {
            $menubar.removeClass('display-block');
        }
    });

    // Đóng menu khi nhấn vào liên kết anchor
    $menubar.find('a[href*="#"]').click(function() {
        $menubar.removeClass('display-block');
        $menubarHdr.removeClass('ham');
    });

    // Ngăn chặn hành động mặc định cho các liên kết có href rỗng
    $menubar.find('a[href=""]').click(function() {
        return false;
    });

    // Xử lý cho menu thả xuống
    $menubar.find('li:has(ul)').addClass('ddmenu_parent');
    $('.ddmenu_parent > a').addClass('ddmenu');

    // Biến lưu vị trí bắt đầu khi chạm
    var touchStartY = 0;

    // Dành cho thiết bị cảm ứng
    $('.ddmenu').on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    }).on('touchend', function(e) {
        var touchEndY = e.originalEvent.changedTouches[0].clientY;
        var touchDifference = touchStartY - touchEndY;
        
        if (Math.abs(touchDifference) < 10) {
            var $nextUl = $(this).next('ul');
            if ($nextUl.is(':visible')) {
                $nextUl.stop().hide();
            } else {
                $nextUl.stop().show();
            }
            $('.ddmenu').not(this).next('ul').hide();
            return false;
        }
    });

    // Dành cho PC
    $('.ddmenu_parent').hover(function() {
        $(this).children('ul').stop().show();
    }, function() {
        $(this).children('ul').stop().hide();
    });

    // Đóng menu thả xuống khi nhấn vào liên kết trong menu
    $('.ddmenu_parent ul a').click(function() {
        $('.ddmenu_parent > ul').hide();
    });
});


//===============================================================
// Cấm cuộn trang khi menu nhỏ đang mở
//===============================================================
$(function() {
  function toggleBodyScroll() {
    if ($('#menubar_hdr').hasClass('ham') && !$('#menubar_hdr').hasClass('display-none')) {
      $('body').css({
        overflow: 'hidden',
        height: '100%'
      });
    } else {
      $('body').css({
        overflow: '',
        height: ''
      });
    }
  }

  toggleBodyScroll();

  const observer = new MutationObserver(toggleBodyScroll);
  observer.observe(document.getElementById('menubar_hdr'), { attributes: true, attributeFilter: ['class'] });
});


//===============================================================
// Cuộn mượt (Smooth Scroll)
//===============================================================
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
    $(scroll).hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            $(scroll).fadeIn().addClass(scrollShow);
        } else {
            $(scroll).fadeOut().removeClass(scrollShow);
        }
    });

    function smoothScroll(target) {
        var menubarHeight = 0;
        if ($('body').hasClass('large-screen')) {
            menubarHeight = $('#menubar').outerHeight();
        }
        var scroll = target.offset().top - menubarHeight;
        $('body,html').animate({ scrollTop: scroll }, 500);
    }

    $('.pagetop').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    $(window).on('load', function() {
        var hash = location.hash;
        if (hash) {
            $('body,html').scrollTop(0);
            setTimeout(function() {
                var target = $(hash);
                if (target.length) {
                    smoothScroll(target);
                }
            }, 100);
        }
    });

    $(window).on('load', function() {
        $('a[href*="#"]').click(function(e) {
            var href = $(this).attr('href');
            var targetId = href.split('#')[1];
            var target = $('#' + targetId);
            if (target.length) {
                e.preventDefault();
                smoothScroll(target);
                history.pushState(null, null, '#' + targetId);
            }
        });
    });
});


//===============================================================
// Xử lý mở/đóng chung
//===============================================================
$(function() {
	$('.openclose-parts').next().hide();
	$('.openclose-parts').click(function() {
		$(this).next().slideToggle();
		$('.openclose-parts').not(this).next().slideUp();
	});
});


//===============================================================
// Thay đổi ảnh thu nhỏ trong trang chi tiết
//===============================================================
$(function() {
    $(".thumbnail-view-parts").each(function() {
        var firstThumbnailSrc = $(this).next(".thumbnail-parts").find("img:first").attr("src");
        var defaultImage = $("<img>").attr("src", firstThumbnailSrc);
        $(this).append(defaultImage);
    });

    $(".thumbnail-parts img").click(function() {
        var imgSrc = $(this).attr("src");
        var newImage = $("<img>").attr("src", imgSrc).hide();
        var targetPhoto = $(this).parent(".thumbnail-parts").prev(".thumbnail-view-parts");

        targetPhoto.find("img").fadeOut(400, function() {
            targetPhoto.empty().append(newImage);
            newImage.fadeIn(400);
        });
    });
});


//===============================================================
// Slideshow
//===============================================================
$(function() {
	var slides = $('#mainimg .slide');
	var slideCount = slides.length;
	var currentIndex = 0;

	slides.eq(currentIndex).css('opacity', 1).addClass('active');

	setInterval(function() {
		var nextIndex = (currentIndex + 1) % slideCount;
		slides.eq(currentIndex).css('opacity', 0).removeClass('active');
		slides.eq(nextIndex).css('opacity', 1).addClass('active');
		currentIndex = nextIndex;
	}, 5000); // Chuyển slide mỗi 5 giây
});


//===============================================================
// Thêm class fixed cho menu
//===============================================================
document.addEventListener("DOMContentLoaded", function() {
    const menubar = document.getElementById('menubar');
    const triggerPoint = document.getElementById('trigger-point');
    let fixedTimeout;

    const handleIntersection = debounce(function(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                menubar.classList.add('fixed');
                fixedTimeout = setTimeout(() => {
                    menubar.classList.add('fixed2');
                }, 1500); // Thêm fixed2 sau 1.5 giây
            } else {
                menubar.classList.remove('fixed');
                menubar.classList.remove('fixed2');
                clearTimeout(fixedTimeout);
            }
        });
    }, 100);

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0
    });

    observer.observe(triggerPoint);
});


//===============================================================
// Xử lý mở/đóng chung (lần nữa)
//===============================================================
$(function() {
	$('.openclose').next().hide();
	$('.openclose').click(function() {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});
