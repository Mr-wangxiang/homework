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
    "d-5"
  ];
var num_a = 0;var num_e = 0;var num_h = 0;var num_t = 0;var num_f = 0;var num_c = 0;var num_g = 0;var num_b = 0;var num_d = 0;

var collection_a =[
      {key: "a", count: 0},
      {key: "e", count: 0},
      {key: "h", count: 0},
      {key: "t", count: 0},
      {key: "f", count: 0},
      {key: "c", count: 0},
      {key: "g", count: 0},
      {key: "b", count: 0},
      {key: "d", count: 0}];
//console.log(collection_a)
//collection_c.key = "a"
//collection_c.count = num_a
//collection_a.push(collection_c)
//collection_c.key = "b"
//collection_c.count = num_b
//collection_a.push(collection_c)
//console.log(collection_c)

//console.log(collection_a)
for(var i=0; i< collection.length ; i++){

	if( collection[i]=='a' ){

		++num_a;
	collection_a[0].count=num_a

	}

	if( collection[i]=='e' ){


		++num_e;
	collection_a[1].count=num_e

		}

	if( collection[i]=='h' ){
		++num_h;
	collection_a[2].count=num_h
		}

	if( collection[i]=='t' ){


		++num_t;
	collection_a[3].count=num_t

		}

	if( collection[i]=='f' ){


		++num_f;
	collection_a[4].count=num_f

		}


	if( collection[i]=='c' ){


		++num_c;
	collection_a[5].count=num_c

		}


	if( collection[i]=='g' ){


		++num_g;
	collection_a[6].count=num_g

		}

	if( collection[i]=='b' ){


		++num_b;
	collection_a[7].count=num_b

		}


	if( collection[i]=='d-5' ){


		num_d+=5;
	collection_a[8].count=num_d

		}



}

return collection_a
}

module.exports = count_same_elements;
