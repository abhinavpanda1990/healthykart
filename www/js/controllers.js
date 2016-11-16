angular.module('HealthyKartApp.controllers', [])

.controller('indexCtrl', function($scope,$rootScope,sharedCartService) {

  $rootScope.item_cart_badge = 0;
  $rootScope.invoice_id = 0;
  $rootScope.cat_list=[];
    
    
    
 
})

.controller('analyzeCtrl', function($scope,$rootScope,nutientsCalculatorService) {
})

.controller('strengthCtrl', function($scope,$rootScope,$timeout,nutientsCalculatorService) {
  //$scope.loginAlertMessage=false; 
  $scope.goBack = function() {
  window.history.back();
};
  
  //$timeout(function () { $scope.loginAlertMessage = true; }, 3000);
console.log(nutientsCalculatorService.nutri.keysSorted);
  if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_carbohydrates"){
    $scope.feedback1 = "This is quite the achievement!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_carbohydrates * 10000) / 100) +"% of calories from CARBOHYDRATES";
    $scope.feedback3 = "Your goal for a well-balanced diet is 45-65%.";     
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_protein"){
    $scope.feedback1 = "Wonderful!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_protein * 10000) / 100) +"% of calories from PROTEIN.";
    $scope.feedback3 = "Your goal for a well-balanced diet is 10-35%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_fat"){
    $scope.feedback1 = "Wonderful! You've kept your kart balanced.";
    $scope.feedback2 = "It contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_fat * 10000) / 100) +"% of calories from FAT.";
    $scope.feedback3 = "Your goal for a well-balanced diet is 20-35%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_trans_fat"){
    $scope.feedback1 = "You're on your way to a healthier heart! ";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_trans_fat * 10000) / 100) +"% of calories from TRANS FAT";
    $scope.feedback3 = "Your goal for a heart healthy diet is 0%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_saturated_fat"){
    $scope.feedback1 = "Keep that heart healthy!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_saturated_fat * 10000) / 100) +"% of calories from SATURATED FAT.";
    $scope.feedback3 = "Your goal for a heart healthy diet is less than  10%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_ufa_sfa"){
    $scope.feedback1 = "You're on your way to a healthier heart.";
    $scope.feedback2 = "Your UNSATURATED FATTY ACID to SATURATED FATTY ACID Ratio is "+ (Math.round(nutientsCalculatorService.nutri.ufa_sfa_ratio * 100) / 100) +".";
    $scope.feedback3 = "Let's keep this great than 1.";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_sodium"){
    $scope.feedback1 = "Now this is impressive.";
    $scope.feedback2 = "Your kart only contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_sodium * 10000) / 100) +"% of the upper limit for SODIUM intake";
    $scope.feedback3 = "Let's keep this under 100%";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_potassium"){
    $scope.feedback1 = "You're taking good care of your heart.";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_potassium * 10000) / 100) +"% of your goal POTASSIUM.";
    $scope.feedback3 = "Let's try to keep this at least 100%. ";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_fiber"){
    $scope.feedback1 = "You've made some very healthy choices. Consuming fiber is good for digestive, heart, and overall health.";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_fiber * 10000) / 100) +"g of fiber per serving!";
    $scope.feedback3 = "Keeping aiming for 25g of fiber per day!";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_iron"){
    $scope.feedback1 = "Iron is so important for many processes throughout your body.";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_iron * 10000) / 100) +"% of your daily value of IRON with this kart!";
    $scope.feedback3 = "Let's aim to reach 100% (18mg per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_vitaminD"){
    $scope.feedback1 = "Now this is what we call a success.";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_vitaminD * 10000) / 100) +"% of your daily value for VITAMIN D.";
    $scope.feedback3 = "Let's aim to reach 100% (400 IU per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_calcium"){
    $scope.feedback1 = "You're on your way to strong bones!";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_calcium * 10000) / 100) +"% of your goal for CALCIUM.";
    $scope.feedback3 = "Let's aim to reach 100% (1000mg per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "fresh"){
    $scope.feedback1 = "Keep the fruits and veggies coming!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.fresh_frozen_total_servings * 100) / 100) +" servings of fresh or frozen fruits and vegetables.";
    $scope.feedback3 = "Let's aim for 9-10 servings each day!";
  }else if(nutientsCalculatorService.nutri.keysSorted[13] == "comparision_added_sugar"){
    $scope.feedback1 = "Wow! Keep it up.";
    $scope.feedback2 = "Your kart only contains " + (Math.round(nutientsCalculatorService.nutri.per_cd_added_sugar * 10000) / 100) +"% of calories from ADDED SUGAR.";
    $scope.feedback3 = "We're aiming to keep this less than 10%";
  }


})


.controller('strength1Ctrl', function($scope,$rootScope,$timeout,nutientsCalculatorService) {
  $scope.goBack = function() {
  window.history.back();
};
  
  if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_carbohydrates"){
    $scope.feedback1 = "This is quite the achievement!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_carbohydrates * 10000) / 100) +"% of calories from CARBOHYDRATES";
    $scope.feedback3 = "Your goal for a well-balanced diet is 45-65%.";     
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_protein"){
    $scope.feedback1 = "Wonderful!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_protein * 10000) / 100) +"% of calories from PROTEIN.";
    $scope.feedback3 = "Your goal for a well-balanced diet is 10-35%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_fat"){
    $scope.feedback1 = "Wonderful! You've kept your kart balanced.";
    $scope.feedback2 = "It contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_fat * 10000) / 100) +"% of calories from FAT.";
    $scope.feedback3 = "Your goal for a well-balanced diet is 20-35%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_trans_fat"){
    $scope.feedback1 = "You're on your way to a healthier heart! ";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_trans_fat * 10000) / 100) +"% of calories from TRANS FAT";
    $scope.feedback3 = "Your goal for a heart healthy diet is 0%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_saturated_fat"){
    $scope.feedback1 = "Keep that heart healthy!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_saturated_fat * 10000) / 100) +"% of calories from SATURATED FAT.";
    $scope.feedback3 = "Your goal for a heart healthy diet is less than  10%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_ufa_sfa"){
    $scope.feedback1 = "You're on your way to a healthier heart.";
    $scope.feedback2 = "Your UNSATURATED FATTY ACID to SATURATED FATTY ACID Ratio is "+ (Math.round(nutientsCalculatorService.nutri.ufa_sfa_ratio * 100) / 100) +".";
    $scope.feedback3 = "Let's keep this great than 1.";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_sodium"){
    $scope.feedback1 = "Now this is impressive.";
    $scope.feedback2 = "Your kart only contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_sodium * 10000) / 100) +"% of the upper limit for SODIUM intake";
    $scope.feedback3 = "Let's keep this under 100%";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_potassium"){
    $scope.feedback1 = "You're taking good care of your heart.";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_potassium * 10000) / 100) +"% of your goal POTASSIUM.";
    $scope.feedback3 = "Let's try to keep this at least 100%. ";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_fiber"){
    $scope.feedback1 = "You've made some very healthy choices. Consuming fiber is good for digestive, heart, and overall health.";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_fiber * 10000) / 100) +"g of fiber per serving!";
    $scope.feedback3 = "Keeping aiming for 25g of fiber per day!";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_iron"){
    $scope.feedback1 = "Iron is so important for many processes throughout your body.";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_iron * 10000) / 100) +"% of your daily value of IRON with this kart!";
    $scope.feedback3 = "Let's aim to reach 100% (18mg per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_vitaminD"){
    $scope.feedback1 = "Now this is what we call a success.";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_vitaminD * 10000) / 100) +"% of your daily value for VITAMIN D.";
    $scope.feedback3 = "Let's aim to reach 100% (400 IU per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_calcium"){
    $scope.feedback1 = "You're on your way to strong bones!";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_calcium * 10000) / 100) +"% of your goal for CALCIUM.";
    $scope.feedback3 = "Let's aim to reach 100% (1000mg per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "fresh"){
    $scope.feedback1 = "Keep the fruits and veggies coming!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.fresh_frozen_total_servings * 100) / 100) +" servings of fresh or frozen fruits and vegetables.";
    $scope.feedback3 = "Let's aim for 9-10 servings each day!";
  }else if(nutientsCalculatorService.nutri.keysSorted[12] == "comparision_added_sugar"){
    $scope.feedback1 = "Wow! Keep it up.";
    $scope.feedback2 = "Your kart only contains " + (Math.round(nutientsCalculatorService.nutri.per_cd_added_sugar * 10000) / 100) +"% of calories from ADDED SUGAR.";
    $scope.feedback3 = "We're aiming to keep this less than 10%";
  }


})

.controller('strength2Ctrl', function($scope,$rootScope,$timeout,nutientsCalculatorService) {
  $scope.goBack = function() {
  window.history.back();
};
  
  if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_carbohydrates"){
    $scope.feedback1 = "This is quite the achievement!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_carbohydrates * 10000) / 100) +"% of calories from CARBOHYDRATES";
    $scope.feedback3 = "Your goal for a well-balanced diet is 45-65%.";     
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_protein"){
    $scope.feedback1 = "Wonderful!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_protein * 10000) / 100) +"% of calories from PROTEIN.";
    $scope.feedback3 = "Your goal for a well-balanced diet is 10-35%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_fat"){
    $scope.feedback1 = "Wonderful! You've kept your kart balanced.";
    $scope.feedback2 = "It contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_fat * 10000) / 100) +"% of calories from FAT.";
    $scope.feedback3 = "Your goal for a well-balanced diet is 20-35%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_trans_fat"){
    $scope.feedback1 = "You're on your way to a healthier heart! ";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_trans_fat * 10000) / 100) +"% of calories from TRANS FAT";
    $scope.feedback3 = "Your goal for a heart healthy diet is 0%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_saturated_fat"){
    $scope.feedback1 = "Keep that heart healthy!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_saturated_fat * 10000) / 100) +"% of calories from SATURATED FAT.";
    $scope.feedback3 = "Your goal for a heart healthy diet is less than  10%.";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_ufa_sfa"){
    $scope.feedback1 = "You're on your way to a healthier heart.";
    $scope.feedback2 = "Your UNSATURATED FATTY ACID to SATURATED FATTY ACID Ratio is "+ (Math.round(nutientsCalculatorService.nutri.ufa_sfa_ratio * 100) / 100) +".";
    $scope.feedback3 = "Let's keep this great than 1.";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_sodium"){
    $scope.feedback1 = "Now this is impressive.";
    $scope.feedback2 = "Your kart only contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_sodium * 10000) / 100) +"% of the upper limit for SODIUM intake";
    $scope.feedback3 = "Let's keep this under 100%";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_potassium"){
    $scope.feedback1 = "You're taking good care of your heart.";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_potassium * 10000) / 100) +"% of your goal POTASSIUM.";
    $scope.feedback3 = "Let's try to keep this at least 100%. ";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_fiber"){
    $scope.feedback1 = "You've made some very healthy choices. Consuming fiber is good for digestive, heart, and overall health.";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_fiber * 10000) / 100) +"g of fiber per serving!";
    $scope.feedback3 = "Keeping aiming for 25g of fiber per day!";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_iron"){
    $scope.feedback1 = "Iron is so important for many processes throughout your body.";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_iron * 10000) / 100) +"% of your daily value of IRON with this kart!";
    $scope.feedback3 = "Let's aim to reach 100% (18mg per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_vitaminD"){
    $scope.feedback1 = "Now this is what we call a success.";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_vitaminD * 10000) / 100) +"% of your daily value for VITAMIN D.";
    $scope.feedback3 = "Let's aim to reach 100% (400 IU per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_calcium"){
    $scope.feedback1 = "You're on your way to strong bones!";
    $scope.feedback2 = "You've met "+ (Math.round(nutientsCalculatorService.nutri.per_dv_calcium * 10000) / 100) +"% of your goal for CALCIUM.";
    $scope.feedback3 = "Let's aim to reach 100% (1000mg per day).";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "fresh"){
    $scope.feedback1 = "Keep the fruits and veggies coming!";
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.fresh_frozen_total_servings * 100) / 100) +" servings of fresh or frozen fruits and vegetables.";
    $scope.feedback3 = "Let's aim for 9-10 servings each day!";
  }else if(nutientsCalculatorService.nutri.keysSorted[11] == "comparision_added_sugar"){
    $scope.feedback1 = "Wow! Keep it up.";
    $scope.feedback2 = "Your kart only contains " + (Math.round(nutientsCalculatorService.nutri.per_cd_added_sugar * 10000) / 100) +"% of calories from ADDED SUGAR.";
    $scope.feedback3 = "We're aiming to keep this less than 10%";
  }


})

.controller('weaknessCtrl', function($scope,$rootScope,$timeout,nutientsCalculatorService) {
   //$scope.loginAlertMessage=false;
  $scope.goBack = function() {
  window.history.back();
};
  //$timeout(function () { $scope.loginAlertMessage = true; }, 3000);
  if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_carbohydrates"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_carbohydrates * 10000) / 100) +"% of calories from CARBOHYDRATES";
    $scope.feedback3 = "Our goal is 45-65%. Learn new ways to balance the carbohydrates in your kart!";     
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_protein"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_protein * 10000) / 100) +"% of calories from PROTEIN.";
    $scope.feedback3 = "Our goal is 10-35%. Learn new ways to balance the protein in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_fat"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_fat * 10000) / 100) +"% of calories from FAT.";
    $scope.feedback3 = "Our goal is 20-35%. Learn new ways to balance the fat in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_trans_fat"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_trans_fat * 10000) / 100) +"% of calories from TRANS FAT";
    $scope.feedback3 = "Our goal is 0%. Learn how to reduce the trans fat in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_saturated_fat"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_saturated_fat * 10000) / 100) +"% of calories from SATURATED FAT.";
    $scope.feedback3 = "Our goal is less than 10%. Learn how to reduce the saturated fat in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_ufa_sfa"){
    $scope.feedback2 = "Your kart contains an UNSATURATED FATTY ACID to SATURATED FATTY ACID Ratio of "+ (Math.round(nutientsCalculatorService.nutri.ufa_sfa_ratio * 100) / 100) +".";
    $scope.feedback3 = "Our goal is to keep this ratio greater than 1. We do this by increasing the amount of unsaturated fatty acid in your diet. Learn how!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_sodium"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_sodium * 10000) / 100) +"% of the daily SODIUM limit.";
    $scope.feedback3 = "Let's aim to keep your sodium intake less than 100% (2300mg) per day. Learn new ways to reduce sodium in your kart and keep your heart healthy!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_potassium"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_potassium * 10000) / 100) +"% of your daily POTASSIUM goal.";
    $scope.feedback3 = "Let's aim to reach 100% (4700mg per day). Learn new ways to add more potassium to your kart and keep your bones strong!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_fiber"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_fiber * 10000) / 100) +"g of fiber per serving!";
    $scope.feedback3 = "Let's aim to reach 100% (25g per day). Learn new ways to add more fiber to your kart.";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_iron"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_iron * 10000) / 100) +"% of your daily IRON goal.";
    $scope.feedback3 = "Let's aim to reach 100% (18mg per day). Learn new ways to add more iron to your kart.";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_vitaminD"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_vitaminD * 10000) / 100) +"% of your daily VITAMIN goal.";
    $scope.feedback3 = "Let's aim to reach 100% (400 IU per day). Learn new ways to add more vitamin D to your kart and keep your bones strong!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_calcium"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_calcium * 10000) / 100) +"% of your daily CALCIUM goal.";
    $scope.feedback3 = "Let's aim to reach 100% (1000mg per day). Discover ways to add more calcium to your kart and keep your bones strong!";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "fresh"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.fresh_frozen_total_servings * 100) / 100) +" servings of fresh or frozen fruits and vegetables.";
    $scope.feedback3 = "Let's aim for 7-10 servings per day. Learn new ways to add more fruits and vegetables to your kart.";
  }else if(nutientsCalculatorService.nutri.keysSorted[0] == "comparision_added_sugar"){
    $scope.feedback2 = "Your kart only contains " + (Math.round(nutientsCalculatorService.nutri.per_cd_added_sugar * 10000) / 100) +"% of calories from ADDED SUGAR.";
    $scope.feedback3 = "Our goal is less than 10%. Learn new ways to reduce added sugar in your kart!";
  }


})

.controller('weakness1Ctrl', function($scope,$rootScope,$timeout,nutientsCalculatorService) {
  $scope.goBack = function() {
  window.history.back();
};
 
  if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_carbohydrates"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_carbohydrates * 10000) / 100) +"% of calories from CARBOHYDRATES";
    $scope.feedback3 = "Our goal is 45-65%. Learn new ways to balance the carbohydrates in your kart!";     
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_protein"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_protein * 10000) / 100) +"% of calories from PROTEIN.";
    $scope.feedback3 = "Our goal is 10-35%. Learn new ways to balance the protein in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_fat"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_fat * 10000) / 100) +"% of calories from FAT.";
    $scope.feedback3 = "Our goal is 20-35%. Learn new ways to balance the fat in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_trans_fat"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_trans_fat * 10000) / 100) +"% of calories from TRANS FAT";
    $scope.feedback3 = "Our goal is 0%. Learn how to reduce the trans fat in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_saturated_fat"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_cd_saturated_fat * 10000) / 100) +"% of calories from SATURATED FAT.";
    $scope.feedback3 = "Our goal is less than 10%. Learn how to reduce the saturated fat in your kart!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_ufa_sfa"){
    $scope.feedback2 = "Your kart contains an UNSATURATED FATTY ACID to SATURATED FATTY ACID Ratio of "+ (Math.round(nutientsCalculatorService.nutri.ufa_sfa_ratio * 100) / 100) +".";
    $scope.feedback3 = "Our goal is to keep this ratio greater than 1. We do this by increasing the amount of unsaturated fatty acid in your diet. Learn how!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_sodium"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_sodium * 10000) / 100) +"% of the daily SODIUM limit.";
    $scope.feedback3 = "Let's aim to keep your sodium intake less than 100% (2300mg) per day. Learn new ways to reduce sodium in your kart and keep your heart healthy!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_potassium"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_potassium * 10000) / 100) +"% of your daily POTASSIUM goal.";
    $scope.feedback3 = "Let's aim to reach 100% (4700mg per day). Learn new ways to add more potassium to your kart and keep your bones strong!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_fiber"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_fiber * 10000) / 100) +"g of fiber per serving!";
    $scope.feedback3 = "Let's aim to reach 100% (25g per day). Learn new ways to add more fiber to your kart.";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_iron"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_iron * 10000) / 100) +"% of your daily IRON goal.";
    $scope.feedback3 = "Let's aim to reach 100% (18mg per day). Learn new ways to add more iron to your kart.";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_vitaminD"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_vitaminD * 10000) / 100) +"% of your daily VITAMIN goal.";
    $scope.feedback3 = "Let's aim to reach 100% (400 IU per day). Learn new ways to add more vitamin D to your kart and keep your bones strong!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_calcium"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.per_dv_calcium * 10000) / 100) +"% of your daily CALCIUM goal.";
    $scope.feedback3 = "Let's aim to reach 100% (1000mg per day). Discover ways to add more calcium to your kart and keep your bones strong!";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "fresh"){
    $scope.feedback2 = "Your kart contains "+ (Math.round(nutientsCalculatorService.nutri.fresh_frozen_total_servings * 100) / 100) +" servings of fresh or frozen fruits and vegetables.";
    $scope.feedback3 = "Let's aim for 7-10 servings per day. Learn new ways to add more fruits and vegetables to your kart.";
  }else if(nutientsCalculatorService.nutri.keysSorted[1] == "comparision_added_sugar"){
    $scope.feedback2 = "Your kart only contains " + (Math.round(nutientsCalculatorService.nutri.per_cd_added_sugar * 10000) / 100) +"% of calories from ADDED SUGAR.";
    $scope.feedback3 = "Our goal is less than 10%. Learn new ways to reduce added sugar in your kart!";
  }


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

    
      $rootScope.item_cart_badge=sharedCartService.total_items; ;
    }

   };  

   $scope.getNumber = function(num) {
    num = parseInt(num);
        return new Array(num);   
    };
})

.controller('cartCtrl', function($state, $scope,$rootScope,invoiceService,sharedCartService,$ionicPopup,$http) {
    
    //onload event-- to set the values
    $scope.$on('$stateChangeSuccess', function () {
      $scope.cart=sharedCartService.cart;
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount;
      $rootScope.item_cart_badge=sharedCartService.total_items;   
    });
    
    //remove function
    $scope.removeFromCart=function(c_id){
      $scope.cart.drop(c_id); 
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount; 
      $rootScope.item_cart_badge=sharedCartService.total_items;
      
    };
    
    $scope.inc=function(c_id){
      $scope.cart.increment(c_id);
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount;
      $rootScope.item_cart_badge=sharedCartService.total_items;
    };
    
    $scope.dec=function(c_id){
      $scope.cart.decrement(c_id);
      $scope.total_qty=sharedCartService.total_qty;
      $scope.total_amount=sharedCartService.total_amount;
      $rootScope.item_cart_badge=sharedCartService.total_items;
    };
    
    $scope.checkout=function(){
      if($scope.total_amount>0){
        //console.log("hgjhg"+$scope.cart);
        var param = {data : $scope.cart, total_amount : $scope.total_amount, total_qty : $scope.total_qty}
        $http({
                  method: 'POST',
                  url: 'http://www.healthykart.16mb.com/invoice.php',
                  data: param 
                  
              }).success(function (response){
                $rootScope.invoice_id  = response;
                $rootScope.cat_list = [];
                $rootScope.cat_list.length = 0;
                $rootScope.cat_list.splice(0, $rootScope.cat_list.length);
                $rootScope.cat_list= $scope.cart;
               
                console.log(response);
                console.log(param);
                $state.transitionTo('checkout', null, {'reload':true});
                
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
$scope.invoice_id = $rootScope.invoice_id;
var nutrient = nutientsCalculatorService.nutri;
$scope.invoiceItems = [];
$scope.invoiceItems.length = 0;
$scope.invoiceItems.splice(0, $scope.invoiceItems.length);
$scope.invoiceItems = $rootScope.cat_list;
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
