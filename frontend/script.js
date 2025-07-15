// مدیریت شکایت اصلی
const chiefComplaint = document.querySelector('.amboss-textarea');
chiefComplaint.addEventListener('blur', function() {
  const complaint = this.value.trim().toLowerCase();
  const opqrstContainer = document.querySelector('.opqrst-container');
  
  if (complaint.includes('درد') || complaint.includes('تنگی')) {
    opqrstContainer.classList.remove('hidden');
  } else {
    opqrstContainer.classList.add('hidden');
  }
});

// مدیریت تب‌های سوابق
const historyTabs = document.querySelectorAll('.history-tab');
historyTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    historyTabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});

// مدیریت دکمه‌ها
document.querySelectorAll('.amboss-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (this.classList.contains('primary')) {
      // ذخیره اطلاعات
      alert('اطلاعات با موفقیت ذخیره شد!');
      
      // بازنشانی فرم
      document.querySelectorAll('input, textarea').forEach(field => {
        if (field.type !== 'button') field.value = '';
      });
    }
  });
});

// افزودن آیتم‌های پویا
document.querySelectorAll('.amboss-btn.outline').forEach(btn => {
  btn.addEventListener('click', function() {
    const container = this.previousElementSibling;
    const newItem = document.createElement('div');
    newItem.className = 'dynamic-item';
    newItem.innerHTML = `
      <input type="text" class="amboss-input" placeholder="مثلاً فشار خون بالا">
      <button class="amboss-icon-btn danger"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(newItem);
    
    // افزودن رویداد حذف
    newItem.querySelector('.amboss-icon-btn').addEventListener('click', function() {
      this.parentElement.remove();
    });
  });
});