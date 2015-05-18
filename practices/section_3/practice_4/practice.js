function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection = [
     "a", "a", "a",
     "e", "e", "e", "e", "e", "e", "e",
     "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
     "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
     "f", "f", "f", "f", "f", "f", "f", "f", "f",
     "c", "c", "c", "c", "c", "c", "c", "c",
     "g", "g", "g", "g", "g", "g", "g",
     "b", "b", "b", "b", "b", "b",
     "d-5"
   ];


   var object_b = {value: ["a", "d", "e", "f"]};

    var sum_list=[];
     for(var i=0;i<collection.length;i++) {
             var count=1;
             var key=collection[i].substring(0,1);
             if(collection[i].indexOf("-")>-1) {
                 count=collection[i].substring(2);
                 count=parseInt(count);
              }
              var exsit=false;
              for(var k=0;k<sum_list.length;k++) {
                  if(sum_list[k].key==key) {
                           sum_list[k].count=sum_list[k].count+count;
                           exsit=true;
                  }
              }
              if(!exsit) {
                     var temp={};
                     temp.key= key;
                     temp.count= count;
                     sum_list.push(temp);
              }
         }

 for(var i  = 0; i < object_b.value.length; i++){
       for(var j = 0; j < sum_list.length; j++){
         if(object_b.value[i] == sum_list[j].key){
           sum_list[j].count = sum_list[j].count - Math.floor( sum_list[j].count/3);
         }
       }
     }
 return sum_list;
}

module.exports = create_updated_collection;
