In Javascript inorder to define a variable or function or an object we can only use var , let and const keywords . These keywords behave differently is different scopes
Lets understand the difference between these keywords 

## var vs let-const :-
  > var and let once defined can be changed but const once defined cannot be changed 
   
We can declare var, let and initialize the data to it later on . but we can't do this with const, we will get a SyntaxError . 
Javascript does not allow this as const is the one time initialization and we have to assign some value during the declaration itself.
 ```javascript
var numbers; // ✅
let num;    // ✅
const arr; // Error will come

//output:- const arr;
                  ^^^   SyntaxError: Missing initializer in const declaration
```

I guess you may be familiar with Hoisting concept , yeah so in hoisting during the execution all the variable are hoisted  at the top of their lexical scope .
When we try to access a var before initialization we get undefned but when we try to access let or const before initialization we get ReferenceError why ??
This is due to hoisting concept ... as variable are hoisted at the top of their scope they can be accessed even before initialization , 
This Hositing is done internally in exeution context .

 ```javascript
console.log(varNum)   // undefined
console.log(letNum)   // ReferenceError: letNum is not defined

var varNum=10;
var letNum=20;
```

 When you declare a variable using var, it is hoisted to the top of its containing function or global scope,
 and it is initialized with the value `undefined`. This means that you can access a var variable before it's declared,
 and it will have the value `undefined`

 But When you declare a variable using let/const, it is also hoisted to the top of its containing block or function scope,
 but it is not initialized. Attempting to access a let/const variable before its declaration results in a `ReferenceError`. 

 ## Scopes of var and let/const :-
 > The variable decalred using var will have a functional scope and variables decalers using let/const will have a block scope.

  ```javascript
function func(){
    var a =6
    {
        var b = "Hellow"
        var c = "hello"
    }
    console.log(c)  // hello
}
func()
```

var elements are function scope so even if any element is declared inside a block we can access it  outside the block , because during the execution all the 
variables are hoisted to the top of the thier respective scope as var keyword has scope of functional . it is hoisted at the top of the first function in which it is located 
, the first function going upward is func() so it will be hoisted at the top of func() that why we can access this c variable even if it is decalred inside the scope.

  ```javascript
function func(){
    var a =6
    {
        let b = "Hellow"
        let c = "hello"
        console.log(c) // Hello
    }
    console.log(c)  // ReferenceError: c is not defined
}
func()
```

 As previously mentioned let and const are block level scopes they can be accessed inside a block only ,
 in the upper code block we can see that c can be accessed within the block { } but cannot be accessed outside the { } scope.

 ### What is a block ? 
 > { } whatever code we write inside this { } is a block level code .
  ```javascript
{
  var a =10 
}   /// This is a block

if(true){
   ////// This is a block
}
function func(){
   ////// this is a block
}
func()
```

