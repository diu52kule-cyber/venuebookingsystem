// ===================== DATA =====================
const CONF_HALLS = [
  { id:'ch-newton', name:'Newton Suite', room:'ROOM 402', desc:'High-performance acoustics for research meetings & seminars.', capacity:12, features:[{icon:'ac_unit',label:'AC'},{icon:'videocam',label:'Camera'},{icon:'cast',label:'Projector'},{icon:'groups',label:'12 Seats'}], available:true },
  { id:'ch-curie', name:'Curie Room', room:'ROOM 305', desc:'Interactive touch panels and fully modular seating.', capacity:8, features:[{icon:'ac_unit',label:'AC'},{icon:'cast_connected',label:'Screen'},{icon:'wifi',label:'WiFi'},{icon:'groups',label:'8 Seats'}], available:true },
  { id:'ch-hawking', name:'Hawking Hub', room:'ROOM 112', desc:'Panoramic views with elite video conferencing suite.', capacity:20, features:[{icon:'ac_unit',label:'AC'},{icon:'videocam',label:'Camera'},{icon:'mic',label:'Mic'},{icon:'groups',label:'20 Seats'}], available:true },
  { id:'ch-turing', name:'Turing Lab', room:'ROOM 518', desc:'Secure digital workstations for confidential board sessions.', capacity:6, features:[{icon:'ac_unit',label:'AC'},{icon:'computer',label:'Workstation'},{icon:'security',label:'Secure'},{icon:'groups',label:'6 Seats'}], available:false },
  { id:'ch-darwin', name:'Darwin Lounge', room:'ROOM 220', desc:'Ergonomic design crafted for long-duration planning sessions.', capacity:15, features:[{icon:'ac_unit',label:'AC'},{icon:'video_call',label:'Video Conf'},{icon:'groups',label:'15 Seats'},{icon:'coffee',label:'Lounge'}], available:true },
];

const AUDITORIUMS = [
  { id:'audi-a1', name:'Grand Academic Hall', room:'AUDI A1', desc:'Convocations & Keynotes', capacity:500,
    features:[{icon:'surround_sound',label:'Sound'},{icon:'videocam',label:'Recording'},{icon:'mic',label:'PA System'},{icon:'theater_comedy',label:'Stage'}],
    image:'https://lh3.googleusercontent.com/aida-public/AB6AXuD8GVVkNaNxzPwXw5gW6yC9oskpv_NGrayLH5vwyttq3KxEaa8eIxqF9lINbNXob6syq5qCtiLGwY-VNVk3X5MqmWFK-IO0_hjU7f2E-iZxwsRsVvTcicBAxa8PviJSbT0kO_tcVs9UZ7VRMCl9nqGpdbcefKSZu2zXCPBnltJ2B6qk8SmOXW5DYCwrsk8I1TvV_NIR5_C9SdRbcBZZY0-he1TRZcWwexuR9Zvbv3jMAAyFD3zvsQpTHmteWc2UsfBcoM5ILTn03Cg' },
  { id:'audi-b4', name:'The Innovation Theater', room:'AUDI B4', desc:'Digital Presentations & Conferences', capacity:250,
    features:[{icon:'present_to_all',label:'Presentation'},{icon:'videocam',label:'Recording'},{icon:'wifi',label:'WiFi'},{icon:'broadcast_on_home',label:'Live Stream'}],
    image:'https://lh3.googleusercontent.com/aida-public/AB6AXuAgkbT63Xj1ftsCkCnB5LTKXQMDLmERfWQ25Juo_toR76chcaCBrYkMA0YmaCFKneVCtvc53o0YPOjz2JqYPcbLmnmLlhb4EAbJxPxnGVwJS2SxZZHcM9LVm4P7UnKqmbntVNiGWqo_zl7CXfXgSsXTvMD726lwxJokz-xJ2fNhZib9LD__eGaEZ2Wq86w1ZzsZwH4cV7ljmpwGupSniWY1oa7G9g1OEa70GfDxetMRZkN7zPQIWiKtyIgBPVS6uAbXEV01dACAEUY' },
  { id:'audi-c2', name:'Renaissance Stage', room:'AUDI C2', desc:'Arts & Cultural Events', capacity:350,
    features:[{icon:'theater_comedy',label:'Stage'},{icon:'mic',label:'PA System'},{icon:'videocam',label:'Recording'},{icon:'light_mode',label:'Lighting'}],
    image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDyPc_7zJaduWquoO9K33lbGEGBnZXReF8aXw4PpwZ7pyT0__elyxQyOvXv6UIHZoDk5hxPKBcrHJWCPTnDFlA8vL9Be6DZ0NU5AVntof2CbrlSVSJ2IrpDQkrUKAZc3s9PUtFZdGGQNxgPVos4Yzq2Jl-DyfquiTVvuSm4PptJl-0xekihQr-VrBVcrGglATAhWw51Cf0WVI9RMOCou7z7qojgSPwORoRxXMqf05w3RnqCE_9ClQqG19_H8PRzsoWQ_zVUF7t9JF0' },
];

const MFC = {
  id:'mfc-01', name:'Multi Facility Center (MFC)', room:'MFC-01',
  desc:'The pinnacle of campus infrastructure. Integrates advanced lighting, 7.1 surround sound, and high-speed satellite broadcasting capabilities. Designed for international symposiums and large-scale corporate collaborations.',
  capacity:1200, features:[{icon:'surround_sound',label:'Spatial Audio'},{icon:'broadcast_on_home',label:'Live Stream'},{icon:'restaurant',label:'Catering'},{icon:'translate',label:'Interpretation'}],
  image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDSq4dgWeIcLqj2UZBiPViOKin3OWfdCqEHDevaQfFWHYhYIC1KPYlP_XVdEhCcwaxwliNvNEXIrN5fiVbRv3bYXeHxHbTnT92RLM8Ka0-EkkDKlu10uivqy7o7CXT6946E9CFC_QzNUvJOZqI9vT2u-_GBtn1GB5xIgdstG4lm6wXHBw9dyLhmqUliRR_zMA9IPits5FyMjyJIp7__WiLXvUF70Xyqko4mP-ZR4gGcJk6r72Dqy6qg5DeMgU9zLeKO7eUY5HyPYRs'
};

const SPECIAL_ROOMS = [
  { id:'sp-reslab', name:'Advanced Research Lab', room:'LAB-R7', desc:'Specialised instruments for advanced research. Requires Departmental HOD authorization and safety induction.', icon:'science' },
  { id:'sp-archive', name:'University Archives', room:'ARCH-B1', desc:'Secure repository of historical records, manuscripts, and institutional documents. Supervised access only.', icon:'archive' },
  { id:'sp-observatory', name:'Rooftop Observatory', room:'ROOF-T1', desc:'Open-air facility with professional telescope access for astronomy events and stargazing sessions.', icon:'telescope' },
  { id:'sp-sports', name:'Indoor Sports Complex', room:'SPORT-G1', desc:'Multi-purpose indoor arena for sports tournaments, wellness programs, and large-scale campus gatherings.', icon:'sports_basketball' },
];

function getAllFacilities() {
  const custom = (typeof getCustomFacilities === 'function') ? getCustomFacilities() : [];
  // Build a set of overridden/deleted base IDs
  const overrideIds = new Set(custom.map(c=>c.id));
  const base = [
    ...CONF_HALLS.map(f=>({...f,type:'conferenceHall',typeName:'Conference Hall',_base:true})),
    ...AUDITORIUMS.map(f=>({...f,type:'auditorium',typeName:'Auditorium',_base:true})),
    {...MFC, type:'mfc', typeName:'Multi Facility Center',_base:true},
    ...SPECIAL_ROOMS.map(f=>({...f,type:'special',typeName:'Special Permission',_base:true})),
  ].filter(f => !overrideIds.has(f.id)); // remove any base facility that has an override or tombstone
  // Filter out tombstoned entries from custom
  const liveCustom = custom.filter(c => !c._deleted);
  return [...base, ...liveCustom];
}

function getFacilityById(id) {
  return getAllFacilities().find(f=>f.id===id);
}

// ===================== STATE =====================
let currentUser = JSON.parse(localStorage.getItem('ur_user') || 'null');
let currentPage = currentUser ? (currentUser.role==='admin'?'admin-pending':'dashboard') : 'login';
let bookingFilter = 'all';
let adminFilter = 'pending';

// ===================== STORAGE =====================
function getBookings() { return JSON.parse(localStorage.getItem('ur_bookings')||'[]'); }
function saveBookings(b) { localStorage.setItem('ur_bookings', JSON.stringify(b)); }

function seedDemo() {
  if (localStorage.getItem('ur_seeded2')) return;
  const now = new Date();
  const d = (offset) => { const dt=new Date(now); dt.setDate(dt.getDate()+offset); return dt.toISOString().split('T')[0]; };
  saveBookings([
    { id:'bk-001', facilityId:'ch-newton', facilityName:'Newton Suite', room:'ROOM 402', typeName:'Conference Hall',
      date:d(2), startTime:'10:00', endTime:'12:00', purpose:'Department Research Review Meeting',
      attendees:8, requirements:'Need whiteboard markers and printouts', userName:'Dr. Elena Richards',
      userEmail:'faculty@university.edu', status:'pending', createdAt:new Date(Date.now()-3600000*2).toISOString() },
    { id:'bk-002', facilityId:'audi-a1', facilityName:'Grand Academic Hall', room:'AUDI A1', typeName:'Auditorium',
      date:d(6), startTime:'09:00', endTime:'13:00', purpose:'Annual Convocation Ceremony 2026',
      attendees:450, requirements:'Stage lighting and sound check required', userName:'Prof. James Wilson',
      userEmail:'james.wilson@university.edu', status:'approved', adminNote:'Approved. Coordinate with facilities team 24hrs prior.', createdAt:new Date(Date.now()-86400000*2).toISOString(), updatedAt:new Date(Date.now()-86400000).toISOString() },
    { id:'bk-003', facilityId:'ch-curie', facilityName:'Curie Room', room:'ROOM 305', typeName:'Conference Hall',
      date:d(1), startTime:'14:00', endTime:'16:00', purpose:'PhD Defence Presentation – Batch 2026',
      attendees:6, requirements:'Projector and quiet environment required', userName:'Dr. Sarah Chen',
      userEmail:'sarah.chen@university.edu', status:'rejected', adminNote:'Room reserved for network maintenance. Please reschedule.', createdAt:new Date(Date.now()-86400000*3).toISOString(), updatedAt:new Date(Date.now()-86400000*2).toISOString() },
    { id:'bk-004', facilityId:'audi-b4', facilityName:'The Innovation Theater', room:'AUDI B4', typeName:'Auditorium',
      date:d(10), startTime:'11:00', endTime:'14:00', purpose:'Tech Summit 2026 – Guest Lecture Series',
      attendees:200, requirements:'Live streaming setup needed', userName:'Dr. Ravi Mehta',
      userEmail:'ravi.mehta@university.edu', status:'pending', createdAt:new Date(Date.now()-3600000*5).toISOString() },
    { id:'bk-005', facilityId:'mfc-01', facilityName:'Multi Facility Center', room:'MFC-01', typeName:'Multi Facility Center',
      date:d(14), startTime:'08:00', endTime:'18:00', purpose:'International Academic Symposium 2026',
      attendees:900, requirements:'Full catering, interpretation services for 3 languages, live broadcast', userName:'Prof. Alice Fernandez',
      userEmail:'alice.fernandez@university.edu', status:'pending', createdAt:new Date(Date.now()-3600000*1).toISOString() },
  ]);
  localStorage.setItem('ur_seeded2','1');
}

// ===================== AUTH =====================
function loginAs(role) {
  const email = document.getElementById('login-email')?.value.trim() || '';
  const pass = document.getElementById('login-pass')?.value || '';
  if (!email) { showToast('Please enter your email address','error'); return; }
  if (role==='admin' && pass !== 'admin123') { showToast('Invalid admin credentials','error'); return; }
  if (role==='faculty' && pass !== 'faculty123') { showToast('Invalid credentials. Hint: faculty123','error'); return; }
  const names = { 'faculty@university.edu':'Dr. Elena Richards', 'admin@university.edu':'System Admin' };
  currentUser = {
    name: names[email] || (role==='admin'?'System Admin':'Dr. '+email.split('@')[0].replace(/\./g,' ').replace(/\b\w/g,c=>c.toUpperCase())),
    email, role,
    dept: role==='admin'?'Administration':'Senior Faculty',
    avatar: role==='admin'?'admin_panel_settings':'school'
  };
  localStorage.setItem('ur_user', JSON.stringify(currentUser));
  currentPage = role==='admin'?'admin-pending':'dashboard';
  render(); showToast(`Welcome back, ${currentUser.name.split(' ').slice(-1)[0]}!`,'success');
}

function logout() {
  currentUser = null; localStorage.removeItem('ur_user'); currentPage='login'; render();
}

function fillDemo(role) {
  if (role==='faculty') { document.getElementById('login-email').value='faculty@university.edu'; document.getElementById('login-pass').value='faculty123'; }
  else { document.getElementById('login-email').value='admin@university.edu'; document.getElementById('login-pass').value='admin123'; }
}

// ===================== VENUE LIST POPUP =====================
function openVenueList() {
  const allF = getAllFacilities().filter(f => f.type !== 'special' && f.available !== false);
  const grouped = [
    { label: 'Conference Halls', icon: 'meeting_room', items: allF.filter(f=>f.type==='conferenceHall') },
    { label: 'Auditoriums', icon: 'theater_comedy', items: allF.filter(f=>f.type==='auditorium') },
    { label: 'Multi Facility Center', icon: 'domain', items: allF.filter(f=>f.type==='mfc') },
  ];
  document.getElementById('modal-overlay').innerHTML = `
  <div class="fixed inset-0 bg-[#1C1B20]/60 backdrop-blur-sm flex items-center justify-center p-4 fade-in" onclick="handleOverlayClick(event)">
    <div class="bg-[#FCF8FF] rounded-3xl shadow-2xl w-full max-w-md scale-in overflow-hidden" onclick="event.stopPropagation()">
      <div class="bg-gradient-to-br from-[#534A92] to-[#6C63AC] p-6 text-white">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl font-black">Book a Facility</h2>
            <p class="text-white/60 text-sm mt-1">Select a venue to continue</p>
          </div>
          <button onclick="closeModal()" class="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
            <span class="material-symbols-outlined text-white text-xl">close</span>
          </button>
        </div>
      </div>
      <div class="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
        ${grouped.map(g => g.items.length ? `
        <div>
          <div class="flex items-center gap-2 px-2 mb-2">
            <span class="material-symbols-outlined text-[#6C63AC] text-lg">${g.icon}</span>
            <p class="text-xs font-black text-[#787581] uppercase tracking-widest">${g.label}</p>
          </div>
          <div class="space-y-2">
            ${g.items.map(f => `
            <button onclick="openBooking('${f.id}')" class="w-full flex items-center gap-4 bg-white hover:bg-[#F7F2F9] border-2 border-transparent hover:border-[#6C63AC]/20 rounded-2xl p-4 text-left transition-all group">
              <div class="w-10 h-10 bg-[#e5deff] rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-[#534A92] text-lg">${g.icon}</span>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-black text-[#1c1b20] text-sm">${f.name}</p>
                <p class="text-xs text-[#787581] font-medium">${f.room}${f.capacity?' · '+f.capacity+' seats':''}</p>
              </div>
              <span class="material-symbols-outlined text-[#c9c4d2] group-hover:text-[#6C63AC] transition-colors">chevron_right</span>
            </button>`).join('')}
          </div>
        </div>` : '').join('')}
      </div>
    </div>
  </div>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

// Faculty timetable slot selection
let _facultySelectedSlots = new Set(); // "date|slot"

function toggleFacultySlot(facilityId, dateStr, slot) {
  const bookings = getBookings();
  if(isSlotBooked(bookings, facilityId, dateStr, slot)) return;
  const today = new Date().toISOString().split('T')[0];
  if(dateStr < today || (dateStr===today && parseInt(slot) < new Date().getHours())) return;
  const key = dateStr+'|'+slot;
  if(_facultySelectedSlots.has(key)) {
    _facultySelectedSlots.delete(key);
  } else {
    _facultySelectedSlots.add(key);
  }
  // Auto-set start/end time from selected slots
  const allSelected = [..._facultySelectedSlots].filter(k=>k.startsWith(dateStr+'|')).sort();
  if(allSelected.length > 0) {
    const startHour = parseInt(allSelected[0].split('|')[1]);
    const endHour = parseInt(allSelected[allSelected.length-1].split('|')[1]) + 1;
    const pad = h => String(h).padStart(2,'0')+':00';
    const startEl = document.getElementById('bk-start');
    const endEl = document.getElementById('bk-end');
    if(startEl) startEl.value = pad(startHour);
    if(endEl) endEl.value = pad(endHour);
  }
  refreshFacultyTimetable(facilityId);
}

function refreshFacultyTimetable(facilityId) {
  const dateVal = document.getElementById('bk-date')?.value;
  const container = document.getElementById('tt-container');
  if(container && dateVal) container.innerHTML = buildTimetable(facilityId, dateVal);
}

// ===================== BOOKING MODAL (SPLIT PANEL) =====================
function openBooking(facilityId) {
  _bookingAmenities = new Set();
  _facultySelectedSlots = new Set();
  const f = getFacilityById(facilityId);
  if (!f) return;
  if (f.available===false) { showToast('This facility is currently unavailable','error'); return; }
  const today = new Date().toISOString().split('T')[0];

  document.getElementById('modal-overlay').innerHTML = `
  <div class="fixed inset-0 bg-[#1C1B20]/60 backdrop-blur-sm flex items-center justify-center p-4 fade-in" onclick="handleOverlayClick(event)">
    <div class="bg-[#FCF8FF] rounded-3xl shadow-2xl w-full scale-in overflow-hidden flex flex-col" style="max-width:900px;max-height:92vh" onclick="event.stopPropagation()">
      <!-- Header -->
      <div class="bg-gradient-to-br from-[#534A92] to-[#6C63AC] p-5 text-white flex-shrink-0">
        <div class="flex justify-between items-start">
          <div>
            <span class="text-xs font-black uppercase tracking-widest text-white/60">${f.typeName}</span>
            <h2 class="text-xl font-black mt-0.5">${f.name} <span class="text-white/50 font-medium text-sm">${f.room}</span></h2>
          </div>
          <button onclick="closeModal()" class="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors flex-shrink-0">
            <span class="material-symbols-outlined text-white text-xl">close</span>
          </button>
        </div>
        <div class="flex gap-4 mt-3 flex-wrap">
          ${(f.features||[]).map(ft=>`<div class="flex items-center gap-1.5 text-xs font-semibold text-white/80"><span class="material-symbols-outlined text-sm">${ft.icon}</span>${ft.label}</div>`).join('')}
        </div>
      </div>
      <!-- Body: two columns -->
      <div class="flex flex-1 overflow-hidden min-h-0">
        <!-- Left: Booking Form -->
        <div class="w-80 flex-shrink-0 p-5 space-y-4 overflow-y-auto border-r border-[#E5E1E8]">
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Date</label>
            <input id="bk-date" type="date" min="${today}" value="${today}" onchange="refreshTimetable('${facilityId}')" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
          </div>
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Attendees</label>
            <input id="bk-attendees" type="number" min="1" max="${f.capacity||9999}" placeholder="${f.capacity?'Max '+f.capacity:''}" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Start Time</label>
              <input id="bk-start" type="time" value="09:00" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">End Time</label>
              <input id="bk-end" type="time" value="11:00" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Event / Purpose</label>
            <input id="bk-purpose" type="text" placeholder="e.g. Department Seminar…" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
          </div>
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Special Requirements <span class="text-[#787581] normal-case font-medium">(optional)</span></label>
            <textarea id="bk-req" rows="2" placeholder="AV setup, catering…" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent resize-none transition-all"></textarea>
          </div>
          <!-- Amenities -->
          ${(f.amenities||f.features||[]).length > 0 ? `
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-2">Request Amenities <span class="text-[#787581] normal-case font-medium">(select what you need)</span></label>
            <div class="grid grid-cols-3 gap-1.5">
              ${(f.amenities||f.features||[]).map(a=>`
              <button type="button" id="bam-${a.id||a.label}" onclick="toggleBookingAmenity('${a.id||a.label}')"
                class="flex flex-col items-center gap-0.5 p-2 rounded-xl border-2 border-[#e5e1e8] bg-white text-[#787581] hover:border-[#c9c4d2] transition-all text-center bam-btn">
                <span class="material-symbols-outlined" style="font-size:16px">${a.icon||'check'}</span>
                <span style="font-size:9px;font-weight:700;line-height:1.2">${a.label}</span>
              </button>`).join('')}
            </div>
          </div>` : ''}
          <div class="flex gap-3 pt-1">
            <button onclick="closeModal()" class="flex-1 py-3 rounded-full bg-[#E5E1E8] text-[#474550] font-bold text-sm hover:bg-[#c9c4d2] transition-colors">Cancel</button>
            <button onclick="submitBooking('${facilityId}')" class="flex-1 py-3 rounded-full bg-gradient-to-br from-[#534A92] to-[#6C63AC] text-white font-black text-sm shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-1.5">
              <span class="material-symbols-outlined text-sm">send</span> Submit
            </button>
          </div>
        </div>
        <!-- Right: Weekly Timetable -->
        <div class="flex-1 p-5 overflow-auto min-w-0">
          <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
            <p class="text-sm font-black text-[#1c1b20]">Weekly Availability</p>
            <div class="flex items-center gap-3 text-xs font-semibold text-[#787581] flex-wrap">
              <span class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded" style="background:#fee2e2;border:1.5px solid #fca5a5"></span>Booked</span>
              <span class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded" style="background:#d1fae5;border:1.5px solid #6ee7b7"></span>Available</span>
              <span class="flex items-center gap-1"><span class="inline-block w-3 h-3 rounded" style="background:#818cf8;border:1.5px solid #6366f1"></span>Selected</span>
            </div>
          </div>
          <p class="text-xs text-[#787581] mb-3">Click green slots to select your time. Start & End times update automatically.</p>
          <div id="tt-container">
            ${buildTimetable(facilityId, today)}
          </div>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function getWeekDates(dateStr) {
  const base = new Date(dateStr + 'T00:00:00');
  const day = base.getDay(); // 0=Sun
  const monday = new Date(base);
  monday.setDate(base.getDate() - (day === 0 ? 6 : day - 1));
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
}

const TIME_SLOTS = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
const DAY_LABELS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

function isSlotBooked(bookings, facilityId, dateStr, slotStart) {
  const slotHour = parseInt(slotStart);
  return bookings.some(b => {
    if (b.facilityId !== facilityId || b.date !== dateStr) return false;
    if (b.status === 'cancelled' || b.status === 'rejected') return false;
    const bStart = parseInt(b.startTime);
    const bEnd = parseInt(b.endTime);
    return slotHour >= bStart && slotHour < bEnd;
  });
}

function buildTimetable(facilityId, dateStr) {
  const weekDates = getWeekDates(dateStr);
  const bookings = getBookings();
  const today = new Date().toISOString().split('T')[0];

  let html = `<div style="overflow-x:auto">
  <table style="border-collapse:separate;border-spacing:3px;min-width:520px;width:100%">
    <thead>
      <tr>
        <th style="width:52px"></th>
        ${weekDates.map((d, i) => {
          const isSelected = d === dateStr;
          const dateObj = new Date(d + 'T00:00:00');
          const dayNum = dateObj.getDate();
          const mon = dateObj.toLocaleDateString('en-IN',{month:'short'});
          return `<th style="text-align:center;padding:4px 2px">
            <div style="font-size:10px;font-weight:800;color:${isSelected?'#534A92':'#787581'};text-transform:uppercase;letter-spacing:.05em">${DAY_LABELS[i]}</div>
            <div style="font-size:11px;font-weight:900;color:${isSelected?'#534A92':'#1c1b20'};background:${isSelected?'#e5deff':'transparent'};border-radius:6px;padding:2px 4px">${dayNum} ${mon}</div>
          </th>`;
        }).join('')}
      </tr>
    </thead>
    <tbody>
      ${TIME_SLOTS.map((slot, si) => {
        const nextSlot = TIME_SLOTS[si+1] || '19:00';
        return `<tr>
          <td style="font-size:10px;font-weight:700;color:#787581;text-align:right;padding-right:6px;white-space:nowrap;vertical-align:middle">${slot}</td>
          ${weekDates.map(d => {
            const booked = isSlotBooked(bookings, facilityId, d, slot);
            const isPast = d < today || (d === today && parseInt(slot) < new Date().getHours());
            const isFacultySelected = _facultySelectedSlots.has(d+'|'+slot);
            let bg, border, cursor, title;
            if(isFacultySelected) { bg='#818cf8'; border='#6366f1'; cursor='pointer'; title='Selected – click to deselect'; }
            else if(isPast) { bg='#f1ecf3'; border='#e5e1e8'; cursor='not-allowed'; title='Past'; }
            else if(booked) { bg='#fee2e2'; border='#fca5a5'; cursor='not-allowed'; title='Already booked'; }
            else { bg='#d1fae5'; border='#6ee7b7'; cursor='pointer'; title='Click to select '+slot+'–'+nextSlot; }
            const clickable = !booked && !isPast;
            return `<td onclick="${clickable?`toggleFacultySlot('${facilityId}','${d}','${slot}')`:'void(0)'}" 
              style="background:${bg};border:1.5px solid ${border};border-radius:6px;height:28px;cursor:${cursor};transition:background .15s;" 
              title="${title}"></td>`;
          }).join('')}
        </tr>`;
      }).join('')}
    </tbody>
  </table></div>`;
  return html;
}

function refreshTimetable(facilityId) {
  const dateVal = document.getElementById('bk-date')?.value;
  const container = document.getElementById('tt-container');
  if (container && dateVal) {
    container.innerHTML = buildTimetable(facilityId, dateVal);
  }
}

function openSpecialRequest(facilityId) {
  const f = getFacilityById(facilityId);
  document.getElementById('modal-overlay').innerHTML = `
  <div class="fixed inset-0 bg-[#1C1B20]/70 backdrop-blur-sm flex items-center justify-center p-4 fade-in" onclick="handleOverlayClick(event)">
    <div class="bg-[#1C1B20] rounded-3xl shadow-2xl w-full max-w-md scale-in overflow-hidden text-white" onclick="event.stopPropagation()">
      <div class="p-6 border-b border-white/10">
        <div class="flex justify-between items-start">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-[#f6e477]/20 rounded-2xl flex items-center justify-center">
              <span class="material-symbols-outlined text-[#f6e477] text-2xl">${f?.icon||'key'}</span>
            </div>
            <div>
              <p class="text-xs font-black uppercase tracking-widest text-white/40">Special Permission</p>
              <h2 class="text-xl font-black">${f?.name||'Special Access'}</h2>
              <p class="text-white/50 text-sm">${f?.room||''}</p>
            </div>
          </div>
          <button onclick="closeModal()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <span class="material-symbols-outlined text-white text-xl">close</span>
          </button>
        </div>
      </div>
      <div class="p-6 space-y-4">
        <div>
          <label class="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Proposed Date</label>
          <input id="sp-date" type="date" class="w-full bg-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white border-2 border-white/10 transition-all"/>
        </div>
        <div>
          <label class="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Purpose / Justification</label>
          <textarea id="sp-purpose" rows="3" placeholder="Describe your purpose and justify the need for special access..." class="w-full bg-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white border-2 border-white/10 resize-none transition-all placeholder-white/30"></textarea>
        </div>
        <div class="bg-[#f6e477]/10 border border-[#f6e477]/20 rounded-2xl p-4">
          <p class="text-xs text-[#f6e477]/80 leading-relaxed"><span class="material-symbols-outlined text-sm mr-1" style="vertical-align:middle">warning</span>Special permissions require Dean's Office approval. Average processing time: <strong>48 hours</strong>.</p>
        </div>
        <div class="flex gap-3 pt-2">
          <button onclick="closeModal()" class="flex-1 py-3 rounded-full bg-white/10 text-white/70 font-bold text-sm hover:bg-white/20 transition-colors">Cancel</button>
          <button onclick="submitSpecial('${facilityId}')" class="flex-1 py-3 rounded-full bg-[#f6e477] text-[#1C1B20] font-black text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-sm">description</span> Submit Request
          </button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function handleOverlayClick(e) { if(e.target===e.currentTarget) closeModal(); }
function closeModal() { document.getElementById('modal-overlay').innerHTML=''; document.getElementById('modal-overlay').classList.add('hidden'); }

let _bookingAmenities = new Set();

function toggleBookingAmenity(id) {
  const btn = document.getElementById('bam-'+id);
  if(!btn) return;
  if(_bookingAmenities.has(id)) {
    _bookingAmenities.delete(id);
    btn.style.borderColor='#e5e1e8'; btn.style.background='white'; btn.style.color='#787581';
  } else {
    _bookingAmenities.add(id);
    btn.style.borderColor='#6C63AC'; btn.style.background='#e5deff'; btn.style.color='#534A92';
  }
}

function submitBooking(facilityId) {
  const f = getFacilityById(facilityId);
  const date=document.getElementById('bk-date')?.value;
  const start=document.getElementById('bk-start')?.value;
  const end=document.getElementById('bk-end')?.value;
  const purpose=document.getElementById('bk-purpose')?.value.trim();
  const attendees=parseInt(document.getElementById('bk-attendees')?.value)||1;
  const req=document.getElementById('bk-req')?.value.trim();
  if(!date){showToast('Please select a date','error');return;}
  if(!purpose){showToast('Please enter the event purpose','error');return;}
  if(start>=end){showToast('End time must be after start time','error');return;}
  const selectedAmenities = [..._bookingAmenities];
  _bookingAmenities = new Set();
  const bks=getBookings();
  const newBk={
    id:'bk-'+Date.now(), facilityId, facilityName:f.name, room:f.room, typeName:f.typeName||f.type,
    date, startTime:start, endTime:end, purpose, attendees, requirements:req,
    amenities: selectedAmenities,
    userName:currentUser.name, userEmail:currentUser.email,
    status:'pending', createdAt:new Date().toISOString()
  };
  bks.unshift(newBk);
  saveBookings(bks);
  closeModal();
  showToast('Booking request submitted! Awaiting admin approval.','success');
  if(currentPage==='my-bookings'||currentPage==='dashboard') render();
}

function submitSpecial(facilityId) {
  const f = getFacilityById(facilityId);
  const date=document.getElementById('sp-date')?.value;
  const purpose=document.getElementById('sp-purpose')?.value.trim();
  if(!date){showToast('Please select a date','error');return;}
  if(!purpose){showToast('Please describe your purpose','error');return;}
  const bks=getBookings();
  bks.unshift({
    id:'bk-'+Date.now(), facilityId, facilityName:f.name, room:f.room, typeName:'Special Permission',
    date, startTime:'TBD', endTime:'TBD', purpose, attendees:1, requirements:'',
    userName:currentUser.name, userEmail:currentUser.email,
    status:'pending', createdAt:new Date().toISOString()
  });
  saveBookings(bks);
  closeModal();
  showToast('Special permission request submitted!','success');
}

function cancelBooking(id) {
  if(!confirm('Cancel this booking request?')) return;
  const bks=getBookings();
  const i=bks.findIndex(b=>b.id===id);
  if(i>=0){bks[i].status='cancelled';saveBookings(bks);}
  render(); showToast('Booking cancelled','info');
}

// ===================== ADMIN ACTIONS =====================
function approveBooking(id) {
  const bks=getBookings();
  const i=bks.findIndex(b=>b.id===id);
  if(i>=0){bks[i].status='approved';bks[i].updatedAt=new Date().toISOString();}
  saveBookings(bks); render(); showToast('Booking approved successfully','success');
}

function rejectBooking(id) {
  const note=prompt('Enter reason for rejection (optional):');
  if(note===null)return;
  const bks=getBookings();
  const i=bks.findIndex(b=>b.id===id);
  if(i>=0){bks[i].status='rejected';bks[i].adminNote=note||'';bks[i].updatedAt=new Date().toISOString();}
  saveBookings(bks); render(); showToast('Booking rejected','info');
}

// ===================== TOAST =====================
function showToast(msg, type='info') {
  const colors={success:'bg-green-500',error:'bg-red-500',info:'bg-[#534A92]',warning:'bg-amber-500'};
  const icons={success:'check_circle',error:'error',info:'info',warning:'warning'};
  const tc=document.getElementById('toast-container');
  const t=document.createElement('div');
  t.className=`toast flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white font-semibold text-sm shadow-2xl ${colors[type]||colors.info}`;
  t.innerHTML=`<span class="material-symbols-outlined text-xl">${icons[type]}</span>${msg}`;
  tc.appendChild(t);
  setTimeout(()=>t.remove(),3500);
}

// ===================== HELPERS =====================
function statusPill(s) {
  const cfg={pending:'bg-amber-100 text-amber-700',approved:'bg-emerald-100 text-emerald-700',rejected:'bg-red-100 text-red-700',cancelled:'bg-gray-100 text-gray-400'};
  const icons={pending:'schedule',approved:'check_circle',rejected:'cancel',cancelled:'block'};
  return `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${cfg[s]||''}" style="white-space:nowrap"><span class="material-symbols-outlined" style="font-size:12px;vertical-align:middle">${icons[s]||'help'}</span>${s}</span>`;
}

function formatDate(d) {
  if(!d) return '—';
  try { return new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}); } catch(e){return d;}
}

function navigate(page) { currentPage=page; render(); window.scrollTo(0,0); }

// ===================== RENDER: LOGIN =====================
function renderLogin() {
  return `
  <div class="min-h-screen flex bg-[#FCF8FF] overflow-hidden">
    <!-- Left decorative panel -->
    <div class="hidden lg:flex flex-col justify-between w-[45%] bg-gradient-to-br from-[#534A92] via-[#6C63AC] to-[#463d83] p-14 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image:radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px),radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px),radial-gradient(circle at 50% 50%, #fff 0.5px, transparent 0.5px);background-size:60px 60px,80px 80px,40px 40px;"></div>
      <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      <div class="relative z-10">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-2xl">account_balance</span>
          </div>
          <span class="text-3xl font-black text-white">St. Vincent Pallotti</span>
        </div>
        <p class="text-white/60 text-sm font-medium tracking-widest uppercase">Facility Booking Portal</p>
      </div>
      <div class="relative z-10 space-y-8">
        ${[
          {icon:'meeting_room',title:'Conference Halls',sub:'5 fully-equipped meeting spaces'},
          {icon:'theater_comedy',title:'Auditoriums',sub:'3 large-scale venues up to 500 seats'},
          {icon:'domain',title:'Multi Facility Center',sub:'Premium venue for international events'},
          {icon:'key',title:'Special Permissions',sub:'Research labs, archives & restricted areas'},
        ].map(item=>`
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-white text-lg">${item.icon}</span>
            </div>
            <div>
              <p class="text-white font-bold">${item.title}</p>
              <p class="text-white/50 text-sm">${item.sub}</p>
            </div>
          </div>`).join('')}
      </div>
      <div class="relative z-10">St. Vincent Pallotti
        <p class="text-white/30 text-xs">&copy; 2026  · Academic Elegance</p>
      </div>
    </div>
    <!-- Right login panel -->
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="w-full max-w-sm fade-up">
        <div class="lg:hidden flex items-center gap-3 mb-10">
          <div class="w-10 h-10 bg-[#6C63AC] rounded-xl flex items-center justify-center">
            <span class="material-symbols-outlined text-white">account_balance</span>
          </div>
          <span class="text-2xl font-black text-[#534A92]">St. Vincent Pallotti</span>
        </div>
        <h1 class="text-3xl font-black text-[#1c1b20] mb-2">Welcome back</h1>
        <p class="text-[#787581] mb-8">Sign in to book campus facilities</p>
        
        <div class="space-y-4 mb-6">
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-2">University Email</label>
            <input id="login-email" type="email" placeholder="your.email@university.edu" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3.5 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
          </div>
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-2">Password</label>
            <input id="login-pass" type="password" placeholder="Enter your password" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3.5 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all" onkeydown="if(event.key==='Enter')loginAs('faculty')"/>
          </div>
        </div>
        
        <div class="space-y-3 mb-6">
          <button onclick="loginAs('faculty')" class="w-full py-4 rounded-2xl bg-gradient-to-br from-[#534A92] to-[#6C63AC] text-white font-black text-base shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2">
            <span class="material-symbols-outlined">school</span> Sign In as Faculty
          </button>
          <button onclick="loginAs('admin')" class="w-full py-4 rounded-2xl bg-[#1c1b20] text-white font-black text-base hover:bg-[#2d2c33] active:scale-98 transition-all flex items-center justify-center gap-2">
            <span class="material-symbols-outlined">admin_panel_settings</span> Sign In as Admin
          </button>
        </div>
        
        <div class="bg-[#F7F2F9] rounded-2xl p-4">
          <p class="text-xs font-bold text-[#474550] uppercase tracking-wider mb-3">Demo Credentials</p>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="fillDemo('faculty')" class="text-left p-3 bg-white rounded-xl hover:bg-[#e5e1e8] transition-colors">
              <p class="text-xs font-black text-[#534A92]">Faculty</p>
              <p class="text-[10px] text-[#787581] mt-0.5">faculty@university.edu</p>
              <p class="text-[10px] text-[#787581]">Pass: faculty123</p>
            </button>
            <button onclick="fillDemo('admin')" class="text-left p-3 bg-white rounded-xl hover:bg-[#e5e1e8] transition-colors">
              <p class="text-xs font-black text-[#534A92]">Admin</p>
              <p class="text-[10px] text-[#787581] mt-0.5">admin@university.edu</p>
              <p class="text-[10px] text-[#787581]">Pass: admin123</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ===================== RENDER: SIDEBAR =====================
function renderSidebar(activeNav) {
  const navItems = [
    { page:'dashboard', icon:'dashboard', label:'Dashboard' },
    { page:'my-bookings', icon:'event_available', label:'My Bookings' },
    { page:'history', icon:'history', label:'Request History' },
    { page:'notifications', icon:'notifications', label:'Notifications' },
  ];
  const bks = getBookings().filter(b=>b.userEmail===currentUser.email);
  const pendingCount = bks.filter(b=>b.status==='pending').length;
  return `
  <aside class="h-screen w-64 fixed left-0 top-0 bg-[#F7F2F9] flex flex-col p-4 gap-1 z-40">
    <div class="flex flex-col mb-6 px-2 pt-2">
      <div class="flex items-center gap-3 mb-1">
        <div class="w-10 h-10 bg-gradient-to-br from-[#534A92] to-[#6C63AC] rounded-xl flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-xl">account_balance</span>
        </div>
        <span class="text-lg font-black text-[#534A92]">St. Vincent Pallotti</span>
      </div>
      <p class="text-[10px] text-[#787581] font-bold uppercase tracking-widest ml-[52px]">Facility Portal</p>
    </div>
    <nav class="flex-1 flex flex-col gap-1">
      ${navItems.map(n=>{
        const active = activeNav===n.page;
        return `<button onclick="navigate('${n.page}')" class="nav-item flex items-center gap-3 px-4 py-3 rounded-full font-semibold text-sm w-full text-left ${active?'bg-[#6C63AC] text-white shadow-[0px_4px_12px_rgba(83,74,146,0.25)]':'text-[#49454F] hover:bg-[#E5E1E8]'} transition-all relative">
          <span class="material-symbols-outlined text-xl">${n.icon}</span>
          <span>${n.label}</span>
          ${n.page==='my-bookings'&&pendingCount>0?`<span class="ml-auto bg-amber-400 text-white text-[9px] font-black rounded-full w-5 h-5 flex items-center justify-center">${pendingCount}</span>`:''}
        </button>`;
      }).join('')}
    </nav>
    <div class="border-t border-[#E5E1E8] pt-4 mb-2">
      <div class="flex items-center gap-3 px-3 mb-3">
        <div class="w-9 h-9 bg-[#6C63AC] rounded-full flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-lg">person</span>
        </div>
        <div class="min-w-0">
          <p class="text-xs font-bold text-[#1c1b20] truncate">${currentUser.name}</p>
          <p class="text-[10px] text-[#787581] uppercase font-bold">${currentUser.dept}</p>
        </div>
      </div>
      <button onclick="logout()" class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-full font-semibold text-sm w-full text-left text-[#787581] hover:bg-[#ffdad6] hover:text-red-600 transition-all">
        <span class="material-symbols-outlined text-xl">logout</span><span>Sign Out</span>
      </button>
    </div>
    <button onclick="openVenueList()" class="bg-gradient-to-br from-[#534A92] to-[#6C63AC] text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-black text-sm shadow-lg hover:brightness-110 transition-all">
      <span class="material-symbols-outlined">add_circle</span> Book New Facility
    </button>
  </aside>`;
}

// ===================== RENDER: TOP BAR =====================
function renderTopBar(title) {
  const today = new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  return `
  <header class="bg-[#FCF8FF]/90 backdrop-blur-md sticky top-0 z-30 flex justify-between items-center px-8 py-4 shadow-[0px_4px_20px_rgba(83,74,146,0.06)]">
    <h1 class="text-2xl font-black text-[#1c1b20]">${title}</h1>
    <div class="flex items-center gap-4">
      <div class="relative hidden md:block">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#787581] text-xl">search</span>
        <input type="text" placeholder="Search facilities..." class="bg-[#E5E1E8] rounded-full pl-10 pr-5 py-2.5 text-sm w-60 text-[#1c1b20] border-2 border-transparent transition-all"/>
      </div>
      <button class="relative w-10 h-10 rounded-full bg-[#F7F2F9] hover:bg-[#E5E1E8] flex items-center justify-center transition-colors">
        <span class="material-symbols-outlined text-[#474550]">notifications</span>
        <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#6C63AC] rounded-full border-2 border-white"></span>
      </button>
      <div class="flex items-center gap-3 pl-3 border-l border-[#E5E1E8]">
        <div class="text-right hidden md:block">
          <p class="text-sm font-bold text-[#1c1b20]">${currentUser.name}</p>
          <p class="text-[10px] text-[#787581] uppercase font-bold">${currentUser.dept}</p>
        </div>
        <div class="w-10 h-10 bg-gradient-to-br from-[#534A92] to-[#6C63AC] rounded-full flex items-center justify-center">
          <span class="material-symbols-outlined text-white">person</span>
        </div>
      </div>
    </div>
  </header>`;
}

// ===================== RENDER: CONFERENCE HALL CARD =====================
function hallCard(h, idx=0) {
  const img = h.image || '';
  return `
  <div class="hall-card bg-white rounded-2xl overflow-hidden flex-shrink-0 w-56 shadow-[0px_4px_20px_rgba(83,74,146,0.07)] cursor-pointer fade-up" style="animation-delay:${idx*60}ms">
    ${img ? `<div class="h-32 overflow-hidden"><img src="${img}" alt="${h.name}" class="w-full h-full object-cover"/></div>` : `<div class="h-32 bg-gradient-to-br from-[#e5deff] to-[#c8bfff] flex items-center justify-center"><span class="material-symbols-outlined text-[#534A92] text-4xl">meeting_room</span></div>`}
    <div class="p-4">
      <div class="flex items-start justify-between mb-2">
        <span class="text-[10px] font-black uppercase tracking-wider text-[#534A92] bg-[#e5deff] px-2.5 py-1 rounded-full">${h.room}</span>
      </div>
      <h4 class="font-black text-[#1c1b20] text-base mb-1">${h.name}</h4>
      <p class="text-[#787581] text-xs leading-relaxed mb-3">${h.desc||''}</p>
      <div class="flex items-center gap-2 flex-wrap mb-3">
        ${(h.amenities||h.features||[]).slice(0,4).map(f=>`<div class="flex flex-col items-center gap-0.5" title="${f.label}">
          <span class="material-symbols-outlined text-[#534A92]" style="font-size:15px">${f.icon}</span>
        </div>`).join('')}
      </div>
      ${h.available!==false
        ? `<button onclick="openBooking('${h.id}')" class="w-full py-2.5 rounded-full bg-[#F7F2F9] hover:bg-[#6C63AC] hover:text-white text-[#534A92] font-black text-xs transition-all">Book</button>`
        : `<button disabled class="w-full py-2.5 rounded-full bg-[#E5E1E8] text-[#787581] font-black text-xs cursor-not-allowed opacity-60">Unavailable</button>`
      }
    </div>
  </div>`;
}

// ===================== RENDER: AUDI CARD =====================
function audiCard(a) {
  const feats = (a.amenities||a.features||[]);
  return `
  <div class="audi-card group relative bg-surface-container rounded-3xl overflow-hidden h-72 shadow-lg cursor-pointer" style="animation:fadeUp .5s ease both">
    ${a.image
      ? `<img src="${a.image}" alt="${a.name}" class="w-full h-full object-cover"/>`
      : `<div class="w-full h-full bg-gradient-to-br from-[#534A92] to-[#6C63AC] flex items-center justify-center"><span class="material-symbols-outlined text-white/30" style="font-size:80px">theater_comedy</span></div>`
    }
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex flex-col justify-end">
      <p class="text-[10px] font-black uppercase tracking-widest text-[#e5deff] mb-1">${a.room}</p>
      <div class="flex justify-between items-end">
        <div>
          <h4 class="text-white text-lg font-black leading-tight">${a.name}</h4>
          <p class="text-white/60 text-xs mt-0.5">${a.desc||''}</p>
          <div class="flex items-center gap-3 mt-2">
            ${feats.slice(0,3).map(f=>`<div class="flex items-center gap-1 text-white/60 text-[10px]"><span class="material-symbols-outlined" style="font-size:12px">${f.icon}</span>${f.label}</div>`).join('')}
          </div>
        </div>
        ${a.capacity?`<div class="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 flex flex-col items-center border border-white/20 ml-3">
          <span class="text-white text-lg font-black">${a.capacity}</span>
          <span class="text-white/50 text-[8px] uppercase font-bold">Seats</span>
        </div>`:''}
      </div>
      <button class="audi-book-btn mt-3 w-full bg-gradient-to-r from-[#534A92] to-[#6C63AC] text-white py-2.5 rounded-xl font-black text-sm" onclick="openBooking('${a.id}')">Book Venue</button>
    </div>
  </div>`;
}

// ===================== RENDER: DASHBOARD =====================
function renderDashboard() {
  const myBks = getBookings().filter(b=>b.userEmail===currentUser.email);
  const pending = myBks.filter(b=>b.status==='pending').length;
  const approved = myBks.filter(b=>b.status==='approved').length;

  const allFacilities = getAllFacilities();
  const confHalls    = allFacilities.filter(f=>f.type==='conferenceHall');
  const auditoriums  = allFacilities.filter(f=>f.type==='auditorium');
  const mfcList      = allFacilities.filter(f=>f.type==='mfc');
  const specials     = allFacilities.filter(f=>f.type==='special');

  return `
  <div class="p-8 space-y-12 fade-up">
    <!-- Quick Stats -->
    ${myBks.length>0?`
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      ${[
        {label:'Total Requests',val:myBks.length,icon:'bookmark',color:'text-[#534A92]',bg:'bg-[#e5deff]'},
        {label:'Pending',val:pending,icon:'schedule',color:'text-amber-600',bg:'bg-amber-100'},
        {label:'Approved',val:approved,icon:'check_circle',color:'text-emerald-600',bg:'bg-emerald-100'},
        {label:'This Month',val:myBks.filter(b=>new Date(b.createdAt).getMonth()===new Date().getMonth()).length,icon:'calendar_month',color:'text-[#6C63AC]',bg:'bg-[#e5deff]'},
      ].map(s=>`<div class="bg-white rounded-2xl p-4 shadow-[0px_4px_16px_rgba(83,74,146,0.06)]">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-[#787581] uppercase tracking-wider">${s.label}</span>
          <div class="w-8 h-8 ${s.bg} rounded-xl flex items-center justify-center">
            <span class="material-symbols-outlined ${s.color}" style="font-size:16px">${s.icon}</span>
          </div>
        </div>
        <p class="text-3xl font-black ${s.color}">${s.val}</p>
      </div>`).join('')}
    </div>`:''}

    <!-- Conference Halls -->
    ${confHalls.length>0?`
    <section>
      <div class="flex items-center justify-between mb-5">
        <div>
          <h3 class="text-xl font-black text-[#1c1b20]">Conference Halls</h3>
          <p class="text-sm text-[#787581] mt-0.5">Professional spaces for focused collaboration</p>
        </div>
        <span class="text-xs font-black uppercase tracking-wider text-[#534A92]">${confHalls.length} Space${confHalls.length!==1?'s':''}</span>
      </div>
      <div class="overflow-x-auto pb-2">
        <div class="flex gap-4" style="width:max-content">
          ${confHalls.map((h,i)=>hallCard(h,i)).join('')}
        </div>
      </div>
    </section>`:''}

    <!-- Auditoriums -->
    ${auditoriums.length>0?`
    <section>
      <div class="flex items-center justify-between mb-5">
        <div>
          <h3 class="text-xl font-black text-[#1c1b20]">Auditoriums</h3>
          <p class="text-sm text-[#787581] mt-0.5">Large-scale venues for significant events</p>
        </div>
        <span class="text-xs font-black uppercase tracking-wider text-[#534A92]">${auditoriums.length} Venue${auditoriums.length!==1?'s':''}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${auditoriums.map(a=>audiCard(a)).join('')}
      </div>
    </section>`:''}

    <!-- MFC / Premium venues -->
    ${mfcList.map(mfc=>`
    <section class="bg-[#F7F2F9] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center fade-up">
      <div class="flex-1 space-y-5">
        <div class="inline-flex items-center gap-2 bg-[#534A92]/10 text-[#534A92] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
          <span class="material-symbols-outlined text-sm">stars</span> Premium Venue
        </div>
        <div>
          <p class="text-xs font-black text-[#787581] uppercase tracking-widest mb-1">${mfc.room}</p>
          <h3 class="text-3xl font-black text-[#1c1b20] leading-tight">${mfc.name}</h3>
        </div>
        <p class="text-[#474550] leading-relaxed">${mfc.desc||''}</p>
        <div class="grid grid-cols-4 gap-3">
          ${(mfc.amenities||mfc.features||[]).map(f=>`<div class="flex flex-col items-center p-3 bg-white rounded-2xl shadow-sm">
            <span class="material-symbols-outlined text-[#6C63AC] text-2xl mb-1">${f.icon}</span>
            <span class="text-[9px] font-black text-[#787581] uppercase text-center">${f.label}</span>
          </div>`).join('')}
        </div>
        <div class="flex items-center gap-3">
          <button onclick="openBooking('${mfc.id}')" class="bg-gradient-to-br from-[#534A92] to-[#6C63AC] text-white px-8 py-3.5 rounded-2xl font-black text-sm shadow-lg hover:brightness-110 transition-all flex items-center gap-2">
            Check Availability <span class="material-symbols-outlined text-lg">event_note</span>
          </button>
          ${mfc.capacity?`<div class="text-xs text-[#787581]"><p class="font-bold">${mfc.capacity.toLocaleString()} Seats</p><p>Max Capacity</p></div>`:''}
        </div>
      </div>
      ${mfc.image?`<div class="w-full md:w-80 h-64 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
        <img src="${mfc.image}" alt="${mfc.name}" class="w-full h-full object-cover"/>
      </div>`:''}
    </section>`).join('')}

    <!-- Special Permissions -->
    ${specials.length>0?`
    <section class="bg-[#1C1B20] rounded-3xl p-8 md:p-10 fade-up">
      <div class="flex items-center justify-between">
        <div>
          <div class="inline-flex items-center gap-2 bg-[#f6e477]/15 text-[#f6e477] px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3">
            <span class="material-symbols-outlined text-sm">key</span> Restricted Access
          </div>
          <h3 class="text-2xl font-black text-white">Special Permissions</h3>
          <p class="text-white/50 mt-1 text-sm">Requires institutional clearance. Avg. approval: 48 hours.</p>
        </div>
        <button onclick="openSpecialRequest('${specials[0].id}')" class="bg-[#f6e477] text-[#1c1b20] py-3 px-8 rounded-full font-black text-sm hover:brightness-105 transition-all flex items-center gap-2 flex-shrink-0">
          <span class="material-symbols-outlined text-sm">description</span> Request Access
        </button>
      </div>
    </section>`:''}
  </div>

  `;
}

// ===================== RENDER: MY BOOKINGS =====================
function renderMyBookings(forHistory=false) {
  let bks = getBookings().filter(b=>b.userEmail===currentUser.email);
  if (forHistory) bks = bks.filter(b=>b.status!=='pending');
  else if (bookingFilter!=='all') bks = bks.filter(b=>b.status===bookingFilter);

  const tabs = forHistory
    ? null
    : [['all','All'],['pending','Pending'],['approved','Approved'],['rejected','Rejected'],['cancelled','Cancelled']];

  return `
  <div class="p-8 fade-up">
    <div class="flex items-start justify-between mb-6">
      <div>
        <h2 class="text-2xl font-black text-[#1c1b20]">${forHistory?'Request History':'My Bookings'}</h2>
        <p class="text-sm text-[#787581] mt-1">${forHistory?'Past approvals and rejections':'All your facility booking requests'}</p>
      </div>
    </div>
    ${tabs?`
    <div class="flex gap-2 mb-6 overflow-x-auto pb-1">
      ${tabs.map(([v,l])=>`<button onclick="bookingFilter='${v}';navigate('my-bookings')" class="flex-shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${bookingFilter===v?'bg-[#6C63AC] text-white shadow-md':'bg-[#F7F2F9] text-[#474550] hover:bg-[#E5E1E8]'}">${l}</button>`).join('')}
    </div>`:''}
    ${bks.length===0?`
    <div class="flex flex-col items-center justify-center py-20 text-center">
      <div class="w-16 h-16 bg-[#F7F2F9] rounded-2xl flex items-center justify-center mb-4">
        <span class="material-symbols-outlined text-[#c9c4d2] text-3xl">event_busy</span>
      </div>
      <p class="font-black text-[#1c1b20] text-lg">No bookings found</p>
      <p class="text-[#787581] text-sm mt-1">Your booking requests will appear here</p>
      <button onclick="navigate('dashboard')" class="mt-6 bg-[#6C63AC] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all">Browse Facilities</button>
    </div>`:`
    <div class="space-y-4">
      ${bks.map(b=>`
      <div class="bg-white rounded-2xl p-5 shadow-[0px_4px_16px_rgba(83,74,146,0.06)] fade-up">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4 flex-1 min-w-0">
            <div class="w-11 h-11 bg-[#F7F2F9] rounded-xl flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-[#6C63AC] text-xl">${b.typeName==='Auditorium'?'theater_comedy':b.typeName==='Multi Facility Center'?'domain':b.typeName==='Special Permission'?'key':'meeting_room'}</span>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <p class="font-black text-[#1c1b20]">${b.facilityName}</p>
                <span class="text-[9px] font-black uppercase tracking-wider text-[#534A92] bg-[#e5deff] px-2 py-0.5 rounded-full">${b.room}</span>
              </div>
              <p class="text-sm text-[#474550] mt-0.5 font-medium truncate">${b.purpose}</p>
              <div class="flex items-center gap-4 mt-2 flex-wrap">
                <span class="text-xs text-[#787581] flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:14px">calendar_today</span>${formatDate(b.date)}</span>
                <span class="text-xs text-[#787581] flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:14px">schedule</span>${b.startTime} – ${b.endTime}</span>
                <span class="text-xs text-[#787581] flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:14px">groups</span>${b.attendees} attendees</span>
              </div>
              ${b.adminNote?`<div class="mt-2 text-xs text-[#474550] bg-[#F7F2F9] rounded-xl px-3 py-2"><span class="font-bold">Admin note:</span> ${b.adminNote}</div>`:''}
            </div>
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            ${statusPill(b.status)}
            ${b.status==='pending'?`<button onclick="cancelBooking('${b.id}')" class="text-[10px] font-bold text-red-400 hover:text-red-600 transition-colors uppercase tracking-wider">Cancel</button>`:''}
          </div>
        </div>
      </div>`).join('')}
    </div>`}
  </div>`;
}

// ===================== RENDER: NOTIFICATIONS =====================
function renderNotifications() {
  const bks = getBookings().filter(b=>b.userEmail===currentUser.email).slice(0,5);
  const notifs = [
    ...bks.filter(b=>b.status==='approved').map(b=>({icon:'check_circle',color:'text-emerald-500',bg:'bg-emerald-100',msg:`Your booking for <strong>${b.facilityName}</strong> on ${formatDate(b.date)} has been approved.`,time:b.updatedAt||b.createdAt})),
    ...bks.filter(b=>b.status==='rejected').map(b=>({icon:'cancel',color:'text-red-500',bg:'bg-red-100',msg:`Your booking for <strong>${b.facilityName}</strong> was rejected.${b.adminNote?' Reason: '+b.adminNote:''}`,time:b.updatedAt||b.createdAt})),
    ...bks.filter(b=>b.status==='pending').map(b=>({icon:'schedule',color:'text-amber-500',bg:'bg-amber-100',msg:`Booking for <strong>${b.facilityName}</strong> on ${formatDate(b.date)} is awaiting approval.`,time:b.createdAt})),
  ].sort((a,b)=>new Date(b.time)-new Date(a.time)).slice(0,8);

  return `
  <div class="p-8 fade-up">
    <h2 class="text-2xl font-black text-[#1c1b20] mb-6">Notifications</h2>
    ${notifs.length===0?`<div class="flex flex-col items-center py-20 text-center"><span class="material-symbols-outlined text-[#c9c4d2] text-5xl mb-3">notifications_off</span><p class="font-bold text-[#787581]">No notifications yet</p></div>`:
    `<div class="space-y-3">
      ${notifs.map(n=>`<div class="bg-white rounded-2xl p-4 shadow-[0px_4px_16px_rgba(83,74,146,0.05)] flex items-start gap-4">
        <div class="w-10 h-10 ${n.bg} rounded-xl flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined ${n.color} text-xl">${n.icon}</span>
        </div>
        <div class="flex-1">
          <p class="text-sm text-[#1c1b20]">${n.msg}</p>
          <p class="text-[10px] text-[#787581] mt-1 uppercase font-bold">${new Date(n.time).toLocaleString('en-IN',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}</p>
        </div>
      </div>`).join('')}
    </div>`}
  </div>`;
}

// ===================== RENDER: ADMIN SIDEBAR =====================
function renderAdminSidebar(active) {
  const bks = getBookings();
  const pendingCount = bks.filter(b=>b.status==='pending').length;
  const navItems = [
    {page:'admin-overview',icon:'dashboard',label:'Overview'},
    {page:'admin-pending',icon:'pending_actions',label:'Pending Requests',badge:pendingCount},
    {page:'admin-all',icon:'list_alt',label:'All Bookings'},
    {page:'admin-facilities',icon:'domain',label:'Facilities'},
  ];
  return `
  <aside class="h-screen w-64 fixed left-0 top-0 bg-[#1C1B20] flex flex-col p-4 gap-1 z-40">
    <div class="flex flex-col mb-6 px-2 pt-2">
      <div class="flex items-center gap-3 mb-1">
        <div class="w-10 h-10 bg-gradient-to-br from-[#534A92] to-[#6C63AC] rounded-xl flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-xl">admin_panel_settings</span>
        </div>
        <span class="text-lg font-black text-white">St. Vincent Pallotti</span>
      </div>
      <p class="text-[10px] text-white/30 font-bold uppercase tracking-widest ml-[52px]">Admin Portal</p>
    </div>
    <nav class="flex-1 flex flex-col gap-1">
      ${navItems.map(n=>{
        const a=active===n.page;
        return `<button onclick="navigate('${n.page}')" class="nav-item flex items-center gap-3 px-4 py-3 rounded-full font-semibold text-sm w-full text-left ${a?'bg-[#534A92] text-white shadow-lg':'text-white/50 hover:bg-white/10 hover:text-white'} transition-all relative">
          <span class="material-symbols-outlined text-xl">${n.icon}</span>
          <span>${n.label}</span>
          ${n.badge>0?`<span class="ml-auto bg-amber-400 text-white text-[9px] font-black rounded-full min-w-5 h-5 flex items-center justify-center px-1">${n.badge}</span>`:''}
        </button>`;
      }).join('')}
    </nav>
    <div class="border-t border-white/10 pt-4 mb-2">
      <div class="flex items-center gap-3 px-3 mb-3">
        <div class="w-9 h-9 bg-[#534A92] rounded-full flex items-center justify-center">
          <span class="material-symbols-outlined text-white text-lg">admin_panel_settings</span>
        </div>
        <div>
          <p class="text-xs font-bold text-white">${currentUser.name}</p>
          <p class="text-[10px] text-white/30 uppercase font-bold">Administrator</p>
        </div>
      </div>
      <button onclick="logout()" class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-full font-semibold text-sm w-full text-left text-white/30 hover:bg-red-900/30 hover:text-red-400 transition-all">
        <span class="material-symbols-outlined text-xl">logout</span><span>Sign Out</span>
      </button>
    </div>
  </aside>`;
}

// ===================== RENDER: ADMIN OVERVIEW =====================
function renderAdminOverview() {
  const bks = getBookings();
  const counts = {total:bks.length,pending:bks.filter(b=>b.status==='pending').length,approved:bks.filter(b=>b.status==='approved').length,rejected:bks.filter(b=>b.status==='rejected').length};
  const recent = bks.slice(0,5);
  return `
  <div class="p-8 fade-up">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      ${[
        {l:'Total Bookings',v:counts.total,i:'bookmark',c:'text-[#534A92]',bg:'bg-[#e5deff]'},
        {l:'Pending',v:counts.pending,i:'pending_actions',c:'text-amber-600',bg:'bg-amber-100'},
        {l:'Approved',v:counts.approved,i:'check_circle',c:'text-emerald-600',bg:'bg-emerald-100'},
        {l:'Rejected',v:counts.rejected,i:'cancel',c:'text-red-500',bg:'bg-red-100'},
      ].map(s=>`<div class="bg-white rounded-2xl p-5 shadow-[0px_4px_16px_rgba(83,74,146,0.06)]">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-[#787581] uppercase tracking-wider">${s.l}</span>
          <div class="w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center">
            <span class="material-symbols-outlined ${s.c}" style="font-size:18px">${s.i}</span>
          </div>
        </div>
        <p class="text-4xl font-black ${s.c}">${s.v}</p>
      </div>`).join('')}
    </div>
    <div class="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(83,74,146,0.06)] overflow-hidden">
      <div class="p-5 border-b border-[#F7F2F9] flex items-center justify-between">
        <h3 class="font-black text-[#1c1b20]">Recent Requests</h3>
        <button onclick="navigate('admin-all')" class="text-xs font-bold text-[#534A92] hover:underline">View All</button>
      </div>
      ${adminBookingRows(recent)}
    </div>
  </div>`;
}

// ===================== RENDER: ADMIN BOOKING ROWS =====================
function adminBookingRows(bks) {
  if(!bks.length) return `<div class="p-10 text-center text-[#787581]"><span class="material-symbols-outlined text-4xl text-[#c9c4d2] block mb-2">inbox</span>No bookings found</div>`;
  return `<div class="divide-y divide-[#F7F2F9]">
    ${bks.map(b=>`
    <div class="p-5 flex items-start gap-4 hover:bg-[#FCF8FF] transition-colors">
      <div class="w-10 h-10 bg-[#F7F2F9] rounded-xl flex items-center justify-center flex-shrink-0">
        <span class="material-symbols-outlined text-[#6C63AC] text-lg">${b.typeName==='Auditorium'?'theater_comedy':b.typeName==='Multi Facility Center'?'domain':b.typeName==='Special Permission'?'key':'meeting_room'}</span>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <p class="font-black text-[#1c1b20] text-sm">${b.facilityName}</p>
              <span class="text-[9px] font-black text-[#534A92] bg-[#e5deff] px-2 py-0.5 rounded-full uppercase tracking-wide">${b.room}</span>
            </div>
            <p class="text-sm text-[#474550] mt-0.5 font-medium truncate">${b.purpose}</p>
            <div class="flex items-center gap-3 mt-1.5 flex-wrap">
              <span class="text-xs text-[#787581] flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:12px">person</span>${b.userName}</span>
              <span class="text-xs text-[#787581] flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:12px">calendar_today</span>${formatDate(b.date)}</span>
              <span class="text-xs text-[#787581] flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:12px">schedule</span>${b.startTime} – ${b.endTime}</span>
              <span class="text-xs text-[#787581] flex items-center gap-1"><span class="material-symbols-outlined" style="font-size:12px">groups</span>${b.attendees}</span>
            </div>
            ${b.requirements?`<p class="text-xs text-[#787581] mt-1 italic">"${b.requirements}"</p>`:''}
          </div>
          <div class="flex flex-col items-end gap-2 flex-shrink-0">
            ${statusPill(b.status)}
            ${b.status==='pending'?`<div class="flex gap-1.5 mt-1">
              <button onclick="approveBooking('${b.id}')" class="px-3 py-1.5 rounded-full bg-emerald-100 hover:bg-emerald-500 text-emerald-700 hover:text-white text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1">
                <span class="material-symbols-outlined" style="font-size:12px">check</span>Approve
              </button>
              <button onclick="rejectBooking('${b.id}')" class="px-3 py-1.5 rounded-full bg-red-100 hover:bg-red-500 text-red-600 hover:text-white text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1">
                <span class="material-symbols-outlined" style="font-size:12px">close</span>Reject
              </button>
            </div>`:''}
            ${b.adminNote?`<p class="text-[10px] text-[#787581] italic max-w-48 text-right">${b.adminNote}</p>`:''}
          </div>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

// ===================== RENDER: ADMIN PENDING =====================
function renderAdminPending() {
  const bks = getBookings().filter(b=>b.status==='pending');
  return `
  <div class="p-8 fade-up">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-black text-[#1c1b20]">Pending Requests</h2>
        <p class="text-sm text-[#787581] mt-1">${bks.length} request${bks.length!==1?'s':''} awaiting your decision</p>
      </div>
      ${bks.length>0?`<div class="flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
        <span class="material-symbols-outlined" style="font-size:14px">schedule</span>${bks.length} Pending
      </div>`:''}
    </div>
    <div class="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(83,74,146,0.06)] overflow-hidden">
      ${adminBookingRows(bks)}
    </div>
  </div>`;
}

// ===================== RENDER: ADMIN ALL =====================
function renderAdminAll() {
  const bks = getBookings();
  const filter = adminFilter;
  const filtered = filter==='all'?bks:bks.filter(b=>b.status===filter);
  return `
  <div class="p-8 fade-up">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-black text-[#1c1b20]">All Bookings</h2>
      <div class="flex gap-2">
        ${['all','pending','approved','rejected'].map(f=>`<button onclick="adminFilter='${f}';navigate('admin-all')" class="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${adminFilter===f?'bg-[#534A92] text-white':'bg-[#F7F2F9] text-[#474550] hover:bg-[#E5E1E8]'}">${f}</button>`).join('')}
      </div>
    </div>
    <div class="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(83,74,146,0.06)] overflow-hidden">
      ${adminBookingRows(filtered)}
    </div>
  </div>`;
}

// ===================== CUSTOM FACILITIES STORAGE =====================
function getCustomFacilities() { return JSON.parse(localStorage.getItem('ur_custom_facilities')||'[]'); }
function saveCustomFacilities(arr) { localStorage.setItem('ur_custom_facilities', JSON.stringify(arr)); }

const AMENITY_OPTIONS = [
  {id:'projector',icon:'cast',label:'Projector'},
  {id:'screen',icon:'cast_connected',label:'Screen'},
  {id:'mic',icon:'mic',label:'Microphone'},
  {id:'pa',icon:'surround_sound',label:'PA System'},
  {id:'camera',icon:'videocam',label:'Camera'},
  {id:'wifi',icon:'wifi',label:'WiFi'},
  {id:'ac',icon:'ac_unit',label:'AC'},
  {id:'whiteboard',icon:'edit_square',label:'Whiteboard'},
  {id:'food',icon:'restaurant',label:'Food / Catering'},
  {id:'water',icon:'water_drop',label:'Water'},
  {id:'coffee',icon:'coffee',label:'Coffee'},
  {id:'live_stream',icon:'broadcast_on_home',label:'Live Stream'},
  {id:'recording',icon:'fiber_manual_record',label:'Recording'},
  {id:'lighting',icon:'light_mode',label:'Stage Lighting'},
  {id:'stage',icon:'theater_comedy',label:'Stage'},
  {id:'interpretation',icon:'translate',label:'Interpretation'},
  {id:'parking',icon:'local_parking',label:'Parking'},
  {id:'security',icon:'security',label:'Security'},
  {id:'workstation',icon:'computer',label:'Workstation'},
  {id:'lounge',icon:'weekend',label:'Lounge Area'},
];

// Admin slot selection state
let adminSlotFacilityId = null;
let adminSlotDate = new Date().toISOString().split('T')[0];
let adminSelectedSlots = new Set(); // "YYYY-MM-DD|HH:00"

function getFacilityIcon(f) {
  return f.type==='auditorium'?'theater_comedy':f.type==='mfc'?'domain':f.type==='special'?(f.icon||'key'):'meeting_room';
}

// ===================== RENDER: ADMIN FACILITIES =====================
function renderAdminFacilities() {
  const all = getAllFacilities();
  return `
  <div class="p-8 fade-up">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-black text-[#1c1b20]">Facilities Overview</h2>
        <p class="text-sm text-[#787581] mt-1">${all.length} facilities managed</p>
      </div>
      <button onclick="openAddFacilityModal()" class="flex items-center gap-2 bg-gradient-to-br from-[#534A92] to-[#6C63AC] text-white px-5 py-2.5 rounded-full font-black text-sm shadow-lg hover:brightness-110 transition-all">
        <span class="material-symbols-outlined text-lg">add</span> Add Facility
      </button>
    </div>
    <div class="space-y-4">
      ${all.map(f=>`
      <div class="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(83,74,146,0.06)] overflow-hidden">
        <!-- Facility Header Row -->
        <div class="p-5 flex items-start gap-4">
          <div class="w-11 h-11 bg-[#F7F2F9] rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-[#6C63AC] text-xl">${getFacilityIcon(f)}</span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <p class="font-black text-[#1c1b20] text-sm">${f.name}</p>
              <span class="text-[9px] font-black text-[#534A92] bg-[#e5deff] px-2 py-0.5 rounded-full uppercase tracking-wide">${f.room}</span>
              <span class="text-[9px] font-black text-[#787581] bg-[#F7F2F9] px-2 py-0.5 rounded-full uppercase tracking-wide">${f.typeName}</span>
              ${f.capacity?`<span class="text-[9px] font-semibold text-[#787581] flex items-center gap-0.5"><span class="material-symbols-outlined" style="font-size:11px">groups</span>${f.capacity} cap.</span>`:''}
            </div>
            <div class="flex items-center gap-3 mt-2 flex-wrap">
              ${(f.amenities||f.features||[]).slice(0,6).map(a=>`
                <div class="flex items-center gap-1 text-[10px] text-[#474550] bg-[#F7F2F9] px-2 py-1 rounded-lg">
                  <span class="material-symbols-outlined" style="font-size:12px">${a.icon||'check'}</span>${a.label}
                </div>`).join('')}
            </div>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            ${f.available===false?`<span class="text-[9px] font-black text-red-500 bg-red-100 px-2 py-1 rounded-full uppercase">Unavailable</span>`:`<span class="text-[9px] font-black text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full uppercase">Available</span>`}
            <button onclick="openViewSlotsPanel('${f.id}')" class="w-8 h-8 rounded-xl bg-[#e5deff] hover:bg-[#6C63AC] hover:text-white text-[#534A92] flex items-center justify-center transition-all" title="View / Select Slots">
              <span class="material-symbols-outlined text-sm">calendar_view_week</span>
            </button>
            <button onclick="openEditFacilityModal('${f.id}')" class="w-8 h-8 rounded-xl bg-[#F7F2F9] hover:bg-[#534A92] hover:text-white text-[#474550] flex items-center justify-center transition-all" title="Edit">
              <span class="material-symbols-outlined text-sm">edit</span>
            </button>
            <button onclick="deleteFacility('${f.id}')" class="w-8 h-8 rounded-xl bg-red-50 hover:bg-red-500 hover:text-white text-red-400 flex items-center justify-center transition-all" title="Delete">
              <span class="material-symbols-outlined text-sm">delete</span>
            </button>
          </div>
        </div>
        <!-- Inline Slot Panel (toggled) -->
        <div id="slot-panel-${f.id}" class="hidden border-t border-[#F7F2F9]">
          ${buildAdminSlotPanel(f)}
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function buildAdminSlotPanel(f) {
  const today = new Date().toISOString().split('T')[0];
  const weekDates = getWeekDates(adminSlotDate);
  const bookings = getBookings();
  const panelId = `slot-panel-${f.id}`;

  return `
  <div class="p-5 bg-[#F7F2F9] rounded-b-2xl">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div class="flex items-center gap-3">
        <p class="text-sm font-black text-[#1c1b20]">Slot Timetable</p>
        <div class="flex items-center gap-2 text-xs font-semibold text-[#787581]">
          <span class="flex items-center gap-1"><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#fee2e2;border:1.5px solid #fca5a5"></span>Booked</span>
          <span class="flex items-center gap-1"><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#d1fae5;border:1.5px solid #6ee7b7"></span>Free</span>
          <span class="flex items-center gap-1"><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#818cf8;border:1.5px solid #6366f1"></span>Selected</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <input type="date" value="${adminSlotDate}" onchange="adminSlotDate=this.value;refreshAdminSlotPanel('${f.id}')" class="bg-white rounded-xl px-3 py-2 text-xs font-bold text-[#1c1b20] border-2 border-[#e5e1e8] transition-all"/>
        <button onclick="clearAdminSlots('${f.id}')" class="px-3 py-2 rounded-xl bg-white text-[#787581] font-bold text-xs hover:bg-[#e5e1e8] transition-all border border-[#e5e1e8]">Clear</button>
        <button onclick="confirmAdminSlotBlock('${f.id}')" class="px-4 py-2 rounded-xl bg-[#534A92] text-white font-black text-xs hover:brightness-110 transition-all flex items-center gap-1">
          <span class="material-symbols-outlined" style="font-size:13px">block</span>Block Selected
        </button>
      </div>
    </div>
    <div id="admin-tt-${f.id}" style="overflow-x:auto">
      ${buildAdminTimetableHTML(f.id, adminSlotDate)}
    </div>
    <div id="slot-selection-summary-${f.id}" class="mt-3 text-xs font-semibold text-[#534A92]"></div>
  </div>`;
}

function buildAdminTimetableHTML(facilityId, dateStr) {
  const weekDates = getWeekDates(dateStr);
  const bookings = getBookings();
  const today = new Date().toISOString().split('T')[0];

  let html = `<table style="border-collapse:separate;border-spacing:3px;min-width:580px;width:100%">
    <thead><tr>
      <th style="width:52px"></th>
      ${weekDates.map((d,i)=>{
        const isSelected = d===dateStr;
        const dateObj = new Date(d+'T00:00:00');
        return `<th style="text-align:center;padding:4px 2px;min-width:68px">
          <div style="font-size:10px;font-weight:800;color:${isSelected?'#534A92':'#787581'};text-transform:uppercase">${DAY_LABELS[i]}</div>
          <div style="font-size:11px;font-weight:900;color:${isSelected?'#534A92':'#1c1b20'};background:${isSelected?'#e5deff':'transparent'};border-radius:6px;padding:2px 4px">
            ${dateObj.getDate()} ${dateObj.toLocaleDateString('en-IN',{month:'short'})}
          </div>
        </th>`;
      }).join('')}
    </tr></thead>
    <tbody>
      ${TIME_SLOTS.map((slot,si)=>{
        return `<tr>
          <td style="font-size:10px;font-weight:700;color:#787581;text-align:right;padding-right:6px;white-space:nowrap;vertical-align:middle">${slot}</td>
          ${weekDates.map(d=>{
            const key = d+'|'+slot;
            const booked = isSlotBooked(bookings, facilityId, d, slot);
            const isPast = d < today;
            const isAdminSel = adminSelectedSlots.has(facilityId+'::'+key);
            let bg,border,cursor='pointer',title;
            if(isAdminSel){bg='#818cf8';border='#6366f1';title='Selected';}
            else if(booked){bg='#fee2e2';border='#fca5a5';cursor='not-allowed';title='Booked';}
            else if(isPast){bg='#f1ecf3';border='#e5e1e8';cursor='default';title='Past';}
            else{bg='#d1fae5';border='#6ee7b7';title='Click to select';}
            return `<td onclick="toggleAdminSlot('${facilityId}','${d}','${slot}')" 
              style="background:${bg};border:1.5px solid ${border};border-radius:6px;height:30px;cursor:${cursor};transition:all .15s;" 
              title="${title} ${slot}"></td>`;
          }).join('')}
        </tr>`;
      }).join('')}
    </tbody>
  </table>`;
  return html;
}

function toggleAdminSlot(facilityId, dateStr, slot) {
  const bookings = getBookings();
  if(isSlotBooked(bookings, facilityId, dateStr, slot)) return; // can't toggle booked
  const today = new Date().toISOString().split('T')[0];
  if(dateStr < today) return; // can't toggle past
  const key = facilityId+'::'+dateStr+'|'+slot;
  if(adminSelectedSlots.has(key)) adminSelectedSlots.delete(key);
  else adminSelectedSlots.add(key);
  refreshAdminSlotPanel(facilityId);
}

function refreshAdminSlotPanel(facilityId) {
  const container = document.getElementById('admin-tt-'+facilityId);
  if(container) container.innerHTML = buildAdminTimetableHTML(facilityId, adminSlotDate);
  const summary = document.getElementById('slot-selection-summary-'+facilityId);
  const count = [...adminSelectedSlots].filter(k=>k.startsWith(facilityId+'::')).length;
  if(summary) summary.textContent = count > 0 ? `${count} slot${count>1?'s':''} selected — click "Block Selected" to mark as unavailable` : '';
}

function clearAdminSlots(facilityId) {
  adminSelectedSlots.forEach(k=>{ if(k.startsWith(facilityId+'::')) adminSelectedSlots.delete(k); });
  refreshAdminSlotPanel(facilityId);
}

function confirmAdminSlotBlock(facilityId) {
  const keys = [...adminSelectedSlots].filter(k=>k.startsWith(facilityId+'::'));
  if(!keys.length){ showToast('No slots selected','warning'); return; }
  const bks = getBookings();
  keys.forEach(k=>{
    const [,dateSlot] = k.split('::');
    const [date,slot] = dateSlot.split('|');
    bks.unshift({
      id:'blk-'+Date.now()+Math.random(),
      facilityId, facilityName:getFacilityById(facilityId)?.name||facilityId,
      room:getFacilityById(facilityId)?.room||'',typeName:'Admin Block',
      date, startTime:slot, endTime:(parseInt(slot)+1).toString().padStart(2,'0')+':00',
      purpose:'[Admin: Slot Blocked]', attendees:0, requirements:'',
      userName:'Admin', userEmail:'admin@university.edu',
      status:'approved', createdAt:new Date().toISOString()
    });
  });
  saveBookings(bks);
  keys.forEach(k=>adminSelectedSlots.delete(k));
  refreshAdminSlotPanel(facilityId);
  showToast(`${keys.length} slot${keys.length>1?'s':''} blocked successfully`,'success');
}

function openViewSlotsPanel(facilityId) {
  const panel = document.getElementById('slot-panel-'+facilityId);
  if(!panel) return;
  const isHidden = panel.classList.contains('hidden');
  // Close all panels first
  document.querySelectorAll('[id^="slot-panel-"]').forEach(p=>p.classList.add('hidden'));
  if(isHidden) {
    panel.classList.remove('hidden');
    panel.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
}

// ===================== ADD / EDIT FACILITY MODAL =====================
function openAddFacilityModal(existingId) {
  const isEdit = !!existingId;
  const existing = isEdit ? getFacilityById(existingId) : null;
  const selAmenities = new Set((existing?.amenities||existing?.features||[]).map(a=>a.id||a.label.toLowerCase().replace(/\s+/g,'-')));
  window._editAmenities = new Set(selAmenities);
  window._editImageData = existing?.image || ''; // may be URL or base64

  document.getElementById('modal-overlay').innerHTML = `
  <div class="fixed inset-0 bg-[#1C1B20]/70 backdrop-blur-sm flex items-center justify-center p-4 fade-in" onclick="handleOverlayClick(event)">
    <div class="bg-[#FCF8FF] rounded-3xl shadow-2xl w-full max-w-2xl scale-in overflow-hidden flex flex-col" style="max-height:92vh" onclick="event.stopPropagation()">
      <div class="bg-gradient-to-br from-[#534A92] to-[#6C63AC] p-6 text-white flex-shrink-0">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl font-black">${isEdit?'Edit Facility':'Add New Facility'}</h2>
            <p class="text-white/60 text-sm mt-0.5">${isEdit?'Update facility details and amenities':'Create a new bookable facility'}</p>
          </div>
          <button onclick="closeModal()" class="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
            <span class="material-symbols-outlined text-white text-xl">close</span>
          </button>
        </div>
      </div>
      <div class="p-6 overflow-y-auto space-y-5">
        <!-- Basic Info -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Facility Name *</label>
            <input id="af-name" type="text" value="${existing?.name||''}" placeholder="e.g. Einstein Hall" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
          </div>
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Room / Code *</label>
            <input id="af-room" type="text" value="${existing?.room||''}" placeholder="e.g. ROOM 301" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Type *</label>
            <select id="af-type" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all">
              <option value="conferenceHall" ${existing?.type==='conferenceHall'?'selected':''}>Conference Hall</option>
              <option value="auditorium" ${existing?.type==='auditorium'?'selected':''}>Auditorium</option>
              <option value="mfc" ${existing?.type==='mfc'?'selected':''}>Multi Facility Center</option>
              <option value="special" ${existing?.type==='special'?'selected':''}>Special Permission</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Capacity</label>
            <input id="af-capacity" type="number" min="1" value="${existing?.capacity||''}" placeholder="Max persons" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all"/>
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-1.5">Description</label>
          <textarea id="af-desc" rows="2" placeholder="Brief description of the facility…" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent resize-none transition-all">${existing?.desc||''}</textarea>
        </div>

        <!-- Image: URL or Upload -->
        <div>
          <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-2">Venue Image</label>
          <div class="flex gap-2 mb-3">
            <button type="button" id="img-tab-url" onclick="switchImgTab('url')" class="px-4 py-2 rounded-full text-xs font-black transition-all bg-[#534A92] text-white">Image URL</button>
            <button type="button" id="img-tab-upload" onclick="switchImgTab('upload')" class="px-4 py-2 rounded-full text-xs font-black transition-all bg-[#E5E1E8] text-[#474550]">Upload File</button>
          </div>
          <!-- URL tab -->
          <div id="img-panel-url">
            <input id="af-image-url" type="url" value="${(existing?.image&&!existing.image.startsWith('data:'))?existing.image:''}" placeholder="https://example.com/photo.jpg" class="w-full bg-[#E5E1E8] rounded-xl px-4 py-3 text-sm font-medium text-[#1c1b20] border-2 border-transparent transition-all" oninput="previewImageUrl(this.value)"/>
          </div>
          <!-- Upload tab -->
          <div id="img-panel-upload" class="hidden">
            <div class="border-2 border-dashed border-[#c9c4d2] rounded-2xl p-6 text-center bg-white hover:border-[#6C63AC] transition-colors cursor-pointer" onclick="document.getElementById('af-image-file').click()">
              <span class="material-symbols-outlined text-[#c9c4d2] text-3xl block mb-2">cloud_upload</span>
              <p class="text-sm font-bold text-[#474550]">Click to upload or drag & drop</p>
              <p class="text-xs text-[#787581] mt-1">JPG, JPEG, PNG, WEBP · Max 5 MB · Recommended: 1280×720px or larger</p>
              <input id="af-image-file" type="file" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" class="hidden" onchange="handleImageUpload(this)"/>
            </div>
          </div>
          <!-- Preview -->
          <div id="img-preview-wrap" class="mt-3 ${window._editImageData?'':'hidden'}">
            <p class="text-xs font-bold text-[#787581] uppercase tracking-wide mb-1">Preview</p>
            <div class="relative w-full h-40 rounded-2xl overflow-hidden bg-[#F7F2F9]">
              <img id="img-preview" src="${window._editImageData||''}" class="w-full h-full object-cover"/>
              <button type="button" onclick="clearImage()" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors">
                <span class="material-symbols-outlined text-white" style="font-size:14px">close</span>
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <label class="text-xs font-bold text-[#474550] uppercase tracking-wide">Availability</label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input id="af-available" type="checkbox" ${existing?.available===false?'':'checked'} class="w-4 h-4 rounded accent-[#534A92]"/>
            <span class="text-sm font-semibold text-[#1c1b20]">Available for booking</span>
          </label>
        </div>

        <!-- Amenities -->
        <div>
          <label class="block text-xs font-bold text-[#474550] uppercase tracking-wide mb-3">Amenities & Features</label>
          <div class="grid grid-cols-4 gap-2" id="amenity-grid">
            ${AMENITY_OPTIONS.map(a=>`
            <button type="button" id="am-${a.id}" onclick="toggleAmenity('${a.id}')"
              class="flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all text-center amenity-btn ${selAmenities.has(a.id)?'border-[#6C63AC] bg-[#e5deff] text-[#534A92]':'border-[#e5e1e8] bg-white text-[#787581] hover:border-[#c9c4d2]'}">
              <span class="material-symbols-outlined text-lg">${a.icon}</span>
              <span class="text-[10px] font-bold leading-tight">${a.label}</span>
            </button>`).join('')}
          </div>
        </div>
      </div>
      <div class="p-6 pt-4 flex gap-3 flex-shrink-0 border-t border-[#E5E1E8]">
        <button onclick="closeModal()" class="flex-1 py-3 rounded-full bg-[#E5E1E8] text-[#474550] font-bold text-sm hover:bg-[#c9c4d2] transition-colors">Cancel</button>
        <button onclick="saveFacility(${isEdit?`'${existingId}'`:'null'})" class="flex-1 py-3 rounded-full bg-gradient-to-br from-[#534A92] to-[#6C63AC] text-white font-black text-sm shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-sm">${isEdit?'save':'add_circle'}</span> ${isEdit?'Save Changes':'Add Facility'}
        </button>
      </div>
    </div>
  </div>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function switchImgTab(tab) {
  const urlPanel = document.getElementById('img-panel-url');
  const uploadPanel = document.getElementById('img-panel-upload');
  const urlBtn = document.getElementById('img-tab-url');
  const uploadBtn = document.getElementById('img-tab-upload');
  if(tab==='url') {
    urlPanel.classList.remove('hidden'); uploadPanel.classList.add('hidden');
    urlBtn.className='px-4 py-2 rounded-full text-xs font-black transition-all bg-[#534A92] text-white';
    uploadBtn.className='px-4 py-2 rounded-full text-xs font-black transition-all bg-[#E5E1E8] text-[#474550]';
  } else {
    urlPanel.classList.add('hidden'); uploadPanel.classList.remove('hidden');
    uploadBtn.className='px-4 py-2 rounded-full text-xs font-black transition-all bg-[#534A92] text-white';
    urlBtn.className='px-4 py-2 rounded-full text-xs font-black transition-all bg-[#E5E1E8] text-[#474550]';
  }
}

function previewImageUrl(url) {
  if(!url) { clearImage(); return; }
  window._editImageData = url;
  const wrap = document.getElementById('img-preview-wrap');
  const img = document.getElementById('img-preview');
  if(wrap && img) { img.src = url; wrap.classList.remove('hidden'); }
}

function handleImageUpload(input) {
  const file = input.files[0];
  if(!file) return;
  if(file.size > 5*1024*1024) { showToast('Image must be under 5 MB','error'); input.value=''; return; }
  const allowed = ['image/jpeg','image/png','image/webp'];
  if(!allowed.includes(file.type)) { showToast('Only JPG, PNG, WEBP supported','error'); input.value=''; return; }
  const reader = new FileReader();
  reader.onload = e => {
    window._editImageData = e.target.result;
    const wrap = document.getElementById('img-preview-wrap');
    const img = document.getElementById('img-preview');
    if(wrap && img) { img.src = e.target.result; wrap.classList.remove('hidden'); }
    showToast('Image loaded successfully','success');
  };
  reader.readAsDataURL(file);
}

function clearImage() {
  window._editImageData = '';
  const wrap = document.getElementById('img-preview-wrap');
  const urlInput = document.getElementById('af-image-url');
  const fileInput = document.getElementById('af-image-file');
  if(wrap) wrap.classList.add('hidden');
  if(urlInput) urlInput.value = '';
  if(fileInput) fileInput.value = '';
}

function openEditFacilityModal(facilityId) {
  openAddFacilityModal(facilityId);
}

function toggleAmenity(id) {
  if(!window._editAmenities) window._editAmenities = new Set();
  const btn = document.getElementById('am-'+id);
  if(window._editAmenities.has(id)) {
    window._editAmenities.delete(id);
    btn.classList.remove('border-[#6C63AC]','bg-[#e5deff]','text-[#534A92]');
    btn.classList.add('border-[#e5e1e8]','bg-white','text-[#787581]','hover:border-[#c9c4d2]');
  } else {
    window._editAmenities.add(id);
    btn.classList.add('border-[#6C63AC]','bg-[#e5deff]','text-[#534A92]');
    btn.classList.remove('border-[#e5e1e8]','bg-white','text-[#787581]','hover:border-[#c9c4d2]');
  }
}

function saveFacility(existingId) {
  const name = document.getElementById('af-name')?.value.trim();
  const room = document.getElementById('af-room')?.value.trim();
  const type = document.getElementById('af-type')?.value;
  const capacity = parseInt(document.getElementById('af-capacity')?.value)||0;
  const desc = document.getElementById('af-desc')?.value.trim();
  const available = document.getElementById('af-available')?.checked;

  // Image: use _editImageData (set by URL preview or file upload)
  const urlVal = document.getElementById('af-image-url')?.value.trim();
  const image = window._editImageData || urlVal || '';

  if(!name){ showToast('Please enter a facility name','error'); return; }
  if(!room){ showToast('Please enter a room/code','error'); return; }

  const typeNames = {conferenceHall:'Conference Hall',auditorium:'Auditorium',mfc:'Multi Facility Center',special:'Special Permission'};
  const amenities = (window._editAmenities ? [...window._editAmenities] : []).map(id=>{
    const a = AMENITY_OPTIONS.find(x=>x.id===id);
    return a ? {id:a.id,icon:a.icon,label:a.label} : null;
  }).filter(Boolean);

  const custom = getCustomFacilities();

  if(existingId && existingId !== 'null') {
    // Check if it's a base facility (needs to be stored as an override in custom)
    const isBase = getAllFacilities().find(f=>f.id===existingId)?._base;
    const existingCustomIdx = custom.findIndex(f=>f.id===existingId);

    if(existingCustomIdx >= 0) {
      // Already in custom – update directly
      custom[existingCustomIdx] = {...custom[existingCustomIdx], name,room,type,typeName:typeNames[type],capacity,desc,image,available,amenities,features:amenities,_base:false};
    } else if(isBase) {
      // Base facility – create an override entry in custom with same id
      custom.push({id:existingId, name,room,type,typeName:typeNames[type],capacity,desc,image,available,amenities,features:amenities,_base:false,_override:true});
    }
    saveCustomFacilities(custom);
    showToast('Facility updated successfully','success');
  } else {
    const newF = {
      id:'cf-'+Date.now(), name,room,type,typeName:typeNames[type],capacity,desc,image,available,
      amenities,features:amenities,_base:false
    };
    custom.push(newF);
    saveCustomFacilities(custom);
    showToast('Facility added successfully!','success');
  }
  window._editImageData = '';
  closeModal();
  navigate('admin-facilities');
}

function deleteFacility(facilityId) {
  if(!confirm('Delete this facility? Bookings for it will still exist in records.')) return;
  const custom = getCustomFacilities();
  const updated = custom.filter(f=>f.id!==facilityId);
  // Also mark base facility as deleted if it was an override
  const f = getAllFacilities().find(x=>x.id===facilityId);
  if(f?._base && !custom.find(c=>c.id===facilityId)) {
    // push a tombstone to hide it
    updated.push({id:facilityId, _deleted:true, _base:false, name:'', room:'', type:'deleted', typeName:'Deleted', available:false});
  }
  saveCustomFacilities(updated);
  showToast('Facility removed','info');
  navigate('admin-facilities');
}

// ===================== MAIN RENDER =====================
function render() {
  const app = document.getElementById('app');
  if (!currentUser) { app.innerHTML = renderLogin(); return; }

  if (currentUser.role==='admin') {
    const topTitles = {'admin-overview':'Overview','admin-pending':'Pending Requests','admin-all':'All Bookings','admin-facilities':'Facilities'};
    let content;
    if (currentPage==='admin-overview') content = renderAdminOverview();
    else if (currentPage==='admin-pending') content = renderAdminPending();
    else if (currentPage==='admin-all') content = renderAdminAll();
    else if (currentPage==='admin-facilities') content = renderAdminFacilities();
    else { currentPage='admin-pending'; content=renderAdminPending(); }

    app.innerHTML = `
    <div class="flex h-screen overflow-hidden bg-[#F7F2F9]">
      ${renderAdminSidebar(currentPage)}
      <main class="ml-64 flex-1 h-screen overflow-y-auto bg-[#F7F2F9]">
        <header class="bg-[#1C1B20]/95 backdrop-blur-md sticky top-0 z-30 flex justify-between items-center px-8 py-4 shadow-lg">
          <h1 class="text-xl font-black text-white">${topTitles[currentPage]||'Admin'}</h1>
          <div class="flex items-center gap-3">
            <span class="text-xs text-white/40 font-bold uppercase tracking-wider">${new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</span>
            <div class="w-9 h-9 bg-[#534A92] rounded-full flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-lg">admin_panel_settings</span>
            </div>
          </div>
        </header>
        ${content}
      </main>
    </div>`;
    return;
  }

  // Faculty
  const pageTitles = {'dashboard':'Campus Dashboard','my-bookings':'My Bookings','history':'Request History','notifications':'Notifications'};
  let content;
  if (currentPage==='dashboard') content = renderDashboard();
  else if (currentPage==='my-bookings') content = renderMyBookings(false);
  else if (currentPage==='history') content = renderMyBookings(true);
  else if (currentPage==='notifications') content = renderNotifications();
  else { currentPage='dashboard'; content=renderDashboard(); }

  app.innerHTML = `
  <div class="flex h-screen overflow-hidden bg-[#FCF8FF]">
    ${renderSidebar(currentPage)}
    <main class="ml-64 flex-1 h-screen overflow-y-auto bg-[#FCF8FF]">
      ${renderTopBar(pageTitles[currentPage]||'Dashboard')}
      ${content}
    </main>
  </div>`;
}

// ===================== INIT =====================
seedDemo();
render();
