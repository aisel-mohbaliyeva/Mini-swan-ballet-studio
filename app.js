/* Teacher data */
const teachers = [
    { name:"Elnurə Mustafayeva", role:"Baş balet müəllimi", img:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=440&h=560&fit=crop&crop=face", bio:"Elnurə Mustafayeva balet sənəti ilə uşaqlıq illərindən məşğul olur. Azərbaycan Dövlət Mədəniyyət və İncəsənət Universitetinin Xoreoqrafiya fakültəsini bitirmiş, balet üzrə magistratura təhsili almışdır. Beynəlxalq seminarlar və ustad dərsləri keçmiş, studiyamızın 2019-cu ildə təsisçisidir.", skills:["Klassik balet texnikası","Uşaq psixologiyası əsasları","Səhnə mədəniyyəti","Solo xoreoqrafiya","Məşq metodikası"] },
    { name:"Sevinç Beydullayeva", role:"Köməkçi müəllim", img:"https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=440&h=560&fit=crop&crop=face", bio:"Sevinç Beydullayeva 8 illik balet təcrübəsinə malikdir. Gənc şagirdlərə baletin əsas elementlərini sevdirməkdə ixtisaslaşmışdır. Uşaqlarla işləmədə səbirli və yaradıcı yanaşması ilə seçilir.", skills:["Başlanğıc balet","Ritm məşqləri","Qrup dərsləri","Rəqs nəzəriyyəsi","Uşaq inkişafı"] },
    { name:"Təranə Vəliyeva", role:"Köməkçi müəllim", img:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=440&h=560&fit=crop&crop=face", bio:"Təranə Vəliyeva müasir rəqs və klassik balet üzrə bilikləri birləşdirən müəllimdir. Şagirdlərin yaradıcı potensialını açmağa yönəlmiş dərslər keçirir. Bakı Musiqi Akademiyasının məzunudur.", skills:["Müasir balet","Çeviklik məşqləri","Yaradıcı rəqs","Port de bras","Gənc ballerinalar"] },
    { name:"Lalə Məmmədova", role:"Mentor", img:"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=440&h=560&fit=crop&crop=face", bio:"Lalə Məmmədova 15 illik balet karyerasına malikdir. Keçmiş peşəkar rəqqasə olaraq müxtəlif teatr tamaşalarında iştirak etmişdir. Bu günlərdə gənc istedadlara mentor kimi dəstək verir.", skills:["Professional balet","Səhnə texnikası","Artistizm","Tarazlıq","Pointe hazırlığı"] },
    { name:"Nigar Rəhimova", role:"Mentor", img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=440&h=560&fit=crop&crop=face", bio:"Nigar Rəhimova Avropa balet məktəblərindən birini tamamlamış, beynəlxalq müsabiqələrdə mükafatçı olmuşdur. Uşaqlara karyera yolu haqqında məsləhətlər verir, texniki hazırlığa fokuslanır.", skills:["Beynəlxalq texnika","Yarışma hazırlığı","Grand allegro","Adagio","Texniki qiymətləndirmə"] },
    { name:"Zümrüd Hüseynova", role:"Uşaq psixoloqu", img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=440&h=560&fit=crop&crop=face", bio:"Zümrüd Hüseynova klinik uşaq psixoloqu olub 10 illik təcrübəyə malikdir. Uşaqların emosional inkişafını və özünə inamını dəstəkləyir. Balet vasitəsilə terapevtik inkişaf proqramı hazırlamışdır.", skills:["Uşaq psixologiyası","Emosional inkişaf","Özünəinam","Sosial bacarıqlar","Valideyn məsləhəti"] }
];

/* Modal */
const overlay  = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('modalClose');

document.querySelectorAll('.teacher-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = parseInt(btn.closest('.teacher-card').dataset.id);
        const t  = teachers[id];
        document.getElementById('modalImg').src           = t.img;
        document.getElementById('modalImg').alt           = t.name;
        document.getElementById('modalName').textContent  = t.name;
        document.getElementById('modalRole').textContent  = t.role;
        document.getElementById('modalBio').textContent   = t.bio;
        document.getElementById('modalSkills').innerHTML  = t.skills.map(s=>`<li>${s}</li>`).join('');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});
function closeModal(){ overlay.classList.remove('active'); document.body.style.overflow = ''; }
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if(e.target===overlay) closeModal(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

/* Nav toggle */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
navToggle.addEventListener('click', ()=> navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navMenu.classList.remove('open')));
