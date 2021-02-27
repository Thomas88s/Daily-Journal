import { getEntries } from "./JournalDataProvider.js"



const render = () => {

    contentTarget.innerHTML = `
    <h2>Notes</h2>
            </select>
        </fieldset>
        <fieldset>
            <label for="entry__date">Author: </label>
            <input type="text" id="entry__date" name="entry__date">
        </fieldset>
        <fieldset>
            <label for="entry__concept">Date: </label>
            <input type="date" id="entry__concept" name="entry__concept">
        </fieldset>
        <fieldset>
            <label for="entry__text">Note: </label>
            <input type="text" id="entry__text" name="entry__text">
        </fieldset>
        <fieldset>
            <label for="entry__mood">Mood: </label>
            <input type="text" id="entry__mood" name="entry__mood">
        </fieldset>
        <button id="saveNote">Save Note</button>
    `}