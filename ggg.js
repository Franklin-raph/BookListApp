// let a = "1010"
// let b = "1011"
// let carry = 0;

// for(let i = 0; i <= a.length; i++){
//     for(let j = 0; j <= b.length; j++){
//         console.log(a[i],b[j])
//     }
// }

// numa = Number(a)
// numb = Number(b)
// console.log(typeof numa)

// https://leetcode.com/problems/add-binary/

var addBinary = function(a, b) {
    let anum = ""
    let bnum = ""
    let carry = 0
    let pos = 0
    let res = ""
        
    while(pos < a.length || pos < b.length) {        
        let first = parseFloat(a.charAt(pos))
        let second = parseFloat(b.charAt(pos))
        
        first = first || 0
        second = second || 0
                
        let sum = first + second + carry
        
        if(sum === 3) {
            res += 1
            carry = 1
        } else if(sum === 2) {
            res += 0
            carry = 1                    
        } else if(sum === 1) {
            res += 1
            carry = 0  
        }
        
        pos++;
    }
    
     if(carry === 1) {
            res += 1
        }
    
    return res.split("").reverse().join("");
};

console.log(addBinary("1010", "1011"))