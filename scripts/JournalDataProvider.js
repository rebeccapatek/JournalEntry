/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
let journal = []

export const useEntries = () => {
    return journal;
};
export const getEntries = () => {
    return fetch('http://localhost:3000/entries', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedJournal => {
        journal = parsedJournal.slice() 
    })
}


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