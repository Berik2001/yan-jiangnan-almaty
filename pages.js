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
 {id:"standard-twin",ph:[45,46,47,43,17],price:45000,g:2,m2:25,bed:"b2",badge:"pop",n:["标准双床房","Стандартный Twin","Standard Twin","Стандарт Twin"],d:["适合商务出行的舒适客房，两张单人床，现代内饰。","Уютный номер для деловых поездок: две отдельные кровати и современный интерьер.","A cozy and comfortable room for business trips. Two separate beds and a modern interior.","Іссапарға ыңғайлы бөлме: екі бөлек төсек және заманауи интерьер."],am:["wifi","ac","bath","tv","desk"]},
 {id:"deluxe-king",ph:[40,42,25,18],price:50000,g:2,m2:30,bed:"b1",n:["豪华大床房","Делюкс King","Deluxe King","Делюкс King"],d:["大理石墙面与深蓝色调，宽敞安静的大床房。","Мраморные стены и глубокий синий цвет — просторно и тихо.","Marble walls and deep navy tones — a spacious, quiet king room.","Мәрмәр қабырға мен қою көк түс — кең әрі тыныш."],am:["wifi","ac","bath","tv","desk"]},
 {id:"double-balcony",ph:[41,21,19],price:50000,g:2,m2:25,bed:"b1",n:["阳台大床房","Double с балконом","Double with Balcony","Балконы бар Double"],d:["带阳台的浪漫之选，享受新鲜空气与城市景观。","Романтичный вариант с балконом и свежим воздухом.","A romantic option with a balcony to enjoy fresh air. Spacious bed and a pleasant view.","Балконы бар романтикалық нұсқа."],am:["wifi","ac","bath","tv","balcony"]},
 {id:"family-suite",ph:[38,20,25],price:65000,g:4,m2:35,bed:"b3",n:["家庭套房","Семейный люкс","Family Suite","Отбасылық люкс"],d:["双床加沙发区，适合家庭与朋友同住。","Две кровати и зона отдыха — для семьи и друзей.","Two beds plus a lounge area, ideal for families and friends.","Екі төсек және демалыс аймағы — отбасыға."],am:["wifi","ac","bath","tv","sofa"]},
 {id:"king-suite",ph:[44,39,16,19],price:65000,g:2,m2:45,bed:"b1",badge:"lux",n:["大床套房","King Suite","King Suite","King Suite"],d:["全景窗户、休息区与双洗手盆浴室。","Панорамные окна, гостиная зона и ванная с двумя раковинами.","Panoramic windows, a lounge area and a double-sink bathroom.","Панорамалық терезе, қонақ аймағы, екі раковиналы ванна."],am:["wifi","ac","bath","tv","sofa"]}];
const AM={wifi:["wifi","免费Wi-Fi","Wi-Fi","Free Wi-Fi","Тегін Wi-Fi"],ac:["ac","空调","Кондиционер","Air conditioning","Кондиционер"],bath:["bath","独立卫浴","Своя ванная","Private bathroom","Жеке ванна"],tv:["tv","电视","ТВ","TV","ТД"],desk:["desk","办公桌","Рабочее место","Workspace","Жұмыс орны"],balcony:["balc","阳台","Балкон","Balcony","Балкон"],sofa:["sofa","沙发区","Зона отдыха","Lounge area","Демалыс аймағы"]};
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
const RQX={nts:["晚","ночей","nights","түн"],total:["共","Итого","Total","Барлығы"],forN:["晚","ноч.","nights","түн"],none:["没有符合人数的房型，请修改搜索。","Нет номеров для такого числа гостей. Измените поиск.","No rooms match this number of guests. Please modify your search.","Қонақ санына сай бөлме жоқ."],
 note:["价格为参考价，最终价格与可订情况需酒店确认。在线预订系统尚未连接。","Цены ориентировочные; итоговую стоимость и наличие подтверждает отель. Онлайн-бронирование ещё не подключено.","Prices are indicative; final rates and availability are confirmed by the hotel. Online booking engine is not connected yet.","Бағалар болжамды; соңғы баға мен бос орынды қонақ үй растайды."],ph:["照片","фото","photo","фото"]};
const RQ=k=>RQX[k][LI[document.documentElement.lang]];
function rcard2(x,n){const i=RM.indexOf(x),k=rIdx[i]||0,ph=x.ph,lg=LI[document.documentElement.lang],nm=x.n[lg],multi=ph.length>1;
 return `<article class="room2"><div class="rg2"><div class="rmain2"><img src="img/h/${ph[k]}.jpg" alt="${nm} — ${RQ("ph")} ${k+1}" onclick="rDet2(${i})">${multi?`<button class="ar l" aria-label="prev" onclick="rSl(${i},-1)">‹</button><span class="cnt">${k+1} / ${ph.length}</span><button class="ar r" aria-label="next" onclick="rSl(${i},1)">›</button>`:""}</div>
 ${multi?`<div class="rth2">${ph.slice(0,3).map((p,j)=>`<button class="${j==k?"on":""}" aria-label="${RQ("ph")} ${j+1}" onclick="rIdx[${i}]=${j};render()"><img src="img/h/${p}.jpg" loading="lazy" alt=""></button>`).join("")}</div>`:""}</div>
 <div class="rinfo2">${x.badge?`<em>${r(x.badge)}</em>`:""}<h3>${nm}</h3><p>${x.d[lg]}</p>
 <ul class="rsp2"><li>${IC.user}${x.g} ${RS.bd[0][lg]}</li><li>${IC.area}${x.m2} m²</li><li>${IC.beds}${r(x.bed)}</li></ul>
 <ul class="ram2">${x.am.map(a=>`<li>${IC[AM[a][0]]}${AM[a][1+lg]}</li>`).join("")}</ul></div>
 <div class="rpr2"><small>${r("from")}</small><b>${x.price.toLocaleString("ru-RU")} ₸</b>${n>1?`<span class="tot">${RQ("total")}: ${(x.price*n).toLocaleString("ru-RU")} ₸ · ${n} ${RQ("forN")}</span>`:""}
 <button class="btn" onclick="selRoom('${x.id}')">${r("sel")} →</button><button class="out" onclick="rDet2(${i})">${r("det")}</button></div></article>`}
function selRoom(id){const q=new URLSearchParams({room:id,ci:BK.ci,co:BK.co,ad:BK.ad,ch:BK.ch,cur:"KZT"});location.href=(CONFIG.bookingUrl||"contact.html")+"?"+q+"#res"}
function reSearch(f){if(f.classList.contains("ed")){const ci=f.ci.value,co=f.co.value;if(ci&&co&&co>ci){BK.ci=ci;BK.co=co}}saveBk();history.replaceState(null,"","?"+new URLSearchParams({ci:BK.ci,co:BK.co,ad:BK.ad,ch:BK.ch}));render();return false}
function rDet2(i){const x=RM[i],lg=LI[document.documentElement.lang];let k=rIdx[i]||0;const m=document.getElementById("mod");
 const draw=()=>{m.innerHTML=`<div class="box rbox" role="dialog" aria-modal="true"><div class="rbig" style="background-image:url(img/h/${x.ph[k]}.jpg)"><span class="x" onclick="mod.classList.remove('on')">×</span>${x.ph.length>1?'<button id="pv">‹</button><button id="nx">›</button>':""}</div>${x.ph.length>1?`<div class="rstrip">${x.ph.map((p,j)=>`<img src="img/h/${p}.jpg" data-j="${j}" class="${j==k?"on":""}" alt="">`).join("")}</div>`:""}
 <div class="b"><h2>${x.n[lg]}</h2><p style="margin:8px 0;color:#68717B">${x.d[lg]}</p><ul class="rsp2"><li>${IC.user}${x.g} ${RS.bd[0][lg]}</li><li>${IC.area}${x.m2} m²</li><li>${IC.beds}${r(x.bed)}</li></ul><ul class="ram2">${x.am.map(a=>`<li>${IC[AM[a][0]]}${AM[a][1+lg]}</li>`).join("")}</ul>
 <div class="rpr2 inl"><small>${r("from")}</small><b>${x.price.toLocaleString("ru-RU")} ₸</b><button class="btn" onclick="selRoom('${x.id}')">${r("sel")} →</button></div><p class="rnote">${RQ("note")}</p></div></div>`;
 const pv=m.querySelector("#pv"),nx=m.querySelector("#nx");if(pv){pv.onclick=()=>{k=(k-1+x.ph.length)%x.ph.length;draw()};nx.onclick=()=>{k=(k+1)%x.ph.length;draw()}}m.querySelectorAll(".rstrip img").forEach(im=>im.onclick=()=>{k=+im.dataset.j;draw()})};
 draw();m.classList.add("on")}
function rSl(i,d){const n=RM[i].ph.length;rIdx[i]=((rIdx[i]||0)+d+n)%n;render()}
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

const MARK=`<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><g transform="rotate(45 20 20)"><rect x="9" y="9" width="22" height="22"/><path d="M9 16h22M9 24h22M16 9v22M24 9v22"/><path d="M9 16a3.5 3.5 0 0 1 0-7h0M31 24a3.5 3.5 0 0 1 0 7M16 31a3.5 3.5 0 0 1-7 0M24 9a3.5 3.5 0 0 1 7 0"/></g></svg>`;
const sv=d=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const IC={pin:sv('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),dish:sv('<path d="M3 17h18M5 17a7 7 0 0 1 14 0M12 8V6M10 6h4M4 20h16"/>'),bed:sv('<path d="M3 18v-7h18v7M3 18v2M21 18v2M5 11V7h14v4M8 11V9h3v2M13 11V9h3v2"/>'),people:sv('<circle cx="12" cy="7" r="3"/><circle cx="5" cy="9" r="2"/><circle cx="19" cy="9" r="2"/><path d="M7 20v-2a5 5 0 0 1 10 0v2M2 19v-1a3 3 0 0 1 4-2.8M22 19v-1a3 3 0 0 0-4-2.8"/>'),
 cal:sv('<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4"/>'),user:sv('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),venue:sv('<path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6M3 21h18"/>'),screen:sv('<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>'),support:sv('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'),tailor:sv('<path d="M4 20l6-6M14 4l6 6-8 8-6-6z"/><path d="M14 8l2 2"/>'),
 plane:sv('<path d="M2 16l20-8-6 12-3-5-5 3z"/>'),city:sv('<path d="M3 21h18M5 21V8h6v13M11 21V3h8v18M7 11h2M7 14h2M14 7h2M14 10h2M14 13h2"/>'),bag:sv('<path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/>'),mountain:sv('<path d="M2 20l7-12 4 6 3-4 6 10z"/>')};
Object.assign(IC,{wifi:sv('<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8"/>'),ac:sv('<rect x="3" y="5" width="18" height="8" rx="1"/><path d="M7 17v2M12 17v3M17 17v2M7 10h10"/>'),bath:sv('<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zM6 12V5a2 2 0 0 1 4 0M7 20l-1 2M17 20l1 2"/>'),tv:sv('<rect x="3" y="5" width="18" height="12" rx="1"/><path d="M9 21h6"/>'),desk:sv('<rect x="3" y="7" width="18" height="12" rx="1"/><path d="M9 7V5h6v2M3 12h18"/>'),balc:sv('<path d="M4 21V10M20 21V10M4 14h16M8 14v7M12 14v7M16 14v7M6 10V4h12v6"/>'),sofa:sv('<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2zM5 18v2M19 18v2"/>'),area:sv('<path d="M4 20V4M4 20h16M8 16l8-8M12 8h4v4"/>'),beds:sv('<path d="M3 18v-6h18v6M3 18v2M21 18v2M5 12V8h14v4"/>'),edit:sv('<path d="M4 20h4L19 9l-4-4L4 16z"/>'),tag:sv('<path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.3"/>'),chev:sv('<path d="M6 9l6 6 6-6"/>')});
Object.assign(IC,{search:sv('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),globe:sv('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>')});
const DIR="https://www.google.com/maps/dir/?api=1&destination=Business+Hotel+Almaty";
// Integration layer: set endpoints when the hotel's booking engine / CRM is available
const CONFIG={bookingUrl:null,eventEndpoint:null};
const iso=d=>d.toISOString().slice(0,10),addD=(s,n)=>{const d=new Date(s);d.setDate(d.getDate()+n);return iso(d)};
let BK;{const q=new URLSearchParams(location.search);let s={};try{s=JSON.parse(localStorage.bk||"{}")}catch(e){}const td=iso(new Date());
 BK={ci:q.get("ci")||s.ci||td,co:q.get("co")||s.co,ad:+(q.get("ad")||s.ad||2),ch:+(q.get("ch")||s.ch||0)};if(BK.ci<td)BK.ci=td;if(!BK.co||BK.co<=BK.ci)BK.co=addD(BK.ci,1)}
function saveBk(){try{localStorage.bk=JSON.stringify(BK)}catch(e){}}
function gLabel(){const b=document.querySelector(".gbtn");if(b)b.textContent=`${BK.ad} ${b.tagName=="B"?HXS.gw[BK.ad==1?1:0][LI[document.documentElement.lang]]:hq("ad").toLowerCase()}${BK.ch?`, ${BK.ch} ${hq("ch").toLowerCase()}`:""}`;["ad","ch"].forEach(k=>{const e=document.getElementById("g_"+k);if(e)e.textContent=BK[k]})}
function gStep(k,d){BK[k]=Math.max(k=="ad"?1:0,Math.min(8,BK[k]+d));saveBk();gLabel()}
function bkInit(){const f=document.getElementById("book");if(!f)return;
 if(f.classList.contains("hx2")){const loc={zh:"zh-CN",ru:"ru-RU",en:"en-GB",kz:"kk-KZ"}[document.documentElement.lang],show=()=>f.querySelectorAll(".dv").forEach(d=>{const v=f[d.dataset.for].value;d.textContent=v&&f.dataset.touched?new Date(v+"T00:00").toLocaleDateString(loc,{day:"numeric",month:"long"}):HX("pick")});
  f.querySelectorAll("label").forEach(l=>{const i=l.querySelector("input");i.tabIndex=-1;i.style.pointerEvents="none";l.tabIndex=0;l.onclick=e=>{if(!e.target.closest(".cal"))calOpen(f,i.name,l)};l.onkeydown=e=>{if(e.key=="Enter"||e.key==" "){e.preventDefault();calOpen(f,i.name,l)}}});f._show=show;
  setTimeout(()=>{f.ci.addEventListener("change",()=>{f.dataset.touched=1;show()});f.co.addEventListener("change",()=>{f.dataset.touched=1;show()});show()})}const ci=f.ci,co=f.co,td=iso(new Date());ci.min=td;ci.value=BK.ci;co.min=addD(BK.ci,1);co.value=BK.co;
 ci.onchange=()=>{BK.ci=ci.value;co.min=addD(ci.value,1);if(co.value<=ci.value)co.value=addD(ci.value,1);BK.co=co.value;saveBk()};co.onchange=()=>{BK.co=co.value;saveBk()};gLabel();
 document.addEventListener("click",e=>{const g=document.querySelector(".gsel");if(g&&!g.contains(e.target))g.classList.remove("open")})}
let calM;
function calOpen(f,which,host){document.querySelectorAll(".cal").forEach(c=>c.remove());const lg=document.documentElement.lang,loc={zh:"zh-CN",ru:"ru-RU",en:"en-GB",kz:"kk-KZ"}[lg],td=iso(new Date());
 calM=calM||new Date(f[which].value.slice(0,7)+"-01T00:00");const c=document.createElement("div");c.className="cal";c.onclick=e=>e.stopPropagation();host.appendChild(c);
 const wd=[...Array(7)].map((_,i)=>new Date(2024,0,1+i).toLocaleDateString(loc,{weekday:"short"}));
 const month=m=>{const y=m.getFullYear(),mo=m.getMonth(),first=(new Date(y,mo,1).getDay()+6)%7,days=new Date(y,mo+1,0).getDate();let h=`<div class="cm"><b>${m.toLocaleDateString(loc,{month:"long",year:"numeric"})}</b><div class="cg">${wd.map(w=>`<i>${w}</i>`).join("")}${"<span></span>".repeat(first)}`;
  for(let d=1;d<=days;d++){const s=iso(new Date(Date.UTC(y,mo,d))),ci=f.ci.value,co=f.co.value,dis=s<td||(which=="co"&&s<=ci);h+=`<button type="button" data-d="${s}" ${dis?"disabled":""} class="${s==ci?"st":""}${s==co?" ed":""}${s>ci&&s<co?" in":""}${s==td?" td":""}">${d}</button>`}return h+"</div></div>"};
 const draw=()=>{const m2=new Date(calM.getFullYear(),calM.getMonth()+1,1);c.innerHTML=`<div class="ch"><button type="button" class="nv" data-n="-1" aria-label="prev">‹</button><span>${which=="ci"?hq("ci"):hq("co")}</span><button type="button" class="nv" data-n="1" aria-label="next">›</button></div><div class="cms">${month(calM)}${month(m2)}</div>`;
  c.querySelectorAll(".nv").forEach(b=>b.onclick=()=>{calM=new Date(calM.getFullYear(),calM.getMonth()+ +b.dataset.n,1);draw()});
  c.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{const v=b.dataset.d;f[which].value=v;f[which].dispatchEvent(new Event("change"));
   if(which=="ci"){if(f.co.value<=v){f.co.value=addD(v,1);f.co.dispatchEvent(new Event("change"))}c.remove();calOpen(f,"co",f.co.closest("label"))}else c.remove()})};
 draw();setTimeout(()=>document.addEventListener("click",function h(e){if(!c.contains(e.target)&&!host.contains(e.target)){c.remove();document.removeEventListener("click",h)}}))}
function goBook(f){BK.ci=f.ci.value;BK.co=f.co.value;saveBk();const q=new URLSearchParams({ci:BK.ci,co:BK.co,ad:BK.ad,ch:BK.ch});location.href=(CONFIG.bookingUrl||"rooms.html")+"?"+q;return false}
function evOpen(){const m=document.getElementById("evm");m.querySelector("[name=date]").min=iso(new Date());m.classList.add("on")}
async function evSend(f){const ok=document.getElementById("evok");ok.style.display="block";
 if(!CONFIG.eventEndpoint){ok.className="ok warn";ok.textContent=hq("noint");return false}
 try{const r=await fetch(CONFIG.eventEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});if(!r.ok)throw 0;ok.className="ok";ok.textContent=hq("sent");f.reset()}catch(e){ok.className="ok warn";ok.textContent=hq("err")}return false}
const HQ={t1:["阿拉木图的<br>理想商务下榻之地","Идеальный<br>бизнес-отель в Алматы","Your ideal<br>business stay<br>in Almaty","Алматыдағы мінсіз<br>іскерлік қонақ үй"],
 t2:["舒适客房 · 正宗中餐 · 会议与宴会","Комфортные номера · Китайская кухня · Мероприятия","Comfortable rooms · Authentic Chinese dining · Meetings & events","Жайлы бөлмелер · Қытай асханасы · Іс-шаралар"],
 bk:["立即预订","Забронировать","Book now","Брондау"],ex:["探索酒店","Об отеле","Explore the hotel","Қонақ үй туралы"],
 ci:["入住","Заезд","Check-in","Кіру"],co:["退房","Выезд","Check-out","Шығу"],gs:["人数","Гости","Guests","Қонақтар"],ad:["成人","Взрослые","Adults","Ересектер"],ch:["儿童","Дети","Children","Балалар"],chk:["查看房价与预订","Цены и бронь","Check rates & book","Баға және бронь"],
 f:HS.f.map((x,i)=>[...x.slice(0,4),...[["位于阿拉木图市中心","В центре Алматы","In central Almaty","Алматы орталығында"],["宴江南中餐厅","Ресторан «Янь Цзяннань»","Yan Jiangnan restaurant","«Янь Цзяннань» мейрамханасы"],["适合商务与休闲","Для работы и отдыха","For business and leisure","Жұмыс пен демалысқа"],["会议厅与宴会厅","Конференц- и банкетные залы","Meeting & banquet halls","Конференция және банкет залдары"]][i]]),
 eR:["客房","Номера","Rooms","Бөлмелер"],rT:["舒适客房<br>高效入住","Комфортные номера<br>для продуктивной поездки","Comfortable rooms<br>for a productive stay","Нәтижелі сапарға<br>жайлы бөлмелер"],
 rD:["精心设计的客房，舒适便利，满足商务与休闲所需。","Продуманные номера с комфортом и всем необходимым для работы и отдыха.","Thoughtfully designed rooms offering comfort, convenience and everything you need for business or leisure.","Жұмыс пен демалысқа қажеттінің бәрі бар жайлы бөлмелер."],rA:["查看所有房型","Все номера","View all rooms","Барлық бөлмелер"],
 eD:["Business Hotel Almaty 餐饮","Ресторан отеля","Dining at Business Hotel Almaty","Қонақ үй мейрамханасы"],cT:HS.cT,cD:["在宴江南品尝正宗中国菜，传统风味与热情服务相遇。","Настоящая китайская кухня в «Янь Цзяннань» — традиционные вкусы и тёплое гостеприимство.","Experience authentic Chinese cuisine at Yan Jiangnan, where traditional flavours meet warm hospitality.","«Янь Цзяннань» — дәстүрлі дәм мен жылы қонақжайлық."],cA:["查看菜单","Смотреть меню","View menu","Мәзірді көру"],
 eM:["会议与活动","Мероприятия","Meetings & events","Іс-шаралар"],mT:["会议与宴会<br>从容举办","Мероприятия<br>с уверенностью","Meetings & events<br>with confidence","Іс-шаралар<br>сеніммен"],mD:["灵活的场地，适合商务会议、大型会议和庆典。","Гибкие пространства для деловых встреч, конференций и праздников.","Flexible spaces for business meetings, conferences and celebrations.","Іскерлік кездесу, конференция және мерекелерге арналған залдар."],
 mA:["活动咨询","Запрос на мероприятие","Request an event","Іс-шараға өтінім"],mS:["查看场地","Смотреть залы","Explore event spaces","Залдарды көру"],
 m4:[["会议场地","Залы для встреч","Meeting spaces","Кездесу залдары"],["视听设备","AV-оборудование","AV equipment","AV жабдық"],["活动协调","Координация","Event coordination","Үйлестіру"],["宴会安排","Банкеты","Banquet arrangements","Банкеттер"]],
 eL:["地理位置","Расположение","Prime location","Орналасуы"],lT:["位于阿拉木图<br>城市中心","В самом сердце<br>Алматы","Prime location<br>in the heart of Almaty","Алматының<br>дәл жүрегінде"],lD:["酒店位于阿拉木图，便于前往机场、商务区和城市景点。","Отель в Алматы — удобно добираться до аэропорта, деловых районов и достопримечательностей.","Located in Almaty with convenient access to the airport, business districts and city attractions.","Әуежайға, іскерлік аудандар мен көрікті жерлерге қолайлы."],
 l4:[["阿拉木图国际机场","Международный аэропорт","Almaty International Airport","Халықаралық әуежай"],["市中心","Центр города","City centre","Қала орталығы"],["商务区","Деловые районы","Business districts","Іскерлік аудандар"],["城市景点","Достопримечательности","Local attractions","Көрікті жерлер"]],
 dir:["查看路线","Маршрут","View directions","Бағыт"],brand:["舒适入住 · 用心服务","Комфортное проживание. Внимательный сервис.","Comfortable stays. Meaningful connections.","Жайлы тұру. Мұқият қызмет."],cpage:["联系页面","Страница контактов","Contact page","Байланыс беті"],lang:["语言","Язык","Language","Тіл"],
 evt:[["商务会议","Деловая встреча","Business meeting","Іскерлік кездесу"],["大型会议","Конференция","Conference","Конференция"],["婚宴","Свадьба","Wedding","Той"],["宴会/庆典","Банкет / праздник","Banquet / celebration","Банкет / мереке"]],evd:["计划日期","Дата","Planned date","Күні"],
 noint:["在线提交尚未连接。请通过联系页面与我们联系。","Онлайн-отправка ещё не подключена. Свяжитесь с нами через страницу контактов.","Online submission is not connected yet. Please reach us via the contact page.","Онлайн жіберу әлі қосылмаған. Байланыс беті арқылы хабарласыңыз."],sent:["已发送，我们会尽快联系您。","Заявка отправлена.","Request sent.","Өтінім жіберілді."],err:["发送失败，请稍后再试。","Ошибка отправки.","Could not send.","Жіберу қатесі."]};
const hq=k=>HQ[k][LI[document.documentElement.lang]];
const HXS={t1:["您在阿拉木图的<br>舒适之选","Ваш комфорт<br>в Алматы","Your comfort<br>in Almaty","Алматыдағы<br>сіздің жайлылығыңыз"],
 t2:["舒适客房、中式美食 <br>与商务会议空间。","Комфортные номера, китайская кухня <br>и пространства для деловых встреч.","Comfortable rooms, Chinese cuisine <br>and spaces for business meetings.","Жайлы бөлмелер, қытай асханасы <br>және іскерлік кездесу орындары."],
 rooms:["查看客房","Смотреть номера","View rooms","Бөлмелерді көру"],pick:["选择日期","Выберите дату","Select date","Күнді таңдаңыз"],check:["查询空房","Проверить доступность","Check availability","Бос орынды тексеру"],book:["立即预订","Забронировать","Book now","Брондау"],
 gw:[["位成人","взрослых","adults","ересек"],["位成人","взрослый","adult","ересек"]]};
const HX=k=>HXS[k][LI[document.documentElement.lang]];
const t=k=>S[k][LI[document.documentElement.lang]],nm=a=>a[LI[document.documentElement.lang]];
const img=(id,w=700)=>`<img src="${U+id}?w=${w}" loading="lazy" onerror="this.onerror=null;this.src='${FB}'">`;
const pg=document.body.dataset.page;let cat=-1;

function shell(title,bg){return `<header class="hero phero" style="background-image:linear-gradient(90deg,#1a0f08ee,#1a0f0888 60%,#0004),url(${U+bg}?w=1800)">
<nav><a class="logo" href="index.html"><i class="mk">${MARK}</i><span>BUSINESS HOTEL<br>ALMATY</span></a>
<div class="links">${[["index","n1"],["rooms","nr"],["menu","n2"],["banquet","n3"],["services","n4"],["contact","n5"]].map(([p,k])=>`<a href="${p}.html" class="${p==pg||(p=="index"&&pg=="home")?"on":""}" data-t="${k}"></a>`).join("")}</div>
<div class="lang">${["zh","ru","en","kz"].map(l=>`<button data-l="${l}">${l=="zh"?"中文":l.toUpperCase()}</button>`).join("")}</div>
<span class="hdx"><a class="hsr" href="rooms.html" aria-label="search">${IC.search}</a><span class="gl">${IC.globe}</span></span><a class="btn hbk" href="${pg=="home"?"#book":"contact.html#res"}"><span data-t="cta"></span> <span class="arw">→</span></a></nav>
<div class="in"><div class="en">Business Hotel Almaty</div><h1>${title}</h1><div class="crumb"><a href="index.html" data-t="n1"></a> / ${title}</div></div></header>`}
const foot=`<footer><div class="fg"><div><div class="logo" style="color:#fff"><i class="mk">${MARK}</i><span>BUSINESS HOTEL<br>ALMATY</span></div><p style="margin-top:12px">${hq("brand")}</p></div>
<div><h4 data-t="q"></h4><ul><li><a href="index.html" data-t="n1"></a></li><li><a href="rooms.html" data-t="nr"></a></li><li><a href="menu.html" data-t="n2"></a></li><li><a href="banquet.html" data-t="n3"></a></li><li><a href="contact.html" data-t="n5"></a></li></ul></div>
<div><h4 data-t="ct"></h4><ul><li><a href="contact.html">${hq("cpage")}</a></li><li><a target="_blank" rel="noopener" href="${DIR}">${hq("dir")} →</a></li></ul></div>
<div><h4>${hq("lang")}</h4><ul class="flang">${["zh","ru","en","kz"].map(l=>`<li><button data-l="${l}">${l=="zh"?"中文":l.toUpperCase()}</button></li>`).join("")}</ul></div></div>
<div class="copy"><span>© ${new Date().getFullYear()} Business Hotel Almaty</span><span data-t="pr"></span></div></footer>`;

const views={
 home:()=>shell("","").replace(/url\([^)]*\)/,"url(img/h/28.jpg)").replace(/style="[^"]*"/,`style="background-image:url(img/hero-4k.jpg)"`).replace("hero phero","hero hh hx").replace(/<div class="in">[\s\S]*<\/header>/,`<div class="in"><div class="en">Business Hotel · Almaty</div><h1>${HX("t1")}</h1><p class="sub">${HX("t2")}</p>
 <div class="hb"><a class="btn ghost" href="rooms.html">${HX("rooms")} <span class="arw">→</span></a></div></div>
 <form class="hbook hx2" id="book" onsubmit="return goBook(this)">
  <label>${IC.cal}<div><small>${hq("ci")}</small><b class="dv" data-for="ci">${HX("pick")}</b></div>${IC.chev}<input type="date" name="ci" aria-label="${hq("ci")}"></label>
  <label>${IC.cal}<div><small>${hq("co")}</small><b class="dv" data-for="co">${HX("pick")}</b></div>${IC.chev}<input type="date" name="co" aria-label="${hq("co")}"></label>
  <div class="gsel" onclick="if(!event.target.closest('.gpop'))this.classList.toggle('open')">${IC.user}<div><small>${hq("gs")}</small><b class="gbtn"></b></div>${IC.chev}
   <div class="gpop">${["ad","ch"].map(k=>`<div><span>${hq(k)}</span><button type="button" onclick="gStep('${k}',-1)">−</button><b id="g_${k}"></b><button type="button" onclick="gStep('${k}',1)">+</button></div>`).join("")}</div></div>
  <button class="btn">${HX("check")} <span class="arw">→</span></button></form></header>`)+`
 <div class="hf">${["pin","dish","bed","people"].map((ic,i)=>`<div>${IC[ic]}<b>${HQ.f[i][L()]}</b><small>${HQ.f[i][4+L()]}</small></div>`).join("")}</div>
 <section class="hrooms"><div class="hri" id="hri" style="background-image:url(img/h/${RM[0].ph[0]}.jpg)"></div><div class="hrt"><div class="en">${hq("eR")}</div><h2>${hq("rT")}</h2><p>${hq("rD")}</p><a class="btn ghost" href="rooms.html">${hq("rA")} →</a>
  <div class="hrth">${RM.slice(0,4).map((x,i)=>`<button type="button" class="${i?"":"on"}" onclick="hri.style.backgroundImage='url(img/h/${x.ph[0]}.jpg)';this.parentNode.querySelectorAll('button').forEach(b=>b.classList.remove('on'));this.classList.add('on')"><img src="img/h/${x.ph[0]}.jpg" loading="lazy" alt=""><span>${x.n[L()]}</span></button>`).join("")}</div></div></section>
 <section class="hres2" style="background-image:linear-gradient(90deg,#1c130fee 0%,#1c130fb3 38%,#1c130f22 70%),url(img/h/37.jpg)"><div><div class="en">${hq("eD")}</div><h2>${hq("cT")}</h2><p>${hq("cD")}</p><a class="btn" href="menu.html">${hq("cA")} →</a></div></section>
 <section class="hmeet2"><div class="hmi" style="background-image:url(img/h/14.jpg)"></div><div class="hmt"><div class="en">${hq("eM")}</div><h2>${hq("mT")}</h2><p>${hq("mD")}</p><button type="button" class="btn" onclick="evOpen()">${hq("mA")} →</button><a class="lnk" href="banquet.html">${hq("mS")} →</a></div>
  <ul class="hm4">${["venue","screen","support","tailor"].map((ic,i)=>`<li>${IC[ic]}<b>${HQ.m4[i][L()]}</b></li>`).join("")}</ul></section>
 <section class="hloc2"><div class="hlt"><div class="en">${hq("eL")}</div><h2>${hq("lT")}</h2><p>${hq("lD")}</p>
  <ul class="hl4">${["plane","city","bag","mountain"].map((ic,i)=>`<li>${IC[ic]}<span>${HQ.l4[i][L()]}</span></li>`).join("")}</ul><a class="btn" target="_blank" rel="noopener" href="${DIR}">${hq("dir")} →</a></div>
  <div class="hmap"><iframe loading="lazy" title="map" src="https://maps.google.com/maps?q=Business%20Hotel%20Almaty&z=13&output=embed"></iframe></div></section>
 <div class="modal" id="evm" onclick="if(event.target==this)this.classList.remove('on')"><form class="box rv-f evf" onsubmit="return evSend(this)"><span class="x" onclick="evm.classList.remove('on')">×</span><h3>${hq("mA")}</h3>
  <select name="type" class="full">${HQ.evt.map(e=>`<option>${e[L()]}</option>`).join("")}</select>
  <div class="fl"><input type="date" name="date" required><label>${hq("evd")}</label></div><div class="fl"><input type="number" name="guests" min="1" required placeholder=" "><label>${hq("gs")}</label></div>
  <div class="fl"><input name="name" required placeholder=" "><label>${t("nm")}</label></div><div class="fl"><input name="phone" type="tel" required placeholder=" "><label>${t("tel")}</label></div>
  <button class="btn">${t("send").replace(" →","")} →</button><div class="ok" id="evok"></div></form></div>`,
 rooms:()=>{const lg=document.documentElement.lang,loc={zh:"zh-CN",ru:"ru-RU",en:"en-GB",kz:"kk-KZ"}[lg],fd=s=>new Date(s+"T00:00").toLocaleDateString(loc,{day:"numeric",month:"short",year:"numeric"}),nights=Math.round((new Date(BK.co)-new Date(BK.ci))/864e5),tg=BK.ad+BK.ch,list=RM.filter(x=>x.g>=tg),sorted=[...list].sort((a,b)=>rSort==1?a.price-b.price:rSort==2?b.price-a.price:0);
 return shell("","").replace(/url\([^)]*\)/,"url(img/rooms-hero.jpg)").replace("hero phero","hero rhero").replace(/<div class="in">[\s\S]*<\/header>/,`<div class="in"><div class="crumb2" role="navigation" aria-label="breadcrumb"><a href="index.html" data-t="n1"></a> › <span data-t="nr"></span></div><h1>${r("rT")}</h1><p class="psub">${r("rSub")}</p></div></header>`)+`
 <div class="rwrap"><form class="rsum" id="book" onsubmit="return reSearch(this)">
  <div class="rs1">${IC.cal}<div><small>${r("ci")}</small><b>${fd(BK.ci)} — ${fd(BK.co)}</b><div class="redit"><input type="date" name="ci" aria-label="${hq("ci")}"><input type="date" name="co" aria-label="${hq("co")}"></div></div><button type="button" class="eb" aria-label="edit" onclick="this.closest('form').classList.add('ed')">${IC.edit}</button></div>
  <div class="rs1 gsel">${IC.user}<div><small>${r("gu")}</small><button type="button" class="gbtn" onclick="this.closest('.gsel').classList.toggle('open')"></button></div><button type="button" class="eb" aria-label="edit" onclick="this.closest('.gsel').classList.toggle('open')">${IC.edit}</button>
   <div class="gpop">${["ad","ch"].map(k=>`<div><span>${hq(k)}</span><button type="button" onclick="gStep('${k}',-1)">−</button><b id="g_${k}"></b><button type="button" onclick="gStep('${k}',1)">+</button></div>`).join("")}</div></div>
  <label class="rs1">${IC.tag}<div><small>${r("sr")}</small><select name="rate"><option>${r("best")}</option></select></div></label>
  <button class="btn">${r("mod")} →</button></form>
 <div class="rbar"><h2>${sorted.length} ${r("found")} · <span>${nights} ${RQ("nts")}</span></h2><label>${r("sort")} <select onchange="rSort=+this.value;render()">${["rec","lo","hi"].map((s,i)=>`<option value="${i}" ${i==rSort?"selected":""}>${r(s)}</option>`).join("")}</select></label></div>
 ${sorted.length?sorted.map(x=>rcard2(x,nights)).join(""):`<div class="empty">${RQ("none")}</div>`}
 <p class="rnote">${RQ("note")}</p></div>
 <div class="modal" id="mod" onclick="if(event.target==this)this.classList.remove('on')"></div>`},
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
function render(){if(views[pg]){root.innerHTML=views[pg]()+foot;bind()}setL(document.documentElement.lang);burger();bkInit();{const q=new URLSearchParams(location.search),ta=document.querySelector(".rv-f textarea");if(ta&&q.get("room")){const x=RM.find(r=>r.id==q.get("room"));ta.value=`${x?x.n[LI[document.documentElement.lang]]:q.get("room")} · ${q.get("ci")} → ${q.get("co")} · ${q.get("ad")}+${q.get("ch")}`;const d=document.querySelector(".rv-f input[type=date]");if(d)d.value=q.get("ci")}}document.querySelectorAll(".flang button").forEach(b=>b.onclick=()=>{document.documentElement.lang=b.dataset.l;render()})}
function burger(){const n=document.querySelector("nav");if(!n||n.querySelector(".bur"))return;const b=document.createElement("button");b.className="bur";b.setAttribute("aria-label","menu");b.innerHTML="<i></i><i></i><i></i>";b.onclick=()=>n.classList.toggle("open");n.appendChild(b)}
function bind(){document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{document.documentElement.lang=b.dataset.l;render()})}
let s0;try{s0=localStorage.lang}catch(e){}document.documentElement.lang=D[s0]?s0:"ru";
if(!views[pg])bind();render();

addEventListener("scroll",()=>{const n=document.querySelector("nav");n&&n.classList.toggle("sc",scrollY>40)},{passive:true});
