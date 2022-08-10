const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*': ' ',
};

function decode(expr) {
    let arr=[]
    let morse=[]
    let morse2=''

for( let i = 0;i<expr.length;i=i+10){
    arr.push(expr.slice(i,(i+10)))
}

for(let i=0;i<arr.length;i++){
    
    if(arr[i]==='**********'){
        morse.push('*')
    }
    else{
       for(let j=0;j<arr[i].length;j=j+2){
        morse.push(arr[i].slice(j,(j+2)))
       }
    }
    morse.push(' ')
}

for(let i=0;i<morse.length;i++){
    if(morse[i]==='00'){
       morse2=morse2+''
    }
    if(morse[i]==='10'){
        morse2= morse2+'.'
    }
    if(morse[i]==='11'){
        morse2= morse2+'-'
    }
    if(morse[i]==='*'){
        morse2=morse2+'*'
    }
    if(morse[i]===' '){
        morse2=morse2+' '
    }
}
let arrResult=morse2.split(' ')

let result=''
let keys=Object.keys(MORSE_TABLE);
let values = Object.values(MORSE_TABLE);
arrResult.forEach(element => {
     for (let i=0;i<keys.length;i++){
        if(element === keys[i]){
            result=result+values[i]
        }
     }
    }
)

return result

}
   


module.exports = {
    decode
}