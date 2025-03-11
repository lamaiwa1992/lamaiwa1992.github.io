$(function() {
    // Hàm thay đổi cỡ chữ
    function changeFontSize(buttonID, className) {
        // Xóa các lớp cỡ chữ hiện tại (f-small, f-large) khỏi thẻ <html>
        $('html').removeClass('f-small f-large');
        
        // Thêm lớp mới vào thẻ <html>
        $('html').addClass(className);

        // Loại bỏ lớp .current và thêm vào nút được nhấn
        $('#f-size .current').removeClass('current');
        $(buttonID).addClass('current');

        // Lưu lựa chọn cỡ chữ vào sessionStorage
        window.sessionStorage.setItem('CHSIZE', className);
    }

    // Khi trang được tải lại, lấy cỡ chữ đã lưu trong sessionStorage
    const storedSize = window.sessionStorage.getItem('CHSIZE');
    
    // Nếu có cỡ chữ đã lưu, áp dụng nó
    if (storedSize) {
        changeFontSize(`#f-size #${storedSize}`, storedSize);
    } else {
        // Nếu không, áp dụng cỡ chữ mặc định (f-small). Thay bằng f-large nếu muốn cỡ chữ lớn mặc định.
        changeFontSize('#f-small', 'f-small');
    }

    // Khi nhấn nút "f-small", thay đổi cỡ chữ thành nhỏ
    $('#f-size #f-small').click(function() {
        changeFontSize('#f-small', 'f-small');
    });

    // Khi nhấn nút "f-large", thay đổi cỡ chữ thành lớn
    $('#f-size #f-large').click(function() {
        changeFontSize('#f-large', 'f-large');
    });
});

