angular.module('HealthyKartApp.controllers', [])

.controller('indexCtrl', function($scope,sharedCartService) {
 
})

.controller('filterByCtrl', function($scope,sharedFilterService) {

  $scope.Categories = [
    {id: 1, name: 'Grains'}
  ];
  
  $scope.getCategory = function(cat_list){
    categoryAdded = cat_list;
  var c_string=""; // will hold the category as string
  
  for(var i=0;i<categoryAdded.length;i++){ c_string+=(categoryAdded[i].id+"||"); }
  
  c_string = c_string.substr(0, c_string.length-2);
  sharedFilterService.category=c_string;
  window.location.href = "#/tab/items";
  };
  

})
   
.controller('sortByCtrl', function($scope,sharedFilterService) {
  $scope.sort=function(sort_by){
    sharedFilterService.sort=sort_by;
    console.log('sort',sort_by);    
    window.location.href = "#/tab/items";
  };
})


.controller('itemsCtrl', function($scope,$http,sharedCartService,sharedFilterService) {

  //put cart after menu
  var cart = sharedCartService.cart;
  
  
  $scope.noMoreItemsAvailable = false; // lazy load list
  
  

        
    //loads the menu----onload event
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();  //Added Infine Scroll
  });
   
  // Loadmore() called inorder to load the list 
  $scope.loadMore = function() {
    
      str=sharedFilterService.getUrl();
      $http.get(str).success(function (response){
        $scope.menu_items = response.records;
        $scope.hasmore=response.has_more; //"has_more": 0 or number of items left
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }); 
      
      //more data can be loaded or not
      if ( $scope.hasmore == 0 ) {
        $scope.noMoreItemsAvailable = true;
      }
  };

   //add to cart function
   $scope.addToCart=function(id,image,name,price){  
     
    cart.add(id,image,name,price,1);  
   };  

   $scope.getNumber = function(num) {
    num = parseInt(num);
        return new Array(num);   
    };
})

.controller('cartCtrl', function($scope,sharedCartService,$ionicPopup,$state) {
    
    //onload event-- to set the values
    $scope.$on('$stateChangeSuccess', function () {
      $scope.cart=sharedCartService.cart;
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount;   
    });
    
    //remove function
    $scope.removeFromCart=function(c_id){
      $scope.cart.drop(c_id); 
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount; 
      
    };
    
    $scope.inc=function(c_id){
      $scope.cart.increment(c_id);
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount;
    };
    
    $scope.dec=function(c_id){
      $scope.cart.decrement(c_id);
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount;
    };
    
    $scope.checkout=function(){
      if($scope.total_amount>0){
        $state.go('checkout');
      }
      else{
        var alertPopup = $ionicPopup.alert({
          title: 'No item in your Cart',
          template: 'Please add Some Items!'
        });
      }
    };

})

.controller('checkoutCtrl', function($scope) {

});
