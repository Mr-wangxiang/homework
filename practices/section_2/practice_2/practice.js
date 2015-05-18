function count_same_elements(collection) {
  //在这里写入代码
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
      return sum_list;
}

module.exports = count_same_elements;
