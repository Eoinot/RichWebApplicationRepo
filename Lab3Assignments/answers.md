Q1 : Explain what is meant by the stream abstraction. What is the relationship between
streams and the observer pattern? What are streams useful for modeling and when
might you use them in Rich Web development?

A1 : A stream is abstract because it represents the idea of a source and destination data as opposed to concrete sources such as files and networks, This is extremely important for programmers as it allows inputs and outputs using the same methods over a large variety of sources and destinations. The main differences between streams and observer pattern are streams can only be used once while an observable can be subscribed too many time over.
Streams are useful in modelling if we have the problem of trying to access data that can live in a few remote locations. We might use them in rich web development if we want to reduce a stream processing issue by using a merged set of one or more data streams for example mouse clicks, keyboard input and DOM state changes, all of these can be processed within the same logical structure using the same semantics.

Q2 : Assume that you are building an interface to an API in your Rich Web App. Describe in
detail how you could use the RxJS library to handle asynchronous network responses to
API requests. In your opinion, what are the benefits to using a streams library for
networking over, say, promises? And what do you think are the downsides?

A2: In order to handle those api requests i would need to firstly install and import rxjs and make sure all libraries and packages are working correctly. Then I would need to create an Observable that is capable of handling the exact api requests that would be recieved. After creating this Observable i would need to make sure its subscribed to in order for it to begin working as otherwise no requests would be handled. This above should be enough to get and create a basic asyncronus api to fetch and handle incomming http requests.

Benifits:

1. Rxjs allows for a lot cleaner code base due to the reduced amount of code that is needed for the same functionality.
2. Rxjs is known for having its greate system for handling errors such as catchError which really helps the developer.
3. Rxjs can be used for a variety of different things not only for the above example for http api requests but also just basic user on screen event handling.

Downsides:

1. There is a really steep learning curve when using rxjs as even when reading the documenation is requires alot of videos to explain and understand even the basics
2. Even though Rxjs has alot of capabilities there may be no need for it in certain instances due to its complexity and therefore for smaller operations it may be more benifitial to use Promises or other alternatives
3. Rxjs is a large library and due to its size if your computer cannot handle the processing it may decrease the overall performance of the page

Q3 : Consider three asynchronous tasks, A,B & C. What are the consequences of these
functions sharing global state? What is a good practice to alleviate any problems
associated with this?

A3 : The first issue can occur if each thread is trying to access to read and write to the same piece of data this may cause the race problem. This is due to all 3 functions not all synchronizing all the data and therefore if one is trying to read the data while someone else is updating then it may read incorrect data and therefore not all the data will be the same throughout all 3 tasks.

The second issue occurs when testing is needed. As each tasks shares global state it may become difficult to isolate parts of the functions due to them all being dependant on the same main piece of code

The third problem is debugging even though its similar issue to second issue this relates to when you wish to find a problem and debug something that goes wrong in the codebase. Due to all the tasks sharing the same global state it may become difficult to identify which of the tasks is actually the problem.

Now for good practises to try and remove the above problems mentioned:

Firstly it would be best if global were not used at all and instead pass though the variables as parameters in the functions and return the values as needed therefore each tasks has their own results and will not be messing with the global.

Secondly if a global state is not needed then allow each task just to use their own local variables inside the function as the same as the one above it means that eash tasks are not interfering with eachothers tasks and variables and therefore no issues will be caused