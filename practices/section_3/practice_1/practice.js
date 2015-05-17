function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_a = [
   {key: "a", count: 2},
   {key: "e", count: 2},
   {key: "h", count: 2},
   {key: "t", count: 2},
   {key: "f", count: 2},
   {key: "c", count: 2},
   {key: "g", count: 2},
   {key: "b", count: 2},
   {key: "d", count: 2}
 ];

//console.log(collection_a[1])
var num_a = 0;var num_e = 0;var num_h = 0;var num_t = 0;var num_f = 0;var num_c = 0;var num_g = 0;var num_b = 0;var num_d = 0;
var object_b = {value: ["a", "d", "e", "f"]};

var object_c = new Array();
//var object_d = new Array();
object_c=object_b['value']
for(var i=0 ; i<collection_a.length; i++){

 //object_c.push(collection_a[i]['key'])

 for(var j=0 ; j<object_c.length ; j++){

   if(collection_a[i]['key']==object_c[j]){

     collection_a[i]['count']-=1
   }
 }
}

return collection_a
}

module.exports = create_updated_collection;
