import React from "react";

const ListofPlayers = () => {
    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "Shikhar Dhawan", score: 65 },
        { name: "Rishabh Pant", score: 72 },
        { name: "Hardik Pandya", score: 50 },
        { name: "KL Rahul", score: 77 },
        { name: "Jasprit Bumrah", score: 30 },
        { name: "Ravindra Jadeja", score: 68 },
        { name: "MS Dhoni", score: 99 },
        { name: "Suryakumar Yadav", score: 82 },
        { name: "Mohammed Shami", score: 25 }
    ];

    const playersWithScoresLessThan70 = players.filter(
        (player) => player.score <= 70
    );

    return (
        <div>
            <h2>List of All Players:</h2>
            <ul>
                {players.map((item, index) => (
                    <li key={index}>
                        Mr. {item.name} <span>{item.score}</span>
                    </li>
                ))}
            </ul>

            <hr />

            <h2>List of Players having Scores Less than 70:</h2>
            <ul>
                {playersWithScoresLessThan70.map((item, index) => (
                    <li key={index}>
                        Mr. {item.name} <span>{item.score}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListofPlayers;