// Khi phần tử có lớp "up" xuất hiện trong viewport, thêm lớp "upstyle"
$('.up').on('inview', function() {
    $(this).addClass('upstyle');
});

// Khi phần tử có lớp "down" xuất hiện trong viewport, thêm lớp "downstyle"
$('.down').on('inview', function() {
    $(this).addClass('downstyle');
});

// Khi phần tử có lớp "transform1" xuất hiện trong viewport, thêm lớp "transform1style"
$('.transform1').on('inview', function() {
    $(this).addClass('transform1style');
});

// Khi phần tử có lớp "transform2" xuất hiện trong viewport, thêm lớp "transform2style"
$('.transform2').on('inview', function() {
    $(this).addClass('transform2style');
});

// Khi phần tử có lớp "transform3" xuất hiện trong viewport, thêm lớp "transform3style"
$('.transform3').on('inview', function() {
    $(this).addClass('transform3style');
});

// Khi phần tử có lớp "blur" xuất hiện trong viewport, thêm lớp "blurstyle"
$('.blur').on('inview', function() {
    $(this).addClass('blurstyle');
});

// Đoạn mã này đã có chú thích, nhưng nếu không có chú thích, phần tử có lớp "fade" khi xuất hiện sẽ có lớp "fade-in"
/*$('.fade').on('inview', function() {
    $(this).addClass('fade-in');
});*/
