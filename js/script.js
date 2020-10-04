$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  //Dropdown submenu code
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass('show');
    });


    return false;
  });
  $('.carousel').carousel({ interval: 2000 });

  $('.enlargePhoto').click(function (e) {
    var title;
    if (e.target.src.substr(-13, 13) === "mitose_12.jpg") {
      title = "The above picture, from left to right, are: Honorable General Dwight D. Eisenhower, Honorable Alvin M. Mitose (son of Honorable Great Grand Master), and Honorable Great Grand Master James M. Mitose. Honorable General Eisenhower was the Honorary President of the American and Japanese Goodwill and Friendship Society. The author, Honorable Great Grand Master James M. Mitose, is Head of all Kosho-Shorei Ministers and is the Founder and President of the American and Japanese Goodwill and Friendship Society."
    }
    else {
      title = e.target.nextElementSibling.innerText;
    }
    var image = e.target.src;
    $('#photoModalTitle').text(title);
    $('#photoModalImage').attr('src', image);
    $('#photoModalAnchor').attr('href', image);
    $('#photoModal').modal('show');
  });
  $('#photoModal').on('hidden.bs.modal', function () {
    $(this).removeData('bs.modal');
  });


  //Kata video generation code placed here and no longer separated out, due to how usemincli works
  if (location.pathname === '/kataVideos.html') {

    // This function accepts 3 arrays of card content (title, url of videos, and footers respectively), as well as the row to add the cards to
    var kataCardGenerator = function (titleArray, videoUrlArray, footerArray, row) {
      for (var i = 0; i < titleArray.length; i++) {
        var col = document.createElement("div");
        col.classList.add("col-lg-5", "col-xl-4", "col-md-6", "mt-3", "mb-3");
        col.innerHTML = '<div class="card kataCard hover border-blue-light rounded"><div class="card-body embed-responsive embed-responsive-16by9"><video class="embed-responsive-item" controls src="assets/videos/' + videoUrlArray[i] + '.mp4"></video></div><div class="card-footer"><h5 class="card-title">' + titleArray[i] + '</h5><p class="text-muted">' + footerArray[i] + '</p></div></div>';
        row.appendChild(col);
      }
    }

    var m = {
      //object of arrays to be passed to kataCardGenerator function
      colClasses: ["col-lg-5", "col-xl-4", "col-md-6", "mt-3", "mb-3"],

      octagonTitles: ["Hachihenkei Fusegi jutsu", "Hachihenkei Gedan Barai", "Hachihenkei Fusegi Jutsu – Advanced"],
      octagonVideoUrls: ["hachihenkei_fusegi_jutsu", "hachihenkei_gedan_barai", "hachihenkei_fusegi_jutsu_advanced"],
      octagonFooters: ["Escaping arts octagon. This is the basic escaping arts version of the octagon.", "Octagon drill with lower parry. This is the basic octagon drill with lower parry.", "This is the “advanced” escaping arts version of the octagon. Now the angles are done in pairs, as they should be done."],
      octagonRow: document.getElementById("pillContentOctagon").firstElementChild,

      emptyHandedTitles: ["Taekyoku", "Mitose no Keiho", "Chonan", "Shudoso", "Tiki Shodan or Naihanchi Shodan", "Yang style Tai Chi Short Form", "Yang Style Tai Chi Short Form – Angle 2", "Wansu"],
      emptyHandedVideoUrls: ["taekyoku", "mitose_no_keiho", "chonan", "shudoso", "tiki_shodan", "Yang_TC_short_angle1", "Yang_TC_short_angle2", "wansu"],
      emptyHandedFooters: ["This is our first kata being performed by Sensei Josh Simon. As the name suggests, this is a great way to start off studying contrasts between yang and yin", "This is Mitose no keiho, or Mitose’s training method. This is one the kata that are unique to Kosho Shorei Ryu", "This kata is studied within the Shuto Society, and we keep it as one of the required kyu kata.", "Shudoso. This is the dynamic tension form that Robert Trias taught Hanshi Bruce Juchnik, and he preserves int he SKSKI in his honor.", "This kata was part of the collection in both the Shuto Society and Kosho Shorei Ryu, and is part of our kyu requirements also. Choki Motobu, Mitose Sensei’s uncle was reputed to do this and the other three in the series.", "This is Hon Chin Lin sensei performing the Yang style Tai Chi short form or competition form.", "This is Hon Chin Lin sensei performing the Yang style Tai Chi short form or competition form, from a different angle.", "Wansu"],
      emptyHandedRow: document.getElementById("pillContentEmptyHand").firstElementChild,

      pinanHeianTitles: ["Pinan Shodan", "Pinan Nidan", "Pinan Sandan", "Pinan Yondan", "Pinan Godan"],
      pinanHeianVideoUrls: ["pinan_shodan", "pinan_nidan", "pinan_sandan", "pinan_yondan", "pinan_godan"],
      pinanHeianRow: document.getElementById("pillContentPinanHeian").firstElementChild,

      nekoButoTitles: ["Neko-buto Shodan", "Neko-buto Nidan", "Neko-buto Sandan"],
      nekoButoVideoUrls: ["neko-buto_shodan", "neko-buto_nidan", "neko-buto_sandan"],
      nekoButoRow: document.getElementById("pillContentNekoButo").firstElementChild,

      toyamaTitles: ["Toyama Ryu no mae no teki", "Toyama Ryu no migi no teki", "Toyama Ryu no hidari no teki", "Toyama rye no ushiro no teki", "Toyama Ryu no zenmen no teki", "Toyama Ryu no ushiro to mae no teki", "Toyama Ryu no hidari migi shomen no teki", "Toyama Ryu no sue mono giri Nippon ryodan"],
      toyamaVideoUrls: ["toyama_ryu_mae_no_teki", "toyama_ryu_migi_no_teki", "toyama_ryu_hidari_no_teki", "toyama_ryu_ushiro_no_teki", "toyama_ryu_zenmen_no_teki", "toyama_ryu_ushiro_to_mae_no_teki", "toyama_ryu_hidari_migi_shomen_no_teki", "toyama_ryu_sue_mono_giri_ippon_ryodan"],
      toyamaFooters: ["Attack the front", "Attack the right", "Attack the left", "Attack the back", "Attack the forward area", "Attack the back, forward area", "Attack left, right, and forward area", "Downward cut – fixed object"],
      toyamaRow: document.getElementById("pillContentToyama").firstElementChild,

      MaAeTitles: ["Ma-ae no jo shodan", "Ma-ae no jo nidan", "Ma-ae no jo sandan", "Ma-ae no jo yondan", "Ma-ae no jo godan", "Ma-ae no jo rokudan"],
      MaAeVideoUrls: ["ma-ae_no_jo_shodan", "ma-ae_no_jo_nidan", "ma-ae_no_jo_sandan", "ma-ae_no_jo_yondan", "ma-ae_no_jo_godan", "ma-ae_no_jo_rokudan"],
      MaAeRow: document.getElementById("pillContentMaAe").firstElementChild,

      germanTitles: ["German long sword, 8 cuts, fast", "German long sword, 8 cuts, slow", "German long sword, 16 cuts, fast", "German long sword, 16 cuts, slow"],
      germanVideoUrls: ["long_sword_8-cuts_fast", "long_sword_8-cuts_slow", "long_sword_16-cuts_fast", "long_sword_16-cuts_slow"],
      germanRow: document.getElementById("pillContentGerman").firstElementChild,
    }

    kataCardGenerator(m.octagonTitles, m.octagonVideoUrls, m.octagonFooters, m.octagonRow);
    kataCardGenerator(m.emptyHandedTitles, m.emptyHandedVideoUrls, m.emptyHandedFooters, m.emptyHandedRow);
    kataCardGenerator(m.pinanHeianTitles, m.pinanHeianVideoUrls, m.pinanHeianTitles, m.pinanHeianRow);
    kataCardGenerator(m.nekoButoTitles, m.nekoButoVideoUrls, m.nekoButoTitles, m.nekoButoRow);
    kataCardGenerator(m.toyamaTitles, m.toyamaVideoUrls, m.toyamaFooters, m.toyamaRow);
    kataCardGenerator(m.MaAeTitles, m.MaAeVideoUrls, m.MaAeTitles, m.MaAeRow);
    kataCardGenerator(m.germanTitles, m.germanVideoUrls, m.germanTitles, m.germanRow);
  }
})