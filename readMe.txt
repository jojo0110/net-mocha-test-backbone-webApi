Backbone + Asp.Net Web Api + mocha test

Introduce how to use mocha to do front end unit test

This project includes 3 components
1. Asp.Net Web API - Provide RESTFul service for CRUD data
2. Backbone Web application- Provide a 'todo' list  
3. Mocha test- a test project for testing front end web site

To see the demo
1. build project with vs2012 or higher
2. debug in IIS express to run web application
3. http://localhost:YourPortNumber/MochaTestBrowser/index.html to see test result

Notes
Mocha testing platform can be used  in the browser to test the front end js or used in node js environment for back end js unit test.
The key point to me is how we load the target js and it's dependences into our test file. 

If mocha is used in node environment, we can easily use 'module.exports' and 'require' to load the
target js and it's dependences into our test file.

However, if mocha is not in the node env. For example, we need to unit test the front end backbone js. We have to 
consider how we load the third party js such as jQuery, underscore into our test file.

Some people use 'require.js'. which require we add code such as 'define' and 'require' on our target files
However, since we can insert mocha and our test file in the browser, which means after browser load the dependence files
our test file can call these dependence as module without adding any code.
Which make the unit test become more easier.

However, unit test setting become easier doesn't mean testing code become easier too.
The more organized front end js structure it is, the more easy to test it. Testing engineer always hope the target code  can be organized and pattern well. In order to achieve the goal of the 'structured front-end code', I think the first thing for developer should be add the 'name space' on every module.

another thing remind here, The testing might still failed eventhough the function performing well. so if the browser console
has js error report, we should always fix it first.
Thanks


The original backbone source is from todomvc
The original web api source is from spaDemo

 




