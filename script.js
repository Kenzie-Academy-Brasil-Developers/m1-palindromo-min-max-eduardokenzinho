function isPalindrome(str){
    /* Seu código aqui */
        if (!str) {
          return false;
        }
      
        let newText = str.toLowerCase().replace(/\s/g, "");
      
        for (let i = 0; i < newText.length / 2; i++) {
          if (newText[i] !== newText[newText.length - 1 - i]) {
            return false;
          }
        }
        
        return true;
      }
      
      console.log(isPalindrome("A man a plan a canal Panama"));
      
function arrayMaxMin(arr){
    /* Seu código aqui */
        if (arr.length === 0) {
          return [];
        }

        let min = arr[0];
        let max = arr[0];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
            min = arr[i];
          }
          if (arr[i] > max) {
            max = arr[i];
          }
        }
      
        return [min, max];
      }
      
