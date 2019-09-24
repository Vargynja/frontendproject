import React from 'react'

function HavaintoForm(){


    return (
        <div>
            <form>
                <label>Missä</label>
                <input/>
                <label>Milloin</label>
                <input/>
                <input type="submit" value='Lisää' onClick={addHavainto}/>
            </form>
        </div>
    );
}