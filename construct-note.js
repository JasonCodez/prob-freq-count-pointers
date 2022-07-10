// add whatever parameters you deem necessary
function createFrequencyCounter(str) {
   let frequencies = new Map();
   
   for (let char of str) {
      let charCount = frequencies.get(char) || 0;
      frequencies.set(char, charCount + 1);
   }
   return frequencies;
}

function constructNote(str1, str2) {
   if (str1.length > str2.length) return false;
   if (str1.length === 0) return true;
   if (str2.length === 0) return false;

   let str1Freqs = createFrequencyCounter(str1);
   let str2Freqs = createFrequencyCounter(str2);

   for (let key of str1Freqs.keys()) {
      if (str2Freqs.has(key) === false) return false;
      if (str2Freqs.get(key) < str1Freqs.get(key)) return false;
   }
   return true;
}

module.exports = {
   constructNote,
   createFrequencyCounter
}
