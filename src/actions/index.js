//This file contatins 'ACTION-CREATOR' functions 
//In Redux, 'ACTION-CREATOR'  return an  ACTION(plain JavaScript object)

//example of simple 'ACTION-CREATOR'

export const sayHello = () =>{
    console.log("Action Inovoked");
    return {type: "HELLO_REACT"};
}
