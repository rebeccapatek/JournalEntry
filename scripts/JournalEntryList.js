import { useJournalEntries} from './JournalDataProvider.js'
import JournalEntryComponent from './JournalEntry.js';

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog");
const eventHub = document.querySelector(".container")

const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  eventHub.addEventListener("JournalSaved", changeEvent => {
    console.log("JournalSaved was heard")
    const updatedEntries = useJournalEntries()
    render (updatedEntries)
  })


  const render =  (entryCollection) => {

  
  entryLog.innerHTML += `
        ${entryCollection
          .map(entry => {
            return JournalEntryComponent(entry);
          })
          .join("")}
    `;
};
}

export default EntryListComponent;