function count_same_elements(collection) {
  //在这里写入代码
  vvar collection = [
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



var sum_list=[];
  for(var i=0;i<collection.length;i++) {
          var summary=1;
          var name=collection[i].substring(0,1);
          if(collection[i].indexOf("-")>-1) {
              summary=collection[i].substring(2);
              summary=parseInt(summary);
           }
           var exsit=false;
           for(var k=0;k<sum_list.length;k++) {
               if(sum_list[k].name==name) {
                        sum_list[k].summary=sum_list[k].summary+summary;
                        exsit=true;
               }
           }
           if(!exsit) {
                  var temp={};
                  temp.name=name;
                  temp.summary=summary;
                  sum_list.push(temp);
           }
      }
      return sum_list;
}

module.exports = count_same_elements;
