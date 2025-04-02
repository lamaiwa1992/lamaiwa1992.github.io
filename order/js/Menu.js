const items = {
    coffee: [
        { id: 1, name: "Cà Phê Sữa", price: 50000, image: "images/1.png" },
        { id: 2, name: "Cà Phê Đen", price: 40000, image: "images/2.png" },
        { id: 3, name: "Cà Phê Mocha", price: 55000, image: "images/3.png" },
        { id: 4, name: "Cà Phê Americano", price: 45000, image: "images/4.png" },
        { id: 5, name: "Cà Phê Espresso", price: 40000, image: "images/5.png" },
        { id: 6, name: "Cà Phê Latte", price: 50000, image: "images/6.png" },
        { id: 7, name: "Cà Phê Cappuccino", price: 52000, image: "images/7.png" },
        { id: 8, name: "Cà Phê Irish", price: 60000, image: "images/8.png" },
        { id: 9, name: "Cà Phê Dalgona", price: 65000, image: "images/9.png" },
        { id: 10, name: "Cà Phê Việt Nam", price: 45000, image: "images/10.png" },
        { id: 11, name: "Cà Phê Cold Brew", price: 70000, image: "images/11.png" },
        { id: 12, name: "Cà Phê Caramel", price: 55000, image: "images/12.png" }
    ],
    milktea: [
        { id: 13, name: "Trà Sữa Boba", price: 45000, image: "images/1.png" },
        { id: 14, name: "Trà Sữa Matcha", price: 47000, image: "images/4.png" }
    ],
    lemontea: [
        { id: 15, name: "Trà Chanh", price: 35000, image: "images/5.png" },
        { id: 16, name: "Trà Chanh", price: 35000, image: "images/8.png" }
    ],
    snacks: [
        { id: 17, name: "Bánh Mì", price: 15000, image: "images/6.png" },
        { id: 18, name: "Khoai Tây Chiên", price: 20000, image: "images/7.png" }
    ]
};
// Lưu trữ số lượng món đã chọn cho từng món trong từng danh mục
let selectedQuantities = {};

// Hàm render menu
function renderMenu(category) {
    const menuContainer = document.getElementById(`menu-${category}`);

    if (!menuContainer) {
        console.error(`❌ Lỗi: Không tìm thấy menu container cho danh mục ${category}`);
        return;
    }

    menuContainer.innerHTML = ""; // Xóa nội dung cũ trong menu

    if (!items[category] || items[category].length === 0) {
        console.warn(`⚠️ Cảnh báo: Không có món nào trong danh mục ${category}`);
        return;
    }

    items[category].forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        // Kiểm tra số lượng đã chọn trước đó và gán giá trị cho input
        const quantity = selectedQuantities[item.id] || 0;

        itemDiv.innerHTML = `
        <div class="product-container">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/default.png'">
            <h3>${item.name}</h3>
            <p>Giá: ${item.price} VNĐ</p>
            <div class="quantity-container">
                <p>SL:</p>
                <input type="number" id="qty-${item.id}" min="0" value="${quantity}">
            </div>
        </div>
    `;    

        // Thêm sự kiện onchange cho input số lượng
        const qtyInput = itemDiv.querySelector(`#qty-${item.id}`);
        qtyInput.addEventListener("change", function() {
            // Lưu số lượng vào đối tượng selectedQuantities khi người dùng thay đổi số lượng
            selectedQuantities[item.id] = parseInt(qtyInput.value) || 0;
            updateOrderSummary();  // Gọi hàm cập nhật đơn hàng khi số lượng thay đổi
        });

        menuContainer.appendChild(itemDiv);
    });
}

// Hàm cập nhật thông tin đơn hàng
function updateOrderSummary() {
    const selectedItems = [];
    let totalPrice = 0;

    // Lấy tất cả các lựa chọn món từ các tab
    Object.keys(items).forEach(category => {
        items[category].forEach(item => {
            const qty = selectedQuantities[item.id] || 0;

            if (qty > 0) {
                const itemTotalPrice = item.price * qty;
                selectedItems.push({ id: item.id, name: item.name, price: item.price, quantity: qty, total: itemTotalPrice });
                totalPrice += itemTotalPrice;
            }
        });
    });

    // Cập nhật nội dung của #orderSummary
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = ""; // Xóa nội dung cũ

    if (selectedItems.length > 0) {
        selectedItems.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = `${item.name} - ${item.quantity} x ${item.price} VNĐ = ${item.total} VNĐ`;
            orderSummary.appendChild(itemDiv);
        });

        // Hiển thị tổng tiền
        const totalDiv = document.createElement("div");
        totalDiv.innerHTML = `<strong>Tổng cộng: ${totalPrice} VNĐ</strong>`;
        orderSummary.appendChild(totalDiv);

        // Hiển thị thông tin đơn hàng
        document.getElementById("orderDetails").style.display = "block";
    } else {
        // Nếu không có món nào được chọn, ẩn thông tin đơn hàng
        document.getElementById("orderDetails").style.display = "none";
    }
}

// Hàm mở tab khi nhấn
function openCategory(evt, categoryName) {
    // Ẩn tất cả các tab nội dung
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablink");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa trạng thái active của các tab
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Hiển thị nội dung tab hiện tại và đánh dấu active
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.classList.add("active");

    // Render menu cho danh mục tương ứng
    renderMenu(categoryName);
}

// Hàm reset tất cả lựa chọn
function resetSelections() {
    // Sử dụng setTimeout để đảm bảo rằng các hành động khác diễn ra sau khi alert đóng
    setTimeout(() => {
        // Lấy tất cả các input số lượng và đặt về 0
        document.querySelectorAll("input[type='number']").forEach(input => {
            input.value = 0;
        });

        // Xóa danh sách món đã chọn (nếu có sử dụng biến selectedItems)
        if (typeof selectedItems !== "undefined") {
            selectedItems.length = 0;
        }
        // Hiển thị alert trước
        alert("Đã xóa tất cả lựa chọn!");
        // Sau khi ấn OK trong alert, tải lại trang hiện tại
        location.reload();
        // Ẩn phần orderSummary
        const orderSummary = document.getElementById("orderSummary");
        if (orderSummary) {
            orderSummary.style.display = "none";  // Ẩn phần orderSummary
        }

    }, 0); // Độ trễ 0 sẽ giúp mã chạy ngay sau khi alert đóng
}


// Hàm cập nhật thông tin đơn hàng
function updateOrderSummary() {
    const selectedItems = [];
    let totalPrice = 0;

   // Lấy các lựa chọn món có số lượng lớn hơn 0
Object.keys(items).forEach(category => {
    items[category].forEach(item => {
        const qtyInput = document.getElementById(`qty-${item.id}`);
        
        // Kiểm tra xem input có tồn tại không trước khi truy cập
        if (qtyInput) {
            const qty = parseInt(qtyInput.value);

            // Kiểm tra nếu số lượng lớn hơn 0, thì mới thêm vào danh sách
            if (qty > 0) {
                const itemTotalPrice = item.price * qty;
                selectedItems.push({ 
                    id: item.id, 
                    name: item.name, 
                    price: item.price, 
                    quantity: qty, 
                    total: itemTotalPrice 
                });
                totalPrice += itemTotalPrice;
            }
        } 
    });
});


    // Cập nhật nội dung của #orderSummary
    const orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = ""; // Xóa nội dung cũ

    if (selectedItems.length > 0) {
        selectedItems.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = `${item.name} - ${item.quantity} x ${item.price} VNĐ = ${item.total} VNĐ`;
            orderSummary.appendChild(itemDiv);
        });

        // Hiển thị tổng tiền
        const totalDiv = document.createElement("div");
        totalDiv.innerHTML = `<strong>Tổng cộng: ${totalPrice} VNĐ</strong>`;
        orderSummary.appendChild(totalDiv);

        // Hiển thị thông tin đơn hàng
        document.getElementById("orderDetails").style.display = "block";
    } else {
        // Nếu không có món nào được chọn, ẩn thông tin đơn hàng
        document.getElementById("orderDetails").style.display = "none";
    }
}


// Hàm cập nhật số lượng món
function updateQuantity(itemId) {
    const qty = parseInt(document.getElementById(`qty-${itemId}`).value);
    updateOrderSummary();
}
// Hàm xác nhận đơn hàng
function goToOrder() {
    const selectedItems = [];

    // Kiểm tra xem items có tồn tại không
    if (!items || typeof items !== "object") {
        alert("Lỗi: Dữ liệu items không hợp lệ!");
        return;
    }

    // Duyệt qua tất cả danh mục
    Object.keys(items).forEach(category => {
        if (!Array.isArray(items[category])) {
            console.error(`❌ Lỗi: Danh mục ${category} không phải là một mảng!`);
            return;
        }

        items[category].forEach(item => {
            // Tìm input số lượng nếu tab đó đã render
            const qtyInput = document.getElementById(`qty-${item.id}`);

            // Nếu input chưa tồn tại (tab chưa hiển thị), bỏ qua không báo lỗi
            if (!qtyInput) {
                console.warn(`⚠️ Cảnh báo: Input số lượng chưa hiển thị cho món ${item.name} (ID: ${item.id})`);
                return;
            }

            const qty = parseInt(qtyInput.value);
            if (isNaN(qty) || qty < 0) {
                alert(`Lỗi: Số lượng không hợp lệ cho món ${item.name} (ID: ${item.id})`);
                return;
            }

            if (qty > 0) {
                selectedItems.push({ 
                    id: item.id, 
                    name: item.name, 
                    price: item.price, 
                    quantity: qty 
                });
            }
        });
    });

    // Kiểm tra xem có ít nhất một món được chọn không
    if (selectedItems.length === 0) {
        alert("⚠️ Vui lòng chọn ít nhất một món trước khi xác nhận đơn hàng!");
        return;
    }

    // Lưu vào localStorage và chuyển trang
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    window.location.href = "datmon.html";
}

// Hàm mở tab khi nhấn
function openCategory(evt, categoryName) {
    // Ẩn tất cả các tab nội dung
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablink");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa trạng thái active của các tab
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Hiển thị nội dung tab hiện tại và đánh dấu active
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.classList.add("active");
    // Đóng thanh menu sau khi chọn mục
    const navLinks = document.querySelector('.tabs');
    navLinks.classList.remove('active');  // Thu gọn menu khi chọn một mục
    // Render menu cho danh mục tương ứng
    renderMenu(categoryName);
}
// Mở tab mặc định khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    // Mở tab cà phê mặc định
    document.querySelector(".tablink").click();
});
// JavaScript để mở/đóng thanh menu khi nhấn hamburger
function toggleMenu() {
    const navLinks = document.querySelector('.tabs');
    navLinks.classList.toggle('active');  // Thêm hoặc bỏ class 'active' khi nhấn hamburger
}