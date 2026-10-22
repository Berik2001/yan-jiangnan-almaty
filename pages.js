// Subpage strings: [zh, ru, en, kz]
const LI={zh:0,ru:1,en:2,kz:3},U="https://images.unsplash.com/",FB=U+"photo-1563245372-f21724e3856d?w=600";
const S={
 menuT:["菜单","Меню","Menu","Мәзір"],banT:["包间与宴会","Залы и банкеты","Rooms & Banquets","Залдар мен банкет"],
 serT:["设施与服务","Удобства и услуги","Facilities & Services","Қызметтер"],conT:["联系与订座","Контакты и бронь","Contact & Reservation","Байланыс және бронь"],
 all:["全部","Все","All","Барлығы"],cats:[["凉菜","Закуски","Cold dishes","Салқын тағамдар"],["热菜","Горячее","Hot dishes","Ыстық тағамдар"],["点心","Димсам","Dim sum","Димсам"],["面饭","Лапша и рис","Noodles & rice","Кеспе және күріш"],["汤","Супы","Soups","Сорпалар"]],
 hot:["招牌","Хит","Chef's pick","Хит"],spicy:["辣","Остро","Spicy","Ащы"],order:["加入订座备注","Заказать при брони","Pre-order with booking","Броньмен тапсырыс"],
 cap:["人","гостей","guests","қонақ"],area:["面积","площадь","area","аудан"],book:["预订此厅","Забронировать зал","Book this hall","Залды брондау"],
 halls:[["VIP包间 · 牡丹","VIP-комната «Пион»","VIP Room · Peony","VIP бөлме «Пион»","photo-1414235077428-338989a2e8c0",12,40,[["独立洗手间","Отдельный санузел","Private restroom","Жеке дәретхана"],["电视与卡拉OK","ТВ и караоке","TV & karaoke","ТВ және караоке"],["专属服务员","Личный официант","Personal waiter","Жеке даяшы"]]],
  ["宴会厅 · 江南","Банкетный зал «Цзяннань»","Banquet Hall · Jiangnan","«Цзяннань» банкет залы","photo-1519167758481-83f550bb49b3",150,320,[["舞台与灯光音响","Сцена, свет и звук","Stage, light & sound","Сахна, жарық, дыбыс"],["婚礼与周年庆","Свадьбы и юбилеи","Weddings & anniversaries","Той мен мерейтой"],["定制菜单","Индивидуальное меню","Custom menu","Жеке мәзір"]]],
  ["商务厅 · 金竹","Деловой зал «Золотой бамбук»","Business Hall · Golden Bamboo","«Алтын бамбук» іскерлік залы","photo-1505236858219-8359eb29e329",40,90,[["投影与麦克风","Проектор и микрофон","Projector & mic","Проектор және микрофон"],["茶歇服务","Кофе-брейк","Tea break service","Кофе-брейк"],["公司晚宴","Корпоративные ужины","Corporate dinners","Корпоративтік кеш"]]]],
 svc:[["📶","免费Wi-Fi","Бесплатный Wi-Fi","Free Wi-Fi","Тегін Wi-Fi","全店高速覆盖","Быстрый интернет во всём зале","Fast internet throughout","Барлық залда жылдам интернет"],
  ["🚗","免费停车","Бесплатная парковка","Free parking","Тегін тұрақ","40个车位","40 мест у входа","40 spaces by the entrance","Кіреберісте 40 орын"],
  ["🛵","外卖配送","Доставка","Delivery","Жеткізу","阿拉木图市内60分钟送达","По Алматы за 60 минут","Across Almaty in 60 min","Алматы бойынша 60 минутта"],
  ["🎂","生日与庆典","Праздники","Celebrations","Мерекелер","装饰、蛋糕、惊喜安排","Декор, торт и сюрпризы","Decor, cake & surprises","Безендіру, торт, тосын сый"],
  ["👶","儿童友好","Для детей","Kids friendly","Балаларға","儿童座椅与儿童餐","Детские стулья и меню","High chairs & kids menu","Балалар орындығы мен мәзірі"],
  ["🗣","多语言服务","Персонал на 4 языках","4-language staff","4 тілде қызмет","中文 · RU · KZ · EN","中文 · RU · KZ · EN","中文 · RU · KZ · EN","中文 · RU · KZ · EN"]],
 bst:[["3","包厢与大厅","зала","halls","зал"],["300","最多宾客","гостей максимум","guests max","қонаққа дейін"],["1000+","成功活动","мероприятий","events hosted","іс-шара"],["15","年经验","лет опыта","years of craft","жыл тәжірибе"]],
 pkT:["宴会套餐","Банкетные пакеты","Banquet packages","Банкет пакеттері"],pp:["位","гость","guest","қонақ"],
 pk:[["Silver","银宴","Серебряный","Silver","Күміс",15000,[["8道菜","8 блюд","8 courses","8 тағам"],["茶与软饮","Чай и напитки","Tea & soft drinks","Шай мен сусындар"],["基础装饰","Базовый декор","Basic decor","Негізгі безендіру"]]],
  ["Gold","金宴","Золотой","Gold","Алтын",22000,[["12道菜 + 北京烤鸭","12 блюд + утка по-пекински","12 courses + Peking duck","12 тағам + Пекин үйрегі"],["鲜花与灯光","Цветы и свет","Flowers & lighting","Гүл мен жарық"],["主持与音响","Ведущий и звук","Host & sound","Жүргізуші мен дыбыс"],["生日蛋糕","Торт в подарок","Complimentary cake","Сыйлық торт"]]],
  ["Imperial","御宴","Императорский","Imperial","Императорлық",35000,[["16道菜 + 龙虾","16 блюд + лобстер","16 courses + lobster","16 тағам + лобстер"],["全场定制布置","Полное оформление","Full custom styling","Толық безендіру"],["舞台演出","Шоу-программа","Live show","Шоу бағдарлама"],["专属宴会经理","Личный менеджер","Dedicated manager","Жеке менеджер"]]]],
 stT:["预订流程","Как это работает","How it works","Қалай жұмыс істейді"],
 st:[["联系我们","Свяжитесь с нами","Contact us","Бізге хабарласыңыз"],["选择厅与菜单","Выберите зал и меню","Choose hall & menu","Зал мен мәзірді таңдаңыз"],["确认细节","Согласуем детали","Confirm details","Мәліметтерді келісеміз"],["享受您的宴会","Наслаждайтесь праздником","Enjoy your event","Мерекеңізді тамашалаңыз"]],
 ctaT:["让您的宴会难忘","Сделаем ваш праздник незабываемым","Let's make your event unforgettable","Мерекеңізді ұмытылмас етейік"],
 d:["日期","Дата","Date","Күні"],tm:["时间","Время","Time","Уақыты"],gs:["人数","Гостей","Guests","Қонақтар"],
 zn:[["座位","Зона","Seating","Аймақ"],["大厅","Общий зал","Main hall","Негізгі зал"],["靠窗","У окна","By the window","Терезе жанында"],["VIP包间","VIP-комната","VIP room","VIP бөлме"]],
 hours:["营业时间","Часы работы","Opening hours","Жұмыс уақыты"],hrs:["每天 11:00 – 23:00","Ежедневно 11:00 – 23:00","Daily 11:00 – 23:00","Күн сайын 11:00 – 23:00"],
 phone:["电话","Телефон","Phone","Телефон"],resv:["在线订座","Онлайн-бронь","Online reservation","Онлайн брондау"],
 nm:["您的姓名","Ваше имя","Your name","Атыңыз"],tel:["电话号码","Телефон","Phone number","Телефон нөмірі"],note:["备注（包间、生日等）","Пожелания (VIP, день рождения…)","Notes (VIP room, birthday…)","Тілектер (VIP, туған күн…)"],
 send:["提交订座 →","Отправить бронь →","Send reservation →","Брондауды жіберу →"]
};
// [img, price, cat, spicy, hot, zh, ru, en, kz]
const M=[["photo-1525755662778-989d0524087e",3900,1,1,1,"宫保鸡丁","Гунбао с курицей","Kung Pao Chicken","Гунбао тауығы"],
 ["photo-1518492104633-130d0cc84637",12500,1,0,1,"北京烤鸭","Утка по-пекински","Peking Duck","Пекин үйрегі"],
 ["photo-1563245372-f21724e3856d",2800,2,0,1,"小笼包","Сяолунбао","Xiaolongbao","Сяолунбао"],
 ["photo-1512058564366-18510be2db19",3200,1,1,0,"麻婆豆腐","Мапо тофу","Mapo Tofu","Мапо тофу"],
 ["photo-1496116218417-1a781b1c416c",2600,2,0,0,"虾饺","Хакао с креветкой","Har Gow","Асшаян хакао"],
 ["photo-1569718212165-3a8278d5f624",2900,3,1,0,"兰州拉面","Ланчжоуский лагман","Lanzhou Noodles","Ланчжоу кеспесі"],
 ["photo-1585032226651-759b368d7246",2400,3,0,0,"扬州炒饭","Жареный рис по-янчжоуски","Yangzhou Fried Rice","Янчжоу қуырылған күріші"],
 ["photo-1552611052-33e04de081de",3100,3,1,1,"担担面","Лапша дань-дань","Dan Dan Noodles","Дань-дань кеспесі"],
 ["photo-1547592166-23ac45744acd",2200,4,1,0,"酸辣汤","Кисло-острый суп","Hot & Sour Soup","Қышқыл-ащы сорпа"],
 ["photo-1617093727343-374698b1b08d",2000,0,1,0,"拍黄瓜","Огурцы по-китайски","Smashed Cucumber","Қытайша қияр"],
 ["photo-1541696432-82c6da8ce7bf",4800,1,0,0,"糖醋里脊","Свинина в кисло-сладком","Sweet & Sour Pork","Тәтті-қышқыл ет"],
 ["photo-1626804475297-41608ea09aeb",3600,0,0,1,"口水鸡","Курица «Слюнки текут»","Mouthwatering Chicken","«Сілекей» тауығы"]];

// Rooms: [photos, price, guests, m2, beds-key, badge, zh, ru, en, kz, desc zh/ru/en/kz, amenities]
const RM=[
 [[45,46,47,43,17],45000,2,25,"b2",1,"标准双床房","Стандартный Twin","Standard Twin","Стандарт Twin",["适合商务出行的舒适客房，两张单人床，现代内饰。","Уютный номер для деловых поездок: две отдельные кровати и современный интерьер.","A cozy room for business trips. Two separate beds and a modern interior.","Іссапарға ыңғайлы бөлме: екі бөлек төсек және заманауи интерьер."],["wifi","ac","bath","tv","desk"]],
 [[40,42,25,18],50000,2,30,"b1",0,"豪华大床房","Делюкс Double","Deluxe Double","Делюкс Double",["大理石墙面与深蓝色调，宽敞舒适的大床。","Мраморные стены и глубокий синий: просторно, стильно и тихо.","Marble walls and deep navy tones. Spacious, stylish and quiet.","Мәрмәр қабырға мен қою көк түс: кең әрі сәнді."],["wifi","ac","bath","tv","desk"]],
 [[41,21,19],50000,2,25,"b1",0,"阳台大床房","Double с балконом","Double with Balcony","Балконы бар Double",["带阳台的浪漫之选，享受新鲜空气与城市景观。","Романтичный вариант с балконом и видом на город.","A romantic option with a balcony, fresh air and city views.","Балконы бар романтикалық нұсқа, қала көрінісі."],["wifi","ac","bath","tv","balcony"]],
 [[15,43,18,13],48000,2,24,"b1",0,"经典大床房","Классический Double","Classic Double","Классикалық Double",["经典欧式壁纸与温馨灯光，安静休息之所。","Классические обои, тёплый свет — место для спокойного отдыха.","Classic damask walls and warm lighting for a restful stay.","Классикалық тұсқағаз бен жылы жарық — тыныш демалыс."],["wifi","ac","bath","tv","desk"]],
 [[38,20,25],65000,4,40,"b3",0,"家庭房","Семейный номер","Family Room","Отбасылық бөлме",["双床加沙发区，适合家庭与朋友同住。","Две кровати и зона отдыха — для семьи и друзей.","Two beds plus a lounge area, ideal for families and friends.","Екі төсек және демалыс аймағы — отбасыға арналған."],["wifi","ac","bath","tv","sofa"]],
 [[44,39,16,19],80000,2,45,"b1",2,"行政套房","Полулюкс","Junior Suite","Жартылай люкс",["全景落地窗、休息区与双洗手盆浴室。","Панорамные окна, гостиная зона и ванная с двумя раковинами.","Panoramic windows, a lounge area and a double-sink bathroom.","Панорамалық терезе, қонақ аймағы және екі раковиналы ванна."],["wifi","ac","bath","tv","sofa"]]];
const AM={wifi:["📶","免费Wi-Fi","Wi-Fi","Free Wi-Fi","Тегін Wi-Fi"],ac:["❄️","空调","Кондиционер","Air conditioning","Кондиционер"],bath:["🛁","独立卫浴","Своя ванная","Private bathroom","Жеке ванна"],tv:["📺","电视","ТВ","TV","ТД"],desk:["💼","办公桌","Рабочее место","Workspace","Жұмыс орны"],balcony:["🌿","阳台","Балкон","Balcony","Балкон"],sofa:["🛋","沙发区","Зона отдыха","Lounge area","Демалыс аймағы"]};
const RS={nr:["客房","Номера","Rooms","Бөлмелер"],rT:["客房与价格","Номера и цены","Rooms & Rates","Бөлмелер мен бағалар"],rSub:["为您的入住找到理想客房","Найдите идеальный номер для вашего отдыха","Find the perfect room for your stay","Демалысыңызға мінсіз бөлмені табыңыз"],
 ci:["入住 — 退房","Заезд — выезд","Check-in — Check-out","Кіру — шығу"],gu:["人数","Гости","Guests","Қонақтар"],ad:["2位成人","2 взрослых","2 adults","2 ересек"],sr:["优惠价格","Тарифы","Special rates","Тарифтер"],best:["最优价格","Лучшая цена","Best available rates","Ең жақсы баға"],mod:["更新搜索","Изменить поиск","Modify search","Іздеуді өзгерту"],
 found:["间客房","номеров найдено","rooms found","бөлме табылды"],sort:["排序","Сортировка","Sort by","Сұрыптау"],rec:["推荐","Рекомендуемые","Recommended","Ұсынылған"],lo:["价格从低到高","Сначала дешевле","Price: low to high","Арзанынан"],hi:["价格从高到低","Сначала дороже","Price: high to low","Қымбатынан"],
 from:["起 / 晚","от / ночь","From / night","бастап / түн"],sel:["选择客房","Выбрать номер","Select room","Бөлмені таңдау"],det:["查看详情","Подробнее","View details","Толығырақ"],
 bd:[["人","гостя","guests","қонақ"]],b1:["1张大床","1 большая кровать","1 large bed","1 үлкен төсек"],b2:["2张单人床","2 односпальные","2 single beds","2 бір кісілік"],b3:["2床 + 沙发","2 кровати + диван","2 beds + sofa","2 төсек + диван"],
 pop:["最受欢迎","Популярный","Most popular","Танымал"],lux:["最佳景观","Лучший вид","Best view","Үздік көрініс"],
 galT:["酒店环境","Атмосфера отеля","Hotel gallery","Қонақ үй атмосферасы"]};
["zh","ru","en","kz"].forEach((l,i)=>D[l].nr=RS.nr[i]);
const r=k=>RS[k][LI[document.documentElement.lang]];let rSort=0,rIdx={};
const GAL=[28,27,11,12,33,30,31,32,24,14,36,37,23,22,26,34,35,13];
function rcard(x){const i=RM.indexOf(x),k=rIdx[i]||0,ph=x[0];return `<div class="room">
 <div class="rg"><div class="rmain" style="background-image:url(img/h/${ph[k]}.jpg)" onclick="rDet(${i})"><button onclick="event.stopPropagation();rSl(${i},-1)">‹</button><span>${k+1} / ${ph.length}</span><button onclick="event.stopPropagation();rSl(${i},1)">›</button></div>
 <div class="rth">${ph.slice(0,3).map((p,j)=>`<img src="img/h/${p}.jpg" loading="lazy" class="${j==k?"on":""}" onclick="rIdx[${i}]=${j};render()">`).join("")}</div></div>
 <div class="rinfo">${x[5]?`<em>${x[5]==1?r("pop"):r("lux")}</em>`:""}<h3>${x[6+LI[document.documentElement.lang]]}</h3><p>${x[10][LI[document.documentElement.lang]]}</p>
 <div class="rsp"><span>👤 ${x[2]} ${RS.bd[0][LI[document.documentElement.lang]]}</span><span>📐 ${x[3]} m²</span><span>🛏 ${r(x[4])}</span></div>
 <div class="ram">${x[11].map(a=>`<span>${AM[a][0]} ${AM[a][1+LI[document.documentElement.lang]]}</span>`).join("")}</div></div>
 <div class="rpr"><small>${r("from")}</small><b>${x[1].toLocaleString("ru")} ₸</b><a class="btn" href="contact.html#res">${r("sel")} →</a><button class="out" onclick="rDet(${i})">${r("det")}</button></div></div>`}
function rSl(i,d){const n=RM[i][0].length;rIdx[i]=((rIdx[i]||0)+d+n)%n;render()}
function rDet(i){const x=RM[i];let k=rIdx[i]||0;const m=document.getElementById("mod");
 const draw=()=>{m.innerHTML=`<div class="box rbox"><div class="rbig" style="background-image:url(img/h/${x[0][k]}.jpg)"><span class="x" onclick="mod.classList.remove('on')">×</span><button id="pv">‹</button><button id="nx">›</button></div><div class="rstrip">${x[0].map((p,j)=>`<img src="img/h/${p}.jpg" data-j="${j}" class="${j==k?"on":""}">`).join("")}</div><div class="b"><h2>${x[6+LI[document.documentElement.lang]]}</h2><p style="margin:8px 0;color:#6b5a4c">${x[10][LI[document.documentElement.lang]]}</p><div class="ram">${x[11].map(a=>`<span>${AM[a][0]} ${AM[a][1+LI[document.documentElement.lang]]}</span>`).join("")}</div><div class="price" style="font-size:24px;margin:14px 0">${x[1].toLocaleString("ru")} ₸ <small style="color:var(--mut);font-size:13px">${r("from")}</small></div><a class="btn" href="contact.html#res">${r("sel")} →</a></div></div>`;
 pv.onclick=()=>{k=(k-1+x[0].length)%x[0].length;draw()};nx.onclick=()=>{k=(k+1)%x[0].length;draw()};m.querySelectorAll(".rstrip img").forEach(im=>im.onclick=()=>{k=+im.dataset.j;draw()})};
 draw();m.classList.add("on")}
function lb(p){mod.innerHTML=`<div class="box rbox"><div class="rbig" style="background-image:url(img/h/${p}.jpg);height:70vh"><span class="x" onclick="mod.classList.remove('on')">×</span></div></div>`;mod.classList.add("on")}

const HS={t1:["阿拉木图的<br>理想商务下榻之地","Идеальный бизнес-отель<br>в центре Алматы","Your ideal business stay<br>in Almaty","Алматыдағы мінсіз<br>іскерлік қонақ үй"],
 t2:["舒适入住 · 中式美食 · 专业会议 · 贴心服务","Комфорт · Китайская кухня · Конференции · Сервис","Comfort · Chinese cuisine · Meetings · Care","Жайлылық · Қытай асханасы · Конференция · Қызмет"],
 bk:["立即预订","Забронировать","Book now","Брондау"],ex:["探索客房","Смотреть номера","Explore rooms","Бөлмелерді көру"],
 ci:["入住日期","Заезд","Check-in","Кіру"],co:["退房日期","Выезд","Check-out","Шығу"],gs:["入住人数","Гости","Guests","Қонақтар"],g2:["2位客人","2 гостя","2 guests","2 қонақ"],chk:["查看房价与预订","Цены и бронь","Check rates & book","Баға және бронь"],
 f:[["优越地理位置","Удобное расположение","Prime location","Ыңғайлы орналасу","位于阿拉木图市中心<br>出行便捷","В центре Алматы,<br>удобный транспорт","In central Almaty,<br>easy to get around","Алматы орталығында,<br>көлікке ыңғайлы"],
  ["正宗中餐美食","Китайская кухня","Authentic Chinese food","Қытай асханасы","宴江南中餐厅<br>地道中式风味","Ресторан «Янь Цзяннань»,<br>настоящий вкус Китая","Yan Jiangnan restaurant,<br>true Chinese flavour","«Янь Цзяннань» мейрамханасы,<br>нағыз қытай дәмі"],
  ["舒适豪华客房","Уютные номера","Comfortable rooms","Жайлы бөлмелер","宽敞明亮的住宿空间<br>满足商务与休闲需求","Просторные светлые номера<br>для работы и отдыха","Spacious, bright rooms<br>for business and leisure","Кең әрі жарық бөлмелер<br>жұмыс пен демалысқа"],
  ["专业会议与宴会","Конференции и банкеты","Meetings & banquets","Конференция және банкет","多功能会议厅<br>一站式活动服务","Многофункциональные залы,<br>сервис под ключ","Multi-purpose halls,<br>full-service events","Көпфункционалды залдар,<br>толық қызмет"]],
 rT:["舒适客房","Комфортные номера","Comfortable rooms","Жайлы бөлмелер"],rD:["宽敞舒适的住宿空间，现代化设施与贴心服务，为商务与休闲旅客打造理想的入住体验。","Просторные номера, современное оснащение и внимательный сервис — идеально для деловых поездок и отдыха.","Spacious rooms, modern amenities and attentive service — ideal for business and leisure travellers.","Кең бөлмелер, заманауи жабдық және мұқият қызмет — іссапар мен демалысқа."],rA:["查看所有房型","Все номера","View all rooms","Барлық бөлмелер"],
 cT:["宴江南 · 中国菜","Янь Цзяннань · Китайская кухня","Yan Jiangnan · Chinese cuisine","Янь Цзяннань · Қытай асханасы"],cD:["在阿拉木图品尝正宗的中国美食。<br>精选食材，地道风味，为您呈现精致的中餐体验。","Настоящая китайская кухня в Алматы.<br>Отборные продукты и аутентичный вкус.","Authentic Chinese cuisine in Almaty.<br>Fine ingredients and genuine flavour.","Алматыдағы нағыз қытай асханасы.<br>Таңдаулы өнімдер мен түпнұсқа дәм."],cA:["查看菜单","Смотреть меню","View menu","Мәзірді көру"],
 ci4:[["👨‍🍳","地道中式风味","Аутентичный вкус","Authentic flavour","Түпнұсқа дәм"],["🌿","精选新鲜食材","Свежие продукты","Fresh ingredients","Жаңа өнімдер"],["💎","优雅用餐环境","Элегантный зал","Elegant setting","Сәнді зал"],["👥","私人包间服务","VIP-комнаты","Private rooms","VIP бөлмелер"]],
 mT:["会议与宴会","Конференции и банкеты","Meetings & events","Конференция және банкет"],mD:["多功能会议厅配备先进的视听设备，适用于商务会议、企业活动、婚宴及各类宴会。专业团队为您提供一站式服务。","Многофункциональные залы с современной техникой для встреч, корпоративов, свадеб и банкетов. Команда профессионалов — сервис под ключ.","Multi-purpose halls with modern AV equipment for meetings, corporate events, weddings and banquets — full service by our team.","Заманауи техникасы бар залдар: кездесу, корпоратив, той және банкет. Толық қызмет."],mA:["了解更多","Подробнее","Learn more","Толығырақ"],
 m4:[["🏛","多功能会议厅","Многофункц. залы","Multi-purpose halls","Көпфункц. залдар","可容纳 50-200 人","на 50–200 гостей","50–200 guests","50–200 қонақ"],["🖥","先进视听设备","Современная техника","Modern AV","Заманауи техника","LED屏幕 · 同传设备","LED-экраны · синхрон","LED screens · interpreting","LED экран · аударма"],["🎀","专业宴会服务","Банкетный сервис","Banquet service","Банкет қызметі","婚宴 · 生日宴 · 公司年会","свадьбы · юбилеи · корпоративы","weddings · birthdays · corporate","той · мерейтой · корпоратив"],["🎨","定制化活动方案","Индивидуальный план","Tailored events","Жеке жоспар","满足不同需求","под любые задачи","for every need","кез келген қажеттілікке"]],
 lT:["优越的地理位置","Удобное расположение","Prime location","Ыңғайлы орналасу"],lD:["酒店位于阿拉木图市中心，交通便利，轻松前往机场、商业区及主要景点。","Отель в центре Алматы: легко добраться до аэропорта, деловых районов и достопримечательностей.","Located in central Almaty with easy access to the airport, business districts and main sights.","Қонақ үй Алматы орталығында: әуежай мен көрікті жерлерге жақын."],lA:["查看位置","На карте","View location","Картада"],
 l4:[["✈️","25","阿拉木图国际机场","Аэропорт Алматы","Almaty Airport","Алматы әуежайы"],["🏙","10","市中心","Центр города","City centre","Қала орталығы"],["💼","10","商务区","Деловой район","Business district","Іскерлік аудан"],["⛰","30","著名景点","Достопримечательности","Main sights","Көрікті жерлер"]],
 min:["分钟","мин","min","мин"],det:["详细位置","Маршрут","Directions","Бағыт"],cen:["阿拉木图市中心","Центр Алматы","Central Almaty","Алматы орталығы"]};
const h=k=>HS[k][LI[document.documentElement.lang]],L=()=>LI[document.documentElement.lang];
const t=k=>S[k][LI[document.documentElement.lang]],nm=a=>a[LI[document.documentElement.lang]];
const img=(id,w=700)=>`<img src="${U+id}?w=${w}" loading="lazy" onerror="this.onerror=null;this.src='${FB}'">`;
const pg=document.body.dataset.page;let cat=-1;

function shell(title,bg){return `<header class="hero phero" style="background-image:linear-gradient(90deg,#1a0f08ee,#1a0f0888 60%,#0004),url(${U+bg}?w=1800)">
<nav><a class="logo" href="index.html"><i><b>宴</b></i><span>YAN JIANGNAN<br>ALMATY</span></a>
<div class="links">${[["index","n1"],["rooms","nr"],["menu","n2"],["banquet","n3"],["services","n4"],["contact","n5"]].map(([p,k])=>`<a href="${p}.html" class="${p==pg?"on":""}" data-t="${k}"></a>`).join("")}</div>
<div class="lang">${["zh","ru","en","kz"].map(l=>`<button data-l="${l}">${l=="zh"?"中文":l.toUpperCase()}</button>`).join("")}</div>
<a class="btn" href="contact.html#res" data-t="cta"></a></nav>
<div class="in"><div class="en">Yan Jiangnan · Almaty</div><h1>${title}</h1><div class="crumb"><a href="index.html" data-t="n1"></a> / ${title}</div></div></header>`}
const foot=`<footer><div class="fg"><div><div class="logo" style="color:#fff"><i><b>宴</b></i><span>YAN JIANGNAN<br>ALMATY</span></div><p style="margin-top:12px" data-t="ft"></p></div>
<div><h4 data-t="q"></h4><ul><li><a href="index.html" data-t="n1"></a></li><li><a href="menu.html" data-t="n2"></a></li><li><a href="banquet.html" data-t="n3"></a></li><li><a href="services.html" data-t="n4"></a></li></ul></div>
<div><h4 data-t="ct"></h4><ul><li>📞 +7 727 231 88 88</li><li>✉ info@yanjiangnan.kz</li><li data-t="addr"></li></ul></div>
<div><h4 data-t="fl"></h4><ul><li>WeChat · Instagram · WhatsApp</li></ul></div></div><div class="copy"><span>© 2026 Yan Jiangnan Almaty</span><span data-t="pr"></span></div></footer>`;

const views={
 home:()=>shell("","").replace(/url\([^)]*\)/,"url(img/h/28.jpg)").replace("hero phero","hero hh").replace(/<div class="in">[\s\S]*<\/header>/,`<div class="in"><div class="en hl">Business Hotel Almaty</div><h1>${h("t1")}</h1><div class="sub">${h("t2")}</div>
 <div class="hb"><a class="btn" href="contact.html#res">${h("bk")} →</a><a class="btn ghost" href="rooms.html">${h("ex")} →</a></div></div></header>`)+`
 <form class="hbook" onsubmit="location.href='rooms.html';return false">
  <label><span>📅</span><div><small>${h("ci")}</small><input type="date" value="2026-10-25"></div></label>
  <label><span>📅</span><div><small>${h("co")}</small><input type="date" value="2026-10-26"></div></label>
  <label><span>👤</span><div><small>${h("gs")}</small><select><option>${h("g2")}</option><option>1</option><option>3</option><option>4</option></select></div></label>
  <button class="btn">${h("chk")} →</button></form>
 <div class="hf">${HS.f.map((f,i)=>`<div><span>${["📍","🍴","🛏","👥"][i]}</span><div><b>${f[L()]}</b><small>${f[4+L()]}</small></div></div>`).join("")}</div>
 <section class="hrooms"><div class="hri" style="background-image:url(img/h/44.jpg)"></div><div class="hrt"><div class="en">Rooms —</div><h2>${h("rT")}</h2><p>${h("rD")}</p><a class="btn" href="rooms.html">${h("rA")} →</a>
  <div class="hrth">${RM.slice(0,4).map(x=>`<a href="rooms.html"><img src="img/h/${x[0][0]}.jpg" loading="lazy"><span>${x[6+L()]}</span></a>`).join("")}</div></div></section>
 <section class="hres"><div><div class="en">Restaurant —</div><h2>${h("cT")}</h2><p>${h("cD")}</p><a class="btn" href="menu.html">${h("cA")} →</a></div>
  <div class="hic">${HS.ci4.map(c=>`<div><span>${c[0]}</span>${c[1+L()]}</div>`).join("")}</div></section>
 <section class="hmeet" style="background-image:linear-gradient(90deg,#faf5ec 30%,#faf5ec00 55%,#1d1611dd 70%),url(img/h/14.jpg)"><div class="hmt"><div class="en">Meetings & Events —</div><h2>${h("mT")}</h2><p>${h("mD")}</p><a class="btn" href="banquet.html">${h("mA")} →</a></div>
  <div class="hm4">${HS.m4.map(m=>`<div><span>${m[0]}</span><div><b>${m[1+L()]}</b><small>${m[5+L()]}</small></div></div>`).join("")}</div></section>
 <section class="hloc"><div class="hlt"><div class="en">Prime Location</div><h2>${h("lT")}</h2><p>${h("lD")}</p><a class="btn" href="contact.html">${h("lA")} →</a></div>
  <div class="hl4">${HS.l4.map(l=>`<div><span>${l[0]}</span><b>${l[1]} ${h("min")}</b><small>${l[2+L()]}</small></div>`).join("")}</div>
  <div class="hmap"><iframe loading="lazy" src="https://maps.google.com/maps?q=Almaty&z=12&output=embed"></iframe><div class="pin">📍 <div><b>Business Hotel Almaty</b><small>${h("cen")}</small><a href="contact.html">${h("det")} →</a></div></div></div></section>`,
 rooms:()=>shell(r("rT"),"").replace(/url\([^)]*\)/,"url(img/h/28.jpg)").replace("</h1>",`</h1><p class="psub">${r("rSub")}</p>`)+`
 <div class="wrap"><form class="rsearch" onsubmit="location.href='contact.html#res';return false">
  <label><span>📅</span><div><small>${r("ci")}</small><b><input type="date" value="2026-11-08"> — <input type="date" value="2026-11-27"></b></div></label>
  <label><span>👤</span><div><small>${r("gu")}</small><b><select><option>${r("ad")}</option><option>1</option><option>3</option><option>4</option></select></b></div></label>
  <label><span>🏷</span><div><small>${r("sr")}</small><b>${r("best")}</b></div></label>
  <button class="btn">${r("mod")} →</button></form>
 <div class="rbar"><h2>${RM.length} ${r("found")}</h2><label>${r("sort")} <select onchange="rSort=+this.value;render()">${["rec","lo","hi"].map((s,i)=>`<option value="${i}" ${i==rSort?"selected":""}>${r(s)}</option>`).join("")}</select></label></div>
 ${[...RM].sort((a,b)=>rSort==1?a[1]-b[1]:rSort==2?b[1]-a[1]:0).map(rcard).join("")}
 <div class="head" style="margin-top:60px"><h2>${r("galT")}</h2><div class="en">Business Hotel Almaty</div></div>
 <div class="hgal">${GAL.map(p=>`<img src="img/h/${p}.jpg" loading="lazy" onclick="lb(${p})">`).join("")}</div></div>
 <div class="modal" id="mod" onclick="if(event.target==this)this.classList.remove('on')"></div>`,
 menu:()=>shell(t("menuT"),"photo-1552566626-52f8b828add9")+`<div class="wrap"><div class="head"><h2 data-t="m1"></h2><div class="en">Our Menu</div></div>
 <div class="tabs">${[t("all"),...S.cats.map(nm)].map((c,i)=>`<button class="${i-1==cat?"on":""}" onclick="cat=${i-1};render()">${c}</button>`).join("")}</div>
 <div class="grid">${M.map((d,i)=>[d,i]).filter(([d])=>cat<0||d[2]==cat).map(([d,i])=>`<div class="dish" onclick="openD(${i})"><div class="im">${img(d[0],500)}</div><div class="b"><div class="zh">${d[5]}</div><h3>${d[5+LI[document.documentElement.lang]]}${d[4]?`<span class="tag">★ ${t("hot")}</span>`:""}${d[3]?`<span class="tag">🌶 ${t("spicy")}</span>`:""}</h3><div class="price">${d[1].toLocaleString()} ₸<span class="arr">→</span></div></div></div>`).join("")}</div></div>
 <div class="modal" id="mod" onclick="if(event.target==this)this.classList.remove('on')"></div>`,
 banquet:()=>shell(t("banT"),"").replace(/url\([^)]*\)/,"url(img/b0.jpg)")+`
 <div class="wrap bq-intro"><div><div class="en">Private Rooms & Banquets</div><h2 data-t="h2"></h2><p data-t="h3"></p></div>
 <div class="bq-stats">${S.bst.map(s=>`<div><b>${s[0]}</b><small>${nm(s.slice(1))}</small></div>`).join("")}</div></div>
 <div class="wrap">${S.halls.map((h,i)=>`<div class="hall bq"><div class="hi">${`<img src="img/b${i+1}.jpg" loading="lazy">`}<em>0${i+1}</em></div><div class="b"><div class="en">${["VIP Room","Grand Hall","Business Hall"][i]}</div><h3>${nm(h)}</h3><div class="stat"><div><b>${h[5]}</b><small>${t("cap")}</small></div><div><b>${h[6]} m²</b><small>${t("area")}</small></div></div><ul>${h[7].map(f=>`<li>${nm(f)}</li>`).join("")}</ul><a class="btn" href="contact.html#res">${t("book")} →</a></div></div>`).join("")}</div>
 <div class="bq-dark"><div class="wrap"><div class="head"><h2>${t("pkT")}</h2><div class="en">Banquet Packages</div></div>
 <div class="pk">${S.pk.map((k,i)=>`<div class="${i==1?"on":""}">${i==1?`<i>★ ${t("hot")}</i>`:""}<div class="en">${k[0]}</div><h3>${nm(k.slice(1))}</h3><div class="pp">${k[5]}<small> ₸ / ${t("pp")}</small></div><ul>${k[6].map(f=>`<li>✦ ${nm(f)}</li>`).join("")}</ul><a class="btn" href="contact.html#res">${t("book")}</a></div>`).join("")}</div></div></div>
 <div class="wrap"><div class="head"><h2>${t("stT")}</h2><div class="en">How It Works</div></div>
 <div class="steps">${S.st.map((s,i)=>`<div><span>${i+1}</span><h3>${nm(s)}</h3></div>`).join("")}</div></div>
 <div class="bq-cta" style="background-image:linear-gradient(90deg,#1a0f08f2 35%,#1a0f0866),url(img/b4.jpg)"><div><div class="en">Make It Unforgettable</div><h2>${t("ctaT")}</h2><p>+7 727 231 88 88 · WeChat · WhatsApp</p><a class="btn" href="contact.html#res">${t("book")} →</a></div></div>`,
 services:()=>shell(t("serT"),"photo-1517248135467-4c7edcad34c4")+`<div class="wrap"><div class="head"><h2 data-t="s0"></h2><div class="en">Facilities & Services</div></div>
 <div class="grid">${S.svc.map((s,i)=>`<div class="box2 ph"><div class="pi"><img src="img/s${i}.jpg" loading="lazy"></div><h3 style="margin-top:22px">${s[1+LI[document.documentElement.lang]]}</h3><p>${s[5+LI[document.documentElement.lang]]}</p></div>`).join("")}</div>
 <div class="gal">${["photo-1559339352-11d035aa65de","photo-1555396273-367ea4eb4db5","photo-1414235077428-338989a2e8c0","photo-1517248135467-4c7edcad34c4"].map(i=>img(i,600)).join("")}</div></div>`,
 contact:()=>shell(t("conT"),"").replace(/url\([^)]*\)/,"url(img/contact-hero.jpg)")+`
 <div class="wrap"><div class="cc">${[["📍",D[document.documentElement.lang].ct,D[document.documentElement.lang].addr.replace("📍 ","")],["📞",t("phone"),"+7 727 231 88 88"],["🕐",t("hours"),t("hrs")],["💬","WeChat · WhatsApp","+7 701 888 88 88"]].map(c=>`<div><span>${c[0]}</span><small>${c[1]}</small><b>${c[2]}</b></div>`).join("")}</div>
 <div class="rv" id="res"><div class="rv-img" style="background-image:linear-gradient(#1a0f0822,#1a0f08ee),url(img/b1.jpg)"><div class="en">Reservation</div><h2>${t("resv")}</h2><p>${t("ctaT")}</p><div class="seal">宴</div></div>
 <form class="rv-f" onsubmit="this.classList.add('sent');this.reset();return false">
  <h3>${t("resv")}</h3><div class="en" style="margin-bottom:22px">Book Your Table</div>
  <div class="fl"><input required placeholder=" "><label>${t("nm")}</label></div>
  <div class="fl"><input required type="tel" placeholder=" "><label>${t("tel")}</label></div>
  <div class="fl"><input type="date" required value="2026-10-25"><label>${S.d[LI[document.documentElement.lang]]}</label></div>
  <div class="fl"><input type="time" value="19:00"><label>${S.tm[LI[document.documentElement.lang]]}</label></div>
  <div class="full"><small class="lb">${S.gs[LI[document.documentElement.lang]]}</small><div class="chips">${["2","4","6","8","10+"].map((g,i)=>`<label><input type="radio" name="g" ${i==0?"checked":""}><span>${g}</span></label>`).join("")}</div></div>
  <div class="full"><small class="lb">${S.zn[0][LI[document.documentElement.lang]]}</small><div class="chips">${S.zn.slice(1).map((z,i)=>`<label><input type="radio" name="z" ${i==0?"checked":""}><span>${z[LI[document.documentElement.lang]]}</span></label>`).join("")}</div></div>
  <div class="fl full"><textarea rows="3" placeholder=" "></textarea><label>${t("note")}</label></div>
  <button class="btn">${t("send")}</button><div class="ok">✓ ${D[document.documentElement.lang].ok}</div></form></div>
 <div class="mapw"><iframe loading="lazy" src="https://maps.google.com/maps?q=Almaty%20Kazakhstan&z=13&output=embed"></iframe></div></div>`
};
function openD(i){const d=M[i];mod.innerHTML=`<div class="box">${img(d[0],900)}<div class="b"><span class="x" onclick="mod.classList.remove('on')">×</span><div class="zh" style="color:var(--gold)">${d[5]}</div><h2>${d[5+LI[document.documentElement.lang]]}</h2><div class="price" style="font-size:22px">${d[1].toLocaleString()} ₸</div><br><a class="btn" href="contact.html#res">${t("order")} →</a></div></div>`;mod.classList.add("on")}
function render(){if(views[pg]){root.innerHTML=views[pg]()+foot;bind()}setL(document.documentElement.lang);burger()}
function burger(){const n=document.querySelector("nav");if(!n||n.querySelector(".bur"))return;const b=document.createElement("button");b.className="bur";b.setAttribute("aria-label","menu");b.innerHTML="<i></i><i></i><i></i>";b.onclick=()=>n.classList.toggle("open");n.appendChild(b)}
function bind(){document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{document.documentElement.lang=b.dataset.l;render()})}
let s0;try{s0=localStorage.lang}catch(e){}document.documentElement.lang=D[s0]?s0:"zh";
if(!views[pg])bind();render();
