const firebaseConfig = {
      apiKey: "AIzaSyAyiOoVQ2n8scNNf5SjnfBVtrJbt5wiVko",
      authDomain: "supa-dojo.firebaseapp.com",
      databaseURL: "https://supa-dojo-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "supa-dojo",
      storageBucket: "supa-dojo.firebasestorage.app",
      messagingSenderId: "1037833695190",
      appId: "1:1037833695190:web:02b349414c61f13322be77"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.database();
    const API = "https://echonode-api.onrender.com/auth";
    const API_ROOT = API.replace(/\/auth$/, "");
    const FOUNDER_EMAIL = "aaoouua00@gmail.com";

    const countryOptions = [
      { code:"SA", flag:"🇸🇦", name:"Saudi Arabia" },
      { code:"AE", flag:"🇦🇪", name:"United Arab Emirates" },
      { code:"QA", flag:"🇶🇦", name:"Qatar" },
      { code:"KW", flag:"🇰🇼", name:"Kuwait" },
      { code:"BH", flag:"🇧🇭", name:"Bahrain" },
      { code:"OM", flag:"🇴🇲", name:"Oman" },
      { code:"EG", flag:"🇪🇬", name:"Egypt" },
      { code:"TR", flag:"🇹🇷", name:"Türkiye" },
      { code:"US", flag:"🇺🇸", name:"United States" },
      { code:"GB", flag:"🇬🇧", name:"United Kingdom" },
      { code:"CA", flag:"🇨🇦", name:"Canada" },
      { code:"AU", flag:"🇦🇺", name:"Australia" },
      { code:"DE", flag:"🇩🇪", name:"Germany" },
      { code:"FR", flag:"🇫🇷", name:"France" },
      { code:"IT", flag:"🇮🇹", name:"Italy" },
      { code:"ES", flag:"🇪🇸", name:"Spain" },
      { code:"NL", flag:"🇳🇱", name:"Netherlands" },
      { code:"SE", flag:"🇸🇪", name:"Sweden" },
      { code:"NO", flag:"🇳🇴", name:"Norway" },
      { code:"JP", flag:"🇯🇵", name:"Japan" },
      { code:"KR", flag:"🇰🇷", name:"Korea, Republic of" },
      { code:"CN", flag:"🇨🇳", name:"China" },
      { code:"IN", flag:"🇮🇳", name:"India" },
      { code:"BR", flag:"🇧🇷", name:"Brazil" },
      { code:"MX", flag:"🇲🇽", name:"Mexico" },
      { code:"ZA", flag:"🇿🇦", name:"South Africa" },
      { code:"AF", flag:"🇦🇫", name:"Afghanistan" },
      { code:"AL", flag:"🇦🇱", name:"Albania" },
      { code:"DZ", flag:"🇩🇿", name:"Algeria" },
      { code:"AS", flag:"🇦🇸", name:"American Samoa" },
      { code:"AD", flag:"🇦🇩", name:"Andorra" },
      { code:"AO", flag:"🇦🇴", name:"Angola" },
      { code:"AI", flag:"🇦🇮", name:"Anguilla" },
      { code:"AQ", flag:"🇦🇶", name:"Antarctica" },
      { code:"AG", flag:"🇦🇬", name:"Antigua and Barbuda" },
      { code:"AR", flag:"🇦🇷", name:"Argentina" },
      { code:"AM", flag:"🇦🇲", name:"Armenia" },
      { code:"AW", flag:"🇦🇼", name:"Aruba" },
      { code:"AT", flag:"🇦🇹", name:"Austria" },
      { code:"AZ", flag:"🇦🇿", name:"Azerbaijan" },
      { code:"BS", flag:"🇧🇸", name:"Bahamas" },
      { code:"BD", flag:"🇧🇩", name:"Bangladesh" },
      { code:"BB", flag:"🇧🇧", name:"Barbados" },
      { code:"BY", flag:"🇧🇾", name:"Belarus" },
      { code:"BE", flag:"🇧🇪", name:"Belgium" },
      { code:"BZ", flag:"🇧🇿", name:"Belize" },
      { code:"BJ", flag:"🇧🇯", name:"Benin" },
      { code:"BM", flag:"🇧🇲", name:"Bermuda" },
      { code:"BT", flag:"🇧🇹", name:"Bhutan" },
      { code:"BO", flag:"🇧🇴", name:"Bolivia, Plurinational State of" },
      { code:"BQ", flag:"🇧🇶", name:"Bonaire, Sint Eustatius and Saba" },
      { code:"BA", flag:"🇧🇦", name:"Bosnia and Herzegovina" },
      { code:"BW", flag:"🇧🇼", name:"Botswana" },
      { code:"BV", flag:"🇧🇻", name:"Bouvet Island" },
      { code:"IO", flag:"🇮🇴", name:"British Indian Ocean Territory" },
      { code:"BN", flag:"🇧🇳", name:"Brunei Darussalam" },
      { code:"BG", flag:"🇧🇬", name:"Bulgaria" },
      { code:"BF", flag:"🇧🇫", name:"Burkina Faso" },
      { code:"BI", flag:"🇧🇮", name:"Burundi" },
      { code:"CV", flag:"🇨🇻", name:"Cabo Verde" },
      { code:"KH", flag:"🇰🇭", name:"Cambodia" },
      { code:"CM", flag:"🇨🇲", name:"Cameroon" },
      { code:"KY", flag:"🇰🇾", name:"Cayman Islands" },
      { code:"CF", flag:"🇨🇫", name:"Central African Republic" },
      { code:"TD", flag:"🇹🇩", name:"Chad" },
      { code:"CL", flag:"🇨🇱", name:"Chile" },
      { code:"CX", flag:"🇨🇽", name:"Christmas Island" },
      { code:"CC", flag:"🇨🇨", name:"Cocos (Keeling) Islands" },
      { code:"CO", flag:"🇨🇴", name:"Colombia" },
      { code:"KM", flag:"🇰🇲", name:"Comoros" },
      { code:"CG", flag:"🇨🇬", name:"Congo" },
      { code:"CD", flag:"🇨🇩", name:"Congo, The Democratic Republic of the" },
      { code:"CK", flag:"🇨🇰", name:"Cook Islands" },
      { code:"CR", flag:"🇨🇷", name:"Costa Rica" },
      { code:"HR", flag:"🇭🇷", name:"Croatia" },
      { code:"CU", flag:"🇨🇺", name:"Cuba" },
      { code:"CW", flag:"🇨🇼", name:"Curaçao" },
      { code:"CY", flag:"🇨🇾", name:"Cyprus" },
      { code:"CZ", flag:"🇨🇿", name:"Czechia" },
      { code:"CI", flag:"🇨🇮", name:"Côte d'Ivoire" },
      { code:"DK", flag:"🇩🇰", name:"Denmark" },
      { code:"DJ", flag:"🇩🇯", name:"Djibouti" },
      { code:"DM", flag:"🇩🇲", name:"Dominica" },
      { code:"DO", flag:"🇩🇴", name:"Dominican Republic" },
      { code:"EC", flag:"🇪🇨", name:"Ecuador" },
      { code:"SV", flag:"🇸🇻", name:"El Salvador" },
      { code:"GQ", flag:"🇬🇶", name:"Equatorial Guinea" },
      { code:"ER", flag:"🇪🇷", name:"Eritrea" },
      { code:"EE", flag:"🇪🇪", name:"Estonia" },
      { code:"SZ", flag:"🇸🇿", name:"Eswatini" },
      { code:"ET", flag:"🇪🇹", name:"Ethiopia" },
      { code:"FK", flag:"🇫🇰", name:"Falkland Islands (Malvinas)" },
      { code:"FO", flag:"🇫🇴", name:"Faroe Islands" },
      { code:"FJ", flag:"🇫🇯", name:"Fiji" },
      { code:"FI", flag:"🇫🇮", name:"Finland" },
      { code:"GF", flag:"🇬🇫", name:"French Guiana" },
      { code:"PF", flag:"🇵🇫", name:"French Polynesia" },
      { code:"TF", flag:"🇹🇫", name:"French Southern Territories" },
      { code:"GA", flag:"🇬🇦", name:"Gabon" },
      { code:"GM", flag:"🇬🇲", name:"Gambia" },
      { code:"GE", flag:"🇬🇪", name:"Georgia" },
      { code:"GH", flag:"🇬🇭", name:"Ghana" },
      { code:"GI", flag:"🇬🇮", name:"Gibraltar" },
      { code:"GR", flag:"🇬🇷", name:"Greece" },
      { code:"GL", flag:"🇬🇱", name:"Greenland" },
      { code:"GD", flag:"🇬🇩", name:"Grenada" },
      { code:"GP", flag:"🇬🇵", name:"Guadeloupe" },
      { code:"GU", flag:"🇬🇺", name:"Guam" },
      { code:"GT", flag:"🇬🇹", name:"Guatemala" },
      { code:"GG", flag:"🇬🇬", name:"Guernsey" },
      { code:"GN", flag:"🇬🇳", name:"Guinea" },
      { code:"GW", flag:"🇬🇼", name:"Guinea-Bissau" },
      { code:"GY", flag:"🇬🇾", name:"Guyana" },
      { code:"HT", flag:"🇭🇹", name:"Haiti" },
      { code:"HM", flag:"🇭🇲", name:"Heard Island and McDonald Islands" },
      { code:"VA", flag:"🇻🇦", name:"Holy See (Vatican City State)" },
      { code:"HN", flag:"🇭🇳", name:"Honduras" },
      { code:"HK", flag:"🇭🇰", name:"Hong Kong" },
      { code:"HU", flag:"🇭🇺", name:"Hungary" },
      { code:"IS", flag:"🇮🇸", name:"Iceland" },
      { code:"ID", flag:"🇮🇩", name:"Indonesia" },
      { code:"IR", flag:"🇮🇷", name:"Iran, Islamic Republic of" },
      { code:"IQ", flag:"🇮🇶", name:"Iraq" },
      { code:"IE", flag:"🇮🇪", name:"Ireland" },
      { code:"IM", flag:"🇮🇲", name:"Isle of Man" },
      { code:"IL", flag:"🇮🇱", name:"Israel" },
      { code:"JM", flag:"🇯🇲", name:"Jamaica" },
      { code:"JE", flag:"🇯🇪", name:"Jersey" },
      { code:"JO", flag:"🇯🇴", name:"Jordan" },
      { code:"KZ", flag:"🇰🇿", name:"Kazakhstan" },
      { code:"KE", flag:"🇰🇪", name:"Kenya" },
      { code:"KI", flag:"🇰🇮", name:"Kiribati" },
      { code:"KP", flag:"🇰🇵", name:"Korea, Democratic People's Republic of" },
      { code:"KG", flag:"🇰🇬", name:"Kyrgyzstan" },
      { code:"LA", flag:"🇱🇦", name:"Lao People's Democratic Republic" },
      { code:"LV", flag:"🇱🇻", name:"Latvia" },
      { code:"LB", flag:"🇱🇧", name:"Lebanon" },
      { code:"LS", flag:"🇱🇸", name:"Lesotho" },
      { code:"LR", flag:"🇱🇷", name:"Liberia" },
      { code:"LY", flag:"🇱🇾", name:"Libya" },
      { code:"LI", flag:"🇱🇮", name:"Liechtenstein" },
      { code:"LT", flag:"🇱🇹", name:"Lithuania" },
      { code:"LU", flag:"🇱🇺", name:"Luxembourg" },
      { code:"MO", flag:"🇲🇴", name:"Macao" },
      { code:"MG", flag:"🇲🇬", name:"Madagascar" },
      { code:"MW", flag:"🇲🇼", name:"Malawi" },
      { code:"MY", flag:"🇲🇾", name:"Malaysia" },
      { code:"MV", flag:"🇲🇻", name:"Maldives" },
      { code:"ML", flag:"🇲🇱", name:"Mali" },
      { code:"MT", flag:"🇲🇹", name:"Malta" },
      { code:"MH", flag:"🇲🇭", name:"Marshall Islands" },
      { code:"MQ", flag:"🇲🇶", name:"Martinique" },
      { code:"MR", flag:"🇲🇷", name:"Mauritania" },
      { code:"MU", flag:"🇲🇺", name:"Mauritius" },
      { code:"YT", flag:"🇾🇹", name:"Mayotte" },
      { code:"FM", flag:"🇫🇲", name:"Micronesia, Federated States of" },
      { code:"MD", flag:"🇲🇩", name:"Moldova, Republic of" },
      { code:"MC", flag:"🇲🇨", name:"Monaco" },
      { code:"MN", flag:"🇲🇳", name:"Mongolia" },
      { code:"ME", flag:"🇲🇪", name:"Montenegro" },
      { code:"MS", flag:"🇲🇸", name:"Montserrat" },
      { code:"MA", flag:"🇲🇦", name:"Morocco" },
      { code:"MZ", flag:"🇲🇿", name:"Mozambique" },
      { code:"MM", flag:"🇲🇲", name:"Myanmar" },
      { code:"NA", flag:"🇳🇦", name:"Namibia" },
      { code:"NR", flag:"🇳🇷", name:"Nauru" },
      { code:"NP", flag:"🇳🇵", name:"Nepal" },
      { code:"NC", flag:"🇳🇨", name:"New Caledonia" },
      { code:"NZ", flag:"🇳🇿", name:"New Zealand" },
      { code:"NI", flag:"🇳🇮", name:"Nicaragua" },
      { code:"NE", flag:"🇳🇪", name:"Niger" },
      { code:"NG", flag:"🇳🇬", name:"Nigeria" },
      { code:"NU", flag:"🇳🇺", name:"Niue" },
      { code:"NF", flag:"🇳🇫", name:"Norfolk Island" },
      { code:"MK", flag:"🇲🇰", name:"North Macedonia" },
      { code:"MP", flag:"🇲🇵", name:"Northern Mariana Islands" },
      { code:"PK", flag:"🇵🇰", name:"Pakistan" },
      { code:"PW", flag:"🇵🇼", name:"Palau" },
      { code:"PS", flag:"🇵🇸", name:"Palestine, State of" },
      { code:"PA", flag:"🇵🇦", name:"Panama" },
      { code:"PG", flag:"🇵🇬", name:"Papua New Guinea" },
      { code:"PY", flag:"🇵🇾", name:"Paraguay" },
      { code:"PE", flag:"🇵🇪", name:"Peru" },
      { code:"PH", flag:"🇵🇭", name:"Philippines" },
      { code:"PN", flag:"🇵🇳", name:"Pitcairn" },
      { code:"PL", flag:"🇵🇱", name:"Poland" },
      { code:"PT", flag:"🇵🇹", name:"Portugal" },
      { code:"PR", flag:"🇵🇷", name:"Puerto Rico" },
      { code:"RO", flag:"🇷🇴", name:"Romania" },
      { code:"RU", flag:"🇷🇺", name:"Russian Federation" },
      { code:"RW", flag:"🇷🇼", name:"Rwanda" },
      { code:"RE", flag:"🇷🇪", name:"Réunion" },
      { code:"BL", flag:"🇧🇱", name:"Saint Barthélemy" },
      { code:"SH", flag:"🇸🇭", name:"Saint Helena, Ascension and Tristan da Cunha" },
      { code:"KN", flag:"🇰🇳", name:"Saint Kitts and Nevis" },
      { code:"LC", flag:"🇱🇨", name:"Saint Lucia" },
      { code:"MF", flag:"🇲🇫", name:"Saint Martin (French part)" },
      { code:"PM", flag:"🇵🇲", name:"Saint Pierre and Miquelon" },
      { code:"VC", flag:"🇻🇨", name:"Saint Vincent and the Grenadines" },
      { code:"WS", flag:"🇼🇸", name:"Samoa" },
      { code:"SM", flag:"🇸🇲", name:"San Marino" },
      { code:"ST", flag:"🇸🇹", name:"Sao Tome and Principe" },
      { code:"SN", flag:"🇸🇳", name:"Senegal" },
      { code:"RS", flag:"🇷🇸", name:"Serbia" },
      { code:"SC", flag:"🇸🇨", name:"Seychelles" },
      { code:"SL", flag:"🇸🇱", name:"Sierra Leone" },
      { code:"SG", flag:"🇸🇬", name:"Singapore" },
      { code:"SX", flag:"🇸🇽", name:"Sint Maarten (Dutch part)" },
      { code:"SK", flag:"🇸🇰", name:"Slovakia" },
      { code:"SI", flag:"🇸🇮", name:"Slovenia" },
      { code:"SB", flag:"🇸🇧", name:"Solomon Islands" },
      { code:"SO", flag:"🇸🇴", name:"Somalia" },
      { code:"GS", flag:"🇬🇸", name:"South Georgia and the South Sandwich Islands" },
      { code:"SS", flag:"🇸🇸", name:"South Sudan" },
      { code:"LK", flag:"🇱🇰", name:"Sri Lanka" },
      { code:"SD", flag:"🇸🇩", name:"Sudan" },
      { code:"SR", flag:"🇸🇷", name:"Suriname" },
      { code:"SJ", flag:"🇸🇯", name:"Svalbard and Jan Mayen" },
      { code:"CH", flag:"🇨🇭", name:"Switzerland" },
      { code:"SY", flag:"🇸🇾", name:"Syrian Arab Republic" },
      { code:"TW", flag:"🇹🇼", name:"Taiwan, Province of China" },
      { code:"TJ", flag:"🇹🇯", name:"Tajikistan" },
      { code:"TZ", flag:"🇹🇿", name:"Tanzania, United Republic of" },
      { code:"TH", flag:"🇹🇭", name:"Thailand" },
      { code:"TL", flag:"🇹🇱", name:"Timor-Leste" },
      { code:"TG", flag:"🇹🇬", name:"Togo" },
      { code:"TK", flag:"🇹🇰", name:"Tokelau" },
      { code:"TO", flag:"🇹🇴", name:"Tonga" },
      { code:"TT", flag:"🇹🇹", name:"Trinidad and Tobago" },
      { code:"TN", flag:"🇹🇳", name:"Tunisia" },
      { code:"TM", flag:"🇹🇲", name:"Turkmenistan" },
      { code:"TC", flag:"🇹🇨", name:"Turks and Caicos Islands" },
      { code:"TV", flag:"🇹🇻", name:"Tuvalu" },
      { code:"UG", flag:"🇺🇬", name:"Uganda" },
      { code:"UA", flag:"🇺🇦", name:"Ukraine" },
      { code:"UM", flag:"🇺🇲", name:"United States Minor Outlying Islands" },
      { code:"UY", flag:"🇺🇾", name:"Uruguay" },
      { code:"UZ", flag:"🇺🇿", name:"Uzbekistan" },
      { code:"VU", flag:"🇻🇺", name:"Vanuatu" },
      { code:"VE", flag:"🇻🇪", name:"Venezuela, Bolivarian Republic of" },
      { code:"VN", flag:"🇻🇳", name:"Viet Nam" },
      { code:"VG", flag:"🇻🇬", name:"Virgin Islands, British" },
      { code:"VI", flag:"🇻🇮", name:"Virgin Islands, U.S." },
      { code:"WF", flag:"🇼🇫", name:"Wallis and Futuna" },
      { code:"EH", flag:"🇪🇭", name:"Western Sahara" },
      { code:"YE", flag:"🇾🇪", name:"Yemen" },
      { code:"ZM", flag:"🇿🇲", name:"Zambia" },
      { code:"ZW", flag:"🇿🇼", name:"Zimbabwe" },
      { code:"AX", flag:"🇦🇽", name:"Åland Islands" }
    ];

    function icon(name){
      const icons = {
        menu:`<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
        bell:`<svg viewBox="0 0 24 24"><path d="M15 17H5.8a1 1 0 0 1-.8-1.6L7 12.8V10a5 5 0 0 1 10 0v2.8l2 2.6a1 1 0 0 1-.8 1.6H15m0 0a3 3 0 0 1-6 0"/></svg>`,
        settings:`<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>`,
        home:`<svg viewBox="0 0 24 24"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.8V20h14V9.8"/></svg>`,
        base:`<svg viewBox="0 0 24 24"><path d="M8 8h8v8H8z"/><path d="M3 8h3M18 8h3M3 16h3M18 16h3M8 3v3M16 3v3M8 18v3M16 18v3"/></svg>`,
        profile:`<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>`,
        search:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/></svg>`,
        plus:`<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
        ai:`<svg viewBox="0 0 24 24"><path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/></svg>`,
        close:`<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6l-12 12"/></svg>`,
        arrow:`<svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
        edit:`<svg viewBox="0 0 24 24"><path d="M4 20h4l10-10-4-4L4 16v4Z"/><path d="m12 6 4 4"/></svg>`,
        block:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M7 17 17 7"/></svg>`,
        lock:`<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></svg>`,
        more:`<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18" cy="12" r="1.8"/></svg>`,
        send:`<svg viewBox="0 0 24 24"><path d="M21 3 3 11l7 2 2 7 9-17Z"/></svg>`,
        smile:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M9 10h.01M15 10h.01"/><path d="M8.5 14c1 1.2 2.2 2 3.5 2s2.5-.8 3.5-2"/></svg>`,
        flag:`<svg viewBox="0 0 24 24"><path d="M5 21V5"/><path d="M5 5c6-2 8 2 14 0v8c-6 2-8-2-14 0"/></svg>`,
        game:`<svg viewBox="0 0 24 24"><path d="M6 12h3m-1.5-1.5v3M15.5 11h.01M18.5 13h.01"/><path d="M7 8h10a4 4 0 0 1 4 4v2a3 3 0 0 1-5.2 2.1L14 14H10l-1.8 2.1A3 3 0 0 1 3 14v-2a4 4 0 0 1 4-4Z"/></svg>`
      };
      return `<span class="icon-s">${icons[name] || ''}</span>`;
    }

    const defaultCommunities = {
      all:{name:"rooms", topic:"Live rooms that reset every day at 12"},
      general:{name:"general", topic:"Main room for everyone"},
      souls:{name:"RPGs", topic:"RPG quests, builds, co-op runs, clips, and boss fights"},
      horror:{name:"horror", topic:"Horror games, moments, scares, and co-op runs"},
      shooter:{name:"shooter", topic:"Shooter squads, aim clips, loadouts, and wins"},
      trending:{name:"trending", topic:"Community-locked room unlocked by support", locked:true, supportGoal:1000}
    };

    const ROOM_ORDER = ["general","souls","horror","shooter","trending"];
    const ROOM_SUPPORT = { trending:{ current:240, goal:1000 } };

    function roomGlyph(roomId, className="room-glyph"){
      const glyphs = {
        general:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="17" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18" cy="7" r="1.8"/><path d="M7.4 15.6 10.6 13.4M13.4 10.6 16.6 8.4"/></svg>`,
        souls:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 16 7v4.2c0 3.8-1.6 6.2-4 8-2.4-1.8-4-4.2-4-8V7l4-3Z"/><path d="M12 8v7M9.6 10.7h4.8"/></svg>`,
        horror:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 18c0-4 1.9-6.9 4-9.5 2.1 2.6 4 5.5 4 9.5"/><path d="M10 12h.01M14 12h.01"/><path d="M9.5 15c.9.8 1.7 1.2 2.5 1.2s1.6-.4 2.5-1.2"/></svg>`,
        shooter:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>`,
        trending:`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="10" width="12" height="10" rx="2.2"/><path d="M9 10V8a3 3 0 0 1 6 0v2"/><path d="M12 14v2.5"/></svg>`
      };
      return `<span class="${className}">${glyphs[roomId] || glyphs.general}</span>`;
    }

    const defaultPrivacy = { showBirthday:false, showCountry:true, notificationsEnabled:true };
    const defaultProfile = {
      displayName:"", email:"", mood:"Late night cat-energy online", level:1, xp:0,
      mySpace:"Your clips, thoughts, and best drops live here.", avatar:"", cover:"",
      musicUrl:"", presence:"online", gender:"", friendsVisibility:"public", showcase1:"", showcase2:"", showcase3:"",
      founder:false, countryCode:"SA", countryFlag:"🇸🇦", countryName:"Saudi Arabia",
      birthday:"", blockedUsers:{}, securityKey:"", paws:100, premiumBadge:false, profileGlow:false,
      catPawBadge:false, nameSpark:false, playingGame:"", discordPlaying:"", discordListening:"", ...defaultPrivacy
    };

    const state = {
      authMode:"welcome", accountMode:"signin", otpSent:false, accountExists:false,
      email:"", displayName:"", user:null, currentCommunity:"all", currentPage:"home",
      draftPostImage:"", draftPostLink:"", draftPostText:"",
      communities:defaultCommunities, posts:{}, profiles:{}, statusMap:{}, threads:{},
      selectedDmUid:"", viewingProfileUid:"", sidebarOpen:false, settingsOpen:false, aiOpen:false, createCommunityOpen:false,
      unsubs:[], presenceRef:null, lastPostAt:0, founder:false, searchHome:"", searchBase:"", baseTab:"chats", showRoomLink:false, showRoomMediaTools:false,
      notifiedLikes:{}, notifiedMessages:{},
      unreadCounts:{}, lastReadThreads: JSON.parse(localStorage.getItem("echonode_last_reads") || "{}"), reportUid:"", memberMenuOpen:false, storeOpen:false, legalOpen:false, adminOpen:false, imageViewer:"",
      profile:{ ...defaultProfile }
    };

    const $ = s => document.querySelector(s);
    const $$ = s => document.querySelectorAll(s);
    const esc = s => { const d=document.createElement("div"); d.textContent=s==null?"":s; return d.innerHTML; };
    const emailKey = v => String(v || "").trim().toLowerCase().replace(/[.#$/[\]]/g, "_");
    const initials = name => (name || "EN").trim().slice(0,2).toUpperCase();
    const countryByCode = code => countryOptions.find(c => c.code === code) || countryOptions[0];


    async function getAuthHeaders(extra = {}){
      const headers = { "Content-Type":"application/json", ...extra };
      if(state.user){
        try {
          const token = await state.user.getIdToken();
          if(token) headers.Authorization = `Bearer ${token}`;
        } catch(_err){}
      }
      return headers;
    }

    async function apiJson(path, options = {}){
      const headers = await getAuthHeaders(options.headers || {});
      const res = await fetch(`${API_ROOT}${path}`, { ...options, headers });
      let data = {};
      try { data = await res.json(); } catch(_err) {}
      if(!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
      return data;
    }

    function escapeAttr(value){
      return esc(String(value || "")).replace(/"/g, '&quot;');
    }

    function brandLogoMarkup(cls="brand-logo"){
      return `
        <svg class="${cls}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="160" height="160" rx="44" fill="url(#g)"/>
          <path d="M28 112c0-16 10-28 28-30 7-18 25-28 52-28 26 0 45 10 52 28 18 2 28 14 28 30v10H28v-10Z" fill="#F4F4F7"/>
          <path d="M38 88c-10-12-16-23-16-41 18 8 28 14 39 21" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <path d="M122 88c10-12 16-23 16-41-18 8-28 14-39 21" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <circle cx="66" cy="97" r="5" fill="#0D0D12"/>
          <circle cx="94" cy="97" r="5" fill="#0D0D12"/>
          <path d="M74 111c4 3 8 4 12 0" stroke="#0D0D12" stroke-width="3" stroke-linecap="round"/>
          <defs><linearGradient id="g" x1="20" y1="20" x2="140" y2="140"><stop stop-color="#6B16FF"/><stop offset="1" stop-color="#8B4DFF"/></linearGradient></defs>
        </svg>
      `;
    }

    function fileToDataUrl(file){
      return new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }



    async function imageFileToOptimizedDataUrl(file, { maxSide = 1600, quality = 0.82 } = {}){
      if(!file) return "";
      if(!/^image\//i.test(file.type || "")) return fileToDataUrl(file);
      const source = await fileToDataUrl(file);
      const img = await new Promise((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = reject;
        el.src = source;
      });
      const longestSide = Math.max(img.width || 0, img.height || 0, 1);
      const scale = Math.min(1, maxSide / longestSide);
      const width = Math.max(1, Math.round((img.width || 1) * scale));
      const height = Math.max(1, Math.round((img.height || 1) * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d", { alpha:false });
      if(!ctx) return source;
      ctx.drawImage(img, 0, 0, width, height);
      try {
        return canvas.toDataURL("image/webp", quality);
      } catch (err) {
        return source;
      }
    }

    function formatBirthdayShort(value){
      const raw = String(value || "").trim();
      if(!raw) return "";
      const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if(match){
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const monthIndex = Math.max(0, Math.min(11, Number(match[2]) - 1));
        return `${Number(match[3])} ${months[monthIndex]}`;
      }
      const parsed = new Date(raw);
      if(Number.isNaN(parsed.getTime())) return raw;
      return parsed.toLocaleDateString("en-GB", { day:"numeric", month:"short" });
    }

    function getActiveDMInput(){
      const activePage = document.querySelector(".page.active");
      if(activePage){
        const activeInput = activePage.querySelector("#chatDmInput, #baseDmInput, #dmInput");
        if(activeInput) return activeInput;
      }
      if(state.currentPage === "base") return document.querySelector("#baseDmInput") || document.querySelector("#chatDmInput") || document.querySelector("#dmInput");
      if(state.currentPage === "chat") return document.querySelector("#chatDmInput") || document.querySelector("#baseDmInput") || document.querySelector("#dmInput");
      return document.querySelector("#baseDmInput") || document.querySelector("#chatDmInput") || document.querySelector("#dmInput");
    }

    function getActiveComposer(){
      if(state.composeOpen) return document.querySelector("#createPostComposer");
      return document.querySelector("#roomComposer") || document.querySelector("#createPostComposer");
    }

    function normalizeSongUrl(url){ return String(url || "").trim(); }
    function isDirectAudio(url){ return /\.(mp3|wav|ogg|m4a)(\?.*)?$/i.test(url || ""); }
    function spotifyEmbed(url){
      url = normalizeSongUrl(url);
      const kinds = ["track","episode","album","playlist"];
      for(const k of kinds){
        const m = url.match(new RegExp("spotify\\.com\\/" + k + "\\/([A-Za-z0-9]+)", "i"));
        if(m) return "https://open.spotify.com/embed/" + k + "/" + m[1];
      }
      return "";
    }

    function youtubeEmbed(url){
      url = String(url || "").trim();
      const a = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
      return a ? `https://www.youtube.com/embed/${a[1]}` : "";
    }
    function resetDraftMedia(){
      state.draftPostImage = "";
      state.draftPostLink = "";
      state.draftPostText = "";
      state.showRoomLink = false;
    }

    function browserNotify(title, body){
      if(!state.profile.notificationsEnabled) return;
      if(typeof Notification === "undefined") return;
      if(Notification.permission === "granted"){
        try{ new Notification(title, { body }); }catch(e){}
      }
    }

    async function ensureNotificationPermission(){
      if(typeof Notification === "undefined") return false;
      if(Notification.permission === "granted") return true;
      if(Notification.permission === "denied") return false;
      try{
        const result = await Notification.requestPermission();
        return result === "granted";
      }catch(e){
        return false;
      }
    }

    function timeLabel(ts){ if(!ts) return ""; const d=new Date(ts); return d.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"}); }
    function dateLabel(ts){ if(!ts) return ""; const d=new Date(ts); return d.toLocaleDateString([], {month:"short", day:"numeric"}); }
    function presenceClass(v){ return ["online","afk","busy","offline"].includes(v) ? v : "offline"; }
    function getLevel(xp){ if(xp<100) return 1; if(xp<300) return 2; if(xp<600) return 3; if(xp<1000) return 4; return 5; }
    function nextLevelXP(level){ if(level<=1)return 100; if(level===2)return 300; if(level===3)return 600; if(level===4)return 1000; return level*300; }
    function currentLevelBase(level){ if(level<=1)return 0; if(level===2)return 100; if(level===3)return 300; if(level===4)return 600; return 1000+((level-5)*300); }
    function progressPercent(xp, level){ const base=currentLevelBase(level), next=nextLevelXP(level), span=Math.max(1,next-base); return Math.max(0, Math.min(100, ((xp-base)/span)*100)); }
    function toast(title,msg){ const wrap=$("#toasts"); const el=document.createElement("div"); el.className="toast"; el.innerHTML=`<div>✨</div><div><div class="t-title">${esc(title)}</div><div class="t-msg">${esc(msg)}</div></div>`; wrap.prepend(el); setTimeout(()=>el.remove(),2200); }
    function setStatus(msg, ok){ const el=$("#status"); if(!el) return; el.textContent=msg||""; el.classList.toggle("ok", !!ok); }
    function clearUnsubs(){ state.unsubs.forEach(fn=>{try{fn();}catch(e){}}); state.unsubs=[]; }

    async function ensureCommunitiesExist(){
      const ref = db.ref("communities");
      const snap = await ref.get();
      const current = snap.val() || {};
      const fixedRooms = Object.fromEntries(
        Object.entries(defaultCommunities)
          .filter(([k]) => k !== "all")
          .map(([k, v]) => [k, { ...v, locked: !!v.locked, supportGoal: v.supportGoal || null }])
      );
      const missing = Object.fromEntries(Object.entries(fixedRooms).filter(([k]) => !current[k]));
      if(Object.keys(missing).length){
        await ref.update(missing);
      }
    }
    async function loadCommunities(){
      await ensureCommunitiesExist();
      const snap = await db.ref("communities").get();
      const raw = snap.val() || {};
      const fixed = {};
      ROOM_ORDER.forEach((key) => {
        fixed[key] = { ...defaultCommunities[key], ...(raw[key] || {}) };
      });
      state.communities = { all: defaultCommunities.all, ...fixed };
    }
    async function checkAccountExists(email){
      const key = emailKey(email);
      const snap = await db.ref("emails/" + key).get();
      state.accountExists = snap.exists();
      return state.accountExists;
    }

    async function loadProfile(uid){
      const profileRef=db.ref("profiles/" + uid), userRef=db.ref("users/" + uid);
      const pSnap=await profileRef.get();
      if(!pSnap.exists()){
        const profile = {
          ...defaultProfile,
          displayName: state.displayName || state.email.split("@")[0],
          email: state.email,
          emailKey: emailKey(state.email),
          founder: state.email.toLowerCase()===FOUNDER_EMAIL.toLowerCase()
        };
        await profileRef.set(profile);
        await db.ref("emails/" + profile.emailKey).set(uid);
        state.profile = { ...defaultProfile, ...profile };
      } else {
        state.profile = { ...defaultProfile, ...pSnap.val() };
      }
      const uSnap=await userRef.get(); const uVal=uSnap.val()||{};
      if(!uSnap.exists()) await userRef.set({xp:0, level:1});
      state.profile.xp = uVal.xp || 0; state.profile.level = uVal.level || 1;
      state.profile.email = state.profile.email || state.email;
      state.profile.founder = String(state.profile.email || "").toLowerCase()===FOUNDER_EMAIL.toLowerCase() || !!state.profile.founder;
      const cc = countryByCode(state.profile.countryCode || "SA");
      state.profile.countryCode = cc.code; state.profile.countryFlag = cc.flag; state.profile.countryName = cc.name;
      state.founder = !!state.profile.founder;
    }

    async function addXP(amount){
      const uid=auth.currentUser && auth.currentUser.uid; if(!uid) return;
      const ref=db.ref("users/" + uid), snap=await ref.get(), data=snap.val()||{};
      const xp=(data.xp||0)+amount, level=getLevel(xp);
      await ref.update({xp,level}); state.profile.xp=xp; state.profile.level=level;
    }

    function subscribePostsForCommunity(communityId){
      const ref=db.ref("posts/" + communityId).limitToLast(100);
      const cb=snap=>{
        const val=snap.val()||{};
        const entries = Object.entries(val).map(([id,v])=>({id,communityId,...v}));
        entries.forEach(post=>{
          if(!state.user || post.uid !== state.user.uid) return;
          const prevLikes = state.notifiedLikes[post.id];
          const nextLikes = Number(post.likes || 0);
          if(prevLikes != null && nextLikes > prevLikes){
            const diff = nextLikes - prevLikes;
            toast("New likes", `${diff} new like${diff > 1 ? "s" : ""} on your post.`);
            browserNotify("New likes on your post", `${diff} new like${diff > 1 ? "s" : ""} on your post.`);
          }
          state.notifiedLikes[post.id] = nextLikes;
        });
        state.posts[communityId]=entries;
        if(state.user) renderMain();
      };
      ref.on("value",cb); state.unsubs.push(()=>ref.off("value",cb));
    }
    function subscribeProfiles(){
      const ref=db.ref("profiles");
      const cb=snap=>{ state.profiles=snap.val()||{}; if(state.user) renderMain(); };
      ref.on("value",cb); state.unsubs.push(()=>ref.off("value",cb));
    }
    function subscribeStatus(){
      const ref=db.ref("status");
      const cb=snap=>{ state.statusMap=snap.val()||{}; if(state.user) renderMain(); };
      ref.on("value",cb); state.unsubs.push(()=>ref.off("value",cb));
    }
    function subscribeDMsForUser(uid){
      const ref=db.ref("dms");
      const cb=snap=>{
        const all=snap.val()||{}; state.threads={};
        Object.entries(all).forEach(([threadId,val])=>{
          if(threadId.includes(uid)){
            state.threads[threadId]=val;
            const msgs = Object.values((val && val.messages) || {});
            const incoming = msgs.filter(m => m && m.to === uid && m.from !== uid).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
            const latestIncoming = incoming[incoming.length - 1];
            if(latestIncoming){
              const prevSeen = state.notifiedMessages[threadId];
              const nextSeen = Number(latestIncoming.createdAt || 0);
              if(prevSeen != null && nextSeen > prevSeen){
                const senderName = latestIncoming.name || "New message";
                toast(senderName, latestIncoming.text || "Sent you a message");
                browserNotify(senderName, latestIncoming.text || "Sent you a message");
              }
              state.notifiedMessages[threadId] = nextSeen;
              const lastRead = Number(state.lastReadThreads[threadId] || 0);
              state.unreadCounts[threadId] = incoming.filter(m => Number(m.createdAt || 0) > lastRead).length;
            } else {
              state.unreadCounts[threadId] = 0;
            }
          }
        });
        if(state.user) renderMain();
      };
      ref.on("value",cb); state.unsubs.push(()=>ref.off("value",cb));
    }
    async function subscribeAll(){
      clearUnsubs(); await loadCommunities();
      Object.keys(state.communities).filter(k=>k!=="all").forEach(subscribePostsForCommunity);
      subscribeProfiles(); subscribeStatus(); subscribeDMsForUser(state.user.uid);
    }
    async function setPresence(mode){
      if(!state.user) return; state.profile.presence=mode;
      await db.ref("profiles/" + state.user.uid + "/presence").set(mode);
      await db.ref("status/" + state.user.uid).set({
        state:mode, last_changed:Date.now(),
        name: state.profile.displayName || state.email.split("@")[0] || "User"
      });
    }
    function bindPresence(){
      if(!state.user) return;
      const ref=db.ref("status/" + state.user.uid); state.presenceRef=ref;
      ref.onDisconnect().set({state:"offline", last_changed:Date.now(), name: state.profile.displayName || state.email.split("@")[0] || "User"});
      ref.set({state:state.profile.presence||"online", last_changed:Date.now(), name: state.profile.displayName || state.email.split("@")[0] || "User"});
    }

    function renderAuth(){
      const signup = state.accountMode === "signup";
      $("#app").innerHTML = `
        <div class="auth fade ${state.authMode!=="welcome"?"hidden":""}">
          <div class="welcome-top">
            ${brandLogoMarkup()}
            <h1>Welcome back</h1>
            <p>Reconnect with your circles, your space, and your favorite communities.</p>
          </div>
          <div class="welcome-actions">
            <button class="hero-btn dark" id="goLogin">Reconnect</button>
            <button class="hero-btn light" id="goSignup">Create your space</button>
          </div>
        </div>

        <div class="auth fade ${state.authMode==="welcome"?"hidden":""}">
          <div class="auth-card">
            <div style="text-align:center">
              ${brandLogoMarkup("brand-logo")}
              <h1 style="font-size:22px;margin:0 0 8px">${signup ? "Create your space" : "Reconnect"}</h1>
              <p>${signup ? "New identity? We verify your email and build your profile instantly." : "Enter your email to reconnect. We will verify and let you in."}</p>
            </div>

            <div class="tabs">
              <button class="tab ${signup ? "" : "active"}" id="tabSignin">Reconnect</button>
              <button class="tab ${signup ? "active" : ""}" id="tabSignup">Create</button>
            </div>

            <input class="input" id="email" placeholder="Email" value="${esc(state.email)}">
            <input class="input ${signup ? "" : "hidden"}" id="displayName" placeholder="Display name" value="${esc(state.displayName)}">
            <input class="input" id="passwordFacade" type="password" placeholder="Password">

            <div class="row">
              <button class="btn primary" id="sendBtn">${signup ? "Create" : "Enter"}</button>
            </div>

            <div class="otp-box ${state.otpSent ? "show" : ""}">
              <input class="input" id="code" placeholder="6-digit verification code" inputmode="numeric" maxlength="6">
              <button class="btn primary" id="verifyBtn" style="width:100%">Verify & Enter</button>
            </div>

            <div class="status" id="status"></div>
            <div class="mini-note">${state.accountExists ? "Account found. Verify and enter right away." : "No account yet? Create your space after verification."}</div>
            <div style="text-align:center;margin-top:8px;font-size:13px;color:#cfd7ea">${signup ? `Already inside? <span id="goSigninInline" style="cursor:pointer;color:#fff;font-weight:900">Reconnect</span>` : `New identity? <span id="goSignupInline" style="cursor:pointer;color:#fff;font-weight:900">Create one</span>`}</div>
            <div class="row" style="margin-top:10px"><button class="btn secondary" id="backBtn" style="width:100%">Back</button></div>
          </div>
        </div>
      `;
      $("#goLogin").onclick=()=>{state.authMode="form"; state.accountMode="signin"; state.otpSent=false; renderAuth();};
      $("#goSignup").onclick=()=>{state.authMode="form"; state.accountMode="signup"; state.otpSent=false; renderAuth();};
      $("#tabSignin").onclick=()=>{state.accountMode="signin"; state.otpSent=false; renderAuth();};
      $("#tabSignup").onclick=()=>{state.accountMode="signup"; state.otpSent=false; renderAuth();};
      $("#goSigninInline") && ($("#goSigninInline").onclick=()=>{state.accountMode="signin"; state.otpSent=false; renderAuth();});
      $("#goSignupInline") && ($("#goSignupInline").onclick=()=>{state.accountMode="signup"; state.otpSent=false; renderAuth();});
      $("#backBtn").onclick=()=>{state.authMode="welcome"; state.otpSent=false; renderAuth();};
      $("#sendBtn").onclick=sendCode;
      $("#verifyBtn").onclick=verifyCode;
    }

    async function sendCode(){
      state.email = ($("#email").value || "").trim().toLowerCase();
      if(state.accountMode==="signup") state.displayName = ($("#displayName").value || "").trim();
      if(!state.email) return setStatus("Enter your email");
      await checkAccountExists(state.email);
      if(state.accountMode==="signup" && !state.displayName) return setStatus("Enter a display name");
      setStatus("Sending verification...");
      try{
        const r = await fetch(API + "/send-otp", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({email:state.email})});
        const d = await r.json().catch(()=>({}));
        if(!r.ok || !d.ok) return setStatus(d.error || "Failed to send code");
        state.otpSent = true; renderAuth();
        setStatus(state.accountExists ? "Verification sent. Reconnect to your account." : "Verification sent. Your space will be ready after verification.", true);
      }catch(e){ setStatus("Error: " + e.message); }
    }

    async function verifyCode(){
      const code = ($("#code").value || "").trim();
      if(!state.email) return setStatus("Enter your email");
      if(!/^\d{6}$/.test(code)) return setStatus("Enter the 6-digit code");
      setStatus("Signing into Firebase...");
      try{
        const r = await fetch(API + "/verify-otp", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({email:state.email, code})});
        const d = await r.json().catch(()=>({}));
        if(!r.ok || !d.token) return setStatus(d.error || "Invalid or expired code");
        await auth.signInWithCustomToken(d.token);
        setStatus("Entered successfully", true);
      }catch(err){
        console.error("Firebase signIn error:", err);
        setStatus("Firebase error: " + (err.code || err.message || "unknown"));
      }
    }

    function allPosts(){ const arr=[]; Object.entries(state.posts).forEach(([communityId,list])=>{ (list||[]).forEach(p=>arr.push({...p,communityId}));}); return arr; }
    function topPosts(){
      let list = allPosts();
      if(state.currentCommunity !== "all") list = list.filter(p => p.communityId === state.currentCommunity);
      const blocked = state.profile.blockedUsers || {};
      list = list.filter(p => !blocked[p.uid]);
      return list.sort((a,b)=>{
        const scoreA=(a.likes||0)*5 + ((a.createdAt||0)/100000000000);
        const scoreB=(b.likes||0)*5 + ((b.createdAt||0)/100000000000);
        return scoreB-scoreA;
      });
    }
    function friendCandidates(){
      const blocked = state.profile.blockedUsers || {};
      return Object.entries(state.profiles)
        .filter(([uid,p]) => uid !== (state.user && state.user.uid) && !blocked[uid])
        .map(([uid,p])=>({uid,...p})).slice(0,20);
    }
    function threadIdFor(a,b){ return [a,b].sort().join("__"); }
    function openChatWith(uid){
      if(!uid) return;
      state.selectedDmUid = uid;
      state.currentPage = "chat";
      markThreadRead(uid);
      renderMain();
    }

    /* 2) BACK */
    function goBackToBase(){
      state.currentPage = "base";
      renderMain();
    }

    /* 3) OPEN PROFILE */
    function openMemberProfile(uid){
      if(!uid) return;
      state.viewingProfileUid = uid;
      state.currentPage = "memberProfile";
      renderMain();
    }

    /* 4) CHAT PAGE (SAFE VERSION) */
    function renderChatPage(){
      const user = state.selectedDmUid ? (state.profiles[state.selectedDmUid] || {}) : null;
      const messages = selectedThreadMessages();

      return `
        <div class="page ${state.currentPage==="chat"?"active":""}" id="page-chat">
          <div class="topbar">
            <div class="top-left">
              <button class="icon-btn" id="chatBackBtn">${icon("arrow")}</button>
              <div class="member-left" id="chatOpenProfile" style="cursor:pointer" data-open-member="${state.selectedDmUid || ""}">
                <div class="post-avatar">
                  ${user?.avatar ? `<img src="${user.avatar}" alt="">` : esc(initials(user?.displayName || user?.email || "U"))}
                </div>
                <div>
                  <div class="top-title" style="font-size:18px">${esc(user?.displayName || user?.email || "Chat")}</div>
                  <div class="top-sub">${esc(user?.mood || "Direct messages")}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="page-body chat-page-body fade">
            <div class="chat-messages" id="chatMessages">
              ${user ? (
                messages.length ? messages.map(m=>`
                  <div class="chat-row ${m.from===state.user.uid ? "me" : "them"}">
                    <div class="chat-bubble ${m.from===state.user.uid ? "me" : "them"}">
                      <div class="chat-text">${esc(m.text || "")}</div>
                      <div class="chat-time" style="text-align:${m.from===state.user.uid ? "right" : "left"}">${esc(timeLabel(m.createdAt))}</div>
                    </div>
                  </div>
                `).join("") : `
                  <div class="card">
                    <div class="card-sub">Start the first message in this chat.</div>
                  </div>
                `
              ) : `
                <div class="card">
                  <div class="card-sub">No chat selected.</div>
                </div>
              `}
            </div>
          </div>

          ${user ? `
            <div class="chat-input-bar">
              <button class="emoji-btn" id="chatEmojiBtn" type="button">${icon("smile")}</button>
              <input class="chat-input" id="chatDmInput" placeholder="Write a direct message" autocomplete="off">
              <button class="send-icon-btn" id="chatSendDmBtn" type="button">${icon("send")}</button>
            </div>
          ` : ``}
        </div>
      `;
    }

    function unreadForUid(uid){
      const threadId = state.user ? threadIdFor(state.user.uid, uid) : "";
      return Number(state.unreadCounts[threadId] || 0);
    }
    function markThreadRead(uid){
      if(!state.user || !uid) return;
      const threadId = threadIdFor(state.user.uid, uid);
      const thread = state.threads[threadId] || {};
      const msgs = Object.values(thread.messages || {});
      const latest = msgs.filter(m => m && m.to === state.user.uid).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0)).pop();
      if(latest){
        state.lastReadThreads[threadId] = Number(latest.createdAt || 0);
        localStorage.setItem("echonode_last_reads", JSON.stringify(state.lastReadThreads));
      }
      state.unreadCounts[threadId] = 0;
    }
    function selectedThreadMessages(){
      if(!state.user || !state.selectedDmUid) return [];
      const id=threadIdFor(state.user.uid, state.selectedDmUid);
      const thread=state.threads[id] || {}, messages=thread.messages || {};
      return Object.entries(messages).map(([id,v])=>({id,...v})).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
    }

    function homeResults(){
      const q = state.searchHome.trim().toLowerCase();
      if(!q) return [];
      const communities = Object.entries(state.communities)
        .filter(([id,c]) => id !== "all" && (id.toLowerCase().includes(q) || String(c.name||"").toLowerCase().includes(q) || String(c.topic||"").toLowerCase().includes(q)))
        .map(([id,c])=>({type:"community", id, title:roomDisplayName(id, c), sub:c.topic || ""}));
      const blocked = state.profile.blockedUsers || {};
      const users = Object.entries(state.profiles)
        .filter(([uid,p]) => uid !== (state.user && state.user.uid) && !blocked[uid] && (
          String(p.displayName||"").toLowerCase().includes(q)
        ))
        .map(([uid,p])=>({type:"user", id:uid, title:p.displayName || "User", sub:p.mood || ""}));
      return [...communities, ...users].slice(0,8);
    }

    function baseResults(){
      const q = state.searchBase.trim().toLowerCase();
      const users = friendCandidates();
      if(!q) return users;
      return users.filter(u => String(u.displayName||"").toLowerCase().includes(q) || String(u.mood||"").toLowerCase().includes(q) || String(u.playingGame||"").toLowerCase().includes(q) || String(u.discordPlaying||"").toLowerCase().includes(q) || String(u.discordListening||"").toLowerCase().includes(q));
    }


    function getPurgeState(now = new Date()){
      const next = new Date(now);
      next.setHours(24, 0, 0, 0);
      const msLeft = next.getTime() - now.getTime();
      const totalSeconds = Math.max(0, Math.floor(msLeft / 1000));
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const seconds = String(totalSeconds % 60).padStart(2, "0");
      return {
        totalSeconds,
        warning: totalSeconds <= 10,
        label: `${hours}:${minutes}:${seconds}`
      };
    }

    function getRoomCards(){
      const q = state.searchHome.trim().toLowerCase();
      return ROOM_ORDER.map((key) => {
        const room = state.communities[key] || defaultCommunities[key];
        const posts = (state.posts[key] || []).slice();
        const todayStart = new Date();
        todayStart.setHours(0,0,0,0);
        const todayTs = todayStart.getTime();
        const uniqueUsers = new Set(posts.filter(p => Number(p.createdAt || 0) >= todayTs).map(p => p.uid).filter(Boolean));
        const latestAt = posts.reduce((max, p) => Math.max(max, Number(p.createdAt || 0)), 0);
        const displayName = roomDisplayName(key, room);
        const roomText = [displayName, room.topic, key].join(" ").toLowerCase();
        return {
          id:key,
          name:displayName,
          topic:room.topic,
          icon:roomGlyph(key, "room-glyph room-glyph-card"),
          locked:!!room.locked,
          support: ROOM_SUPPORT[key] || null,
          postCount: posts.length,
          activeCount: uniqueUsers.size,
          latestAt,
          matches: !q || roomText.includes(q)
        };
      })
      .filter(room => room.matches)
      .sort((a,b) => {
        if(a.locked !== b.locked) return a.locked ? 1 : -1;
        return b.activeCount - a.activeCount || b.postCount - a.postCount || b.latestAt - a.latestAt;
      });
    }

    function roomDisplayName(id, room){
      const source = typeof room === "string" ? room : String((room && room.name) || id || "");
      return id === "souls" ? "RPGs" : source;
    }

    function renderRoomCard(room){
      const supportText = room.support
        ? `${room.support.current}/${room.support.goal} support`
        : `${room.postCount} drops`;
      const badge = room.locked ? "Locked" : `${room.activeCount} active`;
      const warning = getPurgeState().warning ? `<span class="badge" style="background:rgba(255,90,90,.16);border-color:rgba(255,90,90,.2);color:#ffd7d7">New Cycle in ${esc(getPurgeState().label)}</span>` : "";
      const roomLabel = String(room.name || "").toUpperCase();
      return `
        <button class="discover-card room-card" data-open-room="${room.id}" type="button">
          <div class="card discover-card-shell room-card-shell">
            <div class="discover-card-cover room-card-cover room-theme-${room.id}">
              <div class="room-card-accent room-card-accent-${room.id}">
                <span>${esc(roomLabel)}</span>
              </div>
            </div>
            <div class="discover-card-body room-card-body">
              <div class="discover-card-title-row">
                <div class="card-title discover-card-title">${esc(roomDisplayName(room.id, room))}</div>
                <span class="chip">${esc(badge)}</span>
              </div>
              <div class="card-sub discover-card-subtitle">${esc(room.topic || "")}</div>
              <div class="row discover-card-stats">
                <span class="chip">${esc(supportText)}</span>
                ${warning}
              </div>
            </div>
          </div>
        </button>
      `;
    }

    function renderRoomFeed(){
      const communityId = state.currentCommunity === "all" ? "general" : state.currentCommunity;
      const room = state.communities[communityId] || defaultCommunities[communityId] || defaultCommunities.general;
      const roomName = roomDisplayName(communityId, room);
      const cycle = getPurgeState();
      const posts = (state.posts[communityId] || []).slice().sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
      const imagePreview = state.draftPostImage ? `
        <button class="room-media-preview" data-open-image-from-preview="true" type="button">
          <img src="${escapeAttr(state.draftPostImage)}" alt="Attached image preview">
          <span>Tap to preview</span>
        </button>
      ` : ``;
      const linkPreview = state.draftPostLink ? `<div class="room-link-preview">${icon("send")} <span>${esc(state.draftPostLink)}</span></div>` : ``;
      return `
        <div class="page-body room-feed-page">
          <div class="topbar">
            <div class="top-left">
              <button class="icon-btn" id="roomBackBtn" type="button">${icon("arrow")}</button>
              <div>
                <div class="top-title top-title-room">${roomGlyph(communityId, "room-glyph room-glyph-title")} ${esc(roomName)}</div>
                <div class="top-sub">${esc(room.topic || "")}</div>
              </div>
            </div>
          </div>

          <div class="room-cycle-row">
            <div class="chip">New Cycle at 12:00</div>
            <div class="chip ${cycle.warning ? "purge-warning-chip" : ""}">${cycle.warning ? "New Cycle in" : "Resets in"} ${esc(cycle.label)}</div>
            ${state.founder ? `<button class="tool-btn" id="purgeNowBtn">Run New Cycle</button>` : ``}
          </div>

          <div class="section-title">LIVE ROOM</div>
          <div class="room-feed-list">
            ${posts.length ? posts.map(renderPostCard).join("") : `
              <div class="card">
                <div class="card-title">Room is clean</div>
                <div class="card-sub">No drops yet. Start the first one in ${esc(roomName)}.</div>
              </div>
            `}
          </div>

          <div class="room-dock-wrap">
            ${imagePreview || linkPreview ? `<div class="room-compose-preview room-compose-preview-dock">${imagePreview}${linkPreview}</div>` : ``}
            ${state.showRoomMediaTools ? `
              <div class="room-tool-tray">
                <label class="room-tool-pill" aria-label="Attach image">${icon("image")}<span>Image</span><input type="file" id="postImageInput" accept="image/*" hidden></label>
                <button class="room-tool-pill ${state.showRoomLink ? "active" : ""}" id="toggleRoomLinkBtn" type="button" aria-label="Attach link">${icon("send")}<span>Link</span></button>
              </div>
            ` : ``}
            ${state.showRoomLink ? `
              <div class="room-link-input-row">
                <input class="input room-link-input room-link-input-dock" id="postLinkInput" placeholder="YouTube / Discord / web link" value="${esc(state.draftPostLink || "")}">
              </div>
            ` : ``}
            <div class="room-bottom-composer">
              <button class="room-plus-fab ${state.showRoomMediaTools ? "active" : ""}" id="toggleRoomMediaToolsBtn" type="button" aria-label="Open room actions">+</button>
              <input class="input room-bottom-input" id="roomComposer" placeholder="Share something for ${esc(roomName)}..." value="${escapeAttr(state.draftPostText || "")}">
              <button class="room-send-fab" id="sendRoomPostBtn" type="button" aria-label="Send drop">${icon("send")}</button>
            </div>
            <div class="room-dock-caption">New Drop</div>
          </div>
        </div>
      `;
    }

    function renderHomePage(){
      const rooms = getRoomCards();
      return `
        <div class="page ${state.currentPage==="home"?"active":""}" id="page-home">
          ${state.currentCommunity === "all" ? `
            <div class="topbar">
              <div>
                <div class="top-title">Rooms</div>
                <div class="top-sub">5 rooms total. Search stays inside Base for people.</div>
              </div>
            </div>

            <div class="page-body fade">
              <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:12px">
                <div class="chip">5 rooms</div>
                <div class="chip">Trending stays locked until support unlocks it</div>
                <div class="chip ${getPurgeState().warning ? "purge-warning-chip" : ""}">${getPurgeState().warning ? "New Cycle in" : "Resets in"} ${esc(getPurgeState().label)}</div>
              </div>

              <div class="section-title">LIVE ROOMS</div>
              <div class="discover-grid room-grid" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px">
                ${rooms.length ? rooms.map(renderRoomCard).join("") : `
                  <div class="card" style="grid-column:1 / -1">
                    <div class="card-title">No rooms found</div>
                    <div class="card-sub">Rooms are loading right now.</div>
                  </div>
                `}
              </div>
            </div>
          ` : renderRoomFeed()}
        </div>
      `;
    }

    async function createPost(){
      const box = getActiveComposer();
      if(!box || !state.user) return;
      const text = box.value.trim();
      state.draftPostText = box.value;
      const postLink = (document.querySelector("#postLinkInput")?.value || "").trim();
      const postImage = state.draftPostImage || "";
      if(!text && !postLink && !postImage) return;
      const targetCommunity = state.currentCommunity === "all" ? "general" : state.currentCommunity;
      const now = Date.now();
      if(now - state.lastPostAt < 1800){ toast("Slow down", "Wait a moment before posting again"); return; }
      state.lastPostAt = now;
      const payload = { communityId: targetCommunity, text: text.slice(0,700), image: postImage, link: postLink };
      try {
        const data = await apiJson('/app/post-room', { method:'POST', body: JSON.stringify(payload) });
        if(data.xp != null) state.profile.xp = Number(data.xp || state.profile.xp || 0);
        if(data.level != null) state.profile.level = Number(data.level || state.profile.level || 1);
      } catch(error) {
        await db.ref("posts/" + targetCommunity).push({
          uid: state.user.uid,
          email: state.email,
          name: state.profile.displayName || state.email.split("@")[0],
          avatar: state.profile.avatar || "",
          text: text.slice(0,700),
          image: postImage,
          link: postLink,
          likes: 0,
          likedBy: {},
          createdAt: now
        });
        toast("Posted", "Live fallback mode: XP server sync was skipped.");
      }
      box.value = "";
      if(document.querySelector("#postLinkInput")) document.querySelector("#postLinkInput").value = "";
      state.showRoomMediaTools = false;
      state.showRoomLink = false;
      resetDraftMedia();
      renderMain();
      toast("Posted", "Your update is live");
    }

    async function likePost(communityId, postId){
      if(!state.user) return;
      try {
        await apiJson('/app/toggle-like', { method:'POST', body: JSON.stringify({ communityId, postId }) });
      } catch(_error) {
        const ref=db.ref("posts/" + communityId + "/" + postId), snap=await ref.get(), data=snap.val();
        if(!data) return;
        const likedBy = data.likedBy || {}, already=!!likedBy[state.user.uid];
        if(already) delete likedBy[state.user.uid]; else likedBy[state.user.uid]=true;
        await ref.update({likedBy, likes:Object.keys(likedBy).length});
      }
    }

    async function sendDM(){
      if(!state.user || !state.selectedDmUid) return;
      const input = getActiveDMInput();
      if(!input) return;
      const text = input.value.trim();
      if(!text) return;
      const threadId=threadIdFor(state.user.uid, state.selectedDmUid);
      await db.ref("dms/" + threadId + "/messages").push({
        text:text.slice(0,500), from:state.user.uid, to:state.selectedDmUid,
        createdAt:Date.now(), name: state.profile.displayName || state.email.split("@")[0]
      });
      input.value="";
    }

    async function createCommunity(){
      if(!state.user || !state.founder) return;
      const rawName = ($("#newCommunityName").value || "").trim();
      const rawTag = ($("#newCommunityTag").value || "").trim().toLowerCase();
      const topic = ($("#newCommunityTopic").value || "").trim();
      if(!rawName || !rawTag) return toast("Missing info", "Name and tag are required");
      const tag = rawTag.replace(/[^a-z0-9_-]/g, "");
      if(!tag) return toast("Invalid tag", "Use letters and numbers only");
      const snap = await db.ref("communities/" + tag).get();
      if(snap.exists()) return toast("Already exists", "That community tag is already taken");
      await db.ref("communities/" + tag).set({
        name: rawName,
        topic: topic || ("Community for " + rawName),
        owner: state.user.uid,
        admins: { [state.user.uid]: true },
        createdAt: Date.now()
      });
      state.createCommunityOpen = false;
      await loadCommunities();
      state.currentCommunity = tag;
      state.currentPage = "home";
      renderMain();
      toast("Community created", "#" + tag + " is live");
    }

    async function saveSettings(){
      if(!state.user) return;
      const country = countryByCode($("#settingsCountry").value || "SA");
      state.profile.email = ($("#settingsEmail").value || "").trim().toLowerCase() || state.profile.email;
      state.profile.securityKey = ($("#settingsPassword").value || "").trim();
      state.profile.birthday = ($("#settingsBirthday").value || "").trim();
      state.profile.gender = ($("#settingsGender").value || "").trim();
      state.profile.countryCode = country.code;
      state.profile.countryFlag = country.flag;
      state.profile.countryName = country.name;
      await db.ref("profiles/" + state.user.uid).update({
        email: state.profile.email,
        emailKey: emailKey(state.profile.email),
        securityKey: state.profile.securityKey,
        birthday: state.profile.birthday,
        gender: state.profile.gender,
        countryCode: state.profile.countryCode,
        countryFlag: state.profile.countryFlag,
        countryName: state.profile.countryName,
        showBirthday: !!state.profile.showBirthday,
        showCountry: !!state.profile.showCountry,
        notificationsEnabled: !!state.profile.notificationsEnabled,
        paws: Number(state.profile.paws || 0),
        premiumBadge: !!state.profile.premiumBadge,
        profileGlow: !!state.profile.profileGlow
      });
      await db.ref("emails/" + emailKey(state.profile.email)).set(state.user.uid);
      state.settingsOpen = false;
      renderMain();
      toast("Saved", "Settings updated");
    }

    async function toggleProfileFlag(flag){
      state.profile[flag] = !state.profile[flag];
      if(state.user){
        await db.ref("profiles/" + state.user.uid + "/" + flag).set(!!state.profile[flag]);
      }
      renderMain();
    }

    async function blockSelectedUser(){
      if(!state.user || !state.selectedDmUid) return toast("No user", "Open a user in Base first");
      const blocked = { ...(state.profile.blockedUsers || {}) };
      blocked[state.selectedDmUid] = true;
      state.profile.blockedUsers = blocked;
      await db.ref("profiles/" + state.user.uid + "/blockedUsers").set(blocked);
      state.selectedDmUid = "";
      renderMain();
      toast("Blocked", "User added to your block list");
    }

    async function unblockUser(uid){
      const blocked = { ...(state.profile.blockedUsers || {}) };
      delete blocked[uid];
      state.profile.blockedUsers = blocked;
      await db.ref("profiles/" + state.user.uid + "/blockedUsers").set(blocked);
      renderMain();
    }

    async function reportMember(uid){
      if(!state.user || !uid) return;
      const payload = {
        reporterUid: state.user.uid,
        reporterName: state.profile.displayName || state.email.split("@")[0] || "User",
        targetUid: uid,
        targetName: (state.profiles[uid] || {}).displayName || (state.profiles[uid] || {}).email || uid,
        createdAt: Date.now()
      };
      await db.ref("reports").push(payload);
      toast("Report saved", "This member was flagged for review.");
    }

    async function buyStoreItem(type, price){
      if(!state.user) return;
      const paws = Number(state.profile.paws || 0);
      if(paws < price) return toast("Not enough paws", `You need ${price - paws} more 🐾.`);
      const updates = { paws: paws - price };
      if(type === "badge") updates.premiumBadge = true;
      if(type === "glow") updates.profileGlow = true;
      state.profile = { ...state.profile, ...updates };
      await db.ref("profiles/" + state.user.uid).update(updates);
      toast("Purchased", type === "badge" ? "Premium Badge unlocked." : "Profile Glow unlocked.");
      renderMain();
    }

    function renderSidebar(){
      return `
        <div class="sidebar-backdrop ${state.sidebarOpen ? "show" : ""}" id="sidebarBackdrop"></div>
        <aside class="sidebar ${state.sidebarOpen ? "open" : ""}" id="sidebar">
          <div class="sidebar-top">
            <div class="top-title">Rooms</div>
            <button class="icon-btn" id="closeSidebarBtn">${icon("close")}</button>
          </div>
          <div class="community-list">
            ${ROOM_ORDER.map((id)=>{
              const room = state.communities[id] || defaultCommunities[id];
              return `
                <div class="community-item" data-open-room="${id}">
                  <div class="community-row">
                    <div class="community-left">
                      <div class="hash">${roomGlyph(id, "room-glyph room-glyph-hash")}</div>
                      <div>
                        <div class="community-name">${esc(roomDisplayName(id, room))}</div>
                        <div class="community-topic">${esc(room.topic || "")}</div>
                      </div>
                    </div>
                    <div class="chip">${state.currentCommunity===id ? "Live" : room.locked ? "Locked" : "Go"}</div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </aside>
      `;
    }

    function renderPostCard(p){
      const liked = !!((p.likedBy || {})[state.user.uid]);
      const c = state.communities[p.communityId] || { name:p.communityId || "community" };
      const communityName = roomDisplayName(p.communityId, c);
      const hasImage = !!p.image;
      const linkHost = (() => {
        try { return p.link ? new URL(p.link).hostname.replace(/^www\./, "") : ""; } catch(_err){ return ""; }
      })();
      const avatarInner = p.avatar ? `<img src="${escapeAttr(p.avatar)}" alt="">` : esc(initials(p.name || "U"));
      const linkBlock = p.link ? `
        <a class="room-link-card" href="${escapeAttr(p.link)}" target="_blank" rel="noopener noreferrer">
          <div class="room-link-card-title">External video / link</div>
          <div class="room-link-card-sub">${esc(linkHost || p.link)}</div>
        </a>
      ` : ``;
      const mediaThumb = hasImage ? `
        <button class="room-post-thumb js-open-post-image" type="button" aria-label="Open post image">
          <img src="${escapeAttr(p.image)}" alt="Post image">
        </button>
      ` : ``;
      return `
        <article class="post-item room-post-card">
          <div class="room-post-shell">
            <button class="post-avatar room-post-avatar" data-open-member="${escapeAttr(p.uid || "")}" type="button">${avatarInner}</button>
            <div class="room-post-main">
              <div class="room-post-headline">
                <button class="room-post-name" data-open-member="${escapeAttr(p.uid || "")}" type="button">${esc(p.name || "User")}</button>
                <div class="post-meta">${esc(communityName)} • ${esc(dateLabel(p.createdAt))} • ${esc(timeLabel(p.createdAt))}</div>
              </div>
              ${p.text ? `<div class="post-text room-post-text">${esc(p.text || "")}</div>` : ``}
              ${linkBlock}
              <div class="post-actions room-post-actions">
                <button class="pill-action ${liked ? "active" : ""}" data-like-community="${escapeAttr(p.communityId)}" data-like-post="${escapeAttr(p.id)}" type="button">♡ ${p.likes || 0}</button>
                <div class="chip">${(p.likes || 0) > 0 ? "Hot" : "Fresh"}</div>
              </div>
            </div>
            ${mediaThumb}
          </div>
        </article>
      `;
    }

    function renderBasePage(){
    const users = baseResults();
    const blockedIds = Object.keys(state.profile.blockedUsers || {});
    const selected = state.selectedDmUid ? (state.profiles[state.selectedDmUid] || {}) : null;

    function latestPreview(uid) {
      if (!state.user || !uid) return { text: "Tap to open chat", time: "" };
      const id = threadIdFor(state.user.uid, uid);
      const thread = state.threads[id] || {};
      const messages = Object.values(thread.messages || {}).sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
      const last = messages[messages.length - 1];
      if (!last) {
        return { text: (state.profiles[uid] || {}).mood || "Tap to open chat", time: "" };
      }
      return {
        text: last.text || "Sent a message",
        time: timeLabel(last.createdAt)
      };
    }

    const renderBlockedList = () => blockedIds.length ? blockedIds.map(uid => {
      const p = state.profiles[uid] || {};
      return `
        <div class="echonode-base-thread echonode-base-thread-static">
          <div class="echonode-base-thread-left">
            <div class="echonode-base-thread-avatar-wrap">
              <div class="echonode-base-thread-avatar">
                ${p.avatar ? `<img src="${escapeAttr(p.avatar)}" alt="">` : esc(initials(p.displayName || p.email || "U"))}
              </div>
            </div>
            <div class="echonode-base-thread-meta">
              <div class="echonode-base-thread-name-row">
                <div class="echonode-base-thread-name">${esc(p.displayName || p.email || uid)}</div>
              </div>
              <div class="echonode-base-thread-sub">Blocked inside Base</div>
            </div>
          </div>
          <div class="echonode-base-thread-right">
            <button class="tool-btn" data-unblock="${uid}" type="button">Unblock</button>
          </div>
        </div>
      `;
    }).join("") : `<div class="echonode-base-empty">No blocked users right now.</div>`;

    const renderPlaceholder = (title, body) => `
      <div class="echonode-base-empty">
        <div style="font-weight:900;color:#eef2ff;margin-bottom:6px">${title}</div>
        <div>${body}</div>
      </div>
    `;

    const heroCopy = state.baseTab === "chats"
      ? "Your private layer for chats, requests, and blocked users."
      : state.baseTab === "requests"
        ? "Incoming message requests will live here once this flow is connected."
        : state.baseTab === "friends"
          ? "Friend requests stay inside Base instead of hiding inside Rooms."
          : "People you block from Base appear here for quick control.";

    return `
      <div class="page ${state.currentPage==="base"?"active":""}" id="page-base">
        <div class="page-body fade">
          <div class="echonode-base-shell">
            <section class="card echonode-base-hero">
              <div class="echonode-base-topbar">
                <div>
                  <div class="echonode-base-title">Base</div>
                  <div class="echonode-base-hero-sub">${heroCopy}</div>
                </div>
                <div class="echonode-base-tabbar">
                  <button class="base-tab ${state.baseTab==="chats" ? "active" : ""}" data-base-tab="chats" type="button">Chats</button>
                  <button class="base-tab ${state.baseTab==="requests" ? "active" : ""}" data-base-tab="requests" type="button">Message Requests</button>
                  <button class="base-tab ${state.baseTab==="friends" ? "active" : ""}" data-base-tab="friends" type="button">Friend Requests</button>
                  <button class="base-tab ${state.baseTab==="blocked" ? "active" : ""}" data-base-tab="blocked" type="button">Blocked</button>
                </div>
              </div>

              ${state.baseTab === "chats" ? `
                <div class="echonode-base-search echonode-base-search-hero">
                  ${icon("search")}
                  <input id="userSearch" placeholder="Search in Base..." value="${esc(state.searchBase || "")}">
                </div>

                <div class="echonode-base-stories-wrap">
                  <div class="echonode-base-stories-head">
                    <div class="echonode-base-section-title">Active right now</div>
                    <div class="echonode-base-section-side">${users.length} visible</div>
                  </div>
                  <div class="echonode-base-stories">
                    ${users.length ? users.map(u => `
                      <div class="echonode-base-story" data-open-chat="${u.uid}">
                        <div class="echonode-base-story-ring">
                          <div class="echonode-base-story-avatar" data-open-member="${u.uid}">
                            ${u.avatar ? `<img src="${u.avatar}" alt="">` : esc(initials(u.displayName || u.email || "U"))}
                          </div>
                        </div>
                        <div class="echonode-base-story-name">${esc((u.displayName || "User").slice(0, 12))}</div>
                      </div>
                    `).join("") : `
                      <div class="echonode-base-empty">No users yet.</div>
                    `}
                  </div>
                </div>
              ` : `
                <div class="echonode-base-hero-note">${heroCopy}</div>
              `}
            </section>

            <section class="card echonode-base-panel">
              <div class="echonode-base-section-head">
                <div class="echonode-base-section-title">${
                  state.baseTab === "requests" ? "Message Requests" :
                  state.baseTab === "friends" ? "Friend Requests" :
                  state.baseTab === "blocked" ? "Blocked" :
                  "Chats"
                }</div>
                <div class="echonode-base-section-side">${
                  state.baseTab === "chats" ? (selected ? esc(selected.displayName || selected.email || "Chat") : `${users.length} chats`) :
                  state.baseTab === "blocked" ? `${blockedIds.length} blocked` :
                  "Empty for now"
                }</div>
              </div>

              <div class="echonode-base-list">
                ${state.baseTab === "chats" ? (
                  users.length ? users.map(u => {
                    const preview = latestPreview(u.uid);
                    const unread = unreadForUid(u.uid);
                    const presence = presenceClass((state.statusMap[u.uid] || {}).state || u.presence || "offline");
                    return `
                      <div class="echonode-base-thread" data-open-chat="${u.uid}">
                        <div class="echonode-base-thread-left">
                          <div class="echonode-base-thread-avatar-wrap">
                            <div class="echonode-base-thread-avatar" data-open-member="${u.uid}">
                              ${u.avatar ? `<img src="${u.avatar}" alt="">` : esc(initials(u.displayName || u.email || "U"))}
                            </div>
                            <span class="echonode-base-status-dot dot ${presence}"></span>
                          </div>

                          <div class="echonode-base-thread-meta">
                            <div class="echonode-base-thread-name-row">
                              <div class="echonode-base-thread-name">${esc(u.displayName || u.email || "User")}</div>
                              ${preview.time ? `<div class="echonode-base-thread-time">${esc(preview.time)}</div>` : ``}
                            </div>
                            <div class="echonode-base-thread-sub">${esc(preview.text)}</div>
                          </div>
                        </div>

                        <div class="echonode-base-thread-right">
                          ${unread ? `<span class="echonode-base-unread">${unread}</span>` : `<span class="echonode-base-thread-chevron">${icon("arrow")}</span>`}
                        </div>
                      </div>
                    `;
                  }).join("") : `<div class="echonode-base-empty">No messages yet. Once users appear, your Base starts filling up.</div>`
                ) : state.baseTab === "requests" ? renderPlaceholder("No message requests", "Incoming message requests will appear here once this flow is connected.") :
                    state.baseTab === "friends" ? renderPlaceholder("No friend requests", "Future friend requests will live here instead of inside Rooms.") :
                    renderBlockedList()
                }
              </div>
            </section>
          </div>
        </div>
      </div>
    `;
    }
    function renderProfilePage(){
      const p=state.profile, avatarInner=p.avatar ? `<img src="${p.avatar}" alt="">` : esc(initials(p.displayName || state.email));
      let musicCard=`<div class="card-title">Music</div><div class="card-sub">Add Spotify, MP3, or a direct link from Edit Profile.</div>`;
      const sp=spotifyEmbed(p.musicUrl);
      if(p.musicUrl && sp) musicCard=`<div class="card-title">Music</div><iframe class="music-embed" src="${sp}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      else if(p.musicUrl && isDirectAudio(p.musicUrl)) musicCard=`<div class="card-title">Music</div><audio controls preload="none" src="${p.musicUrl}" style="width:100%;margin-top:8px"></audio>`;
      else if(p.musicUrl) musicCard=`<div class="card-title">Music</div><div class="card-sub"><a href="${p.musicUrl}" target="_blank" style="color:#a78bfa;word-break:break-all">${esc(p.musicUrl)}</a></div>`;
      const pct=progressPercent(p.xp||0,p.level||1);
      const birthdayValue = formatBirthdayShort(p.birthday);
      const birthdayLine = birthdayValue && p.showBirthday ? `<span class="badge">🎂 ${esc(birthdayValue)}</span>` : ``;
      const countryLine = p.showCountry ? `<span class="badge">${esc(p.countryFlag || "")} ${esc(p.countryCode || "")}</span>` : ``;
      const playingLine = p.discordPlaying || p.playingGame ? `<div class="presence-item">${icon("game")} <span>Playing now: ${esc(p.discordPlaying || p.playingGame)}</span></div>` : ``;
      const listeningLine = p.discordListening ? `<div class="presence-item">🎵 <span>Listening to: ${esc(p.discordListening)}</span></div>` : ``;

      return `
        <div class="page ${state.currentPage==="profile"?"active":""}" id="page-profile">
          <div class="topbar">
            <div>
              <div class="top-title">Profile</div>
              <div class="top-sub">Your EchoNode identity</div>
            </div>
          </div>

          <div class="page-body fade">
            <div class="profile-hero">
              <div class="cover" style="${p.cover ? `background-image:url('${p.cover}')` : ''}"></div>
              <div class="profile-body">
                <div class="avatar-big">${avatarInner}</div>
                <div class="name-line">
                  <div class="name">${esc(p.displayName || state.email.split("@")[0])}</div>
                  <span class="badge">${esc(p.presence || "online")}</span>
                  ${countryLine}
                  <span class="badge">Lv ${esc(p.level || 1)}</span>
                  ${state.founder ? `<span class="badge">Founder</span>` : ``}
                  ${birthdayLine}
                  <button class="tiny-edit" id="openProfileSettingsBtn2">${icon("edit")}</button>
                </div>
                ${(playingLine || listeningLine) ? `<div class="presence-stack">${playingLine}${listeningLine}</div>` : ``}
                <div class="meta">${esc(p.mood || "")}</div>
                <div class="xp-mini profile-xp-strip">
                  <div class="progress"><div class="progress-bar" style="width:${pct}%"></div></div>
                </div>
                <div class="profile-quick-actions">
                  <button class="btn secondary slim" id="openProfileSettingsPanel" type="button">${icon("settings")} <span>Settings</span></button>
                </div>

                <div class="card" style="margin-top:16px">
                  <div class="card-title">My Space</div>
                  <div class="card-sub">${esc(p.mySpace || "")}</div>
                </div>

                <div class="card" style="margin-top:12px">${musicCard}</div>

                <div class="section-title">SHOWCASE</div>
                <div class="showcase-grid">
                  <div class="showcase-item">${p.showcase1 ? `<img src="${p.showcase1}" alt="">` : "Slot 1"}</div>
                  <div class="showcase-item">${p.showcase2 ? `<img src="${p.showcase2}" alt="">` : "Slot 2"}</div>
                  <div class="showcase-item">${p.showcase3 ? `<img src="${p.showcase3}" alt="">` : "Slot 3"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderMemberProfilePage(){
      const uid = state.viewingProfileUid;
      const p = uid ? (state.profiles[uid] || {}) : null;
      if(!p) return '';
      const avatarInner = p.avatar ? `<img src="${p.avatar}" alt="">` : esc(initials(p.displayName || p.email || "U"));
      let musicCard=`<div class="card-title">Music</div><div class="card-sub">No shared music yet.</div>`;
      const sp=spotifyEmbed(p.musicUrl);
      if(p.musicUrl && sp) musicCard=`<div class="card-title">Music</div><iframe class="music-embed" src="${sp}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      else if(p.musicUrl && isDirectAudio(p.musicUrl)) musicCard=`<div class="card-title">Music</div><audio controls preload="none" src="${p.musicUrl}" style="width:100%;margin-top:8px"></audio>`;
      else if(p.musicUrl) musicCard=`<div class="card-title">Music</div><div class="card-sub"><a href="${p.musicUrl}" target="_blank" style="color:#a78bfa;word-break:break-all">${esc(p.musicUrl)}</a></div>`;
      const birthdayValue = formatBirthdayShort(p.birthday);
      const birthdayLine = birthdayValue && p.showBirthday ? `<span class="badge">🎂 ${esc(birthdayValue)}</span>` : ``;
      const countryLine = p.showCountry ? `<span class="badge">${esc(p.countryFlag || "")} ${esc(p.countryCode || "")}</span>` : ``;
      const playingLine = p.discordPlaying || p.playingGame ? `<div class="presence-item">${icon("game")} <span>Playing now: ${esc(p.discordPlaying || p.playingGame)}</span></div>` : ``;
      const listeningLine = p.discordListening ? `<div class="presence-item">🎵 <span>Listening to: ${esc(p.discordListening)}</span></div>` : ``;
      const spaceTitle = p.gender === "female" ? "Her Space" : (p.gender === "male" ? "His Space" : "Their Space");
      return `
        <div class="page ${state.currentPage==="memberProfile"?"active":""}" id="page-member-profile">
          <div class="topbar">
            <div class="top-left">
              <button class="icon-btn" id="backToBaseBtn">${icon("arrow")}</button>
              <div>
                <div class="top-title">${esc(p.displayName || "Profile")}</div>
                <div class="top-sub">Member profile</div>
              </div>
            </div>
            <div class="top-right">
              <button class="icon-btn" id="memberMenuBtn">${icon("more")}</button>
            </div>
          </div>
          ${state.memberMenuOpen ? `
            <div class="member-menu">
              <button id="memberMenuMessage">${icon("send")} Send Message</button>
              <button id="memberMenuReport">${icon("flag")} Report user</button>
              <button id="memberMenuBlock">${icon("block")} Block user</button>
            </div>
          ` : ``}
          <div class="page-body fade">
            <div class="profile-hero">
              <div class="cover" style="${p.cover ? `background-image:url('${p.cover}')` : ''}"></div>
              <div class="profile-body">
                <div class="avatar-big">${avatarInner}</div>
                <div class="name-line">
                  <div class="name">${esc(p.displayName || "User")}</div>
                  <span class="badge">${esc(p.presence || "online")}</span>
                  ${countryLine}
                  ${birthdayLine}
                </div>
                ${(playingLine || listeningLine) ? `<div class="presence-stack">${playingLine}${listeningLine}</div>` : ``}
                <div class="meta">${esc(p.mood || "")}</div>
                <div class="card" style="margin-top:16px">
                  <div class="card-title">${spaceTitle}</div>
                  <div class="card-sub">${esc(p.mySpace || "")}</div>
                </div>
                <div class="card" style="margin-top:12px">${musicCard}</div>
                <div class="section-title">SHOWCASE</div>
                <div class="showcase-grid">
                  <div class="showcase-item">${p.showcase1 ? `<img src="${p.showcase1}" alt="">` : "Slot 1"}</div>
                  <div class="showcase-item">${p.showcase2 ? `<img src="${p.showcase2}" alt="">` : "Slot 2"}</div>
                  <div class="showcase-item">${p.showcase3 ? `<img src="${p.showcase3}" alt="">` : "Slot 3"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderSettingsDrawer(){
      const blocked = Object.keys(state.profile.blockedUsers || {});
      return `
        <div class="drawer ${state.settingsOpen ? "open" : ""}" id="settingsDrawer">
          <div class="sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Settings</div>
              <button class="tool-btn" id="closeSettingsBtn">Close</button>
            </div>

            <div class="settings-bubble-field">
              <div class="settings-bubble-label">Email</div>
              <input class="settings-bubble-input" id="settingsEmail" type="email" placeholder="Email" value="${esc(state.profile.email || state.email)}">
            </div>
            <div class="settings-bubble-field">
              <div class="settings-bubble-label">Password</div>
              <input class="settings-bubble-input" id="settingsPassword" type="password" placeholder="Password" value="${esc(state.profile.securityKey || "")}">
            </div>
            <input class="input" id="settingsBirthday" type="date" value="${esc(state.profile.birthday || "")}">
            <select class="select input" id="settingsGender">
              <option value="" ${!state.profile.gender ? "selected" : ""}>Gender not set</option>
              <option value="male" ${state.profile.gender==="male" ? "selected" : ""}>Male</option>
              <option value="female" ${state.profile.gender==="female" ? "selected" : ""}>Female</option>
            </select>
            <select class="select input" id="settingsCountry">
              ${countryOptions.map(c=>`<option value="${c.code}" ${state.profile.countryCode===c.code?"selected":""}>${c.flag} ${c.name}</option>`).join("")}
            </select>

            <div class="section-title">PRIVACY</div>
            <div class="setting-list">
              <div class="setting-item"><div class="setting-row"><div class="setting-left"><div><div class="setting-name">Show birthday</div><div class="setting-sub">Display day and month only on profile</div></div></div><button class="switch ${state.profile.showBirthday ? "on" : ""}" id="toggleBirthday"></button></div></div>
              <div class="setting-item"><div class="setting-row"><div class="setting-left"><div><div class="setting-name">Show country flag</div><div class="setting-sub">Display your flag near status</div></div></div><button class="switch ${state.profile.showCountry ? "on" : ""}" id="toggleCountry"></button></div></div>
              <div class="setting-item"><div class="setting-row"><div class="setting-left"><div><div class="setting-name">Notifications</div><div class="setting-sub">Enable or mute app notices</div></div></div><button class="switch ${state.profile.notificationsEnabled ? "on" : ""}" id="toggleNotifications"></button></div></div>
            </div>

            <div class="section-title">LEGAL</div>
            <div class="setting-list">
              <button class="setting-item setting-action" id="openLegalBtn" type="button">
                <div><div class="setting-name">Community Rules</div><div class="setting-sub">Rules, terms, privacy, and report flow.</div></div>
                <span class="chip">Open</span>
              </button>
            </div>

            <div class="section-title">DISCORD</div>
            <div class="setting-list">
              <div class="setting-item">
                <div class="setting-row">
                  <div class="setting-left"><div><div class="setting-name">Discord spot</div><div class="setting-sub">Reserved for the bot sync phase. Manual Playing / Listening already works.</div></div></div>
                  <span class="chip">Soon</span>
                </div>
              </div>
            </div>

            ${state.founder ? `
              <div class="section-title">ADMIN</div>
              <div class="setting-list">
                <button class="setting-item setting-action" id="openAdminBtn" type="button">
                  <div><div class="setting-name">Founder tools</div><div class="setting-sub">Run New Cycle, moderate, and review reports.</div></div>
                  <span class="chip">Admin</span>
                </button>
              </div>
            ` : ``}

            <div class="section-title">ACCOUNT</div>
            <div class="setting-list">
              <button class="setting-item setting-action danger" id="deleteAccountBtn" type="button">
                <div><div class="setting-name">Delete account</div><div class="setting-sub">Removes your profile, user data, and authentication record.</div></div>
                <span class="chip">Delete</span>
              </button>
            </div>

            <div class="row" style="margin-top:12px">
              <button class="btn primary" id="saveSettingsBtn">Save Settings</button>
              <button class="btn secondary" id="logoutBtn">Sign out</button>
            </div>
          </div>
        </div>
      `;
    }

    function renderAIDrawer(){
      return `
        <div class="drawer ${state.aiOpen ? "open" : ""}" id="aiDrawer">
          <div class="sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Echo AI</div>
              <button class="tool-btn" id="closeAiBtn">Close</button>
            </div>
            <div class="card"><div class="card-title">Quick help</div><div class="card-sub">I can guide users around Home, Base, Profile, and communities.</div></div>
            <div class="grid" style="margin-top:10px">
              <button class="tool-btn" data-ai="profile">Profile tips</button>
              <button class="tool-btn" data-ai="base">Base help</button>
              <button class="tool-btn" data-ai="home">Home feed</button>
              <button class="tool-btn" data-ai="founder">Founder mode</button>
            </div>
            <div class="card" style="margin-top:12px" id="aiAnswerCard">
              <div class="card-title">Response</div>
              <div class="card-sub">Ask the cat and it points you in the right direction.</div>
            </div>
          </div>
        </div>
      `;
    }

    function renderStoreDrawer(){
      return `
        <div class="drawer ${state.storeOpen ? "open" : ""}" id="storeDrawer">
          <div class="sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Store</div>
              <button class="tool-btn" id="closeStoreBtn">Close</button>
            </div>
            <div class="card">
              <div class="card-title">Your balance</div>
              <div class="card-sub">🐾 ${esc(state.profile.paws || 0)} available for upgrades.</div>
            </div>
            <div class="grid" style="margin-top:12px">
              <div class="card">
                <div class="card-title">Premium Badge</div>
                <div class="card-sub">Show a premium badge on your profile.</div>
                <div class="row" style="margin-top:10px">
                  <button class="btn primary" id="buyBadgeBtn" ${state.profile.premiumBadge ? 'disabled style="opacity:.6"' : ''}>${state.profile.premiumBadge ? 'Owned' : 'Buy • 20 🐾'}</button>
                </div>
              </div>
              <div class="card">
                <div class="card-title">Profile Glow</div>
                <div class="card-sub">Unlock a glow status on your profile.</div>
                <div class="row" style="margin-top:10px">
                  <button class="btn primary" id="buyGlowBtn" ${state.profile.profileGlow ? 'disabled style="opacity:.6"' : ''}>${state.profile.profileGlow ? 'Owned' : 'Buy • 30 🐾'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }


    function renderCreatePostDrawer(){
      return `
        <div class="drawer ${state.composeOpen ? "open" : ""}" id="createPostDrawer">
          <div class="sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Create Post</div>
              <button class="tool-btn" id="closeCreatePostBtn">Close</button>
            </div>

            <textarea class="textarea" id="createPostComposer" placeholder="${state.currentCommunity==="all" ? "Share something in general or switch to a community" : `Share something with ${esc((state.communities[state.currentCommunity] || {}).name || "this community")}`}"></textarea>

            <div class="row" style="margin-top:10px">
              <label class="file-btn">Add image<input type="file" id="postImageInput" accept="image/*"></label>
              <input class="input" id="postLinkInput" placeholder="Paste a link (YouTube or any URL)" value="${esc(state.draftPostLink || "")}" style="margin:0;flex:1;min-width:180px">
            </div>

            ${(state.draftPostImage || state.draftPostLink) ? `
              <div class="card" style="margin-top:10px">
                <div class="card-title">Post preview</div>
                ${state.draftPostImage ? `<img src="${state.draftPostImage}" alt="" style="width:100%;border-radius:16px;display:block;margin-top:8px">` : ``}
                ${state.draftPostLink ? `<div class="card-sub" style="margin-top:8px;word-break:break-all">${esc(state.draftPostLink)}</div>` : ``}
              </div>
            ` : ``}

            <div class="row" style="margin-top:12px">
              <button class="btn primary" id="sendPostBtn">Post</button>
            </div>
          </div>
        </div>
      `;
    }

    function renderCreateCommunityDrawer(){
      return `
        <div class="drawer ${state.createCommunityOpen ? "open" : ""}" id="createCommunityDrawer">
          <div class="sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Create Community</div>
              <button class="tool-btn" id="closeCreateCommunityBtn">Close</button>
            </div>
            <input class="input" id="newCommunityName" placeholder="Community name e.g. RPG guild">
            <input class="input" id="newCommunityTag" placeholder="Tag e.g. rpg-party">
            <textarea class="textarea" id="newCommunityTopic" placeholder="What is this community about?"></textarea>
            <div class="row">
              <button class="btn primary" id="createCommunityBtn">Create</button>
            </div>
          </div>
        </div>
      `;
    }

    function renderLegalDrawer(){
      return `
        <div class="drawer ${state.legalOpen ? "open" : ""}" id="legalDrawer">
          <div class="sheet legal-sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Community Rules</div>
              <button class="tool-btn" id="closeLegalBtn">Close</button>
            </div>
            <div class="legal-copy">
              <div class="card"><div class="card-title">Rules</div><div class="card-sub">No spam, harassment, threats, scams, explicit abuse, or doxxing. Respect room topics and keep uploads safe for everyone.</div></div>
              <div class="card"><div class="card-title">Terms</div><div class="card-sub">You are responsible for your own posts. EchoNode may remove content, restrict accounts, or update features before the final public launch.</div></div>
              <div class="card"><div class="card-title">Privacy</div><div class="card-sub">We only keep the account and content needed to run the app. Founder moderation actions and major resets can be logged for safety and abuse review.</div></div>
            </div>
          </div>
        </div>
      `;
    }

    function renderAdminDrawer(){
      if(!state.founder) return ``;
      const roomId = state.currentCommunity === "all" ? "general" : state.currentCommunity;
      const room = state.communities[roomId] || defaultCommunities[roomId] || defaultCommunities.general;
      const canCycle = roomId && roomId !== "all" && roomId !== "trending";
      return `
        <div class="drawer ${state.adminOpen ? "open" : ""}" id="adminDrawer">
          <div class="sheet legal-sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Founder tools</div>
              <button class="tool-btn" id="closeAdminBtn">Close</button>
            </div>
            <div class="setting-list admin-panel-list">
              <div class="setting-item"><div class="setting-row"><div class="setting-left"><div><div class="setting-name">Current room</div><div class="setting-sub">${esc(roomDisplayName(roomId, room))} • ${esc(room.topic || "")}</div></div></div><span class="chip">Live</span></div></div>
              <button class="setting-item setting-action ${canCycle ? "" : "disabled"}" id="adminNewCycleBtn" type="button" ${canCycle ? "" : "disabled"}>
                <div><div class="setting-name">Run New Cycle</div><div class="setting-sub">Delete all posts in the active room from Firebase.</div></div>
                <span class="chip">Now</span>
              </button>
              <div class="setting-item"><div class="setting-row"><div class="setting-left"><div><div class="setting-name">Reports</div><div class="setting-sub">Open the backend summary after deployment to review moderation signals.</div></div></div><span class="chip">/app/admin/summary</span></div></div>
            </div>
          </div>
        </div>
      `;
    }

    function renderImageViewer(){
      if(!state.imageViewer) return ``;
      return `
        <div class="image-viewer open" id="imageViewer">
          <button class="image-viewer-close" id="closeImageViewer" type="button">${icon("close")}</button>
          <img src="${escapeAttr(state.imageViewer)}" alt="Expanded image">
        </div>
      `;
    }
function filterUsers(searchText){
  const q = String(searchText || "").trim().toLowerCase();
  const items = document.querySelectorAll(".echonode-base-thread, .echonode-base-story");
  items.forEach((item) => {
    const text = (item.textContent || "").toLowerCase();
    item.style.display = (!q || text.includes(q)) ? "" : "none";
  });
}
function filterDiscoverCards(searchText){
  const q = String(searchText || "").trim().toLowerCase();
  const cards = document.querySelectorAll(".room-card");
  cards.forEach((card) => {
    const text = (card.textContent || "").toLowerCase();
    card.style.display = (!q || text.includes(q)) ? "block" : "none";
  });
}
function leaveRoom(withAnimation = false){
  const finish = () => {
    state.currentCommunity = "all";
    state.showRoomLink = false;
    state.showRoomMediaTools = false;
    renderMain();
  };
  if(withAnimation){
    const page = document.querySelector(".room-feed-page");
    if(page){
      page.classList.add("room-swipe-exit");
      setTimeout(finish, 140);
      return;
    }
  }
  finish();
}

async function purgeCurrentRoom(){
  const roomId = state.currentCommunity;
  if(!roomId || roomId === "all" || roomId === "trending") return;
  try {
    await apiJson('/app/admin/new-cycle', { method:'POST', body: JSON.stringify({ communityId: roomId }) });
  } catch(_error) {
    await db.ref("posts/" + roomId).remove();
  }
  toast("New Cycle", `${(state.communities[roomId] || {}).name || roomId} is now clean.`);
  renderMain();
}

    function renderMain(){
      state.composeOpen = false;
      $("#app").innerHTML = `
        ${renderSidebar()}
        ${renderHomePage()}
        ${renderBasePage()}
        ${renderChatPage()}
        ${renderProfilePage()}
        ${renderMemberProfilePage()}
        ${renderSettingsDrawer()}
        ${renderAIDrawer()}
        ${renderStoreDrawer()}
        ${renderCreateCommunityDrawer()}
        ${renderLegalDrawer()}
        ${renderAdminDrawer()}
        ${renderImageViewer()}

        <div class="bottom-nav" style="display:${(state.currentPage === "chat" || (state.currentPage === "home" && state.currentCommunity !== "all")) ? "none" : "block"}">
          <div class="nav-row">
            <button class="nav-btn ${state.currentPage==="home"?"active":""}" data-page="home" type="button">
              ${icon("home")}<span>Rooms</span>
            </button>
            <button class="nav-btn ${state.currentPage==="base"?"active":""}" data-page="base" type="button">
              ${icon("base")}<span>Base</span>
            </button>
            <button class="nav-btn ${state.currentPage==="profile"?"active":""}" data-page="profile" type="button">
              ${icon("profile")}<span>Profile</span>
            </button>
          </div>
        </div>

        <div class="modal" id="editorModal">
          <div class="sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
              <div class="sheet-title">Edit Profile</div>
              <button class="tool-btn" id="closeEditorBtn">Close</button>
            </div>

            <input class="input" id="profileName" placeholder="Display name" value="${esc(state.profile.displayName||"")}">
            <input class="input" id="profileMood" placeholder="Mood / status text" value="${esc(state.profile.mood||"")}">
            <select class="select input" id="profilePresence">
              <option value="online" ${state.profile.presence==="online"?"selected":""}>online</option>
              <option value="afk" ${state.profile.presence==="afk"?"selected":""}>afk</option>
              <option value="busy" ${state.profile.presence==="busy"?"selected":""}>busy</option>
              <option value="offline" ${state.profile.presence==="offline"?"selected":""}>offline</option>
            </select>
            <input class="input" id="profilePlaying" placeholder="Playing now" value="${esc(state.profile.discordPlaying || state.profile.playingGame || "")}">
            <input class="input" id="profileListening" placeholder="Listening to" value="${esc(state.profile.discordListening || "")}">
            <input class="input" id="profileMusic" placeholder="Spotify / MP3 / music link" value="${esc(state.profile.musicUrl||"")}">
            <textarea class="textarea" id="profileMySpace" placeholder="My Space text">${esc(state.profile.mySpace||"")}</textarea>

            <div class="file-row">
              <label class="file-btn">Profile Picture<input type="file" id="avatarFile" accept="image/*"></label>
              <label class="file-btn">Cover<input type="file" id="coverFile" accept="image/*"></label>
              <label class="file-btn">Showcase 1<input type="file" id="showcase1File" accept="image/*"></label>
              <label class="file-btn">Showcase 2<input type="file" id="showcase2File" accept="image/*"></label>
              <label class="file-btn">Showcase 3<input type="file" id="showcase3File" accept="image/*"></label>
            </div>

            <div class="row" style="margin-top:10px">
              <button class="btn primary" id="saveProfileBtn">Save</button>
            </div>
          </div>
        </div>
      `;

      const chatMessages = document.getElementById("chatMessages");
      if(chatMessages) {
        try { chatMessages.scrollTop = chatMessages.scrollHeight; } catch(e) {}
      }
    }

    async function saveProfile(){
      const playingNow = ($("#profilePlaying").value || "").trim();
      const listeningNow = ($("#profileListening").value || "").trim();
      const next = {
        displayName: ($("#profileName").value || "").trim() || state.profile.displayName,
        mood: ($("#profileMood").value || "").trim() || state.profile.mood,
        mySpace: ($("#profileMySpace").value || "").trim() || state.profile.mySpace,
        musicUrl: ($("#profileMusic").value || "").trim(),
        presence: $("#profilePresence").value || state.profile.presence,
        playingGame: playingNow,
        discordPlaying: playingNow,
        discordListening: listeningNow,
        avatar: state.profile.avatar || "", cover: state.profile.cover || "",
        showcase1: state.profile.showcase1 || "", showcase2: state.profile.showcase2 || "", showcase3: state.profile.showcase3 || "",
        email: state.profile.email || state.email, emailKey: emailKey(state.profile.email || state.email),
        founder: state.founder,
        birthday: state.profile.birthday || "",
        gender: state.profile.gender || "",
        friendsVisibility: state.profile.friendsVisibility || "public",
        countryCode: state.profile.countryCode || "SA",
        countryFlag: state.profile.countryFlag || "🇸🇦",
        countryName: state.profile.countryName || "Saudi Arabia",
        showBirthday: !!state.profile.showBirthday,
        showCountry: !!state.profile.showCountry,
        notificationsEnabled: !!state.profile.notificationsEnabled,
        securityKey: state.profile.securityKey || "",
        blockedUsers: state.profile.blockedUsers || {},
        paws: Number(state.profile.paws || 0),
        premiumBadge: !!state.profile.premiumBadge,
        profileGlow: !!state.profile.profileGlow,
        catPawBadge: !!state.profile.catPawBadge,
        nameSpark: !!state.profile.nameSpark
      };
      state.profile = { ...state.profile, ...next };
      await db.ref("profiles/" + state.user.uid).update(next);
      await db.ref("emails/" + next.emailKey).set(state.user.uid);
      await setPresence(next.presence);
      $("#editorModal").classList.remove("open");
      renderMain(); toast("Saved", "Profile updated");
    }

    async function deleteMyAccount(){
      if(!state.user) return;
      try {
        await apiJson('/app/account', { method:'DELETE' });
        toast('Account deleted', 'Your EchoNode account was removed.');
      } catch(error){
        toast('Delete failed', error.message || 'Backend deletion is not ready.');
        return;
      }
      try { await auth.signOut(); } catch(_err) {}
      state.user = null;
      state.currentPage = 'home';
      state.settingsOpen = false;
      renderAuth();
    }

    function installGlobalDelegates(){
      if(window.__echonodeDelegatesInstalled) return;
      window.__echonodeDelegatesInstalled = true;

      const CLICK_SELECTORS = [
        "[data-page]",
        ".community-item[data-community]",
        "[data-like-post]",
        "[data-open-member]",
        "[data-open-chat]",
        "[data-result-type]",
        "[data-open-room]",
        "[data-unblock]",
        "[data-ai]",
        "#openSidebarBtn",
        "#closeSidebarBtn",
        "#sidebarBackdrop",
        "#openSettingsBtn",
        "#closeSettingsBtn",
        "#settingsDrawer",
        "#closeAiBtn",
        "#aiDrawer",
        "#storeDrawer",
        "#createCommunityDrawer",
        "#editorModal",
        "#openStoreBtn",
        "#openAiBtn",
        "#homeAssistantCard",
        "#settingsAssistantCard",
        "#closeStoreBtn",
        "#buyBadgeBtn",
        "#buyGlowBtn",
        "#buyPawBtn",
        "#buySparkBtn",
        "#openCreateCommunityBtn",
        "#closeCreateCommunityBtn",
        "#createCommunityBtn",
        "#backToBaseBtn",
        "#memberMenuBtn",
        "#memberMenuMessage",
        "#memberMenuReport",
        "#memberMenuBlock",
        "#noticeBtn",
        "#sendDmBtn",
        "#chatSendDmBtn",
        "#baseSendDmBtn",
        "#chatBackBtn",
        "#chatOpenProfile",
        "#openProfileSettingsBtn",
        "#openProfileSettingsBtn2",
        "#openProfileSettingsGear",
        "#openProfileSettingsPanel",
        "#closeEditorBtn",
        "#saveProfileBtn",
        "#saveSettingsBtn",
        "#toggleBirthday",
        "#toggleCountry",
        "#toggleNotifications",
        "#blockSelectedBtn",
        "#logoutBtn",
        "#emojiBtn",
        "#chatEmojiBtn",
        "#baseEmojiBtn",
        "#roomBackBtn",
        "#purgeNowBtn",
        "#sendRoomPostBtn",
        "#openLegalBtn",
        "#closeLegalBtn",
        "#legalDrawer",
        "#openAdminBtn",
        "#closeAdminBtn",
        "#adminDrawer",
        "#adminNewCycleBtn",
        "#deleteAccountBtn",
        ".js-open-post-image",
        ".room-media-preview",
        "#toggleRoomLinkBtn",
        "#toggleRoomMediaToolsBtn",
        "[data-base-tab]",
        "#closeImageViewer",
        "#imageViewer"
      ].join(",");

      const getOrigin = (event) => {
        const raw = event.target;
        if(raw instanceof Element) return raw;
        return raw && raw.parentElement ? raw.parentElement : null;
      };

      document.addEventListener("click", async (e) => {
        const origin = getOrigin(e);
        if(!origin) return;
        const target = origin.closest(CLICK_SELECTORS);
        if(!target) return;

        if(target.matches("[data-page]")){
          state.currentPage=target.dataset.page;
          if(target.dataset.page === "home") state.currentCommunity = "all";
          state.memberMenuOpen=false;
          state.settingsOpen=false;
          state.aiOpen=false;
          state.storeOpen=false;
          state.composeOpen=false;
          state.legalOpen=false;
          state.adminOpen=false;
          state.imageViewer="";
          state.showRoomMediaTools=false;
          state.showRoomLink=false;
          renderMain();
          return;
        }
        if(target.matches("[data-base-tab]")){
          state.baseTab = target.dataset.baseTab || "chats";
          renderMain();
          return;
        }
        if(target.matches("[data-open-room]")){
          const roomId = target.dataset.openRoom;
          if(roomId === "trending"){
            toast("Locked room", "Trending unlocks when community support reaches the goal.");
            return;
          }
          state.currentCommunity = roomId || "all";
          state.currentPage = "home";
          state.sidebarOpen = false;
          state.searchHome = "";
          state.imageViewer = "";
          state.showRoomMediaTools = false;
          state.showRoomLink = false;
          renderMain();
          return;
        }
        if(target.matches("[data-like-post]")){
          e.preventDefault();
          e.stopPropagation();
          likePost(target.dataset.likeCommunity, target.dataset.likePost);
          return;
        }
        if(target.matches("[data-open-member]")){
          openMemberProfile(target.dataset.openMember);
          return;
        }
        if(target.matches("[data-open-chat]")){
          openChatWith(target.dataset.openChat);
          return;
        }
        if(target.matches("[data-result-type]")){
          if(target.dataset.resultType==="community"){
            state.currentCommunity=target.dataset.resultId;
            state.currentPage="home";
            state.searchHome="";
          } else {
            state.viewingProfileUid=target.dataset.resultId;
            state.currentPage="memberProfile";
            state.searchHome="";
          }
          renderMain();
          return;
        }
        if(target.matches("[data-unblock]")){
          unblockUser(target.dataset.unblock);
          return;
        }
        if(target.matches("[data-ai]")){
          const answer=$("#aiAnswerCard");
          const map={
            profile:"Use Edit Profile to change mood, music, cover, profile picture, and the 3 Showcase slots.",
            base:"Base is your private zone. Pick a user, open the thread, and send direct messages there. You can block from Base too.",
            home:"Rooms are the new core. Pick a room, drop something fast, and remember everything resets at 12.",
            founder:"Your founder email gets detected automatically and unlocks Founder mode and community creation."
          };
          if(answer) answer.innerHTML=`<div class="card-title">Response</div><div class="card-sub">${esc(map[target.dataset.ai] || "Ready.")}</div>`;
          return;
        }

        if(target.id==="openSidebarBtn"){ state.sidebarOpen=true; renderMain(); return; }
        if(target.id==="closeSidebarBtn" || target.id==="sidebarBackdrop"){ state.sidebarOpen=false; renderMain(); return; }
        if(target.id==="openSettingsBtn" || target.id==="openProfileSettingsGear" || target.id==="openProfileSettingsPanel"){ state.settingsOpen=true; renderMain(); return; }
        if(target.id==="closeSettingsBtn" || target.id==="settingsDrawer"){
          if(target.id!=="settingsDrawer" || e.target.id==="settingsDrawer"){ state.settingsOpen=false; renderMain(); return; }
        }
        if(target.id==="closeAiBtn" || target.id==="aiDrawer"){
          if(target.id!=="aiDrawer" || e.target.id==="aiDrawer"){ state.aiOpen=false; renderMain(); return; }
        }
        if(target.id==="openStoreBtn"){ state.storeOpen=true; renderMain(); return; }
        if(target.id==="storeDrawer"){
          if(e.target.id==="storeDrawer"){ state.storeOpen=false; renderMain(); return; }
        }
        if(target.id==="openAiBtn"){ state.aiOpen=true; renderMain(); return; }
        if(target.id==="createCommunityDrawer"){
          if(e.target.id==="createCommunityDrawer"){ state.createCommunityOpen=false; renderMain(); return; }
        }
        if(target.id==="editorModal"){
          if(e.target.id==="editorModal"){ $("#editorModal")?.classList.remove("open"); return; }
        }
        if(target.id==="homeAssistantCard"){ state.settingsOpen=true; renderMain(); return; }
        if(target.id==="settingsAssistantCard"){ state.aiOpen=true; renderMain(); return; }
        if(target.id==="closeStoreBtn"){ state.storeOpen=false; renderMain(); return; }
        if(target.id==="openLegalBtn"){ state.legalOpen=true; renderMain(); return; }
        if(target.id==="closeLegalBtn" || target.id==="legalDrawer"){ if(target.id!=="legalDrawer" || e.target.id==="legalDrawer"){ state.legalOpen=false; renderMain(); return; } }
        if(target.id==="openAdminBtn"){ state.adminOpen=true; renderMain(); return; }
        if(target.id==="closeAdminBtn" || target.id==="adminDrawer"){ if(target.id!=="adminDrawer" || e.target.id==="adminDrawer"){ state.adminOpen=false; renderMain(); return; } }
        if(target.matches(".js-open-post-image") || target.matches(".room-media-preview")){ const src = target.querySelector("img")?.src || state.draftPostImage || ""; if(src){ state.imageViewer = src; renderMain(); } return; }
        if(target.id==="closeImageViewer" || target.id==="imageViewer"){ if(target.id!=="imageViewer" || e.target.id==="imageViewer"){ state.imageViewer=""; renderMain(); return; } }
        if(target.id==="adminNewCycleBtn"){ await purgeCurrentRoom(); return; }
        if(target.id==="deleteAccountBtn"){ if(confirm("Delete your EchoNode account and related data?")){ await deleteMyAccount(); } return; }
        if(target.id==="buyBadgeBtn"){ buyStoreItem("badge", 20); return; }
        if(target.id==="buyGlowBtn"){ buyStoreItem("glow", 30); return; }
        if(target.id==="buyPawBtn"){ buyStoreItem("paw", 15); return; }
        if(target.id==="buySparkBtn"){ buyStoreItem("spark", 10); return; }
        if(target.id==="openCreateCommunityBtn"){ state.createCommunityOpen=true; renderMain(); return; }
        if(target.id==="closeCreateCommunityBtn"){ state.createCommunityOpen=false; renderMain(); return; }
        if(target.id==="createCommunityBtn"){ createCommunity(); return; }
        if(target.id==="backToBaseBtn" || target.id==="chatBackBtn"){ state.memberMenuOpen=false; goBackToBase(); state.viewingProfileUid=""; return; }
        if(target.id==="memberMenuBtn"){ state.memberMenuOpen=!state.memberMenuOpen; renderMain(); return; }
        if(target.id==="memberMenuMessage"){ state.memberMenuOpen=false; if(state.viewingProfileUid) openChatWith(state.viewingProfileUid); return; }
        if(target.id==="memberMenuReport"){ state.memberMenuOpen=false; await reportMember(state.viewingProfileUid); return; }
        if(target.id==="memberMenuBlock"){ state.memberMenuOpen=false; state.selectedDmUid=state.viewingProfileUid; blockSelectedUser(); return; }
        if(target.id==="noticeBtn"){
          const granted = await ensureNotificationPermission();
          if(granted){
            toast("Notifications enabled", "You will get real browser alerts for DMs and likes.");
            browserNotify("EchoNode notifications are on", "DMs and likes will now reach you.");
          } else toast("Notifications", "Browser permission is off or blocked.");
          return;
        }
        if(["sendDmBtn","chatSendDmBtn","baseSendDmBtn"].includes(target.id)){ e.preventDefault(); sendDM(); return; }
        if(target.id==="sendRoomPostBtn"){ e.preventDefault(); createPost(); return; }
        if(target.id==="roomBackBtn"){ e.preventDefault(); leaveRoom(true); return; }
        if(target.id==="purgeNowBtn"){ await purgeCurrentRoom(); return; }
        if(["emojiBtn","chatEmojiBtn","baseEmojiBtn"].includes(target.id)){
          const input=getActiveDMInput();
          if(input){ input.value += " 😊"; input.focus(); }
          return;
        }
        if(target.id==="chatOpenProfile"){ if(state.selectedDmUid) openMemberProfile(state.selectedDmUid); return; }
        if(target.id==="openProfileSettingsBtn" || target.id==="openProfileSettingsBtn2"){ $("#editorModal")?.classList.add("open"); return; }
        if(target.id==="toggleRoomMediaToolsBtn"){ state.showRoomMediaTools = !state.showRoomMediaTools; renderMain(); return; }
        if(target.id==="toggleRoomLinkBtn"){ state.showRoomLink = !state.showRoomLink; if(state.showRoomLink) state.showRoomMediaTools = true; renderMain(); return; }
        if(target.id==="closeEditorBtn"){ $("#editorModal")?.classList.remove("open"); return; }
        if(target.id==="saveProfileBtn"){ saveProfile(); return; }
        if(target.id==="saveSettingsBtn"){ saveSettings(); return; }
        if(target.id==="toggleBirthday"){ toggleProfileFlag("showBirthday"); return; }
        if(target.id==="toggleCountry"){ toggleProfileFlag("showCountry"); return; }
        if(target.id==="toggleNotifications"){ toggleProfileFlag("notificationsEnabled"); return; }
        if(target.id==="blockSelectedBtn"){ blockSelectedUser(); return; }
        if(target.id==="logoutBtn"){ await auth.signOut(); state.currentPage="home"; state.settingsOpen=false; return; }
      }, true);

      document.addEventListener("submit", (e)=>{
        const form = e.target.closest("#chatSendForm");
        if(form){ e.preventDefault(); sendDM(); }
      }, true);

      document.addEventListener("input", (e)=>{
        const origin = getOrigin(e);
        if(!origin) return;
        if(origin.matches("#homeSearch")){
  clearTimeout(window.__echoHomeSearchTimer);
  const nextValue = origin.value;

  state.searchHome = nextValue;

  window.__echoHomeSearchTimer = setTimeout(() => {
    const homePage = document.querySelector("#page-home");
    const cards = document.querySelectorAll(".discover-card");

    if (state.currentPage === "home" && homePage && cards.length) {
      filterDiscoverCards(nextValue);
    } else {
      renderMain();
    }
  }, 120);

  return;
}

        if(origin.matches("#userSearch")){
          state.searchBase = origin.value;
          filterUsers(origin.value);
          return;
        }
        if(origin.matches("#postLinkInput")){
          state.draftPostLink = origin.value;
          return;
        }
        if(origin.matches("#roomComposer")){
          state.draftPostText = origin.value;
          return;
        }
      }, true);

      document.addEventListener("keydown", (e)=>{
        const origin = getOrigin(e);
        if(!origin) return;
        if((origin.matches("#roomComposer") || origin.matches("#createPostComposer")) && e.key==="Enter" && !e.shiftKey){
          e.preventDefault();
          createPost();
          return;
        }
        if((origin.matches("#chatDmInput") || origin.matches("#baseDmInput") || origin.matches("#dmInput")) && e.key==="Enter" && !e.shiftKey){
          e.preventDefault();
          sendDM();
          return;
        }
      }, true);

      document.addEventListener("change", async (e)=>{
        const origin = getOrigin(e);
        if(!origin) return;
        if(origin.matches("#postImageInput")){
          const f = origin.files && origin.files[0];
          if(!f) return;
          state.draftPostImage = await imageFileToOptimizedDataUrl(f, { maxSide: 1600, quality: 0.82 });
          renderMain();
          toast("Image ready", "Your post image is attached");
          return;
        }
        const imageMap = {
          "#avatarFile":"avatar",
          "#coverFile":"cover",
          "#showcase1File":"showcase1",
          "#showcase2File":"showcase2",
          "#showcase3File":"showcase3"
        };
        for (const [selector, key] of Object.entries(imageMap)){
          if(origin.matches(selector)){
            const f = origin.files && origin.files[0];
            if(!f) return;
            state.profile[key] = await imageFileToOptimizedDataUrl(f, { maxSide: key === "cover" ? 1920 : 1400, quality: 0.82 });
            toast("Ready", key + " saved locally. Press Save.");
            return;
          }
        }
      }, true);
    };

    let roomSwipeStartX = 0;
    let roomSwipeStartY = 0;
    document.addEventListener("touchstart", (e) => {
      if(!(state.currentPage === "home" && state.currentCommunity !== "all")) return;
      const touch = e.changedTouches && e.changedTouches[0];
      if(!touch) return;
      roomSwipeStartX = touch.clientX;
      roomSwipeStartY = touch.clientY;
    }, { passive:true });

    document.addEventListener("touchend", (e) => {
      if(!(state.currentPage === "home" && state.currentCommunity !== "all")) return;
      const touch = e.changedTouches && e.changedTouches[0];
      if(!touch) return;
      const dx = touch.clientX - roomSwipeStartX;
      const dy = Math.abs(touch.clientY - roomSwipeStartY);
      if(roomSwipeStartX <= 36 && dx > 82 && dy < 72){
        leaveRoom(true);
      }
    }, { passive:true });

    installGlobalDelegates();

    auth.onAuthStateChanged(async user=>{
      if(!user){ state.user=null; state.founder=false; clearUnsubs(); renderAuth(); return; }
      state.user=user; state.email=user.email || state.email;
      await loadProfile(user.uid); await subscribeAll(); bindPresence(); renderMain();
    });

    renderAuth();


