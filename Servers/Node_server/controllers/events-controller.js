const date = require('../utils/dateProvider');

const dbconnector = require('../utils/dbconnector')



exports.addEvent = (req, res)=>{
  
  const { authorId, eventName, eventDescription, poster, category  } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const newEvent = connection.query(
    `INSERT INTO events (authorId, name, description, datePosted, poster, category, state) 
    VALUES (${authorId}, "${eventName}", "${eventDescription}", '${date}', '${poster}', '${category}', 'proposed')`,
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "An error occurred while registering the event" });
      } else {
        res.status(200).json({ message: "event proposed successfully", success : true, results: results });
      }
    }
  );

}

exports.validateEvent = (req, res) => {

  const { id } = req.params.id  
  const { beginDate, endDate } = req.body;
  
  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const validateEvent = connection.query(
    `UPDATE events SET beginDate = '${beginDate}',endDate = '${endDate}', state = 'scheduled' WHERE id = '${id}'`,
    (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "An error occurred while validating the event" });
      } else {
        res.status(200).json({ message: "event validate successfully", success : true, results: results });
      }
    }
  )

}

exports.getAllPastEvents = (req, res) => {
  
  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  connection.query(
    `SELECT * from events WHERE endDate < '2024-03-09'`,
    (error, results) => {
      if (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: "An error occurred while fetching past events", success : false });
      } else {
        res.status(200).json({ message: "past events are available", success : true, results: results });
      }
    }
  );
}


exports.deleteEvent = (req, res) => {
  const connection = dbconnector.createConnection()
  dbconnector.initConnection

  const { id } = req.params.id
  
  const deletedEvent = connection.query(
    `DELETE FROM events WHERE id = '${id}'`
  )

}