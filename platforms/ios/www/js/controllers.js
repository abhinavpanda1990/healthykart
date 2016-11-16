angular.module('HealthyKartApp.controllers', [])

.controller('indexCtrl', function($scope,$rootScope,sharedCartService) {

  $rootScope.item_cart_badge = 0;
     
    
    
    
 
})

.controller('analyzeCtrl', function($scope,$rootScope,nutientsCalculatorService) {

  
    
    
    
 
})

.controller('filterByCtrl', function($scope,sharedFilterService, $ionicHistory) {

    $scope.goBack = function() {
        $ionicHistory.goBack();
      };
  $scope.Categories = [
    {id: 1, name: 'Grains'},
    {id: 2, name: 'Dairy'},
    {id: 3, name: 'Meat/Fish/Poultry'},
    {id: 4, name: 'Frozen Foods'},
    {id: 5, name: 'Fresh Fruits and Vegetables'},
    {id: 6, name: 'Beverages'},
    {id: 7, name: 'Miscellaneous'},
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
   
.controller('sortByCtrl', function($scope,sharedFilterService, $ionicHistory) {
  $scope.sort=function(sort_by){
    sharedFilterService.sort=sort_by;
    console.log('sort',sort_by);    
    window.location.href = "#/tab/items";
  };

$scope.goBack = function() {
        $ionicHistory.goBack();
      };
})


.controller('itemsCtrl', function($scope,$http,$rootScope,sharedCartService,$ionicPopup,sharedFilterService) {

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
  
    $scope.addToCart=function(id,image,name,price,quantity){  
     if(quantity=="" || quantity==null){
      var alertPopup = $ionicPopup.alert({
       title: 'Oops!!',
       template: 'You forgot to Select Quantity'
     });
     }else{
    check = cart.add(id,image,name,price,quantity);

    if(check==1){
      $rootScope.item_cart_badge+=1;
    }}

   };  

   $scope.getNumber = function(num) {
    num = parseInt(num);
        return new Array(num);   
    };
})

.controller('cartCtrl', function($scope,invoiceService,sharedCartService,$ionicPopup,$state,$http) {
    
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
      $rootScope.item_cart_badge-=1;
      
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
        var param = {data : $scope.cart, total_amount : $scope.total_amount, total_qty : $scope.total_qty}
        $http({
                  method: 'POST',
                  url: 'http://www.healthykart.16mb.com/invoice.php',
                  data: param 
                  
              }).success(function (response){
                invoiceService.addInvoiceId(response);
                
                invoiceService.addItemsCart($scope.cart);
               
                console.log(response);
                console.log(param);
                $state.go('checkout');
      }).error(function(error) {
        console.log(error);
      }); 
        
      }
      else{
        var alertPopup = $ionicPopup.alert({
          title: 'No item in your Cart',
          template: 'Please add Some Items!'
        });
      }
    };

})

.controller('checkoutCtrl', function($scope,$http,$rootScope,invoiceService,sharedCartService,nutientsCalculatorService) {
$scope.invoice_id = invoiceService.getInvoiceId();
var nutrient = nutientsCalculatorService.nutri;
$scope.invoiceItems = invoiceService.getItemsCart();
 $scope.goBacktoCart = function() {
        window.location.href = "#/tab/cart";

      };
$scope.goAnalyze = function() {
        window.location.href = "#/analyze";

};
var paramt = {data : $scope.invoiceItems, invoice_id: $scope.invoice_id}
      $http({
                  method: 'POST',
                  url: 'http://www.healthykart.16mb.com/nutrients.php',
                  data: paramt 
                  
              }).success(function (response){
                
              $scope.healthykart_score = nutientsCalculatorService.calculateTotalNutrient(response);
               if($scope.healthykart_score < 3.00){
                $scope.myScore = "poor";
              }else if($scope.healthykart_score > 3.00 && $scope.healthykart_score < 7.00)
              {
                $scope.myScore = "fair";
              }else
              {
                $scope.myScore = "good";
              }
                
      }).error(function(error) {
        console.log(error);
      }); 
//console.log($scope.invoice_id);

});
