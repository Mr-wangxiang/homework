function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_a = [
    {key: "a", count: 3},
    {key: "e", count: 7},
    {key: "h", count: 11},
    {key: "t", count: 20},
    {key: "f", count: 9},
    {key: "c", count: 8},
    {key: "g", count: 7},
    {key: "b", count: 6},
    {key: "d", count: 5}
  ];

var object_b = {value: ["a", "d", "e", "f"]};

var object_c = new Array();
//var object_d = new Array();
object_c=object_b['value']

for(var i=0 ; i<collection_a.length; i++){

	for(var j=0 ; j<object_c.length ; j++){
	if(collection_a[i]['key']==object_c[j]){
			console.log(collection_a[i]['count'])
			if(collection_a[i]['count']/3>=1 && collection_a[i]['count']/3<2){

				collection_a[i]['count']-=1
			}
	if(collection_a[i]['count']/3>=2 && collection_a[i]['count']/3<3 ){

				collection_a[i]['count']-=2
			}
	if( collection_a[i]['count']/3>=3 && collection_a[i]['count']/3<4){

				collection_a[i]['count']-=3
			}

		}

	}
}

return collection_a  
}


module.exports = create_updated_collection;
