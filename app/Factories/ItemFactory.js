app.factory("itemStorage", function($q, $http, firebaseURL, omdbURL){

  var getItemList = function(){
      let items = [];
      return $q(function(resolve, reject){
        $http.get(`${omdbURL}?s=Star&y=&r=json`)
          .success(function(itemObject){
            console.log("itemObject", itemObject);
            var itemCollection = itemObject;
            // var itemCollection = itemObject.items;
            Object.keys(itemCollection).forEach(function(key){
              itemCollection[key].id=key;
              items.push(itemCollection[key]);
            })
            console.log("items", items);
            resolve(items);
          }, function(error){
            reject(error);
      })
    })};

  return {getItemList:getItemList}
})