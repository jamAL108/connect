In recent years, serverless architecture has revolutionized the way developers build and deploy applications , they offer many benefits to teams and organizations that use them well.  <br/>

In this article, we’ll look at how serverless functions work, how they can be used and how they can help your organization.

## What is the term serverless ?
Although "serverless" word might imply the absence of servers, the hardware still exists. 
The term "serverless" describes a service level abstraction aimed at benefiting developers. 
In this model, the responsibility for managing and operating the environment transfers from the user to the cloud provider.
This allows developers to concentrate entirely on writing code, while the cloud provider takes care of managing and provisioning the infrastructure.


To use serverless functions, all a developer has to do is write the function code and deploy it to a managed environment. A typical serverless function process would look like this:<br/>
**Writing a function.** Developers create a function for a specific job by just uploading the code onto the cloud, functions like handling form submissions or user logins.<br/>
**Defining an event.** They specify what triggers the function, like when someone clicks a button or changes data in a database.<br/>
**Triggering an event.** Users do something, like clicking a button, to make the function start running.<br/>
**Deploying and executing a function.** When the event happens, the cloud service provider starts running the function to do its job.<br/>
**Passing the result to the client.** Whatever the function does, like calculating something or getting data, it sends the result back to the app for the user to see.<br/>

Initially the server will be in sleep state , once it got triggered it gets activated and completes the request made from user and again goes to sleep state .

## Monolith vs Serverless Architecture
Lets consider Monolith as AWS EC2 instance and Serverless function as AWS Lambda , inorder to deploy your app into EC2 instance you have to do alot of setup ,
like setting up operating system , choosing a right instances , applying load balancer , API gateway and many more.  <br/>
On the other hand cloud provider will automatically do all these things for you , it will allocate the memory which best suits your project and sets all configuration automatically .<br/>

Another big advantage is AWS charge money for Lambda instance based on number of request made and for every month AWS provides 1 miilion request of Instance free as of 2024 May .
![image](https://github.com/jamAL108/connect/assets/115083239/6fc6034b-0173-4536-9f43-b943c7dbe489)
You can we the pricing in the above image , `$0.20 per 1M requests` is the chargers once the free quota ends for month.

on the other hand EC2 charges hour based , if your app in up and running for 24/7 then it will charge a bumper amount , ypu can check out EC@ pricing from this site 
[EC2 pricing](https://instances.vantage.sh/)

AWS lambda charges for what you use , it is based on requests your app receives but EC2 will charge even if your app has ZERO traffic as its just running. <br/>


## Challenges of Serverless
**Cold Start Latency:** Initial request to a serverless function can experience delay due to container startup.
**Vendor Lock-In:** Dependence on a specific cloud provider’s ecosystem can make migration challenging.
**Limited Execution Time:** Functions often have execution time limits, which may not be suitable for long-running processes.

For a backend Application , we have to connect with our DB , if we deploy our app into AWS lambda then for every request and for each time the new connection with DB will be created ,
as Lambda instance have a cold start . on the other hand EC2 instance will be running continously it will create only one DB connection and it will maintained until the next new build.


In conclusion, the choice between monolithic and serverless architectures ultimately depends on the specific needs and goals of your application. While monolithic architectures offer simplicity and familiarity, serverless architectures provide unparalleled flexibility, scalability, and cost-efficiency in today's dynamic cloud environment.

By understanding the key differences and trade-offs between these two approaches, developers can make informed decisions to architect robust and resilient applications that meet the demands of modern software development.


