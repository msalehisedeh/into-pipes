

# Welcome to InTo Pipes!

Have you ever wanted to have a component that can format values on some properties through passing meta data formatting rules?
This library provides Angular 4 pipes that are all used by a single "into" pipe. But they are still are exported for use individually if you like to use them as such.  InTo Pipe will determine how the formatting on a property should be done by parsing a formatting metadata. The rules are same as Angular pipe rules (i.e., parameters separated by a ":" character. But at the same time if you need a format parameter like Date to have ":" characters, make sure you wrap the rule in a quote. For example "MM/dd/YY hh:ss"). You can also cascade formatting metadata rules. For example "mask | font:fa fa-check:right:*".

You are welcome to add on additional pipes and formatting rules to this library or enhance them.


# Version 0.1.0
The following are available functionalities presented in this version. 
```
DEPENDENCIES: "font-awesome": "^4.7.0"
```
Dependency is added because few of the pipes are injecting nodes with font awesome names to create a better UI effects.

In Addition "into" code pipe is modified to allow for cascading pipes and escaping ':' character if is inside quotes. For example, InTo Pipe will parse `date:"MM/dd/yyyy hh:ss"`  into an array argument of `["date","MM/dd/yyyy hh:ss"]` which will be passed to date Pipe.

In addition, the following pipes are added:
| Format             |Examples                    |Arguments                                 |
|--------------------|----------------------------|------------------------------------------|
|email               |`email`                     |                                          |
|address             |`address`                   |                                          |
|rating              |`rating`                    |                                          |
|font                |`font:fa fa-check:left:*`   | 1) class 2) left, right, or replace 3) "*" display source with the font or nothing if argument 2 is replace.|
|valueof             |`valueof:key`               | 1) key found in source JSON              |

# Version 0.0.0

The following are available functionalities presented in this version. 
```
DEPENDENCIES: Core Angular standard and Pipes libraries.
```

| Format             |Examples                               |Arguments                                                                               |
|--------------------|---------------------------------------|----------------------------------------------------------------------------------------|
|mask                |`mask:4:*  OR mask:4`                  | 1) last n characters, 2) masking character                                             |
|image               |`image:200px:auto:alt text` OR image   | 1) width, 2) height, 3) alternate text                                                 |
|link                |`link:text OR link`                    | 1) text to be displayed in the link. If not provides, the URL file name will be used.  |
|map                 | `map:a;value/b;value/c;value`         | 1) map of key and values. the value for matching key with the source will be displayed.|
|currency            | `currency:en_US or currency`          | 1) local. If not given en_US will be used.                                             |
|append              | `append:something`                    | 1) appending string                                                                    |
|prepend             | `prepend:something`                   | 1) prepending string                                                                   |
|wrap                | `wrap:something:something  OR wrap:something`       | 1) pre-pending string, 2) appending string                               |
|number              | `number:en_US:2   or number:en_US     | 1) local, 2) decimal points                                                            |
|date                | `date:en_US:MMDDYY OR date:MMDDYY`    | 1) local, 2) format                                                                    |
|json                | `json`                                |                                                                                        |
|slice               | `slice 5:12 OR slice 5`               | 1) starting index, 2) ending index                                                     |
|uppercase           | `uppercase`                           |                                                                                        |
|lowercase           | `lowercase`                           |                                                                                        |

![alt text](https://raw.githubusercontent.com/msalehisedeh/into-pipes/master/sample.png  "Commands and results")

where data in your component is defined as
```
myJson= {
	q:3,
	w:43,
	dw:6565
};
myDate  =  "2018-03-10T01:01:20Z";

myDateFormat="date:\\"MM/dd/yyyy hh:ss\\"";
theURL = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?h=350&auto=compress&cs=tinysrgb";

myaddress  = {
	"street":  "Kulas Light",
	"suite":  "Apt. 556",
	"city":  "Gwenborough",
	"zipcode":  "92998-3874"
};
```

And CSS to apply on formatted content could be defined as
```
::ng-deep  img{
	width: 200px;
}
::ng-deep .off-screen {
	position: absolute;
	left: -999em;
}
::ng-deep .rating {
	color: #f00;
}
::ng-deep  a {
	.fa {
		color: #f00;
		margin: 0  3px;
	}
}
```

[Source code](https://github.com/msalehisedeh/into-pipes)


