# Welcome to InTo Pipes!

Have you ever wanted transforms values in different parts of your application into interactive objects without writing a single line of code? 
This library provides few Angular4 pipes that are all used by a single **InTo** pipe component/directive. **InTo** will determine how the object value should be formatted based on meta-data formatting rules?
Moreover, **"InTo"** can be customized by adding custom formatters **into** it!!

**Note:** If you decide to use the **InTo** pipes instead of the directive, you need to make sure you will pipe the result **into** sanitizeHtml.

**Note:** When you create tags and insert them **into** DOM at runtime through **InTo** Pipes, angular will not be able to enforce CSS rules on the tags. In that case the workaround is to use **::ng-deep** in your CSS. For example, if img tage is created through image pipe under a DIV with class "something", then you need to declare attributes in `::ng-deep .something img{ }` in order to have control over img tag.

**Note:** Starting from version 2.0.0, this library is compatible with Angular 6+.

You are definitely welcome to submit additional pipes and formatting rules to this library and I will gladly incorporate your ideas **InTo** this project. Add your comments an requests through the link provided below.

[Live Demo](https://into-pipes.stackblitz.io) | [Source code](https://github.com/msalehisedeh/into-pipes) | [Comments/Requests](https://github.com/msalehisedeh/into-pipes/issues)

# Fratures
* Responsive
* Formats your data to interactive component
* ADA Compliant

| Format              | Description                                                                  | 
|---------------------|------------------------------------------------------------------------------|
| calendar            | For a given source, will provide interactive date picker. if the source is an array of dates or date strings, the date picker will be multi-select. Otherwise it will be a single select. When selecting a date, an event will be triggered. You will be responsile to catch the change event and update date(s) in your data source. |
| like                | For a given source, will provide interactive like/dislike links. With like/dislike, an event is triggered after user clicks on it. You will be responsile to catch the event and increment or decrement the count in your data source. |
| lastupdate          | For a given source, will provide a natural larguage human readable elapsed time.               |
| share               | For a given source, will provide social share buttons.                        |
| video               | For a given source, will convert a link source into an interactive video tag. |
| select              | For a given source, will provide a select options tag through special service that knows how to provide options based on supplied data. You will be responsile to catch the change event and update data in your data source.   |
| inputgroup          | For a given source, will provide a list of radio or checkbox tags through special service that knows how to provide options based on supplied data. If the source is a list, options are checkbox. Otherwise, options are radio buttons. You will be responsile to catch the change event and update data in your data source.   |
| input               | For a given source, will provide an interactive input tag that will become active when user clicks on it. Otherwise a plain text content will be displayed. You will be responsile to catch the change event and update data in your data source.   |
| checkbox            | For a given source, will provide an interactive checkbox. You will be responsile to catch the change event and update date(s) in your data source. |
| join                | For a given source array, will join array elements into one single delianated string.    |
| sanitizeHtml        | Will bypass security checks agains CORS in a URL.                             |
| if                  | Will execute transformation based on a if else logic.                         |
| email               | Will format the source into a mail link.                                      |
| address             | Will format an address structure into an standard address display.            |
| rating              | For a given source, will provide ranking value of a source through stars.     |
| font                | Will take a source into a font awesome representation.                        |
| valueof             | Will travers through a JSON path and display its value.                       |
| mask                | Will mask sensative characters.                                               |
| image               | Will take a source URL into an image tag.                                     |
| link                | Will transforn a source into a link tag.                                      |
| map                 | Will conver a source URL into a map.                                          |
| currency            | Will conver a source into a currency.                                         |
| append              | Will append a string to source.                                               |
| prepend             | Will prepend a string to source.                                              |
| wrap                | Will wrap source with given strings.                                          |
| number              | Will format a number into a formatted number.                                 |
| date                | Will format the source date.                                                  |
| json                | Will format JSON into read-able source.                                       |
| slice               | Will suck a  portion of source out of it.                                     |
| uppercase           | Will uppercase the source.                               |
| lowercase           | Will lowercase the source.                               |


# Revision History

## varsion 2.0.0
Updated dependencies to become compatible with Angular 6+.

## varsion 1.8.0
Added inputgroup transformation. Sometimes, you need to display a range of options in radio buttons or checkbox buttons.  If the source is a list, options are displayed in checkbox list. otherwise, the list will be radio buttons. 

## varsion 1.7.5
Made all interactive components emit the same `{id, name, value, item}` event. However, select component will spew two more `selected, action` attributes.

## varsion 1.7.0
Added date picker transformation code. I included and modified code snippet provided by [ben tedder](https://gist.github.com/bentedder/136fa7670a8a23617f91be4f9566f96b). Could not use his code directly, as I had to make many adjustments to make it fit within pipe environment.

## varsion 1.6.6
internal fix on select transform to prevent event bubbling when clicked on or when changed selection.

## varsion 1.6.5
Modified Select service interface to have the owner data set passed on to it.  Consider a case of displaying dropdowns in a table row. If one dropdown is for state and another for countries, then both dropdowns are interchangably depend on each other. As a result, the service representing dropdown has to have access to the data set for the entire row in order to return correct set of options for each dropdown item.

## varsion 1.6.0
Fixed ADA related issue with input, checkbox, and share components.

## Version 1.5.0
Added LIKE and LASTUPDATE formatters. With like/dislike, an event is triggered after user clicks on it. You will be responsile to catch the event and increment or decrement the count in your data source.

## Version 1.4.1
Calling console.error() if applying a custom rule when the custom component for it is not registered.

## Version 1.4.0
Added an interactive share social sites component.

## Version 1.3.8
Fixed the firing event on interactive input component. Event will fire after the input value is changed and a tab, return, or escape key is pressed. After the event is fired, input field will revert back to a plain text.

## Version 1.3.8
Modified all pipe components to accept one more argument allowing you to have additional data when you are formatting data. Consider a case when you are formatting data in a table row. You may need to format based on some attributes from other columns and would need to have ability to access the data for the enite row.  By passing data to a **intoData** attribute, your custom component will have access to the data and you can gain great flexibility formatting a particular tabel cell. **NOTE:** Standard pipes will not have access to "intoData" object. If you have not created custom pipe components on previous vesions, you will have no issue upgrading to this vesion. However, if you have created custom components, you will have to take note of new parameter passed to your component (please pay attention to the 'PipeComponent' interface presented in this page).

## Version 1.3.7
Compiled with AOT option and resolved issues.

## Version 1.3.3
Added Video pipe... Now you can pipe a URL **into** video tag.

## Version 1.2.0
Fixed a few logic issues and added event emit to the directive. Added into select option. You are now able to pipe a value **into** a select tag. But you will need to register a service that knows how to provide select options for a given attribute. And this service has to implement PipeServiceComponent.


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
	getDataFor(name, id, data);
}
```

## Version 1.1.0
Added ability for you to declare a custom pipe. You will need to create your own custom component for it and register the component as was explained on release 1.0.0.

Also, updated custom component declaration process. You will need to make sure your component has id and name attributes as well as source attribute. also, if your component interacts with user actions and as a result its value is changed, you will need to emit event as i have updated the code sample for version 1.0.0.

## Version 1.0.0
Added a directive to enable morphing values into form fields!! Provisions is in place if you wish to format the values into a custom field. For those to happen, you will need to create your component and register it.


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

    transform(source: any, data: any, args: any[]) {
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

You can still continue formatting with existing pipes using InTo directive. However, Email, Address, Font, Image, JSON, Link, and Rating formatters will insert actual components in the end resulting html. This means in the next release, I can add interactions with these components and add editable date component to format and edit the values when user interacts with the fields. To allow you to come up with nifty formatters that can interact with users, in future release, I will add possibility of customizing formatting tags as well.

## Version 0.3.0
Internally changed code to apply transformation to all items in the array if source is an array.


## Version 0.2.2
A new Conditional Pipe is added to display content based on condition applicable to the source value. 


```javascript
NOTE: 
    In the Conditional pipe:
        "~" is for exist (check to see if transforming object exist and item 2 is ignored).
        "~=" is for equal ignore case.
        "!~" is for do not exist (check to see if transforming object is null or undefined exist and item 2 is ignored).
        "!=" is to evaluate if transforming object is not equal to value.
        "in" is to get indexof value in the transforming object
```

## Version 0.0.1

font awesome dependency is added because few of the pipes are injecting nodes with font awesome names to create a better UI effects.

In Addition code in "into" pipe is modified to allow for cascading pipes by escaping ':' character if is inside quotes. For example **date:"MM/dd/yyyy hh:ss"** will be parsed into an array argument of 
**date, MM/dd/yyyy hh:ss**


## Version 0.0.0
Created Pipes.


# Module,Pipes,  Components, and Directive

```javascript
MODULE:
    IntoPipeModule

EXPORTS
    JoinPipe
    InToPipe
    ImagePipe
    VideoPipe
    LinkPipe
    MaskPipe
    MapPipe
    PrependPipe
    AppendPipe
    WrapPipe
    ValueOfPipe
    EmailPipe
    RatingPipe
    FontPipe
    ConditionalPipe
    AddressPipe
    SanitizeHtmlPipe

    IntoDirective
    ComponentPool

    AddressComponent
    EmailComponent
    FontComponent
    ImageComponent
    VideoComponent
    JsonComponent
    LinkComponent
    InputComponent
    CheckboxComponent
    RatingComponent
    SelectComponent
    SpanComponent
    ShareComponent
    LikeComponent
    LastUpdateComponent
	
DEPENDENCIES: 
    "font-awesome": "^4.7.0"
```

**NOTE: For all of the pipes, if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned. in case of conditional pipe, a resulting map will be returned.**


| Format              | Examples                                          | Arguments                  | 
|---------------------|---------------------------------------------------|----------------------------|
| calendar            | `calendar:MM/dd/yyyy`                             | 1) date format. if the transformation source is an array of dates or date strings, the calendar will be multi-select calendar. Otherwise it will be a single select calendar.  |
| like                | `like:true:true:id`                               | 1) flag to indicate if like counts should be displayed. 2) flag to show likes or dislikes. 3) Attribute in JSON oject with unique value to be used for traking likes or dislikes. |
| lastupdate          | `lastupdate:true`                                 | 1) flag to indicate if time icon should be displayed on the side. |
| share               | `share:facebook:linkedin:google:twitter`          | 1) list of any one of supported sites (facebook, linkedin, google, twitter, pinterest, digg, xing, get-pocket, stumbleupon) |
| video               | `video:200px:auto:alt text` OR `video`            | 1) width, 2)height, 3) alternate text to be displayed |
| select              | `select:true` OR `select`                         |  1) if it is multi-select. Except it requires implementation of PipeServiceComponent registered with  ComponentPool    |
| inputgroup          | `inputgroup`                                      |  NONE. Except it requires implementation of PipeServiceComponent registered with  ComponentPool    |
| input               | `input:placeholder:formatting,`                   |  1) place holder text or blank, 2) formatting rules for the value to be displayed when text field is not editable    |
| checkbox            | `checkbox:idealvalue:useIcon`                     |  1) the value for which checkbox should be checked, 2)if it is standard checkbox or should use fonts to display checked or not checked.  |
| join                | `join:,`                                          |  1) the characters used to join the list     |
| sanitizeHtml        | `sanitizeHtml`                                    |  NONE  (This pipe is not used by into pipe) |
| if                  | `'masoud' | into: "if:=:masoud:\"font:fa fa-check:left:*\":\"font:fa fa-bell:left:*\""` |  1)condition `=,!=,~=,<,>,~,!~,in` , 2)value to be evaluated, 3)action, 4)else action |
| email               | `email`                                           | NONE                        |
| address             | `address`                                         | NONE                        |
| rating              | `rating`                                          | NONE                        |
| font                | `font:fa fa-check:left:*`                         | 1)class, 2)position (left,right,replace, 3) action (*:use content) |
| valueof             | `valueof:key`                                     | 1) key to be used                           |
| mask                | `mask:4:*  OR mask:4`                             | 1) last # number of characters to mask, 2) masking character |
| image               | `image:200px:auto:alt text` OR `image`            | 1) width, 2)height, 3) alternate text to be displayed |
| link                | `link:text OR link`                               | 1)text to be displayed in the link |
| map                 | `map:a;x/b;y/c;z`                                 | 1)take a source as a key and returns value of key from the given map argument |
| currency            | `currency:en_US or currency`                      | 1)local |
| append              | `append:something`                                | 1)appending string |
| prepend             | `prepend:something`                               | 1)pre-pending string |
| wrap                | `wrap:something:something  OR wrap:something`     | 1)pre-pending string, 2)appending string. if appending string is not supplied, pre-pending string will be used. |
| number              | `number:en_US:2   or number:en_US or number`      | 1)local, 2)decimal points |
| date                | `date:en_US:MMDDYY OR date:MMDDYY`                | 1)local, 2)format |
| json                | `json`                                            | NONE    |
| slice               | `slice 5:12 OR slice 5`                           | 1)from index, 2)to index |
| uppercase           | `uppercase`                                       | NONE    |
| lowercase           | `lowecase`                                        | NONE    |



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