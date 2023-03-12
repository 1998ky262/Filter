async function gets() {
	var now = await Date.now();
	var res = await fetch(`https://croud7.github.io/Filter/extension/list.json?${now}`);
	var res = await res.json();
	var info = await fetch("https://1998ky262.github.io/filter/info.json");
	var info = await info.json();
	await goes(res,info);
}

async function goes(text,text2) {
	var leng = await text.length;
	if (text2[0]=="true"){
		if(location.hostname !== "croud7.github.io){
		   　　　location.href = "https://croud7.github.io/Filter/";
		   }
	}
	for(c = 0; leng > c; c++){
		if(location.hostname == text[c]){
			location.href = "https://croud7.github.io/Filter/";
		}
	}
}

gets();

/* 30秒ごとにブロックリストに入っているかどうかを確認 */
var interval = () => {
	gets();
}
setInterval(interval, 30000);
