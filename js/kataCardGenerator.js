$(function () {
    /*Global m*/

    // This function accepts 3 arrays of card content (title, url of videos, and footers respectively), as well as the row to add the cards to
    const kataCardGenerator = function (titleArray, videoUrlArray, footerArray, row) {
        for (var i = 0; i < titleArray.length; i++) {
            var col = document.createElement("div");
            col.classList.add("col-lg-5", "col-xl-4", "col-md-6", "mt-3", "mb-3");
            col.innerHTML = '<div class="card kataCard hover border-blue-light rounded"><div class="card-body embed-responsive embed-responsive-16by9"><video class="embed-responsive-item" controls src="assets/videos/' + videoUrlArray[i] + '.mp4"></video></div><div class="card-footer"><h5 class="card-title">' + titleArray[i] + '</h5><p class="text-muted">' + footerArray[i] + '</p></div></div>';
            row.appendChild(col);
        }
    }
    kataCardGenerator(m.octagonTitles, m.octagonVideoUrls, m.octagonFooters, m.octagonRow);
    kataCardGenerator(m.emptyHandedTitles, m.emptyHandedVideoUrls, m.emptyHandedFooters, m.emptyHandedRow);
    kataCardGenerator(m.pinanHeianTitles, m.pinanHeianVideoUrls, m.pinanHeianTitles, m.pinanHeianRow);
    kataCardGenerator(m.nekoButoTitles, m.nekoButoVideoUrls, m.nekoButoTitles, m.nekoButoRow);
    kataCardGenerator(m.toyamaTitles, m.toyamaVideoUrls, m.toyamaFooters, m.toyamaRow);
    kataCardGenerator(m.MaAeTitles, m.MaAeVideoUrls, m.MaAeTitles, m.MaAeRow);
    kataCardGenerator(m.germanTitles, m.germanVideoUrls, m.germanTitles, m.germanRow);
})