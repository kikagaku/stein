<template>
	<div class="speakers flex-center" id="keynote">
		<div class="speakers-inner">
			<h2 class="speakers-title">KEYNOTE</h2>
			<ul class="speaker-list flex-space-between">

				<template v-for='item in data'>
					<li>
						<a :href='addId(item.id)' class="modal">
							<img :src='addImage(item.image)' alt="" class="profile-icon">
							<p class="name">{{item.名前}}</p>
							<p class="furigana">{{item.name}}</p>
							<p class="position">
								{{item.会社}}<br>
								{{item.所属1}}<br>
								{{item.所属2}}
							</p>
						</a>
					</li>
					<div :id='item.id' class="none modal-wrapper">
						<p class="session-tag tracka">基調講演</p>
						<div class="flex-space-between">
							<div class="datetime-modal">
								<div class="datetime-inner">
									<p>{{item.開始時刻}}</p>
									<p>|</p>
									<p>{{item.終了時刻}}</p>
								</div>
							</div>

							<div class="session-detail">
								<ul class="sns-session">
									<li>
										<a :href='addTwitterLink(item.id, item.講演タイトル)' target="_blank">
											<i class="fa fa-twitter" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="" onclick="window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;">
											<i class="fa fa-facebook" aria-hidden="true"></i>
										</a>
									</li>
								</ul>

								<h3 class="session-title">
									{{item.講演タイトル}}
								</h3>
								<p class="description">
									{{item.概要}}
								</p>
								<ul class="flex-start profile">
									<li>
										<img :src='addImage(item.image)' alt="">
									</li>
									<li>
										<p class="name">{{item.名前}}</p>
										<p class="company-name">{{item.会社}}</p>
										<p class="occupation">
											{{item.所属1}}<br>
											{{item.所属2}}<br>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</template>

			</ul>

		</div>
	</div>
</template>

<script>
export default {
	props: [
		'data'
	],
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