
import EntryListComponent from './JournalEntryList.js'
import { useEntries } from './JournalDataProvider.js'
import { journalFormComponent } from './JournalFormComponent.js'
journalFormComponent()
EntryListComponent()
useEntries()