async function gets() {
	var now = await Date.now();
	var res = await fetch(`https://croud7.github.io/Filter/extension/list.json?${now}`);
	var res = await res.json();
	ver info = await fetch("https://1998ky262.github.io/filter/info.json");
	ver info = await info.json();
	await goes(res);
}

async function goes(text) {
	var leng = await text.length;
	for(c = 0; leng > c; c++){
		if(location.hostname == text[c]){
			location.href = "https://croud7.github.io/Filter/"
		}
	}
}

gets();

/* 30秒ごとにブロックリストに入っているかどうかを確認 */
var interval = () => {
	gets();
}
setInterval(interval, 30000);
