// here i create diffrent variables of different types
let name = "Shiv Kumar";
let age = 19;
let coder = true;
let like_to_do = ["Coding", "Listening Music" ,"Gaming"];
let basic_information = {course : "B.tech CSE", Year : "3rd year", Sem : "5th sem"};
let cpi = null;
let placement_status;

// now we create a array of objects for better summary 
let data_summary = [
    {Label : "Name", Value : name, Type: typeof name},
    {Label : "Age", Value : age, Type: typeof age},
    {Label : "Coder", Value : coder, Type: typeof coder},
    {Label : "Like To Do", Value : like_to_do, Type: Array.isArray(like_to_do) ? "array" : typeof like_to_do},
    {Label : "Basic Information", Value : basic_information, Type: typeof basic_information},
    {Label : "CPI", Value : cpi, Type: typeof cpi},
    {Label : "Placement Status", Value : placement_status, Type: typeof placement_status}
]

console.log(data_summary);