const date = require('../utils/dateProvider');


exports.addEvent = (req, res)=>{
  
  const connection = res.locals.currentConnection

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

}

exports.validateEvent = (req, res) => {

  const { id } = req.params.id  
  const { beginDate, endDate } = req.body;
  
  const connection = res.locals.currentConnection

  const validateEvent = connection.query(
    `UPDATE events SET beginDate = '${beginDate}',endDate = '${endDate}'WHERE id = '${id}'`,
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

exports.get_all_past_events = (req, res) => {

  console.log ("ok control")
  
  const connection = res.locals.currentConnection

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

}

exports.deleteEvent = (req, res) => {

  const { id } = req.params.id
  
  const connection = res.locals.currentConnection

  const deletedEvent = connection.query(
    `DELETE FROM events WHERE id = '${id}'`
  )

}