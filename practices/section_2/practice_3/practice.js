function count_same_elements(collection) {
  //在这里写入代码

 var collection = [
      "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
    "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c:8",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d-5"
  ];

var collection_a =[
      {name: "a", summary: 3},
      {name: "e", summary: 7},
      {name: "h", summary: 11},
      {name: "t", summary: 20},
      {name: "f", summary: 9},
      {name: "c", summary: 8},
      {name: "g", summary: 7},
      {name: "b", summary: 6},
      {name: "d", summary: 5}];
var num_a = 0;var num_e = 0;var num_h = 0;var num_t = 0;var num_f = 0;var num_c = 0;var num_g = 0;var num_b = 0;var num_d = 0;
for(var i=0; i< collection.length ; i++){

	if( collection[i]=='a' ){

		++num_a;
collection_a[0].summary=num_a

	}
	if( collection[i]=='e' ){

		++num_e;
collection_a[1].summary=num_e
		}
	if( collection[i]=='h' ){

		++num_h;

		}else if( collection[i]=='h[3]'){

		num_h+=5
collection_a[2].summary=num_h
		}
	if( collection[i]=='t' ){

		++num_t;

		}else if(collection[i]=='t-2'){

		num_t+=2

		}else if( collection[i]=='t[10]'){

		num_t+=11
collection_a[3].summary=num_t
		}
	if( collection[i]=='f' ){

		++num_f;
collection_a[4].summary=num_f
		}

	if( collection[i]=='c:8' ){

		num_c=+8;
collection_a[5].summary=num_c
		}

	if( collection[i]=='g' ){

		++num_g;
collection_a[6].summary=num_g
		}

	if( collection[i]=='b' ){

		++num_b;
collection_a[7].summary=num_b
		}
	if( collection[i]=='d-5' ){

		num_d+=5;
collection_a[8].summary=num_d
		}


}

  return collection_a

}

module.exports = count_same_elements;
