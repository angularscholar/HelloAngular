Application starts in src/index.html from which component <b>app-root</b> is called

<h2>Components</h2>
Component <b>app-root</b> is defined in src/app/app.component.ts

<h2>Modules</h2>
Component <b>app-root</b> is registered under the root module <b>AppModule</b> in src/app/app.module.ts
First module is craeted in src/dummy/dummy.module.ts

<h2>Templates</h2>
Templates are configured from within @Component directive, and are more or less plan HTML code enhanced with Angular features
We can either use embeded templates, with option of using backtiks for multiline HTML, or reference HTML which is defined in separate file

Template is configured in src/app/app.component.ts and is defined in src/app/app.component.html

Special template features enables you to use data binding, evaluate expression, iterate over array, use conditions.
Even if allowed, using script tag from within Angular templates will be ignored.

<h2>Styling</h2>
Styles add CSS to HTML, and are configured from within @Component directive
We can either use embeded styles, with option of using backtiks for multiline CSS, or reference CSS which is defined in separate file
Styles inside component usually targets elements inside the component's template, in order to target styles in the element that hosts the component, use the :host pseudo selector
The default scope of a style is just the component itself, so it will not apply to another components inside of it

<h2>Routing</h2>
Routing allows us to navigate to a specific component by entering a url in the browser.
This is similar to what we can do with spring. In order to use routing we have to import and configure the Angular's RoutinghModule in our main module.

Wildcard is used to map all requests to a specific component.

<h2>Basic Auth</h2>
It's implemented in src/app/app.component.ts getToken() method, after successfully authorization
actuall call to Rest API is done.

<h2>Service</h2>
Typescript class decorated with @Injectable annotation which can be injected. That Service also needs to be declared either at component or module level under the providers section.
To inject a service as a dependecy into a class simply import it and declare it as a constructor argument.

<h2>Dependecy Injection</h2>
The act of injecting objects into other objests.
Dependency injection in Angular are singletons