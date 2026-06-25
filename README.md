# 🎬 Kỷ Niệm 1 Tháng Yêu - Movie Ticket & Love Letter

Trang web kỷ niệm 1 tháng yêu với vé xem phim và thư tình.

## 📋 Tính Năng

### Phase 1: Vé Xem Phim (Horror Edition)
- 🎬 Interactive envelope animation (nhấn để mở)
- 🎫 Vé xem phim với thông tin chi tiết:
  - Tên phim: Obsession 2
  - Rạp: CGV Vincom
  - Ghế: G6 - G7
  - Ngày: 25/06/2026
  - Giờ: 20:00
  - Mã vé: OBS-2026-0625
- 🎃 Horror theme với dark colors
- ✨ Sparkle effects khi mở thư

### Phase 2: Love Letter
- 💕 Interactive envelope animation (nhấn để mở)
- 💌 Thư tình với lời chúc
- 📸 Grid ảnh kỷ niệm (4 ảnh)
- 💝 Romantic theme với warm colors
- ✨ Sparkle effects khi mở thư

## 🚀 Cách Sử Dụng

1. **Mở trang web**: Double-click file `index.html` để mở trong browser

2. **Phase 1 - Vé xem phim**:
   - Nhấn vào envelope để mở
   - Vé xem phim sẽ hiện ra với animation
   - Nhấn "Tiếp tục" để qua Phase 2

3. **Phase 2 - Thư tình**:
   - Nhấn vào envelope để mở
   - Thư tình và ảnh kỷ niệm sẽ hiện ra
   - Nhấn "Hoàn Thành" để xem màn hình chúc mừng

## 🎨 Tùy Chỉnh

### Thay đổi banner phim
Tìm trong file `index.html`:
```html
<div class="movie-banner">
    <div class="banner-placeholder">
        <p>🎬 Banner Phim</p>
    </div>
</div>
```
Thay thế bằng:
```html
<div class="movie-banner">
    <img src="path/to/your/banner.jpg" alt="Obsession 2 Banner" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Thay đổi thông tin vé
Trong file `index.html`, tìm phần `ticket-info` và chỉnh sửa:
- Rạp
- Ghế
- Ngày
- Giờ
- Mã vé

### Thay đổi nội dung thư tình
Trong file `index.html`, tìm phần `letter-content` và chỉnh sửa nội dung.

### Thêm ảnh kỷ niệm
Trong file `index.html`, tìm phần `memories-grid` và thay thế placeholder bằng:
```html
<div class="memory-photo">
    <img src="path/to/photo1.jpg" alt="Kỷ niệm 1" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## 📁 Cấu Trúc File

```
anniversary-movie-ticket/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript logic
└── README.md           # This file
```

## 🎯 Tech Stack

- HTML5
- CSS3 (Gradient, Animations)
- Vanilla JavaScript
- Google Fonts (Dancing Script, Playfair Display, Inter)

## 💡 Tips

- Trang web responsive, hoạt động tốt trên mobile và desktop
- Tất cả animations mượt mà với CSS transitions
- Không cần cài đặt gì, chỉ cần mở file HTML
- Có thể deploy miễn phí trên GitHub Pages, Netlify, hoặc Vercel

## 🎉 Enjoy!

Chúc bạn có một kỷ niệm 1 tháng yêu thật đáng nhớ! ❤️
