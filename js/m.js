var m = {
    //object of arrays to be passed to kataCardGenerator function
    colClasses: ["col-lg-5", "col-xl-4", "col-md-6", "mt-3", "mb-3"],

    octagonTitles: ["Hachihenkei Fusegi jutsu", "Hachihenkei Gedan Barai", "Hachihenkei Fusegi Jutsu – Advanced"],
    octagonVideoUrls: ["hachihenkei_fusegi_jutsu", "hachihenkei_gedan_barai", "hachihenkei_fusegi_jutsu_advanced"],
    octagonFooters: ["Escaping arts octagon. This is the basic escaping arts version of the octagon.", "Octagon drill with lower parry. This is the basic octagon drill with lower parry.", "This is the “advanced” escaping arts version of the octagon. Now the angles are done in pairs, as they should be done."],
    octagonRow: document.getElementById("pillContentOctagon").childNodes[1],

    emptyHandedTitles: ["Taekyoku", "Mitose no Keiho", "Chonan", "Shudoso", "Tiki Shodan or Naihanchi Shodan", "Yang style Tai Chi Short Form", "Yang Style Tai Chi Short Form – Angle 2", "Wansu"],
    emptyHandedVideoUrls: ["taekyoku", "mitose_no_keiho", "chonan", "shudoso", "tiki_shodan", "Yang_TC_short_angle1", "Yang_TC_short_angle2", "wansu"],
    emptyHandedFooters: ["This is our first kata being performed by Sensei Josh Simon. As the name suggests, this is a great way to start off studying contrasts between yang and yin", "This is Mitose no keiho, or Mitose’s training method. This is one the kata that are unique to Kosho Shorei Ryu", "This kata is studied within the Shuto Society, and we keep it as one of the required kyu kata.", "Shudoso. This is the dynamic tension form that Robert Trias taught Hanshi Bruce Juchnik, and he preserves int he SKSKI in his honor.", "This kata was part of the collection in both the Shuto Society and Kosho Shorei Ryu, and is part of our kyu requirements also. Choki Motobu, Mitose Sensei’s uncle was reputed to do this and the other three in the series.", "This is Hon Chin Lin sensei performing the Yang style Tai Chi short form or competition form.", "This is Hon Chin Lin sensei performing the Yang style Tai Chi short form or competition form, from a different angle.", "Wansu"],
    emptyHandedRow: document.getElementById("pillContentEmptyHand").childNodes[1],

    pinanHeianTitles: ["Pinan Shodan", "Pinan Nidan", "Pinan Sandan", "Pinan Yondan", "Pinan Godan"],
    pinanHeianVideoUrls: ["pinan_shodan", "pinan_nidan", "pinan_sandan", "pinan_yondan", "pinan_godan"],
    pinanHeianRow: document.getElementById("pillContentPinanHeian").childNodes[1],

    nekoButoTitles: ["Neko-buto Shodan", "Neko-buto Nidan", "Neko-buto Sandan"],
    nekoButoVideoUrls: ["neko-buto_shodan", "neko-buto_nidan", "neko-buto_sandan"],
    nekoButoRow: document.getElementById("pillContentNekoButo").childNodes[1],

    toyamaTitles: ["Toyama Ryu no mae no teki", "Toyama Ryu no migi no teki", "Toyama Ryu no hidari no teki", "Toyama rye no ushiro no teki", "Toyama Ryu no zenmen no teki", "Toyama Ryu no ushiro to mae no teki", "Toyama Ryu no hidari migi shomen no teki", "Toyama Ryu no sue mono giri Nippon ryodan"],
    toyamaVideoUrls: ["toyama_ryu_mae_no_teki", "toyama_ryu_migi_no_teki", "toyama_ryu_hidari_no_teki", "toyama_ryu_ushiro_no_teki", "toyama_ryu_zenmen_no_teki", "toyama_ryu_ushiro_to_mae_no_teki", "toyama_ryu_hidari_migi_shomen_no_teki", "toyama_ryu_sue_mono_giri_ippon_ryodan"],
    toyamaFooters: ["Attack the front", "Attack the right", "Attack the left", "Attack the back", "Attack the forward area", "Attack the back, forward area", "Attack left, right, and forward area", "Downward cut – fixed object"],
    toyamaRow: document.getElementById("pillContentToyama").childNodes[1],

    MaAeTitles: ["Ma-ae no jo shodan", "Ma-ae no jo nidan", "Ma-ae no jo sandan", "Ma-ae no jo yondan", "Ma-ae no jo godan", "Ma-ae no jo rokudan"],
    MaAeVideoUrls: ["ma-ae_no_jo_shodan", "ma-ae_no_jo_nidan", "ma-ae_no_jo_sandan", "ma-ae_no_jo_yondan", "ma-ae_no_jo_godan", "ma-ae_no_jo_rokudan"],
    MaAeRow: document.getElementById("pillContentMaAe").childNodes[1],

    germanTitles: ["German long sword, 8 cuts, fast", "German long sword, 8 cuts, slow", "German long sword, 16 cuts, fast", "German long sword, 16 cuts, slow"],
    germanVideoUrls: ["long_sword_8-cuts_fast", "long_sword_8-cuts_slow", "long_sword_16-cuts_fast", "long_sword_16-cuts_slow"],
    germanRow: document.getElementById("pillContentGerman").childNodes[1],
  }