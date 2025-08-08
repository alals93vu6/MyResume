# MyResume 專案工作回憶

## 📋 專案概覽
**專案名稱**: MyResume - 個人履歷網站  
**建立日期**: 2025-01-17  
**專案目標**: 建立一個包含履歷、自傳、經歷的個人網站，並支援 PDF 下載功能  
**部署方式**: GitHub Pages (https://alals93vu6.github.io/MyResume)

---

## 🏗 整體架構設計

### 技術堆疊
- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **PDF 生成**: html2pdf.js 或 jsPDF
- **樣式框架**: 待選擇 (Bootstrap/Tailwind CSS/自定義)
- **部署**: GitHub Pages
- **版本控制**: Git

### 檔案結構規劃
```
MyResume/
├── index.html         # 主頁面 (GitHub Pages 需要在根目錄)
├── docs/              # 專案文檔
│   └── project_memory.md
├── src/               # 原始程式碼
│   ├── css/          # 樣式檔案
│   │   └── style.css
│   ├── js/           # JavaScript 檔案
│   │   └── main.js
│   └── assets/       # 圖片、文件等資源
│       └── images/   # 圖片資料夾
│           ├── profile.jpg (使用者頭像)
│           └── README.txt  (頭像替換說明)
└── README.md         # 專案說明
```

### 頁面架構設計
1. **個人資訊區塊**
   - 姓名、職稱、聯繫方式
   - 個人照片

2. **自傳/簡介區塊**
   - 個人背景介紹
   - 職業理念

3. **工作經歷區塊**
   - 按時間排序的工作經驗
   - 職責與成就描述

4. **技能/專長區塊**
   - 技術技能
   - 軟技能

5. **教育背景區塊**
   - 學歷資訊
   - 相關證照

6. **專案作品區塊**
   - 代表性專案展示
   - 專案連結

7. **下載功能**
   - PDF 下載按鈕
   - 列印友善樣式

---

## 📅 工作進度追蹤

### 第一階段：基礎建置 (2025-01-17)
- [x] 建立 Git Repository
- [x] 創建專案目錄結構
- [x] 設置工作文檔系統
- [ ] 設計整體視覺風格
- [ ] 建立基本 HTML 架構

### 第二階段：內容開發 (預計)
- [ ] 實作個人資訊區塊
- [ ] 實作自傳區塊
- [ ] 實作工作經歷區塊
- [ ] 實作技能專長區塊
- [ ] 實作教育背景區塊
- [ ] 實作專案作品區塊

### 第三階段：功能實作 (預計)
- [ ] 響應式設計實作
- [ ] PDF 下載功能開發
- [ ] 列印樣式優化
- [ ] 跨瀏覽器相容性測試

### 第四階段：部署與優化 (預計)
- [ ] GitHub Pages 部署設置
- [ ] SEO 優化
- [ ] 效能優化
- [ ] 最終測試與調整

---

## 📝 開發日誌

### 2025-01-17
- **建立專案**: 在 GitHub 上建立 MyResume Repository
- **初始化環境**: 設置本地開發環境 (C:\github\MyResume)
- **文檔建置**: 建立專案工作回憶文檔系統
- **規劃階段**: 完成整體架構設計和進度規劃
- **基礎開發**: 完成 HTML 結構、CSS 樣式設計、JavaScript 功能實作
- **PDF 功能**: 實作 html2pdf.js PDF 下載功能
- **響應式設計**: 完成手機、平板、電腦版適配
- **檔案結構調整**: 將 index.html 移至根目錄以符合 GitHub Pages 需求

---

## 💡 備註與想法

### 設計考量
- 重視視覺設計，展現專業形象
- 確保手機瀏覽體驗良好
- PDF 版本需保持良好的排版
- 載入速度要快

### 技術決策待定
- CSS 框架選擇 (Bootstrap vs Tailwind vs 原生)
- PDF 生成庫選擇 (html2pdf.js vs jsPDF vs Puppeteer)
- 是否使用建置工具 (Webpack/Vite)

### 後續擴充可能
- 多語言支援
- 深色模式
- 動畫效果
- 線上編輯功能

---

## 🔗 相關連結
- **Repository**: https://github.com/alals93vu6/MyResume
- **預期部署網址**: https://alals93vu6.github.io/MyResume
- **參考資源**: (待補充)