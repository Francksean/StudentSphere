const date = require('../utils/dateProvider');
const db = require('../utils/dbconnector')



exports.addEvent = (req, res)=>{
  
  const connection = db.createConnection();
  db.initConnection(connection)

  const { authorId, eventName, eventDescription, poster, category  } = req.body;

  const newEvent = connection.query(
    `INSERT INTO events (authorId, name, description, datePosted, poster, category, state) 
    VALUES (${authorId}, "${eventName}", "${eventDescription}", '${date}', '${poster}', '${category}', 'proposed')`,
    (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "An error occurred while registering the event" });
      } else {
        res.status(200).json({ message: "event proposed successfully", success : true, results: results });
      }
    }
  );

  connection.end()

}

exports.validateEvent = (req, res) => {

  const connection = db.createConnection();
  db.initConnection(connection)

  const { eventId, beginDate, endDate } = req.body;

  const validateEvent = connection.query(
    `UPDATE events SET beginDate = '${beginDate}',endDate = '${endDate}'WHERE id = '${eventId}'`,
    (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "An error occurred while validating the event" });
      } else {
        res.status(200).json({ message: "event validate successfully", success : true, results: results });
      }
    }
  )
  
  connection.end()

}

exports.get_all_past_events = (req, res) => {

  const connection = db.createConnection();
  db.initConnection(connection)

  const allPastEvents = connection.query(
    `SELECT * from events WHERE endDate < '${date}'`,
    (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "An error occurred while fetching past events" });
      } else {
        res.status(200).json({ message: "past events are available", success : true, results: results });
      }
    }
  )

  connection.end()

}