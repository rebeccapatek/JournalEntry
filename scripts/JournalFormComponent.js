import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".journalForm")

export const journalFormComponent = () => {
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveEntry") {
            // const hiddenInputValue = document.querySelector("#note-id").value
            // if (hiddenInputValue !== "") {
            //     const editedNote = {
            //         id: parseInt(document.querySelector("#note-id").value, 10),
            //         noteText: document.querySelector("#note-text").value,
            //         noteSuspect: document.querySelector("#note-suspect").value,
            //         date: Date.now()
            //     }

            //     editNote(editedNote).then(() => {
            //         eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
            //     })
            // }
            // else {
            const message = new CustomEvent("JournalSaved")
            const newEntry = {
                "date": document.querySelector("#journalDate").value,
                "concept": document.querySelector("#conceptsCovered").value,
                "entry": document.querySelector("#journalEntry").value,
                "mood": document.querySelector("#mood").value

            }
            saveEntry(newEntry).then(() => {
                eventHub.dispatchEvent(message)
            })
        }
    })

    const render = () => {
    contentTarget.innerHTML = `

    
    <form action="">
    <fieldset class=fieldset>
        <label for="jornalDate">Date of entry</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>   
    <fieldset class=fieldset>

        <label for="conceptsCovered">Concepts covered</label>
        <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>  
    <fieldset class=fieldset>

        <label for="journalEntry">Journal Entry</label>
        <textarea name="journalEntry" id="journalEntry" cols="30" rows="4"></textarea>            
    </fieldset>  
    <fieldset class=fieldset>

        <label for="mood">Mood for the day</label>
        <select name="mood" id="mood">
            <option value="happy">Happy</option>
            <option value="still not sure">Still not sure</option>
            <option value="frustrated">Frustrated</option>
            <option value="sad">Sad</option>
        </select>
    </fieldset>
    </form>
    <button id="saveEntry">Record Journal Entry</button>
    `
    }
    render ()
}
