function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_a = [
    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
  ];
var collection_b = {value: ["a", "d", "e", "f"]};

var collection_c = new Array();
var collection_d = new Array();
collection_d = collection_b['value'] ;
var result = new Array();


for(var i=0; i<collection_a.length;i++){

	collection_c.push( collection_a[i]['key']);

}
//console.log(collection_c)
//console.log(collection_d)

for(var m=0;m<collection_c.length;m++){
	for(var j=0;j<collection_d.length;j++){

		if(collection_c[m]==collection_d[j]){

			result.push(collection_c[m]);

		}
}
}

return result;  

}

module.exports = collect_same_elements;
