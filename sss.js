// bus ticket calculator 

 const price = 800;
 const Age = 12;
 const age = 60;
 if(age<=12){
    console .log ('free bus trip ')
 }

 else if(age<=60){
    const discount =price*50/100;
    const payment=price-discount;
    console.log(payment)
 }
 else {
    console.log('full  payment 800')
 }