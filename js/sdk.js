document.addEventListener("DOMContentLoaded", ()=>{
	let ele = document.querySelectorAll("script[src$=sdk]");
	if(ele.length){
		ele.forEach((item)=>{
			item.remove();
		})
	}
	let script = document.createElement('script');
	script.setAttribute("defer","defer");
	// script.src="https://sdk.resu.io/handlers/cc33cd4b2fea4b949123bb7d48ff673e.sdk";
	script.src="https://sdk.resul.io/handlers/f464547cd0b14ef7a91ca0c5cbc88b2e.sdk";
	script.setAttribute("fcm_service_path","firebase-messaging-sw.js");
    document.head.appendChild(script);
})
