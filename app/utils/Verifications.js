export function isNumeric(value){
    return !isNaN(value) && !isNaN(parseFloat(value));
}