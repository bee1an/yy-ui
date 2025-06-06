import type { App, InjectionKey } from 'vue'

export const t = Symbol() as InjectionKey<typeof textArr>

export const textArr = [
	'“失败是成功之母，只有经历过失败，才会更接近成功。” —— 爱迪生',
	'“无论何时开始，重要的是开始之后不要停止。” —— 孔子',
	'“你可以接受失败，但不能接受未曾努力。” —— 迈克尔·乔丹',
	'“成功的秘密在于坚持自己的目标，而不是随波逐流。” —— 爱因斯坦',
	'“路漫漫其修远兮，吾将上下而求索。” —— 屈原',
	'“生活的意义在于不断挑战自己，超越自己。” —— 苏格拉底',
	'“最伟大的荣耀不是从不失败，而是每次跌倒后都能站起来。” —— 曼德拉',
	'“不要等待机会，而要创造机会。” —— 乔治·萧伯纳',
	'“人生没有彩排，每一天都是现场直播。” —— 海明威',
	'“梦想不会逃跑，逃跑的永远是自己。” —— 安东尼·罗宾',
	'“不要害怕犯错，因为只有从错误中才能学习。” —— 比尔·盖茨',
	'“世界上最重要的事情，不在于我们身在何处，而在于我们朝着什么方向前进。” —— 奥利弗·温德尔·霍姆斯',
	'“你有多努力，就有多幸运。” —— 托马斯·杰斐逊',
	'“坚持不一定会成功，但放弃一定会失败。” —— 张爱玲',
	'“知识就是力量，但想象力比知识更重要。” —— 爱因斯坦',
	'“行动是治愈恐惧的良药，而犹豫会不断滋养恐惧。” —— 卡耐基',
	'“胜利属于最坚韧的人。” —— 拿破仑',
	'“天才是百分之一的灵感加上百分之九十九的汗水。” —— 爱迪生',
	'“困难本身就是一份礼物，因为它能让我们成长。” —— 玛丽·居里',
	'“伟大的事情总是由一系列小事组成的。” —— 梵高',
	'“只有不断尝试，才能找到成功的道路。” —— 保罗·柯艾略',
	'“别因为怕摔倒，就拒绝开始。” —— 吉姆·罗恩',
	'“时间会证明一切，努力的人不会被辜负。” —— 吴京',
	'“每个困难中都隐藏着一个机会。” —— 爱因斯坦',
	'“你必须成为自己希望看到的改变。” —— 甘地',
	'“你无法延长生命的长度，但可以拓展它的宽度。” —— 车尔尼雪夫斯基',
	'“过去的已经过去，但未来永远掌握在你手中。” —— 杰克·伦敦',
	'“人生不是要超越别人，而是要超越自己。” —— 威廉·詹姆斯',
	'“不要害怕阴影，那只是因为阳光的存在。” —— 洛威尔',
	'“成功不是终点，失败也不是终结，最重要的是继续前进的勇气。” —— 丘吉尔',
	'“没有人能够回到过去重新开始，但每个人都能从现在开始书写未来。” —— 卡尔·巴德',
	'“机会永远属于那些做好准备的人。” —— 路易·巴斯德',
	'“一切伟大的成就，都是由不断积累的小事构成的。” —— 弗兰西斯·培根',
	'“不要因为走得太远，而忘了为什么出发。” —— 村上春树',
	'“与其追逐名利，不如追求内心的满足感。” —— 柏拉图',
	'“每个人都有属于自己的高光时刻，但需要耐心等待。” —— 米兰·昆德拉',
	'“苦难是人生最好的老师，帮助我们变得更坚强。” —— 泰戈尔',
	'“乐观的人总能在逆境中发现希望的种子。” —— 海伦·凯勒',
	'“真正的幸福来自于内心，而不是外界的评价。” —— 乔布斯',
	'“保持好奇心，它是创新的起点。” —— 达芬奇',
	'“时间是最公平的裁判者，它能衡量一切。” —— 列夫·托尔斯泰',
	'“追随你的热情，成功自会追随你。” —— 孙正义',
	'“不忘初心，方得始终。” —— 老子',
	'“未来属于那些相信梦想的人。” —— 埃莉诺·罗斯福',
	'“命运掌握在自己手中，而不是别人的嘴里。” —— 巴尔扎克',
	'“要改变世界，先改变自己。” —— 托尔斯泰',
	'“有时候退一步，是为了更好地前进。” —— 尼采',
	'“不要害怕走得慢，只要你一直走。” —— 孟子',
	'“成功属于那些懂得从失败中汲取教训的人。” —— 托马斯·爱迪生',
	'“真正的勇气是面对未知的勇气。” —— 华特·迪士尼',
	'“人是可以挑战极限的。” —— 李娜',
	'“每个人的努力都会有回报，只是时间问题。” —— 乔布斯',
	'“每一段路程都充满意义，跌倒是为了学会爬起来。” —— 海明威',
	'“生活不会等待你准备好，它会挑战你让你变得强大。” —— 乔治·伯纳德·肖',
	'“行动可能无法立即带来结果，但停滞不前就永远不会。” —— 拉尔夫·瓦尔多·爱默生',
	'“人生没有捷径，成功的唯一途径是坚持。” —— 乔·吉拉德',
	'“走过的每一步都为未来铺设了道路。” —— 查理·卓别林',
	'“让自己变得更好，才是最值得做的事情。” —— 阿尔弗雷德·默特',
	'“没有人能阻止你做出改变，除非你自己放弃。” —— 乔治·卢卡斯',
	'“最好的时光总在未来，而不在过去。” —— 赫尔曼·黑塞',
	'“有时候你要学会放下，才能让自己飞得更高。” —— 查尔斯·达尔文',
	'“如果你一直坚守着你的梦想，你终将得到它。” —— 奥斯卡·王尔德',
	'“每一场胜利都是经过千辛万苦才获得的。” —— 卡尔·冯·克劳塞维茨',
	'“爱自己是走向幸福的第一步。” —— 奥斯卡·王尔德',
	'“努力并不总是能够带来回报，但不努力注定一事无成。” —— 萨姆·约翰逊',
	'“如果你的心够强，任何困难都能被克服。” —— 赫尔曼·赫塞',
	'“每一个难关后面都有阳光。” —— 苏格拉底',
	'“人类的真正天赋是适应变化。” —— 哈佛大学校长',
	'“幸福不取决于外在，而是内心的选择。” —— 安妮·弗兰克',
	'“别怕慢，最怕的是停。” —— 爱尔兰谚语',
	'“成功并不是最终的，失败也并非致命，最重要的是继续前进。” —— 温斯顿·丘吉尔',
	'“我们不因为人生的困难而倒下，而是因为放弃而倒下。” —— 斯蒂芬·霍金',
	'“勇气不是没有恐惧，而是即便有恐惧仍然去做。” —— 纳尔逊·曼德拉',
	'“成长的过程可能会很痛苦，但它终会带来回报。” —— 西格蒙德·弗洛伊德',
	'“生活会教给我们最大的智慧，尤其是在我们最痛苦的时候。” —— 莎士比亚',
	'“一切的美好都源自努力。” —— 孙中山',
	'“凡事往好的方面想，坏事也能变得更好。” —— 马云',
	'“事事皆有可能，只要我们有足够的勇气去追求。” —— 尼尔·阿姆斯特朗',
	'“没有人能轻松成功，但每一个成功者都经历了辛苦。” —— 杨振宁',
	'“当你相信自己时，你会发现没有什么是不可能的。” —— 阿诺德·施瓦辛格',
	'“用心去追求梦想，就能在逆境中创造奇迹。” —— 孙悟空',
	'“你可以拥有最好的未来，只要你不怕现在的困难。” —— 爱默生',
	'“每一次努力，都是一次进步。” —— 费德勒',
	'“脚踏实地，梦想不远。” —— 鲁迅',
	'“不去追逐梦想，就永远无法实现它。” —— 马克·吐温',
	'“你的努力和坚持终会带来你想要的结果。” —— 李清照',
	'“与其等待机会，不如自己创造机会。” —— 乔治·萧伯纳',
	'“你越努力，生活就越不会辜负你。” —— 周杰伦',
	'“成功不是做了一次对的事情，而是做了很多次对的事情。” —— 马云',
	'“你并不孤单，你的人生并没有结束。” —— 诺贝尔奖获得者',
	'“每个人都是自己命运的建筑师。” —— 西塞罗',
	'“挑战自己的极限，才能感受到真正的力量。” —— 乔治·马丁',
	'“无论路有多难，最终的方向会带你走向希望。” —— 海明威',
	'“人不怕走得慢，就怕停下来。” —— 孔子',
	'“勇气是一切的起点。” —— 马丁·路德·金',
	'“对未来抱有希望的人，才有真正的力量。” —— 亚瑟·柯南·道尔',
	'“每一步都在为自己的未来铺路。” —— 查尔斯·狄更斯',
	'“改变世界的力量就在你手中。” —— 马哈蒂尔·穆罕默德',
	'“永不放弃，是通向成功的唯一路。” —— 比尔·盖茨',
	'“当你觉得不可能时，正是你最接近成功的时刻。” —— 本杰明·富兰克林',
	'“坚持才是胜利。” —— 霍金',
	'“成功的最大秘密是坚持自己。” —— 林肯',
	'“每个人都是自己人生的导师。” —— 艾尔顿·约翰',
	'“有梦想就去追求，别让恐惧代替了勇气。” —— 玛格丽特·撒切尔',
	'“坚持，就是你最终成功的钥匙。” —— 海明威',
	'“从失败中汲取教训，才能更接近成功。” —— 爱因斯坦',
	'“信念是一切的力量。” —— 约翰·洛克',
	'“成功的最大秘诀在于坚持自己。” —— 孙子',
	'“不断进步才是最大的动力。” —— 卡内基',
	'“人生的每一步都需要用心去走。” —— 富兰克林',
	'“你越努力，生活就越不会辜负你。” —— 李白',
	'“你做得更多，就会收获更多。” —— 温斯顿·丘吉尔'
] as const

export const randomText = () => textArr[Math.floor(Math.random() * textArr.length)]
export const texts = {
	install(app: App) {
		// 鸡汤
		app.config.globalProperties.$t = textArr
		app.config.globalProperties.$rt = randomText
		app.provide(t, app.config.globalProperties.$t)
	}
}
