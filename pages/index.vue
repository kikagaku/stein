<template>
  <div>
    <page-header />
    <first-view />
    <concept />
    <speakers />
    <time-table />
    <time-table-sp />
    <attention />
    <booth-sponsor />
    <member />
    <overview />
    <media-sponsor />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import FirstView from '~/components/FirstView.vue'
import Concept from '~/components/Concept.vue'
import Speakers from '~/components/Speakers.vue'
import TimeTable from '~/components/TimeTable.vue'
import TimeTableSp from '~/components/TimeTableSp.vue'
import Attention from '~/components/Attention.vue'
import BoothSponsor from '~/components/BoothSponsor.vue'
import Member from '~/components/Member.vue'
import Overview from '~/components/Overview.vue'
import MediaSponsor from '~/components/MediaSponsor.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    FirstView,
    Concept,
    Speakers,
    TimeTable,
    TimeTableSp,
    Attention,
    BoothSponsor,
    Member,
    Overview,
    MediaSponsor,
    PageFooter,
  },
  mounted() {
    
    $('.modal').modaal({
			// type: 'ajax',	// コンテンツのタイプを指定
			animation_speed: '500', 	// アニメーションのスピードをミリ秒単位で指定
			background: '#1b62aa',	// 背景の色を白に変更
			overlay_opacity: '0.9',	// 背景のオーバーレイの透明度を変更
			// fullscreen: 'true',	// フルスクリーンモードにする
			background_scroll: 'true',	// 背景をスクロールさせるか否か
			loading_content: 'Now Loading, Please Wait.'	// 読み込み時のテキスト表示
    })
    
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      var w = $(".axis li").width();
      $(".axis li").css({
        height: w + "px",
        lineHeight: w + "px"
      });
      $(".industry li").css({
        height: w + "px",
        lineHeight: w + "px"
      });

      var m_w = $(".member-list-half li").width();
      if (m_w > 220) {
        m_w = 220;
      }
      $(".member-list li img").css({
        height: m_w + "px",
            width: m_w + "px"
      });

      $('.track-seed').on("click", function() {
        $(this).next('div').slideToggle();
      });

      $(".track-detail .datetime div").each(function(index, ele){
        var h = $(ele).height();
        $(ele).css({
            top: 0,
            bottom: 0
        });
      });
    } else {
      $(".track-detail .datetime div").each(function(index, ele){
          var h = $(ele).height();
          $(ele).css({
          height: h + "px",
              top: 0,
              bottom: 0
        });
      });
    }

    $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });

  }
}
</script>