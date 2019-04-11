var mainContain = new Vue({
	el:'#mainContain',
	data:{
		curDay:'2018年4月12日',
		curWeek:'星期四',
		curTime:'12:30:56',
		weatherImage:'images/rainy.png',
		remindNothing:false,
		distinctData:[
		{
			distinctItem:'上城区'
		},
		{
			distinctItem:'下城区'
		},
		{
			distinctItem:'江干区'
		},
		{
			distinctItem:'拱墅区'
		},
		{
			distinctItem:'西湖区'
		},
		{
			distinctItem:'滨江区'
		},
		{
			distinctItem:'萧山区'
		},
		{
			distinctItem:'余杭区'
		},
		{
			distinctItem:'富阳区'
		}
		],
		accidentRankData:[
		{
			name:'沈继涛',
			carId:'浙A37891',
			curRoad:'紫金港路',
			rate:'9.37‰'
		},
		{
			name:'林一凡',
			carId:'浙B63345',
			curRoad:'余杭塘路',
			rate:'7.85‰'
		},
		{
			name:'王示封',
			carId:'浙A18945',
			curRoad:'建国路',
			rate:'6.01‰'
		},
		{
			name:'毛佳巧',
			carId:'浙A78942',
			curRoad:'秋涛路',
			rate:'4.06‰'
		},
		{
			name:'郑慧琳',
			carId:'浙A54892',
			curRoad:'紫金港路',
			rate:'2.95‰'
		},
		{
			name:'齐梦瑶',
			carId:'浙J63822',
			curRoad:'中山路',
			rate:'1.58‰'
		},
		{
			name:'刘德高',
			carId:'浙A29803',
			curRoad:'文一西路',
			rate:'0.58‰'
		}
		],
		recordsData:[
		{
			name:'沈继涛',
			carId:'浙A37891',
			road:'紫金港路',
			type:'追尾',
			time:'2018/05/02'
		},
		{
			name:'林一凡',
			carId:'浙B63345',
			road:'环城东路',
			type:'逆行',
			time:'2018/04/28'
		},
		{
			name:'郑慧琳',
			carId:'浙A54892',
			road:'紫金港路',
			type:'酒驾',
			time:'2018/04/28'
		},
		{
			name:'毛佳巧',
			carId:'浙A78942',
			road:'紫金港路',
			type:'违规停车',
			time:'2018/04/15'
		},
		{
			name:'童朴路',
			carId:'浙A29803',
			road:'人民路',
			type:'醉驾',
			time:'2018/04/14'
		},
		{
			name:'爱笛声',
			carId:'浙A32643',
			road:'余杭塘路',
			type:'闯红灯',
			time:'2018/03/30'
		},
		{
			name:'罗绮梦',
			carId:'浙A12538',
			road:'人民路',
			type:'追尾',
			time:'2018/03/17'
		},
		{
			name:'刘长工',
			carId:'浙A29034',
			road:'余杭塘路',
			type:'酒驾',
			time:'2018/03/15'
		},
		{
			name:'沈华绯',
			carId:'浙J27839',
			road:'紫金港路',
			type:'追尾',
			time:'2018/02/27'
		}
		],
		recordsDataCopy:[
		{
			name:'沈继涛',
			carId:'浙A37891',
			road:'紫金港路',
			type:'追尾',
			time:'2018/05/02'
		},
		{
			name:'林一凡',
			carId:'浙B63345',
			road:'环城东路',
			type:'逆行',
			time:'2018/04/28'
		},
		{
			name:'郑慧琳',
			carId:'浙A54892',
			road:'紫金港路',
			type:'酒驾',
			time:'2018/04/28'
		},
		{
			name:'毛佳巧',
			carId:'浙A78942',
			road:'紫金港路',
			type:'违规停车',
			time:'2018/04/15'
		},
		{
			name:'童朴路',
			carId:'浙A29803',
			road:'人民路',
			type:'醉驾',
			time:'2018/04/14'
		},
		{
			name:'爱笛声',
			carId:'浙A32643',
			road:'余杭塘路',
			type:'闯红灯',
			time:'2018/03/30'
		},
		{
			name:'罗绮梦',
			carId:'浙A12538',
			road:'人民路',
			type:'追尾',
			time:'2018/03/17'
		},
		{
			name:'刘长工',
			carId:'浙A29034',
			road:'余杭塘路',
			type:'酒驾',
			time:'2018/03/15'
		},
		{
			name:'沈华绯',
			carId:'浙J27839',
			road:'紫金港路',
			type:'追尾',
			time:'2018/02/27'
		}
		],
		radarInfoData:[
		{
			itemImage:'images/greenPoint.png',
			itemName:'驾龄',
			itemInfo:'20'
		},
		{
			itemImage:'images/yellowPoint.png',
			itemName:'疲劳指数',
			itemInfo:'82'
		},
		{
			itemImage:'images/greenPoint.png',
			itemName:'情绪',
			itemInfo:'86'
		},
		{
			itemImage:'images/greenPoint.png',
			itemName:'注意力',
			itemInfo:'75'
		},
		{
			itemImage:'images/greenPoint.png',
			itemName:'控制力',
			itemInfo:'80'
		},
		{
			itemImage:'images/greenPoint.png',
			itemName:'警惕性',
			itemInfo:'69'
		}
		],
		tfhoursAlarmData:[
		{
			time:'2018/04/25 18:30 ',
			road:'紫金港路',
			event:'浙A37891追尾浙A3898'
		},
		{
			time:'2018/04/25 16:08 ',
			road:'建国路',
			event:'浙A32391逆向行驶'
		},
		{
			time:'2018/04/25 15:10',
			road:'紫金港路',
			event:'浙A28391酒驾'
		},
		{
			time:'2018/04/25 15:08',
			road:'文一西路',
			event:'浙C27892高速逆行'
		},
		{
			time:'2018/04/25 12:29',
			road:'紫金港路',
			event:'浙A72382逆行'
		},
		{
			time:'2018/04/25 11:31',
			road:'建国北路',
			event:'浙A72382闯红灯'
		},
		{
			time:'2018/04/25 10:29',
			road:'余杭塘路',
			event:'浙E24312撞人'
		},
		{
			time:'2018/04/25 7:30',
			road:'文二西路',
			event:'浙E27848逆行'
		},
		{
			time:'2018/04/25 6:03',
			road:'秋涛路',
			event:'浙C27329追尾浙J23872'
		}
		]
	},
	methods:{
		searchAction:function(){
			var searchText = $('.searchContain input').val();
			this.remindNothing = false;
			// $('.recordsShowBox table tbody').html("");
			// console.log(searchText);
			this.recordsData = [];
			if(searchText==""){
				var len = this.recordsDataCopy.length;
				for (var i = 0 ;i<len;i++){
					this.recordsData.push(this.recordsDataCopy[i]);
				}
				// console.log("123");
				// console.log(this.recordsData);
			}
			else{
				var len = this.recordsDataCopy.length;
				for (var i = 0 ;i<len;i++){
					if(this.recordsDataCopy[i].name == searchText || 
						this.recordsDataCopy[i].carId == searchText ||
						this.recordsDataCopy[i].road == searchText)
						this.recordsData.push(this.recordsDataCopy[i]);
				}
				// console.log(this.recordsData);
				// console.log(this.recordsDataCopy);
				if(this.recordsData.length==0){
					// $('.recordsShowBox table tbody').html('<span>搜不到任何东西~</span>');
					this.remindNothing = true;
				}
			}
		},
		checkTheDriverInfo:function(carId,roadName){
			// console.log(carId);
			radarOption.radar.indicator =
			[
				{ name: '驾龄', max: 35},
				{ name: '疲劳指数', max: 100},
				{ name: '情绪', max: 100},
				{ name: '注意力', max: 100},
				{ name: '控制力', max: 100},
				{ name: '警惕性', max: 100}
		    ];
		    radarOption.series[0].data =
			[
				{
		            value : [80, 36, 95, 80, 2, 10],
		            name : '预测情况    '
		        },
		         {
		            value : [80, 36, 90, 85, 3, 5],
		            name : '实际情况'
		        }
		    ];
	        for(var i = 0;i<6;i++){
				radarOption.series[0].data[0].value[i] = parseInt(
				radarOption.radar.indicator[i].max*0.1+
				radarOption.radar.indicator[i].max*Math.random()*0.8);

				if(Math.random()>=0.5){
					radarOption.series[0].data[1].value[i] = parseInt(
					radarOption.series[0].data[0].value[i]+
					radarOption.radar.indicator[i].max*Math.random()*0.1);
				}
				else{
					radarOption.series[0].data[1].value[i] = parseInt(
					radarOption.series[0].data[0].value[i]-
					radarOption.radar.indicator[i].max*Math.random()*0.1);
				}
			}
		    if (radarOption && typeof radarOption === "object") {
			    radarChart.setOption(radarOption, true);
			}
			for(var i =0 ;i<6;i++){
				this.radarInfoData[i].itemName=radarOption.radar.indicator[i].name;
				this.radarInfoData[i].itemInfo=parseInt(radarOption.series[0].data[1].value[i]);
			}
			//疲劳值
			if(this.radarInfoData[1].itemInfo>=0&&this.radarInfoData[1].itemInfo<=33){
				this.radarInfoData[1].itemImage = 'images/greenPoint.png';
			}
			else if(this.radarInfoData[1].itemInfo>33&&this.radarInfoData[1].itemInfo<=66){
				this.radarInfoData[1].itemImage = 'images/yellowPoint.png';
			}
			else {
				this.radarInfoData[1].itemImage = 'images/redPoint.png';
			}
			//情绪、注意力、控制力、警惕性
			for(var i = 2;i<6;i++){
				if(this.radarInfoData[i].itemInfo>=0&&this.radarInfoData[i].itemInfo<=33){
					this.radarInfoData[i].itemImage = 'images/redPoint.png';
				}
				else if(this.radarInfoData[i].itemInfo>33&&this.radarInfoData[i].itemInfo<=66){
					this.radarInfoData[i].itemImage = 'images/yellowPoint.png';
				}
				else {
					this.radarInfoData[i].itemImage = 'images/greenPoint.png';
				}
			}
			$('.radarInfo>span').text(carId+"实际情况");


			$('.radarCarId').text(carId);
			$('.roadName').text(roadName);
		},
		changeTheAccidentData:function (){
			var totLen = this.accidentRankData.length;
			for(var i = 0;i<totLen;i++){
				this.accidentRankData[i].rate = (Math.random()*10).toFixed(2)+"‰";
				this.accidentRankData[i].name = getName();
			}
			this.accidentRankData.sort(sortByRate);
		},
		getName:function(){
			var familyNames = new Array(
				"赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", 
				"褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
				"何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", 
				"陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
				"云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", 
				"昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
				"酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", 
				"倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
				"乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", 
				"元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
			);
			var givenNames = new Array(
				"子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", 
				"昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", 
				"东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", 
				"美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", 
				"建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", 
				"涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", 
				"子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", 
				"佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", 
				"佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", 
				"清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
			);
			var i = parseInt( 100 * Math.random());
			var familyName = familyNames[i];
			var j = parseInt( 100 * Math.random());
			var givenName = givenNames[i];
			var name = familyName + givenName;
			return name;
		},
		changeTheDistrict:function(district){
			$('.curDistincts span').text(district);
			console.log(district);
			changeTheAccidentData();
		}
	},
	mounted: function () {

	}
})
function sortByRate(a,b){
	return a.rate<b.rate;
}
// setInterval(changeTheAccidentData,60000);
function changeTheAccidentData(){
	var totLen = mainContain.$data.accidentRankData.length;
	for(var i = 0;i<totLen;i++){
		mainContain.$data.accidentRankData[i].rate = (Math.random()*10).toFixed(2)+"‰";
		mainContain.$data.accidentRankData[i].name = getName();
	}
	mainContain.$data.accidentRankData.sort(sortByRate);
}
function swap($a,$b){
	var temp=eval($a);
	eval($a+"="+$b);
	eval($b+"=temp");
}
function changeThePickedRoadAccidentData(roadArr){
	var totLen = mainContain.$data.accidentRankData.length;
	var roadArrLen = roadArr.length-1;
	console.log(roadArr,roadArrLen);
	for(var i = 0;i<totLen;i++){
		mainContain.$data.accidentRankData[i].rate = (Math.random()*10).toFixed(2)+"‰";
		mainContain.$data.accidentRankData[i].curRoad = roadArr[parseInt(Math.random()*roadArrLen)];
		mainContain.$data.accidentRankData[i].name = getName();
		// console.log(mainContain.$data.accidentRankData[i].curRoad);
	}
	var tfDataLen = mainContain.$data.tfhoursAlarmData.length;
	for(var i = 0;i<tfDataLen;i++){
		mainContain.$data.tfhoursAlarmData[i].road = roadArr[parseInt(Math.random()*roadArrLen)];
		// console.log(mainContain.$data.tfhoursAlarmData[i].road);
		swap('mainContain.$data.tfhoursAlarmData['+parseInt(Math.random()*tfDataLen)+'].event','mainContain.$data.tfhoursAlarmData['+parseInt(Math.random()*tfDataLen)+'].event');
		swap('mainContain.$data.tfhoursAlarmData['+parseInt(Math.random()*tfDataLen)+'].time','mainContain.$data.tfhoursAlarmData['+parseInt(Math.random()*tfDataLen)+'].time');
	}
	// console.log(mainContain.$data.tfhoursAlarmData);
	mainContain.$data.accidentRankData.sort(sortByRate);
	// setTimeout(reStartTheMarquee,1000);
}
function reStartTheMarquee(){
	
		// var curHtml = $('.tfhoursAlarmWordsShow').html('<marquee direction=up behavior="scroll" scrolldelay="200" onmouseover="stop()"onmouseout="start()" class="marqueeForWords">\
		// 					<span v-for="(tfhoursItem,index) in tfhoursAlarmData">\
		// 						<b>{{index+1}}.</b>\
		// 						{{tfhoursItem.time}}\
		// 						<u style="width: 100%;">{{tfhoursItem.road}}</u>\
		// 						{{tfhoursItem.event}}\
		// 					</span>\
		// 				</marquee>');
		// console.log(curHtml);
		// $('.tfhoursAlarmWordsShow').append(curHtml);
		var curHtml = $('.tfhoursAlarmWordsShow').html();
		console.log(curHtml);
		$('.tfhoursAlarmWordsShow').append(curHtml);
		// mainContain.$forceUpdate();

}
function getCurDay(){
	var myDate = new Date();
   	return myDate.getYear()+1900+'年'+(myDate.getMonth()+1)+'月'+myDate.getDate()+'日';
}
function getCurWeek(){
	var myDate = new Date();
	var curDay = myDate.getDay();
	if(curDay == 0){
		return '星期日';
	}
	else if(curDay == 1) {
		return '星期一';
	}
	else if(curDay == 2) {
		return '星期二';
	}
	else if(curDay == 3) {
		return '星期三';
	}
	else if(curDay == 4) {
		return '星期四';
	}
	else if(curDay == 5) {
		return '星期五';
	}
	else if(curDay == 6) {
		return '星期六';
	}
}
function getCurTime(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if(hours>=0 && hours<=9){
		hours = "0"+hours;
	}
	if(minutes>=0 && minutes<=9){
		minutes = "0"+minutes;
	}
	if(seconds>=0 && seconds<=9){
		seconds = "0"+seconds;
	}
	var currentdate = hours + ":" + minutes
	       + ":" + seconds;
	return currentdate;
}
function setCurDayTime(){
	// console.log(mainContain.$data.curDay);
	mainContain.$data.curDay = getCurDay();
	mainContain.$data.curWeek = getCurWeek();
	mainContain.$data.curTime= getCurTime();
}
setCurDayTime();
setInterval(setCurDayTime,1000);


function findWeather() {
	var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
	$.getScript(cityUrl, function (script, textStatus, jqXHR) {
		var citytq = remote_ip_info.city; // 获取城市
		citytq = '杭州';
		var url = "http://api.map.baidu.com/telematics/v3/weather?location=" + citytq + "&output=json&ak=EGgzZ22dsboWQEcPQ6KDQLknQd3YkkkP";
		// EGgzZ22dsboWQEcPQ6KDQLknQd3YkkkP
		// console.log(url);
		$.ajax({
			url: url,
			dataType: 'jsonp',
			scriptCharset: "gbk",
			success: function (data) {
				// console.log(data);
				
				var curData = data.results[0].weather_data[0];
				$('.weatherShowBox span').text(curData.temperature+" "+curData.wind);
				// $('.weatherShowBox .imageContain img').attr('src','images/sunny.png');
				
				// curData.weather = "多云转雨";
				// console.log(curData.weather.indexOf("晴"));
				if(curData.weather.indexOf("雨")!=-1){
					// console.log("1");
					mainContain.$data.weatherImage = 'images/rainy.png';
				}
				else if(curData.weather.indexOf("晴")!=-1){
					// console.log("2");
					mainContain.$data.weatherImage = 'images/sunny.png';
				}
				else if(curData.weather.indexOf("阴")!=-1){
					// console.log("3");
					mainContain.$data.weatherImage = 'images/cloudy.png';
				}
				else{
					mainContain.$data.weatherImage = 'images/sunny.png';
				}
				console.log(curData.weather);
			}
		});
	});
}
findWeather();


// !function(a){a.fn.kxbdMarquee=function(b){var c=a.extend({},a.fn.kxbdMarquee.defaults,b);return this.each(function(){function l(){var b,a="left"==c.direction||"right"==c.direction?"scrollLeft":"scrollTop";return c.loop>0&&(k+=c.scrollAmount,k>i*c.loop)?(d[a]=0,clearInterval(m)):("left"==c.direction||"up"==c.direction?(b=d[a]+c.scrollAmount,b>=i&&(b-=i),d[a]=b):(b=d[a]-c.scrollAmount,0>=b&&(b+=i),d[a]=b),void 0)}var k,m,b=a(this),d=b.get(0),e=b.width(),f=b.height(),g=b.children(),h=g.children(),i=0,j="left"==c.direction||"right"==c.direction?1:0;g.css(j?"width":"height",1e4),c.isEqual?i=h[j?"outerWidth":"outerHeight"]()*h.length:h.each(function(){i+=a(this)[j?"outerWidth":"outerHeight"]()}),(j?e:f)>i||(g.append(h.clone()).css(j?"width":"height",2*i),k=0,m=setInterval(l,c.scrollDelay),b.hover(function(){clearInterval(m)},function(){clearInterval(m),m=setInterval(l,c.scrollDelay)}))})},a.fn.kxbdMarquee.defaults={isEqual:!0,loop:0,direction:"left",scrollAmount:1,scrollDelay:20},a.fn.kxbdMarquee.setDefaults=function(b){a.extend(a.fn.kxbdMarquee.defaults,b)}}(jQuery);
// $(function(){
//   $(".marqueeForWords").kxbdMarquee();
//   $(".marqueeForWords").kxbdMarquee({direction:"down"});
//   $(".marqueeForWords").kxbdMarquee({direction:"left",isEqual:false});
//   $(".marqueeForWords").kxbdMarquee({direction:"up",isEqual:false});
// });




var map = new BMap.Map("centerMapBox");          // 创建地图实例  
var point = new BMap.Point(120.168347, 30.281101);  // 创建点坐标  
map.centerAndZoom(point, 14);                 // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
map.addControl(new BMap.NavigationControl());    
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl()); 

var mapStyle={  style : "midnight" }  
map.setMapStyle(mapStyle);


// var marker = new BMap.Marker(point);        // 创建标注    
// map.addOverlay(marker); 
var traffic = new BMap.TrafficLayer();        // 创建交通流量图层实例      

// map.addEventListener("click", getCurDistrict);

// var polyline = new BMap.Polyline([
//     new BMap.Point(116.399, 39.910),
//     new BMap.Point(116.405, 39.920)
//     ],
//     {strokeColor:"red", strokeWeight:6, strokeOpacity:0.5}
//     );
// map.addOverlay(polyline);

// function clearAll(e){ 
// 	map.removeOverlay(marker);
// }
function getCurDistrict(e){
	x=e.point.lng;   //获取鼠标当前点击的经纬度
	y=e.point.lat;
	// console.log(x,y);
	if(x != "" && y != ""){
	    // clearAll();  //清除地图上存在的标注
	    var point = new BMap.Point(x,y);
	    map.centerAndZoom(point);
	    // marker = new BMap.Marker(point);  // 创建新的标注
	    // map.addOverlay(marker);    //将标注添加到地图上
	}else{
	    map.centerAndZoom(new BMap.Point(120.168347, 30.281101), 14);
	}
	var point = new BMap.Point(x,y);  //获取当前地理名称  
	var gc = new BMap.Geocoder();
	return gc.getLocation(point, function(rs){
		var addComp = rs.addressComponents;
		if(addComp.city == "杭州市"){
			// console.log(addComp.district);
			return addComp.district;
		}
		else{
			return "error";
		}
		// alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
	});
}

// var routeData=[
// {  
// 	'speed':20,  
// 	'dtLongitude':'116.387112',  
// 	'dtLatitude':'39.920977'  
// },{  
//     'speed':50,  
//     'dtLongitude':'116.385243',  
//     'dtLatitude':'39.913063'  
// },  
// {  
//     'speed':100,  
//     'dtLongitude':'116.394226',  
//     'dtLatitude':'39.917988'  
// },{  
//     'speed':80,  
//     'dtLongitude':'116.401772',  
//     'dtLatitude':'39.921364'  
// }]  
var routeData = [
{"start_x":"120.206347","start_y":"30.281101","end_x":"120.205173","end_y":"30.292156","randNum":17,"road_name":"秋涛北路-艮秋立交桥-天城路"},{"start_x":"120.205395","start_y":"30.292231","end_x":"120.206576","end_y":"30.281105","randNum":2,"road_name":"秋涛北路-天城路-艮秋立交桥"},{"start_x":"120.204256","start_y":"30.297075","end_x":"120.205317","end_y":"30.292375","randNum":78,"road_name":"秋涛北路-机场路-天城路"},{"start_x":"120.205169","start_y":"30.292355","end_x":"120.204087","end_y":"30.29708","randNum":77,"road_name":"秋涛北路-天城路-机场路"},{"start_x":"120.207056","start_y":"30.263342","end_x":"120.206832","end_y":"30.269346","randNum":75,"road_name":"秋涛北路-庆春东路-凤起东路"},{"start_x":"120.207016","start_y":"30.269354","end_x":"120.207245","end_y":"30.263354","randNum":62,"road_name":"秋涛北路-凤起东路-庆春东路"},{"start_x":"120.142024","start_y":"30.305643","end_x":"120.151542","end_y":"30.295116","randNum":6,"road_name":"莫干山路-教工路-文一路"},{"start_x":"120.151614","start_y":"30.295143","end_x":"120.142069","end_y":"30.305709","randNum":77,"road_name":"莫干山路-文一路-教工路"},{"start_x":"120.141953","start_y":"30.305776","end_x":"120.136449","end_y":"30.309564","randNum":65,"road_name":"莫干山路-教工路-小河路"},{"start_x":"120.136406","start_y":"30.309525","end_x":"120.14189","end_y":"30.305729","randNum":97,"road_name":"莫干山路-小河路-教工路"},{"start_x":"120.179442","start_y":"30.221629","end_x":"120.185679","end_y":"30.228629","randNum":56,"road_name":"秋涛路-复兴路-姚江路"},{"start_x":"120.185598","start_y":"30.228654","end_x":"120.179386","end_y":"30.221652","randNum":47,"road_name":"秋涛路-姚江路-复兴路"},{"start_x":"120.207267","start_y":"30.256626","end_x":"120.20689","end_y":"30.25325","randNum":5,"road_name":"秋涛路-杭海路-解放东路"},{"start_x":"120.206966","start_y":"30.253238","end_x":"120.207437","end_y":"30.256626","randNum":67,"road_name":"秋涛路-解放东路-杭海路"},{"start_x":"120.206842","start_y":"30.253419","end_x":"120.204952","end_y":"30.247941","randNum":76,"road_name":"秋涛路-解放东路-清江路"},{"start_x":"120.205068","start_y":"30.247835","end_x":"120.20699","end_y":"30.25336","randNum":89,"road_name":"秋涛路-清江路-解放东路"},{"start_x":"120.204973","start_y":"30.24794","end_x":"120.192019","end_y":"30.237379","randNum":12,"road_name":"秋涛路-清江路-望江东路"},{"start_x":"120.192088","start_y":"30.237341","end_x":"120.204964","end_y":"30.247769","randNum":87,"road_name":"秋涛路-望江东路-清江路"},{"start_x":"120.185693","start_y":"30.228619","end_x":"120.192116","end_y":"30.237336","randNum":50,"road_name":"秋涛路-姚江路-望江东路"},{"start_x":"120.192036","start_y":"30.237409","end_x":"120.185604","end_y":"30.22866","randNum":24,"road_name":"秋涛路-望江东路-姚江路"},{"start_x":"120.126418","start_y":"30.382426","end_x":"120.132212","end_y":"30.355711","randNum":66,"road_name":"上塘高架-博园路-好运路"},{"start_x":"120.132291","start_y":"30.355749","end_x":"120.126551","end_y":"30.382421","randNum":96,"road_name":"上塘高架-好运路-博园路"},{"start_x":"120.165572","start_y":"30.301805","end_x":"120.175543","end_y":"30.287371","randNum":37,"road_name":"上塘高架-德胜立交桥-文晖路"},{"start_x":"120.175737","start_y":"30.287455","end_x":"120.165702","end_y":"30.301877","randNum":53,"road_name":"上塘高架-文晖路-德胜立交桥"},{"start_x":"120.151622","start_y":"30.336163","end_x":"120.132335","end_y":"30.355609","randNum":59,"road_name":"上塘高架-瓜山立交桥-好运路"},{"start_x":"120.132183","start_y":"30.355767","end_x":"120.151578","end_y":"30.335994","randNum":95,"road_name":"上塘高架-好运路-瓜山立交桥"},{"start_x":"120.177486","start_y":"30.277945","end_x":"120.175712","end_y":"30.287336","randNum":73,"road_name":"上塘高架-中河立交桥-文晖路"},{"start_x":"120.175637","start_y":"30.287316","end_x":"120.17733","end_y":"30.27796","randNum":72,"road_name":"上塘高架-文晖路-中河立交桥"},{"start_x":"120.176765","start_y":"30.283091","end_x":"120.17579","end_y":"30.287333","randNum":20,"road_name":"上塘路-朝晖路-文晖路"},{"start_x":"120.175611","start_y":"30.287379","end_x":"120.176671","end_y":"30.282982","randNum":26,"road_name":"上塘路-文晖路-朝晖路"},{"start_x":"120.15356","start_y":"30.319527","end_x":"120.175618","end_y":"30.287381","randNum":37,"road_name":"上塘路-潮王路-文晖路"},{"start_x":"120.175702","start_y":"30.287419","end_x":"120.153777","end_y":"30.319499","randNum":79,"road_name":"上塘路-文晖路-潮王路"},{"start_x":"120.154605","start_y":"30.313157","end_x":"120.153769","end_y":"30.319494","randNum":38,"road_name":"上塘路-大关路-登云路"},{"start_x":"120.15356","start_y":"30.319527","end_x":"120.154395","end_y":"30.313113","randNum":38,"road_name":"上塘路-登云路-大关路"},{"start_x":"120.154396","start_y":"30.313099","end_x":"120.160254","end_y":"30.307094","randNum":21,"road_name":"上塘路-大关路-香积寺路"},{"start_x":"120.160475","start_y":"30.307148","end_x":"120.154574","end_y":"30.313208","randNum":5,"road_name":"上塘路-香积寺路-大关路"},{"start_x":"120.1658","start_y":"30.301813","end_x":"120.160466","end_y":"30.307133","randNum":4,"road_name":"上塘路-德胜立交桥-香积寺路"},{"start_x":"120.160289","start_y":"30.307041","end_x":"120.165679","end_y":"30.301767","randNum":64,"road_name":"上塘路-香积寺路-德胜立交桥"},{"start_x":"120.152292","start_y":"30.330826","end_x":"120.151617","end_y":"30.336183","randNum":21,"road_name":"上塘路-湖州街-瓜山立交桥"},{"start_x":"120.151538","start_y":"30.336149","end_x":"120.152216","end_y":"30.330815","randNum":35,"road_name":"上塘路-瓜山立交桥-湖州街"},{"start_x":"120.180843","start_y":"30.296991","end_x":"120.183677","end_y":"30.293923","randNum":31,"road_name":"绍兴路-潮王路-东新路"},{"start_x":"120.183709","start_y":"30.294062","end_x":"120.180951","end_y":"30.29704","randNum":17,"road_name":"绍兴路-东新路-潮王路"},{"start_x":"120.168264","start_y":"30.31082","end_x":"120.174346","end_y":"30.304148","randNum":3,"road_name":"绍兴路-香积寺路-德胜路"},{"start_x":"120.174418","start_y":"30.304197","end_x":"120.168323","end_y":"30.310865","randNum":82,"road_name":"绍兴路-德胜路-香积寺路"},{"start_x":"120.165079","start_y":"30.320922","end_x":"120.167805","end_y":"30.324","randNum":55,"road_name":"沈半路-树人街-舟山东路"},{"start_x":"120.167666","start_y":"30.324047","end_x":"120.164944","end_y":"30.320953","randNum":42,"road_name":"沈半路-舟山东路-树人街"},{"start_x":"120.154101","start_y":"30.338432","end_x":"120.149138","end_y":"30.338526","randNum":18,"road_name":"石祥路-瓜山立交桥附近"},{"start_x":"120.151321","start_y":"30.338586","end_x":"120.138329","end_y":"30.338455","randNum":73,"road_name":"石祥路-瓜山立交桥-通益路"},{"start_x":"120.138338","start_y":"30.338084","end_x":"120.151341","end_y":"30.33824","randNum":46,"road_name":"石祥路-通益路-瓜山立交桥"},{"start_x":"120.159287","start_y":"30.259357","end_x":"120.159228","end_y":"30.260771","randNum":41,"road_name":"延安路-庆春路-平海路"},{"start_x":"120.150168","start_y":"30.281027","end_x":"120.152472","end_y":"30.275196","randNum":86,"road_name":"湖墅南路-环城北路-文晖路"},{"start_x":"120.149579","start_y":"30.276864","end_x":"120.147951","end_y":"30.279030","randNum":84,"road_name":"莫干山路-密渡桥路-文晖路"},{"start_x":"120.181085","start_y":"30.277716","end_x":"120.182471","end_y":"30.273032","randNum":96,"road_name":"环城东路-体育场路-环城北路"},{"start_x":"120.194445","start_y":"30.269586","end_x":"120.187394","end_y":"30.270269","randNum":49,"road_name":"凤起路-环城东路-建国北路"},{"start_x":"120.187391","start_y":"30.270155","end_x":"120.194434","end_y":"30.269477","randNum":18,"road_name":"凤起路-建国北路-环城东路"},{"start_x":"120.163912","start_y":"30.268988","end_x":"120.158621","end_y":"30.268298","randNum":63,"road_name":"凤起路-环城西路-保俶路"},{"start_x":"120.158659","start_y":"30.268253","end_x":"120.163919","end_y":"30.268944","randNum":38,"road_name":"凤起路-保俶路-环城西路"},{"start_x":"120.197531","start_y":"30.269128","end_x":"120.194451","end_y":"30.269578","randNum":12,"road_name":"凤起路-凯旋路-环城东路"},{"start_x":"120.194431","start_y":"30.269475","end_x":"120.197504","end_y":"30.269027","randNum":84,"road_name":"凤起路-环城东路-凯旋路"},{"start_x":"120.170122","start_y":"30.269726","end_x":"120.164005","end_y":"30.269001","randNum":24,"road_name":"凤起路-延安路-环城西路"},{"start_x":"120.16403","start_y":"30.268926","end_x":"120.170111","end_y":"30.269643","randNum":26,"road_name":"凤起路-环城西路-延安路"},{"start_x":"120.177964","start_y":"30.27031","end_x":"120.187284","end_y":"30.270174","randNum":65,"road_name":"凤起路-中河北路-建国北路"},{"start_x":"120.187252","start_y":"30.270276","end_x":"120.177959","end_y":"30.270425","randNum":58,"road_name":"凤起路-建国北路-中河北路"},{"start_x":"120.17777","start_y":"30.270431","end_x":"120.170256","end_y":"30.269768","randNum":30,"road_name":"凤起路-中河北路-延安路"},{"start_x":"120.170274","start_y":"30.269645","end_x":"120.177775","end_y":"30.270319","randNum":70,"road_name":"凤起路-延安路-中河北路"},{"start_x":"120.162454","start_y":"30.212077","end_x":"120.15844","end_y":"30.209966","randNum":70,"road_name":"复兴路-南复路-水澄路"},{"start_x":"120.158497","start_y":"30.209908","end_x":"120.162494","end_y":"30.212014","randNum":76,"road_name":"复兴路-水澄路-南复路"},{"start_x":"120.197468","start_y":"30.281417","end_x":"120.206246","end_y":"30.282326","randNum":18,"road_name":"艮山西路-凯旋路-秋涛北路"},{"start_x":"120.206247","start_y":"30.282434","end_x":"120.19748","end_y":"30.281588","randNum":36,"road_name":"艮山西路-秋涛北路-凯旋路"},{"start_x":"120.213853","start_y":"30.283172","end_x":"120.230188","end_y":"30.290208","randNum":77,"road_name":"艮山西路-新塘路-沪杭高速"},{"start_x":"120.126665","start_y":"30.278553","end_x":"120.126378","end_y":"30.282697","randNum":99,"road_name":"古翠路-天目山路-文三路"},{"start_x":"120.126256","start_y":"30.282636","end_x":"120.126534","end_y":"30.278593","randNum":61,"road_name":"古翠路-文三路-天目山路"},{"start_x":"120.049845","start_y":"30.364657","end_x":"120.090363","end_y":"30.345","randNum":12,"road_name":"古墩路-东西大道-金渡北路"},{"start_x":"120.094023","start_y":"30.337828","end_x":"120.090542","end_y":"30.34495","randNum":74,"road_name":"古墩路-董家路-金渡北路"},{"start_x":"120.090429","start_y":"30.344896","end_x":"120.093946","end_y":"30.337785","randNum":68,"road_name":"古墩路-金渡北路-董家路"},{"start_x":"120.096555","start_y":"30.332931","end_x":"120.094052","end_y":"30.337744","randNum":21,"road_name":"古墩路-环镇北路-董家路"},{"start_x":"120.093983","start_y":"30.337702","end_x":"120.096476","end_y":"30.332906","randNum":21,"road_name":"古墩路-董家路-环镇北路"},{"start_x":"120.108024","start_y":"30.276889","end_x":"120.108285","end_y":"30.271607","randNum":14,"road_name":"古墩路-莲花街-天目山路"},{"start_x":"120.108341","start_y":"30.271663","end_x":"120.108103","end_y":"30.276907","randNum":84,"road_name":"古墩路-天目山路-莲花街"},{"start_x":"120.10457","start_y":"30.306346","end_x":"120.103384","end_y":"30.313073","randNum":45,"road_name":"古墩路-萍水西路-申花路"},{"start_x":"120.103313","start_y":"30.313047","end_x":"120.104476","end_y":"30.30634","randNum":27,"road_name":"古墩路-申花路-萍水西路"},{"start_x":"120.104484","start_y":"30.306258","end_x":"120.105162","end_y":"30.292741","randNum":21,"road_name":"古墩路-萍水西路-文一西路"},{"start_x":"120.105237","start_y":"30.292744","end_x":"120.104567","end_y":"30.306261","randNum":78,"road_name":"古墩路-文一西路-萍水西路"},{"start_x":"120.098546","start_y":"30.328351","end_x":"120.103285","end_y":"30.313134","randNum":75,"road_name":"古墩路-三墩路-申花路"},{"start_x":"120.103368","start_y":"30.313157","end_x":"120.098634","end_y":"30.328366","randNum":20,"road_name":"古墩路-申花路-三墩路"},{"start_x":"120.106128","start_y":"30.287655","end_x":"120.107314","end_y":"30.282147","randNum":53,"road_name":"古墩路-文二西路-文三西路"},{"start_x":"120.107401","start_y":"30.282155","end_x":"120.106224","end_y":"30.287664","randNum":54,"road_name":"古墩路-文三西路-文二西路"},{"start_x":"120.106192","start_y":"30.287774","end_x":"120.105262","end_y":"30.292631","randNum":26,"road_name":"古墩路-文二西路-文一西路"},{"start_x":"120.105176","start_y":"30.292634","end_x":"120.106106","end_y":"30.287766","randNum":10,"road_name":"古墩路-文一西路-文二西路"},{"start_x":"120.108988","start_y":"30.268005","end_x":"120.108372","end_y":"30.271464","randNum":55,"road_name":"古墩路-西溪路-天目山路"},{"start_x":"120.108292","start_y":"30.271424","end_x":"120.108894","end_y":"30.267915","randNum":91,"road_name":"古墩路-天目山路-西溪路"},{"start_x":"120.147363","start_y":"30.277679","end_x":"120.148351","end_y":"30.272085","randNum":80,"road_name":"杭大路-天目山路-曙光路"},{"start_x":"120.148427","start_y":"30.272105","end_x":"120.147457","end_y":"30.277692","randNum":19,"road_name":"杭大路-曙光路-天目山路"},{"start_x":"120.063777","start_y":"30.198362","end_x":"120.054991","end_y":"30.242779","randNum":40,"road_name":"杭州绕城高速-龙坞互通-留下枢纽"},{"start_x":"120.096619","start_y":"30.153343","end_x":"120.063763","end_y":"30.198207","randNum":89,"road_name":"杭州绕城高速-转塘互通-龙坞互通"},{"start_x":"120.143502","start_y":"30.2057","end_x":"120.145864","end_y":"30.232511","randNum":94,"road_name":"虎跑路-之江路-南山路"},{"start_x":"120.145787","start_y":"30.23256","end_x":"120.143402","end_y":"30.205702","randNum":46,"road_name":"虎跑路-南山路-之江路"},{"start_x":"120.163745","start_y":"30.27876","end_x":"120.176125","end_y":"30.279643","randNum":30,"road_name":"环城北路-湖墅南路-中河立交桥"},{"start_x":"120.176101","start_y":"30.279731","end_x":"120.163698","end_y":"30.278824","randNum":13,"road_name":"环城北路-中河立交桥-湖墅南路"},{"start_x":"120.192282","start_y":"30.281062","end_x":"120.185818","end_y":"30.280508","randNum":47,"road_name":"环城北路-环城东路-建国北路"},{"start_x":"120.185853","start_y":"30.280342","end_x":"120.19233","end_y":"30.280891","randNum":8,"road_name":"环城北路-建国北路-环城东路"},{"start_x":"120.185676","start_y":"30.280496","end_x":"120.180185","end_y":"30.280095","randNum":50,"road_name":"环城北路-建国北路-中河立交桥"},{"start_x":"120.176125","start_y":"30.279643","end_x":"120.185724","end_y":"30.280331","randNum":83,"road_name":"环城北路-中河立交桥-建国北路"},{"start_x":"120.194453","start_y":"30.269592","end_x":"120.19373","end_y":"30.276286","randNum":77,"road_name":"环城东路-凤起路-体育场路"},{"start_x":"120.193635","start_y":"30.276304","end_x":"120.194363","end_y":"30.269595","randNum":80,"road_name":"环城东路-体育场路-凤起路"},{"start_x":"120.193944","start_y":"30.263321","end_x":"120.193864","end_y":"30.259442","randNum":22,"road_name":"环城东路-庆春路-老浙大横街"},{"start_x":"120.193943","start_y":"30.259431","end_x":"120.19401","end_y":"30.263281","randNum":90,"road_name":"环城东路-老浙大横街-庆春路"},{"start_x":"120.164525","start_y":"30.267154","end_x":"120.16402","end_y":"30.268929","randNum":47,"road_name":"环城西路-白沙路-凤起路"},{"start_x":"120.16393","start_y":"30.268939","end_x":"120.164434","end_y":"30.267122","randNum":90,"road_name":"环城西路-凤起路-白沙路"},{"start_x":"120.164454","start_y":"30.267031","end_x":"120.165082","end_y":"30.264099","randNum":15,"road_name":"环城西路-白沙路-庆春路"},{"start_x":"120.165247","start_y":"30.26412","end_x":"120.164528","end_y":"30.267072","randNum":2,"road_name":"环城西路-庆春路-白沙路"},{"start_x":"120.161071","start_y":"30.278459","end_x":"120.161593","end_y":"30.276667","randNum":63,"road_name":"环城西路-天目山路-体育场路"},{"start_x":"120.161672","start_y":"30.276689","end_x":"120.161151","end_y":"30.278505","randNum":92,"road_name":"环城西路-体育场路-天目山路"},{"start_x":"120.187274","start_y":"30.270171","end_x":"120.18726","end_y":"30.263734","randNum":24,"road_name":"建国北路-凤起路-庆春路"},{"start_x":"120.187376","start_y":"30.263737","end_x":"120.187367","end_y":"30.270159","randNum":54,"road_name":"建国北路-庆春路-凤起路"},{"start_x":"120.185721","start_y":"30.280333","end_x":"120.186655","end_y":"30.275869","randNum":84,"road_name":"建国北路-环城北路-体育场路"},{"start_x":"120.186791","start_y":"30.275897","end_x":"120.185861","end_y":"30.280345","randNum":55,"road_name":"建国北路-体育场路-环城北路"},{"start_x":"120.185811","start_y":"30.280516","end_x":"120.183619","end_y":"30.287923","randNum":33,"road_name":"建国北路-环城北路-文晖路"},{"start_x":"120.183464","start_y":"30.287889","end_x":"120.185674","end_y":"30.280502","randNum":59,"road_name":"建国北路-文晖路-环城北路"},{"start_x":"120.142948","start_y":"30.277407","end_x":"120.143508","end_y":"30.270578","randNum":13,"road_name":"教工路-天目山路-曙光路"},{"start_x":"120.142509","start_y":"30.283425","end_x":"120.14294","end_y":"30.277483","randNum":73,"road_name":"教工路-文三路-天目山路"},{"start_x":"120.14159","start_y":"30.294568","end_x":"120.14203","end_y":"30.289268","randNum":72,"road_name":"教工路-文一路-文二路"},{"start_x":"120.142149","start_y":"30.289306","end_x":"120.141732","end_y":"30.294572","randNum":73,"road_name":"教工路-文二路-文一路"},{"start_x":"120.141723","start_y":"30.294686","end_x":"120.141265","end_y":"30.299383","randNum":68,"road_name":"教工路-文一路-余杭塘路"},{"start_x":"120.141102","start_y":"30.299385","end_x":"120.141583","end_y":"30.294688","randNum":18,"road_name":"教工路-余杭塘路-文一路"},{"start_x":"120.141227","start_y":"30.299518","end_x":"120.142018","end_y":"30.30564","randNum":54,"road_name":"教工路-余杭塘路-莫干山路"},{"start_x":"120.141915","start_y":"30.305716","end_x":"120.141075","end_y":"30.299507","randNum":47,"road_name":"教工路-莫干山路-余杭塘路"},{"start_x":"120.172965","start_y":"30.256182","end_x":"120.178548","end_y":"30.256303","randNum":39,"road_name":"解放路-浣纱路-中河中路"},{"start_x":"120.178539","start_y":"30.25637","end_x":"120.172965","end_y":"30.256251","randNum":10,"road_name":"解放路-中河中路-浣纱路"},{"start_x":"120.189824","start_y":"30.25547","end_x":"120.186667","end_y":"30.255946","randNum":85,"road_name":"解放路-新城隧道-建国中路"},{"start_x":"120.18666","start_y":"30.25588","end_x":"120.19031","end_y":"30.255315","randNum":71,"road_name":"解放路-建国中路-新城隧道"},{"start_x":"120.170855","start_y":"30.256057","end_x":"120.172969","end_y":"30.256193","randNum":53,"road_name":"解放路-延安路-浣纱路"},{"start_x":"120.172968","start_y":"30.256259","end_x":"120.170857","end_y":"30.256126","randNum":70,"road_name":"解放路-浣纱路-延安路"},{"start_x":"120.170677","start_y":"30.256122","end_x":"120.169667","end_y":"30.256269","randNum":51,"road_name":"解放路-延安路-西湖隧道"},{"start_x":"120.16967","start_y":"30.256146","end_x":"120.170736","end_y":"30.256078","randNum":22,"road_name":"解放路-西湖隧道-延安路"},{"start_x":"120.201234","start_y":"30.254034","end_x":"120.189994","end_y":"30.255415","randNum":14,"road_name":"解放路-张家河弄-新城隧道"},{"start_x":"120.196405","start_y":"30.253854","end_x":"120.201265","end_y":"30.253901","randNum":73,"road_name":"解放路-新城隧道-张家河弄"},{"start_x":"120.178627","start_y":"30.256307","end_x":"120.186528","end_y":"30.255898","randNum":99,"road_name":"解放路-中河中路-建国中路"},{"start_x":"120.186546","start_y":"30.255962","end_x":"120.178623","end_y":"30.256371","randNum":42,"road_name":"解放路-建国中路-中河中路"},{"start_x":"120.17851","start_y":"30.331491","end_x":"120.195321","end_y":"30.33513","randNum":48,"road_name":"留石快速路-东新路-秋石高架"},{"start_x":"120.195262","start_y":"30.335247","end_x":"120.178522","end_y":"30.33158","randNum":32,"road_name":"留石快速路-秋石高架-东新路"},{"start_x":"120.10751","start_y":"30.326195","end_x":"120.100606","end_y":"30.323241","randNum":30,"road_name":"留祥路-丰庆路-古墩路"},{"start_x":"120.100644","start_y":"30.323134","end_x":"120.107395","end_y":"30.326065","randNum":26,"road_name":"留祥路-古墩路-丰庆路"},{"start_x":"120.131555","start_y":"30.312988","end_x":"120.127048","end_y":"30.316112","randNum":72,"road_name":"莫干山路-登云路-萍水东路"},{"start_x":"120.126974","start_y":"30.316068","end_x":"120.131506","end_y":"30.312938","randNum":99,"road_name":"莫干山路-萍水东路-登云路"},{"start_x":"120.131506","start_y":"30.312938","end_x":"120.136254","end_y":"30.309635","randNum":78,"road_name":"莫干山路-登云路-小河路"},{"start_x":"120.136319","start_y":"30.309703","end_x":"120.131555","end_y":"30.312988","randNum":75,"road_name":"莫干山路-小河路-登云路"},{"start_x":"120.117987","start_y":"30.323819","end_x":"120.11434","end_y":"30.328631","randNum":6,"road_name":"莫干山路-花园岗街-石祥路"},{"start_x":"120.114256","start_y":"30.328532","end_x":"120.11781","end_y":"30.323885","randNum":56,"road_name":"莫干山路-石祥路-花园岗街"},{"start_x":"120.121754","start_y":"30.319732","end_x":"120.11799","end_y":"30.32382","randNum":76,"road_name":"莫干山路-申花路-花园岗街"},{"start_x":"120.11791","start_y":"30.32378","end_x":"120.121674","end_y":"30.319684","randNum":90,"road_name":"莫干山路-花园岗街-申花路"},{"start_x":"120.121759","start_y":"30.31963","end_x":"120.126915","end_y":"30.316115","randNum":70,"road_name":"莫干山路-申花路-萍水东路"},{"start_x":"120.126973","start_y":"30.316161","end_x":"120.121826","end_y":"30.319676","randNum":6,"road_name":"莫干山路-萍水东路-申花路"},{"start_x":"120.114302","start_y":"30.328765","end_x":"120.112879","end_y":"30.334204","randNum":50,"road_name":"莫干山路-石祥路-三墩路"},{"start_x":"120.112726","start_y":"30.334195","end_x":"120.114172","end_y":"30.328722","randNum":59,"road_name":"莫干山路-三墩路-石祥路"},{"start_x":"120.161109","start_y":"30.278664","end_x":"120.157906","end_y":"30.284082","randNum":39,"road_name":"莫干山路-天目山路-文晖路"},{"start_x":"120.157787","start_y":"30.284076","end_x":"120.161034","end_y":"30.278654","randNum":28,"road_name":"莫干山路-文晖路-天目山路"},{"start_x":"120.103184","start_y":"30.347064","end_x":"120.107299","end_y":"30.341809","randNum":88,"road_name":"莫干山路-通运路-新文路"},{"start_x":"120.107373","start_y":"30.341923","end_x":"120.103295","end_y":"30.347151","randNum":34,"road_name":"莫干山路-新文路-通运路"},{"start_x":"120.154539","start_y":"30.289839","end_x":"120.15166","end_y":"30.295032","randNum":94,"road_name":"莫干山路-文二路-文一路"},{"start_x":"120.151584","start_y":"30.294998","end_x":"120.154466","end_y":"30.28977","randNum":74,"road_name":"莫干山路-文一路-文二路"},{"start_x":"120.162519","start_y":"30.23932","end_x":"120.165003","end_y":"30.243247","randNum":20,"road_name":"南山路-万松岭路-清波街"},{"start_x":"120.164921","start_y":"30.243233","end_x":"120.162089","end_y":"30.236068","randNum":9,"road_name":"南山路-清波街-万松岭路"},{"start_x":"120.16208","start_y":"30.236054","end_x":"120.145874","end_y":"30.232563","randNum":57,"road_name":"南山路-玉皇山路-杨公堤"},{"start_x":"120.205006","start_y":"30.247904","end_x":null,"end_y":null,"randNum":64,"road_name":"清江路-秋涛路-"},{"start_x":"120.220679","start_y":"30.261723","end_x":"120.214705","end_y":"30.263598","randNum":2,"road_name":"庆春东路-钱江路-新塘路"},{"start_x":"120.214717","start_y":"30.263434","end_x":"120.220525","end_y":"30.261554","randNum":88,"road_name":"庆春东路-新塘路-钱江路"},{"start_x":"120.220525","start_y":"30.261554","end_x":"120.229402","end_y":"30.257209","randNum":76,"road_name":"庆春东路-钱江路-之江路"},{"start_x":"120.229544","start_y":"30.257412","end_x":"120.220679","end_y":"30.261723","randNum":64,"road_name":"庆春东路-之江路-钱江路"},{"start_x":"120.207059","start_y":"30.263439","end_x":"120.214595","end_y":"30.263442","randNum":5,"road_name":"庆春东路-秋涛北路-新塘路"},{"start_x":"120.214579","start_y":"30.263608","end_x":"120.207015","end_y":"30.263546","randNum":68,"road_name":"庆春东路-新塘路-秋涛北路"},{"start_x":"120.168116","start_y":"30.264165","end_x":"120.165376","end_y":"30.264103","randNum":77,"road_name":"庆春路-东坡路-环城西路"},{"start_x":"120.165308","start_y":"30.263989","end_x":"120.168227","end_y":"30.264036","randNum":28,"road_name":"庆春路-环城西路-东坡路"},{"start_x":"120.165308","start_y":"30.263989","end_x":"120.170498","end_y":"30.264022","randNum":39,"road_name":"庆春路-环城西路-延安路"},{"start_x":"120.170468","start_y":"30.264147","end_x":"120.165376","end_y":"30.264103","randNum":58,"road_name":"庆春路-延安路-环城西路"},{"start_x":"120.174778","start_y":"30.26386","end_x":"120.17816","end_y":"30.263712","randNum":78,"road_name":"庆春路-浣纱路-中河中路"},{"start_x":"120.178157","start_y":"30.263844","end_x":"120.174838","end_y":"30.264","randNum":22,"road_name":"庆春路-中河中路-浣纱路"},{"start_x":"120.187403","start_y":"30.263615","end_x":"120.193943","end_y":"30.263406","randNum":17,"road_name":"庆春路-建国中路-庆春立交桥"},{"start_x":"120.193946","start_y":"30.26353","end_x":"120.187379","end_y":"30.263741","randNum":52,"road_name":"庆春路-庆春立交桥-建国中路"},{"start_x":"120.20703","start_y":"30.263546","end_x":"120.202148","end_y":"30.26346","randNum":70,"road_name":"庆春路-秋涛路-双菱路"},{"start_x":"120.20215","start_y":"30.263335","end_x":"120.207072","end_y":"30.263421","randNum":98,"road_name":"庆春路-双菱路-秋涛路"},{"start_x":"120.170496","start_y":"30.264016","end_x":"120.174772","end_y":"30.263864","randNum":45,"road_name":"庆春路-延安路-浣纱路"},{"start_x":"120.174838","start_y":"30.263999","end_x":"120.170606","end_y":"30.264135","randNum":30,"road_name":"庆春路-浣纱路-延安路"},{"start_x":"120.178161","start_y":"30.263709","end_x":"120.187261","end_y":"30.263612","randNum":1,"road_name":"庆春路-中河中路-建国中路"},{"start_x":"120.187278","start_y":"30.263738","end_x":"120.178151","end_y":"30.263844","randNum":45,"road_name":"庆春路-建国中路-中河中路"},{"start_x":"120.202171","start_y":"30.33722","end_x":"120.198623","end_y":"30.34479","randNum":26,"road_name":"秋石快速路-华丰路-石大快速路出入口"},{"start_x":"120.202171","start_y":"30.33722","end_x":"120.198623","end_y":"30.34479","randNum":40,"road_name":"秋石快速路-石大快速路出入口-华丰路"},{"start_x":"120.205579","start_y":"30.397889","end_x":"120.198465","end_y":"30.344873","randNum":21,"road_name":"秋石快速路-秋石快速路北口-华丰路"},{"start_x":"120.198468","start_y":"30.344824","end_x":"120.200058","end_y":"30.334141","randNum":9,"road_name":"秋石快速路-华丰路-秋石快速路北口"},{"start_x":"120.200017","start_y":"30.334141","end_x":"120.199862","end_y":"30.307499","randNum":64,"road_name":"秋石快速路-秋石快速路南口-德胜快速路"},{"start_x":"120.199588","start_y":"30.310384","end_x":"120.20085","end_y":"30.304394","randNum":19,"road_name":"秋石快速路-德胜快速路-秋石快速路南口"},{"start_x":"120.202203","start_y":"30.337207","end_x":"120.199427","end_y":"30.3129","randNum":51,"road_name":"秋石快速路-石大快速路出入口-德胜快速路"},{"start_x":"120.199717","start_y":"30.310386","end_x":"120.200144","end_y":"30.334472","randNum":98,"road_name":"秋石快速路-德胜快速路-石大快速路出入口"},{"start_x":"120.207243","start_y":"30.257734","end_x":"120.207239","end_y":"30.256708","randNum":98,"road_name":"秋涛北路-采荷路-杭海路"},{"start_x":"120.207427","start_y":"30.256672","end_x":"120.20729","end_y":"30.262022","randNum":31,"road_name":"秋涛北路-杭海路-采荷路"},{"start_x":"120.068809","start_y":"30.285836","end_x":"120.083438","end_y":"30.286602","randNum":28,"road_name":"文二西路-崇义路-崇仁路"},{"start_x":"120.083441","start_y":"30.286693","end_x":"120.068812","end_y":"30.285901","randNum":81,"road_name":"文二西路-崇仁路-崇义路"},{"start_x":"120.068808","start_y":"30.285888","end_x":"120.054358","end_y":"30.284001","randNum":58,"road_name":"文二西路-崇义路-五常互通"},{"start_x":"120.054362","start_y":"30.283945","end_x":"120.068811","end_y":"30.285817","randNum":72,"road_name":"文二西路-五常互通-崇义路"},{"start_x":"120.115691","start_y":"30.288164","end_x":"120.125837","end_y":"30.288535","randNum":19,"road_name":"文二西路-丰潭路-古翠路"},{"start_x":"120.125832","start_y":"30.288643","end_x":"120.115659","end_y":"30.288276","randNum":85,"road_name":"文二西路-古翠路-丰潭路"},{"start_x":"120.106217","start_y":"30.287666","end_x":"120.115605","end_y":"30.288167","randNum":22,"road_name":"文二西路-古墩路-丰潭路"},{"start_x":"120.114173","start_y":"30.293277","end_x":"120.105054","end_y":"30.29275","randNum":45,"road_name":"文二西路-丰潭路-古墩路"},{"start_x":"120.093417","start_y":"30.286596","end_x":"120.083513","end_y":"30.286698","randNum":75,"road_name":"文二西路-紫金港路-崇仁路"},{"start_x":"120.083514","start_y":"30.28662","end_x":"120.093356","end_y":"30.286485","randNum":95,"road_name":"文二西路-崇仁路-紫金港路"},{"start_x":"120.175792","start_y":"30.287334","end_x":"120.183477","end_y":"30.287899","randNum":44,"road_name":"文晖路-上塘路-建国北路"},{"start_x":"120.185254","start_y":"30.288166","end_x":"120.183601","end_y":"30.28803","randNum":94,"road_name":"文晖路-文晖大桥-建国北路"},{"start_x":"120.183619","start_y":"30.287912","end_x":"120.185267","end_y":"30.288049","randNum":51,"road_name":"文晖路-建国北路-文晖大桥"},{"start_x":"120.147737","start_y":"30.283683","end_x":"120.142612","end_y":"30.283425","randNum":14,"road_name":"文三路-保俶北路-教工路"},{"start_x":"120.15767","start_y":"30.284071","end_x":"120.147838","end_y":"30.283693","randNum":16,"road_name":"文三路-莫干山路-保俶北路"},{"start_x":"120.107393","start_y":"30.282154","end_x":"120.095805","end_y":"30.280981","randNum":74,"road_name":"文三西路-古墩路-紫金港路"},{"start_x":"120.095883","start_y":"30.280893","end_x":"120.107418","end_y":"30.282049","randNum":27,"road_name":"文三西路-紫金港路-古墩路"},{"start_x":"120.148217","start_y":"30.29484","end_x":"120.151563","end_y":"30.29505","randNum":92,"road_name":"文一路-保俶北路-莫干山路"},{"start_x":"120.15154","start_y":"30.29512","end_x":"120.148216","end_y":"30.29491","randNum":28,"road_name":"文一路-莫干山路-保俶北路"},{"start_x":"120.141723","start_y":"30.29469","end_x":"120.135412","end_y":"30.294441","randNum":67,"road_name":"文一路-教工路-学院路"},{"start_x":"120.135456","start_y":"30.294328","end_x":"120.141601","end_y":"30.294562","randNum":78,"road_name":"文一路-学院路-教工路"},{"start_x":"120.135498","start_y":"30.294438","end_x":"120.125455","end_y":"30.293951","randNum":54,"road_name":"文一路-学院路-古翠路"},{"start_x":"120.125379","start_y":"30.293801","end_x":"120.135456","end_y":"30.294328","randNum":11,"road_name":"文一路-古翠路-学院路"},{"start_x":"120.083292","start_y":"30.292541","end_x":"120.092046","end_y":"30.292876","randNum":29,"road_name":"文一西路-崇仁路-紫金港路"},{"start_x":"120.092041","start_y":"30.292995","end_x":"120.083287","end_y":"30.292656","randNum":83,"road_name":"文一西路-紫金港路-崇仁路"},{"start_x":"120.114317","start_y":"30.293134","end_x":"120.125428","end_y":"30.293835","randNum":99,"road_name":"文一西路-丰潭路-古翠路"},{"start_x":"120.125525","start_y":"30.293958","end_x":"120.114171","end_y":"30.293272","randNum":26,"road_name":"文一西路-古翠路-丰潭路"},{"start_x":"120.105238","start_y":"30.29275","end_x":"120.092177","end_y":"30.292996","randNum":6,"road_name":"文一西路-古墩路-紫金港路"},{"start_x":"120.092171","start_y":"30.29288","end_x":"120.105262","end_y":"30.292635","randNum":86,"road_name":"文一西路-紫金港路-古墩路"},{"start_x":"120.049367","start_y":"30.291807","end_x":"120.06873","end_y":"30.292334","randNum":39,"road_name":"文一西路-荆长路-崇义路"},{"start_x":"120.06873","start_y":"30.292441","end_x":"120.049268","end_y":"30.291897","randNum":20,"road_name":"文一西路-崇义路-荆长路"},{"start_x":"120.04926","start_y":"30.291904","end_x":"119.997356","end_y":"30.280611","randNum":62,"road_name":"文一西路-荆长路-绿汀路"},{"start_x":"119.997248","start_y":"30.280494","end_x":"120.049359","end_y":"30.291806","randNum":84,"road_name":"文一西路-绿汀路-荆长路"},{"start_x":"119.997234","start_y":"30.280593","end_x":"119.956334","end_y":"30.273548","randNum":90,"road_name":"文一西路-绿汀路-狮山路"},{"start_x":"119.956382","start_y":"30.273433","end_x":"119.99725","end_y":"30.280493","randNum":76,"road_name":"文一西路-狮山路-绿汀路"},{"start_x":"120.185493","start_y":"30.251343","end_x":"120.178778","end_y":"30.25169","randNum":57,"road_name":"西湖大道-建国路-中河路"},{"start_x":"120.179385","start_y":"30.251306","end_x":"120.185444","end_y":"30.251201","randNum":81,"road_name":"西湖大道-中河路-建国路"},{"start_x":"120.167418","start_y":"30.251795","end_x":"120.171061","end_y":"30.251725","randNum":27,"road_name":"西湖大道-南山路-延安路"},{"start_x":"120.171044","start_y":"30.251871","end_x":"120.167446","end_y":"30.251937","randNum":23,"road_name":"西湖大道-延安路-南山路"},{"start_x":"120.214693","start_y":"30.263709","end_x":"120.214527","end_y":"30.267011","randNum":60,"road_name":"新塘路-庆春路-太平门直街"},{"start_x":"120.214396","start_y":"30.267007","end_x":"120.21458","end_y":"30.263704","randNum":30,"road_name":"新塘路-太平门直街-庆春路"},{"start_x":"120.136737","start_y":"30.278097","end_x":"120.136418","end_y":"30.283189","randNum":38,"road_name":"学院路-天目山路-文三路"},{"start_x":"120.136327","start_y":"30.283186","end_x":"120.136655","end_y":"30.278099","randNum":92,"road_name":"学院路-文三路-天目山路"},{"start_x":"120.135827","start_y":"30.289037","end_x":"120.13633","end_y":"30.283186","randNum":88,"road_name":"学院路-文二路-文三路"},{"start_x":"120.13591","start_y":"30.289036","end_x":"120.135506","end_y":"30.294322","randNum":57,"road_name":"学院路-文二路-文一路"},{"start_x":"120.170115","start_y":"30.269644","end_x":"120.17047","end_y":"30.264139","randNum":35,"road_name":"延安路-凤起路-庆春路"},{"start_x":"120.170606","start_y":"30.264133","end_x":"120.170246","end_y":"30.269764","randNum":39,"road_name":"延安路-庆春路-凤起路"},{"start_x":"120.170244","start_y":"30.269766","end_x":"120.170033","end_y":"30.27609","randNum":52,"road_name":"延安路-凤起路-体育场路"},{"start_x":"120.16991","start_y":"30.276096","end_x":"120.17012","end_y":"30.269716","randNum":75,"road_name":"延安路-体育场路-凤起路"},{"start_x":"120.171398","start_y":"30.246613","end_x":"120.171137","end_y":"30.25187","randNum":11,"road_name":"延安路-高银街-西湖大道"},{"start_x":"120.171053","start_y":"30.251718","end_x":"120.17135","end_y":"30.246489","randNum":36,"road_name":"延安路-西湖大道-高银街"},{"start_x":"120.136584","start_y":"30.277825","end_x":"120.135214","end_y":"30.274339","randNum":10,"road_name":"玉古路-天目山路-西溪路"},{"start_x":"120.135296","start_y":"30.274327","end_x":"120.136671","end_y":"30.27782","randNum":37,"road_name":"玉古路-西溪路-天目山路"},{"start_x":"120.1256","start_y":"30.193156","end_x":"120.140166","end_y":"30.202376","randNum":10,"road_name":"之江路-九溪路-虎跑路"},{"start_x":"120.140129","start_y":"30.20246","end_x":"120.12555","end_y":"30.193264","randNum":34,"road_name":"之江路-虎跑路-九溪路"},{"start_x":"120.180275","start_y":"30.222091","end_x":"120.182994","end_y":"30.217574","randNum":72,"road_name":"中河高架-复兴立交桥-复兴大桥"},{"start_x":"120.182699","start_y":"30.218352","end_x":"120.180284","end_y":"30.222328","randNum":82,"road_name":"中河高架-复兴大桥-复兴立交桥"},{"start_x":"120.18016","start_y":"30.222533","end_x":"120.179039","end_y":"30.245819","randNum":3,"road_name":"中河高架-复兴立交桥-河坊街"},{"start_x":"120.178966","start_y":"30.245826","end_x":"120.180197","end_y":"30.222245","randNum":77,"road_name":"中河高架-河坊街-复兴立交桥"},{"start_x":"120.179034","start_y":"30.245812","end_x":"120.178899","end_y":"30.251685","randNum":44,"road_name":"中河高架-河坊街-西湖大道"},{"start_x":"120.17893","start_y":"30.248363","end_x":"120.178957","end_y":"30.245828","randNum":37,"road_name":"中河高架-西湖大道-河坊街"},{"start_x":"120.178986","start_y":"30.248356","end_x":"120.178294","end_y":"30.263708","randNum":52,"road_name":"中河高架-西湖大道-庆春路"},{"start_x":"120.178204","start_y":"30.263704","end_x":"120.17882","end_y":"30.251413","randNum":51,"road_name":"中河高架-庆春路-西湖大道"},{"start_x":"120.178293","start_y":"30.263702","end_x":"120.177331","end_y":"30.279726","randNum":49,"road_name":"中河高架-庆春路-中河立交桥"},{"start_x":"120.177182","start_y":"30.279715","end_x":"120.1782","end_y":"30.263649","randNum":18,"road_name":"中河高架-中河立交桥-庆春路"},{"start_x":"120.177835","start_y":"30.270327","end_x":"120.178218","end_y":"30.263828","randNum":71,"road_name":"中河路-凤起路-庆春路"},{"start_x":"120.178284","start_y":"30.263834","end_x":"120.177911","end_y":"30.270333","randNum":86,"road_name":"中河路-庆春路-凤起路"},{"start_x":"120.177908","start_y":"30.27043","end_x":"120.17762","end_y":"30.275401","randNum":49,"road_name":"中河路-凤起路-体育场路"},{"start_x":"120.177441","start_y":"30.275415","end_x":"120.177823","end_y":"30.270436","randNum":28,"road_name":"中河路-体育场路-凤起路"},{"start_x":"120.178404","start_y":"30.259883","end_x":"120.178292","end_y":"30.2637","randNum":36,"road_name":"中河路-平海路-庆春路"},{"start_x":"120.178204","start_y":"30.263714","end_x":"120.178316","end_y":"30.259881","randNum":26,"road_name":"中河路-庆春路-平海路"},{"start_x":"120.09819","start_y":"30.268675","end_x":"120.095864","end_y":"30.280874","randNum":61,"road_name":"紫金港路-天目山路-文三西路"},{"start_x":"120.095708","start_y":"30.280889","end_x":"120.098062","end_y":"30.268854","randNum":90,"road_name":"紫金港路-文三西路-天目山路"},{"start_x":"120.098097","start_y":"30.268577","end_x":"120.099508","end_y":"30.264112","randNum":99,"road_name":"紫金港路-天目山路-西溪路"},{"start_x":"120.099598","start_y":"30.264133","end_x":"120.098205","end_y":"30.268582","randNum":84,"road_name":"紫金港路-西溪路-天目山路"},{"start_x":"120.093399","start_y":"30.28639","end_x":"120.095658","end_y":"30.280998","randNum":98,"road_name":"紫金港路-文二西路-文三西路"},{"start_x":"120.095809","start_y":"30.280978","end_x":"120.093451","end_y":"30.28649","randNum":94,"road_name":"紫金港路-文三西路-文二西路"},{"start_x":"120.093451","start_y":"30.286485","end_x":"120.092175","end_y":"30.292878","randNum":65,"road_name":"紫金港路-文二西路-文一西路"},{"start_x":"120.092055","start_y":"30.292869","end_x":"120.093303","end_y":"30.286594","randNum":19,"road_name":"紫金港路-文一西路-文二西路"},{"start_x":"120.147793","start_y":"30.289456","end_x":"120.147959","end_y":"30.283507","randNum":6,"road_name":"保俶北路-文二路-文三路"},{"start_x":"120.14799","start_y":"30.283548","end_x":"120.147901","end_y":"30.289477","randNum":33,"road_name":"保俶北路-文三路-文二路"},{"start_x":"120.147752","start_y":"30.283677","end_x":"120.152216","end_y":"30.278005","randNum":43,"road_name":"保俶北路-文三路-天目山路"},{"start_x":"120.152292","start_y":"30.278075","end_x":"120.14785","end_y":"30.283685","randNum":87,"road_name":"保俶北路-天目山路-文三路"},{"start_x":"120.153819","start_y":"30.273389","end_x":"120.160933","end_y":"30.265946","randNum":38,"road_name":"保俶路-体育场路-白沙路"},{"start_x":"120.164519","start_y":"30.267121","end_x":"120.161694","end_y":"30.276622","randNum":78,"road_name":"保俶路-白沙路-体育场路"},{"start_x":"120.152303","start_y":"30.277998","end_x":"120.161043","end_y":"30.278583","randNum":65,"road_name":"保俶路-天目山路-体育场路"},{"start_x":"120.153902","start_y":"30.273413","end_x":"120.152335","end_y":"30.277912","randNum":30,"road_name":"保俶路-体育场路-天目山路"},{"start_x":"120.161065","start_y":"30.265896","end_x":"120.163423","end_y":"30.266684","randNum":95,"road_name":"北山路--保俶路"},{"start_x":"120.250329","start_y":"30.311843","end_x":"120.234478","end_y":"30.312054","randNum":50,"road_name":"德胜快速路-德胜互通附近"},{"start_x":"120.183727","start_y":"30.307462","end_x":"120.170868","end_y":"30.30277","randNum":49,"road_name":"德胜快速路-东新路-德胜立交桥"},{"start_x":"120.170198","start_y":"30.30243","end_x":"120.183852","end_y":"30.307453","randNum":29,"road_name":"德胜快速路-德胜立交桥-东新路"},{"start_x":"120.171134","start_y":"30.302779","end_x":"120.174404","end_y":"30.304084","randNum":16,"road_name":"德胜路-德胜立交桥-绍兴路"},{"start_x":"120.174256","start_y":"30.304067","end_x":"120.171127","end_y":"30.302878","randNum":98,"road_name":"德胜路-绍兴路-德胜立交桥"},{"start_x":"120.18375","start_y":"30.307458","end_x":"120.174448","end_y":"30.304161","randNum":35,"road_name":"德胜路-东新路-绍兴路"},{"start_x":"120.174493","start_y":"30.304115","end_x":"120.183844","end_y":"30.307451","randNum":70,"road_name":"德胜路-绍兴路-东新路"},{"start_x":"120.125273","start_y":"30.333364","end_x":"120.138177","end_y":"30.338102","randNum":68,"road_name":"石祥路-杭行路-通益路"},{"start_x":"120.138197","start_y":"30.338317","end_x":"120.125189","end_y":"30.333649","randNum":42,"road_name":"石祥路-通益路-杭行路"},{"start_x":"120.15379","start_y":"30.27347","end_x":"120.143662","end_y":"30.270624","randNum":48,"road_name":"曙光路-保俶路-黄龙路"},{"start_x":"120.143672","start_y":"30.270527","end_x":"120.153823","end_y":"30.273389","randNum":96,"road_name":"曙光路-黄龙路-保俶路"},{"start_x":"120.136837","start_y":"30.259149","end_x":"120.137686","end_y":"30.265844","randNum":11,"road_name":"曙光路-北山路-浙大路"},{"start_x":"120.137601","start_y":"30.2658","end_x":"120.136756","end_y":"30.259159","randNum":74,"road_name":"曙光路-浙大路-北山路"},{"start_x":"120.140366","start_y":"30.269328","end_x":"120.143528","end_y":"30.27047","randNum":6,"road_name":"曙光路-黄龙路-求是路"},{"start_x":"120.143647","start_y":"30.270621","end_x":"120.140294","end_y":"30.269369","randNum":16,"road_name":"曙光路-求是路-黄龙路"},{"start_x":"120.137691","start_y":"30.265852","end_x":"120.140409","end_y":"30.269369","randNum":93,"road_name":"曙光路-浙大路-求是路"},{"start_x":"120.140275","start_y":"30.269374","end_x":"120.13762","end_y":"30.265873","randNum":65,"road_name":"曙光路-求是路-浙大路"},{"start_x":"120.153826","start_y":"30.273389","end_x":"120.161614","end_y":"30.276605","randNum":94,"road_name":"体育场路-保俶路-环城西路"},{"start_x":"120.140329","start_y":"30.269415","end_x":"120.137616","end_y":"30.265875","randNum":2,"road_name":"体育场路-环城西路-保俶路"},{"start_x":"120.193611","start_y":"30.276377","end_x":"120.186797","end_y":"30.275902","randNum":67,"road_name":"体育场路-环城东路-建国北路"},{"start_x":"120.186808","start_y":"30.275782","end_x":"120.193626","end_y":"30.276312","randNum":16,"road_name":"体育场路-建国北路-环城东路"},{"start_x":"120.186651","start_y":"30.275859","end_x":"120.177596","end_y":"30.275469","randNum":79,"road_name":"体育场路-建国北路-中河北路"},{"start_x":"120.177616","start_y":"30.275405","end_x":"120.186671","end_y":"30.275791","randNum":39,"road_name":"体育场路-中河北路-建国北路"},{"start_x":"120.17735","start_y":"30.275493","end_x":"120.170038","end_y":"30.276155","randNum":4,"road_name":"体育场路-中河北路-延安路"},{"start_x":"120.17003","start_y":"30.276094","end_x":"120.177347","end_y":"30.275407","randNum":91,"road_name":"体育场路-延安路-中河北路"},{"start_x":"120.152306","start_y":"30.278008","end_x":"120.161037","end_y":"30.278581","randNum":92,"road_name":"天目山路-保俶路-莫干山路"},{"start_x":"120.161035","start_y":"30.278659","end_x":"120.152304","end_y":"30.278078","randNum":39,"road_name":"天目山路-莫干山路-保俶路"},{"start_x":"120.108377","start_y":"30.271471","end_x":"120.119013","end_y":"30.276816","randNum":93,"road_name":"天目山路-古墩路-丰潭路"},{"start_x":"120.119041","start_y":"30.276941","end_x":"120.108354","end_y":"30.271599","randNum":85,"road_name":"天目山路-丰潭路-古墩路"},{"start_x":"120.083432","start_y":"30.266515","end_x":"120.098088","end_y":"30.268654","randNum":99,"road_name":"天目山路-花坞路-紫金港路"},{"start_x":"120.098173","start_y":"30.268789","end_x":"120.083387","end_y":"30.266621","randNum":80,"road_name":"天目山路-紫金港路-花坞路"},{"start_x":"120.143115","start_y":"30.277416","end_x":"120.152222","end_y":"30.278002","randNum":37,"road_name":"天目山路-黄龙路-保俶路"},{"start_x":"120.152212","start_y":"30.278072","end_x":"120.143053","end_y":"30.277467","randNum":69,"road_name":"天目山路-保俶路-黄龙路"},{"start_x":"120.143058","start_y":"30.277478","end_x":"120.13664","end_y":"30.278001","randNum":23,"road_name":"天目山路-黄龙路-玉古路"},{"start_x":"120.136633","start_y":"30.277928","end_x":"120.14293","end_y":"30.277398","randNum":47,"road_name":"天目山路-玉古路-黄龙路"},{"start_x":"120.052558","start_y":"30.246993","end_x":"120.058258","end_y":"30.247847","randNum":8,"road_name":"天目山路-留下枢纽-西溪路"},{"start_x":"120.05847","start_y":"30.247957","end_x":"120.052537","end_y":"30.247071","randNum":94,"road_name":"天目山路-西溪路-留下枢纽"},{"start_x":"120.130808","start_y":"30.278477","end_x":"120.126681","end_y":"30.278555","randNum":50,"road_name":"天目山路-万塘路-古翠路"},{"start_x":"120.126675","start_y":"30.278437","end_x":"120.130691","end_y":"30.278417","randNum":73,"road_name":"天目山路-古翠路-万塘路"},{"start_x":"120.130692","start_y":"30.278414","end_x":"120.136629","end_y":"30.277915","randNum":23,"road_name":"天目山路-万塘路-玉古路"},{"start_x":"120.136722","start_y":"30.277997","end_x":"120.13073","end_y":"30.278496","randNum":71,"road_name":"天目山路-玉古路-万塘路"},{"start_x":"120.058477","start_y":"30.24796","end_x":"120.061083","end_y":"30.254281","randNum":14,"road_name":"天目山路-西溪路-五常大道"},{"start_x":"120.052773","start_y":"30.247042","end_x":"120.058463","end_y":"30.247876","randNum":93,"road_name":"天目山路-五常大道-西溪路"},{"start_x":"120.098128","start_y":"30.268668","end_x":"120.108297","end_y":"30.271412","randNum":12,"road_name":"天目山路-紫金港路-古墩路"},{"start_x":"120.108359","start_y":"30.271595","end_x":"120.098067","end_y":"30.268769","randNum":83,"road_name":"天目山路-古墩路-紫金港路"},{"start_x":"120.172966","start_y":"30.234651","end_x":"120.16216","end_y":"30.236094","randNum":38,"road_name":"万松岭隧道-西接线"},{"start_x":"120.125963","start_y":"30.288596","end_x":"120.13583","end_y":"30.289032","randNum":53,"road_name":"文二路-古翠路-学院路"},{"start_x":"120.142251","start_y":"30.289279","end_x":"120.147811","end_y":"30.28954","randNum":39,"road_name":"文二路-教工路-保俶北路"},{"start_x":"120.183793","start_y":"30.294282","end_x":"120.184098","end_y":"30.307257","randNum":79,"road_name":"东新路-绍兴路-德胜路"},{"start_x":"120.183922","start_y":"30.307244","end_x":"120.183612","end_y":"30.294269","randNum":73,"road_name":"东新路-德胜路-绍兴路"},{"start_x":"120.119025","start_y":"30.277058","end_x":"120.117403","end_y":"30.282594","randNum":62,"road_name":"丰潭路-天目山路-文三路"},{"start_x":"120.11734","start_y":"30.282483","end_x":"120.119016","end_y":"30.276822","randNum":16,"road_name":"丰潭路-文三路-天目山路"},{"start_x":"120.197586","start_y":"30.269025","end_x":"120.207009","end_y":"30.269286","randNum":65,"road_name":"凤起东路-凯旋路-秋涛北路"},{"start_x":"120.206808","start_y":"30.269397","end_x":"120.197753","end_y":"30.269132","randNum":87,"road_name":"凤起东路-秋涛北路-凯旋路"},{"start_x":"120.096501","start_y":"30.332862","end_x":"120.098491","end_y":"30.328451","randNum":76,"road_name":"古墩路-环镇北路-三墩路"},{"start_x":"120.098609","start_y":"30.328439","end_x":"120.096565","end_y":"30.332892","randNum":73,"road_name":"古墩路-三墩路-环镇北路"},{"start_x":"120.108105","start_y":"30.276908","end_x":"120.107399","end_y":"30.282159","randNum":43,"road_name":"古墩路-莲花街-文三西路"},{"start_x":"120.107335","start_y":"30.282054","end_x":"120.108017","end_y":"30.27697","randNum":33,"road_name":"古墩路-文三西路-莲花街"},{"start_x":"120.052376","start_y":"30.247455","end_x":"120.053598","end_y":"30.283635","randNum":75,"road_name":"杭州绕城高速-留下枢纽-五常互通"},{"start_x":"120.064316","start_y":"30.308011","end_x":"120.076565","end_y":"30.366345","randNum":26,"road_name":"杭州绕城高速-三墩互通-勾庄互通"},{"start_x":"120.053602","start_y":"30.2836","end_x":"120.064316","end_y":"30.308011","randNum":87,"road_name":"杭州绕城高速-五常互通-三墩互通"},{"start_x":"120.16113","start_y":"30.278593","end_x":"120.16361","end_y":"30.278756","randNum":53,"road_name":"环城北路-莫干山路-湖墅南路"},{"start_x":"120.16369","start_y":"30.278843","end_x":"120.161112","end_y":"30.278663","randNum":63,"road_name":"环城北路-湖墅南路-莫干山路"},{"start_x":"120.164017","start_y":"30.268944","end_x":"120.161673","end_y":"30.276687","randNum":71,"road_name":"环城西路-凤起路-体育场路"},{"start_x":"120.161617","start_y":"30.276601","end_x":"120.163863","end_y":"30.269114","randNum":8,"road_name":"环城西路-体育场路-凤起路"},{"start_x":"120.183441","start_y":"30.288018","end_x":"120.175747","end_y":"30.287437","randNum":16,"road_name":"文晖路-建国北路-上塘路"},{"start_x":"120.165053","start_y":"30.264235","end_x":"120.167236","end_y":"30.254066","randNum":82,"road_name":"环城西路-庆春路-西湖隧道"},{"start_x":"120.187396","start_y":"30.270276","end_x":"120.186817","end_y":"30.275781","randNum":25,"road_name":"建国北路-凤起路-体育场路"},{"start_x":"120.186658","start_y":"30.275862","end_x":"120.187251","end_y":"30.270287","randNum":18,"road_name":"建国北路-体育场路-凤起路"},{"start_x":"120.186667","start_y":"30.255947","end_x":"120.187404","end_y":"30.263617","randNum":15,"road_name":"建国中路-解放路-庆春路"},{"start_x":"120.187262","start_y":"30.263608","end_x":"120.186539","end_y":"30.255965","randNum":71,"road_name":"建国中路-庆春路-解放路"},{"start_x":"120.296223","start_y":"30.286542","end_x":"120.295873","end_y":"30.302176","randNum":37,"road_name":"九堡大桥-九堡大桥南"},{"start_x":"120.295751","start_y":"30.302187","end_x":"120.296101","end_y":"30.286537","randNum":61,"road_name":"九堡大桥-九堡大桥南"},{"start_x":"120.10171","start_y":"30.349186","end_x":"120.103147","end_y":"30.347113","randNum":31,"road_name":"莫干山路-金家渡中路-通运路"},{"start_x":"120.154458","start_y":"30.289807","end_x":"120.157782","end_y":"30.284077","randNum":61,"road_name":"莫干山路-文二路-文晖路"},{"start_x":"120.157892","start_y":"30.28408","end_x":"120.154546","end_y":"30.28983","randNum":14,"road_name":"莫干山路-文晖路-文二路"},{"start_x":"120.110502","start_y":"30.338394","end_x":"120.112734","end_y":"30.334198","randNum":20,"road_name":"莫干山路-祥园路-三墩路"},{"start_x":"120.110681","start_y":"30.338408","end_x":"120.107371","end_y":"30.34193","randNum":56,"road_name":"莫干山路-祥园路-新文路"},{"start_x":"120.107298","start_y":"30.341799","end_x":"120.110492","end_y":"30.338421","randNum":9,"road_name":"莫干山路-新文路-祥园路"},{"start_x":"120.161036","start_y":"30.214318","end_x":"120.159082","end_y":"30.228049","randNum":99,"road_name":"南复路-凤凰山路-莲花峰路"},{"start_x":"120.159011","start_y":"30.228063","end_x":"120.160947","end_y":"30.214313","randNum":63,"road_name":"南复路-莲花峰路-凤凰山路"},{"start_x":"120.204329","start_y":"30.242037","end_x":"120.207873","end_y":"30.245239","randNum":78,"road_name":"钱江路-衢江路-清江路"},{"start_x":"120.215894","start_y":"30.239336","end_x":"120.210742","end_y":"30.243002","randNum":49,"road_name":"钱江三桥-之江路-富春路"},{"start_x":"120.210636","start_y":"30.242921","end_x":"120.21581","end_y":"30.239258","randNum":77,"road_name":"钱江三桥-富春路-之江路"},{"start_x":"120.144145","start_y":"30.208492","end_x":"120.143513","end_y":"30.203599","randNum":8,"road_name":"钱江一桥-钱塘江大桥"},{"start_x":"120.144145","start_y":"30.208492","end_x":"120.143513","end_y":"30.203599","randNum":58,"road_name":"钱江一桥-钱塘江大桥"},{"start_x":"120.143563","start_y":"30.20362","end_x":"120.144145","end_y":"30.208492","randNum":57,"road_name":"钱江一桥-钱塘江大桥"},{"start_x":"120.191168","start_y":"30.252806","end_x":"120.204748","end_y":"30.247771","randNum":82,"road_name":"清江路-城东路-秋涛路"},{"start_x":"120.198785","start_y":"30.2633","end_x":"120.207059","end_y":"30.263424","randNum":75,"road_name":"庆春东路-庆春立交桥-秋涛北路"},{"start_x":"120.207074","start_y":"30.263544","end_x":"120.198774","end_y":"30.263424","randNum":20,"road_name":"庆春东路-秋涛北路-庆春立交桥"},{"start_x":"120.178292","start_y":"30.263708","end_x":"120.183048","end_y":"30.263618","randNum":92,"road_name":"庆春路-中河路-马市街"},{"start_x":"120.207002","start_y":"30.269289","end_x":"120.206521","end_y":"30.281329","randNum":1,"road_name":"秋涛北路-凤起东路-艮秋立交桥"},{"start_x":"120.206374","start_y":"30.281314","end_x":"120.206854","end_y":"30.269395","randNum":12,"road_name":"秋涛北路-艮秋立交桥-凤起东路"},{"start_x":"120.151568","start_y":"30.335996","end_x":"120.1531","end_y":"30.323952","randNum":79,"road_name":"上塘高架-瓜山立交桥-衢州街出入口"},{"start_x":"120.153105","start_y":"30.323947","end_x":"120.177011","end_y":"30.280135","randNum":12,"road_name":"上塘高架-衢州街出入口-上塘路出入口"},{"start_x":"120.177781","start_y":"30.280032","end_x":"120.153177","end_y":"30.323957","randNum":99,"road_name":"上塘高架-上塘路出入口-衢州街出入口"},{"start_x":"120.163635","start_y":"30.303896","end_x":"120.177011","end_y":"30.280135","randNum":95,"road_name":"上塘高架-德胜立交桥-上塘路出入口"},{"start_x":"120.177781","start_y":"30.280032","end_x":"120.163635","end_y":"30.303896","randNum":62,"road_name":"上塘高架-上塘路出入口-德胜立交桥"},{"start_x":"120.15222","start_y":"30.330757","end_x":"120.153626","end_y":"30.319523","randNum":49,"road_name":"上塘路-湖州街-登云路"},{"start_x":"120.153705","start_y":"30.31951","end_x":"120.152304","end_y":"30.33076","randNum":42,"road_name":"上塘路-登云路-湖州街"},{"start_x":"120.157232","start_y":"30.269703","end_x":"120.162927","end_y":"30.271995","randNum":52,"road_name":"省府路-保俶路-环城西路"},{"start_x":"120.162891","start_y":"30.272098","end_x":"120.157128","end_y":"30.269782","randNum":53,"road_name":"省府路-环城西路-保俶路"},{"start_x":"120.107423","start_y":"30.326071","end_x":"120.125214","end_y":"30.333549","randNum":38,"road_name":"石祥路-丰庆路-杭行路"},{"start_x":"120.125184","start_y":"30.333652","end_x":"120.107362","end_y":"30.326136","randNum":61,"road_name":"石祥路-杭行路-丰庆路"},{"start_x":"120.155947","start_y":"30.338357","end_x":"120.16644","end_y":"30.338162","randNum":1,"road_name":"石祥路-瓜山立交桥-储鑫路"},{"start_x":"120.161612","start_y":"30.276603","end_x":"120.164963","end_y":"30.276424","randNum":1,"road_name":"体育场路-环城西路-武林路"},{"start_x":"120.164892","start_y":"30.276509","end_x":"120.161685","end_y":"30.276696","randNum":71,"road_name":"体育场路-武林路-环城西路"},{"start_x":"120.197445","start_y":"30.278534","end_x":"120.193699","end_y":"30.27639","randNum":11,"road_name":"体育场路-凯旋路-环城东路"},{"start_x":"120.165027","start_y":"30.276422","end_x":"120.169904","end_y":"30.276095","randNum":7,"road_name":"体育场路-武林路-延安路"},{"start_x":"120.169901","start_y":"30.27617","end_x":"120.164991","end_y":"30.276502","randNum":8,"road_name":"体育场路-延安路-武林路"},{"start_x":"120.119092","start_y":"30.276864","end_x":"120.12653","end_y":"30.278427","randNum":19,"road_name":"天目山路-丰潭路-古翠路"},{"start_x":"120.126537","start_y":"30.278553","end_x":"120.119059","end_y":"30.276982","randNum":93,"road_name":"天目山路-古翠路-丰潭路"},{"start_x":"120.05848","start_y":"30.247953","end_x":"120.083358","end_y":"30.266487","randNum":68,"road_name":"天目山路-花坞路-五常大道"},{"start_x":"120.083312","start_y":"30.266606","end_x":"120.058434","end_y":"30.248263","randNum":17,"road_name":"天目山路-五常大道-花坞路"},{"start_x":"120.147913","start_y":"30.289537","end_x":"120.154457","end_y":"30.289818","randNum":37,"road_name":"文二路-保俶北路-莫干山路"},{"start_x":"120.135911","start_y":"30.289033","end_x":"120.142028","end_y":"30.289299","randNum":47,"road_name":"文二路-学院路-教工路"},{"start_x":"120.106105","start_y":"30.287765","end_x":"120.093416","end_y":"30.286595","randNum":57,"road_name":"文二西路-古墩路-紫金港路"},{"start_x":"120.161329","start_y":"30.284709","end_x":"120.157897","end_y":"30.284086","randNum":94,"road_name":"文晖路-湖墅南路-莫干山路"},{"start_x":"120.161329","start_y":"30.284709","end_x":"120.157897","end_y":"30.284086","randNum":78,"road_name":"文晖路-湖墅南路-莫干山路"},{"start_x":"120.175532","start_y":"30.287374","end_x":"120.161329","end_y":"30.284709","randNum":31,"road_name":"文晖路-上塘路-湖墅南路"},{"start_x":"120.183619","start_y":"30.287922","end_x":"120.191313","end_y":"30.288795","randNum":39,"road_name":"文晖路-文晖大桥附近"},{"start_x":"120.142508","start_y":"30.283427","end_x":"120.136409","end_y":"30.283185","randNum":81,"road_name":"文三路-教工路-学院路"},{"start_x":"120.136409","start_y":"30.283185","end_x":"120.126376","end_y":"30.282708","randNum":48,"road_name":"文三路-学院路-古翠路"},{"start_x":"120.117315","start_y":"30.282594","end_x":"120.107402","end_y":"30.282157","randNum":71,"road_name":"文三西路-丰潭路-古墩路"},{"start_x":"120.105262","start_y":"30.292635","end_x":"120.114205","end_y":"30.293158","randNum":91,"road_name":"文三西路-古墩路-丰潭路"},{"start_x":"120.126249","start_y":"30.282756","end_x":"120.117315","end_y":"30.282594","randNum":28,"road_name":"文三西路-古翠路-丰潭路"},{"start_x":"120.114205","start_y":"30.293158","end_x":"120.125435","end_y":"30.293838","randNum":85,"road_name":"文三西路-丰潭路-古翠路"},{"start_x":"120.148223","start_y":"30.294912","end_x":"120.141724","end_y":"30.29469","randNum":90,"road_name":"文一路-保俶北路-教工路"},{"start_x":"120.141727","start_y":"30.294565","end_x":"120.148136","end_y":"30.29483","randNum":69,"road_name":"文一路-教工路-保俶北路"},{"start_x":"120.06873","start_y":"30.292334","end_x":"120.083287","end_y":"30.292537","randNum":18,"road_name":"文一西路-崇义路-崇仁路"},{"start_x":"120.083301","start_y":"30.292675","end_x":"120.068726","end_y":"30.292455","randNum":63,"road_name":"文一西路-崇仁路-崇义路"},{"start_x":"120.114172","start_y":"30.293277","end_x":"120.105243","end_y":"30.292739","randNum":63,"road_name":"文一西路-丰潭路-古墩路"},{"start_x":"120.105262","start_y":"30.292631","end_x":"120.114205","end_y":"30.293158","randNum":55,"road_name":"文一西路-古墩路-丰潭路"},{"start_x":"120.214817","start_y":"30.260826","end_x":"120.214714","end_y":"30.263434","randNum":54,"road_name":"新塘路-杭海路-庆春路"},{"start_x":"120.214592","start_y":"30.263442","end_x":"120.214735","end_y":"30.26079","randNum":30,"road_name":"新塘路-庆春路-杭海路"},{"start_x":"120.17855","start_y":"30.243562","end_x":"120.17709","end_y":"30.235544","randNum":44,"road_name":"中河路-上仓桥路-望江路"},{"start_x":"120.161068","start_y":"30.265898","end_x":"120.164459","end_y":"30.267041","randNum":78,"road_name":"白沙路-保俶路-环城西路"},{"start_x":"120.164432","start_y":"30.26713","end_x":"120.161019","end_y":"30.265959","randNum":46,"road_name":"白沙路-环城西路-保俶路"},{"start_x":"120.151647","start_y":"30.295074","end_x":"120.155438","end_y":"30.296477","randNum":0,"road_name":"文一路-莫干山路-湖墅南路"},{"start_x":"120.142604","start_y":"30.283429","end_x":"120.142155","end_y":"30.289304","randNum":26,"road_name":"教工路-文三路-文二路"},{"start_x":"120.142036","start_y":"30.289297","end_x":"120.142508","end_y":"30.28343","randNum":10,"road_name":"教工路-文二路-文三路"},{"start_x":"120.170848","start_y":"30.256114","end_x":"120.170583","end_y":"30.264014","randNum":77,"road_name":"延安路-解放路-庆春路"},{"start_x":"120.207458","start_y":"30.257733","end_x":"120.20722","end_y":"30.263426","randNum":56,"road_name":"秋涛北路-采荷路-庆春东路"},{"start_x":"120.207084","start_y":"30.263422","end_x":"120.207322","end_y":"30.257729","randNum":6,"road_name":"秋涛北路-庆春东路-采荷路"},{"start_x":"120.170309","start_y":"30.295525","end_x":"120.1699","end_y":"30.296153","randNum":92,"road_name":"上塘路-潮王路-德胜立交桥"},{"start_x":"120.169708","start_y":"30.296081","end_x":"120.170108","end_y":"30.295453","randNum":34,"road_name":"上塘路-德胜立交桥-潮王路"},{"start_x":"120.151649","start_y":"30.336001","end_x":"120.154029","end_y":"30.346028","randNum":29,"road_name":"上塘路-瓜山立交桥-拱康路"},{"start_x":"120.15397","start_y":"30.346107","end_x":"120.151567","end_y":"30.336008","randNum":67,"road_name":"上塘路-拱康路-瓜山立交桥"},{"start_x":"120.147909","start_y":"30.289538","end_x":"120.14821","end_y":"30.294847","randNum":96,"road_name":"保俶北路-文二路-文一路"},{"start_x":"120.148134","start_y":"30.294841","end_x":"120.147815","end_y":"30.289536","randNum":59,"road_name":"保俶北路-文一路-文二路"},{"start_x":"120.192415","start_y":"30.280896","end_x":"120.197261","end_y":"30.281383","randNum":48,"road_name":"环城北路-环城东路-凯旋路"},{"start_x":"120.197258","start_y":"30.2815","end_x":"120.19238","end_y":"30.281025","randNum":5,"road_name":"环城北路-凯旋路-环城东路"},{"start_x":"120.158225","start_y":"30.291072","end_x":"120.166022","end_y":"30.294471","randNum":95,"road_name":"潮王路-湖墅路-河东路"},{"start_x":"120.143657","start_y":"30.270621","end_x":"120.143073","end_y":"30.277405","randNum":93,"road_name":"黄龙路-曙光路-天目山路"},{"start_x":"120.160935","start_y":"30.265945","end_x":"120.136842","end_y":"30.259149","randNum":0,"road_name":"北山路-保俶路-曙光路"},{"start_x":"120.158227","start_y":"30.291049","end_x":"120.170175","end_y":"30.295467","randNum":73,"road_name":"潮王路-湖墅南路-上塘路"},{"start_x":"120.154535","start_y":"30.289828","end_x":"120.158227","end_y":"30.291049","randNum":26,"road_name":"潮王路-莫干山路-湖墅南路"},{"start_x":"120.170356","start_y":"30.295453","end_x":"120.180844","end_y":"30.296997","randNum":96,"road_name":"潮王路-上塘路-绍兴路"},{"start_x":"120.180808","start_y":"30.297065","end_x":"120.170315","end_y":"30.295525","randNum":79,"road_name":"潮王路-绍兴路-上塘路"},{"start_x":"120.233041","start_y":"30.312063","end_x":"120.202921","end_y":"30.310909","randNum":99,"road_name":"德胜快速路-德胜互通-秋石快速路"},{"start_x":"120.203214","start_y":"30.310625","end_x":"120.233047","end_y":"30.311969","randNum":62,"road_name":"德胜快速路-秋石快速路-德胜互通"},{"start_x":"120.177181","start_y":"30.235546","end_x":"120.178645","end_y":"30.243553","randNum":50,"road_name":"中河路-望江路-上仓桥路"},{"start_x":"120.093457","start_y":"30.286488","end_x":"120.106136","end_y":"30.287661","randNum":29,"road_name":"文二西路-紫金港路-古墩路"},{"start_x":"120.184126","start_y":"30.307537","end_x":"120.199128","end_y":"30.310222","randNum":28,"road_name":"德胜快速路-东新路-秋石快速路"},{"start_x":"120.199063","start_y":"30.31078","end_x":"120.184191","end_y":"30.307588","randNum":37,"road_name":"德胜快速路-秋石快速路-东新路"},{"start_x":"120.161649","start_y":"30.299052","end_x":"120.155482","end_y":"30.296581","randNum":20,"road_name":"德胜路-德胜立交桥-湖墅南路"},{"start_x":"120.155508","start_y":"30.296513","end_x":"120.161662","end_y":"30.298981","randNum":32,"road_name":"德胜路-湖墅南路-德胜立交桥"},{"start_x":"120.206997","start_y":"30.26929","end_x":"120.214287","end_y":"30.26959","randNum":75,"road_name":"凤起东路-秋涛北路-新塘路"},{"start_x":"120.214277","start_y":"30.269676","end_x":"120.206992","end_y":"30.269396","randNum":40,"road_name":"凤起东路-新塘路-秋涛北路"}
]
var polylines=[]; 
function clearPolyLines(){
	var totPolyLine = polylines.length;
	for(var i =0;i<totPolyLine;i++){
		map.removeOverlay(polylines[i]);
	}
	polylines.length = 0;
	polylines=[];
}
function drawTrafficRateRoute(val) {  
	// map.clearOverlays();
	clearPolyLines();
	// map.removeOverlay(polyline);
	// var runLine=val;  
	/**添加终点和起点的标记**/  
	// map.addMarker(new BMap.Point(runLine[0].dtLongitude,runLine[0].dtLatitude),'终点');  
	// map.addMarker(new BMap.Point(runLine[runLine.length-1].dtLongitude,runLine[runLine.length-1].dtLatitude),'起点');  
	var arrPois = [];  
	var lineColor="";  
	//将后台读取到的GPS点信息，全部存储为百度的BMap.Point坐标点对象并用数组装起来  
	//循环遍历数组  
	for(var i=0;i<val.length;i++){  
	  arrPois.splice(0,arrPois.length);//清空数组,如若不清空，会在原来基础上每次在重复的增加一边。这儿是让每两个点画线，否则第二次进来的时候就成四个数据了，第二个重复了一次  
	  arrPois.push(new BMap.Point(val[i].start_x,val[i].start_y));  
	  arrPois.push(new BMap.Point(val[i].end_x,val[i].end_y));  
	  //区间颜色  
	  var tmpRandNum = val[i].randNum;
		if(Math.random()>=0.5)
			tmpRandNum = val[i].randNum + 10*Math.random();
		else
			tmpRandNum = val[i].randNum - 10*Math.random();
		if(tmpRandNum>=0&&tmpRandNum<=100) {
			val[i].randNum = tmpRandNum;
		}
		else{
			val[i].randNum = val[i].randNum;
		}
	  // if(val[i].randNum<30){  
	  //     // lineColor="yellow";  
	  //     lineColor = 'rgb('+val[i].randNum/100*255+','+0+','+0+')';
	  // }else if(val[i].randNum>30&&val[i].randNum<60){  
	  // 	lineColor = 'rgb('+val[i].randNum/100*255+','+255+','+0+')';
	  //     // lineColor="green";  
	  // }else if(val[i].randNum>60&&val[i].randNum<90){  
	  // 	lineColor = 'rgb('+(100-val[i].randNum)/100*255+','+255+','+0+')';
	  //     // lineColor="black";  
	  // }else {  
	  //     lineColor = 'rgb('+val[i].randNum/100*255+','+0+','+0+')'; 
	  // }
		// lineColor = 'rgb('+val[i].randNum/100*255+','+(100-val[i].randNum)/100*255+','+0+')';
		lineColor = 'hsl('+360+','+100+'%,'+(100-val[i].randNum/2)+'%)';
	  //创建线路  
	  var polyline = new BMap.Polyline(  
	          arrPois,//所有的GPS坐标点  
	          {  
	              strokeColor : lineColor, //线路颜色  
	              strokeWeight : 4,//线路大小  
	              //线路类型(虚线)  
	              strokeStyle : "solid"});  
	  //绘制线路  
	  map.addOverlay(polyline); 
	  polylines.push(polyline); 
	} 
}  

// drawTrafficRateRoute(routeData);
var trafficRateRoute = setInterval("drawTrafficRateRoute(routeData)",1000);

// setTimeout(clearPolyLines,2000);
var styleOptions = {
    strokeColor:"#009688",    //边线颜色。
    fillColor:"#009688",      //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3,       //边线的宽度，以像素为单位。
    strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
    fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}
    //实例化鼠标绘制工具
var drawingManager = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: true, //是否显示工具栏
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(10, 50), //偏离值
        drawingModes : [
            BMAP_DRAWING_MARKER,
            BMAP_DRAWING_CIRCLE,
            // BMAP_DRAWING_POLYLINE,
            BMAP_DRAWING_POLYGON,
            BMAP_DRAWING_RECTANGLE 
         ]
    },
    circleOptions: styleOptions, //圆的样式
    polylineOptions: styleOptions, //线的样式
    polygonOptions: styleOptions, //多边形的样式
    rectangleOptions: styleOptions, //矩形的样式
});  
var curUseLessWords = true;
var isDrawingPoint = true;
var curCityNum = [0,0];
drawingManager.addEventListener("overlaycomplete", function(e) {
	if(isDrawingPoint){
	    if(curUseLessWords){
	    	$('.curDistincts span').text("");
	    	curUseLessWords = false;
	    }
	    else{

	    }
	    var curDistrict = getCurDistrict(e.overlay);
	    // console.log(getCurDistrict(e.overlay));
	    var curX = e.overlay.point.lng;
	    var curY = e.overlay.point.lat;
	    var totRouteDataLen = routeData.length;
	    for(var i = 0;i<totRouteDataLen;i++){
	    	var leftX = Math.min(routeData[i].start_x,routeData[i].end_x);
	    	var rightX = Math.max(routeData[i].start_x,routeData[i].end_x);
	    	var leftY = Math.min(routeData[i].start_y,routeData[i].end_y);
	    	var rightY = Math.max(routeData[i].start_y,routeData[i].end_y);
	    	if(curX>=leftX&&curX<=rightX&&curY>=leftY&&curY<=rightY){
	    		$('.curDistincts span').append((routeData[i].road_name.split("-"))[1]+"、");
	    		// console.log(routeData[i].road_name);
	    		var curRoadName = (routeData[i].road_name.split("-"))[1];
				changeTheRightPartData(curRoadName);
	    	}
	    }
		drawTheRightPart();
	    if($('.curDistincts span').text()==""){
	    	$('.curDistincts span').text("暂无选定有效区域");
			curUseLessWords = true;
	    }
	    else{
	    	console.log(($('.curDistincts span').text().split("、")));
	    	// changeTheAccidentData();
	    	changeThePickedRoadAccidentData(($('.curDistincts span').text().split("、")));
	    }
	}
	else{
		isDrawingPoint = true;
	}
});

function judgeInsideCircle(x,y,r,cx,cy){
	if((x-cx)*(x-cx)+(y-cy)*(y-cy)<=r*r)
		return true;
	else
		return false;
}
drawingManager.addEventListener("circlecomplete", function(e,overlay) {
    // changeTheAccidentData();
    isDrawingPoint = false;
    if(curUseLessWords){
    	$('.curDistincts span').text("");
    	curUseLessWords = false;
    }
    else{

    }
    var radius = overlay.getRadius()/11; 
    // console.log(radius);
    var centerX = overlay.getCenter().lng;
    var centerY = overlay.getCenter().lng;
    // console.log(radius,centerX,centerY);
    var totRouteDataLen = routeData.length;
    for(var i = 0;i<totRouteDataLen;i++){
    	var leftX = Math.min(routeData[i].start_x,routeData[i].end_x);
		var rightX = Math.max(routeData[i].start_x,routeData[i].end_x);
		var leftY = Math.min(routeData[i].start_y,routeData[i].end_y);
		var rightY = Math.max(routeData[i].start_y,routeData[i].end_y);
		if(judgeInsideCircle(leftX,leftY,radius,centerX,centerY)&&
			judgeInsideCircle(rightX,rightY,radius,centerX,centerY)){
			// console.log((routeData[i].road_name.split("-"))[1]+"、");
	    	$('.curDistincts span').append((routeData[i].road_name.split("-"))[1]+"、");

			var curRoadName = (routeData[i].road_name.split("-"))[1];
			changeTheRightPartData(curRoadName);
		}
	}
	drawTheRightPart();
	if($('.curDistincts span').text()==""){
    	$('.curDistincts span').text("暂无选定有效区域");
		curUseLessWords = true;
    }
    else{
    	console.log(($('.curDistincts span').text().split("、")));
    	// changeTheAccidentData();
    	changeThePickedRoadAccidentData(($('.curDistincts span').text().split("、")));
    }
	// if($('.curDistincts span').text()==""){
 //    	$('.curDistincts span').text("暂无选定有效区域");
	// 	curUseLessWords = true;
 //    }
 //    else{
 //    	changeTheAccidentData();
 //    }

});
function sortPolyGon(x,y){
	if(x.lng==y.lng)
		return x.lat<y.lat;
	else
		return x.lng<y.lng;
}
drawingManager.addEventListener("polygoncomplete", function(e,overlay) {
    // changeTheAccidentData();
    isDrawingPoint = false;
    isDrawingPoint = false;
    if(curUseLessWords){
    	$('.curDistincts span').text("");
    	curUseLessWords = false;
    }
    else{

    }
    var path = overlay.getPath();//Array<Point> 返回多边型的点数组
    // for(var i=0;i<path.length;i++){
    //     console.log(path[i].lng,path[i].lat);
    // }
    path.sort(sortPolyGon);
    // console.log(path[path.length-1].lng);

    var totRouteDataLen = routeData.length;
    var maxX = Math.max(path[0].lng,path[path.length-1].lng);
    var maxY = Math.max(path[0].lat,path[path.length-1].lat);
    var minX = Math.min(path[0].lng,path[path.length-1].lng);
    var minY = Math.min(path[0].lat,path[path.length-1].lat);
    for(var i = 0;i<totRouteDataLen;i++){
    	var leftX = Math.min(routeData[i].start_x,routeData[i].end_x);
		var rightX = Math.max(routeData[i].start_x,routeData[i].end_x);
		var leftY = Math.min(routeData[i].start_y,routeData[i].end_y);
		var rightY = Math.max(routeData[i].start_y,routeData[i].end_y);

		if(judgeInsideRect(leftX,leftY,minX,minY,maxX,maxY)&&
			judgeInsideRect(rightX,rightY,minX,minY,maxX,maxY)){
	    	$('.curDistincts span').append((routeData[i].road_name.split("-"))[1]+"、");
			
			var curRoadName = (routeData[i].road_name.split("-"))[1];
			changeTheRightPartData(curRoadName);
		}
	}
	drawTheRightPart();
	if($('.curDistincts span').text()==""){
    	$('.curDistincts span').text("暂无选定有效区域");
		curUseLessWords = true;
    }
    else{
    	console.log(($('.curDistincts span').text().split("、")));
    	// changeTheAccidentData();
    	changeThePickedRoadAccidentData(($('.curDistincts span').text().split("、")));
    }
	// console.log(minX,minY);
	// console.log(maxX,maxY);
});

function judgeInsideRect(x,y,lx,ly,rx,ry){
	if(x>=lx&&x<=rx&&y>=ly&&y<=ry)
		return true;
	else
		return false;
}
drawingManager.addEventListener("rectanglecomplete", function(e,overlay) {
    // changeTheAccidentData();
    isDrawingPoint = false;
    isDrawingPoint = false;
    if(curUseLessWords){
    	$('.curDistincts span').text("");
    	curUseLessWords = false;
    }
    else{

    }
    var path = overlay.getPath();//Array<Point> 返回多边型的点数组
    // for(var i=0;i<path.length;i++){
    //     console.log(path[i].lng,path[i].lat);
    // }
    //左上角开始，顺时针
    var totRouteDataLen = routeData.length;
    for(var i = 0;i<totRouteDataLen;i++){
    	var leftX = Math.min(routeData[i].start_x,routeData[i].end_x);
		var rightX = Math.max(routeData[i].start_x,routeData[i].end_x);
		var leftY = Math.min(routeData[i].start_y,routeData[i].end_y);
		var rightY = Math.max(routeData[i].start_y,routeData[i].end_y);

		if(judgeInsideRect(leftX,leftY,path[3].lng,path[3].lat,path[1].lng,path[1].lat)&&
			judgeInsideRect(rightX,rightY,path[3].lng,path[3].lat,path[1].lng,path[1].lat)){
			// console.log((routeData[i].road_name.split("-"))[1]+"、");
	    	$('.curDistincts span').append((routeData[i].road_name.split("-"))[1]+"、");

			var curRoadName = (routeData[i].road_name.split("-"))[1];
			changeTheRightPartData(curRoadName);
		}
	}
	drawTheRightPart();
	if($('.curDistincts span').text()==""){
    	$('.curDistincts span').text("暂无选定有效区域");
		curUseLessWords = true;
    }
    else{
    	console.log(($('.curDistincts span').text().split("、")));
    	// changeTheAccidentData();
    	changeThePickedRoadAccidentData(($('.curDistincts span').text().split("、")));
    }
	// console.log(path[3].lng,path[3].lat);
	// console.log(path[1].lng,path[1].lat);
	// console.log(multipleOption.legend.data);

});
function drawTheRightPart(){
	// //绘制右1
	// if (averageOption && typeof averageOption === "object") {
	//     averageChart.setOption(averageOption, true);
	// }
	//绘制右2
	if (pieOption && typeof pieOption === "object") {
	    pieChart.setOption(pieOption, true);
	}
	//绘制右3
	if (multipleOption && typeof multipleOption === "object") {
	    multipleChart.setOption(multipleOption, true);
	}
}
function changeTheRightPartData(curRoadName){
	//右3
	var flag = true;
	for(var j = 0;j<multipleOption.legend.data.length;j++){
		if(multipleOption.legend.data[j]==curRoadName){
			flag = false;
			break;
		}
	}
	if(flag){
		multipleOption.legend.data[curCityNum[0]%multipleOption.legend.data.length]  = curRoadName;
		multipleOption.series[curCityNum[0]%multipleOption.legend.data.length].name  = curRoadName;
		for(var k = 0;k<6;k++){
			multipleOption.series[curCityNum[0]%multipleOption.legend.data.length].data[k] = (Math.random()*10).toFixed(2);
		}
		// console.log(multipleOption.series);
		curCityNum[0]++;
		// console.log(curRoadName);
	}
	//右2
	for(var j =0;j<3;j++){
		pieOption.series[0].data[j].value=(Math.random()*30).toFixed(2);
		// console.log(pieOption.series[0].data[j].value);
	}

	// //右1
	// flag = true;
	// for(var j = 0;j<category.length;j++){
	// 	if(category[j]==curRoadName){
	// 		flag = false;
	// 		break;
	// 	}
	// }
	// if(flag){
	// 	category[curCityNum[1]%category.length]  = curRoadName;
	// 	curCityNum[1]++;
	// }
}
$('.BMapLib_Drawing_panel').append('<a class="clearAllMarkers"  href="javascript:void(0)" title="清理标记" onfocus="this.blur()">CLEAR</a>')

$('.clearAllMarkers').click(function(){
	// var totMarkers = $('#centerMapBox').children().eq(0).children().eq(1).children().eq(1).children();
	// console.log(totMarkers);
	// totMarkers.empty();
	map.clearOverlays();
	createRedPoints();
	drawTrafficRateRoute(routeData);
	$('.curDistincts span').text("暂无选定有效区域");
	curUseLessWords = true;
})


$('.accidentBtn').click(function(){
	if($('.accidentBtn').css('color')=='rgb(255, 255, 255)'){
		$('.accidentBtn').css({
			'background-color': '#fff',
			'color': '#000'
		})
		clearRedPoints();
		clearInterval(trafficRateRoute);
		clearPolyLines();
	}
	else{
		$('.accidentBtn').css({
			'background-color': '#90a5d8',
			'color': '#fff'
		})
		trafficRateRoute = setInterval("drawTrafficRateRoute(routeData)",1000);
		setTimeout(createRedPoints,1000);
	}

})
$('.trafficBtn').click(function(){
	
	if($('.trafficBtn').css('color')=='rgb(255, 255, 255)'){
		$('.trafficBtn').css({
			'background-color': '#fff',
			'color': '#000'
		})
		map.removeTileLayer(traffic);
	}
	else{
		$('.trafficBtn').css({
			'background-color': '#90a5d8',
			'color': '#fff'
		})
		traffic = new BMap.TrafficLayer();
		map.addTileLayer(traffic);                    // 将图层添加到地图上

	}
})

$('#changeTheDayAndNight span').click(function(){
	if($('#changeTheDayAndNight span').text()=="夜间模式"){
		$('#changeTheDayAndNight span').text("白昼模式");
		// $('#changeTheDayAndNight span').css({
		// 	'background-color': '#fff',
		// 	'color': '#000'
		// });
		mapStyle={  style : "none" }; 
		map.setMapStyle(mapStyle);
	}
	else{
		$('#changeTheDayAndNight span').text("夜间模式");
		// $('#changeTheDayAndNight span').css({
		// 	'background-color': '#90a5d8',
		// 	'color': '#fff'
		// });
		mapStyle={  style : "midnight" }; 
		map.setMapStyle(mapStyle);
	}
})


// var big = true;

// setInterval(function(){
// 	if(big){
// 		$('.redPoint').css({
// 			'transform':'scale(1.0,1.0)'
// 		})
// 		big = false;
// 	}
// 	else{
// 		$('.redPoint').css({
// 			'transform':'scale(1.5,1.5)'
// 		})
// 		big = true;
// 	}
// },1000);

var markers = [];
function createRedPoints(){
	for(var i = 0;i<9;i++){
		// var curNum = parseInt(Math.random()*400);
		var curNum = parseInt(360/9*i+20);
		// console.log(curNum);
		markers[i] = new BMap.Marker(new BMap.Point(routeData[curNum].start_x, routeData[curNum].start_y),{icon:
			new BMap.Icon("images/redAlarm.gif",
			new BMap.Size(50,50), // 视窗大小
			{
				imageSize: new BMap.Size(50,50), // 引用图片实际大小
				imageOffset:new BMap.Size(0,0)  // 图片相对视窗的偏移
			})
		});  // 创建标注
		console.log((routeData[i].road_name.split("-"))[1]);
		var opts1 = { width: 50 };  
	    // markers[i].openInfoWindow(infoWindow);  
	    markers[i].z.title = (routeData[i].road_name.split("-"))[1];
	    // markers[i]
	    // console.log(markers[i].z.title );
	    markers[i].addEventListener('click',function(e,index){
	    	var infoWindow = new BMap.InfoWindow(e.target.z.title+" 事故发生概率为:"+(8+Math.random()*2).toFixed(2)+"‰", opts1);  
	        this.openInfoWindow(infoWindow);
	    });
		map.addOverlay(markers[i]);              // 将标注添加到地图中
	}
	// var tot = 0;
	// for(var i = 0;i<420;i++){
	// 	if(routeData[i].randNum>=99){
	// 		markers[tot] = new BMap.Marker(new BMap.Point(routeData[i].start_x, routeData[i].start_y),{icon:
	// 			new BMap.Icon("images/greenPoint.png",
	// 			new BMap.Size(50,50), // 视窗大小
	// 			{
	// 				imageSize: new BMap.Size(50,50), // 引用图片实际大小
	// 				imageOffset:new BMap.Size(0,0)  // 图片相对视窗的偏移
	// 			})
	// 		});  // 创建标注
	// 		map.addOverlay(markers[tot]);              // 将标注添加到地图中
	// 		tot++;
	// 		console.log(i);
	// 	}
	// 	if(tot==9){
	// 		console.log(i);
	// 		break;
	// 	}
	// }
}
function clearRedPoints(){
	for(var i =0;i<9;i++){
		map.removeOverlay(markers[i]);
	}
}
setTimeout(createRedPoints,1000);
// setInterval(createRedPoints,1000);
// 120.168347, 30.281101



// console.log(getName());

function getName(){
	var familyNames = new Array(
		"赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", 
		"褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
		"何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", 
		"陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
		"云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", 
		"昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
		"酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", 
		"倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
		"乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", 
		"元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
	);
	var givenNames = new Array(
		"子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", 
		"昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", 
		"东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", 
		"美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", 
		"建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", 
		"涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", 
		"子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", 
		"佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", 
		"佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", 
		"清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
	);
	var i = parseInt( 100 * Math.random());
	var familyName = familyNames[i];
	var j = parseInt( 100 * Math.random());
	var givenName = givenNames[i];
	var name = familyName + givenName;
	return name;
}

// setInterval(function(){
// 	var curHtml = $('.tfhoursAlarmWordsShow').html()
// 	$('.tfhoursAlarmWordsShow').html(curHtml);
// },1000);





