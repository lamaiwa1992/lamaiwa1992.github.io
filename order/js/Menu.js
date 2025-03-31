const items = {
    coffee: [
        { id: 1, name: "Cà Phê Sữa", price: 50000, image: "bomilktea.store/order/images/1.png" },
        { id: 2, name: "Cà Phê Đen", price: 40000, image: "bomilktea.store/order/images/2.png" },
        { id: 3, name: "Cà Phê Mocha", price: 55000, image: "bomilktea.store/order/images/3.png" },
        { id: 4, name: "Cà Phê Americano", price: 45000, image: "bomilktea.store/order/images/4.png" },
        { id: 5, name: "Cà Phê Espresso", price: 40000, image: "bomilktea.store/order/images/5.png" },
        { id: 6, name: "Cà Phê Latte", price: 50000, image: "bomilktea.store/order/images/6.png" },
        { id: 7, name: "Cà Phê Cappuccino", price: 52000, image: "bomilktea.store/order/images/7.png" },
        { id: 8, name: "Cà Phê Irish", price: 60000, image: "bomilktea.store/order/images/8.png" },
        { id: 9, name: "Cà Phê Dalgona", price: 65000, image: "bomilktea.store/order/images/9.png" },
        { id: 10, name: "Cà Phê Việt Nam", price: 45000, image: "bomilktea.store/order/images/10.png" },
        { id: 11, name: "Cà Phê Cold Brew", price: 70000, image: "bomilktea.store/order/images/11.png" },
        { id: 12, name: "Cà Phê Caramel", price: 55000, image: "bomilktea.store/order/images/12.png" }
    ],
    milktea: [
        { id: 13, name: "Trà Sữa Boba", price: 45000, image: "bomilktea.store/order/images/13.png" },
        { id: 14, name: "Trà Sữa Matcha", price: 47000, image: "bomilktea.store/order/images/14.png" }
    ],
    lemontea: [
        { id: 15, name: "Trà Chanh", price: 35000, image: "bomilktea.store/order/images/15.png" }
    ],
    snacks: [
        { id: 16, name: "Bánh Mì", price: 15000, image: "bomilktea.store/order/images/16.png" },
        { id: 17, name: "Khoai Tây Chiên", price: 20000, image: "bomilktea.store/order/images/17.png" }
    ]
};

// Hàm render menu
function renderMenu(category) {
    const menuContainer = document.getElementById(category);
    menuContainer.innerHTML = ""; // Xóa nội dung cũ trong menu

    if (items[category]) {
        items[category].forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");
            
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Giá: ${item.price} VNĐ</p>
                <input type="number" id="qty-${item.id}" min="0" value="0">
            `;
            
            menuContainer.appendChild(itemDiv);

            // Lưu lại số lượng vào localStorage khi lần đầu hiển thị
            const savedQty = JSON.parse(localStorage.getItem("selectedItems"))?.find(i => i.id === item.id)?.quantity || 0;
            document.getElementById(`qty-${item.id}`).value = savedQty;
        });
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

// Hàm xác nhận đơn hàng
function goToOrder() {
    const selectedItems = [];

    // Lấy tất cả các lựa chọn món từ các tab
    Object.keys(items).forEach(category => {
        items[category].forEach(item => {
            const qty = parseInt(document.getElementById(`qty-${item.id}`).value);
            if (qty > 0) {
                selectedItems.push({ id: item.id, name: item.name, price: item.price, quantity: qty });
            }
        });
    });

    if (selectedItems.length === 0) {
        alert("Vui lòng chọn ít nhất một món!");
        return;
    }

    // Lưu lại danh sách món đã chọn vào localStorage
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

    // Chuyển đến trang "datmon.html"
    window.location.href = "datmon.html";
}

// Mở tab mặc định khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    // Mở tab cà phê mặc định
    document.querySelector(".tablink").click();
});
