const items = {
    hot: [
        { id: 1, name: "Trà đào ổi hồng", price: 20000, image: "images/caphe/cf1.png" },
        { id: 2, name: "Trà xoài chanh leo", price: 20000, image: "images/caphe/cf1.png" },
        { id: 3, name: "Trà dứa chanh leo", price: 20000, image: "images/caphe/cf1.png" },
        { id: 4, name: "Trà đào chanh leo", price: 20000, image: "images/caphe/cf1.png" },
        { id: 5, name: "Trà đào cam sả", price: 20000, image: "images/caphe/cf1.png" },
        { id: 6, name: "Trà đào cam dâu", price: 20000, image: "images/caphe/cf1.png" },
        { id: 7, name: "Trà đào cam dứa", price: 15000, image: "images/caphe/cf2.png" }
    ],
    new: [
        { id: 8, name: "Matcha latte", price: 20000, image: "images/caphe/cf1.png" },
        { id: 9, name: "Matcha latte xoài", price: 20000, image: "images/caphe/cf1.png" },
        { id: 10, name: "Matcha latte dâu", price: 20000, image: "images/caphe/cf1.png" },
        { id: 11, name: "Matcha latte đào", price: 20000, image: "images/caphe/cf1.png" },
        { id: 12, name: "Matcha kem chese", price: 20000, image: "images/caphe/cf1.png" },
        { id: 13, name: "Matcha latte kem chese", price: 20000, image: "images/caphe/cf1.png" },
        { id: 14, name: "Matcha sữa dừa", price: 20000, image: "images/caphe/cf1.png" },
        { id: 15, name: "Ca cao kem chese", price: 20000, image: "images/caphe/cf1.png" },
        { id: 16, name: "Dâu tây sữa dừa xanh biếc", price: 15000, image: "images/caphe/cf2.png" }
    ],
    milktea: [
        { id: 18, name: "Trà Sữa trân châu đường đen", price: 25000, image: "images/trasua/ts1.png" },
        { id: 19, name: "Trà Sữa TCDD kem trứng", price: 25000, image: "images/trasua/ts2.png" },
        { id: 20, name: "Trà Sữa TCDD kem chese", price: 25000, image: "images/trasua/ts3.png" },
        { id: 21, name: "Trà Sữa Socola", price: 25000, image: "images/trasua/ts1.png" },
        { id: 22, name: "Trà Sữa socola kem trứng", price: 25000, image: "images/trasua/ts2.png" },
        { id: 23, name: "Trà Sữa việt quất", price: 25000, image: "images/trasua/ts3.png" },
        { id: 24, name: "Trà Sữa bạc hà", price: 25000, image: "images/trasua/ts1.png" },
        { id: 25, name: "Trà Sữa ổi hồng", price: 25000, image: "images/trasua/ts2.png" },
        { id: 26, name: "Trà Sữa khoai môn", price: 25000, image: "images/trasua/ts3.png" },
        { id: 28, name: "Trà Sữa Dâu", price: 25000, image: "images/trasua/ts3.png" },
        { id: 29, name: "Trà Sữa dưa lưới", price: 25000, image: "images/trasua/ts4.png" }
    ],
    tea: [
        { id: 30, name: "Trà chanh", price: 25000, image: "images/trasua/ts1.png" },
        { id: 31, name: "Trà quất", price: 25000, image: "images/trasua/ts2.png" },
        { id: 32, name: "Trà Dâu", price: 25000, image: "images/trasua/ts3.png" },
        { id: 33, name: "Trà Bạc hà", price: 25000, image: "images/trasua/ts1.png" },
        { id: 34, name: "Trà đào", price: 25000, image: "images/trasua/ts2.png" },
        { id: 35, name: "Trà quất nha đam", price: 25000, image: "images/trasua/ts3.png" },
        { id: 36, name: "Trà dâu nha đam", price: 25000, image: "images/trasua/ts1.png" },
        { id: 37, name: "Trà chanh nha đam", price: 25000, image: "images/trasua/ts2.png" },
        { id: 38, name: "Trà đào sữa", price: 25000, image: "images/trasua/ts3.png" },
        { id: 39, name: "Trà quất lắc sữa", price: 25000, image: "images/trasua/ts4.png" }
    ],
    coffee: [
        { id: 40, name: "Cà phê đen", price: 20000, image: "images/caphe/cf1.png" },
        { id: 41, name: "Cà phê nâu", price: 20000, image: "images/caphe/cf1.png" },
        { id: 42, name: "Bạc Xỉu", price: 20000, image: "images/caphe/cf1.png" },
        { id: 43, name: "CF kem muối", price: 20000, image: "images/caphe/cf1.png" },
        { id: 44, name: "CF kem trứng", price: 20000, image: "images/caphe/cf1.png" },
        { id: 45, name: "CF cốt dừa", price: 15000, image: "images/caphe/cf2.png" }
    ],
    iced: [
        { id: 46, name: "Matcha đá xay", price: 20000, image: "images/caphe/cf1.png" },
        { id: 47, name: "Socola đá xay", price: 20000, image: "images/caphe/cf1.png" },
        { id: 48, name: "Cacao đá xay", price: 20000, image: "images/caphe/cf1.png" },
        { id: 49, name: "Việt quất đá xay", price: 15000, image: "images/caphe/cf2.png" }
    ],
    freshMilk: [
        { id: 50, name: "ST trân châu ĐĐ", price: 20000, image: "images/caphe/cf1.png" },
        { id: 51, name: "Trân châu ĐĐ kem trứng", price: 20000, image: "images/caphe/cf1.png" },
        { id: 52, name: "Matcha Trân châu ĐĐ", price: 20000, image: "images/caphe/cf1.png" },
        { id: 53, name: "ST dâu kem chese", price: 20000, image: "images/caphe/cf1.png" },
        { id: 54, name: "Nước cam ép", price: 15000, image: "images/caphe/cf2.png" }
    ],
    yogurt: [
        { id: 55, name: "SC đánh đá", price: 20000, image: "images/caphe/cf1.png" },
        { id: 56, name: "SC cà phê", price: 20000, image: "images/caphe/cf1.png" },
        { id: 57, name: "SC việt quất", price: 20000, image: "images/caphe/cf1.png" },
        { id: 58, name: "SC dâu", price: 20000, image: "images/caphe/cf1.png" },
        { id: 59, name: "SC xoài", price: 20000, image: "images/caphe/cf1.png" },
        { id: 60, name: "SC ổi hồng", price: 20000, image: "images/caphe/cf1.png" },
        { id: 61, name: "SC chanh leo", price: 20000, image: "images/caphe/cf1.png" },
        { id: 62, name: "SC bạc hà", price: 20000, image: "images/caphe/cf1.png" },
        { id: 63, name: "SC dưa lưới", price: 20000, image: "images/caphe/cf1.png" },
        { id: 64, name: "SC hoa anh đào", price: 15000, image: "images/caphe/cf2.png" }
    ],
    smoothie: [
        { id: 65, name: "Smoothie việt quất", price: 20000, image: "images/caphe/cf1.png" },
        { id: 66, name: "Smoothie dâu", price: 20000, image: "images/caphe/cf1.png" },
        { id: 67, name: "Smoothie đào", price: 20000, image: "images/caphe/cf1.png" },
        { id: 68, name: "Smoothie xoài", price: 20000, image: "images/caphe/cf1.png" },
        { id: 69, name: "Smoothie dưa vàng", price: 20000, image: "images/caphe/cf1.png" },
        { id: 70, name: "Smoothie ổi hồng", price: 15000, image: "images/caphe/cf2.png" },
        { id: 71, name: "Sinh tố bơ", price: 20000, image: "images/caphe/cf1.png" },
        { id: 72, name: "Sinh tố xoài", price: 15000, image: "images/caphe/cf2.png" }
    ],
    topping: [
        { id: 73, name: "Trân Châu Đen", price: 5000, image: "images/toping/tc1.jpg" },
        { id: 74, name: "Trân Châu Trắng", price: 5000, image: "images/toping/tc2.jpg" },
        { id: 75, name: "Pudding", price: 5000, image: "images/toping/tc3.jpg" },
        { id: 76, name: "Khoai Môn", price: 5000, image: "images/toping/tc4.jpg" }
    ],
    snacks: [
        { id: 77, name: "Xúc xích", price: 35000, image: "images/anvat/av1.jpg" },
        { id: 78, name: "Hướng dương", price: 35000, image: "images/anvat/av2.jpg" },
        { id: 79, name: "Hướng dương vị", price: 35000, image: "images/anvat/av3.jpg" },
        { id: 80, name: "Bỏng", price: 40000, image: "images/anvat/av6.jpg" },
        { id: 81, name: "Đùi gà", price: 50000, image: "images/anvat/av4.jpg" },
        { id: 82, name: "Xúc xích hà khẩu", price: 35000, image: "images/anvat/av5.jpg" },
        { id: 83, name: "Khoai tây lắc phomai", price: 35000, image: "images/anvat/av2.jpg" },
        { id: 84, name: "Khô gà", price: 35000, image: "images/anvat/av3.jpg" },
        { id: 85, name: "Khô bò", price: 40000, image: "images/anvat/av6.jpg" },
        { id: 86, name: "Bim bim", price: 50000, image: "images/anvat/av4.jpg" },
        { id: 87, name: "Nem chua rán", price: 35000, image: "images/anvat/av5.jpg" },
        { id: 88, name: "Hotdog", price: 35000, image: "images/anvat/av2.jpg" },
        { id: 89, name: "Phomai kéo sợi", price: 35000, image: "images/anvat/av3.jpg" },
        { id: 90, name: "Khoai lang kén", price: 40000, image: "images/anvat/av6.jpg" },
        { id: 91, name: "Cá viên chiên", price: 50000, image: "images/anvat/av4.jpg" },
        { id: 92, name: "Viên thập cẩm", price: 35000, image: "images/anvat/av5.jpg" },
        { id: 93, name: "Gà Chiên Giòn Pobcorn", price: 35000, image: "images/anvat/av2.jpg" },
        { id: 94, name: "Mì Cay Xúc Xích", price: 35000, image: "images/anvat/av3.jpg" },
        { id: 95, name: "Mì Cay Bò", price: 40000, image: "images/anvat/av6.jpg" },
        { id: 96, name: "Mẹt Thập Cẩm", price: 50000, image: "images/anvat/av4.jpg" },
        { id: 97, name: "Hoa quả theo mùa", price: 35000, image: "images/anvat/av5.jpg" },
        { id: 98, name: "Gà Sốt Thái", price: 35000, image: "images/anvat/av5.jpg" }
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