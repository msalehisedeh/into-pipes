# Welcome to InTo Pipes!

Have you ever wanted to have a component that performs format operations on some values through passing some meta data formatting rules?
This library provides few Angular 4 pipes that are all used by a single "into" pipe. InTo will determine how the object value should be formatted. If you are flushing the end result of your formatted data into html content of 
a node, make sure you will pipe the result into sanitizeHtml.
You are welcom to add on additional pipes and formatting rules to this library.

# Version 0.3.0
Internally changed code to make sure if array is the source to be transformed, all items in the array are transformed.

| Format             | Examples             | Arguments                                   |
|--------------------|----------------------|---------------------------------------------|
| join               | `join:,`             |  1) the characters used to jin the list     |
| sanitizeHtml       | `sanitizeHtml`       |  NONE  (This pipe is not used by into pipe) |


# Version 0.2.2
The following are available functionalities presented in this version. 
```
MODULE:
    IntoPipeModule

DEPENDENCIES: 
    "font-awesome": "^4.7.0"
```

A new Conditional Pipe is added to make the whole thing come together. 

The following formatters are added:

**NOTE: For all of the pipes, if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned. in case of conditional pipe, a resulting map will be returned.**

| Format             | Examples                                                | Arguments                  |
|--------------------|---------------------------------------------------------|----------------------------|
| if                 | `'masoud' | into: "if:=:masoud:\"font:fa fa-check:left:*\":\"font:fa fa-bell:left:*\""` |  1)condition `=,!=,~=,<,>,~,!~,in` , 2)value to be evaluated, 3)action, 4)else action |

```
NOTE: 
    In the Conditional pipe:
        "~" is for exist (check to see if transforming object exist and item 2 is ignored).
        "~=" is for equal ignore case.
        "!~" is for do not exist (check to see if transforming object is null or undefined exist and item 2 is ignored).
        "!=" is to evaluate if transforming object is not equal to value.
        "in" is to get indexof value in the transforming object
```

# Version 0.0.1
The following are available functionalities presented in this version. 
```
MODULE:
    IntoPipeModule

DEPENDENCIES: 
    "font-awesome": "^4.7.0"
```
Dependency is added because few of the pipes are injecting nodes with font awesome names to create a better UI effects.

In Addition code in "into" pipe is modified to allow for cascading pipes and escaping ':' character if is inside quotes. For example `date:"MM/dd/yyyy hh:ss"` will be parsed into an array argument of 
`["date","MM/dd/yyyy hh:ss"]`

The following formatters are added:

**NOTE: For all of the pipes, if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.**

| Format             | Examples                     | Arguments                   |
|--------------------|------------------------------|-----------------------------|
| email               | `email`                     | NONE                        |
| address             | `address`                   | NONE                        |
| rating              | `rating`                    | NONE                        |
| font                | `font:fa fa-check:left:*`   | 1)class, 2)position (left,right,replace, 3) action (*:use content) |
| valueof             | `valueof:key`               | 1) key to be used                           |

# Version 0.0.0

The following are available functionalities presented in this version. 
```
MODULE:
    IntoPipeModule

DEPENDENCIES: 
	Other than Angular standard Pipes and core angular libraries, NONE.
```

**NOTE: For all of the pipes, if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.**


| Format              | Examples                                        | Arguments                  | 
|---------------------|-------------------------------------------------|----------------------------|
| mask                | `mask:4:*  OR mask:4`                           | 1) last # number of characters to mask, 2) masking chachter |
| image               | `image:200px:auto:alt text` OR `image`          | 1) width, 2)height, 3) alternate text to be displayed |
| link                | `link:text OR link`                             | 1)text to be displayed in the link |
| map                 | `map:a;x/b;y/c;z`                               | 1)take a source as a key and returns value of key from the given map argument |
| currency            | `currency:en_US or currency`                    | 1)local |
| append              | `append:something`                              | 1)appending string |
| prepend             | `prepend:something`                             | 1)prepending string |
| wrap                | `wrap:something:something  OR wrap:something`   | 1)prepending string, 2)appending string. if appending string is not supplied, prepending string will be used. |
| number              | `number:en_US:2   or number:en_US or number`    | 1)local, 2)decimal points |
| date                | `date:en_US:MMDDYY OR date:MMDDYY`              | 1)local, 2)format |
| json                | `json`                                          | NONE    |
| slice               | `slice 5:12 OR slice 5`                         | 1)from index, 2)to index |
| uppercase           | `uppercase`                                     | NONE    |
| lowercase           | `lowecase`                                      | NONE    |

![alt text](https://raw.githubusercontent.com/msalehisedeh/into-pipes/master/sample.png  "Commands and results")


where the attributes passed in above examples are defined as:
```
  threeFive = 3.5;
  myJson= {q:3,w:43,dw:6565};
  myDate = "2018-03-10T01:01:20Z";
  myDateList = ["2018-03-10T01:01:20Z", "2011-02-12T01:01:20Z"];
  myDateFormat="date:\"MM/dd/yyyy hh:ss\"";
  theURL = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?h=350&auto=compress&cs=tinysrgb";

  myConditionalLogic = "if:=:masoud:\"font:fa fa-check:left:*\":\"font:fa fa-bell:left:*\"";
  myConditionalThreeFive = "if:>:3:\"font:fa fa-check:replace\":\"font:fa fa-bell:replace\"";

  myaddress = {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  };
```

[Source code](https://github.com/msalehisedeh/into-pipes)
