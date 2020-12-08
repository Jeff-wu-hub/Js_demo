var arr=[[1,2],[3,4]];
function Jw(obj){
    return Array.prototype.concat.apply([],obj);
}
const a = Jw(arr)
console.log(a)