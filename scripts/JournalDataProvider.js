/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Sad"
    },
    {
        date: "11/12/2019",
        concept: "HTML & CSS",
        entry: "We learned about making 1990's websites and how to use flexbox a bit, I like the website css tricks to help understand flexbox.",
        mood: "Happy"
    },
    {
        date: "11/21/2019",
        concept: "javascript",
        entry: "We made a card of each fish so that javascript could turn it into html, also learned how to make a diaolg button",
        mood: "Still Not Sure"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    console.log(sortedByDate)
    return sortedByDate
}