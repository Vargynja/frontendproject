import React from 'react'
import Lintu from 'data/Lintu'
function LintuForm(props) {
 
    return (
        <div>
            <form>
                <label>Nimi</label>
                <input/>
                <label>Tieteellinen nimi</label>
                <input/>
                <label>Muuttolintu</label>
                <input/>
                <label>Levenneiysyys</label>
                <input/>
                <label>Harvinaisuus</label>
                <input/>
                <input type="submit" value='Lisää' onClick={addBird}/>
            </form>
        </div>
    );
}
export default LintuForm;