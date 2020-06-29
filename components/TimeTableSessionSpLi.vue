<template>
  <li class="session">
    <a :href='addId(item.id)' class="modal">
      <p class="session-tag" :class='item.class'>{{item.tag}}</p>
      <p class="session-title">{{item.title}}</p>
      <template v-if='item.name1'>
        <p class="speaker-name">{{item.name1}} 氏</p>
        <p class="company-name">{{item.company1}}</p>
      </template>
      <template v-if='item.name2'>
        <p class="speaker-name">{{item.name2}} 氏</p>
        <p class="company-name">{{item.company2}}</p>
      </template>
      <template v-if='item.name3'>
        <p class="speaker-name">{{item.name3}} 氏</p>
        <p class="company-name">{{item.company3}}</p>
      </template>
    </a>
  </li>
</template>

<script>
export default {
  props: [ 'item', 'timetable' ],
  methods: {
		addId(id) {
			return '#' + id + '-sp'
		},
    addSpId(id) {
			return id + '-sp'
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