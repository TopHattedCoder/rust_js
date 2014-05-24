var searchIndex = {};
searchIndex['script'] = {"items":[[0,"","script","A Javascript Parser / Interpreter library"],[0,"ast","","The Abstract Syntax Tree module"],[1,"Expr","script::ast","A Javascript Expression, including position data"],[11,"def","","The expression definition",0],[11,"start","","The starting position",0],[11,"end","","The ending position",0],[1,"Position","","A position in Javascript source code"],[11,"column_number","","The column number",1],[11,"line_number","","The line number",1],[1,"Token","","A single of token of Javascript code including the position"],[11,"data","","The token",2],[11,"pos","","The token's position",2],[2,"Const","","A Javascript Constant"],[12,"CString","","A UTF-8 string",3],[12,"CRegExp","","A regular expression",3],[12,"CNum","","A 64-bit floating-point number",3],[12,"CInt","","A 32-bit integer",3],[12,"CBool","","A boolean",3],[12,"CNull","","Null",3],[12,"CUndefined","","The infamous value returned when you access a non-existent field",3],[2,"NumOp","","An operation between 2 values"],[12,"OpAdd","","Add them togther",4],[12,"OpSub","","Subtract the second from the first",4],[12,"OpDiv","","Divide the first by the second",4],[12,"OpMul","","Multiply them together",4],[12,"OpMod","","Get the modulus of a number and another",4],[2,"UnaryOp","","An operation on a single value"],[12,"UnaryIncrement","","Unary increment (++) with the bool being true if it is before the variable",5],[12,"UnaryDecrement","","Unary decrement (--) with the bool being true if it is before the variable",5],[12,"UnaryMinus","","Unary minus operator on a number or variable",5],[12,"UnaryNot","","Unary not",5],[2,"BitOp","","A bitwise operation"],[12,"BitAnd","","Bitwise and",6],[12,"BitOr","","Bitwise or",6],[12,"BitXor","","Bitwise xor",6],[12,"BitShl","","Bitwise shift left",6],[12,"BitShr","","Bitwise shift right",6],[2,"CompOp","","A comparison operation between two values"],[12,"CompEqual","","If they represent the same value or similar values",7],[12,"CompNotEqual","","If they represent distinct values",7],[12,"CompStrictEqual","","If they represent the same value",7],[12,"CompStrictNotEqual","","If they represent very distinct values",7],[12,"CompGreaterThan","","If the first is greater than the second",7],[12,"CompGreaterThanOrEqual","","If the first is greater than or equal to the second",7],[12,"CompLessThan","","If the first is less than the second",7],[12,"CompLessThanOrEqual","","If the first is less than or equal to the second",7],[2,"LogOp","","A logical operation between two booleans"],[12,"LogAnd","","Logical and",8],[12,"LogOr","","Logical or",8],[2,"BinOp","","Any operation between two values"],[12,"BinNum","","A numeric operation",9],[12,"BinBit","","A bitwise operation",9],[12,"BinComp","","A comparitive operation",9],[12,"BinLog","","A logical operation",9],[2,"ExprDef","","A Javascript Expression"],[12,"BinOpExpr","","Run a operation between two expressions",10],[12,"UnaryOpExpr","","Run an operation on an expression",10],[12,"ConstExpr","","Make a simple value",10],[12,"BlockExpr","","Run several expressions",10],[12,"LocalExpr","","Load a reference to a value",10],[12,"GetConstFieldExpr","","Gets the cosntant field of the expression",10],[12,"GetFieldExpr","","Gets the field of an expression",10],[12,"CallExpr","","Call a function with some arguments",10],[12,"WhileLoopExpr","","Repeatedly run an expression while the conditional expression resolves to true",10],[12,"IfExpr","","Check if a conditional expression is true and run an expression if it is and another expression if it isn't",10],[12,"SwitchExpr","","Run blocks whose cases match the expression",10],[12,"ObjectDeclExpr","","Create an object",10],[12,"ArrayDeclExpr","","Create an array with items inside",10],[12,"FunctionDeclExpr","","Create a function with the given name, arguments, and expression",10],[12,"ArrowFunctionDeclExpr","","Create an arrow function with the fiven arguments and expression",10],[12,"ConstructExpr","","Construct an object from the function and arguments given",10],[12,"ReturnExpr","","Return the expression from a function",10],[12,"ThrowExpr","","Throw an expression",10],[12,"AssignExpr","","Assign an expression to another expression",10],[12,"TypeOfExpr","","Return a string representing the type of the given expression",10],[2,"TokenData","","A single token of Javacript code - a single word, symbol or constant"],[12,"TString","","A string literal",11],[12,"TSemicolon","","A semicolon (;)",11],[12,"TColon","","A colon",11],[12,"TDot","","A dot / full stop",11],[12,"TEqual","","An equal sign",11],[12,"TComma","","A comma",11],[12,"TIdent","","An identity literal",11],[12,"TOpenParen","","An opening bracket",11],[12,"TCloseParen","","A closing bracket",11],[12,"TOpenBlock","","An opening curly bracket",11],[12,"TCloseBlock","","An closing curly bracket",11],[12,"TOpenArray","","An opening square bracket",11],[12,"TCloseArray","","A closing square bracket",11],[12,"TNumber","","A 64-bit floating-point number",11],[12,"TQuestion","","A question mark",11],[12,"TArrow","","An arrow",11],[12,"TBinOp","","An operation between two values",11],[12,"TUnaryOp","","A unary operation",11],[12,"TAssignOp","","An assign operation combined with something else",11],[12,"TComment","","A comment",11],[6,"GetPrecedence","","A trait that allows the type to have its precedence found"],[9,"get_precedence","","Get the precedence",12],[10,"eq","","",3],[10,"ne","","",3],[10,"clone","","",3],[10,"fmt","","",3],[10,"eq","","",4],[10,"ne","","",4],[10,"clone","","",4],[10,"fmt","","",4],[10,"eq","","",5],[10,"ne","","",5],[10,"clone","","",5],[10,"fmt","","",5],[10,"eq","","",6],[10,"ne","","",6],[10,"clone","","",6],[10,"fmt","","",6],[10,"eq","","",7],[10,"ne","","",7],[10,"clone","","",7],[10,"fmt","","",7],[10,"eq","","",8],[10,"ne","","",8],[10,"clone","","",8],[10,"fmt","","",8],[10,"eq","","",9],[10,"ne","","",9],[10,"clone","","",9],[10,"get_precedence","","",9],[10,"fmt","","",9],[10,"eq","","",0],[10,"ne","","",0],[10,"clone","","",0],[10,"new","","Create a new expression with a position",0],[10,"fmt","","",0],[10,"eq","","",1],[10,"ne","","",1],[10,"clone","","",1],[10,"new","","Create a new position",1],[10,"eq","","",10],[10,"ne","","",10],[10,"clone","","",10],[10,"get_precedence","","",10],[10,"fmt","","",10],[10,"clone","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"new","","Create a new detailed token from the token data, line number and column number",2],[10,"fmt","","",2],[10,"clone","","",11],[10,"eq","","",11],[10,"ne","","",11],[10,"fmt","","",11],[0,"lexer","script","The lexing module"],[1,"Lexer","script::lexer","The Javascript Lexer"],[11,"tokens","","The list of tokens generated so far",13],[11,"ident_buffer","","The string buffer for identities",13],[11,"string_buffer","","The string buffer for strings",13],[11,"comment_buffer","","The string buffer for comments",13],[11,"num_buffer","","The string buffer for numbers",13],[11,"string_start","","The kind of string - i.e. double quote or single quote or none if it isn't in a string",13],[11,"current_comment","","The kind of comment",13],[11,"current_number","","The kind of number",13],[11,"escaped","","If a backwards slash has just been read",13],[11,"line_number","","The current line number",13],[11,"column_number","","The current column number",13],[11,"buffer","","The reader",13],[11,"peek_buffer","","The peeked character buffer",13],[2,"StringType","","The type of string used"],[12,"DoubleQuote","","Double-quoted",14],[12,"SingleQuote","","Single-quoted",14],[2,"CommentType","","The type of comment used"],[12,"MultiLineComment","","Multi-line comment",15],[12,"SingleLineComment","","Single-line comment",15],[2,"NumberType","","The type of number used"],[12,"DecimalNumber","","Decimal number",16],[12,"HexadecimalNumber","","Hexadecimal number",16],[12,"OctalNumber","","Octal number",16],[10,"clone","","",14],[10,"eq","","",14],[10,"ne","","",14],[10,"fmt","","",14],[10,"clone","","",15],[10,"eq","","",15],[10,"ne","","",15],[10,"fmt","","",15],[10,"fmt","","",16],[10,"eq","","",16],[10,"ne","","",16],[10,"clone","","",16],[10,"new","","Creates a new lexer with empty buffers",13],[10,"lex_str","","Processes an input stream from a string into an array of tokens",13],[10,"lex","","Processes an input stream from a BufferedReader into an array of tokens",13],[0,"parser","script","The parsing module"],[1,"Parser","script::parser","A Javascript parser"],[11,"tokens","","The tokens being input",17],[11,"pos","","The current position within the tokens",17],[2,"ParseError","","An error encountered during parsing an expression"],[12,"Expected","","When it expected a certain kind of token, but got another as part of something",18],[12,"ExpectedExpr","","When it expected a certain expression, but got another",18],[4,"ParseResult","",""],[4,"ParseStructResult","",""],[10,"clone","","",18],[10,"eq","","",18],[10,"ne","","",18],[10,"fmt","","",18],[10,"new","","Creates a new parser, using [tokens] as input",17],[10,"parse_all","","Parse all expressions in the token array",17],[10,"parse","","Parse a single expression",17],[0,"exec","script","The execution module"],[1,"Interpreter","script::exec","An intepreter"],[11,"global","","An object representing the global variables",19],[11,"scopes","","The scopes",19],[6,"Executor","","An execution engine"],[9,"new","","Makes a new execution engine",20],[9,"set_global","","Sets a global variable",20],[9,"get_global","","Gets a global variable",20],[9,"make_scope","","Make a new scope",20],[9,"destroy_scope","","Destroy the current scope",20],[9,"run","","Runs the expression",20],[10,"clone","","",19],[10,"new","","",19],[10,"set_global","","",19],[10,"get_global","","",19],[10,"make_scope","","",19],[10,"destroy_scope","","",19],[10,"run","","",19],[0,"js","script","The javascript core library module"],[0,"value","script::js","Contains the Javascript value"],[2,"ValueData","script::js::value","A Javascript value"],[12,"VNull","","`null` - A null value, such as the `parentNode` of a newly created HTML Element",21],[12,"VUndefined","","`undefined` - An undefined value, such as `{}.children`",21],[12,"VBoolean","","`boolean` - A `true` / `false` value, for if a certain criteria is met",21],[12,"VString","","`String` - A UTF-8 string, such as `\"hello\"`",21],[12,"VNumber","","`Number` - A 64-bit floating point number, such as `-1293.0625`",21],[12,"VInteger","","`Number` - A 32-bit integer, such as `0x5f3759df`",21],[12,"VObject","","`Object` - An object, such as `Math`, represented by a binary tree of string keys to javascript values",21],[12,"VFunction","","`Function` - A runnable block of code, such as `Math.sqrt`, which can take some variables and return a useful value or act upon an object",21],[3,"from_value","","A utility function that just calls FromValue::from_value"],[3,"to_value","","A utility function that just calls ToValue::to_value"],[4,"ResultValue","","The result of a Javascript expression is represented like this so it can succeed (`Ok`) or fail (`Err`)"],[4,"Value","","A Garbage-collected Javascript value as represented in the interpreter"],[6,"ToValue","","Conversion to Javascript values from Rust values"],[9,"to_value","","Convert this value to a Rust value",22],[6,"FromValue","","Conversion to Rust values from Javascript values"],[9,"from_value","","Convert this value to a Javascript value",23],[10,"clone","","",21],[10,"new_obj","","Returns a new empty object",21],[10,"is_object","","Returns true if the value is an object",21],[10,"is_undefined","","Returns true if the value is undefined",21],[10,"is_null","","Returns true if the value is null",21],[10,"is_null_or_undefined","","Returns true if the value is null or undefined",21],[10,"is_double","","Returns true if the value is a 64-bit floating-point number",21],[10,"is_true","","Returns true if the value is true",21],[10,"to_num","","Converts the value into a 64-bit floating point number",21],[10,"to_int","","Converts the value into a 32-bit integer",21],[10,"get_prop","","Resolve the property in the object",21],[10,"get_field","","Resolve the property in the object and get its value, or undefined if this is not an object or the field doesn't exist",21],[10,"get_field_slice","","Resolve the property in the object and get its value, or undefined if this is not an object or the field doesn't exist",21],[10,"set_field","","Set the field in the value",21],[10,"set_field_slice","","Set the field in the value",21],[10,"set_prop","","Set the property in the value",21],[10,"set_prop_slice","","Set the property in the value",21],[10,"from_json","","Convert from a JSON value to a JS value",21],[10,"fmt","","",21],[10,"eq","","",21],[10,"to_json","","",21],[10,"add","","",21],[10,"sub","","",21],[10,"mul","","",21],[10,"div","","",21],[10,"rem","","",21],[10,"bitand","","",21],[10,"bitor","","",21],[10,"bitxor","","",21],[10,"shl","","",21],[10,"shr","","",21],[10,"not","","",21],[0,"function","script::js","Functions"],[1,"RegularFunction","script::js::function","Represents a regular javascript function in memory"],[11,"object","","The fields associated with the function",24],[11,"expr","","This function's expression",24],[11,"args","","The argument names of the function",24],[1,"NativeFunction","","Represents a native javascript function in memory"],[11,"object","","The fields associated with the function",25],[11,"data","","The callable function data",25],[2,"Function","","A Javascript function"],[12,"NativeFunc","","A native javascript function",26],[12,"RegularFunc","","A regular javascript function",26],[3,"_create","","Create a new `Function` object"],[3,"init","","Initialise the global object with the `Function` object"],[4,"NativeFunctionData","",""],[10,"clone","","",26],[10,"call","","Call a function with some arguments",26],[10,"clone","","",24],[10,"new","","Make a new regular function",24],[10,"clone","","",25],[10,"new","","Make a new native function with the given function data",25],[0,"object","script::js","Contains the Javascript object"],[1,"Property","script::js::object","A Javascript property"],[11,"configurable","","If the type of this can be changed and this can be deleted",27],[11,"enumerable","","If the property shows up in enumeration of the object",27],[11,"writable","","If this property can be changed with an assignment",27],[11,"value","","The value associated with the property",27],[11,"get","","The function serving as getter",27],[11,"set","","The function serving as setter",27],[3,"make_object","","Create new object"],[3,"get_proto_of","","Get the prototype"],[3,"set_proto_of","","Set the prototype"],[3,"define_prop","","Define the property"],[3,"to_string","","To string"],[3,"has_own_prop","","Check if it has a property"],[3,"_create","","Create a new `Object` object"],[3,"init","","Initialise the `Object` object on the global object"],[4,"ObjectData","",""],[5,"PROTOTYPE","",""],[5,"INSTANCE_PROTOTYPE","",""],[10,"clone","","",27],[10,"new","","Make a new property with the given value",27],[10,"to_value","","",27],[10,"from_value","","",27],[0,"array","script::js","Contains the Javascript array"],[3,"make_array","script::js::array","Create new array"],[3,"_create","","Create a new `Array` object"],[3,"init","","Initialise the global object with the `Array` object"],[0,"console","script::js","The global console object"],[3,"log","script::js::console","Print a javascript value to the standard output stream"],[3,"error","","Print a javascript value to the standard error stream"],[3,"_create","","Create a new `console` object"],[3,"init","","Initialise the global object with the `console` object"],[0,"math","script::js","The global math object"],[3,"abs","script::js::math","Get the absolute value of a number"],[3,"acos","","Get the arccos of a number"],[3,"asin","","Get the arcsine of a number"],[3,"atan","","Get the arctangent of a number"],[3,"atan2","","Get the arctangent of a numbers"],[3,"cbrt","","Get the cubic root of a number"],[3,"ceil","","Get lowest integer above a number"],[3,"cos","","Get the cosine of a number"],[3,"exp","","Get the power to raise the natural logarithm to get the number"],[3,"floor","","Get the highest integer below a number"],[3,"log","","Get the natural logarithm of a number"],[3,"max","","Get the maximum of several numbers"],[3,"min","","Get the minimum of several numbers"],[3,"pow","","Raise a number to a power"],[3,"_random","","Generate a random floating-point number between 0 and 1"],[3,"round","","Round a number to the nearest integer"],[3,"sin","","Get the sine of a number"],[3,"sqrt","","Get the square root of a number"],[3,"tan","","Get the tangent of a number"],[3,"_create","","Create a new `Math` object"],[3,"init","","Initialise the `Math` object on the global object"],[0,"json","script::js","The global JSON object"],[3,"parse","script::js::json","Parse a JSON string into a Javascript object"],[3,"stringify","","Process a Javascript object into a JSON string"],[3,"_create","","Create a new `JSON` object"],[3,"init","","Initialise the global object with the `JSON` object"],[0,"number","script::js","The global Number object and associated functions"],[3,"parse_float","script::js::number","Parse a float into a value"],[3,"parse_int","","Parse an int into a value"],[3,"is_finite","","Check if a value when converted to a number is finite"],[3,"strict_is_finite","","Check if a number is finite"],[3,"is_nan","","Check if a value when converted to a number is equal to NaN"],[3,"strict_is_nan","","Check if a number is equal to NaN"],[3,"_create","","Create a new `Number` object"],[3,"init","","Initialise the parse functions and `Number` on the global object"],[0,"error","script::js","Errors"],[3,"make_error","script::js::error","Create a new error"],[3,"to_string","","Get the string representation of the error"],[3,"_create","","Create a new `Error` object"],[3,"init","","Initialise the global object with the `Error` object"],[0,"uri","script::js","Global methods concerning URIs"],[3,"encode_uri","script::js::uri","Encode a URI"],[3,"encode_uri_component","","Encode a URI component\nRust uses RFC 3986, but JS doesn't, this will need a fix"],[3,"decode_uri","","Decode a URI"],[3,"decode_uri_component","","Decode a URI component\nRust uses RFC 3986, but JS doesn't, this will need a fix"],[3,"init","","Initialise the URI functions on a global object"],[0,"string","script::js","The global string object"],[3,"make_string","script::js::string","Create new string"],[3,"get_string_length","","Get a string's length"],[3,"_create","","Create a new `String` object"],[3,"init","","Initialise the global object with the `String` object"],[10,"to_value","script::js::function","",28],[10,"from_value","","",28],[10,"to_value","script::js::object","",29],[10,"from_value","","",29]],"paths":[[1,"Expr"],[1,"Position"],[1,"Token"],[2,"Const"],[2,"NumOp"],[2,"UnaryOp"],[2,"BitOp"],[2,"CompOp"],[2,"LogOp"],[2,"BinOp"],[2,"ExprDef"],[2,"TokenData"],[6,"GetPrecedence"],[1,"Lexer"],[2,"StringType"],[2,"CommentType"],[2,"NumberType"],[1,"Parser"],[2,"ParseError"],[1,"Interpreter"],[6,"Executor"],[2,"ValueData"],[6,"ToValue"],[6,"FromValue"],[1,"RegularFunction"],[1,"NativeFunction"],[2,"Function"],[1,"Property"],[4,"NativeFunctionData"],[4,"ObjectData"]]};
initSearch(searchIndex);
