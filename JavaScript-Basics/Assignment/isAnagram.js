

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    if(str1.length !== str2.length){
        return false;
    }
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
    return str1 === str2
}

const ans =isAnagram("cat","act");
console.log(ans)