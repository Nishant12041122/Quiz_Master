// ==========================================
// GET STUDENT DATA
// ==========================================

const studentData = JSON.parse(
    localStorage.getItem("studentData")
);


if (!studentData) {

    window.location.href = "index.html";

}


// ==========================================
// STUDENT INFORMATION
// ==========================================

const studentInfo =
    document.getElementById("studentInfo");

if (studentInfo) {

    studentInfo.textContent =
        (studentData.name || "Student") +
        " • " +
        (studentData.studentType || "SME Student") +
        " • " +
        (studentData.mobile || "");

}


// ==========================================
// QUESTION BANK
// ==========================================

const questionBank = [

    {
        question:
            "Which of the following is the correct way to declare an integer variable in C?",

        options: [
            "integer x;",
            "int x;",
            "x int;",
            "declare int x;"
        ],

        answer: "int x;"
    },


    {
        question:
            "Which function is the entry point of a C program?",

        options: [
            "start()",
            "main()",
            "begin()",
            "run()"
        ],

        answer: "main()"
    },


    {
        question:
            "Which header file is required for printf() and scanf()?",

        options: [
            "conio.h",
            "stdio.h",
            "stdlib.h",
            "string.h"
        ],

        answer: "stdio.h"
    },


    {
        question:
            "Which symbol is used to terminate a statement in C?",

        options: [
            ":",
            ".",
            ",",
            ";"
        ],

        answer: ";"
    },


    {
        question:
            "Which data type is used to store a single character?",

        options: [
            "int",
            "float",
            "char",
            "double"
        ],

        answer: "char"
    },


    {
        question:
            "Which operator is used for assignment in C?",

        options: [
            "==",
            "=",
            "!=",
            "+="
        ],

        answer: "="
    },


    {
        question:
            "Which operator is used to compare two values for equality?",

        options: [
            "=",
            "==",
            "=>",
            "!="
        ],

        answer: "=="
    },


    {
        question:
            "Which loop is guaranteed to execute at least once?",

        options: [
            "for",
            "while",
            "do-while",
            "nested for"
        ],

        answer: "do-while"
    },


    {
        question:
            "Which keyword is used to return a value from a function?",

        options: [
            "break",
            "return",
            "continue",
            "exit"
        ],

        answer: "return"
    },


    {
        question:
            "Which keyword is used to exit from a loop or switch statement?",

        options: [
            "stop",
            "exit",
            "break",
            "return"
        ],

        answer: "break"
    },


    {
        question:
            "Which operator represents logical AND in C?",

        options: [
            "&",
            "&&",
            "||",
            "!"
        ],

        answer: "&&"
    },


    {
        question:
            "Which operator represents logical OR in C?",

        options: [
            "|",
            "&&",
            "||",
            "!"
        ],

        answer: "||"
    },


    {
        question:
            "Which operator is used to find the remainder of a division?",

        options: [
            "/",
            "%",
            "//",
            "\\"
        ],

        answer: "%"
    },


    {
        question:
            "Array indexing in C starts from:",

        options: [
            "0",
            "1",
            "-1",
            "Depends on array"
        ],

        answer: "0"
    },


    {
        question:
            "Which of the following is a valid single-line comment in C?",

        options: [
            "// comment",
            "/* comment",
            "# comment",
            "<!-- comment -->"
        ],

        answer: "// comment"
    },


    {
        question:
            "Which header file contains string handling functions?",

        options: [
            "stdio.h",
            "math.h",
            "string.h",
            "ctype.h"
        ],

        answer: "string.h"
    },


    {
        question:
            "Which function is used to find the length of a string?",

        options: [
            "strcpy()",
            "strlen()",
            "strcmp()",
            "strcat()"
        ],

        answer: "strlen()"
    },


    {
        question:
            "Which function is used to copy one string into another?",

        options: [
            "strlen()",
            "strcmp()",
            "strcpy()",
            "strcat()"
        ],

        answer: "strcpy()"
    },


    {
        question:
            "Which function is used to compare two strings?",

        options: [
            "strcmp()",
            "strcpy()",
            "strlen()",
            "strcat()"
        ],

        answer: "strcmp()"
    },


    {
        question:
            "Which function is used to allocate memory dynamically?",

        options: [
            "malloc()",
            "printf()",
            "scanf()",
            "sizeof()"
        ],

        answer: "malloc()"
    },


    {
        question:
            "Which keyword is used to define a constant variable?",

        options: [
            "constant",
            "const",
            "define",
            "fixed"
        ],

        answer: "const"
    },


    {
        question:
            "Which preprocessor directive is used to define a macro?",

        options: [
            "#include",
            "#define",
            "#macro",
            "#const"
        ],

        answer: "#define"
    },


    {
        question:
            "Which operator is used to access the address of a variable?",

        options: [
            "*",
            "&",
            "@",
            "#"
        ],

        answer: "&"
    },


    {
        question:
            "Which operator is used to access the value at an address?",

        options: [
            "&",
            "*",
            "%",
            "#"
        ],

        answer: "*"
    },


    {
        question:
            "Which of the following is a valid C identifier?",

        options: [
            "2value",
            "my-value",
            "my_value",
            "float"
        ],

        answer: "my_value"
    },


    {
        question:
            "Which storage class retains its value between function calls?",

        options: [
            "auto",
            "register",
            "static",
            "extern"
        ],

        answer: "static"
    },


    {
        question:
            "Which keyword is used to declare a structure in C?",

        options: [
            "record",
            "struct",
            "structure",
            "class"
        ],

        answer: "struct"
    },


    {
        question:
            "Which statement is used for multi-way selection in C?",

        options: [
            "if",
            "for",
            "switch",
            "while"
        ],

        answer: "switch"
    },


    {
        question:
            "Which keyword is used to skip the remaining statements of the current loop iteration?",

        options: [
            "break",
            "skip",
            "continue",
            "pass"
        ],

        answer: "continue"
const questionBank = [

    

    {
        question: "Which function is the entry point of a C program?",
        options: ["start()", "main()", "begin()", "run()"],
        answer: "main()"
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },

    {
        question: "Which data type is used to store a single character in C?",
        options: ["int", "float", "char", "string"],
        answer: "char"
    },

    {
        question: "Which HTML tag is used for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        answer: "<h1>"
    },

    {
        question: "Which symbol is used to terminate a statement in C?",
        options: [".", ",", ";", ":"],
        answer: ";"
    },

    {
        question: "Which HTML tag is used to create a paragraph?",
        options: ["<p>", "<para>", "<text>", "<pg>"],
        answer: "<p>"
    },

    {
        question: "Which operator is used for assignment in C?",
        options: ["==", "=", "!=", "=>"],
        answer: "="
    },

    {
        question: "Which HTML tag is used to insert an image?",
        options: ["<image>", "<img>", "<picture>", "<src>"],
        answer: "<img>"
    },

    {
        question: "Which header file is required for printf()?",
        options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
        answer: "stdio.h"
    },

    {
        question: "Which HTML attribute specifies the image path?",
        options: ["href", "src", "path", "link"],
        answer: "src"
    },

    {
        question: "Which loop is guaranteed to execute at least once in C?",
        options: ["for", "while", "do-while", "foreach"],
        answer: "do-while"
    },

    {
        question: "Which HTML tag creates an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>"
    },

    {
        question: "Which operator is used to compare equality in C?",
        options: ["=", "==", "!=", "==="],
        answer: "=="
    },

    {
        question: "Which HTML tag is used for a list item?",
        options: ["<item>", "<li>", "<list>", "<ul>"],
        answer: "<li>"
    },

    {
        question: "Which keyword is used to exit a loop in C?",
        options: ["stop", "exit", "break", "continue"],
        answer: "break"
    },

    {
        question: "Which HTML tag creates an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<order>"],
        answer: "<ol>"
    },

    {
        question: "Which operator represents logical AND in C?",
        options: ["&", "&&", "||", "!"],
        answer: "&&"
    },

    {
        question: "Which HTML tag is used to create a table?",
        options: ["<table>", "<tab>", "<grid>", "<tr>"],
        answer: "<table>"
    },

    {
        question: "Which operator represents logical OR in C?",
        options: ["|", "&&", "||", "!"],
        answer: "||"
    },

    {
        question: "Which HTML tag defines a table row?",
        options: ["<td>", "<th>", "<tr>", "<row>"],
        answer: "<tr>"
    },

    {
        question: "Which operator gives the remainder of division in C?",
        options: ["/", "%", "//", "\\"],
        answer: "%"
    },

    {
        question: "Which HTML tag defines a table data cell?",
        options: ["<cell>", "<td>", "<tr>", "<data>"],
        answer: "<td>"
    },

    {
        question: "Array indexing in C starts from:",
        options: ["0", "1", "-1", "Depends on compiler"],
        answer: "0"
    },

    {
        question: "Which HTML tag defines a table header cell?",
        options: ["<thead>", "<th>", "<header>", "<td>"],
        answer: "<th>"
    },

    {
        question: "Which keyword is used to return a value from a function in C?",
        options: ["break", "return", "continue", "send"],
        answer: "return"
    },

    {
        question: "Which HTML tag contains metadata and the title of a webpage?",
        options: ["<body>", "<head>", "<meta>", "<header>"],
        answer: "<head>"
    },

    {
        question: "Which keyword is used to define a constant in C?",
        options: ["constant", "const", "define", "fixed"],
        answer: "const"
    },

    {
        question: "Which HTML tag contains the visible content of a webpage?",
        options: ["<head>", "<body>", "<main>", "<content>"],
        answer: "<body>"
    },

    {
        question: "Which preprocessor directive is used to define a macro?",
        options: ["#include", "#define", "#macro", "#const"],
        answer: "#define"
    },

    {
        question: "Which HTML tag is used to set the webpage title?",
        options: ["<title>", "<name>", "<heading>", "<headtitle>"],
        answer: "<title>"
    },

    {
        question: "Which operator is used to get the address of a variable in C?",
        options: ["*", "&", "@", "#"],
        answer: "&"
    },

    {
        question: "Which HTML attribute provides alternative text for an image?",
        options: ["title", "alt", "text", "description"],
        answer: "alt"
    },

    {
        question: "Which operator is used to access the value at an address in C?",
        options: ["&", "*", "%", "#"],
        answer: "*"
    },

    {
        question: "Which HTML tag is used to make text bold semantically?",
        options: ["<bold>", "<b>", "<strong>", "<em>"],
        answer: "<strong>"
    },

    {
        question: "Which of the following is a valid C identifier?",
        options: ["2value", "my-value", "my_value", "float"],
        answer: "my_value"
    },

    {
        question: "Which HTML tag is used to emphasize text?",
        options: ["<italic>", "<em>", "<i>", "<strong>"],
        answer: "<em>"
    },

    {
        question: "Which storage class retains its value between function calls?",
        options: ["auto", "register", "static", "extern"],
        answer: "static"
    },

    {
        question: "Which HTML tag is used to create a line break?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        answer: "<br>"
    },

    {
        question: "Which keyword is used to declare a structure in C?",
        options: ["record", "struct", "structure", "class"],
        answer: "struct"
    },

    {
        question: "Which HTML tag is used to create a horizontal line?",
        options: ["<line>", "<hr>", "<horizontal>", "<br>"],
        answer: "<hr>"
    },

    {
        question: "Which statement is used for multi-way selection in C?",
        options: ["if", "for", "switch", "while"],
        answer: "switch"
    },

    {
        question: "Which HTML element is used to create a form?",
        options: ["<input>", "<form>", "<field>", "<data>"],
        answer: "<form>"
    },

    {
        question: "Which keyword skips the current iteration of a loop in C?",
        options: ["break", "skip", "continue", "pass"],
        answer: "continue"
    },

    {
        question: "Which HTML element is used for a single-line text input?",
        options: ["<text>", "<input>", "<textbox>", "<textarea>"],
        answer: "<input>"
    },

    {
        question: "Which function is used to find the length of a string in C?",
        options: ["strcpy()", "strlen()", "strcmp()", "strcat()"],
        answer: "strlen()"
    },

    {
        question: "Which input type is used for selecting only one option?",
        options: ["checkbox", "radio", "select", "option"],
        answer: "radio"
    },

    {
        question: "Which function copies one string to another in C?",
        options: ["strlen()", "strcmp()", "strcpy()", "strcat()"],
        answer: "strcpy()"
    },

    {
        question: "Which HTML input type is used for multiple independent selections?",
        options: ["radio", "checkbox", "multiple", "select"],
        answer: "checkbox"
    },

    {
        question: "Which function compares two strings in C?",
        options: ["strcmp()", "strcpy()", "strlen()", "strcat()"],
        answer: "strcmp()"
    },

    {
        question: "Which HTML tag is used to create a drop-down list?",
        options: ["<dropdown>", "<select>", "<list>", "<option>"],
        answer: "<select>"
    },

    {
        question: "Which function allocates memory dynamically in C?",
        options: ["malloc()", "printf()", "scanf()", "sizeof()"],
        answer: "malloc()"
    },

    {
        question: "Which HTML element defines an option inside a select list?",
        options: ["<choice>", "<option>", "<select-item>", "<item>"],
        answer: "<option>"
    },

    {
        question: "Which function releases dynamically allocated memory in C?",
        options: ["delete()", "remove()", "free()", "release()"],
        answer: "free()"
    },

    {
        question: "Which HTML attribute makes an input field mandatory?",
        options: ["required", "mandatory", "needed", "must"],
        answer: "required"
    },

    {
        question: "Which header file contains string functions in C?",
        options: ["stdio.h", "math.h", "string.h", "stdlib.h"],
        answer: "string.h"
    },

    {
        question: "Which HTML attribute specifies a unique identifier?",
        options: ["class", "id", "name", "key"],
        answer: "id"
    },

    {
        question: "Which header file contains mathematical functions in C?",
        options: ["math.h", "stdio.h", "string.h", "ctype.h"],
        answer: "math.h"
    },

    {
        question: "Which HTML attribute is used to assign one or more classes?",
        options: ["id", "class", "style", "group"],
        answer: "class"
    },

    {
        question: "Which function is used to read formatted input in C?",
        options: ["printf()", "scanf()", "input()", "read()"],
        answer: "scanf()"
    },

    {
        question: "Which HTML attribute specifies the destination of a hyperlink?",
        options: ["src", "href", "link", "target"],
        answer: "href"
    },

    {
        question: "Which function is used to display formatted output in C?",
        options: ["print()", "printf()", "display()", "cout()"],
        answer: "printf()"
    },

    {
        question: "Which HTML attribute specifies where a link should open?",
        options: ["href", "target", "window", "open"],
        answer: "target"
    },

    {
        question: "Which keyword is used to declare an integer variable in C?",
        options: ["integer", "int", "number", "num"],
        answer: "int"
    },

    {
        question: "Which HTML tag is used to define navigation links?",
        options: ["<navigate>", "<nav>", "<navigation>", "<links>"],
        answer: "<nav>"
    },

    {
        question: "Which data type is commonly used for decimal values in C?",
        options: ["int", "char", "float", "void"],
        answer: "float"
    },

    {
        question: "Which HTML element represents the main content of a document?",
        options: ["<content>", "<main>", "<body>", "<section>"],
        answer: "<main>"
    },

    {
        question: "Which keyword represents a function with no return value in C?",
        options: ["null", "empty", "void", "none"],
        answer: "void"
    },

    {
        question: "Which HTML element is used for a self-contained article?",
        options: ["<article>", "<content>", "<post>", "<section>"],
        answer: "<article>"
    },

    {
        question: "Which operator is used for logical NOT in C?",
        options: ["!", "not", "~", "!="],
        answer: "!"
    },

    {
        question: "Which HTML element represents a section of content?",
        options: ["<part>", "<section>", "<group>", "<area>"],
        answer: "<section>"
    },

    {
        question: "Which operator is used for bitwise AND in C?",
        options: ["&&", "&", "and", "|"],
        answer: "&"
    },

    {
        question: "Which HTML tag is used for a footer section?",
        options: ["<bottom>", "<footer>", "<foot>", "<end>"],
        answer: "<footer>"
    },

    {
        question: "Which operator is used for bitwise OR in C?",
        options: ["||", "|", "or", "&"],
        answer: "|"
    },

    {
        question: "Which HTML tag is used for a header section?",
        options: ["<top>", "<header>", "<head>", "<heading>"],
        answer: "<header>"
    },

    {
        question: "Which operator increases a value by 1 in C?",
        options: ["+", "++", "+=", "**"],
        answer: "++"
    },

    {
        question: "Which HTML tag is used to display emphasized italic text?",
        options: ["<i>", "<em>", "<italic>", "Both <i> and <em>"],
        answer: "Both <i> and <em>"
    },

    {
        question: "Which operator decreases a value by 1 in C?",
        options: ["--", "-", "-=", "**"],
        answer: "--"
    },

    {
        question: "Which HTML tag is commonly used for bold text?",
        options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"],
        answer: "Both <b> and <strong>"
    },

    {
        question: "Which keyword is used to create a loop in C?",
        options: ["repeat", "loop", "for", "iterate"],
        answer: "for"
    },

    {
        question: "Which HTML tag is used to define a caption for a table?",
        options: ["<caption>", "<title>", "<table-title>", "<label>"],
        answer: "<caption>"
    },

    {
        question: "Which keyword is used to declare an external variable in C?",
        options: ["extern", "external", "global", "public"],
        answer: "extern"
    },

    {
        question: "Which HTML element is used to group related form controls?",
        options: ["<group>", "<fieldset>", "<formgroup>", "<controls>"],
        answer: "<fieldset>"
    },

    {
        question: "Which keyword is used to declare a variable that cannot be modified?",
        options: ["fixed", "const", "constant", "readonly"],
        answer: "const"
    },

    {
        question: "Which HTML tag provides a caption for a fieldset?",
        options: ["<caption>", "<legend>", "<label>", "<title>"],
        answer: "<legend>"
    },

    {
        question: "What is the correct format specifier for an integer in C?",
        options: ["%f", "%c", "%d", "%s"],
        answer: "%d"
    },

    {
        question: "Which HTML tag is used to define a label for an input?",
        options: ["<label>", "<input-label>", "<caption>", "<name>"],
        answer: "<label>"
    },

    {
        question: "What is the correct format specifier for a float in C?",
        options: ["%d", "%f", "%c", "%s"],
        answer: "%f"
    },

    {
        question: "Which HTML element is used for multi-line text input?",
        options: ["<input>", "<textarea>", "<text>", "<multiline>"],
        answer: "<textarea>"
    },

    {
        question: "Which format specifier is used for a character in C?",
        options: ["%c", "%d", "%s", "%f"],
        answer: "%c"
    },

    {
        question: "Which HTML attribute specifies the default value of an input?",
        options: ["value", "default", "text", "data"],
        answer: "value"
    },

    {
        question: "Which format specifier is used for a string in C?",
        options: ["%c", "%d", "%s", "%f"],
        answer: "%s"
    },

    {
        question: "Which HTML tag is used to embed audio?",
        options: ["<sound>", "<audio>", "<music>", "<mp3>"],
        answer: "<audio>"
    },

    {
        question: "Which keyword is used to allocate a variable in a register in C?",
        options: ["register", "memory", "fast", "store"],
        answer: "register"
    },

    {
        question: "Which HTML tag is used to embed video?",
        options: ["<movie>", "<media>", "<video>", "<mp4>"],
        answer: "<video>"
    },

    {
        question: "Which operator is used to determine the size of a data type or variable?",
        options: ["length", "size", "sizeof", "sizeof()"],
        answer: "sizeof()"
    },

    {
        question: "Which HTML declaration specifies the HTML5 document type?",
        options: ["<!HTML5>", "<!DOCTYPE html>", "<DOCTYPE HTML5>", "<html5>"],
        answer: "<!DOCTYPE html>"
    },

    {
        question: "Which C statement is used to execute code based on a condition?",
        options: ["if", "check", "when", "condition"],
        answer: "if"
    },

    {
        question: "Which HTML tag is the root element of an HTML document?",
        options: ["<body>", "<root>", "<html>", "<document>"],
        answer: "<html>"
    },

    {
        question: "Which C loop checks its condition before execution?",
        options: ["do-while", "while", "Both while and for", "None"],
        answer: "Both while and for"
    },

    {
        question: "Which HTML tag is used to define metadata?",
        options: ["<data>", "<meta>", "<information>", "<head-data>"],
        answer: "<meta>"
    },

    {
        question: "Which C loop is commonly used when the number of iterations is known?",
        options: ["for", "while", "do-while", "switch"],
        answer: "for"
    },

    {
        question: "Which HTML attribute is commonly used to specify inline CSS?",
        options: ["css", "style", "class", "design"],
        answer: "style"
    },

    {
        question: "Which keyword is used to define a union in C?",
        options: ["union", "combine", "group", "struct"],
        answer: "union"
    },

    {
        question: "Which HTML tag is used to define a definition term?",
        options: ["<dt>", "<dd>", "<dl>", "<term>"],
        answer: "<dt>"
    },

    {
        question: "Which function is used to open a file in C?",
        options: ["open()", "fopen()", "fileopen()", "openfile()"],
        answer: "fopen()"
    },

    {
        question: "Which HTML tag is used to define a description in a description list?",
        options: ["<dt>", "<dd>", "<dl>", "<description>"],
        answer: "<dd>"
    },

    {
        question: "Which function is used to close a file in C?",
        options: ["close()", "fclose()", "fileclose()", "endfile()"],
        answer: "fclose()"
    },

    {
        question: "Which HTML tag creates a description list?",
        options: ["<dl>", "<list>", "<description>", "<ol>"],
        answer: "<dl>"
    },

    {
        question: "Which C keyword is used to define an enumeration?",
        options: ["enum", "enumerate", "list", "constlist"],
        answer: "enum"
    },

    {
        question: "Which HTML tag is used to mark highlighted text?",
        options: ["<highlight>", "<mark>", "<highlighted>", "<strong>"],
        answer: "<mark>"
    },

    {
        question: "Which escape sequence represents a new line in C?",
        options: ["\\t", "\\n", "\\r", "\\b"],
        answer: "\\n"
    },

    {
        question: "Which HTML tag is used to display a superscript?",
        options: ["<super>", "<sup>", "<top>", "<up>"],
        answer: "<sup>"
    },

    {
        question: "Which escape sequence represents a tab in C?",
        options: ["\\n", "\\t", "\\b", "\\a"],
        answer: "\\t"
    },

    {
        question: "Which HTML tag is used to display a subscript?",
        options: ["<sub>", "<down>", "<smallsub>", "<bottom>"],
        answer: "<sub>"
    },

    {
        question: "Which symbol starts a single-line comment in C?",
        options: ["//", "/*", "#", "--"],
        answer: "//"
    },

    {
        question: "Which HTML tag is used to define a quotation?",
        options: ["<quote>", "<q>", "<quotation>", "<quot>"],
        answer: "<q>"
    },

    {
        question: "Which symbols are used for a multi-line comment in C?",
        options: ["// //", "/* */", "<!-- -->", "# #"],
        answer: "/* */"
    }
    ];
// ==========================================
// RANDOM 5 QUESTIONS
// ==========================================

function getRandomQuestions() {

    const shuffled =
        [...questionBank].sort(
            () => Math.random() - 0.5
        );

    return shuffled.slice(0, 30);

}


const questions =
    getRandomQuestions();


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;

let score = 0;

let timeLeft = 30*60;

let selected = false;

let quizFinished = false;


// ==========================================
// HTML ELEMENTS
// ==========================================

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumberElement =
    document.getElementById("questionNumber");

const totalQuestionsElement =
    document.getElementById("totalQuestions");

const nextBtn =
    document.getElementById("nextBtn");

const timerElement =
    document.getElementById("timer");




// ==========================================
// TOTAL QUESTIONS
// ==========================================

totalQuestionsElement.textContent =
    questions.length;


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    selected = false;


    const current =
        questions[currentQuestion];


    questionElement.textContent =
        current.question;


    questionNumberElement.textContent =
        currentQuestion + 1;


    optionsElement.innerHTML = "";


    current.options.forEach(
        function (option) {


            const button =
                document.createElement("button");


            button.type = "button";


            button.textContent =
                option;


            button.className =
                "btn btn-outline-primary w-100 option-btn mb-2";


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        option,
                        button
                    );

                }
            );


            optionsElement.appendChild(
                button
            );

        }
    );

}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(
    option,
    selectedButton
) {

    if (selected) {
        return;
    }


    selected = true;


    const current =
        questions[currentQuestion];


    const allButtons =
        optionsElement.querySelectorAll(
            "button"
        );


    allButtons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    if (option === current.answer) {

        score++;


        selectedButton.classList.remove(
            "btn-outline-primary"
        );


        selectedButton.classList.add(
            "btn-success"
        );

    }

    else {

        selectedButton.classList.remove(
            "btn-outline-primary"
        );


        selectedButton.classList.add(
            "btn-danger"
        );


        // Show correct answer

        allButtons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    current.answer
                ) {

                    button.classList.remove(
                        "btn-outline-primary"
                    );


                    button.classList.add(
                        "btn-success"
                    );

                }

            }
        );

    }

}


// ==========================================
// NEXT BUTTON
// ==========================================

nextBtn.addEventListener(
    "click",
    function () {


        if (quizFinished) {
            return;
        }


        if (!selected) {

            alert(
                "Please select an answer."
            );

            return;

        }


        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        }

        else {

            finishQuiz();

        }

    }
);


// ==========================================
// TIMER
// ==========================================

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerElement.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


// Show initial time
updateTimer();


const timerInterval =
    setInterval(
        function () {

            if (quizFinished) {
                return;
            }

            timeLeft--;

            updateTimer();


            if (timeLeft <= 0) {

                clearInterval(
                    timerInterval
                );

                finishQuiz();

            }

        },
        1000
    );

// ==========================================
// FINISH QUIZ
// ==========================================

async function finishQuiz() {


    if (quizFinished) {
        return;
    }


    quizFinished = true;


    clearInterval(
        timerInterval
    );


    const total =
        questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    // ======================================
    // RESULT
    // ======================================

    const result = {

    name:
        studentData.name,

    studentType:
        studentData.studentType,

    mobile:
        studentData.mobile,

    score:
        score,

    total:
        total,

    percentage:
        percentage,

    date:
        new Date().toLocaleString()

};

    // ======================================
    // LOCAL STORAGE - RESULT
    // ======================================

    localStorage.setItem(
        "quizResult",
        JSON.stringify(result)
    );


    // ======================================
    // LOCAL STORAGE - HISTORY
    // ======================================

    let history =
        JSON.parse(
            localStorage.getItem(
                "quizHistory"
            )
        ) || [];


    history.push(result);


    localStorage.setItem(
        "quizHistory",
        JSON.stringify(history)
    );


    // ======================================
    // SUPABASE CHECK
    // ======================================

    if (
        typeof supabaseClient ===
        "undefined"
    ) {

        console.error(
            "Supabase client is not available."
        );


        alert(
            "Local history saved.\n" +
            "Supabase connection not found."
        );


        window.location.href =
            "result.html";


        return;

    }


    // ======================================
    // SAVE TO SUPABASE
    // ======================================

    try {


        const { error } =
            await supabaseClient
                .from("quiz_results")
                .insert({

    name:
        studentData.name,

    student_type:
        studentData.studentType,

    mobile:
        studentData.mobile,

    score:
        score,

    total:
        total,

    percentage:
        percentage

});


        if (error) {

            console.error(
                "Supabase Error:",
                error
            );


            alert(
                "Local history saved.\n\n" +
                "Supabase Error:\n" +
                error.message
            );


            window.location.href =
                "result.html";


            return;

        }


        console.log(
            "Quiz result successfully saved to Supabase."
        );


        // ==================================
        // RESULT PAGE
        // ==================================

        window.location.href =
            "result.html";


    }

    catch (error) {


        console.error(
            "Database Connection Error:",
            error
        );


        alert(
            "Local history saved.\n\n" +
            "Database connection error:\n" +
            error.message
        );


        window.location.href =
            "result.html";

    }

}




// ==========================================
// START QUIZ
// ==========================================

loadQuestion();
