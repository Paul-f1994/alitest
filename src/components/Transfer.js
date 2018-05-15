var datas = [
  {id: 2, name: 'declare', parent: 0},
  {id: 3, name: 'gps',parent: 0},
  {id: 4, name: 'gui',parent: 1},
  {id: 0, name: 'api', parent: null},
  {id: 1, name: 'fetch', parent: null},
  {id: 31, name: 'led',parent: 3},
  {id: 32, name: 'mips',parent: 3},
  {id: 41, name: 'dns',parent: 31},
  {id: 42, name: 'cros',parent: 31},
]


function transDate(data,id,parent){
  var result = [],temp = {};
  for(i = 0; i < data.length; i++){
    temp[data[i][id]]=data[i];
  }
  for(j=0; j<data.length; j++){
    tempVp = temp[data[j][parent]];
    if(tempVp){
      if(!tempVp["nodes"]) tempVp["nodes"] = [];
      tempVp["nodes"].push(data[j]);
    }else{
      result.push(data[j]);
    }
  }
  return result;
}

console.log(transDate(datas,"id","parent"));