import EntryListComponent from './JournalEntryList.js'
import { journalFormComponent } from './JournalFormComponent.js'
import { getEntries } from './JournalDataProvider.js'

journalFormComponent()
getEntries().then(EntryListComponent)
