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

#

![alt text](https://raw.githubusercontent.com/msalehisedeh/into-pipes/master/sample.png  "Commands and results")


