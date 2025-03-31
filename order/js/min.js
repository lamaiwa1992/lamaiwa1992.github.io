// Hàm tính tổng tiền từ các món đã chọn
function calculateTotal(selectedItems) {
    let total = 0;
    selectedItems.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

// Hàm xử lý thay đổi phương thức thanh toán
document.getElementById('paymentMethod').addEventListener('change', function() {
    const paymentMethod = this.value;
    const bankDetails = document.getElementById('bankDetails');

    if (paymentMethod === 'bankTransfer') {
        bankDetails.style.display = 'block';
    } else {
        bankDetails.style.display = 'none';
    }
});

// Hàm xử lý khi nhấn "Đặt món"
function submitOrder() {
    const customerName = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    
    if (!customerName || !phone || !address || !paymentMethod || selectedItems.length === 0) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    const totalPrice = calculateTotal(selectedItems);

    const orderDetails = `
        <strong>Tên khách hàng:</strong> ${customerName} <br>
        <strong>Số điện thoại:</strong> ${phone} <br>
        <strong>Địa chỉ:</strong> ${address} <br>
        <strong>Phương thức thanh toán:</strong> ${paymentMethod === 'bankTransfer' ? 'Chuyển khoản ngân hàng' : 'Thanh toán khi nhận hàng'} <br>
        <strong>Sản phẩm:</strong><br>
        ${selectedItems.map(item => `${item.name} - ${item.quantity} x ${item.price} VNĐ`).join("<br>")} <br>
        <strong>Tổng cộng:</strong> ${totalPrice} VNĐ
    `;

    document.getElementById("orderDetails").innerHTML = orderDetails;
    document.getElementById("orderSummary").style.display = 'block';
    
    // Tắt nút xác nhận và chỉ hiện nút gửi
    document.querySelector("button[onclick='submitOrder()']").style.display = "none";
    document.querySelector("button[onclick='editOrder()']").style.display = "inline-block";
}

// Hàm chỉnh sửa đơn hàng (quay lại trang chọn món)
function editOrder() {
    // Xóa các món đã chọn trong localStorage
    localStorage.removeItem("selectedItems");

    // Quay lại trang chọn món
    window.location.href = "chonmon.html";
}

// Hàm xử lý gửi đơn hàng (chuyển đến trang hoàn thành)
function submitOrderFinal() {
    const customerName = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    
    if (!customerName || !phone || !address || !paymentMethod || selectedItems.length === 0) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    const totalPrice = calculateTotal(selectedItems);

    const orderDetails = `
        <strong>Tên khách hàng:</strong> ${customerName} <br>
        <strong>Số điện thoại:</strong> ${phone} <br>
        <strong>Địa chỉ:</strong> ${address} <br>
        <strong>Phương thức thanh toán:</strong> ${paymentMethod === 'bankTransfer' ? 'Chuyển khoản ngân hàng' : 'Thanh toán khi nhận hàng'} <br>
        <strong>Sản phẩm:</strong><br>
        ${selectedItems.map(item => `${item.name} - ${item.quantity} x ${item.price} VNĐ`).join("<br>")} <br>
        <strong>Tổng cộng:</strong> ${totalPrice} VNĐ
    `;

    document.getElementById("orderDetails").innerHTML = orderDetails;
    document.getElementById("orderSummary").style.display = 'block';
    
    // Chuyển đến trang "hoanthanh.html"
    localStorage.removeItem("selectedItems");  // Xóa giỏ hàng sau khi đơn hàng được xác nhận
    window.location.href = "hoanthanh.html";
}
