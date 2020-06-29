<template>
	<div class="time-table-sp flex-center sp">
    <div class="time-table-sinner">
      <h2 class="time-table-title">TIME TABLE</h2>

      <ul class="track-detail flex-start">
        <li class="datetime">
          <p>09:00</p>
        </li>
        <li class="session one-line">
          <p class="session-title">開場・受付開始</p>
        </li>
      </ul>

      <ul class="track-detail flex-start">
        <li class="datetime">
          <p>10:00</p>
          <p>|</p>
          <p>12:00</p>
        </li>
        <li class="session one-line keynote keynote-session">
            <p class="session-title">基調講演：すべてのビジネスを変えるディープラーニングの未来</p>
        </li>
      </ul>

      <div class="track-seed flex-center">
        <p class="track-title track-a">事例セッション</p>
      </div>
      <div class="track-list track-list-a">
        <template v-for='(timetable, i) in timetables'>
          <ul class="track-detail flex-start">
            <time-table-session-sp-time
              :timetable='timetables[i]' />
            <time-table-session-sp-li
              :item='data_tr1[i]' />
            <time-table-session-sp-div
              :item='data_tr1[i]'
              :timetable='timetables[i]' />
          </ul>
        </template>
      </div>

      <div class="track-seed flex-center">
        <p class="track-title track-b">技術セッション</p>
      </div>
      <div class="track-list track-list-b">
        <template v-for='(timetable, i) in timetables'>
          <ul class="track-detail flex-start">
            <time-table-session-sp-time
              :timetable='timetables[i]' />
            <time-table-session-sp-li
              :item='data_tr2[i]' />
            <time-table-session-sp-div
              :item='data_tr2[i]'
              :timetable='timetables[i]' />
          </ul>
        </template>
      </div>

      <div class="track-seed flex-center">
        <p class="track-title track-c">教育セッション</p>
      </div>
      <div class="track-list track-list-c">
        <template v-for='(timetable, i) in timetables'>
          <ul class="track-detail flex-start">
            <time-table-session-sp-time
              :timetable='timetables[i]' />
            <time-table-session-sp-li
              :item='data_tr3[i]' />
            <time-table-session-sp-div
              :item='data_tr3[i]'
              :timetable='timetables[i]' />
          </ul>
        </template>
      </div>

      <div class="track-seed flex-center">
        <p class="track-title track-d">個人セッション</p>
      </div>
      <div class="track-list track-list-d">
        <template v-for='(timetable, i) in timetables'>
          <ul class="track-detail flex-start">
            <time-table-session-sp-time
              :timetable='timetables[i]' />
            <time-table-session-sp-li
              :item='data_tr4[i]' />
            <time-table-session-sp-div
              :item='data_tr4[i]'
              :timetable='timetables[i]' />
          </ul>
        </template>
      </div>

    </div>
  </div>
</template>

<script>
import TimeTableSessionSpTime from '~/components/TimeTableSessionSpTime.vue'
import TimeTableSessionSpLi from '~/components/TimeTableSessionSpLi.vue'
import TimeTableSessionSpDiv from '~/components/TimeTableSessionSpDiv.vue'
export default {
  props: [
    'data_tr1',
    'data_tr2',
    'data_tr3',
    'data_tr4',
  ],
  components: {
    TimeTableSessionSpTime,
    TimeTableSessionSpLi,
    TimeTableSessionSpDiv
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
  }
}
</script>
