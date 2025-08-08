// PDF 下載功能
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-pdf');
    const resumeContent = document.getElementById('resume-content');

    downloadBtn.addEventListener('click', function() {
        // 顯示處理中訊息
        showMessage('正在生成PDF，請稍候...', 'info');
        
        // 隱藏下載按鈕
        const downloadSection = document.querySelector('.download-section');
        downloadSection.style.display = 'none';

        // 克隆內容並創建一個乾淨的容器
        const clonedContent = resumeContent.cloneNode(true);
        
        // 重組PDF版本的內容結構
        reorganizeContentForPDF(clonedContent);
        
        // 創建臨時容器
        const tempContainer = document.createElement('div');
        tempContainer.style.cssText = `
            position: absolute;
            left: -9999px;
            top: 0;
            width: 794px;
            background: white;
            font-family: 'Microsoft JhengHei', '微軟正黑體', Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
        `;
        tempContainer.appendChild(clonedContent);
        document.body.appendChild(tempContainer);

        // 等待一下讓瀏覽器渲染
        setTimeout(function() {
            // 設置 PDF 選項
            const opt = {
                margin: [15, 15, 15, 15],
                filename: '蘇明凱_履歷.pdf',
                image: { 
                    type: 'jpeg', 
                    quality: 0.92 
                },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: '#ffffff',
                    width: 794,
                    height: clonedContent.scrollHeight,
                    scrollX: 0,
                    scrollY: 0
                },
                jsPDF: { 
                    unit: 'px', 
                    format: [794, 1123], 
                    orientation: 'portrait',
                    hotfixes: ['px_scaling']
                }
            };

            // 生成 PDF
            html2pdf().set(opt).from(clonedContent).save().then(function() {
                // 清理臨時容器
                document.body.removeChild(tempContainer);
                
                // 恢復下載按鈕
                downloadSection.style.display = 'block';
                
                // 顯示成功消息
                showMessage('PDF 下載成功！', 'success');
            }).catch(function(error) {
                // 清理臨時容器
                if (document.body.contains(tempContainer)) {
                    document.body.removeChild(tempContainer);
                }
                
                // 恢復下載按鈕
                downloadSection.style.display = 'block';
                
                // 顯示錯誤消息
                showMessage('PDF 下載失敗，請稍後再試', 'error');
                console.error('PDF生成錯誤:', error);
            });
        }, 500);
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
    let bgColor = '#dc3545;'; // error default
    if (type === 'success') bgColor = '#28a745;';
    else if (type === 'info') bgColor = '#17a2b8;';
    
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
        background-color: ${bgColor}
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

// PDF內容重組函數
function reorganizeContentForPDF(clonedContent) {
    const mainRow = clonedContent.querySelector('.row');
    const leftColumn = mainRow.querySelector('.left-column');
    const rightColumn = mainRow.querySelector('.right-column');
    
    // 獲取各個區塊
    const personalInfo = leftColumn.querySelector('.section-card:nth-child(1)'); // 個人資料
    const skills = leftColumn.querySelector('.section-card:nth-child(2)'); // 技術專長
    const certificates = leftColumn.querySelector('.section-card:nth-child(3)'); // 證照
    const experiences = rightColumn.querySelector('.section-card');
    
    // 獲取所有經驗項目
    const allExperiences = experiences.querySelectorAll('.experience-item');
    const page1Experiences = Array.from(allExperiences).filter(exp => 
        exp.getAttribute('data-pdf-page') === '1'
    );
    const page2Experiences = Array.from(allExperiences).filter(exp => 
        exp.getAttribute('data-pdf-page') === '2'
    );
    
    // 清空原始結構
    mainRow.innerHTML = '';
    
    // 創建第一頁內容
    const page1 = document.createElement('div');
    page1.className = 'row page-one';
    page1.innerHTML = `
        <div class="col-lg-5 col-md-12 left-column">
        </div>
        <div class="col-lg-7 col-md-12 right-column">
            <section class="section-card">
                <h2 class="section-title">開發經驗</h2>
            </section>
        </div>
    `;
    
    // 添加左欄內容到第一頁
    page1.querySelector('.left-column').appendChild(personalInfo.cloneNode(true));
    page1.querySelector('.left-column').appendChild(certificates.cloneNode(true));
    
    // 添加第一頁經驗
    const page1ExperienceSection = page1.querySelector('.section-card');
    page1Experiences.forEach(exp => {
        page1ExperienceSection.appendChild(exp.cloneNode(true));
    });
    
    // 為第一頁最後一個經驗添加分頁標記
    const lastPage1Exp = page1ExperienceSection.lastElementChild;
    if (lastPage1Exp) {
        lastPage1Exp.classList.add('page-break-after');
    }
    
    // 創建第二頁內容
    const page2 = document.createElement('div');
    page2.className = 'row page-two';
    page2.innerHTML = `
        <div class="col-lg-5 col-md-12 left-column">
        </div>
        <div class="col-lg-7 col-md-12 right-column">
            <section class="section-card">
                <h2 class="section-title">開發經驗（續）</h2>
            </section>
        </div>
    `;
    
    // 添加技術專長到第二頁左欄
    page2.querySelector('.left-column').appendChild(skills.cloneNode(true));
    
    // 添加第二頁經驗
    const page2ExperienceSection = page2.querySelector('.section-card');
    page2Experiences.forEach(exp => {
        page2ExperienceSection.appendChild(exp.cloneNode(true));
    });
    
    // 添加頁面到主容器
    mainRow.appendChild(page1);
    mainRow.appendChild(page2);
}