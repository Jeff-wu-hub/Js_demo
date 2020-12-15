a = function () {
 for(let i =0; i<5; i++){
     (function () {
         setTimeout(()=>{
             console.log(i)
         },i*2000)
     })(i)
 }
}
a()