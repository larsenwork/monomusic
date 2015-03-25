function nl2br(str, is_xhtml) {
  "use strict";
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
function convert() {
  "use strict";
  document.getElementById('hyp').innerHTML = nl2br(document.getElementById('text').value);
  $("#hyp").each(function () {
    chordHighligt();
  });
}
function update() {
  "use strict";
  document.getElementById('text').innerHTML = document.getElementById('hyp').innerHTML;
}
function chordHighligt() {
  "use strict";
  $(".text").each(function () {
    var text = $(this).text();
    text = text.replace(/b\!/g, "b");
    text = text.replace(/\u0023\!/g, "\#");
    text = text.replace(/\u1D6AB/g, "\u0394"); // Only greek Delta
    text = text.replace(/A\!/g, "Δ");
    text = text.replace(/\|/g, "l\!");
    text = text.replace(/\♯/g, "\#");
    text = text.replace(/\°/g, "o");
    text = text.replace(/\♭/g, "b");
    text = text.replace(/\-x\-/g, "\-\×\-");
    $(this).text(text);
  });
  $('.text').highlight(['\/C\#', '\/D\#', '\/E\#', '\/F\#', '\/G\#', '\/A\#', '\/B\#', '\/C♭', '\/D♭', '\/E♭', '\/F♭', '\/G♭', '\/A♭', '\/B♭', '\/C', '\/D', '\/E', '\/F', '\/G', '\/A', '\/B', 'mb6', 'maj7+5', '7\#5', '(no 3rd)', 'm7b5', 'dim7', 'mΔ', '-Δ7', 'm\/M7', 'mM7', 'm\/maj7', 'm\/ma7', 'mΔ', 'min7', 'mi7',  'phryg', 'b9sus', '7sus4', 'sus2', 'sus4', 'alt7', '7\#9', '7b9', '7\#4', '7\#11',  'M7b6', 'ma7b6', 'maj7b6', 'Δ\#11', 'Δ\#4', 'maj\#4', 'Δ7', 'Δ', 'maj7', 'maj9', 'maj13', 'add13', 'add11', 'add9', 'add6', 'add2'], {
    caseSensitive: true
  });
  $('.text').highlight(['A+', 'Aaug', 'A5', 'Amaj', 'A69', 'A6\/9', 'A6', 'AM7', 'Am7', 'Ama7', 'A13', 'A9', 'Adom', 'A7', 'AM', 'Am13', 'Am11', 'Am9', 'Am6', 'Ao7', 'Ao', 'Aø', 'Adim', 'A-7', 'A-', 'Amin', 'A11', 'Asus', 'A\#+', 'A\#aug', 'A\#5', 'A\#maj', 'A\#69', 'A\#6\/9', 'A\#6', 'A\#M7', 'A\#m7', 'A\#ma7', 'A\#13', 'A\#9', 'A\#dom', 'A\#7', 'A\#m13', 'A\#m11', 'A\#m9', 'A\#m6', 'A\#M', 'A\#o7', 'A\#o', 'A\#ø', 'A\#dim', 'A\#-7', 'A\#-', 'A\#min', 'A\#11', 'A\#sus', 'Ab+', 'Abaug', 'Ab5', 'Abmaj', 'Ab69', 'Ab6\/9', 'Ab6', 'AbM7', 'Abm7', 'Abma7', 'Ab13', 'Ab9', 'Abdom', 'Ab7', 'Abm13', 'Abm11', 'Abm9', 'Abm6', 'Abo7', 'AbM', 'Abø', 'Abdim', 'Ab-7', 'Ab-', 'Abmin', 'Ab11', 'Absus', 'B+', 'Baug', 'B5', 'Bmaj', 'B69', 'B6\/9', 'B6', 'BM7', 'Bm7', 'Bma7', 'B13', 'B9', 'Bdom', 'B7', 'BM', 'Bm13', 'Bm11', 'Bm9', 'Bm6', 'Bo7', 'Bo', 'Bø', 'Bdim', 'B-7', 'B-', 'Bmin', 'B11', 'Bsus', 'B\#+', 'B\#aug', 'B\#5', 'B\#maj', 'B\#69', 'B\#6\/9', 'B\#6', 'B\#M7', 'B\#m7', 'B\#ma7', 'B\#13', 'B\#9', 'B\#dom', 'B\#7', 'B\#m13', 'B\#m11', 'B\#m9', 'B\#m6', 'B\#M', 'B\#o7', 'B\#o', 'B\#ø', 'B\#dim', 'B\#-7', 'B\#-', 'B\#min', 'B\#11', 'B\#sus', 'Bb+', 'Bbaug', 'Bb5', 'Bbmaj', 'Bb69', 'Bb6\/9', 'Bb6', 'BbM7', 'Bbm7', 'Bbma7', 'Bb13', 'Bb9', 'Bbdom', 'Bb7', 'Bbm13', 'Bbm11', 'Bbm9', 'Bbm6', 'Bbo7', 'Bbo', 'BbM', 'Bbø', 'Bbdim', 'Bb-7', 'Bb-', 'Bbmin', 'Bb11', 'Bbsus', 'H+', 'Haug', 'H5', 'Hmaj', 'H69', 'H6\/9', 'H6', 'HM7', 'Hm7', 'Hma7', 'H13', 'H9', 'Hdom', 'H7', 'HM', 'Hm13', 'Hm11', 'Hm9', 'Hm6', 'Ho7', 'Ho', 'Hø', 'Hdim', 'H-7', 'H-', 'Hmin', 'H11', 'Hsus', 'H\#+', 'H\#aug', 'H\#5', 'H\#maj', 'H\#69', 'H\#6\/9', 'H\#6', 'H\#M7', 'H\#m7', 'H\#ma7', 'H\#13', 'H\#9', 'H\#dom', 'H\#7', 'H\#m13', 'H\#m11', 'H\#m9', 'H\#m6', 'H\#M', 'H\#o7', 'H\#o', 'H\#ø', 'H\#dim', 'H\#-7', 'H\#-', 'H\#min', 'H\#11', 'H\#sus', 'Hb+', 'Hbaug', 'Hb5', 'Hbmaj', 'Hb69', 'Hb6\/9', 'Hb6', 'HbM7', 'Hbm7', 'Hbma7', 'Hb13', 'Hb9', 'Hbdom', 'Hb7', 'Hbm13', 'Hbm11', 'Hbm9', 'Hbm6', 'Hbo7', 'Hbo', 'HbM', 'Hbø', 'Hbdim', 'Hb-7', 'Hb-', 'Hbmin', 'Hb11', 'Hbsus', 'C+', 'Caug', 'C5', 'Cmaj', 'C69', 'C6\/9', 'C6', 'CM7', 'Cm7', 'Cma7', 'C13', 'C9', 'Cdom', 'C7', 'CM', 'Cm13', 'Cm11', 'Cm9', 'Cm6', 'Co7', 'Cø', 'Cdim', 'C-7', 'C-', 'Cmin', 'C11', 'Csus', 'C\#+', 'C\#aug', 'C\#5', 'C\#maj', 'C\#69', 'C\#6\/9', 'C\#6', 'C\#M7', 'C\#m7', 'C\#ma7', 'C\#13', 'C\#9', 'C\#dom', 'C\#7', 'C\#m13', 'C\#m11', 'C\#m9', 'C\#m6', 'C\#M', 'C\#o7', 'C\#o', 'C\#ø', 'C\#dim', 'C\#-7', 'C\#-', 'C\#min', 'C\#11', 'C\#sus', 'Cb+', 'Cbaug', 'Cb5', 'Cbmaj', 'Cb69', 'Cb6\/9', 'Cb6', 'CbM7', 'Cbm7', 'Cbma7', 'Cb13', 'Cb9', 'Cbdom', 'Cb7', 'Cbm13', 'Cbm11', 'Cbm9', 'Cbm6', 'Cbo7', 'Cbo', 'CbM', 'Cbø', 'Cbdim', 'Cb-7', 'Cb-', 'Cbmin', 'Cb11', 'Cbsus', 'D+', 'Daug', 'D5', 'Dmaj', 'D69', 'D6\/9', 'D6', 'DM7', 'Dm7', 'Dma7', 'D13', 'D9', 'Ddom', 'D7', 'DM', 'Dm13', 'Dm11', 'Dm9', 'Dm6', 'Do7', 'Do', 'Dø', 'Ddim', 'D-7', 'D-', 'Dmin', 'D11', 'Dsus', 'D\#+', 'D\#aug', 'D\#5', 'D\#maj', 'D\#69', 'D\#6\/9', 'D\#6', 'D\#M7', 'D\#m7', 'D\#ma7', 'D\#13', 'D\#9', 'D\#dom', 'D\#7', 'D\#m13', 'D\#m11', 'D\#m9', 'D\#m6', 'D\#M', 'D\#o7', 'D\#o', 'D\#ø', 'D\#dim', 'D\#-7', 'D\#-', 'D\#min', 'D\#11', 'D\#sus', 'Db+', 'Dbaug', 'Db5', 'Dbmaj', 'Db69', 'Db6\/9', 'Db6', 'DbM7', 'Dbm7', 'Dbma7', 'Db13', 'Db9', 'Dbdom', 'Db7', 'Dbm13', 'Dbm11', 'Dbm9', 'Dbm6', 'Dbo7', 'Dbo', 'DbM', 'Dbø', 'Dbdim', 'Db-7', 'Db-', 'Dbmin', 'Db11', 'Dbsus', 'E+', 'Eaug', 'E5', 'Emaj', 'E69', 'E6\/9', 'E6', 'EM7', 'Em7', 'Ema7', 'E13', 'E9', 'Edom', 'E7', 'EM', 'Em13', 'Em11', 'Em9', 'Em6', 'Eo7', 'Eo', 'Eø', 'Edim', 'E-7', 'E-', 'Emin', 'E11', 'Esus', 'E\#+', 'E\#aug', 'E\#5', 'E\#maj', 'E\#69', 'E\#6\/9', 'E\#6', 'E\#M7', 'E\#m7', 'E\#ma7', 'E\#13', 'E\#9', 'E\#dom', 'E\#7', 'E\#m13', 'E\#m11', 'E\#m9', 'E\#m6', 'E\#M', 'E\#o7', 'E\#o', 'E\#ø', 'E\#dim', 'E\#-7', 'E\#-', 'E\#min', 'E\#11', 'E\#sus', 'Eb+', 'Ebaug', 'Eb5', 'Ebmaj', 'Eb69', 'Eb6\/9', 'Eb6', 'EbM7', 'Ebm7', 'Ebma7', 'Eb13', 'Eb9', 'Ebdom', 'Eb7', 'Ebm13', 'Ebm11', 'Ebm9', 'Ebm6', 'Ebo7', 'Ebo', 'EbM', 'Ebø', 'Ebdim', 'Eb-7', 'Eb-', 'Ebmin', 'Eb11', 'Ebsus', 'F+', 'Faug', 'F5', 'Fmaj', 'F69', 'F6\/9', 'F6', 'FM7', 'Fm7', 'Fma7', 'F13', 'F9', 'Fdom', 'F7', 'FM', 'Fm13', 'Fm11', 'Fm9', 'Fm6', 'Fo7', 'Fo', 'Fø', 'Fdim', 'F-7', 'F-', 'Fmin', 'F11', 'Fsus', 'F\#+', 'F\#aug', 'F\#5', 'F\#maj', 'F\#69', 'F\#6\/9', 'F\#6', 'F\#M7', 'F\#m7', 'F\#ma7', 'F\#13', 'F\#9', 'F\#dom', 'F\#7', 'F\#m13', 'F\#m11', 'F\#m9', 'F\#m6', 'F\#M', 'F\#o7', 'F\#o', 'F\#ø', 'F\#dim', 'F\#-7', 'F\#-', 'F\#min', 'F\#11', 'F\#sus', 'Fb+', 'Fbaug', 'Fb5', 'Fbmaj', 'Fb69', 'Fb6\/9', 'Fb6', 'FbM7', 'Fbm7', 'Fbma7', 'Fb13', 'Fb9', 'Fbdom', 'Fb7', 'Fbm13', 'Fbm11', 'Fbm9', 'Fbm6', 'Fbo7', 'Fbo', 'FbM', 'Fbø', 'Fbdim', 'Fb-7', 'Fb-', 'Fbmin', 'Fb11', 'Fbsus', 'G+', 'Gaug', 'G5', 'Gmaj', 'G69', 'G6\/9', 'G6', 'GM7', 'Gm7', 'Gma7', 'G13', 'G9', 'Gdom', 'G7', 'GM', 'Gm13', 'Gm11', 'Gm9', 'Gm6', 'Go7', 'Go', 'Gø', 'Gdim', 'G-7', 'G-', 'Gmin', 'G11', 'Gsus', 'G\#+', 'G\#aug', 'G\#5', 'G\#maj', 'G\#69', 'G\#6\/9', 'G\#6', 'G\#M7', 'G\#m7', 'G\#ma7', 'G\#13', 'G\#9', 'G\#dom', 'G\#7', 'G\#m13', 'G\#m11', 'G\#m9', 'G\#m6', 'G\#M', 'G\#o7', 'G\#o', 'G\#ø', 'G\#dim', 'G\#-7', 'G\#-', 'G\#min', 'G\#11', 'G\#sus', 'Gb+', 'Gbaug', 'Gb5', 'Gbmaj', 'Gb69', 'Gb6\/9', 'Gb6', 'GbM7', 'Gbm7', 'Gbma7', 'Gb13', 'Gb9', 'Gbdom', 'Gb7', 'Gbm13', 'Gbm11', 'Gbm9', 'Gbm6', 'Gbo7', 'Gbo', 'GbM', 'Gbø', 'Gbdim', 'Gb-7', 'Gb-', 'Gbmin', 'Gb11', 'Gbsus', 'A\#m', 'B\#m', 'H\#m', 'C\#m', 'D\#m', 'E\#m', 'F\#m', 'G\#m', 'A\#', 'B\#', 'H\#', 'C\#', 'D\#', 'E\#', 'F\#', 'G\#'], {
    caseSensitive: true
  });
  $('.text').highlight(['Abo', 'Co', 'Abm', 'Bbm', 'Hbm', 'Cbm', 'Dbm', 'Ebm', 'Fbm', 'Gbm', 'Ab', 'Bb', 'Hb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Am', 'Bm', 'Hm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm', 'A', 'B', 'H', 'C', 'D', 'E', 'F', 'G'], {
    wordsOnly: true,
    caseSensitive: true
  });
  $(".highlight").each(function () {
    var text = $(this).text();
// Shrink
    text = text.replace(/\#/g, "♯");
    text = text.replace(/b/g, "♭");
    text = text.replace(/maj7/g, "Δ7  ");
    text = text.replace(/M7/g, "Δ7");
    text = text.replace(/min7/g, "m7  ");
    text = text.replace(/min/g, "m  ");
    text = text.replace(/-/g, "m");
    text = text.replace(/aug/g, "+  ");
    text = text.replace(/dim/g, "o  ");
    text = text.replace(/m7♭5/g, "ø   ");
// Hardcode superscript
    text = text.replace(/a/g, "\uE01B");
    text = text.replace(/d/g, "\uE01C");
    text = text.replace(/s/g, "\uE021");
    text = text.replace(/u/g, "\uE022");
    text = text.replace(/1/g, "\uE001");
    text = text.replace(/2/g, "\uE002");
    text = text.replace(/3/g, "\uE003");
    text = text.replace(/4/g, "\uE004");
    text = text.replace(/5/g, "\uE005");
    text = text.replace(/6/g, "\uE006");
    text = text.replace(/7/g, "\uE007");
    text = text.replace(/8/g, "\uE008");
    text = text.replace(/9/g, "\uE009");
    text = text.replace(/o/g, "\uE016");
    text = text.replace(/ø/g, "\uE017");
    text = text.replace(/M/g, "\uE015");
    text = text.replace(/\u0394/g, "\uE018"); //Delta
    text = text.replace(/\u002B/g, "\uE009"); //plus
    text = text.replace(/\u002D/g, "\uE009"); //minus
    text = text.replace(/\u266D/g, "\uE00A"); //flat
    text = text.replace(/\u266E/g, "\uE00B"); //normal
    text = text.replace(/\u266F/g, "\uE00C"); //sharp
    text = text.replace(/\u1D12A/g, "\uE00D"); //doublesharp
    text = text.replace(/\u1D12B/g, "\uE00E"); //doubleflat
    $(this).text(text);
  });
}
