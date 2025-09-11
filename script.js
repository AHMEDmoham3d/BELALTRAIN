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
  setTimeout(() => {
    inputGroup.classList.add('animate__fadeInUp');
  }, 300);

  // إضافة حدث لإظهار حقل كلمة المرور للمدربين
  document.getElementById('playerId').addEventListener('input', function() {
    const id = this.value.trim();
    const player = playersData[id];
    const passwordGroup = document.getElementById('passwordGroup');
    if (player && player.isAdmin) {
      passwordGroup.style.display = 'block';
      passwordGroup.classList.add('animate__fadeInUp');
    } else {
      passwordGroup.style.display = 'none';
    }
  });
});

// تسجيل الدخول
function login() {
  const inputId = document.getElementById('playerId').value.trim();
  const player = playersData[inputId];

  if (player) {
    // التحقق من كلمة المرور للمدربين
    if (player.isAdmin) {
      const password = document.getElementById('playerPassword').value.trim();
      if (password !== player.password) {
        showModal('خطأ', 'كلمة المرور غير صحيحة', 'error');
        return;
      }
    }

    // إخفاء شاشة الدخول بتأثير
    const loginCard = document.getElementById('loginCard');
    loginCard.classList.add('animate__fadeOut');

    setTimeout(() => {
      loginCard.style.display = 'none';

      // تعبئة بيانات اللاعب
      document.getElementById('playerName').textContent = player.name;
      document.getElementById('playerPoints').textContent = player.points;
      document.getElementById('playerAbsences').textContent = player.absences;
      document.getElementById('playerRank').textContent = getPlayerRank(inputId);

      // إذا كان المدرب أو المسؤول
      if (player.isAdmin) {
        showAllPlayersStats();
      } else {
        // عرض شاشة الملف الشخصي العادية بتأثير
        const profileCard = document.getElementById('profileCard');
        profileCard.style.display = 'block';
        profileCard.classList.add('animate__fadeIn');

        // تحريك العناصر بشكل متتابع
        animateElements([
          '.profile-header',
          '.stats-container',
          '.progress-container',
          '.quick-actions',
          '.resources-section',
          '.logout-btn'
        ]);
      }

      // تحديث شريط التقدم
      updateProgressBars();
    }, 300);
  } else {
    showModal('خطأ', 'المعرف غير صحيح، يرجى المحاولة مرة أخرى', 'error');
  }
}

function showAllPlayersStats() {
  const profileCard = document.getElementById('profileCard');
  profileCard.style.display = 'block';
  profileCard.classList.add('animate__fadeIn');

  const inputId = document.getElementById('playerId').value.trim();
  const isBelal = inputId === 'Belal';

  // إنشاء جدول لإحصائيات اللاعبين مع تنسيق احترافي
  let statsHTML = `
    <div class="all-players-stats animate__animated animate__fadeIn">
      <h3><i class="fas fa-users"></i> إحصائيات جميع اللاعبين</h3>
      <div class="stats-table-container" style="overflow-x:auto;">
        <table class="stats-table" style="width:100%; border-collapse: collapse; font-family: 'Tajawal', sans-serif;">
          <thead style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white;">
            <tr>
              <th style="padding: 12px 15px; border: 1px solid #ddd;">الترتيب</th>
              <th style="padding: 12px 15px; border: 1px solid #ddd;">الاسم</th>
              <th style="padding: 12px 15px; border: 1px solid #ddd;">النقاط</th>
              <th style="padding: 12px 15px; border: 1px solid #ddd;">الغيابات</th>
              ${isBelal ? '<th style="padding: 12px 15px; border: 1px solid #ddd;">كلمة المرور</th>' : ''}
            </tr>
          </thead>
          <tbody>
  `;

  const sortedPlayers = Object.entries(playersData)
    .filter(([id, player]) => !player.isAdmin)
    .sort(([idA, a], [idB, b]) => {
      if (b.points !== a.points) return b.points - a.points;
      return idA.localeCompare(idB);
    })
    .map(([id, player]) => player);

  sortedPlayers.forEach((player, index) => {
    statsHTML += `
      <tr style="border-bottom: 1px solid #ddd; text-align: center;">
        <td style="padding: 10px 15px;">${index + 1}</td>
        <td style="padding: 10px 15px; font-weight: 600; color: var(--primary-color);">${player.name}</td>
        <td style="padding: 10px 15px; font-weight: 600;">${player.points}</td>
        <td style="padding: 10px 15px; font-weight: 600; color: var(--error-color);">${player.absences}</td>
        ${isBelal ? `<td style="padding: 10px 15px; font-weight: 600; color: var(--secondary-color);">${player.password}</td>` : ''}
      </tr>
    `;
  });

  statsHTML += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  profileCard.innerHTML = `
    <div class="profile-header animate__animated">
      <div class="avatar-container">
        <div class="avatar-circle" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white;">
          <i class="fas fa-user-tie"></i>
        </div>
      </div>
      <h2 style="color: var(--primary-color); font-weight: 700;">${playersData[document.getElementById('playerId').value.trim()].name}</h2>
      <div class="belt-level" style="justify-content: center; gap: 10px;">
        <div class="belt-progress" id="beltProgress" style="width: 120px; height: 12px; border-radius: 6px;"></div>
        <span style="font-weight: 600; color: var(--secondary-color);">مدرب النظام</span>
      </div>
    </div>
    ${statsHTML}
    <button class="logout-btn animate__animated" onclick="logout()" style="margin-top: 25px; font-weight: 700;">
      <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
    </button>
  `;

  animateElements([
    '.profile-header',
    '.all-players-stats',
    '.logout-btn'
  ]);
}

// تسجيل الخروج
function logout() {
  const profileCard = document.getElementById('profileCard');
  profileCard.classList.add('animate__fadeOut');

  setTimeout(() => {
    profileCard.style.display = 'none';
    const loginCard = document.getElementById('loginCard');
    loginCard.style.display = 'block';
    loginCard.classList.remove('animate__fadeOut');
    loginCard.classList.add('animate__fadeIn');

    // مسح حقول الإدخال
    document.getElementById('playerId').value = '';
    document.getElementById('playerPassword').value = '';
    document.getElementById('passwordGroup').style.display = 'none';
  }, 300);
}

// إضافة نقاط
function addPoints() {
  const inputId = document.getElementById('playerId').value.trim();
  const player = playersData[inputId];

  if (player) {
    player.points += 10;
    document.getElementById('playerPoints').textContent = player.points;
    document.getElementById('playerRank').textContent = getPlayerRank(inputId);
    updateProgressBars();
    showModal('نجاح', 'تم إضافة 10 نقاط بنجاح', 'success');
  }
}

// إضافة غياب
function addAbsence() {
  const inputId = document.getElementById('playerId').value.trim();
  const player = playersData[inputId];

  if (player) {
    player.absences += 1;
    document.getElementById('playerAbsences').textContent = player.absences;
    document.getElementById('playerRank').textContent = getPlayerRank(inputId);
    updateProgressBars();
    showModal('تنبيه', 'تم تسجيل غياب للاعب', 'warning');
  }
}

function openResource(type) {
  let title = '';
  let message = '';

  switch(type) {
    case 'kata':
      title = 'تمارين الكاتا';
      message = 'سيتم فتح قسم تمارين الكاتا قريباً';
      break;
    case 'kihon':
      title = 'أساسيات الكيهون';
      message = 'سيتم فتح قسم أساسيات الكيهون قريباً';
      break;
    case 'rules':
      title = 'قواعد البطولات';
      message = 'سيتم فتح قسم قواعد البطولات قريباً';
      break;
  }

  showModal(title, message, 'info');
}

// تعديل فتح الفيديو ليعمل داخل نفس التبويب في البوباب
document.getElementById('modalOverlay').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});

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

// تحريك العناصر بشكل متتابع
function animateElements(selectors) {
  selectors.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      setTimeout(() => {
        element.classList.add('animate__fadeInUp');
      }, index * 100);
    }
  });
}

// تحديث أشرطة التقدم
function updateProgressBars() {
  const inputId = document.getElementById('playerId').value.trim();
  const player = playersData[inputId];

  if (player && !player.isAdmin) {
    // حساب نسبة التقدم الأسبوعي بناءً على النقاط فقط
    const weekProgress = Math.min(Math.max(0, player.points) * 5, 100);
    document.getElementById('weekProgress').style.width = `${weekProgress}%`;

    // حساب تقدم الحزام بناءً على النقاط فقط
    const beltProgress = Math.min(Math.max(0, player.points) * 0.5, 100);
    document.querySelector('.belt-progress').style.width = `${beltProgress}%`;
  }
}
