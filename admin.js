// بيانات اللاعبين
const playersData = {
  'login001': { name: 'لوجين أحمد', points: 1, absences: 0, rank: 1, password: 'login001' },
  'adam002': { name: 'آدم هاني', points: 3, absences: 0, rank: 2, password: 'adam002' },
  'ahmed003': { name: 'أحمد عطية', points: 1, absences: 1, rank: 3, password: 'ahmed003' },
  'retag004': { name: 'ريتاج أحمد', points: 0, absences: 1, rank: 4, password: 'retag004' },
  'omar005': { name: 'عمر عادل', points: 2, absences: 0, rank: 5, password: 'omar005' },
  'retag006': { name: 'ريتاج محمود', points: -1, absences: 1, rank: 6, password: 'retag006' },
  'judy007': { name: 'جودي محمود', points: -1, absences: 1, rank: 7, password: 'judy007' },
  'malak008': { name: 'ملك أيمن', points: 2, absences: 0, rank: 8, password: 'malak008' },
  'remas009': { name: 'ريماس طارق', points: 2, absences: 0, rank: 9, password: 'remas009' },
  'malak010': { name: 'ملك محمود السيد', points: 2, absences: 0, rank: 10, password: 'malak010' },
  'iten011': { name: 'إيتن فتحي', points: 3, absences: 0, rank: 11, password: 'iten011' },
  'mohamed012': { name: 'محمد عبد التام', points: 2, absences: 0, rank: 12, password: 'mohamed012' },
  'farah013': { name: 'فرح عادل', points: 2, absences: 0, rank: 13, password: 'farah013' },
  'nada014': { name: 'ندى أنور', points: 2, absences: 0, rank: 14, password: 'nada014' },
  'noreen015': { name: 'نورين محمود', points: 2, absences: 0, rank: 15, password: 'noreen015' },
  'sama016': { name: 'سما وليد', points: 2, absences: 0, rank: 16, password: 'sama016' },
  'rodina017': { name: 'رودينا إسلام', points: -2, absences: 2, rank: 17, password: 'rodina017' },
  'nelly018': { name: 'نيللي محمود', points: 2, absences: 0, rank: 18, password: 'nelly018' },
  'taha019': { name: 'طه إسلام طه', points: 1, absences: 0, rank: 19, password: 'taha019' },
  'adel020': { name: 'عادل صبري', points: 1, absences: 0, rank: 20, password: 'adel020' },
  'mohamedsaid021': { name: 'محمد سعيد', points: 3, absences: 0, rank: 21, password: 'mohamedsaid021' },
  'Afnan022': { name: 'أفنان عادل', points: 2, absences: 0, rank: 22, password: 'Afnan022' },
  'yasen000': { name: 'ياسين احمد', points: 2, absences: 0, rank: 23, password: 'yasen000' },
  'Hanen787': { name: 'حنين شوقى', points: 2, absences: 0, rank: 24, password: 'Hanen787' },
  'Elsaed025': { name: 'السيد امام', points: 2, absences: 0, rank: 25, password: 'Elsaed025' },
  'Basma0026': { name: 'بسمه اشرف ', points: 2, absences: 0, rank: 26, password: 'Basma0026' },
  'Malak0270': { name: 'ملك احمد', points: 1, absences: 0, rank: 27, password: 'Malak0270' },
  'Adam0028': { name: 'ادم عمرو', points: 0, absences: 1, rank: 28, password: 'Adam0028' },
  'tark111': { name: 'محمد طارق', points: 0, absences: 0, rank: 0, isAdmin: true, password: 'tark111' },
  'Belal': { name: 'بلال محمد', points: 0, absences: 0, rank: 0, isAdmin: true, password: 'Belal' }
};

// دالة لحساب الترتيب الديناميكي
function getPlayerRank(playerId) {
  const player = playersData[playerId];
  if (!player || player.isAdmin) return 0;
  const sorted = Object.entries(playersData)
    .filter(([id, p]) => !p.isAdmin)
    .sort(([idA, a], [idB, b]) => {
      if (b.points !== a.points) return b.points - a.points;
      return idA.localeCompare(idB);
    });
  const index = sorted.findIndex(([id]) => id === playerId);
  return index !== -1 ? index + 1 : 0;
}

// تهيئة الجسيمات في الخلفية
document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  // إضافة تأثير للعناصر عند التحميل
  const inputGroup = document.querySelector('.input-group');
  if (inputGroup) {
    setTimeout(() => {
      inputGroup.classList.add('animate__fadeInUp');
    }, 300);
  }
});

// تسجيل الدخول للمدرب
function adminLogin() {
  const password = document.getElementById('adminPassword').value.trim();

  if (password === 'Belal') {
    // إخفاء شاشة الدخول
    const loginCard = document.getElementById('adminLoginCard');
    loginCard.classList.add('animate__fadeOut');

    setTimeout(() => {
      loginCard.style.display = 'none';

      // عرض لوحة التحكم
      const dashboard = document.getElementById('adminDashboard');
      dashboard.style.display = 'block';
      dashboard.classList.add('animate__fadeIn');

      // ملء الجدول
      populateAdminTable();

      // تحديث شريط التقدم
      updateAdminProgress();
    }, 300);
  } else {
    showModal('خطأ', 'كلمة المرور غير صحيحة', 'error');
  }
}

// ملء جدول اللاعبين
function populateAdminTable() {
  const tableBody = document.getElementById('adminPlayersTable');
  tableBody.innerHTML = '';

  const sortedPlayers = Object.entries(playersData)
    .filter(([id, player]) => !player.isAdmin)
    .sort(([idA, a], [idB, b]) => {
      if (b.points !== a.points) return b.points - a.points;
      return idA.localeCompare(idB);
    });

  sortedPlayers.forEach(([id, player], index) => {
    const row = document.createElement('tr');
    row.style.borderBottom = '1px solid #ddd';
    row.style.textAlign = 'center';

    row.innerHTML = `
      <td style="padding: 10px 15px; font-weight: 600;">${id}</td>
      <td style="padding: 10px 15px; font-weight: 600; color: var(--primary-color);">${player.name}</td>
      <td style="padding: 10px 15px; font-weight: 600;">${index + 1}</td>
      <td style="padding: 10px 15px; font-weight: 600;">${player.points}</td>
      <td style="padding: 10px 15px; font-weight: 600; color: var(--error-color);">${player.absences}</td>
      <td style="padding: 10px 15px; font-weight: 600; color: var(--secondary-color);">${player.password}</td>
    `;

    tableBody.appendChild(row);
  });
}

// تحديث شريط التقدم للمدرب
function updateAdminProgress() {
  const progressBar = document.getElementById('adminBeltProgress');
  // حساب تقدم عشوائي للمدرب
  const progress = Math.min(100, Math.random() * 100);
  progressBar.style.width = `${progress}%`;
}

// تسجيل الخروج
function adminLogout() {
  const dashboard = document.getElementById('adminDashboard');
  dashboard.classList.add('animate__fadeOut');

  setTimeout(() => {
    // إعادة توجيه إلى الصفحة الرئيسية
    window.location.href = 'index.html';
  }, 300);
}

// عرض نافذة التنبيه
function showModal(title, message, type) {
  const modal = document.getElementById('modalOverlay');
  const modalBox = document.getElementById('modalBox');
  const modalIcon = document.getElementById('modalIcon');

  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalMessage').textContent = message;

  // تغيير الأيقونة حسب نوع التنبيه
  modalIcon.className = 'modal-icon';
  switch(type) {
    case 'error':
      modalIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
      modalIcon.style.backgroundColor = 'rgba(230, 57, 70, 0.1)';
      modalIcon.style.color = 'var(--error-color)';
      break;
    case 'success':
      modalIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
      modalIcon.style.backgroundColor = 'rgba(42, 157, 143, 0.1)';
      modalIcon.style.color = 'var(--success-color)';
      break;
    case 'warning':
      modalIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
      modalIcon.style.backgroundColor = 'rgba(233, 196, 106, 0.1)';
      modalIcon.style.color = 'var(--warning-color)';
      break;
    case 'info':
      modalIcon.innerHTML = '<i class="fas fa-info-circle"></i>';
      modalIcon.style.backgroundColor = 'rgba(29, 53, 87, 0.1)';
      modalIcon.style.color = 'var(--secondary-color)';
      break;
  }

  modal.style.display = 'flex';
  modalBox.classList.add('animate__bounceIn');
}

// إغلاق نافذة التنبيه
function closeModal() {
  const modal = document.getElementById('modalOverlay');
  const modalBox = document.getElementById('modalBox');

  modalBox.classList.remove('animate__bounceIn');
  modalBox.classList.add('animate__fadeOut');

  setTimeout(() => {
    modal.style.display = 'none';
    modalBox.classList.remove('animate__fadeOut');
  }, 300);
}
