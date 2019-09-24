import React, { useState } from 'react'

function LintuList(props) {
    const [linnut, setLinnut] = useState([]);
    
    const rows = () => {
        linnut.forEach(lintu => 
            <tr>
                <td>{lintu.name}</td><td>{lintu.latinName}</td><td>{lintu.migrates}</td>
                <td>{lintu.spread}</td><td>{lintu.rarity}</td><td>{lintu.havainnot.lenght}</td>
                <td><button>Uusi havainto</button></td>
            </tr>
        );
    }
    return (
        <div>
            <table><tbody>
                <tr>
                    <th>Nimi</th><th>Tieteellinen nimi</th><th>Muuttolintu</th>
                    <th>Levinneisyys</th><th>Harvinaisuus</th><th>Havainnot</th>
                    <th>Lisää havainto</th>
                </tr>
                {rows}
            </tbody></table>
            <button>Lisää lintu</button>
        </div>
    );
}
export default LintuList;