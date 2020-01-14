import { useJournalEntries} from './JournalDataProvider.js'
import JournalEntryComponent from './JournalEntry.js';

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog");

const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  const entries = useJournalEntries();
  entryLog.innerHTML += `
        ${entries
          .map(entry => {
            return JournalEntryComponent(entry);
          })
          .join("")}
    `;
};

export default EntryListComponent;