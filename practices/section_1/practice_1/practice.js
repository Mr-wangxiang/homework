function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = new Array();
  var k=0;
  for(var i=0;i<collection_a.length;i++){
	for(var j=0;j<collection_b.length;j++){

  		if(collection_a[i]==collection_b[j]){

  			result[k]=collection_a[i];
  			++k;
  		}

}
}
return(console.log(result))
}
var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var collection_b = ["a", "d", "e", "f"];
module.exports = collect_same_elements;
