# 🖼️ Hướng Dẫn Thêm Ảnh

## 📬 Cách Thêm Banner Phim

### Bước 1: Tìm hoặc tải ảnh banner phim Obsession 2
- Tìm ảnh poster phim Obsession 2 trên Google Images
- Hoặc sử dụng ảnh bạn đã có
- Lưu ảnh vào folder project

### Bước 2: Thêm ảnh vào project
1. Tạo folder `images` trong project (nếu chưa có)
2. Đặt ảnh banner vào folder đó với tên: `obsession2-banner.jpg`
3. Hoặc đặt ảnh trực tiếp vào folder project

### Bước 3: Cập nhật file `index.html`
Tìm đoạn code sau (khoảng dòng 29-37):

```html
<div class="movie-banner">
    <div class="banner-placeholder">
        <p>🎬 Banner Phim</p>
        <small>(https://search.brave.com/images?q=obsession+2)</small>
    </div>
</div>
```

Thay thế bằng:

```html
<div class="movie-banner">
    <img src="images/obsession2-banner.jpg" alt="Obsession 2 Banner" style="width: 100%; height: 100%; object-fit: cover;">
</div>

HOẶC nếu ảnh ở cùng folder với index.html:

<div class="movie-banner">
    <img src="obsession2-banner.jpg" alt="Obsession 2 Banner" style="width: 100%; height: 100%; object-fit: cover;">
</div>

HOẶC sử dụng URL trực tiếp:

<div class="movie-banner">
    <img src="https://example.com/obsession2-banner.jpg" alt="Obsession 2 Banner" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

---

## 📸 Cách Thêm Ảnh Kỷ Niệm

### Bước 1: Chuẩn bị ảnh kỷ niệm
- Chọn 4 ảnh kỷ niệm đẹp nhất của bạn và người yêu
- Đặt tên ảnh: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
- Đặt ảnh vào folder `images` hoặc cùng folder với index.html

### Bước 2: Cập nhật file `index.html`
Tìm đoạn code sau (khoảng dòng 110-142):

```html
<div class="memories-grid">
    <div class="memory-photo">
        <div class="photo-placeholder">
            <p>📷 Ảnh 1</p>
            <small>(Thêm ảnh tại đây)</small>
        </div>
    </div>
    <div class="memory-photo">
        <div class="photo-placeholder">
            <p>📷 Ảnh 2</p>
            <small>(Thêm ảnh tại đây)</small>
        </div>
    </div>
    <div class="memory-photo">
        <div class="photo-placeholder">
            <p>📷 Ảnh 3</p>
            <small>(Thêm ảnh tại đây)</small>
        </div>
    </div>
    <div class="memory-photo">
        <div class="photo-placeholder">
            <p>📷 Ảnh 4</p>
            <small>(Thêm ảnh tại đây)</small>
        </div>
    </div>
</div>
```

Thay thế bằng:

```html
<div class="memories-grid">
    <div class="memory-photo">
        <img src="images/photo1.jpg" alt="Kỷ niệm 1" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="memory-photo">
        <img src="images/photo2.jpg" alt="Kỷ niệm 2" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="memory-photo">
        <img src="images/photo3.jpg" alt="Kỷ niệm 3" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="memory-photo">
        <img src="images/photo4.jpg" alt="Kỷ niệm 4" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
</div>
```

---

## 💡 Tips

1. **Kích thước ảnh khuyến nghị:**
   - Banner phim: 800x400px hoặc lớn hơn
   - Ảnh kỷ niệm: 500x500px hoặc vuông

2. **Định dạng ảnh:**
   - Nên dùng JPG hoặc PNG
   - Nén ảnh để giảm dung lượng (dùng TinyPNG.com)

3. **Nếu ảnh không hiển thị:**
   - Kiểm tra đường dẫn (path) có đúng không
   - Kiểm tra tên file có đúng chính tả không (phân biệt hoa thường)
   - Mở Developer Tools (F12) → Console để xem lỗi

4. **Sử dụng ảnh từ URL:**
   - Có thể upload ảnh lên Imgur, Google Photos, hoặc Dropbox
   - Copy link ảnh và paste vào `src="..."`

---

## 🚀 Sau khi thêm ảnh

1. Lưu file `index.html`
2. Refresh browser để xem kết quả
3. Commit và push lên GitHub nếu muốn:

```bash
git add .
git commit -m "Add images"
git push
```

---

## 📁 Cấu trúc folder khuyến nghị

```
anniversary-movie-ticket/
├── index.html
├── styles.css
├── script.js
├── README.md
├── HOW_TO_ADD_IMAGES.md
└── images/
    ├── obsession2-banner.jpg
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    └── photo4.jpg
```
