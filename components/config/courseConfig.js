const courseQuizesNames = [
  {
    section: 12285,
    week: 1,
    name: "Git"
  },
  {
    section: 12303,
    week: 1,
    name: "Introduction to Java"
  },
  {
    section: 12230,
    week: 1,
    name: "Primitive Types"
  },
  {
    section: 12232,
    week: 1,
    name: "Variable"
  },
  {
    section: 12260,
    week: 1,
    name: "Increment Decrement"
  },
  {
    section: 12275,
    week: 1,
    name: "Strings"
  },
  {
    section: 12282,
    week: 1,
    name: "User Input"
  },
  {
    section: 12219,
    week: 1,
    name: "If Statements"
  },
  {
    section: 12228,
    week: 1,
    name: "Else If Statements"
  },
  {
    section: 12242,
    week: 1,
    name: "Logical Statements"
  },
  {
    section: 12254,
    week: 1,
    name: "Conditional"
  },
  {
    section: 12309,
    week: 1,
    name: "Switch Statement"
  },
  {
    section: 12292,
    week: 1,
    name: "While Loop"
  },
  {
    section: 12244,
    week: 1,
    name: "For Loop"
  },
  {
    section: 12308,
    week: 1,
    name: "Do While Loop"
  },
  {
    section: 12294,
    week: 1,
    name: "Debugging"
  },
  {
    section: 12246,
    week: 1,
    name: "Type Casting"
  },
  {
    section: 12272,
    week: 1,
    name: "Casting"
  },
  {
    section: 12220,
    week: 1,
    name: "Downcasting"
  },
  {
    section: 12226,
    week: 2,
    name: "Array"
  },
  {
    section: 12245,
    week: 2,
    name: "ForEach"
  },
  {
    section: 12266,
    week: 2,
    name: "Collections"
  },
  {
    section: 12269,
    week: 2,
    name: "List Interfaces"
  },
  {
    section: 12267,
    week: 2,
    name: "ArrayList"
  },
  {
    section: 12256,
    week: 3,
    name: "LinkedList"
  },
  {
    section: 12227,
    week: 3,
    name: "Set Interface"
  },
  {
    section: 12231,
    week: 3,
    name: "Hash Set"
  },
  {
    section: 12276,
    week: 3,
    name: "LinkedHash Set"
  },
  {
    section: 12236,
    week: 3,
    name: "Map Interface"
  },
  {
    section: 12248,
    week: 3,
    name: "HashMap"
  },
  {
    section: 12238,
    week: 3,
    name: "Iterators"
  },
  {
    section: 12233,
    week: 3,
    name: "Object Oriented Programming"
  },
  {
    section: 12315,
    week: 3,
    name: "Classes"
  },
  {
    section: 12261,
    week: 3,
    name: "Attributes/Fields"
  },
  {
    section: 12241,
    week: 3,
    name: "Access Modifiers"
  },
  {
    section: 12273,
    week: 3,
    name: "Method"
  },
  {
    section: 12263,
    week: 3,
    name: "Method Return Types"
  },
  {
    section: 12240,
    week: 3,
    name: "Method Overriding"
  },
  {
    section: 12286,
    week: 3,
    name: "Method Overloading"
  },
  {
    section: 12299,
    week: 3,
    name: "Constructors"
  },
  {
    section: 12311,
    week: 3,
    name: "Objects"
  },
  {
    section: 12223,
    week: 3,
    name: "Static Keyword"
  },
  {
    section: 12274,
    week: 3,
    name: "Final Keyword"
  },
  {
    section: 12229,
    week: 4,
    name: "Inheritance"
  },
  {
    section: 12281,
    week: 4,
    name: "Encapsulation"
  },
  {
    section: 12253,
    week: 4,
    name: "Packages"
  },
  {
    section: 12265,
    week: 4,
    name: "Getters and Setters"
  },
  {
    section: 12310,
    week: 4,
    name: "Abstraction"
  },
  {
    section: 12264,
    week: 4,
    name: "Polymorphism"
  },
  {
    section: 12313,
    week: 4,
    name: "Abstract Classes"
  },
  {
    section: 12290,
    week: 4,
    name: "Interfaces"
  },
  {
    section: 12300,
    week: 4,
    name: "Inner Classes"
  },
  {
    section: 12243,
    week: 4,
    name: "equals() Method"
  },
  {
    section: 12247,
    week: 4,
    name: "Enumerations"
  },
  {
    section: 12287,
    week: 5,
    name: "Checked Exceptions"
  },
  {
    section: 12306,
    week: 5,
    name: "Exception Handling"
  },
  {
    section: 12305,
    week: 5,
    name: "Unchecked Exceptions"
  },
  {
    section: 12239,
    week: 6,
    name: "Creating and Writing Files"
  },
  {
    section: 12296,
    week: 6,
    name: "Reading a File"
  },
  {
    section: 12279,
    week: 6,
    name: "Serialization"
  },
  {
    section: 12316,
    week: 6,
    name: "Working with Files"
  },
  {
    section: 17139,
    week: 7,
    name: "Lambda Expressions"
  },
  {
    section: 17125,
    week: 7,
    name: "Streams"
  },
  {
    section: 12250,
    week: 7,
    name: "Multithreading"
  },
  {
    section: 12249,
    week: 8,
    name: "Hibernate Overview"
  },
  {
    section: 17138,
    week: 8,
    name: "Hibernate Annotations"
  },
  {
    section: 17079,
    week: 8,
    name: "Hibernate Creating and Saving Java Objects"
  },
  {
    section: 17150,
    week: 8,
    name: "Hibernate Deleting Objects"
  },
  {
    section: 17113,
    week: 8,
    name: "Hibernate Primary Keys"
  },
  {
    section: 17132,
    week: 8,
    name: "Hibernate Retrieving an Object"
  },
  {
    section: 17143,
    week: 8,
    name: "Hibernate Updating Objects"
  },
  {
    section: 17089,
    week: 8,
    name: "MySQL"
  },
  {
    section: 12268,
    week: 9,
    name: "Microservices"
  },
  {
    section: 12251,
    week: 9,
    name: "Spring Boot"
  },
  {
    section: 12293,
    week: 9,
    name: "Spring"
  },
  {
    section: 12262,
    week: 9,
    name: "Web Service"
  }
];

const week1 = courseQuizesNames.filter((object) => object.week === 1);
const week2 = courseQuizesNames.filter((object) => object.week === 2);
const week3 = courseQuizesNames.filter((object) => object.week === 3);
const week4 = courseQuizesNames.filter((object) => object.week === 4);
const week5 = courseQuizesNames.filter((object) => object.week === 5);
const week6 = courseQuizesNames.filter((object) => object.week === 6);
const week7 = courseQuizesNames.filter((object) => object.week === 7);
const week8 = courseQuizesNames.filter((object) => object.week === 8);
const week9 = courseQuizesNames.filter((object) => object.week === 9);

const quizzes = [week1, week2, week3, week4, week5, week6, week7, week8, week9];

export default quizzes;
