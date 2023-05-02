var sentence= "hi everyone to this course";
console.log("the number of words in this sentence is: ",sentence.split(" ").length);
console.log("the number of spaces is: ",sentence.split(" ").length-1)
var c = 0;
for(var i = 0; i < sentence.length; i++){
     if (sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u") {
           c++;
        }

}
console.log("the number of vowels is: ",c);