const translations = {
    'vi': {
        'title': 'BƠ MILK TEA',
        'subtitle': 'Trà Chanh - Trà Sữa - Cà Phê - Đồ Ăn Vặt - Tô Tượng',
        'about-title': 'Giới Thiệu về Bơ Milk Tea',
        'about-description': 'Chuyên trà sữa,trà chanh,cà phê,sữa chua,tô tượng,đồ ăn vặt các loại.Giá cả phải chăng,menu đồ uống đồ ăn vặt đa dạng.<br><br>Có sân chơi nhà bóng mini miễn phí cho các bé tha hồ vui chơi.bố mẹ có thể thoải mái thưởng thức đồ ăn đồ uống mà không cần lo lắng. Đặc biệt có tô tượng giá siêu ưu đãi cho các bé thả sức sáng tạo. View tầng 1 ấm áp sang trọng,view tầng 2 rộng rãi thoáng mát.',
        'about-footer': 'Kính mong được làm hài lòng quý khách hàng để khách hàng có 1 trải nghiệm tuyệt vời khi đến với Bơ Milk Tea. Kính chào quý khách!!!!!'
    },
    'ja': {
        'title': 'ボーミルクティー',
        'subtitle': 'レモンティー - タピオカ　- コーヒー - おやつ - 塗り絵',
        'about-title': 'Bơ Milk Teaについて',
        'about-description': 'タピオカ、レモンティー、コーヒー、ヨーグルト、塗り絵、揚げ物などを専門に提供しています。価格は安全で、飲み物や軽食のメニューも多彩です。<br><br>子供たちは無料のミニボールプールで自由に遊べます。親は食べ物や飲み物を楽しみながら、子供たちを心配することなくリラックスできます。特に、子供たちの創造力を引き出すために、非常にお得な価格で絵付け体験も提供しています。1階は温かみのある豪華な内装、2階は広々として快適な空間です。',
        'about-footer': 'ボーミルクティーにご来店いただき、素晴らしい体験をしていただけるよう努力しています。皆様のご来店をお待ちしています！'
    },
    'en': {
        'title': 'BO MILK TEA',
        'subtitle': 'Lemon Tea - Bubble Tea - Coffee - Snacks - Coloring',
        'about-title': 'About BO Milk Tea',
        'about-description': 'Specializing in bubble tea, lemon tea, coffee, yogurt, coloring, and a variety of snacks. Affordable prices, with a wide range of drinks and snacks.<br><br>We have a free mini ball pit where kids can play freely, while parents can enjoy food and drinks without worry. Additionally, we offer a very special deal on coloring sets for kids to unleash their creativity. The first floor offers a warm and luxurious atmosphere, while the second floor is spacious and airy.',
        'about-footer': 'We strive to make our customers happy and provide them with a wonderful experience when visiting BO Milk Tea. We look forward to welcoming you!'
    }
};

function setLanguage(lang) {
    document.getElementById('title').innerText = translations[lang]['title'];
    document.getElementById('subtitle').innerText = translations[lang]['subtitle'];
    document.getElementById('about-title').innerHTML = translations[lang]['about-title'];
    document.getElementById('about-description').innerHTML = translations[lang]['about-description'];
    document.getElementById('about-footer').innerHTML = translations[lang]['about-footer'];
}
