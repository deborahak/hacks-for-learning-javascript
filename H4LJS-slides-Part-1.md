<!-- $theme: default -->

# Hacks for Learning JavaScript

Marty Nelson
_Principal Instructor, Code Fellows PDX_

**@martypdx** on `github` and `twitter`

---

# What is a hack?

> A technique, observation, or insight that shortcuts learning complex topics by introducing an easier, or easier to grasp, cognitive model or procedure

---

# Who are these hacks for?

Primarily beginning and intermediate JavaScript coders. Those at an advanced level probably already have good working cognitive models.

---

# Why JavaScript hacks?

1. JavaScript is everywhere, so everyone is learning JavaScript.

1. JavaScript grew up in the browser as a dynamic scripting language. It's simplicity and composability have carried it beyond what was ever imagined.

1. Nowdays even fancy-pants Standford CS grads working at Facebook also use JavaScript. 

1. People are teaching General Programming and CS. Makes it hard for beginners

---

# Hack 1, Part 1: The Runes of JavaScript

In which we apply a pseudo-creation story to the teaching of JavaScript

---

# In the Beginning...

This story begins at the the end, with the `;` symbol.

`;` in this story represents:

* A JavaScript statement terminator
* JavaScript generally
* you, as a JavaScript coder


---

`;` lived in the Great Console. Whenever `;` was placed on the line, The Great Console only echoed back a single hollow word:

```javascript
> ;
undefined
> ;
undefined
> ;
undefined
```
---

This made `;` feel lonely and empty, and `;` wished they could terminate something more than nothing.

---

One day, `;` came across a primitive number `8` and was able to terminate it:

```javascript
> 8;
8
``` 

`;` rejoiced as finally something other than `undefined` was mirrored back in the Great Console.

---

`;` met more Numbers, Dates, Strings, the boolean values `true` and `false` and an odd value named `null` who seemed pretty useless in `;`'s opinion:


```javascript
> 1/1/1970;
1/1/1970
> true;
true
> "Hello World!";
"Hello World!"
> 3.24;
3.24
> false;
false
> null
null
```

---

That night, `;` dreamt of operators like `+`, `-`, `*`, `/`, `||`, and `&&`. 

`;` was shown the wonder of the "expression" and combining values using the operators.

`;` was also shown the left and right parens, `(` and `)`, collectively know as parenthesis, for the grouping and controlling of values.

```javascript
> 1 + 1;
2
> (2 + 5) * 7;
49
> true || false;
true
> "Hello" + " " + "World!";
"Hello World!"
```

---

Other strange operators appeared, but `;` largely ignored them 
knowing they could always be found on MDN. Except for `%` which 
was needed for fizz-buzz and other coding challenges.

`;` was overjoyed, but sometimes lacked attention to detail:

```javascript
> .2 + .1;
0.30000000000000004
```

Or strange values might sometimes appear:

```javascript
> 3/0;
Infinity
> 3 + "1";
"31"
> 0/0;
NaN
```


`;` just shrugged ¯\\_(ツ)_/¯ and kept on going!

---

`;` even met some objects that lived in the Global Namespace

```javascript
> Math.min(32, 5);
5
```

`;` didn't really know where these came from or even how to use them, but managed to figure things out by looking on MDN or asking StackOverflow

---

Over time, `;` grew sad at the fleeting nature of the values being terminiated, even when they were complex expressions.

One night, in a dream, `;` received the great`var` and `=`, and was shown how to create a named box to hold onto values:

```javascript
> var foo = 2;
undefined
> foo;
2
```

(Note: the term `var` is an archaic honorific like "thou". Nowadays we use `const` and `let`, but in the olden days developers defined variables walking uphill in the snow both ways and had to use `var`)

---

`;` entered a new creative phrase and learned not only how to put new values into the `var` boxes, but also learned from the `SHIFT` key how to create multiple lines to be given to the Great Console:

```javascript
> var foo = 2;
undefined
> foo = 3;
3
> var bar = 12;
  var qux = foo * bar;
  qux;
36
```

---


One day, as `;` was terminating statements, `;` stumbled upon a strange old priest who was preaching about judgement day. 

According to this priest, everything could be evaluated as as either `truthy` or `falsey`. And our fate hinged upon being `truthy` at the Grand Evaluation (whatever that meant). 

`;` was never much for dogma, or judgement in general, but found the idea of a condition fascinating. 

---

The priest handed `;` some strange tools: `===` and `!==` and `!`. 

```javascript
> var number = 7;
undefined
> number === 7;
true
> number === 12;
false
> number === "7";
false
> var small = number < 10;
  !small
false
```

---

The priest also gave `;` some additional tools, `==` and `!=`, with the warning that `;` only ever use them if dealing with values `;` found resistant to correct evaluation and requiring some strong coercion to get them to behave.

```js
> number == "7";
true
```

---

In next night, `;` had another dream. Instead of just one terminated statement after another, `;` had the ability to control which statements would happen, or even the ability to repeat a statement more than once.

The next day, `;` drew forth (much like Zeus created Athena) two children from `;`'s mind:

`if` came first, then `while`. 

---

`;` took the parenthesis and _remade them_ into gifts for his children. 

By divining the `truthy` or `falsey` nature of their contents, `if` and `while` could selectively decide whether to run their statements:

```javascript
> var foo = 3;
  if (foo === 3) foo = foo + 2;
  foo;
5
> while (foo < 10) foo = foo + 2;
  foo;

```

---

`;` was overjoyed with these new control flow children. That night, `;` dreamt of way to allow the children to have more than one statement that they could conditionally control. He gave them curley braces (sometimes curley brackets, or just braces) to form **blocks**:

```javascript
> var foo = 0;
  var bar = 12;
  var swap = true;

  if (swap) {
    var qux = foo;
    foo = bar;
    bar = qux;
  }
```

---

`;` noticed that `while` would sometimes get stuck, so `;` also made the `break` that `while` could use to "break" out of the loop:

```javascript
> var i = 5;
  while(true) {
     if (i > 10) break;
     i = i + 1;
  }
  i;
11
```
---

So that `if` wouldn't get jealous, `;` made the `else` to be `if`'s playmate. 

`else` provided an alternative set of statements that could be run if the `if` decided the condition wasn't truthy.

```javascript
> var i = 6;
  var kindOfNumber;

  if (i < 5) {
    kindOfNumber = 'small';
  }
  else {
    kindOfNumber = 'large';
  }

  kindOfNumber;
"large"

```

---

But `if` was a bit of a narciscist and most enjoyed repeating themselves at `else`'s expense:

```javascript
> var i = 6;
  var range = '';

  if (i < 5) {
    range = 'less than 5';
  }
  else if (i < 10) {
    range = 'between 5 and 10';
  }
  else if (i < 20) {
    range = 'between 10 and 20';
  }
  else {
    range = '20 or over';
  }

  range;
"between 5 and 10"

```

---

Given the success of having the block `{` and `}` hold multiple statements, `;` created a new child
named `for` that was like `while` but took three very specific statements with it's conditional `(` and `)`


```javascript
> var counting = '';
  for (var i = 0; i < 10; i = i + 1) {
    counting = counting + (i + 1);
    if (i !== 9) counting = counting + ', ';
  }
  counting;
"1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
```

The three statements are: initialization, condition, and incrementor.

---

The birth of `for` caused an immense sibling rilvalry between `while` and `for`. Prodigious bickering ensued and confusion between the two still persists to this day.

`;` vowed to never again tried to put statements with parenthesis.

But `;` also created more control flow children like `switch` (which just pissed off `if`), see MDN for details if you need to) 

Madness overtook `;` and they soon created more children like `do`, and `goto` and statement `labels`. We don't mention these children in polite company.

---

In this state of madness, `;` wandered the Great Console and roamed into the Global Namespace where `;` met `console`, the manifestation of the Great Console in coding realm. `console` cured `;`'s madness (temporarily at least) and showed `;` how to write the Great Console using `console.log`:

```javascript
> var i = 1;
  while (i <= 4) {
    console.log(i);
    i = i + 1;
  }
  console.log('all done!');
1
2
3
4
all done!
```

---

# END PART 1

---

# Exercises

---

1. Loop through the numbers from 1 to 10. If the number is even, `(i%2 === 0)` log the word "even", otherwise log "odd".
2. Log all numbers below 20 which are divisible both by 3 and by 4.
3. Using `prompt` (google "prompt mdn"), ask what the value of 2 + 2 is. If the answer is "4", use `alert` (google "alert mdn") to say something praising. If it is "3" or "5", say "Almost!". In other cases, say something funny.
4. Modify #3 to keep re-prompting the user if the value wasn't correct.
5. Write a loop that makes seven calls to console.log to output the following triangle:
    ```
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ```