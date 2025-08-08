// PDF 下載功能
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-pdf');
    const resumeContent = document.getElementById('resume-content');

    downloadBtn.addEventListener('click', function() {
        // 設置 PDF 選項
        const opt = {
            margin: 0.5,
            filename: '蘇明凱_履歷.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true,
                scrollX: 0,
                scrollY: 0
            },
            jsPDF: { 
                unit: 'in', 
                format: 'a4', 
                orientation: 'portrait',
                precision: 16
            },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        // 隱藏下載按鈕
        const downloadSection = document.querySelector('.download-section');
        downloadSection.style.display = 'none';

        // 生成 PDF
        html2pdf().set(opt).from(resumeContent).save().then(function() {
            // 恢復下載按鈕
            downloadSection.style.display = 'block';
            
            // 顯示成功消息
            showMessage('PDF 下載成功！', 'success');
        }).catch(function(error) {
            // 恢復下載按鈕
            downloadSection.style.display = 'block';
            
            // 顯示錯誤消息
            showMessage('PDF 下載失敗，請稍後再試', 'error');
            console.error('PDF生成錯誤:', error);
        });
    });

    // 圖片替換功能
    const profileImg = document.getElementById('profile-img');
    
    // 圖片載入錯誤處理
    profileImg.addEventListener('error', function() {
        // 如果圖片載入失敗，顯示預設頭像
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiM0YTkwZTIiLz4KPHN2ZyB4PSIzMCIgeT0iMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Im0xMiAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAgMmMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHoiLz4KPC9zdmc+Cjwvc3ZnPg==';
    });
});

// 顯示訊息函數
function showMessage(message, type) {
    // 創建訊息元素
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // 設置樣式
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        ${type === 'success' ? 'background-color: #28a745;' : 'background-color: #dc3545;'}
    `;
    
    // 添加到頁面
    document.body.appendChild(messageDiv);
    
    // 3秒後自動移除
    setTimeout(function() {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(function() {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

// 頁面載入動畫
document.addEventListener('DOMContentLoaded', function() {
    // 添加載入動畫效果
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section, index) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        
        setTimeout(function() {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// 響應式圖片處理
function handleResponsiveImages() {
    const profileImg = document.getElementById('profile-img');
    
    function updateImageSize() {
        if (window.innerWidth <= 768) {
            profileImg.style.width = '100px';
            profileImg.style.height = '100px';
        } else {
            profileImg.style.width = '120px';
            profileImg.style.height = '120px';
        }
    }
    
    updateImageSize();
    window.addEventListener('resize', updateImageSize);
}

// 初始化響應式圖片
document.addEventListener('DOMContentLoaded', handleResponsiveImages);