# Welcome to InTo Pipes!

Have you ever wanted to transform values in different parts of your application into interactive objects without writing a single line of code? 

This library provides few Angular pipes that are all used by an **InTo** pipe or directive. 

**InTo** will determine how the object value should be formatted based with meta-data formatting rules!!
Moreover, **"InTo"** can be customized by adding custom formatters **into** it!

Most of all, this library is truly extendible. It is allowing you to include any portion of it as you see fit for your application!! You can use all pipes and components that are available, or pick and choose only from those that you want to use in your application without adding un-necessary components which could contribute to your application size. (for details of how it can be done, read more.)

**Note:** If you want interactive pipes, you should use into pipe directive in order to have fully ADA compliant component and get the benefit of keyboard events handled by into components. If you decide to use the **InTo** pipes instead of the directive. In addition, you need to make sure you will pipe the result **into** sanitizeHtml.

**Note:** When you create tags and insert them **into** DOM at runtime through **InTo** Pipes, angular will not be able to enforce CSS rules on the tags. In that case the workaround is to use **::ng-deep** in your CSS. For example, if img tag is created through image pipe under a DIV with class "something", then you need to declare attributes in `::ng-deep .something img{ }` in order to have control over img tag.
**Note:** Starting from version 2.0.0, this library is compatible with Angular 6+.

**NOTE:** Starting with version 2.1.1 you need to import this library through @sedeh/into-pipes.

You are definitely welcome to submit additional pipes and formatting rules to this library and I will gladly incorporate your ideas **InTo** this project. Add your comments an requests through the link provided below.

[Live Demo](https://stackblitz.com/edit/into-pipe?file=src%2Fapp%2Fapp.component.ts) | 
[NPM](https://www.npmjs.com/package/@sedeh/into-pipes) |
[Comments/Requests](https://github.com/msalehisedeh/into-pipes/issues)

## Features
* Responsive
* Formats your data to interactive component
* ADA Compliant
* Extendible

## Dependencies and Components
ALL modules for specific pipes and components are exported. To pick and choos, CommonPipesModule has to be imported; and on top of that any one of the modules  can be imported in your application as needed. 

```javascript
MODULE:
    CommonPipesModule // Required if you want to pick and choose from different modules.
    IntoPipeModule    // Imports all modules and pipes

EXPORTS from CommonPipesModule
    InToPipe
    IntoDirective
    PipeComponentInterface
    PipeServiceComponentInterface
    ComponentPool
    
DEPENDENCIES: 
    "font-awesome": "^4.7.0"
```

## Design system
Create a css file with the following and modify its value to fit your application needs. Then include it in root of application css file.

```javascript
:root {
    --sedeh-marker-color: #fabdab;
    --sedeh-disabled-color: #888;
    --sedeh-margin: 0 5px;
    --sedeh-margin-right: 5px;
    --sedeh-margin-left: 5px;
    --sedeh-margin-bottom: 5px;
    --sedeh-padding: 5px;
    --sedeh-padding-top: 5px;
    --sedeh-padding-bottom: 5px;
    --sedeh-min-width: 25px;
    --sedeh-min-height: 25px;
    --sedeh-sected-color: green;
    --sedeh-disapproved-color: red;
    --sedeh-hover-opacity: 0.5;
    --sedeh-box-shadow: 3px 3px 3px #999;
    --sedeh-solid-border: 1px solid #fabdab;
    --sedeh-caption-color:  #1b1b1b;
    --sedeh-caption-background-color:  #c3e5e2;
    --sedeh-notice-color: white;
    --sedeh-notice-background-color: rgb(4, 159, 255);
}
```

## Interfaces
```javascript
export interface PipeComponentInterface {
	source: any;
	id: string;
	name: string;
	service?:PipeServiceComponentInterface;
	onIntoComponentChange: EventEmitter<any>;
	
    // implementations should implement static settingsPatterns() method that returns pattern that trigger instantiation
	transform(content: any, data: any, args?: any[]);
}

export interface PipeServiceComponentInterface {
	getDataFor(name, id, data);
}
```
## Directive 

| Attribute  | Description                                                      |
|------------|------------------------------------------------------------------|
| rawContent | Raw data to be operated on.                                      |
| intoId     | Id to be used for the component in use.                          |
| intoName   | name for the component in use.                                   |
| intoData   | data to be operated on.                                          |
| into       | Type of InTo operation to be executed.                           |


| Event             | Description                                               |
|-------------------|-----------------------------------------------------------|
| onComponentChange | fired when pipe component change happen through user interaction. |

## Module, Pipes, and Components

**NOTE: For all of the pipes, if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned. in case of conditional pipe, a resulting map will be returned.**

## Independent Directives

### Address Format Directive
| Name       | address                                                          |
|------------|------------------------------------------------------------------|
| Exports    | AddressIntoPipeModule, AddressComponent, AddressPipe             |
| Depends On | CommonPipesModule                                                |
| Description| Will format an address structure into an standard address display. |
| Options    | 1) In a Link or not                                              |
|            | 2) should google map be viewed on the same page or pop a new page for it.  |
| Example 1  | [rawContent]="myaddress" intoId="my-address-id"                  |
|            | [into]="'address:true:true'" intoName="my-address-directive"     |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Examples 2 | `myaddress | into:'address:true:true'`                           |


### Audio Directive
| Name       | audio                                                            |
|------------|------------------------------------------------------------------|
| Exports    | AudioIntoPipeModule, AudioComponent, AudioPipe                   |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will convert a link source into an interactive audio tag. |
| Options    | NONE                                                             |
| Example 1  | [rawContent]="myAudioUrl" [into]="'audio'"                       |
|            | intoName="my-audio-directive" intoId="my-audio-id"               |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `myAudioUrl | into:audio`                                        |


### Calendar Directive
| Name       | calendar                                                         |
|------------|------------------------------------------------------------------|
| Exports    | CalendarIntoPipeModule, CalendarComponent                        |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide interactive date picker. if the source is an array of dates or date strings, the date picker will be multi-select. Otherwise it will be a single select. When selecting a date, an event will be triggered. You will be responsible to catch the change event and update date(s) in your data source. |
| Options    | 1) date format. if the transformation source is an array of dates or date strings, the calendar will be multi-select calendar. Otherwise it will be a single select calendar. |
| Example 1  | [rawContent]="myPickDate" [into]="'calendar:MM/dd/yyyy'"         |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [validate]="validate"                                            |
|            | intoId="my-calendar-id" intoName="my-calendar-directive"         |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Checkbox Directive
| Name       | checkbox                                                         |
|------------|------------------------------------------------------------------|
| Exports    | CheckboxIntoPipeModule, CheckComponent                           |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide an interactive check-box. You will be responsible to catch the change event and update date(s) in your data source. |
| Options    | 1) state to determine if checked                                 |
|            | 2) state to determine in not checked.                            |
|            | 3) if it is standard check-box or should use fonts to display checked or not checked. |
|            | 3) if to show it as switch on / off.                             |
| Example 1  | [rawContent]="'yes'" [into]="'checkbox:yes:true'"                |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | intoName="my-checkbox-directive" intoId="my-checkbox-id"         |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Email Directive
| Name       | email                                                            |
|------------|------------------------------------------------------------------|
| Exports    | EmailIntoPipeModule, EmailComponent, EmailPipe                   |
| Depends On | CommonPipesModule                                                |
| Description| Will format the source into a mail link.                         |
| Options    | 1) In a Link or not                                              |
| Example 1  | [rawContent]="myEmailAddress" [into]="'email:true'"              |
|            | intoName="my-email-directive" intoId="my-email-id"               |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `myEmailAddress |  into:'email:false'`                           |


### Font Awesome Directive
| Name       | font                                                             |
|------------|------------------------------------------------------------------|
| Exports    | FontIntoPipeModule, FontComponent, FontPipe                      |
| Depends On | CommonPipesModule                                                |
| Description| Will take a source into a font awesome representation.           |
| Options    | 1) class                                                         |
|            | 2) position (left,right,replace                                  |
|            | 3) action (*:use content)                                        |
| Example 1  | [rawContent]="'3423423422'" [into]="'font:fa fa-check:replace:*'"|
|            | intoId="my-awesome-id"  intoName="my-awesome-directive"          |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `myValue | into:'font:fa fa-check:left:*'`                       |


### Image Display Directive
| Name       | image                                                            |
|------------|------------------------------------------------------------------|
| Exports    | ImageIntoPipeModule, ImageComponent, ImagePipe                   |
| Depends On | CommonPipesModule                                                |
| Description| Will take a source URL into an image tag. If zoom is set, you can have magnified image popped out or stay within the image boundaries. |
| Options    | 1) optional width                                                |
|            | 2) optional height                                               |
|            | 3) optional alternate text to be displayed                       |
|            | 4) optional magnify by number on hover available only for intoDiretive  |
|            | 5) optional pop on hover (top, left, right, bottom)              |
| Example 1  | [rawContent]="myImageUrl" [into]="'image:200px:auto:alt          |
|            | text:6:true'" intoName="my-image-directive" intoId="my-image-id" |
|            | [active]="true"                                                  |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `myImageUrl | into:'image:width:height:alt text:magnify:pop-hover'` |


### Input Directive
| Name       | input                                                            |
|------------|------------------------------------------------------------------|
| Exports    | InputIntoPipeModule, InputComponent                              |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide an interactive input tag that will become active when user clicks on it. Otherwise a plain text content will be displayed. You will be responsible to catch the change event and update data in your data source. Interactive input component will fire event after the input value is changed and a tab, return, or escape key is pressed. After the event is fired, input field will revert back to a plain text. |
| Options    | 1) place holder text or blank                                    |
|            | 2) formatting rules for the value to be displayed when text field is not editable |
|            | 3) optional lock field in editable mode                          |
| Example 2  | [into]="'input:enter number:mask:locked'" rawContent]="'red'"    |
|            | intoName="input-directive" intoId="input-id"                     |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [validate]="validate"                                            |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Input Group Directive
| Name       | inputgroup                                                       |
|------------|------------------------------------------------------------------|
| Exports    | InputGroupIntoPipeModule, InputGroupComponent                    |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide a list of radio or check-box tags through special service that knows how to provide options based on supplied data. If the source is a list, options are check-box. Otherwise, options are radio buttons. You will be responsible to catch the change event and update data in your data source. |
| Options    | NONE. Requires implementation of DirectiveServiceComponentInterface registered with  ComponentPool |
| Example 2  | [rawContent]="'red'" [into]="'inputgroup'"                       |
|            | intoName="group1-directive" intoId="group1-id"                   |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### JSON Format Directive
| Name       | json                                                             |
|------------|------------------------------------------------------------------|
| Exports    | JsonIntoPipeModule, JsonComponent                                |
| Depends On | CommonPipesModule                                                |
| Description| Will format JSON into read-able source.                          |
| Options    | NONE                                                             |
| Example 1  | [rawContent]="myJson"  [into]="'json'"                           |


### Last Update Directive
| Name       | lastupdate                                                       |
|------------|------------------------------------------------------------------|
| Exports    | LastUpdateIntoPipeModule, LastUpdateComponent                    |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide a natural language human readable elapsed time. |
| Options    | 1) flag to indicate if time icon should be displayed on the side.|
| Example 1  | [rawContent]="myLastUpdatedDate" [into]="'lastupdate:true'"      |


### Social Like Directive
| Name       | like                                                             |
|------------|------------------------------------------------------------------|
| Exports    | LikeIntoPipeModule, LikeComponent                                |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide interactive like/dislike links. With like/dislike, an event is triggered after user clicks on it. You will be responsible to catch the event and increment or decrement the count in your data source. |
| Options    | 1) optional flag to indicate if like counts should be displayed. |
|            | 2) optional flag to show likes or dislikes.                      |
|            | 3) Attribute in JSON object with unique value to be used for tracking likes or dislikes. |
| Example 1  | [rawContent]="dataSet.likes" [intoData]="dataSet"                |
|            | [into]="'like:true:true:id'" intoId="myLikes" intoName="like"    |
|            | [active]="true"                                                  |
|            | [validate]="validate"                                            |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Link Directive
| Name       | link                                                             |
|------------|------------------------------------------------------------------|
| Exports    | LinkIntoPipeModule, LinkComponent, LinkPipe                      |
| Depends On | CommonPipesModule                                                |
| Description| Will transform a source into a link tag.                         |
| Options    | 1) on click target - blank if none                               |
|            | 2) text to be displayed in the link - blank if none              |
|            | 3) optional hover pop a viewer - available only on inTo directive|
| Example 1  | [rawContent]="myLinkUrl" [into]="'link:true:my image:true'"      |
|            | intoName="my-link-directive" intoId="my-link-id"                 |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `myLinkUrl | into:'link:_top:my image'`                          |


### Notice Directive
| Name       | notice                                                           |
|------------|------------------------------------------------------------------|
| Exports    | NoticeIntoPipeModule, NoticeComponent, NoticePipe                |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide a notice / notification reminder. You will be responsible to catch the change event and update data in your data source. |
| Options    | 1) show hover message                                            |
| Example 1  | [rawContent]="5" [into]="'notice:You have unread messages'"      |
|            | intoName="my-alerts" intoId="my-alerts-id"                       |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `myCounter | into:'notice:You have unread messages'`             |


### Phone Format Directive
| Name       | phone                                                            |
|------------|------------------------------------------------------------------|
| Exports    | PhoneIntoPipeModule, PhoneComponent, PhonePipe                   |
| Depends On | CommonPipesModule                                                |
| Description| Will format a phone number and display it in standard way.       |
| Options    | 1) In a Link or not                                              |
|            | 2) format or not                                                 |
| Example 1  | [rawContent]="'+1 976 888 7645 3454'" [into]="'phone:true:true'" |
|            | intoName="my-phone" intoId="my-phone-id"                         |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `'+1 976 888 7645 3454' | into:'phone:false:true'`               |


### Social Rating Directive
| Name       | rating                                                           |
|------------|------------------------------------------------------------------|
| Exports    | RatingIntoPipeModule, RatingComponent, RatingPipe                |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide ranking value of a source through stars. |
| Options    | 1) show count with single star                                   |
| Example 1  | [rawContent]="'3.5'" [into]="'rating'" intoName="my-rating"      |
|            | intoId="my-rating-id"                                            |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `'3.5' | into:'rating:true'`                                     |


### Select Directive
| Name       | select                                                           |
|------------|------------------------------------------------------------------|
| Exports    | SelectIntoPipeModule, SelectComponent                            |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide a select options tag through special service that knows how to provide options based on supplied data. You will be responsible to catch the change event and update data in your data source. |
| Options    | 1) if it is multi-select. Requires implementation of PipeServiceComponentInterface registered with  ComponentPool |
|            | 2) lock the dropdown in editmode                                 |
| Example 1  | [rawContent]="'xyz@gmail.com'" intoName="select1"                |
|            | [active]="true"                                                  |
|            | [validate]="validate"                                            |
|            | [disabled]="false"                                               |
|            | intoId="select1-id" [into]="'select'"                            |
|            | [onComponentChange]="onComponentChange.bind(this)"               |

### Slider Directive
| Name       | slider                                                           |
|------------|------------------------------------------------------------------|
| Exports    | SliderIntoPipeModule, SliderComponent                            |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide an interactive range slider. You will be responsible to catch the change event and update date(s) in your data source. |
| Options    | 1) length of slider                                              |
|            | 2) true if vertical slider                                       |
|            | 3) true if show range                                            |
|            | 4) min value                                                     |
|            | 5) max value                                                     |
| Example 1  | [rawContent]="33" [into]="'slider:150:false:true:0:100'"         |
|            | intoName="my-slider-directive" intoId="my-slider-id"             |
|            | [active]="true"                                                  |
|            | [validate]="validate"                                            |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Social Share Directive
| Name       | share                                                            |
|------------|------------------------------------------------------------------|
| Exports    | ShareIntoPipeModule, ShareComponent                              |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide social share buttons.           |
| Options    | 1) list of any one of supported sites (facebook, linkedin, google, twitter, pinterest, digg, xing, get-pocket, stumbleupon) |
| Example 1  | [rawContent]="'http://thiswebsite.com/thispage/thisarticle'"     |
|            | [into]="'share:facebook:linkedin:google:twitter'"                |
|            | intoName="my-share" intoId="my-shareid"                          |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Span Directive
| Name       | span                                                             |
|------------|------------------------------------------------------------------|
| Exports    | SpanIntoPipeModule, SpanComponent                                |
| Depends On | CommonPipesModule                                                |
| Description| Wraps a given source in a span tag.                              |
| Options    | NONE                                                             |
| Examples   | [rawContent]="my text to be wrapped" [into]="'span'"             |


### Switch Directive
| Name       | switch                                                           |
|------------|------------------------------------------------------------------|
| Exports    | SwitchIntoPipeModule, SwitchComponent                            |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, display on/off switch.                       |
| Options    | 1) the value for which check-box should be checked               |
|            | 2) text to show on state                                         |
|            | 3) text to show off state.                                       |
| Example 1  | [rawContent]="'yes'" [into]="'switch:yes:on:off'"                |
|            | intoName="my-switch" intoId="my-switchid"                        |
|            | [active]="true"                                                  |
|            | [validate]="validate"                                            |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Table Directive
| Name       | table                                                            |
|------------|------------------------------------------------------------------|
| Exports    | TableIntoPipeModule, TableComponent, TablePipe                   |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will convert source into an table tag. This is a crude table display. If you want a fully fledged interactive table, you should go for @sedeh/flexible-table. |
| Options    | 1) optional ID                                                   |
|            | 2) optional caption                                              |
| Example 1  | [rawContent]="myJson"  [into]="'table:myJsonId:My JSON Items'"   |
| Example 2  | `myJsonData | into:'table:myId:my caption'`                      |


### Textarea Directive
| Name       | text                                                             |
|------------|------------------------------------------------------------------|
| Exports    | TextIntoPipeModule, TextComponent                                |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will provide an interactive text area tag that will become active when user clicks on it. Otherwise a plain text content will be displayed. You will be responsible to catch the change event and update data in your data source. |
| Options    | 1) optional rows                                                 |
|            | 2) optional max limits                                           |
|            | 3) optional show counter                                         |
|            | 4) lock fieldc in editable mode                                  |
| Example 1  | [rawContent]="'this is a test for a large text input.'"          |
|            | [into]="'text:4:123:true'" intoName="myText" intoId="textId"     |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Toggler Directive
| Name       | text                                                             |
|------------|------------------------------------------------------------------|
| Exports    | TogglerPipeModule, TogglerComponent                              |
| Depends On | CommonPipesModule                                                |
| Description| display icon and toggle it on click.                             |
| Options    | 1) optional name of the toggler                                  |
|            | 2) optional icon to display on normal state                      |
|            | 3) optional icon to display on toggled state                     |
| Example 1  | [intoData]="{}"                                                  |
|            | [into]="'toggler:toggler:fa fa-thumbs-down:fa fa-thumbs-up"      |
|            | [active]="true"                                                  |
|            | [validate]="validate"                                            |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |


### Video Directive
| Name       | video                                                            |
|------------|------------------------------------------------------------------|
| Exports    | VideoIntoPipeModule, VideoComponent, VideoPipe                   |
| Depends On | CommonPipesModule                                                |
| Description| For a given source, will convert a link source into an interactive video tag. |
| Options    | 1) optional width. Use auto if need to specify options 2,3,...   |
|            | 2) optional height. Use auto if need to specify options 3,4,...  |
|            | 3) optional alternate text to be displayed. Use '-' if need to specify options 4,5 |
|            | 4) optional hasControls to include video controls. Default is true. |
|            | 5) optional hoverPlay to ply video on hover. Default is false.
| Example 1  | [into]="'video:200px:auto:alt text:false:true'" intoName="video 1"|
|            | [rawContent]="myVideoURL" intoId="video1-id"                     |
|            | [active]="true"                                                  |
|            | [disabled]="false"                                               |
|            | [onComponentChange]="onComponentChange.bind(this)"               |
| Example 2  | `myVideoUrl | into:'video:200px:auto:alt text'`                  |

## Common Pipes

### Append Pipe
| Name       | append                                                           |
|------------|------------------------------------------------------------------|
| Exports    | AppendPipe                                                       |
| Exported by| CommonPipesModule                                                |
| Description| Will append a string to source.                                  |
| Options    | 1) appending string                                              |
| Example 1  | `'xyz' | into:'append:*'`                                        |


### Conditional If Else Pipe
| Name       | if                                                               |
|------------|------------------------------------------------------------------|
| Exports    | ConditionalPipe                                                  |
| Exported by| CommonPipesModule                                                |
| Description| Will execute transformation based on a if else logic.            |
| Options    | 1) condition `=,!=,~=,<,>,~,!~,in`                               |
|            | 2) value to be evaluated                                         |
|            | 3) action                                                        |
|            | 4) optional else action                                          |
| Conditions | "~" is for exist (check to see if transforming object exist and item 2 is ignored). |
|            | "~=" is for equal ignore case.                                   |
|            | "!~" is for do not exist (check to see if transforming object is null or undefined exist and item 2 is ignored). |
|            | "!=" is to evaluate if transforming object is not equal to value.|
|            | "in" is to get indexof value in the transforming object.         |
| Example 1  | `'masoud' | into: "if:=:masoud:\"font:fa fa-check:left:*\":\"font:fa fa-bell:left:*\""` |


### Join Pipe
| Name       | join                                                             |
|------------|------------------------------------------------------------------|
| Exports    | JoinPipe                                                         |
| Exported by| CommonPipesModule                                                |
| Description| For a given source array, will join array elements into one single delineated string. |
| Options    | 1) the characters used to join the list                          |
| Example 1  | `myDateList | into:myDateFormat | into:'join: , '`               |


### Map Pipe
| Name       | map                                                              |
|------------|------------------------------------------------------------------|
| Exports    | MapPipe                                                          |
| Exported by| CommonPipesModule                                                |
| Description| Will convert a source into a map.                                |
| Options    | 1) take a source as a key and returns value of key from the given map argument |
| Example 1  | `'key1;value1/key2;value2/key3;value3' | into:map`               |


### Mask Sensitive content Pipe
| Name       | mask                                                             |
|------------|------------------------------------------------------------------|
| Exports    | MaskPipe                                                         |
| Exported by| CommonPipesModule                                                |
| Description| Will mask sensitive characters.                                  |
| Options    | 1) last # number of characters to mask                           |
|            | 2) optional masking character                                    |
| Example 1  | `mySSN | into:'mask:4:*'`                                        |


### Prepend Pipe
| Name       | prepend                                                          |
|------------|------------------------------------------------------------------|
| Exports    | PrependPipe                                                      |
| Exported by| CommonPipesModule                                                |
| Description| Prepends a string to source.                                     |
| Options    | 1) pre-pending string                                            |
| Example 1  | `'xyz' | into:'prepend:*'`                                       |


### Sanitize HTML Pipe
| Name       | sanitizeHtml                                                     |
|------------|------------------------------------------------------------------|
| Exports    | AanitizeHtmlPipe                                                 |
| Exported by| CommonPipesModule                                                |
| Description| Will bypass security checks against CORS in a URL.               |
| Options    | NONE (This pipe is not used by into pipe)                        |
| Example 1  | `'xyz' | into:'prepend:*' | sanitizeHtml`                        |


### ValueOf Pipe
| Name       | valueof                                                          |
|------------|------------------------------------------------------------------|
| Exports    | ValueOfPipe                                                      |
| Exported by| CommonPipesModule                                                |
| Description| Will traverse through a JSON path and display its value.         |
| Options    | 1) key to be used                                                |
| Example 1  | `myJson | into:'valueof:birthday'`                               |


### Wrap Pipe
| Name       | wrap                                                             |
|------------|------------------------------------------------------------------|
| Exports    | WrapPipe                                                         |
| Exported by| CommonPipesModule                                                |
| Description| Will wrap source with given strings.                             |
| Options    | 1) pre-pending string                                            |
|            | 2) appending string. if appending string is not supplied, pre-pending string will be used. |
| Example 1  | `'xyz' | into:'wrap:*'`                                          |


## Angular/Common Pipes
  
### Currency Format Pipe
| Name       | currency                                                         |
|------------|------------------------------------------------------------------|
| Exports    | CurrencyPipe                                                     |
| Exported by| CommonPipesModulesModule                                         |
| Description| Will convert a source into a currency.                           |
| Options    | 1) optional local                                                |
| Example 1  | `'25' | into:'currency:en_US'`                                   |

### Lowercase Pipe
| Name       | lowercase                                                        |
|------------|------------------------------------------------------------------|
| Exports    | LowerCasePipe                                                    |
| Exported by| CommonPipesModulesModule                                         |
| Description| Will lower-case the source.                                      |
| Options    | NONE                                                             |
| Example 1  | `'TRY THIS' | into:'lowercase'`                                  |


### Number Format Pipe
| Name       | number                                                           |
|------------|------------------------------------------------------------------|
| Exports    | DecimalPipe                                                      |
| Exported by| CommonPipesModulesModule                                         |
| Description| Will format a number into a formatted number.                    |
| Options    | 1) optional local                                                |
|            | 2) optional decimal points                                       |
| Example 1  | `'25.34537664' | into:'number:en_US:2`                           |


### Date Format Pipe
| Name       | date                                                             |
|------------|------------------------------------------------------------------|
| Exports    | DatePipe                                                         |
| Exported by| CommonPipesModulesModule                                         |
| Description| Will format the source date.                                     |
| Options    | 1) optional local                                                |
|            | 2) optional format                                               |
| Example 1  | `myDate | into:'date:en_US:MMDDYY'`                              |
| Example 2  | `myDate | into:'date:MMDDYY'`                                    |


### Slice and dice Pipe
| Name       | slice                                                            |
|------------|------------------------------------------------------------------|
| Exports    | SlicePipe                                                        |
| Exported by| CommonPipesModulesModule                                         |
| Description| Will suck a  portion of source out of it.                        |
| Options    | 1) from index                                                    |
|            | 2) optional to index                                             |
| Example 1  | `'slice this text for me' | into:'slice:4:8'`                    |


### Uppercase Pipe
| Name       | uppercase                                                        |
|------------|------------------------------------------------------------------|
| Exports    | UppercasePipe                                                    |
| Exported by| CommonPipesModulesModule                                         |
| Description| Will upper-case the source.                                      |
| Options    | NONE                                                             |
| Example 1  | `'try this' | into:'uppercase'`                                  |


### Json Pipe
| Name       | uppercase                                                        |
|------------|------------------------------------------------------------------|
| Exports    | JsonPipe                                                         |
| Exported by| CommonPipesModulesModule                                         |
| Description| Will format JSON into read-able source.                          |
| Options    | NONE                                                             |
| Example 1  | `myData | into:json`                                             |


## Usage Examples

### Sample usage of directives

```javascript
    // intoName, intoId, intoData, and onComponentChange are optional
	<td scope="row" 
        [rawContent]="item.ssn"
        [into]="input:mask"
        [intoName]="SSN"
        [intoId]="'ssn-' + i"
        [intoData]="{x:'something',y:'whatever'}"
        [onComponentChange]="onTableCellEdit.bind(this)"></td>
```

### Sample on how to import parts of this library

```javascript
    // lets say you only want video and audio pipes and nothing else
    // then **instead of importing IntoPipeModule**, you would need to 
    // only import the following:
@NgModule({
  imports: [
    ...
    CommonPipesModule.forRoot(),   // absolutely necessary
    AudioIntoPipeModule.forRoot(), // as needed
    VideoIntoPipeModule.forRoot(), // as needed
    ...
  ],
  declarations: [
      ...
  ],
  exports: [
      ...
  ],
  entryComponents: [
      ...
  ],
  providers: [
      ...
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyApplicationModule {
}

```

### Sample registration for a service to be used by a pipe component

```javascript
	// You will have to make sure to add your custom service in NgModel of your 
	// application under providers.
	constructor(private pool: ComponentPool, private myService: MySelectService) {
		this.pool.registerServiceForComponent("select", myService);
	}
```


### Sample creating a Custom pipe component

```javascript
import { Component, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from 'into-pipes';

@Component({
    selector: 'my-custom-component',
    template: `html tags for custom component here`,
    styles: [
        `css classes for custom component here
        `
    ]
})
export class MyCustomInputComponent implements PipeComponentInterface {
    source: string;
    name: string;
    id: string;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

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

// Registering my custom component. You will have to make sure 
// to add your custom component in NgModel of your application 
// under declarations and entryComponents.

import { ComponentPool } from 'into-pipes';

my component definition ....

constructor(private pool:ComponentPool) {
    this.pool.registerComponent("input", MyCustomInputComponent);
}
```
### Sample creating a Custom pipe

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'donifty' })
export class MyCustomPipe implements PipeTransform {
    static transformationMethod() {
		// lambda is not allowed on static methods. 
		// you need to declare function() and return it.
		// classical function declarations only.
        const x = function (content: any, args: string[], callback?: any, data?: any) {
            // append:something
            return new MyCustomPipe().transform(content, args.length > 1 ? args[1] : ""); 
        };
        return x;
    }
    transform(source: any, ...args: any[]): any {    
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            // do something
			return doSomething(source);
        } else {
            const result = [];
            source.map((item) => {
                result.push(doSomething(item));
            });
            return result;
        } 
    }
	private doSomething(item) {
		return stringSomeString;
	}
}

// You will then need to register your pipe
constructor(private pool: ComponentPool) {
    pool.registerPipeTransformation('donifty', MyCustomPipe.transformationMethod());
}
```

### Custom component registration API
```javascript
	// register a pipe
	registerPipeTransformation (name: string, pipe: any)
	registeredForPipeTransformationNamed(key: string)
	registeredPipeTransformation(key: string, content: any, args: string[], callback?: any, data?: any)
	removePipeTransformation (key: string)

	// register a pipe component
	registerComponent (name, component: any)
	removeComponent (name)
	registeredComponent(name): any

	// register a service to be accessed by a pipe component
	registerServiceForComponent (name, service: any)
	removeServiceForComponent (name)
	registeredServiceForComponent(name): any
```

# Revision History

| Version |                                                                                                          |
|---------|----------------------------------------------------------------------------------------------------------|
| 4.5.0   | Added Design system to allow for easy modification of styling of into components.                        |
| 4.4.4   | fixed checkbox logic by adding one more parameter in arguments to specify alternate atate.               |
| 4.4.3   | Updated logic that determines presence of arguments in a pipe or component.                                           |
| 4.4.2   | change call from deprecated angular method and added method to identify setting options on transformation comnponents.|
| 4.4.0   | Enhancements to allow for directived to disabled or validated.                                           |
| 4.3.1   | Updating toggler.                                                                                        |
| 4.3.0   | Added toggler.                                                                                           |
| 4.2.0   | fixed hit return on text and input components. made input default to 100% parent in locked mode.         |
| 4.1.0   | fixed issue with transformation if into value is undefined or not registered.                            |
| 4.0.0   | Updated to Angular 15.                                                                                   |
| 3.0.0   | Updated to Angular 8.                                                                                    |
| 2.3.18  | Updated this documentation.                                                                              |
| 2.3.17  | overloading check box to display switch is not a good idea as a switch needs to display on or off state. As a result, created a switch pipe.  |
| 2.3.16  | Added Slider pipe component. You can now pipe a value to a slider. Also, modified check box to allow display of on / off switch instead of check mark.  |
| 2.3.15  | Updated into directive to insert a 'into' class for every component it creates. This can be used in CSS by parent components as a venue to manipulate any of into components. |
| 2.3.14  | Lack of explicit default selected option on select pipe component was causing print error when used in table. |
| 2.3.13  | Added css for printing component pipes.                                                                  |
| 2.3.12  | Added css for printing component pipes.                                                                  |
| 2.3.11  | Reduced min heigh applied to pipe components.                                                            |
| 2.3.10  | Looks like I copied wrong file for calendar fixed code to my deployment directory.                       |
| 2.3.9   | Fixed calendar component to show selected date on initial display.                                       |
| 2.3.7   | Added one more keyboard handling for video.                                                              |
| 2.3.6   | Unified attribute names in emitted events. Added keyboard handling for video and audio tags.             |
| 2.3.5   | Updated documentation.                                                                                   |
| 2.3.4   | Updated documentation.                                                                                   |
| 2.3.3   | Realized I am missing some key event handling for input group, notice, rating, and text pipes.           |
| 2.3.2   | added pop on hover for image pipe. if zoom is set, you can have magnified image popped out or stay within the image boundaries. |
| 2.3.1   | added zoom on hover for image pipe to view the magnified image on hover within the image boundaries.     |
| 2.3.0   | Added notice pipe. allowing link to pop image on hover. allowing rating click to issue event and optionally show only one star. |
| 2.2.12  | Updated angular code.                                                                                    |
| 2.2.11  | Updated CSS to manage text area.                                                                         |
| 2.2.10  | Added minimum with to view area for text pipe when it is empty.                                          |
| 2.2.9   | Added text pipe.                                                                                         |
| 2.2.8   | Updated documentation.                                                                                   |
| 2.2.7   | Added table pipe.  |
| 2.2.6   | Added key events to interactive pipes for a better ADA complacency. Added event trapping on all interactive components and updated existing event handling of audio / video with detailed track information. |
| 2.2.5   | Audio pipe was not able to handle array of references.                                                   |
| 2.2.4   | Was missing exports of some components.                                                                  |
| 2.2.3   | NPM was not able to find this document. Re-deploying it again.                                           |
| 2.2.2   | Was missing exports of some components.                                                                  |
| 2.2.1   | Had issue running version 2.2.0 on stackblitz.                                                           |
| 2.2.0   | Revamped internal structure to make this library truly extendible. You can now take all pipes or components or selectively pick those that you need for your application and prevent your application size growing for components that you would not need in your application. |
| 2.1.5   | Updated documentation.                                                                                   |
| 2.1.4   | Did a clean up of CSS code to display adequate spaces between things. Added options to address and email to be displayed with or without link. Added audio pipe. |
| 2.1.3   | Fixed display issues and re-organized the library in hope of breaking it into smaller chunks to allow you take only the parts you need out of this library and avoid the whole thing taking up space when not needed. Now you should be able to import only `CommonPipesModule` if you do not need directive or components.|
| 2.1.2   | Enhanced interactive component by displaying hover interaction. Added phone pipe.                        |
| 2.1.1   | Updated dependencies.                                                                                    |
| 2.1.0   | It was brought to my attention that some users have trouble using my components in their angular 6 environment. Since I had only updated few dependencies when moved to Angular 6, I am thinking dependencies are causing issues. So, for this release, I am updating all dependencies to what Angular 6 applications are expecting to have. Please let me know if this is fixing or not fixing any issues you are facing. |
| 2.0.0   | Updated dependencies to become compatible with Angular 6+.                                               |
| 1.8.0   | Added inputgroup transformation. Sometimes, you need to display a range of options in radio buttons or check-box buttons.  If the source is a list, options are displayed in check-box list. otherwise, the list will be radio buttons.  |
| 1.7.5   | Made all interactive components emit the same `{id, name, value, item}` event. However, select component will spew two more `selected, action` attributes. |
| 1.7.0   | Added date picker transformation code. I included and modified code snippet provided by [Ben Tedder](https://gist.github.com/bentedder/136fa7670a8a23617f91be4f9566f96b). Could not use his code directly, as I had to make many adjustments to make it fit within pipe environment. |
| 1.6.6   | internal fix on select transform to prevent event bubbling when clicked on or when changed selection.    |
| 1.6.5   | Modified Select service interface to have the owner data set passed on to it.  Consider a case of displaying drop-downs in a table row. If one drop-down is for state and another for countries, then both drop-downs are interchangeably depend on each other. As a result, the service representing drop-down has to have access to the data set for the entire row in order to return correct set of options for each drop-down item. |
| 1.6.0   | Fixed ADA related issue with input, check-box, and share components.                                     |
| 1.5.0   | Added LIKE and LASTUPDATE formatters. With like/dislike, an event is triggered after user clicks on it. You will be responsible to catch the event and increment or decrement the count in your data source. |
| 1.4.1   | Calling console.error() if applying a custom rule when the custom component for it is not registered.    |
| 1.4.0   | Added an interactive share social sites component.                                                       |
| 1.3.9   | Fixed the firing event on interactive input component. Event will fire after the input value is changed and a tab, return, or escape key is pressed. After the event is fired, input field will revert back to a plain text. |
| 1.3.8   | Modified all pipe components to accept one more argument allowing you to have additional data when you are formatting data. Consider a case when you are formatting data in a table row. You may need to format based on some attributes from other columns and would need to have ability to access the data for the entire row.  By passing data to a **intoData** attribute, your custom component will have access to the data and you can gain great flexibility formatting a particular table cell. **NOTE:** Standard pipes will not have access to "intoData" object. If you have not created custom pipe components on previous versions, you will have no issue upgrading to this version. However, if you have created custom components, you will have to take note of new parameter passed to your component (please pay attention to the 'PipeComponentInterface' interface presented in this page). |
| 1.3.7   | Compiled with AOT option and resolved issues.                                                            |
| 1.3.3   | Added Video pipe... Now you can pipe a URL **into** video tag.                                           |
| 1.2.0   | Fixed a few logic issues and added event emit to the directive. Added into select option. You are now able to pipe a value **into** a select tag. But you will need to register a service that knows how to provide select options for a given attribute. And this service has to implement PipeServiceComponentInterface.  |
| 1.1.0   | Added ability for you to declare a custom pipe. You will need to create your own custom component for it and register the component as was explained on release 1.0.0. Also, updated custom component declaration process. You will need to make sure your component has id and name attributes as well as source attribute. also, if your component interacts with user actions and as a result its value is changed, you will need to emit event as I have updated the code sample for version 1.0.0. |
| 1.0.0   | Added a directive to enable morphing values into form fields!! Provisions is in place if you wish to format the values into a custom field. For those to happen, you will need to create your component and register it. You can still continue formatting with existing pipes using InTo directive. However, Email, Address, Font, Image, JSON, Link, and Rating formatters will insert actual components in the end resulting html. This means in the next release, I can add interactions with these components and add editable date component to format and edit the values when user interacts with the fields. To allow you to come up with nifty formatters that can interact with users, in future release, I will add possibility of customizing formatting tags as well. |
| 0.3.0   | Internally changed code to apply transformation to all items in the array if source is an array.         |
| 0.2.2   | A new Conditional Pipe is added to display content based on condition applicable to the source value.    |
| 0.0.1   | Font awesome dependency is added because few of the pipes are injecting nodes with font awesome names to create a better UI effects. In Addition code in "into" pipe is modified to allow for cascading pipes by escaping ':' character if is inside quotes. For example **date:"MM/dd/yyyy hh:ss"** will be parsed into an array argument of **date, MM/dd/yyyy hh:ss** |
| 0.0.0   | Initial Release.                                                                                         |


![alt text](https://raw.githubusercontent.com/msalehisedeh/into-pipes/master/sample.png  "Commands and results")


**NOTE:** Attributes passed in represented image above are defined as:

```javascript
  threeFive = 3.5;
  myJson= {q:3,w:43,dw:6565};
  myPickDate = new Date();
  myDate = "2018-03-10T01:01:20Z";
  myDateList = ["2018-03-10T01:01:20Z", "2011-02-12T01:01:20Z"];
  myDateFormat="date:\"MM/dd/yyyy hh:ss\"";
  theURL = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?h=350&auto=compress&cs=tinysrgb";
  videoURL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
  audioURL = "https://google.github.io/tacotron/publications/tacotron2/demos/gan_or_vae.wav";

  myConditionalLogic = "if:=:masoud:\"font:fa fa-check:left:*\":\"font:fa fa-bell:left:*\"";
  myConditionalThreeFive = "if:>:3:\"font:fa fa-check:replace\":\"font:fa fa-bell:replace\"";

  myLastUpdatedDate = new Date(Date.now() - 640000);

  dataSet = {
    id: 3453453453,
    likes: 10,
    dislikes: 5
  }
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

## How to include font-awesome in your project?

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