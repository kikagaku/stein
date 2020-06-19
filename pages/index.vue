<template>
  <div>
    <page-header />
    <first-view
      :data='data_fv' />
    <concept
      :data='data_cn'/>
    <speakers
      :data='data_sp' />
    <time-table
      :data_tr1='data_tr1'
      :data_tr2='data_tr2'
      :data_tr3='data_tr3'
      :data_tr4='data_tr4' />
    <!-- <time-table-sp /> -->
    <attention />
    <!-- <booth-sponsor /> -->
    <!-- <member /> -->
    <overview />
    <media-sponsor />
    <page-footer />
  </div>
</template>

<script>
import axios from 'axios'
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
  async asyncData() {
    // FirstView
    const url_fv = encodeURI('https://api.steinhq.com/v1/storages/5eeb28ac83c30d0425e2c504/FirstView')
    const data_fv = await axios.get(url_fv).then((res) => { return res.data[0] })
    // Concept
    const url_cn = encodeURI('https://api.steinhq.com/v1/storages/5eeb28ac83c30d0425e2c504/Concept')
    const data_cn = await axios.get(url_cn).then((res) => { return res.data[0] })
    // Speaker
    const url_sp = encodeURI('https://api.steinhq.com/v1/storages/5eeb28ac83c30d0425e2c504/Speaker')
    const data_sp = await axios.get(url_sp).then((res) => { return res.data })
    // Track1
    const url_tr1 = encodeURI('https://api.steinhq.com/v1/storages/5eeb28ac83c30d0425e2c504/Track1')
    const data_tr1 = await axios.get(url_tr1).then((res) => { return res.data })
    // Track2
    const url_tr2 = encodeURI('https://api.steinhq.com/v1/storages/5eeb28ac83c30d0425e2c504/Track2')
    const data_tr2 = await axios.get(url_tr2).then((res) => { return res.data })
    // Track3
    const url_tr3 = encodeURI('https://api.steinhq.com/v1/storages/5eeb28ac83c30d0425e2c504/Track3')
    const data_tr3 = await axios.get(url_tr3).then((res) => { return res.data })
    // Track4
    const url_tr4 = encodeURI('https://api.steinhq.com/v1/storages/5eeb28ac83c30d0425e2c504/Track4')
    const data_tr4 = await axios.get(url_tr4).then((res) => { return res.data })
    // Data
    return {
      data_fv: data_fv,
      data_cn: data_cn,
      data_sp: data_sp,
      data_tr1: data_tr1,
      data_tr2: data_tr2,
      data_tr3: data_tr3,
      data_tr4: data_tr4,
    }
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