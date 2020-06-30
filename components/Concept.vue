<template>
	<div class="concept flex-center">
    <div class="concept-inner">
      <h2 class="catchcopy">
        <span v-html='data.キャッチコピー'></span>
      </h2>
      <ul class="axis flex-space-around">
        <template v-for='item in data.対象.split(",")'>
          <li>{{item}}</li>
        </template>
      </ul>
      <!-- <h3 class="catchcopy-sub">業種一覧</h3>
      <ul class="industry flex-space-between">
        <template v-for='item in data.業種.split(",")'>
          <li>{{item}}</li>
        </template>
      </ul> -->
      <p class="concept-logo">
        <img src="~assets/img/concept_logo.png" alt="">
        <img src="~assets/img/concept_logo.png" alt="">
      </p>
      <!-- <h3 class="committee-concept">
        <span v-html='data.コンセプト'></span>
      </h3> -->
      <!-- <p class="committee-concept-descript">
        <span v-html='data.説明'></span>
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
	props: [
		'data'
	]
}
</script>