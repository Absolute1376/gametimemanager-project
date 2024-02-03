import React from 'react';

// Sample data for the team players
const players = [
  { id: 1, name: 'John Doe', jerseyNumber: 9, height: '6ft 2in', weight: '185 lbs' },
  { id: 2, name: 'Jane Smith', jerseyNumber: 22, height: '5ft 9in', weight: '140 lbs' },
  { id: 3, name: 'Alex Johnson', jerseyNumber: 13, height: '6ft', weight: '170 lbs' },
  { id: 4, name: 'Chris Lee', jerseyNumber: 5, height: '5ft 11in', weight: '165 lbs' },
  { id: 5, name: 'Pat Taylor', jerseyNumber: 18, height: '6ft 1in', weight: '180 lbs' },
];

// Inline style objects
const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  },
  header: {
    color: '#333',
  },
};

const TeamList = () => {
  return (
    <div>
      <h2 style={styles.header}>Team Roster</h2>
      <ul style={styles.list}>
        {players.map(player => (
          <li key={player.id} style={styles.listItem}>
            <strong>{player.name}</strong> - #{player.jerseyNumber} - {player.height} - {player.weight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;