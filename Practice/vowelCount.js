let vowel = null, i=0, count = 0;

function returnVowel(vowel){
    vowel = vowel.toLowerCase();
    for(i=0; i< vowel.length; i++){
        if(vowel[i]=="a" || vowel[i]=="e" || vowel[i]=="i" || vowel[i]=="o" || vowel[i]=="u"){
            count++;
        }
    }
    console.log("Total vowel: " + count);
}

returnVowel("Raihan");