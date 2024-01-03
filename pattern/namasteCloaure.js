function x(){
    var a=7;
    //console.log(a);
    function y(){
        console.log(a);
    }
    y();
}
x();
 console.log(this);