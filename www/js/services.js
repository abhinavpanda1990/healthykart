angular.module('HealthyKartApp.services', [])


.factory('invoiceService', [function(){

  var cartList = [];
  var invoiceId = 0;

return {invoiceId,
cartList};
}])
/*
.service('invoiceService', function() {
  var cartList = [];
  var invoiceId = 0; 

  var addInvoiceId = function(id) {
      invoiceId = parseInt(id);
  };

  var getInvoiceId = function(){
      return invoiceId;
  };

  var addItemsCart = function(newObj) {
      cartList = angular.copy(newObj);
  };

  var getItemsCart = function(){
      return cartList;
  };

  return {
    addItemsCart: addItemsCart,
    getItemsCart: getItemsCart,
    addInvoiceId: addInvoiceId,
    getInvoiceId: getInvoiceId
  };

})*/




.factory('sharedCartService', ['$ionicPopup',function($ionicPopup){
  
  var cartObj = {};
  cartObj.cart=[];
  cartObj.total_amount=0;
  cartObj.total_qty=0;
  cartObj.total_items=0;
  
  cartObj.cart.add=function(id,image,name,price,qty){
      
    if( cartObj.cart.find(id)!=-1 ){
      var alertPopup = $ionicPopup.alert({
                title: 'Product Already Added',
                template: 'Increase the Quantity from the Cart'
            });
      //cartObj.cart[cartObj.cart.find(id)].cart_item_qty+=1;
      //cartObj.total_qty+= 1;  
      //cartObj.total_amount+= parseFloat(cartObj.cart[cartObj.cart.find(id)].cart_item_price);
      return 0;
    }
    else{
      
        cartObj.cart.push( { "cart_item_id": id , "cart_item_image": image , "cart_item_name": name , "cart_item_price": price , "cart_item_qty": parseInt(qty) } );
     
        cartObj.total_qty+=parseInt(qty); 
      cartObj.total_amount+=parseFloat(price)*parseFloat(qty);  
      cartObj.total_items++;
      return 1;
    }
  };
  
  cartObj.cart.find=function(id){ 
    var result=-1;
    for( var i = 0, len = cartObj.cart.length; i < len; i++ ) {
      if( cartObj.cart[i].cart_item_id === id ) {
        result = i;
        break;
      }
    }
    return result;
  };
  
  cartObj.cart.drop=function(id){
   var temp=cartObj.cart[cartObj.cart.find(id)];
   cartObj.total_qty-= parseInt(temp.cart_item_qty);
   cartObj.total_amount-=( parseFloat(temp.cart_item_qty) * parseFloat(temp.cart_item_price) );
   cartObj.cart.splice(cartObj.cart.find(id), 1);
   cartObj.total_items--;

  };
  
  cartObj.cart.increment=function(id){
     cartObj.cart[cartObj.cart.find(id)].cart_item_qty+=1;
     cartObj.total_qty+= 1;
     cartObj.total_amount+=( parseFloat( cartObj.cart[cartObj.cart.find(id)].cart_item_price) );  
  };


  
  cartObj.cart.decrement=function(id){
    
     cartObj.total_qty-= 1;
     cartObj.total_amount-= parseFloat( cartObj.cart[cartObj.cart.find(id)].cart_item_price) ;
     

     if(cartObj.cart[cartObj.cart.find(id)].cart_item_qty == 1){  // if the cart item was only 1 in qty
      cartObj.cart.splice( cartObj.cart.find(id) , 1);
      cartObj.total_items--;  //edited
     }else{
      cartObj.cart[cartObj.cart.find(id)].cart_item_qty-=1;
     }
  
  };
  
  return cartObj;
}])


.factory('sharedFilterService', [function(){

  var obj = {};
    obj.str = "http://www.healthykart.16mb.com/food_menu.php?till=";
  obj.sort = "";
  obj.search = "";
  obj.category = "";
  obj.till=0;
  
  
  
  obj.getUrl=function(){
    
    obj.till=obj.till + 5;
    obj.str="http://www.healthykart.16mb.com/food_menu.php?till="+obj.till; // pass the value to url
    
    if(obj.sort!="" && obj.category!=""){
      obj.str= obj.str+"&category="+obj.category+"&sort="+obj.sort;
    }
    else if(obj.category!="" ){
      obj.str= obj.str+"&category="+obj.category;
    }
    else if(obj.sort!=""){  
      obj.str= obj.str+"&sort="+obj.sort;
    }
   // console.log("URL",obj.str);
    return obj.str;
  };
  return obj;
}])




.service('nutientsCalculatorService', function(){
 
  var nutri = {};
  nutri.keysSorted = [];
    nutri.total_calories = 0.0000000000000000000000;
    nutri.total_carbohydrates = 0.0000000000000000000000;
    nutri.total_protein = 0.0000000000000000000000;
    nutri.total_fat = 0.0000000000000000000000;
    nutri.total_trans_fat = 0.0000000000000000000000;
    nutri.total_saturated_fat = 0.0000000000000000000000;
    nutri.total_pufa = 0.0000000000000000000000;
    nutri.total_mufa = 0.0000000000000000000000;
    nutri.total_sodium = 0.0000000000000000000000;
    nutri.total_potassium = 0.0000000000000000000000;
    nutri.total_fiber = 0.0000000000000000000000;
    nutri.total_sugar = 0.0000000000000000000000;
    nutri.total_iron = 0.0000000000000000000000;
    nutri.total_vitaminD = 0.0000000000000000000000;
    nutri.total_calcium = 0.0000000000000000000000;
    nutri.total_added_sugar = 0.0000000000000000000000;


    //% dv of kcal in cart
    nutri.dv_calories = 2000.00;
    nutri.dv_carbohydrates = 300.00;
    nutri.dv_protein = 50.00;
    nutri.dv_fat = 65.00;
    nutri.dv_saturated_fat = 20.00;
    nutri.dv_sodium = 2300.00;
    nutri.dv_potassium = 4700.00;
    nutri.dv_fiber = 25.00;
    nutri.dv_iron = 100.00;
    nutri.dv_vitaminD = 100.00;
    nutri.dv_calcium = 100.00;

    nutri.per_dv_calories = 0.0000000000000000000000;
    nutri.per_dv_carbohydrates = 0.0000000000000000000000;
    nutri.per_dv_protein = 0.0000000000000000000000;
    nutri.per_dv_fat = 0.0000000000000000000000;
    nutri.per_dv_saturated_fat = 0.0000000000000000000000;
    nutri.per_dv_sodium = 0.0000000000000000000000;
    nutri.per_dv_potassium = 0.0000000000000000000000;
    nutri.per_dv_fiber = 0.0000000000000000000000;
    nutri.per_dv_iron = 0.0000000000000000000000;
    nutri.per_dv_vitaminD = 0.0000000000000000000000;
    nutri.per_dv_calcium = 0.0000000000000000000000;

    /*% calories
    nutri.cd_carbohydrates = 4.00;
    nutri.cd_protein = 4.00;
    nutri.cd_fat = 9.00;*/

    nutri.per_cd_carbohydrates = 0.0000000000000000000000;
    nutri.per_cd_protein = 0.0000000000000000000000;
    nutri.per_cd_fat = 0.0000000000000000000000;
    nutri.per_cd_trans_fat= 0.0000000000000000000000;
    nutri.per_cd_saturated_fat = 0.0000000000000000000000;
    nutri.per_cd_pufa = 0.0000000000000000000000;
    nutri.per_cd_mufa = 0.0000000000000000000000;
    nutri.per_cd_sugar = 0.0000000000000000000000;
    nutri.per_cd_added_sugar = 0.0000000000000000000000;


    //ufa:sfa
    nutri.ufa_sfa_ratio = 0.0000000000000000000000;

    //%empty calories
    nutri.per_empty_calories = 0.0000000000000000000000;

    
    //frozen total servings purchased
    nutri.fresh_frozen_total_servings = 0.0000000000000000000000;

    //comparision 
    nutri.comparision_calories = 0.0000000000000000000000;
    nutri.comparision_carbohydrates = 0.0000000000000000000000;
    nutri.comparision_protein10 = 0.0000000000000000000000;
    nutri.comparision_protein35 = 0.0000000000000000000000;
    nutri.comparision_fat20 = 0.0000000000000000000000;
    nutri.comparision_fat35 = 0.0000000000000000000000;
    nutri.comparision_trans_fat = 0.0000000000000000000000;
    nutri.comparision_saturated_fat = 0.0000000000000000000000;
    nutri.comparision_ufa_sfa = 0.0000000000000000000000;
    nutri.comparision_sodium = 0.0000000000000000000000;
    nutri.comparision_potassium = 0.0000000000000000000000;
    nutri.comparision_fiber = 0.0000000000000000000000;
    nutri.comparision_iron = 0.0000000000000000000000;
    nutri.comparision_vitaminD = 0.0000000000000000000000;
    nutri.comparision_calcium = 0.0000000000000000000000;
    nutri.comparision_added_sugar = 0.0000000000000000000000;


    //deductions 
    nutri.deductions_carbohydrates = 0.0000000000000000000000;
    nutri.deductions_protein = 0.0000000000000000000000;
    nutri.deductions_fat35 = 0.0000000000000000000000;
    nutri.deductions_fat55 = 0.0000000000000000000000;
    nutri.deductions_trans_fat = 0.0000000000000000000000;
    nutri.deductions_saturated_fat = 0.0000000000000000000000;
    nutri.deductions_ufa_sfa = 0.0000000000000000000000;
    nutri.deductions_sodium = 0.0000000000000000000000;
    nutri.deductions_potassium = 0.0000000000000000000000;
    nutri.deductions_fiber = 0.0000000000000000000000;
    nutri.deductions_iron = 0.0000000000000000000000;
    nutri.deductions_vitaminD = 0.0000000000000000000000;
    nutri.deductions_calcium = 0.0000000000000000000000;
    nutri.deductions_added_sugar = 0.0000000000000000000000;

    //fresh/frozen score
    nutri.additions_fresh_frozen_score = 0.0000000000000000000000;

    //dummy comparision 
    var dummy = {};
    dummy.comparision_carbohydrates = 0.0000000000000000000000;
    dummy.comparision_protein = 0.0000000000000000000000;
    dummy.comparision_fat = 0.0000000000000000000000;
    dummy.comparision_trans_fat = 0.0000000000000000000000;
    dummy.comparision_saturated_fat = 0.0000000000000000000000;
    dummy.comparision_ufa_sfa = 0.0000000000000000000000;
    dummy.comparision_sodium = 0.0000000000000000000000;
    dummy.comparision_potassium = 0.0000000000000000000000;
    dummy.comparision_fiber = 0.0000000000000000000000;
    dummy.comparision_iron = 0.0000000000000000000000;
    dummy.comparision_vitaminD = 0.0000000000000000000000;
    dummy.comparision_calcium = 0.0000000000000000000000;
     dummy.fresh =  0.0000000000000000000000;
    dummy.comparision_added_sugar = 0.0000000000000000000000;

    // Final healthyKart Score
    nutri.healthykartScore = 0.0000000000000000000000;
   

     var calculateTotalNutrient=function(object){
    //total
    for( var i = 0, len = object.length; i < len; i++ ) {
       nutri.total_calories += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].calories);
       nutri.total_carbohydrates += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].carbohydrates);
       nutri.total_protein += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].protien);
       nutri.total_fat += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].fat);
       nutri.total_trans_fat += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].transFat);
       nutri.total_saturated_fat += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].saturatedFat);
       nutri.total_pufa += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].pufa);
       nutri.total_mufa += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].mufa);
       nutri.total_sodium += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].sodium);
       nutri.total_potassium += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].potassium);
       nutri.total_fiber += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].fiber);
       nutri.total_sugar += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].sugar);
       nutri.total_iron += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].iron);
       nutri.total_vitaminD += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].vitaminD);
       nutri.total_calcium += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].calcium);
       nutri.total_added_sugar += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings) * parseFloat(object[i].addedSugar);

       //fresh or frozen food calculations
       if(parseInt(object[i].category) == 4 ||  parseInt(object[i].category) == 5)
       {
        nutri.fresh_frozen_total_servings += parseFloat(object[i].itemQty) * parseFloat(object[i].nOfServings);
       }
    }
    //% dv of kcal in cart
    nutri.per_dv_calories = nutri.total_calories/nutri.dv_calories;
    nutri.per_dv_carbohydrates = nutri.total_carbohydrates/(nutri.dv_carbohydrates*nutri.per_dv_calories);
    nutri.per_dv_protein = nutri.total_protein/(nutri.dv_protein*nutri.per_dv_calories);
    nutri.per_dv_fat = nutri.total_fat/(nutri.dv_fat*nutri.per_dv_calories);
    nutri.per_dv_saturated_fat = nutri.total_saturated_fat/(nutri.dv_saturated_fat*nutri.per_dv_calories);
    nutri.per_dv_sodium = nutri.total_sodium/(nutri.dv_sodium*nutri.per_dv_calories);
    nutri.per_dv_potassium = nutri.total_potassium/(nutri.dv_potassium*nutri.per_dv_calories);
    nutri.per_dv_fiber = nutri.total_fiber/(nutri.dv_fiber*nutri.per_dv_calories);
    nutri.per_dv_iron = nutri.total_iron/(nutri.dv_iron*nutri.per_dv_calories);
    nutri.per_dv_vitaminD = nutri.total_vitaminD/(nutri.dv_vitaminD*nutri.per_dv_calories);
    nutri.per_dv_calcium = nutri.total_calcium/(nutri.dv_calcium*nutri.per_dv_calories);

   
    //% calories
    nutri.per_cd_carbohydrates = (nutri.total_carbohydrates * 4.00)/nutri.total_calories;
    nutri.per_cd_protein = (nutri.total_protein * 4.00)/nutri.total_calories;
    nutri.per_cd_fat = (nutri.total_fat * 9.00)/nutri.total_calories;
    nutri.per_cd_trans_fat = (nutri.total_trans_fat * 9.00)/nutri.total_calories;
    nutri.per_cd_saturated_fat = (nutri.total_saturated_fat * 9.00)/nutri.total_calories;
    nutri.per_cd_pufa = (nutri.total_pufa * 9.00)/nutri.total_calories;
    nutri.per_cd_mufa = (nutri.total_mufa * 9.00)/nutri.total_calories;
    nutri.per_cd_sugar = (nutri.total_sugar * 4.00)/nutri.total_calories;
    nutri.per_cd_added_sugar = (nutri.total_added_sugar * 4.00)/nutri.total_calories;
    

    //ufa:sfa
    nutri.ufa_sfa_ratio = (nutri.total_pufa + nutri.total_mufa)/nutri.total_saturated_fat;

    // % empty Calories
    nutri.per_empty_calories = (nutri.total_added_sugar * 4.00)/ (nutri.total_calories);

    //comparision
    nutri.comparision_calories = nutri.total_calories - 2000;
    nutri.comparision_carbohydrates = nutri.per_cd_carbohydrates - 0.60;
    nutri.comparision_protein10 = nutri.per_cd_protein - 0.10;
    nutri.comparision_protein35 = nutri.per_cd_protein - 0.35;
    nutri.comparision_fat20 = nutri.per_cd_fat - 0.20;
    nutri.comparision_fat35 = nutri.per_cd_fat - 0.35;
    nutri.comparision_trans_fat = nutri.per_cd_trans_fat - 0.00;
    nutri.comparision_saturated_fat = nutri.per_cd_saturated_fat - 0.10;
    nutri.comparision_ufa_sfa = nutri.ufa_sfa_ratio - 1.00;
    nutri.comparision_sodium = nutri.per_dv_sodium - 1.00;
    nutri.comparision_potassium = nutri.per_dv_potassium - 1.00;
    nutri.comparision_fiber = nutri.per_dv_fiber - 1.00;
    nutri.comparision_vitaminD = nutri.per_dv_vitaminD - 1.00;
    nutri.comparision_iron = nutri.per_dv_iron - 1.00;
    nutri.comparision_calcium = nutri.per_dv_calcium - 1.00;
    nutri.comparision_added_sugar = nutri.per_cd_added_sugar - 0.10;

    //check negative numbers for all nutrients as well as deductions
    nutri.deductions_carbohydrates = (((nutri.per_cd_carbohydrates - 0.60) * (0.769/10)))*100;
    nutri.deductions_protein = (nutri.per_cd_protein - 0.35) * (0.769/35);
    nutri.deductions_fat35 = (nutri.per_cd_fat - 0.35) * (0.769/10);
    nutri.deductions_fat55 = (nutri.per_cd_fat - 0.55) * (0.769/10);
    nutri.deductions_trans_fat = (nutri.comparision_trans_fat * 100) * (0.77/5);
    nutri.deductions_saturated_fat = (nutri.comparision_saturated_fat * 100) * (0.769/5);
    nutri.deductions_ufa_sfa = (1 - nutri.ufa_sfa_ratio) * 0.769;
    nutri.deductions_sodium = (nutri.comparision_sodium * 100.00) * (0.77/35);
    nutri.deductions_potassium = (nutri.comparision_potassium * 100) * (0.769/75);
    nutri.deductions_fiber = nutri.comparision_fiber * 100 * (0.769/75);
    nutri.deductions_iron = nutri.comparision_iron * 100 * (0.769/75);
    nutri.deductions_vitaminD = nutri.comparision_vitaminD * 100 * (0.769/100);
    nutri.deductions_calcium = nutri.comparision_calcium * 100 * (0.769/100);
    nutri.deductions_added_sugar = nutri.comparision_added_sugar * 100 * (0.77/20);

    //fresh frozen score
    nutri.additions_fresh_frozen_score = nutri.fresh_frozen_total_servings * 0.025;

    //calculate Healthycart Score
    //carbohydrates
    if(nutri.comparision_carbohydrates > 0)
    {
      if(nutri.deductions_carbohydrates < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_carbohydrates);
        dummy.comparision_carbohydrates = 0.769 - Math.abs(nutri.deductions_carbohydrates);
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_carbohydrates;
        dummy.comparision_carbohydrates = 0.769 - nutri.deductions_carbohydrates;
      }
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_carbohydrates = 0.769 - 0.0;
    }

    //protiens
    if(nutri.comparision_protein10 < 0 || nutri.comparision_protein35 > 0)
    {
      if(nutri.deductions_protein < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_protein);
        dummy.comparision_protein = .769 - Math.abs(nutri.deductions_protein);
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_protein;
        dummy.comparision_protein = .769 - nutri.deductions_protein;
      }
      
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_protein = 0.769 - 0.0;
    }


    //fat
    if(nutri.comparision_fat35 > 0)
    {
        if(nutri.ufa_sfa_ratio  > 2.00)
      {
        if(nutri.per_cd_fat > 0.55)
        {
          if(nutri.deductions_fat55 < 0){
            nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_fat55); 
            dummy.comparision_fat = 0.769 - Math.abs(nutri.deductions_fat55);
          }else{
            nutri.healthykartScore += 0.769 - nutri.deductions_fat55; 
            dummy.comparision_fat = 0.769 - nutri.deductions_fat55;
          }
           
        }
      }else
      {
        if(nutri.deductions_fat35 < 0){
          nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_fat35); 
          dummy.comparision_fat = 0.769 - Math.abs(nutri.deductions_fat35); 
        }else{
          nutri.healthykartScore += 0.769 - nutri.deductions_fat35; 
        dummy.comparision_fat = 0.769 - nutri.deductions_fat35; 
        }
        
      }
    }else 
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_fat = 0.769 - 0.0;
    }

    //trans Fat
    if(nutri.comparision_trans_fat > 0)
    {
      if(nutri.deductions_trans_fat < 0){
        nutri.healthykartScore += 0.77 - Math.abs(nutri.deductions_trans_fat);
        dummy.comparision_trans_fat = 0.77 - Math.abs(nutri.deductions_trans_fat);
      }else{
        nutri.healthykartScore += 0.77 - nutri.deductions_trans_fat;
        dummy.comparision_trans_fat = 0.77 - nutri.deductions_trans_fat;
      }
      
    }else
    {
      nutri.healthykartScore += 0.77 - 0.0;
      dummy.comparision_trans_fat = 0.77 - 0.0;
    }

    //saturated Fat
    if(nutri.comparision_saturated_fat > 0)
    {
      if(nutri.deductions_saturated_fat < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_saturated_fat);
        dummy.comparision_saturated_fat = 0.769 - Math.abs(nutri.deductions_saturated_fat);
      }else{
        nutri.healthykartScore += 0.769 - (nutri.deductions_saturated_fat);
        dummy.comparision_saturated_fat = 0.769 - (nutri.deductions_saturated_fat);
      }
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_saturated_fat = 0.769 - 0.0;
    }
  
    //ufa:sfa
    if(nutri.ufa_sfa_ratio < 1)
    {
      if(nutri.deductions_ufa_sfa < 0)
      {
       nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_ufa_sfa);
       dummy.comparision_ufa_sfa = 0.769 - Math.abs(nutri.deductions_ufa_sfa); 
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_ufa_sfa;
        dummy.comparision_ufa_sfa = 0.769 - nutri.deductions_ufa_sfa;
      }
      
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_ufa_sfa = 0.769 - 0.0;
    }

    //sodium
    if(nutri.comparision_sodium > 0)
    {
      if(nutri.deductions_sodium < 0){
        nutri.healthykartScore += 0.77 - Math.abs(nutri.deductions_sodium);
        dummy.comparision_sodium = 0.77 - Math.abs(nutri.deductions_sodium);
      }else{
        nutri.healthykartScore += 0.77 - nutri.deductions_sodium;
        dummy.comparision_sodium = 0.77 - nutri.deductions_sodium;
      }
      
    }else
    {
      nutri.healthykartScore += 0.77 - 0.0;
      dummy.comparision_sodium = 0.77 - 0.0;
    }

    //potassium
    if(nutri.comparision_potassium < 0)
    {
      if(nutri.deductions_potassium < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_potassium);
        dummy.comparision_potassium = 0.769 - Math.abs(nutri.deductions_potassium);
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_potassium;
      dummy.comparision_potassium = 0.769 - nutri.deductions_potassium;
      }
      
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_potassium = 0.769 - 0.0;
    }

    //fiber
    if(nutri.comparision_fiber < 0)
    {
      if(nutri.deductions_fiber < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_fiber);
        dummy.comparision_fiber = 0.769 - Math.abs(nutri.deductions_fiber);
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_fiber;
        dummy.comparision_fiber = 0.769 - nutri.deductions_fiber;
      }
      
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_fiber = 0.769 - 0.0;
    }

    //iron
    if(nutri.comparision_iron < 0)
    { 
      if(nutri.deductions_iron < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_iron);
        dummy.comparision_iron = 0.769 - Math.abs(nutri.deductions_iron);
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_iron;
        dummy.comparision_iron = 0.769 - nutri.deductions_iron;
      }
      
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_iron = 0.769 - 0.0;
    }

    //vitaminD
    if(nutri.comparision_vitaminD < 0)
    {
      if(nutri.deductions_vitaminD < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_vitaminD);
        dummy.comparision_vitaminD = 0.769 - Math.abs(nutri.deductions_vitaminD);
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_vitaminD;
        dummy.comparision_vitaminD = 0.769 - nutri.deductions_vitaminD;
      }
       
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_vitaminD = 0.769 - 0.0;
    }

    //calcium
    if(nutri.comparision_calcium < 0)
    {
      if(nutri.deductions_calcium < 0){
        nutri.healthykartScore += 0.769 - Math.abs(nutri.deductions_calcium);
        dummy.comparision_calcium = 0.769 - Math.abs(nutri.deductions_calcium);
      }else{
        nutri.healthykartScore += 0.769 - nutri.deductions_calcium;
        dummy.comparision_calcium = 0.769 - nutri.deductions_calcium;
      }
      
    }else
    {
      nutri.healthykartScore += 0.769 - 0.0;
      dummy.comparision_calcium = 0.769 - 0.0;
    }

    //added sugar
    if(nutri.comparision_added_sugar > 0)
    {
      if(nutri.deductions_added_sugar < 0){
        nutri.healthykartScore += 0.77 - Math.abs(nutri.deductions_added_sugar);
        dummy.comparision_added_sugar = 0.77 - Math.abs(nutri.deductions_added_sugar);
      }else{
        nutri.healthykartScore += 0.77 - nutri.deductions_added_sugar;
        dummy.comparision_added_sugar = 0.77 - nutri.deductions_added_sugar;
      }
      
    }else
    {
      nutri.healthykartScore += 0.77 - 0.0;
      dummy.comparision_added_sugar = 0.77 - 0.0;
    }

    //frozen/fresh present
    if(nutri.fresh_frozen_total_servings > 0)
    {
      if(nutri.healthykartScore < 9.0)
      {
        if(nutri.additions_fresh_frozen_score > 1.0)
        {
          nutri.healthykartScore += 1.0;
          dummy.fresh = 1.0;
        }else{
          nutri.healthykartScore += nutri.additions_fresh_frozen_score;
          dummy.fresh = nutri.additions_fresh_frozen_score;
        }
      }else{

        if(nutri.additions_fresh_frozen_score > 1.0){
          nutri.healthykartScore += (10 - nutri.healthykartScore);
          dummy.fresh = (10 - nutri.healthykartScore);
        }else if(nutri.additions_fresh_frozen_score > (10 - nutri.healthykartScore)){
          nutri.healthykartScore += (10 - nutri.healthykartScore);
          dummy.fresh = (10 - nutri.healthykartScore);
        }else{
          nutri.healthykartScore += nutri.additions_fresh_frozen_score;
          dummy.fresh = nutri.additions_fresh_frozen_score;
        }

      }
    }

    nutri.keysSorted = Object.keys(dummy).sort(function(a,b){return dummy[a]-dummy[b]})
    //console.log(nutri);
    //console.log(dummy); 
    
    //alert(nutri.keysSorted);
    //console.log(keysSorted);  
   return nutri.healthykartScore;
      }
    
  
  return {
    calculateTotalNutrient: calculateTotalNutrient,
    nutri: nutri
  };
});
