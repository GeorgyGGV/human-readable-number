module.exports = function toReadable (number) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let arrm = ['','ten','twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrb = ['','one hundred ', "two hundred ", "three hundred ", "four hundred ", "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "];
    if ((19 >= number) && (number >= 0)){
        console.log(arr[number]);
        return arr[number]; 
    }else if(100>number && number>19){
        let mid = arrm[number.toString().split('')[0]]+' '+arr[number.toString().split('')[1]];
        if(mid.includes('zero')){
        console.log(arrm[number.toString().split('')[0]]);
        return arrm[number.toString().split('')[0]]; 
    }
    console.log(mid);
    return mid;  
    }else if(number>99 && 999>=number ){
    let big = arrb[number.toString().split('')[0]]+arrm[number.toString().split('')[1]]+' '+arr[number.toString().split('')[2]];
    
    if(big.includes('zero')){
        console.log(arrb[number.toString().split('')[0]]+arrm[number.toString().split('')[1]]);
        if(arrm[number.toString().split('')[1]]!=''){
            return arrb[number.toString().split('')[0]]+arrm[number.toString().split('')[1]];
        }else{return arrb[number.toString().split('')[0]].trim()}
        }
        if(arrm[number.toString().split('')[1]]=='ten'){
        if (arr[number.toString().split('')[2]]!='zero')
        return big = arrb[number.toString().split('')[0]]+arr[number.toString().split('')[1]+number.toString().split('')[2]];
        }
        if(arrm[number.toString().split('')[1]]==''){
        console.log(arrb[number.toString().split('')[0]]+' '+arr[number.toString().split('')[2]]);
        return arrb[number.toString().split('')[0]]+arr[number.toString().split('')[2]];
        }
    console.log(big);
    return big;  
    }
}
