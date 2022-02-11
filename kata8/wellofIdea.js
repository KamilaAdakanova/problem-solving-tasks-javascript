//Well of Ideas - Easy Version
//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
//If there are no good ideas, as is often the case, return 'Fail!'.

// function well(x){

const testData = ['good', 'bad', 'bad', 'bad', 'bad', 'bad', 'bad']

const well = x =>{
    let current
    let count = 0
    for (let i = 0; i< testData.length; i++){
        console.log(`\nitteration. i=${i}`);
        current = x[i]
        console.log(`current=${current}`);
        if (current === "good" ) {
            console.log("current = good");
            count++
            console.log(`count=${count}`); 
        }
        
    }
    if (count === 1 || count ==2) return "Published" 
    if (count >= 2)  return "I smell a series!"
     return "Fail"
       }
    

    const result = well(testData)
    console.log(result);

    // const well = (x) => {
    //     let current;
    //     let count = 0;
    //     for (let i = 0; i < x.length; i++) {
    //       current = x[i];
    //       if (current === 'good') {
    //         count++;
    //       }
    //     }
    //     if (count == 1 || count == 2) return 'Publish!';
    //     if (count >= 2) return 'I smell a series!';
    //     return 'Fail!';
    //   };
