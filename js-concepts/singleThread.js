/**
 * How JavaScript works as a single thread?
 * ----------------------------------------
 * JS is single threaded which means it has 1 call stack and 1 mem heap
 * 
 * JS engine (v8, spidermonkey) has WebAPI that handles async tasks.
 * JS call stack recognizes the web api and handles them the task.
 * Once those tasks are finished they are pushed back to the call stack.
 * 
 * The WebAPI handles these tasks by using task queue and event loop.
 * 
 * Event loop is just some piece of code in a loop that picks up tasks from job queue
 * and sends them back to v8 engine.
 * 
 * 
 *            JS                          WebAPI
 * 
 *        Heap  Stack
 *        |  |  |   |               | DOM/ settimeout |   
 * 
 * 
 * 
 *      Eventloop (checks JS stack and job queue )
 * 
 *      Callback queue (Job queue)     
 * 
 */
