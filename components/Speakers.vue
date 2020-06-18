<template>
	<div class="speakers flex-center" id="keynote">
		<div class="speakers-inner">
			<h2 class="speakers-title">KEYNOTE</h2>
			<ul class="speaker-list flex-space-between">
				<li>
					<img src="~assets/img/satoru_matsuoka.png" alt="" class="profile-icon">
					<p class="name">松岡 聡</p>
					<p class="furigana">Satoshi Matsuoka</p>
					<p class="position">
						理化学研究所<br>
						計算科学研究センター センター長
					</p>
				</li>

				<li>
					<a href="#keynote-session02" class="modal">
						<img src="~assets/img/pfn_nishikawa.png" alt="" class="profile-icon">
						<p class="name">西川 徹</p>
						<p class="furigana">Toru Nishikawa</p>
						<p class="position">
							株式会社Preferred Networks<br>
							創業者 代表取締役社長 最高経営責任者
						</p>
					</a>
				</li>
				<div id="keynote-session02" class="none modal-wrapper">
					<p class="session-tag tracka">基調講演</p>
					<div class="flex-space-between">
						<div class="datetime-modal">
							<div class="datetime-inner">
								<p>10:40</p>
								<p>|</p>
								<p>11:20</p>
							</div>
						</div>

						<div class="session-detail">
							<ul class="sns-session">
								<li>
									<a href="http://twitter.com/share?url=http://dllab.ai/dllab-day-2018/keynote-session02&amp;text=Deep Learning: IoT's Driving Engine&amp;hashtags=dllab" target="_blank">
										<i class="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="http://www.facebook.com/share.php?u=http://dllab.ai/dllab-day-2018/keynote-session02/" onclick="window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;">
										<i class="fa fa-facebook" aria-hidden="true"></i>
									</a>
								</li>
							</ul>

							<h3 class="session-title">
								Deep Learning: IoT's Driving Engine
							</h3>
							<p class="description">
								IoTの発展により、機械が生成するデータの量は爆発的に増加し、大規模かつ多種多様なデータ処理のために機械学習技術に大きな注目が集まっている。なかでも急速に発展する深層学習は、画像認識、音声認識、機械制御、異常検知などの様々なアプリケーションで活用が進み、様々な未解決課題を解決する可能性を示している。PFNが目指す実世界でのAI活用をどの様に実現するのか、事例を交えて紹介する。
							</p>
							<ul class="flex-start profile">
								<li>
									<img src="~assets/img/pfn_nishikawa.png" alt="">
								</li>
								<li>
									<p class="name">西川 徹 氏</p>
									<p class="company-name">株式会社Preferred Networks</p>
									<p class="occupation">
										創業者 代表取締役社長 最高経営責任者
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<li>
					<img src="~assets/img/executive-committee/asakakibara_w.png" alt="" class="profile-icon">
					<p class="name">榊原 彰</p>
					<p class="furigana">Akira Sakakibara</p>
					<p class="position">
						日本マイクロソフト株式会社<br>
						執行役員 最高技術責任者（CTO）<br>
						マイクロソフト ディベロップメント株式会社<br>
						代表取締役 社長
					</p>
				</li>
			</ul>

			<ul class="speaker-list flex-center">
				<li>
					<img src="~assets/img/kanade_takeo.png" alt="" class="profile-icon">
					<p class="name">金出 武雄</p>
					<p class="furigana">Takeo Kanade</p>
					<p class="position">
						カーネギーメロン大学<br>
						ロボット研究所 ワイタカー冠全学教授<br>
						（Skype参加）
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>