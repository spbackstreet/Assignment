//cloning object

const deepClone=(object)=>{
let copy={...object}
console.log('coppiedArray',copy)
return (copy)

}

deepClone({ name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } })


//Find Anagrams

const anagrams=(stringA, stringB)=> {
    console.log(cleanString(stringA) === cleanString(stringB))
    return cleanString(stringA) === cleanString(stringB);
}

const cleanString=(str)=> {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

anagrams('fried', 'fired')



//Find Anagrams

const findAnagrams=(p1,p2)=>{
let arr1=p1.split('').sort()
let arr2=p2.split('').sort()

if(JSON.stringify(arr1)===JSON.stringify(arr2)){
    console.log('is anagrams')
}
else{
    console.log('not anagrams')
}
}

findAnagrams('fried', 'fired')