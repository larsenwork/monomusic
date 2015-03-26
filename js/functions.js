// CHORDHIGLIGHT

function chordHighligt() {
  "use strict";
  $(".text").each(function () {
    var text = $(this).text();
    text = text.replace(/b\!/g, "b");
    text = text.replace(/\u0023\!/g, "#");
    text = text.replace(/\u1D6AB/g, "\u0394"); // Only greek Delta
    text = text.replace(/A\!/g, "Δ");
    text = text.replace(/E\ \|/g, "E|");
    text = text.replace(/A\ \|/g, "A|");
    text = text.replace(/G\ \|/g, "G|");
    text = text.replace(/D\ \|/g, "D|");
    text = text.replace(/B\ \|/g, "B|");
    text = text.replace(/\|/g, "andreaslarsendk");
    text = text.replace(/\♯/g, "#");
    text = text.replace(/\°/g, "o");
    text = text.replace(/\♭/g, "b");
    text = text.replace(/\-x\-/g, "-×-");
    $(this).text(text);
  });
  $('.text').highlight(['\/C#', '\/D#', '\/E#', '\/F#', '\/G#', '\/A#', '\/B#', '\/C♭', '\/D♭', '\/E♭', '\/F♭', '\/G♭', '\/A♭', '\/B♭', '\/C', '\/D', '\/E', '\/F', '\/G', '\/A', '\/B', 'mb6', 'maj7+5', '7#5', '(no 3rd)', 'm7b5', 'dim7', 'mΔ', '-Δ7', 'm\/M7', 'mM7', 'm\/maj7', 'm\/ma7', 'mΔ', 'min7', 'mi7',  'phryg', 'b9sus', '7sus4', 'sus2', 'sus4', 'alt7', '7#9', '7b9', '7#4', '7#11',  'M7b6', 'ma7b6', 'maj7b6', 'Δ#11', 'Δ#4', 'maj#4', 'Δ7', 'Δ', 'maj7', 'maj9', 'maj13', 'add13', 'add11', 'add9', 'add6', 'add2'], {
    caseSensitive: true
  });
  $('.text').highlight(['A+', 'Aaug', 'A5', 'Amaj', 'A69', 'A6\/9', 'A6', 'AM7', 'Am7', 'Ama7', 'A13', 'A9', 'Adom', 'A7', 'AM', 'Am13', 'Am11', 'Am9', 'Am6', 'Ao7', 'Ao', 'Aø', 'Adim', 'A-7', 'A-', 'Amin', 'A11', 'Asus', 'A#+', 'A#aug', 'A#5', 'A#maj', 'A#69', 'A#6\/9', 'A#6', 'A#M7', 'A#m7', 'A#ma7', 'A#13', 'A#9', 'A#dom', 'A#7', 'A#m13', 'A#m11', 'A#m9', 'A#m6', 'A#M', 'A#o7', 'A#o', 'A#ø', 'A#dim', 'A#-7', 'A#-', 'A#min', 'A#11', 'A#sus', 'Ab+', 'Abaug', 'Ab5', 'Abmaj', 'Ab69', 'Ab6\/9', 'Ab6', 'AbM7', 'Abm7', 'Abma7', 'Ab13', 'Ab9', 'Abdom', 'Ab7', 'Abm13', 'Abm11', 'Abm9', 'Abm6', 'Abo7', 'AbM', 'Abø', 'Abdim', 'Ab-7', 'Ab-', 'Abmin', 'Ab11', 'Absus', 'B+', 'Baug', 'B5', 'Bmaj', 'B69', 'B6\/9', 'B6', 'BM7', 'Bm7', 'Bma7', 'B13', 'B9', 'Bdom', 'B7', 'BM', 'Bm13', 'Bm11', 'Bm9', 'Bm6', 'Bo7', 'Bdim', 'B-7', 'B-', 'Bmin', 'B11', 'Bsus', 'B#+', 'B#aug', 'B#5', 'B#maj', 'B#69', 'B#6\/9', 'B#6', 'B#M7', 'B#m7', 'B#ma7', 'B#13', 'B#9', 'B#dom', 'B#7', 'B#m13', 'B#m11', 'B#m9', 'B#m6', 'B#M', 'B#o7', 'B#o', 'B#ø', 'B#dim', 'B#-7', 'B#-', 'B#min', 'B#11', 'B#sus', 'Bb+', 'Bbaug', 'Bb5', 'Bbmaj', 'Bb69', 'Bb6\/9', 'Bb6', 'BbM7', 'Bbm7', 'Bbma7', 'Bb13', 'Bb9', 'Bbdom', 'Bb7', 'Bbm13', 'Bbm11', 'Bbm9', 'Bbm6', 'Bbo7', 'Bbo', 'BbM', 'Bbø', 'Bbdim', 'Bb-7', 'Bb-', 'Bbmin', 'Bb11', 'Bbsus', 'H+', 'Haug', 'H5', 'Hmaj', 'H69', 'H6\/9', 'H6', 'HM7', 'Hm7', 'Hma7', 'H13', 'H9', 'Hdom', 'H7', 'HM', 'Hm13', 'Hm11', 'Hm9', 'Hm6', 'Ho7', 'Hø', 'Hdim', 'H-7', 'H-', 'Hmin', 'H11', 'Hsus', 'H#+', 'H#aug', 'H#5', 'H#maj', 'H#69', 'H#6\/9', 'H#6', 'H#M7', 'H#m7', 'H#ma7', 'H#13', 'H#9', 'H#dom', 'H#7', 'H#m13', 'H#m11', 'H#m9', 'H#m6', 'H#M', 'H#o7', 'H#o', 'H#ø', 'H#dim', 'H#-7', 'H#-', 'H#min', 'H#11', 'H#sus', 'Hb+', 'Hbaug', 'Hb5', 'Hbmaj', 'Hb69', 'Hb6\/9', 'Hb6', 'HbM7', 'Hbm7', 'Hbma7', 'Hb13', 'Hb9', 'Hbdom', 'Hb7', 'Hbm13', 'Hbm11', 'Hbm9', 'Hbm6', 'Hbo7', 'Hbo', 'HbM', 'Hbø', 'Hbdim', 'Hb-7', 'Hb-', 'Hbmin', 'Hb11', 'Hbsus', 'C+', 'Caug', 'C5', 'Cmaj', 'C69', 'C6\/9', 'C6', 'CM7', 'Cm7', 'Cma7', 'C13', 'C9', 'Cdom', 'C7', 'CM', 'Cm13', 'Cm11', 'Cm9', 'Cm6', 'Co7', 'Cø', 'Cdim', 'C-7', 'C-', 'Cmin', 'C11', 'Csus', 'C#+', 'C#aug', 'C#5', 'C#maj', 'C#69', 'C#6\/9', 'C#6', 'C#M7', 'C#m7', 'C#ma7', 'C#13', 'C#9', 'C#dom', 'C#7', 'C#m13', 'C#m11', 'C#m9', 'C#m6', 'C#M', 'C#o7', 'C#o', 'C#ø', 'C#dim', 'C#-7', 'C#-', 'C#min', 'C#11', 'C#sus', 'Cb+', 'Cbaug', 'Cb5', 'Cbmaj', 'Cb69', 'Cb6\/9', 'Cb6', 'CbM7', 'Cbm7', 'Cbma7', 'Cb13', 'Cb9', 'Cbdom', 'Cb7', 'Cbm13', 'Cbm11', 'Cbm9', 'Cbm6', 'Cbo7', 'Cbo', 'CbM', 'Cbø', 'Cbdim', 'Cb-7', 'Cb-', 'Cbmin', 'Cb11', 'Cbsus', 'D+', 'Daug', 'D5', 'Dmaj', 'D69', 'D6\/9', 'D6', 'DM7', 'Dm7', 'Dma7', 'D13', 'D9', 'Ddom', 'D7', 'DM', 'Dm13', 'Dm11', 'Dm9', 'Dm6', 'Do7', 'Ddim', 'D-7', 'D-', 'Dmin', 'D11', 'Dsus', 'D#+', 'D#aug', 'D#5', 'D#maj', 'D#69', 'D#6\/9', 'D#6', 'D#M7', 'D#m7', 'D#ma7', 'D#13', 'D#9', 'D#dom', 'D#7', 'D#m13', 'D#m11', 'D#m9', 'D#m6', 'D#M', 'D#o7', 'D#o', 'D#ø', 'D#dim', 'D#-7', 'D#-', 'D#min', 'D#11', 'D#sus', 'Db+', 'Dbaug', 'Db5', 'Dbmaj', 'Db69', 'Db6\/9', 'Db6', 'DbM7', 'Dbm7', 'Dbma7', 'Db13', 'Db9', 'Dbdom', 'Db7', 'Dbm13', 'Dbm11', 'Dbm9', 'Dbm6', 'Dbo7', 'Dbo', 'DbM', 'Dbø', 'Dbdim', 'Db-7', 'Db-', 'Dbmin', 'Db11', 'Dbsus', 'E+', 'Eaug', 'E5', 'Emaj', 'E69', 'E6\/9', 'E6', 'EM7', 'Em7', 'Ema7', 'E13', 'E9', 'Edom', 'E7', 'EM', 'Em13', 'Em11', 'Em9', 'Em6', 'Eo7', 'Eo', 'Eø', 'Edim', 'E-7', 'E-', 'Emin', 'E11', 'Esus', 'E#+', 'E#aug', 'E#5', 'E#maj', 'E#69', 'E#6\/9', 'E#6', 'E#M7', 'E#m7', 'E#ma7', 'E#13', 'E#9', 'E#dom', 'E#7', 'E#m13', 'E#m11', 'E#m9', 'E#m6', 'E#M', 'E#o7', 'E#o', 'E#ø', 'E#dim', 'E#-7', 'E#-', 'E#min', 'E#11', 'E#sus', 'Eb+', 'Ebaug', 'Eb5', 'Ebmaj', 'Eb69', 'Eb6\/9', 'Eb6', 'EbM7', 'Ebm7', 'Ebma7', 'Eb13', 'Eb9', 'Ebdom', 'Eb7', 'Ebm13', 'Ebm11', 'Ebm9', 'Ebm6', 'Ebo7', 'Ebo', 'EbM', 'Ebø', 'Ebdim', 'Eb-7', 'Eb-', 'Ebmin', 'Eb11', 'Ebsus', 'F+', 'Faug', 'F5', 'Fmaj', 'F69', 'F6\/9', 'F6', 'FM7', 'Fm7', 'Fma7', 'F13', 'F9', 'Fdom', 'F7', 'FM', 'Fm13', 'Fm11', 'Fm9', 'Fm6', 'Fo7', 'Fdim', 'F-7', 'F-', 'Fmin', 'F11', 'Fsus', 'F#+', 'F#aug', 'F#5', 'F#maj', 'F#69', 'F#6\/9', 'F#6', 'F#M7', 'F#m7', 'F#ma7', 'F#13', 'F#9', 'F#dom', 'F#7', 'F#m13', 'F#m11', 'F#m9', 'F#m6', 'F#M', 'F#o7', 'F#o', 'F#ø', 'F#dim', 'F#-7', 'F#-', 'F#min', 'F#11', 'F#sus', 'Fb+', 'Fbaug', 'Fb5', 'Fbmaj', 'Fb69', 'Fb6\/9', 'Fb6', 'FbM7', 'Fbm7', 'Fbma7', 'Fb13', 'Fb9', 'Fbdom', 'Fb7', 'Fbm13', 'Fbm11', 'Fbm9', 'Fbm6', 'Fbo7', 'Fbo', 'FbM', 'Fbø', 'Fbdim', 'Fb-7', 'Fb-', 'Fbmin', 'Fb11', 'Fbsus', 'G+', 'Gaug', 'G5', 'Gmaj', 'G69', 'G6\/9', 'G6', 'GM7', 'Gm7', 'Gma7', 'G13', 'G9', 'Gdom', 'G7', 'GM', 'Gm13', 'Gm11', 'Gm9', 'Gm6', 'Go7', 'Gdim', 'G-7', 'G-', 'Gmin', 'G11', 'Gsus', 'G#+', 'G#aug', 'G#5', 'G#maj', 'G#69', 'G#6\/9', 'G#6', 'G#M7', 'G#m7', 'G#ma7', 'G#13', 'G#9', 'G#dom', 'G#7', 'G#m13', 'G#m11', 'G#m9', 'G#m6', 'G#M', 'G#o7', 'G#o', 'G#ø', 'G#dim', 'G#-7', 'G#-', 'G#min', 'G#11', 'G#sus', 'Gb+', 'Gbaug', 'Gb5', 'Gbmaj', 'Gb69', 'Gb6\/9', 'Gb6', 'GbM7', 'Gbm7', 'Gbma7', 'Gb13', 'Gb9', 'Gbdom', 'Gb7', 'Gbm13', 'Gbm11', 'Gbm9', 'Gbm6', 'Gbo7', 'Gbo', 'GbM', 'Gbø', 'Gbdim', 'Gb-7', 'Gb-', 'Gbmin', 'Gb11', 'Gbsus', 'A#m', 'B#m', 'H#m', 'C#m', 'D#m', 'E#m', 'F#m', 'G#m', 'A#', 'B#', 'H#', 'C#', 'D#', 'E#', 'F#', 'G#', 'N.C.', 'A*', 'B*', 'C*', 'D*', 'E*', 'F*', 'G*', 'H*', 'Ab*', 'Bb*', 'Cb*', 'Db*', 'Eb*', 'Fb*', 'Gb*', 'Hb*', 'A#*', 'B#*', 'C#*', 'D#*', 'E#*', 'F#*', 'G#*', 'H#*'], {
    caseSensitive: true
  });
  $('.text').highlight(['Fo', 'Fø', 'Go', 'Gø', 'Bo', 'Bø', 'Do', 'Dø', 'Ho', 'Abo', 'Co', 'Abm', 'Bbm', 'Hbm', 'Cbm', 'Dbm', 'Ebm', 'Fbm', 'Gbm', 'Ab', 'Bb', 'Hb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Am', 'Bm', 'Hm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm', 'A', 'B', 'H', 'C', 'D', 'E', 'F', 'G'], {
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
  $('.text').html(function (index, html) {
    return html
      .replace(/<\/span><span class=\"highlight\">/g, '')
      .replace(/andreaslarsendk/g, '|');
  });
}
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



// FULLSCREEN

function errorHandler() {
  "use strict";
  alert('mozfullscreenerror');
}
document.documentElement.addEventListener('mozfullscreenerror', errorHandler, false);

function toggleFullScreen() {
  "use strict";
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      $("body").addClass("wow");
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      $("body").addClass("wow");
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      $("body").addClass("wow");
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      $("body").removeClass("wow");
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      $("body").removeClass("wow");
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      $("body").removeClass("wow");
      document.webkitCancelFullScreen();
    }
  }
}


// COLUMN

// version 1.6.0
// http://welcome.totheinter.net/columnizer-jquery-plugin/
// created by: Adam Wulf @adamwulf, adam.wulf@gmail.com

(function($){

 $.fn.columnize = function(options) {


  var defaults = {
    // default width of columns
    width: 400,
    // optional # of columns instead of width
    columns : false,
    // true to build columns once regardless of window resize
    // false to rebuild when content box changes bounds
    buildOnce : false,
    // an object with options if the text should overflow
    // it's container if it can't fit within a specified height
    overflow : false,
    // this function is called after content is columnized
    doneFunc : function(){},
    // if the content should be columnized into a
    // container node other than it's own node
    target : false,
    // re-columnizing when images reload might make things
    // run slow. so flip this to true if it's causing delays
    ignoreImageLoading : true,
    // should columns float left or right
    columnFloat : "left",
    // ensure the last column is never the tallest column
    lastNeverTallest : false,
    // (int) the minimum number of characters to jump when splitting
    // text nodes. smaller numbers will result in higher accuracy
    // column widths, but will take slightly longer
    accuracy : false,
    // don't automatically layout columns, only use manual columnbreak
    manualBreaks : false,
    // previx for all the CSS classes used by this plugin
    // default to empty string for backwards compatibility
    cssClassPrefix : ""
  };
  options = $.extend(defaults, options);

  if(typeof(options.width) == "string"){
    options.width = parseInt(options.width,10);
    if(isNaN(options.width)){
      options.width = defaults.width;
    }
  }

    return this.each(function() {
    var $inBox = options.target ? $(options.target) : $(this);
    var maxHeight = $(this).height();
    var $cache = $('<div></div>'); // this is where we'll put the real content
    var lastWidth = 0;
    var columnizing = false;
    var manualBreaks = options.manualBreaks;
    var cssClassPrefix = defaults.cssClassPrefix;
    if(typeof(options.cssClassPrefix) == "string"){
      cssClassPrefix = options.cssClassPrefix;
    }


    var adjustment = 0;

    $cache.append($(this).contents().clone(true));

    // images loading after dom load
    // can screw up the column heights,
    // so recolumnize after images load
    if(!options.ignoreImageLoading && !options.target){
      if(!$inBox.data("imageLoaded")){
        $inBox.data("imageLoaded", true);
        if($(this).find("img").length > 0){
          // only bother if there are
          // actually images...
          var func = function($inBox,$cache){ return function(){
              if(!$inBox.data("firstImageLoaded")){
                $inBox.data("firstImageLoaded", "true");
                $inBox.empty().append($cache.children().clone(true));
                $inBox.columnize(options);
              }
            };
          }($(this), $cache);
          $(this).find("img").one("load", func);
          $(this).find("img").one("abort", func);
          return;
        }
      }
    }

    $inBox.empty();

    columnizeIt();

    if(!options.buildOnce){
      $(window).resize(function() {
        if(!options.buildOnce){
          if($inBox.data("timeout")){
            clearTimeout($inBox.data("timeout"));
          }
          $inBox.data("timeout", setTimeout(columnizeIt, 200));
        }
      });
    }

    function prefixTheClassName(className, withDot){
      var dot = withDot ? "." : "";
      if(cssClassPrefix.length){
        return dot + cssClassPrefix + "-" + className;
      }
      return dot + className;
    }

    /**
     * this fuction builds as much of a column as it can without
     * splitting nodes in half. If the last node in the new column
     * is a text node, then it will try to split that text node. otherwise
     * it will leave the node in $pullOutHere and return with a height
     * smaller than targetHeight.
     *
         * Returns a boolean on whether we did some splitting successfully at a text point
         * (so we know we don't need to split a real element). return false if the caller should
         * split a node if possible to end this column.
     *
     * @param putInHere, the jquery node to put elements into for the current column
     * @param $pullOutHere, the jquery node to pull elements out of (uncolumnized html)
     * @param $parentColumn, the jquery node for the currently column that's being added to
     * @param targetHeight, the ideal height for the column, get as close as we can to this height
     */
    function columnize($putInHere, $pullOutHere, $parentColumn, targetHeight){
      //
      // add as many nodes to the column as we can,
      // but stop once our height is too tall
      while((manualBreaks || $parentColumn.height() < targetHeight) &&
        $pullOutHere[0].childNodes.length){
        var node = $pullOutHere[0].childNodes[0];
        //
        // Because we're not cloning, jquery will actually move the element"
        // http://welcome.totheinter.net/2009/03/19/the-undocumented-life-of-jquerys-append/
        if($(node).find(prefixTheClassName("columnbreak", true)).length){
          //
          // our column is on a column break, so just end here
          return;
        }
        if($(node).hasClass(prefixTheClassName("columnbreak"))){
          //
          // our column is on a column break, so just end here
          return;
        }
        $putInHere.append(node);
      }
      if($putInHere[0].childNodes.length === 0) return;

      // now we're too tall, so undo the last one
      var kids = $putInHere[0].childNodes;
      var lastKid = kids[kids.length-1];
      $putInHere[0].removeChild(lastKid);
      var $item = $(lastKid);

      // now lets try to split that last node
      // to fit as much of it as we can into this column
      if($item[0].nodeType == 3){
        // it's a text node, split it up
        var oText = $item[0].nodeValue;
        var counter2 = options.width / 18;
        if(options.accuracy)
        counter2 = options.accuracy;
        var columnText;
        var latestTextNode = null;
        while($parentColumn.height() < targetHeight && oText.length){
          var indexOfSpace = oText.indexOf(' ', counter2);
          if (indexOfSpace != -1) {
            columnText = oText.substring(0, oText.indexOf(' ', counter2));
          } else {
            columnText = oText;
          }
          latestTextNode = document.createTextNode(columnText);
          $putInHere.append(latestTextNode);

          if(oText.length > counter2 && indexOfSpace != -1){
            oText = oText.substring(indexOfSpace);
          }else{
            oText = "";
          }
        }
        if($parentColumn.height() >= targetHeight && latestTextNode !== null){
          // too tall :(
          $putInHere[0].removeChild(latestTextNode);
          oText = latestTextNode.nodeValue + oText;
        }
        if(oText.length){
          $item[0].nodeValue = oText;
        }else{
          return false; // we ate the whole text node, move on to the next node
        }
      }

      if($pullOutHere.contents().length){
        $pullOutHere.prepend($item);
      }else{
        $pullOutHere.append($item);
      }

      return $item[0].nodeType == 3;
    }

    /**
     * Split up an element, which is more complex than splitting text. We need to create
     * two copies of the element with it's contents divided between each
     */
    function split($putInHere, $pullOutHere, $parentColumn, targetHeight){
      if($putInHere.contents(":last").find(prefixTheClassName("columnbreak", true)).length){
        //
        // our column is on a column break, so just end here
        return;
      }
      if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){
        //
        // our column is on a column break, so just end here
        return;
      }
      if($pullOutHere.contents().length){
        var $cloneMe = $pullOutHere.contents(":first");
        //
        // make sure we're splitting an element
        if($cloneMe.get(0).nodeType != 1) return;

        //
        // clone the node with all data and events
        var $clone = $cloneMe.clone(true);
        //
        // need to support both .prop and .attr if .prop doesn't exist.
        // this is for backwards compatibility with older versions of jquery.
        if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){
          //
          // ok, we have a columnbreak, so add it into
          // the column and exit
          $putInHere.append($clone);
          $cloneMe.remove();
        }else if (manualBreaks){
          // keep adding until we hit a manual break
          $putInHere.append($clone);
          $cloneMe.remove();
        }else if($clone.get(0).nodeType == 1 && !$clone.hasClass(prefixTheClassName("dontend"))){
          $putInHere.append($clone);
          if($clone.is("img") && $parentColumn.height() < targetHeight + 20){
            //
            // we can't split an img in half, so just add it
            // to the column and remove it from the pullOutHere section
            $cloneMe.remove();
          }else if(!$cloneMe.hasClass(prefixTheClassName("dontsplit")) && $parentColumn.height() < targetHeight + 20){
            //
            // pretty close fit, and we're not allowed to split it, so just
            // add it to the column, remove from pullOutHere, and be done
            $cloneMe.remove();
          }else if($clone.is("img") || $cloneMe.hasClass(prefixTheClassName("dontsplit"))){
            //
            // it's either an image that's too tall, or an unsplittable node
            // that's too tall. leave it in the pullOutHere and we'll add it to the
            // next column
            $clone.remove();
          }else{
            //
            // ok, we're allowed to split the node in half, so empty out
            // the node in the column we're building, and start splitting
            // it in half, leaving some of it in pullOutHere
            $clone.empty();
            if(!columnize($clone, $cloneMe, $parentColumn, targetHeight)){
              // this node still has non-text nodes to split
              // add the split class and then recur
              $cloneMe.addClass(prefixTheClassName("split"));
              if($cloneMe.children().length){
                split($clone, $cloneMe, $parentColumn, targetHeight);
              }
            }else{
              // this node only has text node children left, add the
              // split class and move on.
              $cloneMe.addClass(prefixTheClassName("split"));
            }
            if($clone.get(0).childNodes.length === 0){
              // it was split, but nothing is in it :(
              $clone.remove();
            }
          }
        }
      }
    }


    function singleColumnizeIt() {
      if ($inBox.data("columnized") && $inBox.children().length == 1) {
        return;
      }
      $inBox.data("columnized", true);
      $inBox.data("columnizing", true);

      $inBox.empty();
      $inBox.append($("<div class='"
        + prefixTheClassName("first") + " "
        + prefixTheClassName("last") + " "
        + prefixTheClassName("column") + " "
        + "' style='width:100%; float: " + options.columnFloat + ";'></div>")); //"
      $col = $inBox.children().eq($inBox.children().length-1);
      $destroyable = $cache.clone(true);
      if(options.overflow){
        targetHeight = options.overflow.height;
        columnize($col, $destroyable, $col, targetHeight);
        // make sure that the last item in the column isn't a "dontend"
        if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){
          split($col, $destroyable, $col, targetHeight);
        }

        while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
          var $lastKid = $col.contents(":last");
          $lastKid.remove();
          $destroyable.prepend($lastKid);
        }

        var html = "";
        var div = document.createElement('DIV');
        while($destroyable[0].childNodes.length > 0){
          var kid = $destroyable[0].childNodes[0];
          if(kid.attributes){
            for(var i=0;i<kid.attributes.length;i++){
              if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
                kid.removeAttribute(kid.attributes[i].nodeName);
              }
            }
          }
          div.innerHTML = "";
          div.appendChild($destroyable[0].childNodes[0]);
          html += div.innerHTML;
        }
        var overflow = $(options.overflow.id)[0];
        overflow.innerHTML = html;

      }else{
        $col.append($destroyable);
      }
      $inBox.data("columnizing", false);

      if(options.overflow && options.overflow.doneFunc){
        options.overflow.doneFunc();
      }

    }

    /**
     * returns true if the input dom node
     * should not end a column.
     * returns false otherwise
     */
    function checkDontEndColumn(dom){
      if(dom.nodeType == 3){
        // text node. ensure that the text
        // is not 100% whitespace
        if(/^\s+$/.test(dom.nodeValue)){
            //
            // ok, it's 100% whitespace,
            // so we should return checkDontEndColumn
            // of the inputs previousSibling
            if(!dom.previousSibling) return false;
          return checkDontEndColumn(dom.previousSibling);
        }
        return false;
      }
      if(dom.nodeType != 1) return false;
      if($(dom).hasClass(prefixTheClassName("dontend"))) return true;
      if(dom.childNodes.length === 0) return false;
      return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1]);
    }

    function columnizeIt() {
      //reset adjustment var
      adjustment = 0;
      if(lastWidth == $inBox.width()) return;
      lastWidth = $inBox.width();

      var numCols = Math.round($inBox.width() / options.width);
      var optionWidth = options.width;
      var optionHeight = options.height;
      if(options.columns) numCols = options.columns;
      if(manualBreaks){
        numCols = $cache.find(prefixTheClassName("columnbreak", true)).length + 1;
        optionWidth = false;
      }

//			if ($inBox.data("columnized") && numCols == $inBox.children().length) {
//				return;
//			}
      if(numCols <= 1){
        return singleColumnizeIt();
      }
      if($inBox.data("columnizing")) return;
      $inBox.data("columnized", true);
      $inBox.data("columnizing", true);

      $inBox.empty();
      $inBox.append($("<div style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
      $col = $inBox.children(":last");
      $col.append($cache.clone());
      maxHeight = $col.height();
      $inBox.empty();

      var targetHeight = maxHeight / numCols;
      var firstTime = true;
      var maxLoops = 3;
      var scrollHorizontally = false;
      if(options.overflow){
        maxLoops = 1;
        targetHeight = options.overflow.height;
      }else if(optionHeight && optionWidth){
        maxLoops = 1;
        targetHeight = optionHeight;
        scrollHorizontally = true;
      }

      //
      // We loop as we try and workout a good height to use. We know it initially as an average
      // but if the last column is higher than the first ones (which can happen, depending on split
      // points) we need to raise 'adjustment'. We try this over a few iterations until we're 'solid'.
      //
      // also, lets hard code the max loops to 20. that's /a lot/ of loops for columnizer,
      // and should keep run aways in check. if somehow someone has content combined with
      // options that would cause an infinite loop, then this'll definitely stop it.
      for(var loopCount=0;loopCount<maxLoops && loopCount<20;loopCount++){
        $inBox.empty();
        var $destroyable, className, $col, $lastKid;
        try{
          $destroyable = $cache.clone(true);
        }catch(e){
          // jquery in ie6 can't clone with true
          $destroyable = $cache.clone();
        }
        $destroyable.css("visibility", "hidden");
        // create the columns
        for (var i = 0; i < numCols; i++) {
          /* create column */
          className = (i === 0) ? prefixTheClassName("first") : "";
          className += " " + prefixTheClassName("column");
          className = (i == numCols - 1) ? (prefixTheClassName("last") + " " + className) : className;
          $inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
        }

        // fill all but the last column (unless overflowing)
        i = 0;
        while(i < numCols - (options.overflow ? 0 : 1) || scrollHorizontally && $destroyable.contents().length){
          if($inBox.children().length <= i){
            // we ran out of columns, make another
            $inBox.append($("<div class='" + className + "' style='width:" + (Math.floor(100 / numCols))+ "%; float: " + options.columnFloat + ";'></div>")); //"
          }
          $col = $inBox.children().eq(i);
          if(scrollHorizontally){
            $col.width(optionWidth + "px");
          }
          columnize($col, $destroyable, $col, targetHeight);
          // make sure that the last item in the column isn't a "dontend"
          split($col, $destroyable, $col, targetHeight);

          while($col.contents(":last").length && checkDontEndColumn($col.contents(":last").get(0))){
            $lastKid = $col.contents(":last");
            $lastKid.remove();
            $destroyable.prepend($lastKid);
          }
          i++;

          //
          // https://github.com/adamwulf/Columnizer-jQuery-Plugin/issues/47
          //
          // check for infinite loop.
          //
          // this could happen when a dontsplit or dontend item is taller than the column
          // we're trying to build, and its never actually added to a column.
          //
          // this results in empty columns being added with the dontsplit item
          // perpetually waiting to get put into a column. lets force the issue here
          if($col.contents().length === 0 && $destroyable.contents().length){
            //
            // ok, we're building zero content columns. this'll happen forever
            // since nothing can ever get taken out of destroyable.
            //
            // to fix, lets put 1 item from destroyable into the empty column
            // before we iterate
            $col.append($destroyable.contents(":first"));
          }else if(i == numCols - (options.overflow ? 0 : 1) && !options.overflow){
            //
            // ok, we're about to exit the while loop because we're done with all
            // columns except the last column.
            //
            // if $destroyable still has columnbreak nodes in it, then we need to keep
            // looping and creating more columns.
            if($destroyable.find(prefixTheClassName("columnbreak", true)).length){
              numCols ++;
            }
          }
        }
        if(options.overflow && !scrollHorizontally){
          var IE6 = false /*@cc_on || @_jscript_version < 5.7 @*/;
          var IE7 = (document.all) && (navigator.appVersion.indexOf("MSIE 7.") != -1);
          if(IE6 || IE7){
            var html = "";
            var div = document.createElement('DIV');
            while($destroyable[0].childNodes.length > 0){
              var kid = $destroyable[0].childNodes[0];
              for(i=0;i<kid.attributes.length;i++){
                if(kid.attributes[i].nodeName.indexOf("jQuery") === 0){
                  kid.removeAttribute(kid.attributes[i].nodeName);
                }
              }
              div.innerHTML = "";
              div.appendChild($destroyable[0].childNodes[0]);
              html += div.innerHTML;
            }
            var overflow = $(options.overflow.id)[0];
            overflow.innerHTML = html;
          }else{
            $(options.overflow.id).empty().append($destroyable.contents().clone(true));
          }
        }else if(!scrollHorizontally){
          // the last column in the series
          $col = $inBox.children().eq($inBox.children().length-1);
          $destroyable.contents().each( function() {
            $col.append( $(this) );
          });
          var afterH = $col.height();
          var diff = afterH - targetHeight;
          var totalH = 0;
          var min = 10000000;
          var max = 0;
          var lastIsMax = false;
          var numberOfColumnsThatDontEndInAColumnBreak = 0;
          $inBox.children().each(function($inBox){ return function($item){
            var $col = $inBox.children().eq($item);
            var endsInBreak = $col.children(":last").find(prefixTheClassName("columnbreak", true)).length;
            if(!endsInBreak){
              var h = $col.height();
              lastIsMax = false;
              totalH += h;
              if(h > max) {
                max = h;
                lastIsMax = true;
              }
              if(h < min) min = h;
              numberOfColumnsThatDontEndInAColumnBreak++;
            }
          };
        }($inBox));

          var avgH = totalH / numberOfColumnsThatDontEndInAColumnBreak;
          if(totalH === 0){
            //
            // all columns end in a column break,
            // so we're done here
            loopCount = maxLoops;
          }else if(options.lastNeverTallest && lastIsMax){
            // the last column is the tallest
            // so allow columns to be taller
            // and retry
            //
            // hopefully this'll mean more content fits into
            // earlier columns, so that the last column
            // can be shorter than the rest
            adjustment += 30;

            targetHeight = targetHeight + 30;
            if(loopCount == maxLoops-1) maxLoops++;
          }else if(max - min > 30){
            // too much variation, try again
            targetHeight = avgH + 30;
          }else if(Math.abs(avgH-targetHeight) > 20){
            // too much variation, try again
            targetHeight = avgH;
          }else {
            // solid, we're done
            loopCount = maxLoops;
          }
        }else{
          // it's scrolling horizontally, fix the width/classes of the columns
          $inBox.children().each(function(i){
            $col = $inBox.children().eq(i);
            $col.width(optionWidth + "px");
            if(i === 0){
              $col.addClass(prefixTheClassName("first"));
            }else if(i==$inBox.children().length-1){
              $col.addClass(prefixTheClassName("last"));
            }else{
              $col.removeClass(prefixTheClassName("first"));
              $col.removeClass(prefixTheClassName("last"));
            }
          });
          $inBox.width($inBox.children().length * optionWidth + "px");
        }
        $inBox.append($("<br style='clear:both;'>"));
      }
      $inBox.find(prefixTheClassName("column", true)).find(":first" + prefixTheClassName("removeiffirst", true)).remove();
      $inBox.find(prefixTheClassName("column", true)).find(':last' + prefixTheClassName("removeiflast", true)).remove();
      $inBox.data("columnizing", false);

      if(options.overflow){
        options.overflow.doneFunc();
      }
      options.doneFunc();
    }
    });
 };
})(jQuery);


// Bigtext
(function(window, $) {
  "use strict";

  var counter = 0,
    $headCache = $('head'),
    oldBigText = window.BigText,
    oldjQueryMethod = $.fn.bigtext,
    BigText = {
      DEBUG_MODE: false,
      DEFAULT_MIN_FONT_SIZE_PX: null,
      DEFAULT_MAX_FONT_SIZE_PX: 528,
      GLOBAL_STYLE_ID: 'bigtext-style',
      STYLE_ID: 'bigtext-id',
      LINE_CLASS_PREFIX: 'bigtext-line',
      EXEMPT_CLASS: 'bigtext-exempt',
      noConflict: function(restore)
      {
        if(restore) {
          $.fn.bigtext = oldjQueryMethod;
          window.BigText = oldBigText;
        }
        return BigText;
      },
      supports: {
        wholeNumberFontSizeOnly: (function() {
          if( !( 'getComputedStyle' in window ) ) {
            return true;
          }
          var test = $('<div/>').css({
              position: 'absolute',
              'font-size': '14.1px'
            }).insertBefore( $('script').eq(0) ),
            computedStyle = window.getComputedStyle( test[0], null );

          var ret = computedStyle && computedStyle.getPropertyValue( 'font-size' ) === '14px';
          test.remove();
          return ret;
        })()
      },
      init: function() {
        if(!$('#'+BigText.GLOBAL_STYLE_ID).length) {
          $headCache.append(BigText.generateStyleTag(BigText.GLOBAL_STYLE_ID, ['.bigtext * { white-space: nowrap; } .bigtext > * { display: block; }',
                                          '.bigtext .' + BigText.EXEMPT_CLASS + ', .bigtext .' + BigText.EXEMPT_CLASS + ' * { white-space: normal; }']));
        }
      },
      bindResize: function(eventName, resizeFunction) {
        var timeoutId;
        $(window).unbind(eventName).bind(eventName, function() {
          if( timeoutId ) {
            clearTimeout( timeoutId );
          }
          timeoutId = setTimeout( resizeFunction, 100 );
        });
      },
      getStyleId: function(id)
      {
        return BigText.STYLE_ID + '-' + id;
      },
      generateStyleTag: function(id, css)
      {
        return $('<style>' + css.join('\n') + '</style>').attr('id', id);
      },
      clearCss: function(id)
      {
        var styleId = BigText.getStyleId(id);
        $('#' + styleId).remove();
      },
      generateCss: function(id, linesFontSizes, lineWordSpacings, minFontSizes)
      {
        var css = [];

        BigText.clearCss(id);

        for(var j=0, k=linesFontSizes.length; j<k; j++) {
          css.push('#' + id + ' .' + BigText.LINE_CLASS_PREFIX + j + ' {' +
            (minFontSizes[j] ? ' white-space: normal;' : '') +
            (linesFontSizes[j] ? ' font-size: ' + linesFontSizes[j] + 'px;' : '') +
            (lineWordSpacings[j] ? ' word-spacing: ' + lineWordSpacings[j] + 'px;' : '') +
            '}');
        }

        return BigText.generateStyleTag(BigText.getStyleId(id), css);
      },
      jQueryMethod: function(options)
      {
        BigText.init();

        options = $.extend({
          minfontsize: BigText.DEFAULT_MIN_FONT_SIZE_PX,
          maxfontsize: BigText.DEFAULT_MAX_FONT_SIZE_PX,
          childSelector: '',
          resize: true
        }, options || {});

        this.each(function()
        {
          var $t = $(this).addClass('bigtext'),
            maxWidth = $t.width(),
            id = $t.attr('id'),
            $children = options.childSelector ? $t.find( options.childSelector ) : $t.children();

          if(!id) {
            id = 'bigtext-id' + (counter++);
            $t.attr('id', id);
          }

          if(options.resize) {
            BigText.bindResize('resize.bigtext-event-' + id, function()
            {
              // TODO only call this if the width has changed.
              BigText.jQueryMethod.call($('#' + id), options);
            });
          }

          BigText.clearCss(id);

          $children.addClass(function(lineNumber, className)
          {
            // remove existing line classes.
            return [className.replace(new RegExp('\\b' + BigText.LINE_CLASS_PREFIX + '\\d+\\b'), ''),
                BigText.LINE_CLASS_PREFIX + lineNumber].join(' ');
          });

          var sizes = calculateSizes($t, $children, maxWidth, options.maxfontsize, options.minfontsize);
          $headCache.append(BigText.generateCss(id, sizes.fontSizes, sizes.wordSpacings, sizes.minFontSizes));
        });

        return this.trigger('bigtext:complete');
      }
    };

  function testLineDimensions($line, maxWidth, property, size, interval, units, previousWidth)
  {
    var width;
    previousWidth = typeof previousWidth === 'number' ? previousWidth : 0;
    $line.css(property, size + units);

    width = $line.width();

    if(width >= maxWidth) {
// console.log(width, ' previous: ' + previousWidth, property + ' at ' + interval, 'prior: ' + (parseFloat(size) - interval), 'new:' + parseFloat(size));
      $line.css(property, '');

      if(width === maxWidth) {
        return {
          match: 'exact',
          size: parseFloat((parseFloat(size) - 0.1).toFixed(3))
        };
      }

      // Since this is an estimate, we calculate how far over the width we went with the new value.
      // If this is word-spacing (our last resort guess) and the over is less than the under, we keep the higher value.
      // Otherwise, we revert to the underestimate.
      var under = maxWidth - previousWidth,
        over = width - maxWidth;

      return {
        match: 'estimate',
        size: parseFloat((parseFloat(size) - (property === 'word-spacing' && previousWidth && ( over < under ) ? 0 : interval)).toFixed(3))
      };
    }

    return width;
  }

  function calculateSizes($t, $children, maxWidth, maxFontSize, minFontSize)
  {
    var $c = $t.clone(true)
      .addClass('bigtext-cloned')
      .css({
        fontFamily: $t.css('font-family'),
        textTransform: $t.css('text-transform'),
        wordSpacing: $t.css('word-spacing'),
        letterSpacing: $t.css('letter-spacing'),
        position: 'absolute',
        left: BigText.DEBUG_MODE ? 0 : -9999,
        top: BigText.DEBUG_MODE ? 0 : -9999
      })
      .appendTo(document.body);

    // font-size isn't the only thing we can modify, we can also mess with:
    // word-spacing and letter-spacing. WebKit does not respect subpixel
    // letter-spacing, word-spacing, or font-size.
    // TODO try -webkit-transform: scale() as a workaround.
    var fontSizes = [],
      wordSpacings = [],
      minFontSizes = [],
      ratios = [];

    $children.css('float', 'left').each(function() {
      var $line = $(this),
        // TODO replace 8, 4 with a proportional size to the calculated font-size.
        intervals = BigText.supports.wholeNumberFontSizeOnly ? [8, 4, 1] : [8, 4, 1, 0.1],
        lineMax,
        newFontSize;

      if($line.hasClass(BigText.EXEMPT_CLASS)) {
        fontSizes.push(null);
        ratios.push(null);
        minFontSizes.push(false);
        return;
      }

      // TODO we can cache this ratio?
      var autoGuessSubtraction = 32, // font size in px
        currentFontSize = parseFloat($line.css('font-size')),
        ratio = ( $line.width() / currentFontSize ).toFixed(6);

      newFontSize = parseInt( maxWidth / ratio, 10 ) - autoGuessSubtraction;

      outer: for(var m=0, n=intervals.length; m<n; m++) {
        inner: for(var j=1, k=10; j<=k; j++) {
          if(newFontSize + j*intervals[m] > maxFontSize) {
            newFontSize = maxFontSize;
            break outer;
          }

          lineMax = testLineDimensions($line, maxWidth, 'font-size', newFontSize + j*intervals[m], intervals[m], 'px', lineMax);
          if(typeof lineMax !== 'number') {
            newFontSize = lineMax.size;

            if(lineMax.match === 'exact') {
              break outer;
            }
            break inner;
          }
        }
      }

      ratios.push(maxWidth / newFontSize);

      if(newFontSize > maxFontSize) {
        fontSizes.push(maxFontSize);
        minFontSizes.push(false);
      } else if(!!minFontSize && newFontSize < minFontSize) {
        fontSizes.push(minFontSize);
        minFontSizes.push(true);
      } else {
        fontSizes.push(newFontSize);
        minFontSizes.push(false);
      }
    }).each(function(lineNumber) {
      var $line = $(this),
        wordSpacing = 0,
        interval = 1,
        maxWordSpacing;

      if($line.hasClass(BigText.EXEMPT_CLASS)) {
        wordSpacings.push(null);
        return;
      }

      // must re-use font-size, even though it was removed above.
      $line.css('font-size', fontSizes[lineNumber] + 'px');

      for(var m=1, n=3; m<n; m+=interval) {
        maxWordSpacing = testLineDimensions($line, maxWidth, 'word-spacing', m, interval, 'px', maxWordSpacing);
        if(typeof maxWordSpacing !== 'number') {
          wordSpacing = maxWordSpacing.size;
          break;
        }
      }

      $line.css('font-size', '');
      wordSpacings.push(wordSpacing);
    }).removeAttr('style');

    if( !BigText.DEBUG_MODE ) {
      $c.remove();
    } else {
      $c.css({
        'background-color': 'rgba(255,255,255,.4)'
      });
    }

    return {
      fontSizes: fontSizes,
      wordSpacings: wordSpacings,
      ratios: ratios,
      minFontSizes: minFontSizes
    };
  }

  $.fn.bigtext = BigText.jQueryMethod;
  window.BigText = BigText;

})(this, jQuery);


// COLOR
!function(e){"use strict";var t=function(e,t){this.init("simplecolorpicker",e,t)};t.prototype={constructor:t,init:function(t,o,i){var s=this;if(s.type=t,s.$select=e(o),s.$select.hide(),s.options=e.extend({},e.fn.simplecolorpicker.defaults,i),s.$colorList=null,s.options.picker===!0){var c=s.$select.find("> option:selected").text();s.$icon=e('<span class="simplecolorpicker icon" title="'+c+'" style="background-color: '+s.$select.val()+';" role="button" tabindex="0"></span>').insertAfter(s.$select),s.$icon.on("click."+s.type,e.proxy(s.showPicker,s)),s.$picker=e('<span class="simplecolorpicker picker '+s.options.theme+'"></span>').appendTo(document.body),s.$colorList=s.$picker,e(document).on("mousedown."+s.type,e.proxy(s.hidePicker,s)),s.$picker.on("mousedown."+s.type,e.proxy(s.mousedown,s))}else s.$inline=e('<span class="simplecolorpicker inline '+s.options.theme+'"></span>').insertAfter(s.$select),s.$colorList=s.$inline;s.$select.find("> option").each(function(){var t=e(this),o=t.val(),i=t.is(":selected"),c=t.is(":disabled"),r="";i===!0&&(r=" data-selected");var n="";c===!0&&(n=" data-disabled");var l="";c===!1&&(l=' title="'+t.text()+'"');var p="";c===!1&&(p=' role="button" tabindex="0"');var a=e('<span class="color"'+l+' style="background-color: '+o+';" data-color="'+o+'"'+r+n+p+"></span>");s.$colorList.append(a),a.on("click."+s.type,e.proxy(s.colorSpanClicked,s));var d=t.next();d.is("optgroup")===!0&&s.$colorList.append('<span class="vr"></span>')})},selectColor:function(t){var o=this,i=o.$colorList.find("> span.color").filter(function(){return e(this).data("color").toLowerCase()===t.toLowerCase()});i.length>0?o.selectColorSpan(i):console.error("The given color '"+t+"' could not be found")},showPicker:function(){var e=this.$icon.offset();this.$picker.css({left:e.left-6,top:e.top+this.$icon.outerHeight()}),this.$picker.show(this.options.pickerDelay)},hidePicker:function(){this.$picker.hide(this.options.pickerDelay)},selectColorSpan:function(e){var t=e.data("color"),o=e.prop("title");e.siblings().removeAttr("data-selected"),e.attr("data-selected",""),this.options.picker===!0&&(this.$icon.css("background-color",t),this.$icon.prop("title",o),this.hidePicker()),this.$select.val(t)},colorSpanClicked:function(t){e(t.target).is("[data-disabled]")===!1&&(this.selectColorSpan(e(t.target)),this.$select.trigger("change"))},mousedown:function(e){e.stopPropagation(),e.preventDefault()},destroy:function(){this.options.picker===!0&&(this.$icon.off("."+this.type),this.$icon.remove(),e(document).off("."+this.type)),this.$colorList.off("."+this.type),this.$colorList.remove(),this.$select.removeData(this.type),this.$select.show()}},e.fn.simplecolorpicker=function(o){var i=e.makeArray(arguments);return i.shift(),this.each(function(){var s=e(this),c=s.data("simplecolorpicker"),r="object"==typeof o&&o;void 0===c&&s.data("simplecolorpicker",c=new t(this,r)),"string"==typeof o&&c[o].apply(c,i)})},e.fn.simplecolorpicker.defaults={theme:"",picker:!1,pickerDelay:0}}(jQuery);
