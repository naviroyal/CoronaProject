(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],{126:function(e,a,t){e.exports=t(491)},131:function(e,a,t){},132:function(e,a,t){},140:function(e,a,t){},141:function(e,a,t){},368:function(e,a,t){},491:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(39),c=t.n(r),l=(t(131),t(6)),o=(t(132),t(7));t(140),t(85);var m=function(){return n.a.createElement("div",{className:"Header"},n.a.createElement("div",null,n.a.createElement("h1",null,n.a.createElement("span",null,n.a.createElement("img",{style:{padding:"0px 0px 6px 0px"},alt:"india-flag",src:"logo192.png",height:"34px",width:"50px"})),n.a.createElement("span",{style:{color:"grey"}},"Covid19 "),n.a.createElement("span",{style:{color:"lightseagreen"}}," Tracker"))),n.a.createElement("div",null,n.a.createElement("h3",{className:"slogan"},"Let us be kind with everyone fighting against Covid-19")))},i=(t(141),t(123));t(365);var d=function(e){return n.a.createElement("div",{className:"dropdown-div"},n.a.createElement(i.a,{searchable:!0,searchPlaceholder:"search for a country",selectedSize:20,placeholder:e.placeholder,alignOptions:e.alignOptions,optionsSize:14,className:"menu-flags dropdown",onSelect:e.changeCountryHandler}))},v=(t(88),t(113)),g=t(114),h=t(122),u=t(124),f=t(115),p=t.n(f),E=t(116),y=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(v.a)(this,t),(e=a.call(this)).chartRef=n.a.createRef(),e.myChart={},e}return Object(g.a)(t,[{key:"componentDidMount",value:function(){this.createChart(this.props)}},{key:"componentDidUpdate",value:function(){this.createChart(this.props)}},{key:"createChart",value:function(e){if(e.chartData&&void 0!==e.chartData.length){var a=[];e.chartData.forEach((function(t,s){a.push(t-e.chartData[s-1])}));var t=this.chartRef.current.getContext("2d");Object(E.isEmpty)(this.myChart)?this.myChart=new p.a(t,{type:"line",data:{labels:e.dates.splice(-20),datasets:[{label:"Confirmed",data:a.splice(-20),borderColor:e.color,fill:!1,pointRadius:0}]},options:{animation:{duration:2e3,easing:"easeInOutQuint"},tooltips:{enabled:!0,mode:"nearest"},legend:{display:!1},title:{display:!1},scales:{xAxes:[{ticks:{display:!1},gridLines:{display:!1}}],yAxes:[{ticks:{display:!1},gridLines:{display:!1}}]}}}):(this.myChart.data.datasets[0].data=a.splice(-20),this.myChart.update())}}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))}}]),t}(n.a.Component),b=t(496),N=t(497),j=t(498);var C=function(e){if("states"===e.stats)return n.a.createElement(b.a,{fluid:!0},n.a.createElement(N.a,{className:"today-row justify-content-center"},n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"confirmed"},n.a.createElement("p",{className:"head-font"},"Total Cases"),n.a.createElement("p",{className:"body-font"},e.confirmed)),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"active"},n.a.createElement("p",{className:"head-font"},"Active Cases"),n.a.createElement("p",{className:"body-font"}," ",e.active)),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"recovered "},n.a.createElement("p",{className:"head-font"},"Recovered"),n.a.createElement("p",{className:"body-font"},e.recovered)),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"deaths"},n.a.createElement("p",{className:"head-font"},"Deaths"),n.a.createElement("p",{className:"body-font"},e.death))));var a=e.stats;if(a&&void 0!==a.length){var t=[],s=[],r=[],c=[],l=[];return a.forEach((function(e){t.push(e.confirmed),s.push(e.deaths),r.push(e.recovered),c.push(e.confirmed-e.recovered-e.deaths),l.push(e.date)})),n.a.createElement(b.a,{fluid:!0},n.a.createElement(N.a,{className:"today-row justify-content-center"},n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"confirmed"},n.a.createElement("p",{className:"head-font"},"Total Cases"),n.a.createElement("p",{className:"body-font"},e.confirmed),n.a.createElement(y,{chartData:t,dates:l,color:"#4285f4"})),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"active"},n.a.createElement("p",{className:"head-font"},"Active Cases"),n.a.createElement("p",{className:"body-font"}," ",e.active),n.a.createElement(y,{chartData:c,dates:l,color:"#4285f4"})),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"recovered "},n.a.createElement("p",{className:"head-font"},"Recovered"),n.a.createElement("p",{className:"body-font"},e.recovered),n.a.createElement(y,{chartData:r,dates:l,color:"#4285f4"})),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"deaths"},n.a.createElement("p",{className:"head-font"},"Deaths"),n.a.createElement("p",{className:"body-font"},e.death),n.a.createElement(y,{chartData:s,dates:l,color:"#4285f4"}))))}return n.a.createElement(n.a.Fragment,null)},O=t(118),w=t.n(O);t(366),t(367),t(368);var D=function(){return n.a.createElement("footer",{className:"footer-distributed"},n.a.createElement("div",{className:"footer-left"},n.a.createElement("h3",{style:{marginBottom:"2vh"}},n.a.createElement("span",null,n.a.createElement("img",{style:{padding:"0px 0px 6px 0px"},src:"logo192.png",height:"34px",width:"50px",alt:"india-flag"})),"Covid",n.a.createElement("span",null," Tracker")),n.a.createElement("p",{className:"footer-company-name",style:{color:"lightseagreen"}},"Navdeep Singh \xa9 2020"),n.a.createElement("p",{className:"footer-company-name"},"Under the mentorship of CSE Department,MMDU"),n.a.createElement("p",{className:"footer-company-name"},"Maharishi Markandeshwar (Deemed to be University)")),n.a.createElement("div",{className:"footer-center"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-envelope"}),n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:support@company.com"},"naviroyal909098@gmail.com"))),n.a.createElement("div",{className:"footer-icons"},n.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100011014504407"},n.a.createElement("i",{className:"fa fa-facebook"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/navdeep-singh-684632168/"},n.a.createElement("i",{className:"fa fa-linkedin"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-github"})))),n.a.createElement("div",{className:"footer-right"}))},k=t(46),S=t.n(k);var x=function(e){var a=e.stats1,t=e.stats2,s=S()(e.startDate).format("YYYY-M-D"),r=!1,c=!1,l=!0,o=!0,m=S()(e.endDate).format("YYYY-M-D");if(Date.parse(s)>=Date.parse(m)&&alert("Start Date should be less than End Date"),a&&void 0!==a.length){var i=[],d=0,v=[],g=0,h=[],u=0,f=[],p=0,E=[];if(a.forEach((function(e,t){s==e.date&&(r=!0,d+=e.confirmed,p+=e.confirmed-e.recovered-e.deaths,u+=e.recovered,g+=e.deaths),1==r&&(i.push(e.confirmed),v.push(e.deaths),h.push(e.recovered),f.push(e.confirmed-e.recovered-e.deaths),E.push(e.date)),(e.date==m||a.length-1==t&&1==l)&&(r=!1,l=!1,d=e.confirmed-d,p=e.confirmed-e.recovered-e.deaths-p,u=e.recovered-u,g=e.deaths-g)})),t&&void 0!==t.length){var C=[],O=[],w=[],D=[],k=[],x=0,T=0,M=0,z=0;return t.forEach((function(e,a){s==e.date&&(c=!0,x+=e.confirmed,T+=e.confirmed-e.recovered-e.deaths,M+=e.recovered,z+=e.deaths),1==c&&(C.push(e.confirmed),O.push(e.deaths),w.push(e.recovered),D.push(e.confirmed-e.recovered-e.deaths),k.push(e.date)),(m==e.date||t.length-1==a&&1==o)&&(c=!1,o=!1,x=e.confirmed-x,T=e.confirmed-e.recovered-e.deaths-T,M=e.recovered-M,z=e.deaths-z)})),n.a.createElement(b.a,{fluid:!0},n.a.createElement(N.a,{className:"today-row justify-content-center"},n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"confirmed"},n.a.createElement("p",{className:"head-font"},"Total Cases"),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedOneCountry),n.a.createElement("p",null,d),n.a.createElement(y,{chartData:i,dates:E,color:"#4285f4"})),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedTwoCountry),n.a.createElement("p",{className:"body-font"},x),n.a.createElement(y,{chartData:C,dates:k,color:"purple"}))),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"active"},n.a.createElement("p",{className:"head-font"},"Active Cases"),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedOneCountry),n.a.createElement("p",null,p),n.a.createElement(y,{chartData:f,dates:E,color:"#4285f4"})),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedTwoCountry),n.a.createElement("p",{className:"body-font"},T),n.a.createElement(y,{chartData:D,dates:k,color:"purple"}))),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"recovered "},n.a.createElement("p",{className:"head-font"},"Recovered"),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedOneCountry),n.a.createElement("p",null,u),n.a.createElement(y,{chartData:h,dates:E,color:"#4285f4"})),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedTwoCountry),n.a.createElement("p",{className:"body-font"},M),n.a.createElement(y,{chartData:w,dates:k,color:"purple"}))),n.a.createElement(j.a,{md:2,sm:4,xs:5,className:"deaths"},n.a.createElement("p",{className:"head-font"},"Deaths"),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedOneCountry),n.a.createElement("p",null,g),n.a.createElement(y,{chartData:v,dates:E,color:"#4285f4"})),n.a.createElement("div",null,n.a.createElement("p",{style:{float:"left"}},e.selectedTwoCountry),n.a.createElement("p",{className:"body-font"},z),n.a.createElement(y,{chartData:O,dates:k,color:"purple"})))))}return n.a.createElement(n.a.Fragment,null)}},T=t(81),M=t.n(T),z=(t(369),function(e){return n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-sm  table-bordered table-striped "},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Name"),n.a.createElement("th",{scope:"col"},"Confirmed"),n.a.createElement("th",{scope:"col"},"Active"),n.a.createElement("th",{scope:"col"},"Recovered"),n.a.createElement("th",{scope:"col"},"Deaths"))),n.a.createElement("tbody",null,e.districtWiseData.map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.confirmed),n.a.createElement("td",null,e.active),n.a.createElement("td",null,e.recovered),n.a.createElement("td",null,e.death))})))))}),U=(t(370),t(119)),A=t.n(U);var R=function(){var e=Object(s.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],c=Object(s.useState)(null),i=Object(l.a)(c,2),v=i[0],g=i[1],h=Object(s.useState)(null),u=Object(l.a)(h,2),f=u[0],p=u[1],E=Object(s.useState)(null),y=Object(l.a)(E,2),b=y[0],N=y[1],j=Object(s.useState)(null),O=Object(l.a)(j,2),k=O[0],S=O[1],T=Object(s.useState)(null),U=Object(l.a)(T,2),R=U[0],P=U[1],H=Object(s.useState)(null),Y=Object(l.a)(H,2),F=Y[0],W=Y[1],G=Object(s.useState)(null),B=Object(l.a)(G,2),q=B[0],I=B[1],J=Object(s.useState)(null),L=Object(l.a)(J,2),_=L[0],K=L[1],Q=Object(s.useState)([]),$=Object(l.a)(Q,2),V=$[0],X=$[1],Z=Object(s.useState)(null),ee=Object(l.a)(Z,2),ae=ee[0],te=ee[1],se=Object(s.useState)(null),ne=Object(l.a)(se,2),re=ne[0],ce=ne[1],le=Object(s.useState)(null),oe=Object(l.a)(le,2),me=oe[0],ie=oe[1],de=Object(s.useState)(null),ve=Object(l.a)(de,2),ge=ve[0],he=ve[1],ue=Object(s.useState)(new Date("2020-1-22")),fe=Object(l.a)(ue,2),pe=fe[0],Ee=fe[1],ye=Object(s.useState)(new Date),be=Object(l.a)(ye,2),Ne=be[0],je=be[1];Object(s.useEffect)((function(){fetch("https://pythoncoronaapi.herokuapp.com/global").then((function(e){return e.json()})).then((function(e){K(e)})),fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){me={confirmed:0,recovered:0,deaths:0},(ae=Object.keys(e).map((function(e){return e}))).forEach((function(a){var t=e[a];t=t[t.length-1],me.confirmed+=t.confirmed,me.recovered+=t.recovered,me.deaths+=t.deaths})),ge=[],ae.forEach((function(a){e[a].forEach((function(e,a){if(void 0===ge[a]){var t={date:e.date,confirmed:e.confirmed,recovered:e.recovered,deaths:e.deaths};ge.push(t)}else ge[a].confirmed+=e.confirmed,ge[a].recovered+=e.recovered,ge[a].deaths+=e.deaths}))})),te(ae),ce(e),ie(me),he(ge)}))}),[]);var Ce=function(e){fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(a){console.log(a),console.log(a[e].districtData);var t=[];for(var s in a[e].districtData)a[e].districtData.hasOwnProperty(s)&&t.push({name:s,confirmed:a[e].districtData[s].confirmed,active:a[e].districtData[s].active,recovered:a[e].districtData[s].recovered,death:a[e].districtData[s].deceased});console.log(t),X(t)}))};return n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement(A.a,{header:n.a.createElement("div",null,n.a.createElement(m,null))})),n.a.createElement("hr",{className:"top-line"}),n.a.createElement("h1",{className:"india-heading"},"Global Data "),null!=_?n.a.createElement(C,{stats:ge,confirmed:_.confirmed,active:_.active,recovered:_.recovered,death:_.deaths,selectedCountry:"Global Numbers"}):null,n.a.createElement("hr",{className:"line"}),n.a.createElement("h1",{className:"india-heading"},"Get Corona Results Counrty Wise "),n.a.createElement("div",null,n.a.createElement(d,{changeCountryHandler:function(e){g(o.countries[e].name);var a="https://pythoncoronaapi.herokuapp.com/country/";console.log(o.countries[e].name),a+=o.countries[e].name,fetch(a).then((function(e){return e.json()})).then((function(e){S(e)}))},placeholder:"Select a Country",alignOptions:"right"}),null!=k?n.a.createElement(C,{stats:"United States"===v?re.US:re[v],confirmed:k.confirmed,active:k.active,recovered:k.recovered,death:k.deaths,selectedCountry:v}):null,n.a.createElement("hr",{className:"line"})),n.a.createElement("h1",{className:"india-heading"},"Compare Across Two Countries "),n.a.createElement("div",null,n.a.createElement("div",{className:"compare-dropdown"},n.a.createElement(d,{changeCountryHandler:function(e){"United States"===o.countries[e].name?p("US"):p(o.countries[e].name);var a="https://pythoncoronaapi.herokuapp.com/country/";console.log(o.countries[e].name),a+=o.countries[e].name,fetch(a).then((function(e){return e.json()})).then((function(e){P(e)}))},placeholder:"Country 1",alignOptions:"right"}),n.a.createElement(d,{changeCountryHandler:function(e){"United States"===o.countries[e].name?N("US"):N(o.countries[e].name);var a="https://pythoncoronaapi.herokuapp.com/country/";console.log(o.countries[e].name),a+=o.countries[e].name,fetch(a).then((function(e){return e.json()})).then((function(e){W(e)}))},placeholder:"Country 2",alignOptions:"left"})),n.a.createElement("div",{className:"compare-dropdown"},n.a.createElement("div",null,n.a.createElement("h3",{className:"india-heading"},"From"),n.a.createElement(M.a,{className:"date-picker",selected:pe,dateFormat:"yyyy-MM-dd",placeholderText:"Select start Date",onChange:function(e){return Ee(e)}})),n.a.createElement("div",null,n.a.createElement("h3",{className:"india-heading"},"To"),n.a.createElement(M.a,{className:"date-picker",selected:Ne,dateFormat:"yyyy-MM-dd",placeholderText:"Select end Date",onChange:function(e){return je(e)}}))),null!=R&&null!=F?n.a.createElement(x,{stats1:re[f],stats2:re[b],confirmedOne:R.confirmed,activeOne:R.active,recoveredOne:R.recovered,deathOne:R.deaths,confirmedTwo:F.confirmed,activeTwo:F.active,recoveredTwo:F.recovered,deathTwo:F.deaths,selectedOneCountry:f,selectedTwoCountry:b,startDate:pe,endDate:Ne}):null,n.a.createElement("hr",{className:"line"})),n.a.createElement("div",{className:"state-container"},n.a.createElement("h1",{className:"india-heading"},"Get Results StateWise For India"),n.a.createElement(w.a,{options:["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Chandigarh","Dadar Nagar Haveli","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Odisha","Puducherry","Punjab","Rajasthan","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"],placeholderClassName:"myPlaceholderClassName",menuClassName:"myMenuClassName",controlClassName:"myControlClassName",className:"myClassName state-dropdown",onChange:function(e){return function(e){r(e.value);var a="https://pythoncoronaapi.herokuapp.com/state/";a+=e.value,fetch(a).then((function(e){return e.json()})).then((function(e){I(e)})),Ce(e.value)}(e)},value:t,placeholder:"Select a State"}),null!=q?n.a.createElement(C,{stats:"states",confirmed:q.Total,active:q.Total-q.Cured-q.Death,recovered:q.Cured,death:q.Death}):null,null!=q?n.a.createElement("h1",{className:"india-heading"},"District wise :",t):null,null!=q?n.a.createElement(z,{districtWiseData:V}):null,n.a.createElement("hr",{className:"line"})),n.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,a,t){var s={"./ad.svg":143,"./ae.svg":144,"./af.svg":145,"./ag.svg":146,"./ai.svg":147,"./al.svg":148,"./am.svg":149,"./ao.svg":150,"./ar.svg":151,"./as.svg":152,"./at.svg":153,"./au.svg":154,"./aw.svg":155,"./az.svg":156,"./ba.svg":157,"./bb.svg":158,"./bd.svg":159,"./be.svg":160,"./bf.svg":161,"./bg.svg":162,"./bh.svg":163,"./bi.svg":164,"./bj.svg":165,"./bm.svg":166,"./bo.svg":167,"./br.svg":168,"./bs.svg":169,"./bt.svg":170,"./bw.svg":171,"./by.svg":172,"./bz.svg":173,"./ca.svg":174,"./cd.svg":175,"./cf.svg":176,"./cg.svg":177,"./ch.svg":178,"./ci.svg":179,"./ck.svg":180,"./cl.svg":181,"./cm.svg":182,"./cn.svg":183,"./co.svg":184,"./cr.svg":185,"./cu.svg":186,"./cv.svg":187,"./cw.svg":188,"./cy.svg":189,"./cz.svg":190,"./de.svg":191,"./dj.svg":192,"./dk.svg":193,"./dm.svg":194,"./do.svg":195,"./dz.svg":196,"./ec.svg":197,"./ee.svg":198,"./eg.svg":199,"./er.svg":200,"./es.svg":201,"./et.svg":202,"./fi.svg":203,"./fj.svg":204,"./fk.svg":205,"./fm.svg":206,"./fo.svg":207,"./fr.svg":208,"./ga.svg":209,"./gb.svg":210,"./gd.svg":211,"./ge.svg":212,"./gg.svg":213,"./gh.svg":214,"./gi.svg":215,"./gl.svg":216,"./gm.svg":217,"./gn.svg":218,"./gq.svg":219,"./gr.svg":220,"./gt.svg":221,"./gu.svg":222,"./gw.svg":223,"./hk.svg":224,"./hn.svg":225,"./hr.svg":226,"./ht.svg":227,"./hu.svg":228,"./id.svg":229,"./ie.svg":230,"./il.svg":231,"./im.svg":232,"./in.svg":233,"./io.svg":234,"./iq.svg":235,"./ir.svg":236,"./is.svg":237,"./it.svg":238,"./je.svg":239,"./jm.svg":240,"./jo.svg":241,"./jp.svg":242,"./ke.svg":243,"./kg.svg":244,"./kh.svg":245,"./ki.svg":246,"./km.svg":247,"./kn.svg":248,"./kp.svg":249,"./kr.svg":250,"./kw.svg":251,"./ky.svg":252,"./kz.svg":253,"./la.svg":254,"./lb.svg":255,"./li.svg":256,"./lk.svg":257,"./lr.svg":258,"./ls.svg":259,"./lt.svg":260,"./lu.svg":261,"./lv.svg":262,"./ly.svg":263,"./ma.svg":264,"./mc.svg":265,"./md.svg":266,"./me.svg":267,"./mg.svg":268,"./mh.svg":269,"./mk.svg":270,"./ml.svg":271,"./mm.svg":272,"./mn.svg":273,"./mo.svg":274,"./mp.svg":275,"./mq.svg":276,"./mr.svg":277,"./ms.svg":278,"./mt.svg":279,"./mu.svg":280,"./mv.svg":281,"./mw.svg":282,"./mx.svg":283,"./my.svg":284,"./mz.svg":285,"./na.svg":286,"./nato.svg":287,"./ne.svg":288,"./nf.svg":289,"./ng.svg":290,"./ni.svg":291,"./nl.svg":292,"./no.svg":293,"./np.svg":294,"./nr.svg":295,"./nu.svg":296,"./nz.svg":297,"./om.svg":298,"./pa.svg":299,"./pe.svg":300,"./pf.svg":301,"./pg.svg":302,"./ph.svg":303,"./pk.svg":304,"./pl.svg":305,"./pn.svg":306,"./pr.svg":307,"./ps.svg":308,"./pt.svg":309,"./pw.svg":310,"./py.svg":311,"./qa.svg":312,"./ro.svg":313,"./rs.svg":314,"./ru.svg":315,"./rw.svg":316,"./sa.svg":317,"./sb.svg":318,"./sc.svg":319,"./sd.svg":320,"./se.svg":321,"./sg.svg":322,"./si.svg":323,"./sk.svg":324,"./sl.svg":325,"./sm.svg":326,"./sn.svg":327,"./so.svg":328,"./sr.svg":329,"./ss.svg":330,"./st.svg":331,"./sv.svg":332,"./sx.svg":333,"./sy.svg":334,"./sz.svg":335,"./tc.svg":336,"./td.svg":337,"./tg.svg":338,"./th.svg":339,"./tibet.svg":340,"./tj.svg":341,"./tk.svg":342,"./tm.svg":343,"./tn.svg":344,"./to.svg":345,"./tr.svg":346,"./tt.svg":347,"./tv.svg":348,"./tw.svg":349,"./tz.svg":350,"./ua.svg":351,"./ug.svg":352,"./us.svg":353,"./uy.svg":354,"./uz.svg":355,"./ve.svg":356,"./vi.svg":357,"./vn.svg":358,"./vu.svg":359,"./ws.svg":360,"./ye.svg":361,"./za.svg":362,"./zm.svg":363,"./zw.svg":364};function n(e){var a=r(e);return t(a)}function r(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=87},88:function(e,a,t){}},[[126,1,2]]]);
//# sourceMappingURL=main.5a2d03c3.chunk.js.map