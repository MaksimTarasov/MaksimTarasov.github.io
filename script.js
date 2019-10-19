ymaps.ready(init);
var myMap, myGeoObject, myRectangle;

function init () {
   myMap = new ymaps.Map('map', {
        center: [54.693730, 20.42181255],
        zoom: 18
    }, {
		searchControlProvider: 'yandex#search'
    }); 
    var coord2 = [];
	var rez=[0,3030,1195,1975,2495,1565,1055,990,1705,450,0,725,1585,4720,645,0,0,820,1070,965,985,0,0,3905,2345,2735,1110,2260];
    var y=54.693633;
	var x=20.419043;
	var y2=54.693633;//54.693227;
	var x2=20.419193;
	var delta_y=0;
	var delta_x=0.000150;
	var coutOfPlayers=28;
	
	for (var i=0; i<coutOfPlayers+1; i++){
		coord2.push([y,x]);
		coord2.push([y2,x2]);
		x=x+delta_x;
		x2=x2+delta_x;
		y2=54.693633;//54.693227;
		if (rez[i]!=0) {y2=y2-(0.0000001*rez[i])};//1/rez[i]*0.1)};
		//document.writeln("rez=",rez[i],"|||","{y2:",i,"=",y2,"}","</br>");
	}
	//document.writeln("[",coord2.length,"]");
	//document.writeln("</br>");
	//document.writeln("============================================================");
	//document.writeln("</br>");
	//document.writeln("[",coord2.length,"]");  */
		
    myCollection = new ymaps.GeoObjectCollection();
	
	for (var i=2; i<coord2.length; i=i+2){
	myCollection.add(new ymaps.Rectangle([coord2[i],coord2[i+1]]));
	} 

  myMap.geoObjects
        .add(myCollection);  
	
} 
