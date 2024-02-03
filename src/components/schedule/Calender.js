const events = [
    { id: 1, type: 'Practice', detail: 'Fielding Practice', date: 'Tuesday', time: '6:45 PM', location: 'Central Park Field #3' },
    { id: 2, type: 'Practice', detail: 'Batting Practice', date: 'Thursday', time: '6:45 PM', location: 'Downtown Batting Cages' },
    { id: 3, type: 'Tournament', detail: 'Regional Championship', date: 'Saturday', time: '10:00 AM', location: 'Greenwood Sports Arena' },
    { id: 4, type: 'Tournament', detail: 'Regional Championship', date: 'Sunday', time: '10:00 AM', location: 'Greenwood Sports Arena' },
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
      backgroundColor: '#e0e0e0',
      borderRadius: '8px',
    },
    header: {
      color: '#333',
    },
  };
  
  const Calendar = () => {
    return (
      <div>
        <h2 style={styles.header}>Team Schedule</h2>
        <ul style={styles.list}>
          {events.map(event => (
            <li key={event.id} style={styles.listItem}>
              <strong>{event.detail}</strong> ({event.type}) - {event.date} at {event.time}, {event.location}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Calendar;