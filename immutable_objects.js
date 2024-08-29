//Aufgabe b
const immutableString = "Hello World"

//Aufgabe c
const Person = {
    Person: "Adrian Jasaroska",
    Student: true,
    Car: {
        Brand: "Toyota",
        Model: "Supra Mk-2",
        Price: 65000
    }
}

//Aufgabe d
const addedAgePerson = {
    ...Person,
    Age: 17
}
console.log(addedAgePerson)

//Aufgabe e
const updatedPerson = {
    ...Person,
    Student: Person.Student = false
}
console.log(updatedPerson)

//Aufgabe f
const {Student, ...removedStudentStatusPerson} = Person
console.log(removedStudentStatusPerson)
