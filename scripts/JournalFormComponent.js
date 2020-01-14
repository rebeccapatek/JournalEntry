
const contentTarget = document.querySelector(".journalForm")

export const journalFormComponent = () => {
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
    <button>Record Journal Entry</button>
    </form>
    `
    }
    render ()
}
