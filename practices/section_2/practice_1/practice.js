function count_same_elements(collection) {
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
      "d", "d", "d", "d", "d"
    ];


 var array = [];

  for(var i = 0; i < collection.length; i++){
 	var exist = false;  // 定义标志：是否找到
	    for(var j = 0; j < array.length; j++){
		if(array[j].key == collection[i]){  // 判断是否找到
		  array[j].count ++;  // 找到count++
		  exist = true; // 标志为找到
		}
	    }
	    if(!exist){   // 找不到，创建
		var temp = {};
		temp.key = collection[i];
		temp.count = 1;
		array.push(temp);
	      }
	    }
        
  return array;


}

module.exports = count_same_elements;
