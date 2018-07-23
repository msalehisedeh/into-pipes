# Welcome to InTo Pipes!

Have you ever wanted to have a component that transforms values into interactive objects just by receiving meta data formatting rules?
This library provides few Angular4 pipes that are all used by a single **"InTo"** pipe component/directive. "InTo" will determine how the object value should be formatted. 
Moreover, you can provide your own extenssions and it is all done JUST by passing few formatting rules to an "InTo" directive.

**Please Note:** If you decide to use the "Into" pipe instead of the directive, you need to make sure you will pipe the result into sanitizeHtml.

**Please Note:** When you create tags and insert them into DOM at runtime though InTo Pipes, angular will not be able to enforce CSS on the tags. In that case the workaround is to use **::ng-deep** in your CSS. For example, if img tage is created through image pipe under a DIV with class "something", then you need to declare attributes in `::ng-deep .something img{ }` in order to have control over img tag.

You are definitely welcome to add on additional pipes and formatting rules to this library and I will gladly incorporate your ideas **InTo** this project. Add your comments an requests through the link provided below.

[Live Demo](https://into-pipes.stackblitz.io) | [Source code](https://github.com/msalehisedeh/into-pipes) | [Comments/Requests](https://github.com/msalehisedeh/into-pipes/issues)


# Version 1.4.1
Added error log if accessing a custom component that is not registered.

# Version 1.4.0
Added share social sites component.

# Version 1.3.8
Fixed the firing event on input component. It will fire after the input is changed back to default plain text and only if the value is changed. tab, return, anf escape keys will revert input back to plain text.

# Version 1.3.8
Modified pipe component to accept one more argument allowing you to have additional data when you are formatting data. Consider a case when you are formatting data in a table row. You may need to format based on some attribute on a different column and may need to access the data for enite row.  By adding a **intoData**, your custom component will have access to the data and you can gain great flexibility formatting data. Standard pipes will not have access to "intoData" object. If you have not created custom pipe components on previous vesions, you will have no issue upgrading to this vesion. However, if you have created custom components, you will have to take note of new parameter passed to your component (please pay attention to the 'PipeComponent' interface).

# Version 1.3.7
Compiled with AOT option and resolved issues.

| Format     | Examples             | Arguments                                                                                                  |
|------------|----------------------|------------------------------------------------------------------------------------------------------------|
| share               | `share:facebook:linkedin:google:twitter`          | 1) list of any one of supported sites (facebook, linkedin, google, twitter, pinterest, digg, xing, get-pocket, stumbleupon) |


# Version 1.3.3
Added Video pipe... Now you can pipe a URL into video tag.

```javascript
EXPORTS
	VideoPipe
```

| Format     | Examples             | Arguments                                                                                                  |
|------------|----------------------|------------------------------------------------------------------------------------------------------------|
| video               | `video:200px:auto:alt text` OR `video`          | 1) width, 2)height, 3) alternate text to be displayed |


# Version 1.2.0
Fixed a few logic issues and added event emit to the directive. Added into select option. You are now able to pipe a value into select tag. But you will need to register a service that knows how to provide select options for a given attribute. And this service has to implement PipeServiceComponent.

```javascript
MODULE:
    IntoPipeModule

EXPORTS
	InToPipe
	IntoDirective

	PipeComponent
	PipeServiceComponent
	ComponentPool

	MaskPipe
	MapPipe
	LinkPipe
	ImagePipe
	PrependPipe
	AppendPipe
	WrapPipe
	EmailPipe
	RatingPipe
	AddressPipe
	JoinPipe
	FontPipe
	ValueOfPipe
	SanitizeHtmlPipe
	ConditionalPipe
	
DEPENDENCIES: 
    "font-awesome": "^4.7.0"
```

| Format     | Examples             | Arguments                                                                                                  |
|------------|----------------------|------------------------------------------------------------------------------------------------------------|
| select     | `select`             |  No arguments. Except it requires implementation of PipeServiceComponent registered with  ComponentPool    |


Sample on the directive usage
```javascript
	<td scope="row" 
        [intoName]="SSN"
        [intoId]="'ssn-' + i"
        [into]="input:mask"
        [intoData]="{x:'something',y:'whatever'}"
        [rawContent]="item.ssn"
        [onComponentChange]="onTableCellEdit.bind(this)"></td>
```

Sample registration for select pipe. You will have to make sure to add your custom service in NgModel of your application under providers.
```javascript
  constructor(private pool: ComponentPool, private myService: MySelectService) {
    this.pool.registerServiceForComponent("select", myService);
  }
```

Interfaces
```javascript
export interface PipeComponent {
	source: any;
	id: string;
	name: string;
	service?:PipeServiceComponent;
	onIntoComponentChange: EventEmitter<any>;
	  
	transform(content: any, data: any, args?: any[]);
}

export interface PipeServiceComponent {
	getDataFor(itemName, itemId);
}
```

# Version 1.1.0
Added ability for you to declare a custom pipe. You will need to create your own custom component for it and register the component as was explained on release 1.0.0.

Also, updated custom component declaration process. You will need to make sure your component has id and name attributes as well as source attribute. also, if your component interacts with user actions and as a result its value is changed, you will need to emit event as i have updated the code sample for version 1.0.0.

# Version 1.0.0
Added a directive to enable piping values into form fields!! Provisions is in place if you wish to format the values into a custom field. For those to happen, you will need to create your component and register it.

```javascript
MODULE:
    IntoPipeModule

EXPORTS
	InToPipe
	IntoDirective

	PipeComponent
	ComponentPool

	MaskPipe
	MapPipe
	LinkPipe
	ImagePipe
	PrependPipe
	AppendPipe
	WrapPipe
	EmailPipe
	RatingPipe
	AddressPipe
	JoinPipe
	FontPipe
	ValueOfPipe
	SanitizeHtmlPipe
	ConditionalPipe
	
DEPENDENCIES: 
    "font-awesome": "^4.7.0"
```

| Format             | Examples             | Arguments                                   |
|--------------------|----------------------|---------------------------------------------|
| input              | `input:placeholder:formatting,`             |  1) place holder text or blank, 2) formatting rules for the value to be displayed when text field is not editable    |
| checkbox           | `checkbox:idealvalue:useIcon`       |  1) the value for which checkbox should be checked, 2)if it is standard checkbox or should use fonts to display checked or not checked.  |

```javascript
import { Component, Output, EventEmitter } from '@angular/core';
import { PipeComponent } from 'into-pipes';

@Component({
    selector: 'my-custom-component',
    template: `html tags for custom component here`,
    styles: [
        `css classes for custom component here
        `
    ]
})
export class MyCustomInputComponent implements PipeComponent {
    source: string;
    name: string;
    id: string;

    @Output("onIntoComponentChange")
    onIntoComponentChange = new EventEmitter();

    transform(source: any, args: any[]) {
        this.source = source;
        // do some other stuff here...
    }
    onSomeKindOfEvent(event) {
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: this.source
        });
    }
}
```

Registering my custom component. You will have to make sure to add your custom component in NgModel of your application under declarations and entryComponents.
```javascript
import { ComponentPool } from 'into-pipes';

my component definition ....

constructor(private pool:ComponentPool) {
    this.pool.registerComponent("input", MyCustomInputComponent);
}
```

Custom component registration API
```javascript
	registerComponent (name, component: any)
	removeComponent (name)
	registeredComponent(name): any

	registerServiceForComponent (name, service: any)
	removeServiceForComponent (name)
	registeredServiceForComponent(name): any
```

You can still continue formatting with existing pipes using InTo directive.. however, Email, Address, Font, Image, JSON, Link, and Rating formatters will insert actual components in the end resulting html. This means in the next release, I can add interactions with these components and add editable date component to format and edit the values when user interacts with the fields.. To allow you to come up with nifty formatters that can interact with users, in future release, I will add possibility of customizing formatting tags as well ...

# Version 0.3.0
Internally changed code to make sure if array is the source to be transformed, all items in the array are transformed.

| Format             | Examples             | Arguments                                   |
|--------------------|----------------------|---------------------------------------------|
| join               | `join:,`             |  1) the characters used to jin the list     |
| sanitizeHtml       | `sanitizeHtml`       |  NONE  (This pipe is not used by into pipe) |


# Version 0.2.2
The following are available functionalities presented in this version. 

```javascript
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

```javascript
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
 
```javascript
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

```javascript
MODULE:
    IntoPipeModule

DEPENDENCIES: 
	Other than Angular standard Pipes and core angular libraries, NONE.
```

**NOTE: For all of the pipes, if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.**


| Format              | Examples                                        | Arguments                  | 
|---------------------|-------------------------------------------------|----------------------------|
| mask                | `mask:4:*  OR mask:4`                           | 1) last # number of characters to mask, 2) masking character |
| image               | `image:200px:auto:alt text` OR `image`          | 1) width, 2)height, 3) alternate text to be displayed |
| link                | `link:text OR link`                             | 1)text to be displayed in the link |
| map                 | `map:a;x/b;y/c;z`                               | 1)take a source as a key and returns value of key from the given map argument |
| currency            | `currency:en_US or currency`                    | 1)local |
| append              | `append:something`                              | 1)appending string |
| prepend             | `prepend:something`                             | 1)pre-pending string |
| wrap                | `wrap:something:something  OR wrap:something`   | 1)pre-pending string, 2)appending string. if appending string is not supplied, pre-pending string will be used. |
| number              | `number:en_US:2   or number:en_US or number`    | 1)local, 2)decimal points |
| date                | `date:en_US:MMDDYY OR date:MMDDYY`              | 1)local, 2)format |
| json                | `json`                                          | NONE    |
| slice               | `slice 5:12 OR slice 5`                         | 1)from index, 2)to index |
| uppercase           | `uppercase`                                     | NONE    |
| lowercase           | `lowecase`                                      | NONE    |

![alt text](https://raw.githubusercontent.com/msalehisedeh/into-pipes/master/sample.png  "Commands and results")


where the attributes passed in above examples are defined as:

```javascript
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

### How to include font-awesome in your project?

In your project root folder, find and open the file 'angular-cli.json' in any editor 
Locate the styles[] array and add font-awesome references directory. like:

```javascript
"apps": 
	[
        {
            ....
            "styles": [
              "../node_modules/font-awesome/css/font-awesome.css"
              "styles.css"
            ],
            ...
        }
    ]
```