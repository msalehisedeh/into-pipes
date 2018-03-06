# Welcome to InTo Pipes!

Have you ever wanted to have a component that performs format operations on some values through passing some meta data formatting rules?
This library provides few Angular 4 pipes that are all used by a single "into" pipe. InTo will determine how the object value should be formatted.
You are welcom to add on additional pipes and formatting rules to this library.


# Version 0.0.0

The following are available functionalities presented in this version. 
```
DEPENDENCIES: Other than Angular standard Pipes and core angular libraries, NONE.
```

| Format             |Examples                                                 |
|--------------------|---------------------------------------------------------|
|mask                |`mask:4:*  OR mask:4`                                    |
|image               |`image:200px:auto:alt text` OR image                     |
|link                |`link:text OR link`                                      |
|map                 | `map:a/b/c`                                                   |
|currency            | `currency:en_US or currency`                            |
|append              | `append:something`                                      |
|prepend             | `prepend:something`                                     |
|wrap                | `wrap:something:something  OR wrap:something`           |
|number              | `number:en_US:2   or number:en_US or number`            |
|date                | `date:en_US:MMDDYY OR date:MMDDYY`                      |
|json                | `json`                                                  |
|slice               | `slice 5:12 OR slice 5`                                 |
|uppercase           | `uppercase`                                             |
|lowercase           | `lowecase`                                              |

[Source code](https://github.com/msalehisedeh/into-pipes)

