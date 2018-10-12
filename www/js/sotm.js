!function(e){var o={};function t(s){if(o[s])return o[s].exports;var i=o[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=o,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)t.d(s,i,function(o){return e[o]}.bind(null,i));return s},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(2)},function(e,o){window.updateQueryStringParam=function(e,o){var t=[location.protocol,"//",location.host,location.pathname].join(""),s=document.location.search,i=e+"="+o,a="?"+i;if(s){var n=new RegExp("([?&])"+e+"[^&]*"),r=new RegExp("([?&])"+e+"=[^&;]+[&;]?");a=void 0===o||null==o||""==o?(a=s.replace(r,"$1")).replace(/[&;]$/,""):null!==s.match(n)?s.replace(n,"$1"+i):s+"&"+i}a="?"==a?"":a,hash=window.location.hash,window.history.replaceState({},"",t+a+hash)},window.websafe=function(e){return e.match(/[a-zA-Z0-9]+/g).join("-").toLowerCase()},window.angle=function(e,o,t,s){var i=s-o,a=t-e;return Math.atan2(i,a)*(180/Math.PI)},window.angle360=function(e,o,t,s){var i=angle(e,o,t,s);return i<0&&(i=360+i),i},window.getCardinalFromDeg=function(e){var o="North";return e>=0&&11.25>e?o="North":e>=11.25&&33.75>e?o="North by North East":e>=33.75&&56.25>e?o="North East":e>=56.25&&78.75>e?o="East by North East":e>=78.75&&101.25>e?o="East":e>=101.25&&123.75>e?o="East by South East":e>=123.75&&146.25>e?o="South East":e>=146.25&&168.75>e?o="South by South East":e>=168.75&&191.25>e?o="South":e>=191.25&&213.75>e?o="South by South West":e>=213.75&&236.25>e?o="South West":e>=236.25&&258.75>e?o="West by South West":e>=258.75&&281.25>e?o="West":e>=281.25&&303.75>e?o="West by North West":e>=303.75&&326.25>e?o="North West":e>=326.25&&348.75>e&&(o="North by North West"),o},window.toggleFullScreen=function(){document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}},function(e,o,t){"use strict";t.r(o);var s;let i;window.addEventListener("load",function(){function e(e){console.log("online offline update"),navigator.onLine?console.log("went online"):console.log(" went offline")}window.addEventListener("online",e),window.addEventListener("offline",e)}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Service Worker Registered")}),s=!!navigator.onLine;var a=document.querySelector("#install-button");window.addEventListener("beforeinstallprompt",e=>{console.log("beforeinstallprompt - showme!!!"),e.preventDefault(),i=e,document.querySelector("#installBut").classList.add("showme")}),a.addEventListener("click",()=>{document.querySelector("#installBut").classList.remove("showme"),i.prompt(),i.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),i=null})}),window.addEventListener("appinstalled",e=>{console.log("a2hs","installed")}),t(1);var n,r=[],l=[{loc:[-41.819753270587555,62.927539082707604],title:"Lone Cove",radius:3,pigs:!0,snakes:!0},{loc:[-69.94175507751075,50.54955884969927],title:"Cannon Cove",radius:4,chickens:!0,pigs:!0},{loc:[-67.62877065330183,65.30062001780092],title:"Rum Runner Isle",radius:2,pigs:!0},{loc:[-80.94564356372827,121.30273506665486],title:"The Crooked Masts",radius:3,chickens:!0,snakes:!0},{loc:[-29.006074941430732,18.117840198163094],title:"Sailor's Bounty",radius:4,chickens:!0,pigs:!0},{loc:[-21.065393452707312,42.86583042922642],title:"Smuggler's Bay",radius:4,chickens:!0,snakes:!0},{loc:[-22.940799321639105,57.487891142156535],title:"Salty Sands",radius:1.5,chickens:!0},{loc:[-28.629490743342114,69.55120761078706],title:"Picaroon Palms",radius:1.5,snakes:!0},{loc:[-28.19171579987219,88.62081716840055],title:"Scurvy Isley",radius:1.5},{loc:[-28.691820540241682,107.0555642878491],title:"Old Faithful Isle",radius:4,chickens:!0,pigs:!0},{loc:[-22.8781029334463,120.48941102991489],title:"Black Sand Atoll",radius:1.5,snakes:!0},{loc:[-21.566440856402263,136.5557290968507],title:"Marauder's Arch",radius:3,chickens:!0,pigs:!0},{loc:[-32.44278938865952,32.80535275921895],title:"Sandy Shallows",radius:1.5,snakes:!0},{loc:[-33.44299886939851,50.23934822463562],title:"Boulder Cay",radius:1.5,chickens:!0},{loc:[-45.00792099044309,24.432035940703415],title:"Keel Haul Fort",radius:2,isFortress:!0},{loc:[-48.25860180284481,43.931357643687285],title:"Sanctuary Outpost",radius:3,outpost:!0},{loc:[-56.135264556210544,57.616119333511065],title:"Lonely Isle",radius:1.5,snakes:!0},{loc:[-55.3851074456563,71.67579309594387],title:"Hidden Spring Keep",radius:2,isFortress:!0},{loc:[-41.13192595693288,114.67807920810932],title:"Blind Man's Lagoon",radius:1.5,pigs:!0},{loc:[-34.818103609768,126.55069260749704],title:"Shark Fin Camp",radius:1.5,isFortress:!0},{loc:[-42.195761396643945,137.43053681968217],title:"Plunderer's Plight",radius:2,pigs:!0},{loc:[-33.56895462527015,144.36651233641732],title:"Black Water Enclave",radius:1.5,chickens:!0},{loc:[-40.819360494201945,93.80847591354413],title:"Kraken's Watchtower",radius:2,isFortress:!0},{loc:[-54.197162299085946,105.7433527036019],title:"Dagger Tooth Outpost",radius:4,outpost:!0},{loc:[-52.32176952270034,125.36404020139321],title:"The Sunken Grove",radius:2,pigs:!0,snakes:!0},{loc:[-55.76110247916651,145.1163475274157],title:"Galleon's Grave Outpost",radius:3,outpost:!0},{loc:[-64.51072835956577,117.43038960965997],title:"Isle of Last Words",radius:1,pigs:!0,snakes:!0},{loc:[-67.69269774083621,130.11909434410913],title:"Skull Keep",radius:2,isFortress:!0},{loc:[-71.44348329360741,142.9912651229149],title:"Tri-Rock Isle",radius:2,chickens:!0},{loc:[-67.50237,151.430381],title:"Three Paces East isSeapost",radius:1,isSeapost:!0},{loc:[-19.313035,27.037615],title:"The Spoils of Plenty Store",radius:1,isSeapost:!0},{loc:[-75.235017,64.342312],title:"The North Star isSeapost",radius:1,isSeapost:!0},{loc:[-114.96965,94.435731],title:"Stephen's Spoils",radius:1,isSeapost:!0},{loc:[-128.328685,48.139087],title:"The Finest Trading Post",radius:1,isSeapost:!0},{loc:[-29.844282,120.967678],title:"The Wild Treasures Store",radius:1,isSeapost:!0},{loc:[-80.07029006498121,135.55539947884748],title:"Shiver Retreat",radius:2,pigs:!0},{loc:[-78.63248893641892,152.05177368081218],title:"Liar's Backbone",radius:2,snakes:!0},{loc:[-92.63542166676478,130.11909434410913],title:"Shark Tooth Key",radius:2,pigs:!0},{loc:[-92.19783001894149,144.99082563224394],title:"Kraken's Fall",radius:4,pigs:!0,snakes:!0},{loc:[-74.94438667929433,102.86928662127767],title:"Shipwreck Bay",radius:4,chickens:!0,pigs:!0},{loc:[-58.448248980419464,30.371595953863505],title:"Rapier Cay",radius:1,chickens:!0},{loc:[-66.31539345270731,15.993498563600905],title:"Crescent Isle",radius:3,pigs:!0,snakes:!0},{loc:[-75.94243588991247,31.746234927654953],title:"Golden Sand Outpost",radius:3,outpost:!0},{loc:[-81.88115349670785,16.993169376947787],title:"Sea Dog's Rest",radius:1.5,pigs:!0},{loc:[-81.6942164761939,60.23384927983136],title:"Twin Groves",radius:2,chickens:!0},{loc:[-91.6963112835838,48.48771722300551],title:"Wanderer's Refuge",radius:4,chickens:!0,snakes:!0},{loc:[-91.44625891339905,30.743560286098365],title:"Lagoon of Whispers",radius:2,chickens:!0,snakes:!0},{loc:[-97.13434807797746,16.305895692771806],title:"Mermaid's Hideaway",radius:3,chickens:!0,pigs:!0},{loc:[-105.13603701643558,36.36971243938428],title:"Sailor's Knot Stronghold",radius:2,isFortress:!0},{loc:[-103.69823588787327,72.10794401653528],title:"Fools Lagoon",radius:1.5,pigs:!0},{loc:[-100.84721297846644,83.52747464057205],title:"Castaway Isle",radius:1,snakes:!0},{loc:[-104.19511986188078,97.48786124216625],title:"Old Boot Fort",radius:2,isFortress:!0},{loc:[-117.31967471531044,51.7447330135501],title:"Plunder Valley",radius:4,chickens:!0,pigs:!0},{loc:[-115.8779065452535,69.80542248695795],title:"Chicken Isle",radius:2,chickens:!0,pigs:!0},{loc:[-115.25277561979163,85.05040239049788],title:"Snake Island",radius:3,pigs:!0,snakes:!0},{loc:[-116.75298510053062,106.67686315627111],title:"Crooks's Hollow",radius:3,chickens:!0,snakes:!0},{loc:[-114.69061602599248,122.1182928219427],title:"Barnacle Cay",radius:2,chickens:!0},{loc:[-126.31805123958326,134.36426028544201],title:"Ancient Spire Outpost",radius:2,outpost:!0},{loc:[-124.56687291042644,34.36631770202399],title:"Discovery Ridge",radius:4,chickens:!0,snakes:!0},{loc:[-137.44456997494095,45.05029951966879],title:"Old Salts Atoll",radius:2,chickens:!0},{loc:[-128.94278938865952,65.35611291577732],title:"Lost Gold Fort",radius:2,isFortress:!0},{loc:[-144.821114895391,60.10784114570619],title:"Shark Bait Cove",radius:4,chickens:!0,pigs:!0},{loc:[-148.3847146692707,73.99154401784801],title:"Lookout Point",radius:2,pigs:!0},{loc:[-152.51057877731904,84.98792296466371],title:"Booty Isle",radius:1.5,snakes:!0},{loc:[-134.88188667929433,82.4887459312965],title:"Plunder Outpost",radius:2,outpost:!0},{loc:[-126.75507990792053,95.36808708028451],title:"Paradise Spring",radius:2,pigs:!0},{loc:[-133.19392844017779,104.67752152957733],title:"Cutlass Cay",radius:1.5,snakes:!0},{loc:[-130.13078690541462,117.3608449739159],title:"The Crow's Nest Fortress",radius:2,isFortress:!0},{loc:[-143.50858871029862,113.17472344302583],title:"Mutineer Rock",radius:2,chickens:!0},{loc:[-143.75864108048336,128.48218277239994],title:"Devil's Ridge",radius:3,pigs:!0,snakes:!0},{loc:[-147.8845051885317,98.80445550116441],title:"Thieves' Haven",radius:4,chickens:!0,pigs:!0},{loc:[-78.938966,191.556523],title:"Scorched Pass",radius:2,forsaken:!0},{loc:[-87.003155,200.022485],title:"Brian's Bazaar",radius:1,forsaken:!0,isSeapost:!0},{loc:[-87.5329,177.748416],title:"Fetcher's Rest",radius:4,forsaken:!0,isSeapost:!1},{loc:[-96.568248,198.610248],title:"Cursewater Shores",radius:2,forsaken:!0,isSeapost:!1},{loc:[-104.69495,169.682274],title:"Cinder Islet",radius:2,forsaken:!0,isSeapost:!1},{loc:[-107.257986,185.614528],title:"Flintlock Peninsula",radius:4,forsaken:!0,isSeapost:!1},{loc:[-119.318876,201.609261],title:"Ruby's Fall",radius:3,forsaken:!0,isSeapost:!1},{loc:[-118.568719,165.308714],title:"The Forsaken Brink",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-127.003365,178.80427],title:"Marrow's Peak Outpost",radius:3,forsaken:!0,outpost:!0,isSeapost:!1},{loc:[-136.81792,198.36031],title:"Brimstone Rock",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-137.943156,212.605619],title:"Glowstone Cay",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-144.69457,179.491523],title:"Flame's End",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-147.193195,167.058118],title:"Roaring Traders",radius:1,forsaken:!0,isSeapost:!0},{loc:[-152.506808,204.045938],title:"Magma's Tide",radius:2,forsaken:!0,isSeapost:!1},{loc:[-157.382829,187.676328],title:"The Devil's Thirst",radius:3,forsaken:!0,isSeapost:!1},{loc:[-159.258222,167.432994],title:"Burning Sands",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-172.636024,175.305402],title:"Ashen Reaches",radius:3,forsaken:!0,isSeapost:!1}],c=[{loc:[-12.625,28.4375],title:"D2",isLarge:!0,desc:"Large (3rd out of the 4 offshore rocks counting from the east, at the back of the island, D2"},{loc:[-20.726562,132.023438],title:"Marauder's Arch",isLarge:!0,desc:"South top"},{loc:[-52.882812,69.21875],title:"Hidden Spring Keep",isLarge:!1,desc:" Very top, use the South West cannon"},{loc:[-140.34375,125.289063],title:"Devil's Ridge",isLarge:!1,desc:" North side underneath the ridge"},{loc:[-61,84.875],title:"N10",isLarge:!1,desc:"Underwater, uncharted island"},{loc:[-71.132812,100.97656],title:"Shipwreck Bay",isLarge:!0,desc:"Northern small island"},{loc:[-95.96875,14.945313],title:"Mermaid's Hideaway",isLarge:!1,desc:"Across from the Southern peak"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"},{loc:[-145.875,98.648438],title:"Thieves Haven",isLarge:!1,desc:"East rock in the water"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"}],d=s,u=!1,p=[],h=-1;console.log("-- detect isOnline: "+d);var g="";"localhost"!=location.hostname&&(g="https://cdn.chenzorama.com/"),function(){var e=L.GridLayer.prototype._initTile;L.GridLayer.include({_initTile:function(o){e.call(this,o);var t=this.getTileSize();o.style.width=t.x+1+"px",o.style.height=t.y+1+"px"}})}();var m=L.map("mapid",{maxZoom:7,minZoom:2,crs:L.CRS.Simple,attributionControl:!1,preferCanvas:!1,maxBoundsViscosity:1}).setView([70,70],4),k=new L.LatLngBounds(m.unproject([0,25522],7),m.unproject([27444,0],7));m.setMaxBounds(k,{padding:[600,600]}),new L.Hash(m),L.tileLayer(g+"images/tiles/v2.1/{z}/{x}/{y}.png",{minZoom:2,maxZoom:7,bounds:k,noWrap:!0,tms:!1}).addTo(m);var f=new L.LayerGroup;m.addLayer(f);var w=L.icon({iconUrl:"/images/markers/xmarkthespot_marker.png",shadowUrl:"/images/markers/xmarkthespot_marker.png",iconSize:[40,52],shadowSize:[0,0],iconAnchor:[20,52],shadowAnchor:[0,0],popupAnchor:[0,0]}),S=(L.icon({iconUrl:"/images/markers/compass.png",shadowUrl:"/images/markers/compass.png",iconSize:[50,48],shadowSize:[0,0],iconAnchor:[25,24],shadowAnchor:[0,0],popupAnchor:[0,0]}),L.icon({iconUrl:"/images/markers/boat_marker.png",shadowUrl:"/images/markers/boat_marker.png",iconSize:[50,59],shadowSize:[0,0],iconAnchor:[25,29],shadowAnchor:[0,0],popupAnchor:[0,0]}));m.on("click",function(e){console.log("You clicked the map at "+e.latlng)});var v=new L.LayerGroup;m.addLayer(v);var y=new L.LayerGroup;r.push(["chickens",y]);var C=new L.LayerGroup;r.push(["snakes",C]);var b=new L.LayerGroup;r.push(["pigs",b]);var F=new L.Control.Search({position:"topright",layer:v,initial:!1,zoom:4,marker:!1});m.addControl(F);var A=L.icon({iconUrl:"/images/markers/chicken_marker.png",shadowUrl:"/images/markers/chicken_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[0,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),T=L.icon({iconUrl:"/images/markers/snake_marker.png",shadowUrl:"/images/markers/snake_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),E=L.icon({iconUrl:"/images/markers/pig_marker.png",shadowUrl:"/images/markers/pig_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,0],shadowAnchor:[0,0],popupAnchor:[0,0]});for(var P in L.islandCircle=L.Circle.extend({options:{name:"islandName",json:{}}}),l){var _=l[P].title,R=l[P].radius,j="islandClass "+window.websafe(_),O=new L.islandCircle(l[P].loc,{strokeweight:1,opacity:0,color:"#fff",fillColor:"#fff",fillOpacity:0,radius:R,className:j,name:_,title:_,json:l[P]});if(v.addLayer(O),l[P].circle=O,O.on({mousedown:function(e){u?(e.target.classList.add("pig show"),m.dragging.disable(),m.on("mousemove",function(o){e.target.setLatLng(o.latlng)})):(e.target._path.classList.remove("pig","show"),D(),H())},mouseup:function(e){u&&(m.removeEventListener("mousemove"),console.log(e.target.options.title),console.log("["+e.latlng.lat+", "+e.latlng.lng+"],"),m.dragging.enable())}}),l[P].chickens){var z=K(l[P].loc,.5*R,.6*R);L.marker(z,{icon:A,title:"chicken"}).addTo(y).setIcon(A)}if(l[P].snakes){var x=K(l[P].loc,.5*R,.6*R*-1);L.marker(x,{icon:T,title:"snake"}).addTo(C)}if(l[P].pigs){var B=K(l[P].loc,.5*R*-1,.6*R*-1);L.marker(B,{icon:E,title:"pigs"}).addTo(b)}}var M=new L.LayerGroup;r.push(["thrones",M]);var W=L.icon({iconUrl:"/images/markers/throne_marker.png",shadowUrl:"/images/markers/throne_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[15,30],shadowAnchor:[0,0],popupAnchor:[-20,-45]});for(var U in c){var N=c[U].loc;L.marker(N,{icon:W,title:"Skelton Throne"}).addTo(M).bindPopup(c[U].desc)}var I=L.popup({maxWidth:"500",minWidth:"120",className:"context_popup"});function D(){n&&m.removeLayer(n)}function G(e){var o=L.marker(e,{icon:w,draggable:!0}).addTo(m);o.on("dragend",function(e){console.log("marker dragend event"),Z()}),p.push(o)}function H(){$(".floating_dialog").removeClass("show")}function q(){m.getZoom()>=4&&$(".leaflet-grid-label").addClass("big")}function K(e,o,t){return[e[0]+o,e[1]+t]}function Z(){var e=function(){var e,o="";return p.forEach(function(t){e=t.getLatLng().lat+","+t.getLatLng().lng+";",o+=e}),o=window.encodeURIComponent(window.btoa(o))}();updateQueryStringParam("mkrs",e)}m.on("contextmenu",function(e){var o=e.latlng;I.setLatLng(e.latlng).setContent("<ul><li class='js-addMarker'>Add Marker</li>        <li class='js-clearMarkers'>Clear Markers</li>        <li class='js-closest' data-type='chickens'>Closest Chickens</li>        <li class='js-closest' data-type='pigs'>Closest Pigs</li>        <li class='js-closest' data-type='snakes'>Closest Snakes</li>        <li class='js-closest' data-type='outpost'>Closest Outpost</li>        </ul>").openOn(m),$(".js-addMarker").click(function(){G(o),Z(),m.closePopup()}),$(".js-clearMarkers").click(function(){p.forEach(function(e){m.removeLayer(e)}),p=[],D(),H(),Z(),m.closePopup()}),$(".js-closest").click(function(){var t=$(this).data("type"),s=function(e,o){var t,s=1e3,i={};for(var a in l){var n=l[a].title,r=l[a].loc;(t=m.distance(r,e))<s&&l[a][o]&&(s=t,i.title=n,i.islandData=l[a])}return i.bearing=window.angle360(e.lat,e.lng,i.islandData.loc[0],i.islandData.loc[1]),i}(e.latlng,t),i=s.islandData;$(".islandClass").removeClass("show pigs chickens snakes outposts"),i.circle._path.classList.add(t,"show");var a="<span class='type'>"+(t.charAt(0).toUpperCase()+t.slice(1))+"</span> can be found to the <span class='direction'>"+window.getCardinalFromDeg(s.bearing)+"</span> at <span class='title'>"+s.title+"</span>";!function(e,o){D(),n=L.marker(e,{icon:S,draggable:!1}).addTo(m),console.log(n._icon.style);var t=n._icon.style.transform+" rotate("+o+"deg)";console.log(t),n._icon.style.transform=t,p.push(n)}(o,s.bearing),function(e){$(".floating_dialog").html(e).addClass("show")}(a),m.closePopup()})}),L.simpleGraticule({interval:8.2,vinterval:7.7,showOriginLabel:!1,redraw:"move"}).addTo(m),m.on("zoomend",function(){q()}),m.on("move",function(){q()}),m.on("moveend",function(){q()}),window.dev={toggleOn:function(){console.log("dev"),$(".islandClass").addClass("show"),u=!0}},$(function(){$(".js-searchforisland").click(function(){var e=function e(o){return"left"==o?--h<0&&(h=l.length-1):++h>=l.length&&(h=0),l[h].isFortress||l[h].outpost||l[h].isSeapost?e(o):l[h]}($(this).data("dir")).loc;m.setView(e,7),q()}),$(".js-toggleMarkers").click(function(){!function(e,o){var t=function(e){for(var o=0;o<r.length;o++)if(r[o][0]==e)return r[o][1]}(e);o?m.addLayer(t):m.removeLayer(t)}($(this).attr("name"),$(this).is(":checked"))}),$(".js-fullscreen").click(function(){window.toggleFullScreen()}),$(".js-share").click(function(){var e=window.location.hreh;navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)})}),function(){var e=new URLSearchParams(window.location.search),o=window.decodeURIComponent(e.get("mkrs"));null!==e.get("mkrs")&&window.atob(o).split(";").forEach(function(e){""!==e&&G(e.split(","))})}()})}]);
//# sourceMappingURL=maps/sotm.js.map