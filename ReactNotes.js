// -- Authorization in get body(request header) or as url parameter  
// --async/await in response : async in front of the function name and await in front of whatever is taking some time to return the value( network request/api call) and whatever is returned, assig that to some variable. Async/await with arrow function has a different syntax
// --key for every element in case of lists. Add key to the root element that you are returning
// --destructuring within curly braces in functional components
// --ref is a javascript object which has a current property which references a DOM node like to find client height.Can not use inside render. clientHeight 0 because of asynchronus call
// --const value KEY caps as it indicates it should not be changed
// --arrow function to pass on a parameter
// --parent from child :props, child to parent:callback

// ---------------------------------------REDUX------------------------------------------------------

// --Action creator returns plain js object .This object is called Action.Action has type and payload.
// Type is change in the data. Payload is some context around the change. So Action creator just creates the action.
// --Dispatch takes action and creates copies of that action and passes it off to the bunch of different places in our app.(Reducers)
// -- Reducers is a func take actions and some data.Makes changes and returns it to be centralized somewhere. That is STORE.Reducer Takes 2 argument, first old data related to that department & second, action. Reducer is a function which has no idea what the old data is unless it is called for the first time so oldListOfClaims=[]

// --The only way to change state inside our redux is action creator
// --Provider and Connect implemented by redux. We pass on some props to them in order to configure how they work.Store consists of all the reducers together. Provider takes store as the argument and renders at a very high level.Provider means it is providing information to all the other components in our app.Connect to know of the data that is stored in our app.Provider and Connect communicate now through props system but context system.Connect takes data from Provider and passes down to components as props

// --If you don't specify a file, webpack is gonna give index.js directly
// --to export multiple functions from a file, use named export

// --component after connect LIKE connect()()
// --mapStateToProps called with data in state paramenter and this func is passed to connect function.Second arguement to connect function is an object which is action creator(This sec arg does the work of dispatch func and we don't have to call dispatch separately within component) 
// --Action creator as many times as state.
// --action only makes its way to the reducer through dispatch
// --Dummy Reducers

// ----------------------------------------------MIDDLEWARES--------------------------------------------------------------------------------------
// --redux-thunk is a middleware which helps us make request in redux application
// --while using async/await with action creators to fetch data, it does not return plain js object as per the rules of action creators to redux-thunk
// --any middleware such as redux-thunk is related to action creator
// --whenever we send something(action),it will be dispatched to the middleware(redux-thunk) which will check whether it is an object or function.
// If function ,send to reducers else getState functions
// --12KA4Ratnapur@

















