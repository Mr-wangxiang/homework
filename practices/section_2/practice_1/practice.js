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
var num_a = 0;var num_e = 0;var num_h = 0;var num_t = 0;var num_f = 0;var num_c = 0;var num_g = 0;var num_b = 0;var num_d = 0;
for(var i=0; i< collection.length ; i++){

 if( collection[i]=='a' ){

   ++num_a;

 }
 if( collection[i]=='e' ){

   ++num_e;

   }
 if( collection[i]=='h' ){

   ++num_h;

   }
 if( collection[i]=='t' ){

   ++num_t;

   }
 if( collection[i]=='f' ){

   ++num_f;

   }

 if( collection[i]=='c' ){

   ++num_c;

   }

 if( collection[i]=='g' ){

   ++num_g;

   }

 if( collection[i]=='b' ){

   ++num_b;

   }
 if( collection[i]=='d' ){

   ++num_d;

   }


}




//var collection_c ={};

return (console.log('['+'\n'+
 '{key:"a",' +'count:' +num_a+'},\n'
 +'{key:"e",' +'count:' +num_e+'},\n'
 +'{key:"h",' +'count:' +num_h+'},\n'
 +'{key:"t",' +'count:' +num_t+'},\n'
 +'{key:"f",' +'count:' +num_f+'},\n'
 +'{key:"c",' +'count:' +num_c+'},\n'
 +'{key:"g",' +'count:' +num_g+'},\n'
 +'{key:"b",' +'count:' +num_b+'},\n'
 +'{key:"d",' +'count:' +num_d+'},'+'\n'+
']'


))

}

module.exports = count_same_elements;
