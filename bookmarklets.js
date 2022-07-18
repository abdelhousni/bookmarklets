// [de|fr] -> nl
// based on : 
javascript:(function() { window.location=window.location.toString().replace(/.[fr|de]\//,'nl/'); })()

// to lowercase
// source : 
javascript: (function() {var i, t, D = document;for (i = 0; t = D.getElementsByTagName('textarea')[i]; ++i) t.value = t.value.toLowerCase(); var newSS, styles = '*{text-transform:lowercase}input,textarea{text-transform:none}';if (D.createStyleSheet) {D.createStyleSheet("javascript:'" + styles + "'");} else {newSS = D.createElement('link');newSS.rel = 'stylesheet';newSS.href = 'data:text/css,' + escape(styles);D.getElementsByTagName("head")[0].appendChild(newSS);}})()

// to uppercase
javascript: (function() {var i, t, D = document;for (i = 0; t = D.getElementsByTagName('textarea')[i]; ++i) t.value = t.value.touppercase(); var newSS, styles = '*{text-transform:uppercase}input,textarea{text-transform:none}';if (D.createStyleSheet) {D.createStyleSheet("javascript:'" + styles + "'");} else {newSS = D.createElement('link');newSS.rel = 'stylesheet';newSS.href = 'data:text/css,' + escape(styles);D.getElementsByTagName("head")[0].appendChild(newSS);}})() 

// # CleanText
javascript:(function()%7Bvar newSS=document.createElement('link'),styles=('* %7B background: #fff; color: #111; letter-spacing: 0; text-shadow: none; hyphens: none;%7D'+':link, :link * %7B color: #0000EE; %7D '+':visited, :visited * %7B color: #551A8B; %7D').replace(/;/g,' !important;');newSS.rel='stylesheet';newSS.href='data:text/css,'+escape(styles);document.getElementsByTagName('head')%5B0%5D.appendChild(newSS);var els=document.getElementsByTagName('*');for(var i=0,el;el=els%5Bi%5D;i++)%7Bif(getComputedStyle(el).textAlign==='justify')%7Bel.style.textAlign='left';%7D%7D%7D)();

// translate -> english
javascript:var t=((window.getSelection&&window.getSelection())||(document.getSelection&&document.getSelection())||(document.selection&&document.selection.createRange&&document.selection.createRange().text));var e=(document.charset||document.characterSet);if(t!=''){location.href='http://translate.google.com/?text=%27+t+%27&hl=fr&langpair=auto|fr&tbb=1&ie=%27+e;}else{location.href=%27http://translate.google.com/translate?u=%27+encodeURIComponent(location.href)+%27&hl=en&langpair=auto|en&tbb=1&ie=%27+e;};

// define selected text or <INPUT>
javascript:d=""+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);d=d.replace(/%5Cr%5Cn%7C%5Cr%7C%5Cn/g," ,");if(!d)d=prompt("Enter the words:", "");if(d!=null)location="http://www.google.be/search?q=define:"+escape(d).replace(/ /g,"+");void(0);

// send via gmail
    javascript:(function()%7Bm='http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=destinataire@gmail.com&su=%27+encodeURIComponent(document.title)+%27&body=%27+encodeURIComponent(document.location);w=window.open(m,%27addwindow%27,%27status=no,toolbar=no,width=575,height=545,resizable=yes%27);setTimeout(function()%7Bw.focus();%7D, 250);%7D)();

// add to hackernews
javascript:window.location="http://news.ycombinator.com/submitlink?u="+encodeURIComponent(document.location)+"&t="+encodeURIComponent(document.title)

// add to Inoreader
javascript:location.href='http://www.inoreader.com/#feed/'+document.location.href

// add to LinkedIn
javascript:(function(){var d=document,l=d.location,f='http://www.linkedin.com/shareArticle?mini=true&ro=false&trk=bookmarklet&title=%27+encodeURIComponent(d.title)+%27&url=%27+encodeURIComponent(l.href),a=function(){if(!window.open(f,%27News%27,%27width=520,height=570,toolbar=0,location=0,status=0,scrollbars=yes%27)){l.href=f;}};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0);}else{a();}})()

// PrintFriendly
javascript:(function(){if(window['priFri']){window.print()}else{var pfurl='';pfstyle='nbk';pfBkVersion='1';if(window.location.href.match(/https/)){pfurl='https://pf-cdn.printfriendly.com/ssl/main.js'}else{pfurl='http://cdn.printfriendly.com/printfriendly.js'}_pnicer_script=document.createElement('SCRIPT');_pnicer_script.type='text/javascript';_pnicer_script.src=pfurl + '?x=%27+(Math.random());document.getElementsByTagName(%27head%27)[0].appendChild(_pnicer_script);}})();

