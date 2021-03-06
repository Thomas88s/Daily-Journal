
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalContainer")
export const EntryListComponent = () => {
    let journalHTMLRepresentation = "";
    // Use the journal entry data from the data provider component
    
 getEntries().then(() => {
     
     const entries = useJournalEntries()
     
     for (const entry of entries) {
         /*
             Invoke the component that returns an
             HTML representation of a single entry
         */
         journalHTMLRepresentation += JournalEntryComponent(entry)
         
        entryLog.innerHTML +=`
         <article class="journalContainer">
        ${journalHTMLRepresentation}
     </article> `
     }
 })   
}
