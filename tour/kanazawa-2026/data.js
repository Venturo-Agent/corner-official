/* 金澤北陸五日 — 行程資料正本（SSOT）
   路線圖讀這支的 TRIP.route；每日安排、住宿、航班都讀這裡。
   coords = [lat, lng]，城市／景點級真實座標。
   ponytail: 一支資料檔餵地圖＋內容，別讓 index 各自硬編。
   ⚠️ 餐廳菜單為業務後補，未定案處以「（菜單另附）」標註、勿當定案。 */
window.TRIP = {
  meta: {
    code: "CORNER-KANAZAWA-2026",
    title: "金澤北陸五日・加賀百萬石與合掌聚落",
    subtitle: "小松進出／金澤三晚／白川鄉・五箇山／富山岩瀨／永平寺・加賀溫泉",
    depart: "2026 / 12 / 07",
    nights: "5 天 4 晚",
    flight: "長榮航空 直飛小松",
    agency: "角落旅行社 CORNER TRAVEL",
    note: "此為行程參考版，實際日期、住宿、班機、餐廳與細節以出團通知與正式報價為準。",
  },

  outbound: { airline: "長榮航空", flightNumber: "BR158", from: "桃園 TPE", to: "小松 KMQ", dep: "06:35", arr: "10:25" },
  ret:      { airline: "長榮航空", flightNumber: "BR157", from: "小松 KMQ", to: "桃園 TPE", dep: "11:45", arr: "13:55" },

  // 路線圖只畫大範圍地理移動
  route: [
    { city: "小松機場",   en: "Komatsu Airport", coords: [36.3946, 136.4074], note: "D1 抵達／D5 賦歸・BR158 上午到、BR157 上午回" },
    { city: "金澤",       en: "Kanazawa",        coords: [36.5613, 136.6562], note: "住宿主場・連泊三晚・兼六園／茶屋街／近江町" },
    { city: "白川鄉・五箇山", en: "Shirakawa-go / Gokayama", coords: [36.2578, 136.9066], note: "D2・兩處世界遺產合掌造聚落" },
    { city: "富山・岩瀨", en: "Toyama / Iwase",   coords: [36.7583, 137.2200], note: "D3・環水公園、運河搭船、岩瀨老街" },
    { city: "永平寺",     en: "Eiheiji",         coords: [36.0556, 136.3556], note: "D4・曹洞宗大本山・精進料理" },
    { city: "加賀溫泉",   en: "Kaga Onsen",      coords: [36.3122, 136.3453], note: "D4 住宿・片山津溫泉 柴山潟湖畔・蟹會席" },
  ],

  days: [
    { n: 1, label: "抵達・金澤古都", title: "上午落地小松，午後直接走進加賀百萬石的老街",
      route: "桃園機場 → 小松機場 → 兼六園 → 近江町市場（午餐）→ 東茶屋街・金箔體驗 → 宿金澤",
      stops: [
        { name: "兼六園", en: "Kenrokuen Garden",
          note: "日本三大名園之一，加賀前田家歷時近兩百年打造的迴遊式庭園，四季皆美；臨霞池的徽軫（琴柱）石燈籠是金澤最經典的一景，冬季雪吊松枝更是北陸限定風情。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kotoji%20Lantern%20at%20Kenrokuen.jpg?width=1280",
          alt: "兼六園徽軫石燈籠與霞池" },
        { name: "近江町市場・午餐", en: "Omicho Market",
          note: "有「金澤廚房」之稱、近 300 年歷史的市場，日本海螃蟹、甜蝦、生蠔、海鮮丼一應俱全；午餐就在市場食堂大啖當令海鮮丼，暖身也暖胃。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Omicho%20covered%20market%20western%20entrance%2C%20Kanazawa%2C%202016.jpg?width=1280",
          alt: "近江町市場西側入口" },
        { name: "東茶屋街・金箔體驗", en: "Higashi Chaya / Gold Leaf",
          note: "江戶時代保留至今的藝伎茶屋街，紅殼格子與石板路構成金澤最上鏡的街景；金澤產全日本九成以上金箔，可在此體驗金箔貼付工藝、嚐招牌金箔霜淇淋。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Higashi%20Chaya%20district%2C%20Kanazawa%20%283810723944%29.jpg?width=1280",
          alt: "東茶屋街紅殼格子木造街屋" },
      ],
      caveat: "＊晚餐金澤加賀料理，參考老舖「大友樓」（1830 年創業，加賀藩御用料理）——實際餐廳與菜單以出團通知為準（菜單另附）。行李直送金澤飯店，午後輕裝遊古都。" },

    { n: 2, label: "白川鄉・五箇山", title: "一天走兩處世界遺產，把合掌造的雪景收進相簿",
      route: "金澤 → 五箇山 → 白川鄉合掌村 → 傍晚回金澤 → 宿金澤",
      stops: [
        { name: "白川鄉合掌村", en: "Shirakawa-go",
          note: "1995 年登錄世界文化遺產的合掌造聚落，陡斜茅葺屋頂為抵禦豪雪而生；冬季白雪覆頂宛如童話，展望台俯瞰整片合掌屋群是必拍名景。遊覽車自金澤約 1 小時 15 分可達。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Shirakawa-go%2020170202.jpg?width=1280",
          alt: "白川鄉合掌造聚落雪景" },
        { name: "五箇山・相倉聚落", en: "Gokayama / Ainokura",
          note: "與白川鄉同列世界遺產、卻更幽靜少擾的合掌聚落，相倉、菅沼兩處保留原始山村樣貌；規模小而純粹，能靜靜感受合掌造與周圍山林融為一體的原鄉風景。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Gokayama%20Ainokura%20Gassho-zukuri%2025.jpg?width=1280",
          alt: "五箇山相倉合掌造聚落" },
      ],
      caveat: "＊白川鄉／五箇山冬季多雪，請備保暖衣物與防滑好走的鞋；山區道路遇大雪或封路將依現場調整順序，展望台開放時間亦視天候而定。" },

    { n: 3, label: "富山・岩瀨運河", title: "新幹線 23 分到富山，坐船穿過閘門到老酒町",
      route: "金澤 →（新幹線約23分）富山 → 富岩運河環水公園 → 搭船穿中島閘門 → 岩瀨老街 → 富山玻璃美術館 → 回金澤 → 宿金澤",
      stops: [
        { name: "富岩運河環水公園", en: "Fugan Canal Kansui Park",
          note: "以運河為心的都會水岸公園，隈研吾操刀的星巴克曾獲選「全球最美星巴克」，落地窗正對水面與立山連峰，是富山最療癒的一杯咖啡。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Fugan%20Canal%20Kansui%20Park%2020170414.jpg?width=1280",
          alt: "富岩運河環水公園水岸與天門橋" },
        { name: "岩瀨老街・富山灣鮨", en: "Iwase Old Town",
          note: "搭運河遊船穿過日本罕見的「中島閘門」（水位升降通船）抵達岩瀨；江戶明治的迴船問屋老街完好保留，桝田酒造「滿壽泉」在此，白蝦與富山灣鮨更是不可錯過的在地滋味。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Neighborhood%20near%20Higashi-Iwase%20260123%2002.jpg?width=1280",
          alt: "岩瀨迴船問屋老街町家" },
        { name: "富山玻璃美術館", en: "Toyama Glass Art Museum",
          note: "同樣出自隈研吾之手、與市立圖書館共構的 TOYAMA KIRARI，木格柵與玻璃交織的中庭挑空是打卡熱點；館內常設世界級玻璃藝術，呼應富山「玻璃之城」的城市名片。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/TOYAMA%20KIRARI%20Toyama%20Glass%20Art%20Museum%20ac%20%283%29.jpg?width=1280",
          alt: "富山玻璃美術館木格柵挑空中庭" },
      ],
      caveat: "＊運河遊船與中島閘門為季節／天候營運，遇停航將改以陸路前往岩瀨，老街散策不受影響；新幹線班次充裕，往返金澤機動性高。晚餐（菜單另附）。" },

    { n: 4, label: "永平寺・加賀溫泉", title: "先到禪宗大本山吃一頓精進料理，午後泡湯放假",
      route: "金澤 → 福井・永平寺（參拜＋精進料理午餐）→〔天氣好順遊東尋坊〕→ 加賀・片山津溫泉 → 宿加賀（會席／蟹會席）",
      stops: [
        { name: "永平寺", en: "Eiheiji Temple",
          note: "曹洞宗大本山、開創於 1244 年的禪修道場，七十餘棟伽藍依山而建、老杉環抱，至今仍有雲水僧清修；午餐享用一汁三菜、不殺生的精進料理，是身心一起沉靜下來的一餐。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Eiheiji%20entrance.jpg?width=1280",
          alt: "永平寺參道與老杉伽藍" },
        { name: "東尋坊（機動順遊）", en: "Tojinbo Cliffs",
          note: "日本海怒濤鑿出的柱狀節理斷崖，長約 1 公里、世界僅三處的地質奇景，登崖上遠眺或搭觀光船仰望皆震撼。＊時間充裕、天氣好才順遊，行程不勉強硬塞。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tojinbo%20cliffs%2C%20Fukui%20Prefecture%3B%20September%202019%20%2801%29.jpg?width=1280",
          alt: "東尋坊柱狀節理斷崖與日本海" },
        { name: "片山津溫泉・柴山潟", en: "Katayamazu Onsen",
          note: "加賀溫泉鄉中唯一臨湖的溫泉，柴山潟一日七變的湖色、湖上白山連峰是招牌畫面；午後三點前進旅館，泡湯、看湖、吃會席，把下半天完全交給休息。",
          img: "https://commons.wikimedia.org/wiki/Special:FilePath/Katayamadu%20Shibayamagata.JPG?width=1280",
          alt: "片山津溫泉柴山潟湖景與白山連峰" },
      ],
      caveat: "＊動線提醒：金澤往南到永平寺約 1 小時 15 分，用完精進料理再折返北上加賀約 45 分，等於多開約 45 分鐘回頭路——但換得午後三點前進旅館、後半天全放假泡湯，值得。時間足、天氣好可加東尋坊斷崖；不足則直接進旅館，不硬排。當晚以旅館招牌會席／蟹會席為主秀（12 月正逢螃蟹季）。" },

    { n: 5, label: "賦歸・小松啟程", title: "帶著北陸的山、雪與湯，午班機回家",
      route: "加賀溫泉旅館 → 小松機場 → 桃園機場",
      stops: [],
      caveat: "＊回程 BR157 上午 11:45 自小松起飛、13:55 抵達桃園；片山津溫泉距小松機場車程約 30 分鐘，晨起可從容用早餐、賞最後一眼柴山潟湖色再啟程。" },
  ],

  // 費用（每人・新台幣）
  pricing: {
    unit: "每人・新台幣",
    tiers: [
      { pax: "20 人成行", price: "63,900" },
      { pax: "30 人成行", price: "61,900" },
    ],
    note: "以上為每人團費參考價，實際報價、成行人數、單人房差與費用包含項目以角落旅行社正式報價與出團通知為準。",
  },

  // ★ 餐食（本團主秀）：一餐一則、寫在地食文化的份量
  meals: [
    { day: "DAY 1・金澤晚餐", name: "加賀料理・治部煮", en: "Kaga Cuisine · Jibu-ni",
      venue: "大友樓／大名茶家（加賀料理老舖）",
      desc: "加賀料理的招牌是「治部煮」：鴨肉沾一層薄麵粉，和金澤特產的すだれ麩、加賀野菜一起用醬油、味醂的甜辣湯汁煮，盛在淺淺的治部椀裡，最後點一撮山葵——麵粉讓湯汁變濃、裹住每一口。晚餐安排在金澤的加賀料理老舖：『大友樓』從 1830 年起做加賀藩的御膳，是日本唯一還在做大名家料理的料亭；『大名茶家』昭和 37 年創業，離金澤站走 4 分鐘，以加賀野菜和當令魚介的會席聞名。",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Jibuni%2001.jpg?width=1000",
      alt: "加賀料理治部煮盛在治部椀中", hero: true },
    { day: "DAY 1・午餐", name: "近江町市場・海鮮丼", en: "Omicho Seafood Bowl",
      venue: "近江町市場 食堂",
      desc: "近江町市場開了快 300 年，是金澤人日常買菜的地方。午餐就在市場裡的食堂點一碗海鮮丼，甜蝦、寒鰤、蟹肉、海膽鋪滿整碗，當令有什麼就放什麼。",
      img: "/tour/kanazawa-2026/omicho.jpg",
      alt: "近江町市場的海鮮丼" },
    { day: "DAY 3・富山", name: "富山灣鮨・白蝦", en: "Toyama Bay Sushi · White Shrimp",
      venue: "岩瀨老街周邊",
      desc: "富山灣又深又冷、魚種多，當地叫它「天然魚缸」。白蝦是這裡限定的味道——透明帶甜，只有富山灣捕得到；配上寒鰤和當日鮮魚握成的「富山灣鮨」，再來一杯岩瀨桝田酒造的「滿壽泉」。",
      img: "/tour/kanazawa-2026/shiroebi.jpg",
      alt: "富山灣鮨・玻璃盤上的握壽司拼盤" },
    { day: "DAY 4・午餐", name: "永平寺・精進料理", en: "Eiheiji Shojin Cuisine",
      venue: "曹洞宗大本山 永平寺",
      desc: "永平寺是禪宗的修行道場，僧人吃的精進料理不用肉也不用魚，以豆腐、胡麻豆腐、當季山菜為主，調味清淡。在老杉環抱的寺裡吃這一餐，剛好換個節奏。" },
    { day: "DAY 4・晚餐（全程主秀）", name: "湖畔會席・蟹づくし", en: "Lakeside Kaiseki · Crab Feast",
      venue: "湖畔之宿 森本（片山津溫泉）",
      desc: "12 月正是北陸的螃蟹季。最後一晚的旅館會席以螃蟹為主角：加能蟹（松葉蟹），還有只有母蟹才有、產季短短兩個月的香箱蟹，從生蟹刺身、烤蟹、蟹鍋一路吃到蟹肉炊飯。泡完柴山潟湖畔的溫泉再上桌。",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Fresh%20Matsuba%20Crab%20Full%20Course%20Kaiseki%20%2822418491357%29.jpg?width=1200",
      alt: "松葉蟹全席會席料理", hero: true },
  ],

  // 住宿：金澤連泊三晚 ＋ 加賀溫泉一晚（湖畔會席）
  hotels: [
    { name: "三井花園酒店 金澤", en: "Mitsui Garden Hotel Kanazawa",
      nights: "D1–D3・連泊三晚", area: "金澤・近江町市場旁",
      desc: "武家美學與當代藝術交融的城市飯店，頂樓 13 樓大浴場遠眺金澤城公園與兼六園一帶；步行約 4 分到近江町市場、約 11 分到金澤城與長町武家屋敷，連泊三晚不用天天換飯店、逛街覓食都方便。",
      feat: ["頂樓景觀大浴場（免費）", "步行 4 分近江町市場", "加賀・能登食材和式早餐"],
      img: "/tour/kanazawa-2026/mitsui.jpg" },
    { name: "湖畔之宿 森本", en: "Kohan no Yado Morimoto",
      nights: "D4・加賀片山津溫泉", area: "片山津溫泉・柴山潟湖畔",
      desc: "1892 年創業、逾百三十年的臨湖溫泉老舖，露天風呂正對柴山潟與白山連峰，湖色晨昏七變；鈉・鈣氯化物泉質保暖不易冷，晚間於「花花」食事處享用北陸山海會席／蟹會席，是全程的溫泉高潮。",
      feat: ["柴山潟湖畔露天風呂", "北陸山海會席・蟹會席", "距小松機場車程約 30 分"],
      img: "/tour/kanazawa-2026/morimoto.jpg" },
  ],
}
