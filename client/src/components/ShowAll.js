import React, { useEffect, useState } from 'react';
import axios from "axios";
import PopUpButton  from './PopUpButton';

export const ShowAll = () => {
    const styles = {
        borderArround: { border: "2px solid black" }
    }

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(Players => setPlayers(Players.data))
            .catch(err => console.log(err));
    }, [players]);

    return (
        <table style={styles.borderArround} class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Team Name</th>
                    <th scope="col">Prefered Position</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player, i) => (
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><PopUpButton name={player.name} id={player._id} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
