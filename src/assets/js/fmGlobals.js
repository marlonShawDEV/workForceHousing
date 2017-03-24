var fmTimer=0,redrawTimer=0,QueryParam={};
if(!FM)var FM={};
FM.form = {  						
 domain : 'http://www.freddiemac.com',	// if URL is: http://www.fm.com/test.htm#part2
 protocol : location.protocol, 			// returns http:
 hostname : location.hostname, 			// returns www.fm.com no port)
 pathname : location.pathname, 			// returns /test/test.htm
 pathElements: location.pathname.replace(/^\//,'').split("/"),   // returns array of path sections 
 hash : location.hash, 					// returns #part2 
 href : location.href, 					// returns http://www.fm.com/test.htm#part2
 querystr : location.search, 			// returns ?f=try&g=it if URL is: http://fm.com/js/aa.cgi?f=try&g=it
 referrer:  document.referrer,          // returns referring page, if available
 QueryPairs : location.search.replace(/^\?/,'').split(/\&/),
 setCookie: function (a,b,c,d){b||(b="");if(!c||isNaN(c))c=.5;d||(d="/");var e=new Date;e.setTime(e.getTime()+c*24*60*60*1e3),e=e.toGMTString(),a&&(document.cookie=a+"="+b+";expires="+e+";path="+d)},
 getCookie:	function (a){var b=new RegExp(a+"=[^;]+","i");return a&&document.cookie.match(b)?document.cookie.match(b)[0].split("=")[1]:""},
 deleteCookie: function (a,b){b||(b="/"),FM.form.getCookie(a)!==""&&FM.form.setCookie(a,"","-1",b)},
 limitText: function(a,b,m) {var v=$(a).val(),l=v.length,n=m-l,r=n==1?n+' char':n+' chars'; if(l>m){$(a).val(v.substring(0,m));}else {$(b).html(r);}},
 trimWhiteSpace: function(v){v = v.replace(/^\s+/,'');v = v.replace(/\s+$/,'');return v.replace(/\s{2,}/g,' ');},
 useOmni:function(){if(typeof somniTL === "function" && !FM.form.pathElements[0].match(/^iw/)){return true} else{return false}},
 toggleClick:function(){var f=arguments;return this.each(function(){var it=0;$(this).on("click",function(){f[it].apply(this, arguments);it=(it+1) % f.length;});})},
 omniNavLink:function(event){var $tg=$(event.target),$lk=$tg.closest('a,area'),trig='dne',desc='',ltype='o',txt='',dir=FM.form.pathElements[0].length?FM.form.pathElements[0]:'homepage',locale=''; 
  if($lk.length) { 
    var a='',b='',q='',hash='',qryst='',hrf=$lk.attr('href')||'',tl=$lk.attr('title')||'',aria=$lk.attr('aria-label')||'',persona='';
    txt=$lk.text().replace(/"/g,"").replace(/^\s|\s$/g,"");
    if(hrf.length){hrf=decodeURI(hrf);}	 
    if(txt==''&&tl.length){txt=tl;}
    if(txt==''&&aria.length){txt=aria;}
    if(txt==''&&hrf=='/'){txt:'home';}
    if($lk.closest('#ribbon').length){locale='ribbon|';}
    else if(hrf.match(/privacy\.truste\.com/) || $lk.closest('.fsrCloseBtn, .fsrDeclineButton, .fsrAcceptButton').length){locale='foreseeinvite|';}	
    else if($lk.closest('#header-nav').length){
      locale='topnav|';  
      var id=$lk.attr('id')||'';
      if($lk.closest('.secondary-nav').length&&id.length){txt=id;}
    }  	
    else if($lk.closest('.footer').length){locale='footer|';}  
    else if($lk.closest('.share-widget').length){locale='share|';}
    if($lk.closest('.tertiary-nav').length){desc='tertiarynav:';}
    else if($lk.closest('.orbit').length){desc='carousel:';}
    else if($lk.closest('.accordion-title').length){desc='accordion:';}
    else if($lk.closest('.hero').length){desc='hero:';} 
    else if($lk.closest('.footer-promo').length){desc='prefooter:';}
    else if($lk.closest('.tabs-title').length){desc='tab:';}	
    else if($lk.closest('aside').length){desc='sidebar:';}    
    else if($lk.closest('.modal-content').length){desc='modal:';}
    if(locale==''&&desc==''){desc='content:';}
    if(locale==''){locale=dir+'|';} 
    if(hrf.indexOf("#")>0){hash=hrf.split('#')[1];hrf=hrf.split('#')[0];}
    if(hrf.indexOf("?")>0){qryst=hrf.split('?')[1];hrf=hrf.split('?')[0];}
    if(hrf.match(/\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|do[ct]x?|xls[mx]?|pptx?|vsd|rtf|txt|xml|csv)/i)){ltype='d';}	 
    else if(hrf.match(/^https/i)&&!hrf.match(/slearnctr|loanlookup|multisuite/i)){ltype='e';}
    else if(hrf.match(/^http/i)&&!hrf.match(/www\.freddiemac\.com/i)){ltype='e';}
    else{hrf=hrf.replace(/^https?:\/\/(www\.freddiemac\.com)?/i,'').replace(/^\//,'').replace(/index.html?/i,'');}
    if(txt==''&&$lk.has('img')){ var $im=$lk.find('img:first'); 
      if($im.filter('[alt]').length&&$im.filter('[alt]').attr('alt').length){ txt='image:'+$im.filter('[alt]').attr('alt');}
      else if($im.filter('[title]').length&&$im.filter('[title]').attr('title').length){ txt='image:'+$im.filter('[title]').attr('title');}
      else if(tl.length){txt='image:'+tl;}
      else {txt=hrf.length?'image:'+hrf:qryst.length?'image:?'+qryst:hash.length?'image:#'+hash:'';}
    }
    if (txt==''){txt=hrf.length?hrf:qryst.length?'?'+qryst:hash.length?'#'+hash:'unidentified link';}
    if(FM.form.pathElements[0]=='search'){
      a=QueryParam['as_q']||"";b=QueryParam['q']||"";q=a!==""?a.toLowerCase():b.toLowerCase();
      q=q.replace(/\+inmeta:.+/ig,'').replace(/"/g,"").replace(/\+|\s+/g, " ").replace(/^\s|\s$/g,"");
      if($lk.closest('.keyMatchTable').length){loc='search|';desc='keymatch:';}
      else if($lk.closest('.main-results').length){loc='search|';desc='result:';}
      else if($lk.closest('.dn-attr').length){loc='search|';desc=$(this).closest('#attr_1').size()>0?'category:':'filetype:';}
      if(q.length && $lk.closest('#content').length){desc=q+'|'+desc;trig='search'}
    }
    txt=txt.slice(0,100);
    txt=txt.toLowerCase();
    if (FM.form.useOmni()){ 
    somniTL(event,ltype,hrf,trig,locale+desc+txt,persona); 
    }
  }	
 }
};
for (var x in FM.form.QueryPairs) {
  QueryParam[decodeURIComponent(FM.form.QueryPairs[x].split('=')[0] || "")] = decodeURIComponent(FM.form.QueryPairs[x].split('=')[1] || "");
};
$("input[type='text'],input[type='search']").on('change',function(){var v = $(this).val();$(this).val(FM.form.trimWhiteSpace(v));});
// process offsite
$('[href]').filter('.offsite, [rel="external"]').each(function(){
  var x = $(this)[0].hasAttribute('rel') ? $(this).attr('rel') : '',  y = x!=='' ? 'noopener noreferrer '+x : 'noopener noreferrer';	
  $(this).attr('target','_blank').attr('rel',y); 
  
});
// fix marketwire crap tables
if(FM.form.hostname.match(/newsroom/)) {
  $("table").not("[class]").each(function(){
    $(this).wrap('<div class="table-scroll"></div>');
  });  
}
if (FM.form.useOmni()){ 
  $(document).on("click",FM.form.omniNavLink); 
}
// process file markers
if (FM.form.pathElements[0] !== "search") { 
	$(".content-band, .two-column-layout").find("a[href]").not('.plain').not(":has(img)").not(":has(.callout)").not(":has(.card)").filter(function(){return (/.+\.(pdf|zip|mp3|mov|csv|docx?|xls[mx]?|pptx?)/i).test($(this).attr('href'));}).each(
	   function(){ var h=$(this).attr('href').toLowerCase().replace(/.+\.(pdf|zip|mp3|mov|csv|docx?|xls[mx]?|pptx?).*/, "$1"); 
     if($(this).is('.button')) { $(this).append(" <span class='filemarker'>["+h+"]</span>") }
     else { $(this).after(" <span class='filemarker'>["+h+"]</span>"); }
	});
} 
$(function(){  
  console.log("loaded omni"); 
  s_somni.t(); 
});
