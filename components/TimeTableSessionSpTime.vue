<template>
  <li class="datetime">
    <div>
      <p>{{timetable.st}}</p>
      <p>|</p>
      <p>{{timetable.fn}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: [ 'timetable' ]
}
</script>