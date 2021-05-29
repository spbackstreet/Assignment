
const deepClone=(object)=>{
let copy={...object}
console.log('coppiedArray',copy)
return (copy)

}

deepClone({ name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } })




const anagrams=(stringA, stringB)=> {
    console.log(cleanString(stringA) === cleanString(stringB))
    return cleanString(stringA) === cleanString(stringB);
}

const cleanString=(str)=> {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

anagrams('fried', 'fired')