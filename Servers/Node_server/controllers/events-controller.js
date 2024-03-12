const date = require('../utils/dateProvider');

const dbconnector = require('../utils/dbconnector')



exports.addEvent = (req, res) => {
  const { authorId, name, description, poster, category } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, () => {
    const newEvent = connection.query(
      `CALL InsertEvent(${authorId}, "${name}", "${description}", "${poster}", "${category}")`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: 'An error occurred while registering the event' });
        } else {
          res.status(200).json({ message: 'Event proposed successfully', success: true, results: results });
        }
      }
    );
  });
};

exports.validateEvent = (req, res) => {
  const { id } = req.params;
  const { beginDate, endDate } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, () => {
    const validateEvent = connection.query(
      `CALL ValidateEvent(${id}, "${beginDate}", "${endDate}")`,
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).json({ message: 'An error occurred while validating the event' });
        } else {
          res.status(200).json({ message: 'Event validated successfully', success: true, results: results });
        }
      }
    );
  });
};

exports.getAllPastEvents = (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, () => {
    connection.query(
      'CALL GetAllPastEvents()',
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).json({ message: 'An error occurred while fetching past events', success: false });
        } else {
          res.status(200).json({ message: 'Past events are available', success: true, results: results });
        }
      }
    );
  });
};


exports.deleteEvent = (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, () => {
    const { id } = req.params;
    const deletedEvent = connection.query(
      `CALL DeleteEvent(${id})`,
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).json({ message: 'An error occurred while deleting the event' });
        } else {
          res.status(200).json({ message: 'Event deleted successfully' });
        }
      }
    );
  });
};