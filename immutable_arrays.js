//Aufgabe a
const people = [
    {id: 1, PersonName: "Adrian Jasaroska",},
    {id: 2, PersonName: "Augusto Hasenbalg"}
]
console.log(people)

//Aufgabe b
const addedPerson = [
    ...people,
    {id: 3, PersonName: "Patrick Michel"}
]
console.log(addedPerson)

//Aufgabe c
const updatedPeople = people.map(changeName)
function changeName(Person) {
    if (Person.id === 2) {
        return {...Person, PersonName: "Sefa Cam"};
    }
    return Person;
}
console.log(updatedPeople)

//Aufgabe d
const removePerson = people.filter((person) => {
    return person.id !== 2
}) 
console.log(removePerson)

//Aufgabe e
const reviews = [
    4.5, 4.0, 5.0, 2.0, 1.0,
    5.0, 3.0, 4.0, 1.0, 5.0,
    4.5, 3.0, 2.5, 2.0
]
const totalAccumulation = reviews.reduce((a, g) => a + g)
const averageOfReviews = totalAccumulation / reviews.length
console.log(averageOfReviews)

//Aufgabe f
const groupByAverage = (groups, average) => {
    const { good = 0, ok = 0, bad = 0} = groups;
    if (average >= 4) {
        return { ...groups, good: good + 1};
    } else if (average >= 2.5) {
        return { ...groups, ok: ok + 1};
    }else if (average > 0) {
        return { ...groups, bad: bad + 1};
    }
};
const GroupsAverage = reviews.reduce(groupByAverage, {});
console.log(GroupsAverage)