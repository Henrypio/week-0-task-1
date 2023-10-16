function countCharOccurrences(str, char) {
    
        let count = 0;
        for (let i = 0; i < str.length; i++) {
          if (str.charAt(i) == char) {
            count++;
          }
        }
        return count;
      
}

const sentence = "Hello";
const charToCount = "l";
const result = countCharOccurrences(sentence, charToCount);
console.log(result);

module.exports = countCharOccurrences;

