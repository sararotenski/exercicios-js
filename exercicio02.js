function separaParImpar(nums) {
    var pares = [];
    var impares = [];
    var i = 0, j = 0, k = 0;
  
    while (i < nums.length) {
      if (nums[i] % 2 === 0) {
        pares[j] = nums[i];
        j++;
      } else {
        impares[k] = nums[i];
        k++;
      }
      i++;
    }
  
    return [pares, impares];
  }