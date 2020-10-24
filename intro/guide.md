## Intro

Programming is simply giving instructions to a computer.

However, unlike humans, computers need a specific, non-ambigious set of instructions on what to do. (This doesn't mean all behavior is predetermined, but that's something to talk about later).
So how can we make instructions specific and non-ambigious? We must follow a certain **syntax**, or structure of our language.

Take JavaScript, for example. JavaScript is a programming language that (mostly) runs on browsers. JavaScript, like any other programming language, has its own specific
syntax. Let's analyze some example code.

[test.html]
```html
<script>
let x = 10;
window.alert(x);
</script>
```
We can ignore the `<script>` tags for now; let's just look at what's inside.
In Line 1, what we are doing is declaring a variable. This is similar to how in math we would just say `x = 10` to symbolize the variable called x being equal to 10.
But with computers, we have to do things a bit differently. If we just wrote `x=10`, that would be quite ambigious. What is `x`? Therefore, since the computer doesn't
even know what `s` is yet, we have to **declare** it.

Declarations are one type of operation a computer can perform. In JavaScript, we denote a declaration by the **keyword** `let`. Keywords are reserved words or symbols that define the
behavior of some set of code or operation. In here, we want to use the `let` keyword to declare a variable. The **syntax** for it is:
```javascript
let variableName = variableValue;
```
Note how every statement ends with a semicolon. This is so that the computer can seperate statements and run them in order.
This means that we can have multiple statements in one line (although it isn't good practice):
```javascript
let x1=0; let x2=1; let x3=2;
```
Although we don't necessarily need spaces between statements, we absolutely do need spaces between keywords. How else would the computer recognize it as a keyword?

We use the `=` operator to assign values to variables as well. The equals sign has the following syntax:
```javascript
variable = newValue;
```
This syntax is quite similar to math.
If we already declared a variable, we don't need to declare it again:
```javascript
let x = 0;
x = 2;
```

**Challenge:** Declare a variable with it's initial value set to 200.

Now, the second part is using **functions**. Functions are like variables, except when they are used, or **called**, they do something specific instead of storing a piece of information.
For example, the function called `window.alert` gives a text notice to the browser. 
How do we invoke a function?
Function calls have two parts: the **signature** and the **paramaters**. The signature is simply the function name, and the parameters are what the function needs to know to do it's job.
For `window.alert`, we need to know what to show on the screen. So, to use `window.alert`, we immediately follow the signature with parentheses, and inside is what we want to show. We want to show `x` in this case.
```
let x = 0;
window.alert(x); // this will show 0.
```
In this way, it's quite similar to how you would use functions in math!

**Challenge 2:** After declaring your own value for x, display it using window.alert.

**Challenge 3:** Try setting x as a number, and y as the value of x with one of the following operations:
```javascript
x + someNumber
x - someNumber
x * someNumber
x / someNumber
```
These are all expressions using the arithmtic operators `+`, `-`, `*`, and `/`. As shown, they work exactly the same as they do in math.
An example:
`let x = 10 + 2;`.
So y should be some value that is an expression involving x.

### How to do challenges:
Create a `.html` file and paste the following:
```html
<script>
</script>
```
Inside the `<script>` tags, write your code.
