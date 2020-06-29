<template>
  <div :id='addSpId(item.id)' class="none modal-wrapper">
    <p class="session-tag">{{item.track}}</p>
    <div class="flex-space-between">
      <div class="datetime-modal">
        <div class="datetime-inner">
          <p>{{timetable.st}}</p>
          <p>|</p>
          <p>{{item.fn}}</p>
        </div>
      </div>

      <div class="session-detail">
        <ul class="sns-session">
          <li>
            <a :href='addTwitterLink(item.id, item.title)' target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a :href='addFacebookLink(item.id, item.title)' target="_blank">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <p class="tag trackenable">{{item.tag}}</p>
        <h3 class="session-title">
          {{item.title}}
        </h3>
        <p class="description">
          {{item.概要}}
        </p>
        <ul class="flex-start profile">
          <li v-if='item.name1'>
            <p class="name">{{item.name1}} 氏</p>
            <p class="company-name">{{item.company1}}</p>
            <p class="position">{{item.department1}}</p>
            <p class="occupation">{{item.occupation1}}</p>
          </li>
          <li v-if='item.name2'>
            <br/>
            <p class="name">{{item.name2}} 氏</p>
            <p class="company-name">{{item.company2}}</p>
            <p class="position">{{item.department2}}</p>
            <p class="occupation">{{item.occupation2}}</p>
          </li>
          <li v-if='item.name3'>
            <br/>
            <p class="name">{{item.name3}} 氏</p>
            <p class="company-name">{{item.company3}}</p>
            <p class="position">{{item.department3}}</p>
            <p class="occupation">{{item.occupation3}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
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