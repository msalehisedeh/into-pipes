# Welcome to InTo Pipes!

Have you ever wanted to have a component that performs format operations on some values through passing some meta data formatting rules?
This library provides few Angular 4 pipes that are all used by a single "into" pipe. InTo will determine how the object value should be formatted.
You are welcom to add on additional pipes and formatting rules to this library.


# Version 0.2.1
The following are available functionalities presented in this version. 
```
MODULE:
    IntoPipeModule

DEPENDENCIES: 
    "font-awesome": "^4.7.0"
```

A new Conditional Pipe is added to make the whole thing come together. 

The following formatters are added:
| Format             |Examples                                                 |Arguments                   |
|--------------------|---------------------------------------------------------|----------------------------|
|if                  |`'masoud' | into: "if:=:masoud:\"font:fa fa-check:left:*\":\"font:fa fa-bell:left:*\""`|  1)condition `=,!=,~=,<,>,~,!~,in` , 2)value to be evaluated, 3)action, 4)else action |

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
| Format             |Examples                    |Arguments                   |
|--------------------|----------------------------|----------------------------|
|email               |`email`                     |NONE                        |
|address             |`address`                   |NONE                        |
|rating              |`rating`                    |NONE                        |
|font                |`font:fa fa-check:left:*`   |1)class, 2)position (left,right,replace, 3) action (*:use content) |
|valueof             |`valueof:key`               |1) key to be used                           |

# Version 0.0.0

The following are available functionalities presented in this version. 
```
MODULE:
    IntoPipeModule

DEPENDENCIES: 
	Other than Angular standard Pipes and core angular libraries, NONE.
```

| Format             |Examples                                        |Arguments                   |
|--------------------|------------------------------------------------|----------------------------|
|mask                |`mask:4:*  OR mask:4`                           |1) last # number of characters to mask, 2) masking chachter |
|image               |`image:200px:auto:alt text` OR `image`          |1) width, 2)height, 3) alternate text to be displayed |
|link                |`link:text OR link`                             |1)text to be displayed in the link |
|map                 | `map:a;x/b;y/c;z`                              |1)the map if transforming object founs as a key, value of the key will be displayed|
|currency            | `currency:en_US or currency`                   |1)local|
|append              | `append:something`                             |1)appending string|
|prepend             | `prepend:something`                            |1)prepending string|
|wrap                | `wrap:something:something  OR wrap:something`  |1)prepending string, 2)appending string. if appending string is not supplied, prepending string will be used. |
|number              | `number:en_US:2   or number:en_US or number`   |1)local, 2)decimal points |
|date                | `date:en_US:MMDDYY OR date:MMDDYY`             |1)local, 2)format |
|json                | `json`                                         |NONE    |
|slice               | `slice 5:12 OR slice 5`                        |1)from index, 2)to index|
|uppercase           | `uppercase`                                    |NONE    |
|lowercase           | `lowecase`                                     |NONE    |

![alt text](https://raw.githubusercontent.com/msalehisedeh/into-pipes/master/sample.png  "Commands and results")

[Source code](https://github.com/msalehisedeh/into-pipes)

