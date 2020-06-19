<template>
  <div class="time-table flex-center pc" id="time-table">
    <div class="time-table-sinner">
      <h2 class="time-table-title">TIME TABLE</h2>
      <div class="track-seed-wrapper">

        <ul class="track-seed flex-end">
          <li>事例セッション</li>
          <li>技術セッション</li>
          <li>教育セッション</li>
          <li>個人セッション</li>
        </ul>
        
        <ul class="track-detail flex-start">
          <li class="datetime break-time">
            <p>13:00</p>
            <p>|</p>
            <p>13:15</p>
          </li>
          <li class="session one-line keynote keynote-session">
              <p class="session-title">はじめに</p>
          </li>
        </ul>

        <ul class="track-detail flex-start">
          <li class="datetime break-time">
            <p>13:15</p>
            <p>|</p>
            <p>14:00</p>
          </li>
          <li class="session one-line keynote keynote-session">
              <p class="session-title">基調講演</p>
          </li>
        </ul>

        <ul v-for='(timetable, i) in timetables' :key='i' class="track-detail flex-start">
          <li class="datetime">
            <div>
              <p>{{timetable.st}}</p>
              <p>|</p>
              <p>{{timetable.fn}}</p>
            </div>
          </li>

          <!-- 事例セッション -->
          <time-table-session-li
            :item='data_tr1[i]' />
          <time-table-session-div
            :item='data_tr1[i]'
            :timetable='timetable' />

          <!-- 技術セッション -->
          <time-table-session-li
            :item='data_tr2[i]' />
          <time-table-session-div
            :item='data_tr2[i]'
            :timetable='timetable' />

          <!-- 教育セッション -->
          <time-table-session-li
            :item='data_tr3[i]' />
          <time-table-session-div
            :item='data_tr3[i]'
            :timetable='timetable' />

          <!-- 個人セッション -->
          <time-table-session-li
            :item='data_tr4[i]' />
          <time-table-session-div
            :item='data_tr4[i]'
            :timetable='timetable' />
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import TimeTableSessionLi from '~/components/TimeTableSessionLi.vue'
import TimeTableSessionDiv from '~/components/TimeTableSessionDiv.vue'
export default {
	props: [
    'data_tr1',
    'data_tr2',
    'data_tr3',
    'data_tr4',
  ],
  components: {
    TimeTableSessionLi,
    TimeTableSessionDiv
  },
  data() {
    return {
      timetables: [
        {'st': '14:05', 'fn': '14:30'},
        {'st': '14:35', 'fn': '15:00'},
        {'st': '15:05', 'fn': '15:30'},
        {'st': '15:35', 'fn': '16:00'},
        {'st': '16:05', 'fn': '16:30'},
        {'st': '16:35', 'fn': '17:00'},
      ]
    }
  },
	methods: {
		addId(id) {
			return '#' + id
		},
		addImage(image_url) {
			return process.env.base_url + '/' + image_url
		},
		addTwitterLink(id, title) {
			return `http://twitter.com/share?url=http://dllab.ai/dllab-day-2018/${id}&amp;text=${title}&amp;hashtags=dllab`
		},
		addFacebookLink(id, title) {
			return `http://www.facebook.com/share.php?u=http://dllab.ai/dllab-day-2018/${id}/`
		}
	}
}
</script>