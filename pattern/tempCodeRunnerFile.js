const user5={
    name:"harsh sahu",
    printName:function(){
        console.log('upper: ',this);

        const printAgain=function(){
            console.log('inner: ',this);
        }
        printAgain();
    }
}
user5.printName();