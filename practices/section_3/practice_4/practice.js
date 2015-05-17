function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_a = [
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

  var num_a = 0;var num_e = 0;var num_h = 0;var num_t = 0;var num_f = 0;var num_c = 0;var num_g = 0;var num_b = 0;var num_d = 0;
  var object_c = new Array();
  //var object_d = new Array();
  object_c=object_b['value']

  for(var i=0; i< collection_a.length ; i++){

  	if(collection_a[i]=='a' ){

  		++num_a;

  	}
  	if( collection_a[i]=='e' ){

  		++num_e;

  		}
  	if( collection_a[i]=='h' ){

  		++num_h;

  		}
  	if( collection_a[i]=='t' ){

  		++num_t;

  		}
  	if( collection_a[i]=='f' ){

  		++num_f;

  		}

  	if(collection_a[i]=='c' ){

  		++num_c;

  		}

  	if( collection_a[i]=='g' ){

  		++num_g;

  		}

  	if( collection_a[i]=='b' ){

  		++num_b;

  		}
  	if( collection_a[i]=='d-5' ){

  		num_d=5;

  		}


  }

  var collection_c = [
      {key: "a", count: num_a},
      {key: "e", count: num_e},
      {key: "h", count: num_h},
      {key: "t", count: num_t},
      {key: "f", count: num_f},
      {key: "c", count: num_c},
      {key: "g", count: num_g},
      {key: "b", count: num_b},
      {key: "d", count: num_d}
    ];

  for(var i=0 ; i<collection_c.length; i++){

  	for(var j=0 ; j<object_c.length ; j++){
  	if(collection_c[i]['key']==object_c[j]){
  			console.log(collection_c[i]['count'])
  			if(collection_c[i]['count']/3>=1 && collection_c[i]['count']/3<2){

  				collection_c[i]['count']-=1
  			}
  	if(collection_c[i]['count']/3>=2 && collection_c[i]['count']/3<3 ){

  				collection_c[i]['count']-=2
  			}
  	if( collection_c[i]['count']/3>=3 && collection_c[i]['count']/3<4){

  				collection_c[i]['count']-=3
  			}

  		}

  	}
  }

  return collection_c
}

module.exports = create_updated_collection;
