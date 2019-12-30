## 转换HTML实体

> 在这道题目中，我们需要写一个转换 HTML entity 的函数。需要转换的 HTML entity 有`&`、`<`、`>`、`"`（双引号）和`'`（单引号）。转换的规则你可以在 [W3C](https://dev.w3.org/html5/html-author/charref) 官网找到。

---

```js
function convertHTML(str) {
  // &colon;&rpar;
  const origin = {
    '>':"&gt;",
    '<':"&lt;",
    "'":"&apos;",
    '"':"&quot;",
    '&':"&amp;"
  }
  // let ruleArr = str.match(/\&|>|<|"|'/g);
  // let rule = '&#' + str.match(/\&|>|<|"|'/g)[0].charCodeAt() + ';'
  // console.log(rule)
  function change(v){
    return origin[v]?origin[v]:v
  }
  console.log(str.replace(/&|>|<|"|'/g,(v)=>change(v)))  
  return str.replace(/&|>|<|"|'/g,(v)=>change(v));
}

convertHTML("Schindler's List");

```

**基础版**

```js
function convertHTML(str) {
      // Split by character to avoid problems.

      var temp = str.split('');

      // Since we are only checking for a few HTML elements I used a switch

      for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
          case '<':
            temp[i] = '&lt;';
            break;
          case '&':
            temp[i] = '&amp;';
            break;
          case '>':
            temp[i] = '&gt;';
            break;
          case '"':
            temp[i] = '&quot;';
            break;
          case "'":
            temp[i] = "&apos;";
            break;
        }
      }

      temp = temp.join('');
      return temp;
    }

    //test here
    convertHTML("Dolce & Gabbana");
```

**加强版**

```js
function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

// test here
convertHTML("Dolce & Gabbana");
```

**进阶版**

```js
 function convertHTML(str) {
      // Use Object Lookup to declare as many HTML entities as needed.
      htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        '\'':"&apos;"
      };
      //Use map function to return a filtered str with all entities changed automatically.
      return str.split('').map(entity => htmlEntities[entity] || entity).join('');
    }

    // test here
    convertHTML("Dolce & Gabbana");
```

