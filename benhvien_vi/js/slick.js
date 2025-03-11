// Trình chiếu ảnh trang chủ
$('.mainimg-slick').slick({
    autoplay: true,
    dots: true,             // Hiển thị các nút điều hướng hình tròn
    arrows: false,          // Mũi tên trái phải
    autoplaySpeed: 4000,    // Tốc độ chuyển đổi
});

// Trình chiếu ảnh thu nhỏ theo kiểu trượt ngang
$('.thumbnail-slide').slick({
    autoplay: true,
    arrows: false,          // Mũi tên trái phải
    autoplaySpeed: 0,       // Tốc độ chuyển đổi. Lần này để di chuyển mượt mà nên để là 0
    speed: 7000,            // Tốc độ trượt
    cssEase: 'linear',      // Mẫu hoạt ảnh. Thông thường để như thế này là được
    slidesToShow: 4,        // Số lượng hình hiển thị trong màn hình
    slidesToScroll: 1,      // Số lượng hình di chuyển mỗi lần trượt
    
    // Cài đặt cho màn hình có độ rộng dưới 899px
    responsive: [
    {
    breakpoint: 899,    // Điểm dừng
    settings: {
    slidesToShow: 2,    // Số lượng hình hiển thị trong màn hình. 2 hình.
    }
    }
    ]
});
