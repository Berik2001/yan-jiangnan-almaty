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
const t=k=>S[k][LI[document.documentElement.lang]],nm=a=>a[LI[document.documentElement.lang]];
const img=(id,w=700)=>`<img src="${U+id}?w=${w}" loading="lazy" onerror="this.onerror=null;this.src='${FB}'">`;
const pg=document.body.dataset.page;let cat=-1;

function shell(title,bg){return `<header class="hero phero" style="background-image:linear-gradient(90deg,#1a0f08ee,#1a0f0888 60%,#0004),url(${U+bg}?w=1800)">
<nav><a class="logo" href="index.html"><i><b>宴</b></i><span>YAN JIANGNAN<br>ALMATY</span></a>
<div class="links">${[["index","n1"],["menu","n2"],["banquet","n3"],["services","n4"],["contact","n5"]].map(([p,k])=>`<a href="${p}.html" class="${p==pg?"on":""}" data-t="${k}"></a>`).join("")}</div>
<div class="lang">${["zh","ru","en","kz"].map(l=>`<button data-l="${l}">${l=="zh"?"中文":l.toUpperCase()}</button>`).join("")}</div>
<a class="btn" href="contact.html#res" data-t="cta"></a></nav>
<div class="in"><div class="en">Yan Jiangnan · Almaty</div><h1>${title}</h1><div class="crumb"><a href="index.html" data-t="n1"></a> / ${title}</div></div></header>`}
const foot=`<footer><div class="fg"><div><div class="logo" style="color:#fff"><i><b>宴</b></i><span>YAN JIANGNAN<br>ALMATY</span></div><p style="margin-top:12px" data-t="ft"></p></div>
<div><h4 data-t="q"></h4><ul><li><a href="index.html" data-t="n1"></a></li><li><a href="menu.html" data-t="n2"></a></li><li><a href="banquet.html" data-t="n3"></a></li><li><a href="services.html" data-t="n4"></a></li></ul></div>
<div><h4 data-t="ct"></h4><ul><li>📞 +7 727 231 88 88</li><li>✉ info@yanjiangnan.kz</li><li data-t="addr"></li></ul></div>
<div><h4 data-t="fl"></h4><ul><li>WeChat · Instagram · WhatsApp</li></ul></div></div><div class="copy"><span>© 2026 Yan Jiangnan Almaty</span><span data-t="pr"></span></div></footer>`;

const views={
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
function render(){if(views[pg]){root.innerHTML=views[pg]()+foot;bind()}setL(document.documentElement.lang)}
function bind(){document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{document.documentElement.lang=b.dataset.l;render()})}
let s0;try{s0=localStorage.lang}catch(e){}document.documentElement.lang=D[s0]?s0:"zh";
if(!views[pg])bind();render();
