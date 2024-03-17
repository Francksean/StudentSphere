const dateProvider = require('../utils/dateProvider');

const dbconnector = require('../utils/dbconnector')


exports.addEvent = (req, res) => {
  const { authorId, eventName, eventDescription, poster, category } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `CALL InsertEvent(${authorId}, "${eventName}", "${eventDescription}", "${dateProvider.date()}", "${poster}", "${category}")`,
      (error, results) => {
        if (error) {
          console.log(error)
          res.status(500).json({ error : error, success : false, message: 'An error occurred while registering the event' });
        } else {
          res.status(200).json({ message: 'Event proposed successfully', success: true, results: results });
        }
      }
    );
  });
};

exports.addBdeEvent = (req, res)=>{
  
  const { authorId, eventName, eventDescription, poster, beginDate, endDate, category  } = req.body;

  const connection = dbconnector.createConnection()
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `CALL InsertEventBDE(${authorId}, "${eventName}", "${eventDescription}", '${dateProvider.date()}', '${beginDate}', '${endDate}', '${poster}', '${category}', 'scheduled')`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while registering the event" });
        } else {
          res.status(200).json({ message: "event proposed successfully", success : true, results: results });
        }
      }
    );
  });
}

exports.validateEvent = (req, res) => {
  const { id } = req.params;
  const { beginDate, endDate } = req.body;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
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

exports.getAllScheduledEvent = async (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL GetAllScheduledEvents()',
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).send({ message: 'An error occurred while fetching events', success: false });
        } else {
          res.status(200).send({ message: 'Scheduled events are available', success: true, results: results });
        }
      }
    );
  });
};


exports.getAllPastEvents = async (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL GetAllPastEvents()',
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).send({ message: 'An error occurred while fetching past events', success: false });
        } else {
          res.status(200).send({ message: 'Past events are available', success: true, results: results });
        }
      }
    );
  });
};

exports.getAllValidatedEvents = async (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL GetAllValidatedEvents()',
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).send({ message: 'An error occurred while fetching events', success: false });
        } else {
          res.status(200).send({ message: 'Events are available', success: true, results: results });
        }
      }
    );
  });
};



exports.deleteEvent = (req, res) => {
  const { id } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
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

exports.getEventById = (req, res) => {
  const { id } = req.params;
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `SELECT * FROM events WHERE id = ${id}`,
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).send({ message: 'An error occurred while fetching the event', success: false });
        } else {
          console.log(results)
          res.status(200).send({ message: 'event is available', success: true, results: results });
        }
      }
    );
  });
}

exports.getAllComments = (req, res) => {
  const { id } = req.params
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    try {
      const results = await new Promise((resolve, reject) => {
        connection.query(`CALL ShowEventComments(?)`, [id], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      
      res.status(200).json({ message: "Commentaires chargés", success: true, results: results });
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ message: "Une erreur s'est produite lors de la recherche des commentaires", success: false, error: error });
    } finally {
      connection.end();
    }
  });
}

exports.addComment = (req, res) => {
  const { eventId, authorId, content } = req.body

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `CALL addEventComment(${authorId}, ${eventId},'${dateProvider.date()}', "${content}")`,
      (error, results) => {
        if (error) {
          res.status(401).json({ success: false, message: "Problem while adding the comment", results: results, error: error });
        } else {
          res.status(200).json({ success: true, message: "comment added successfully", results: results });
        }
      }
    );
  })
}

exports.removeComment = (req, res) => {
  const { commentId } = req.params;
  
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `DELETE FROM event_comments WHERE id = ${commentId}`,
      [commentId],
      (error, results) => {
        if (error) {
          res.status(401).json({ success: false, message: "Problem while deleting the comment", results: results, error: error });
        } else {
          res.status(200).json({ success: true, message: "comment deleted successfully", results: results });
        }
      }
    );
  })
};


exports.addEventLike = (req, res) => {
  const { id } = req.params;
  
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL AddEventLike(?)',
      [id],
      (error, results) => {
        if (error) {
          res.status(401).json({ success: false, message: "Problem while adding the like", results: results, error: error });
        } else {
          res.status(200).json({ success: true, message: "Like added successfully", results: results });
        }
      }
    );
  })
};

exports.removeEventLike = (req, res) => {
  const { id } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      'CALL RemoveEventLike(?)',
      [id],
      (error, results) => {
        if (error) {
          res.status(401).json({ success: false, message: "Problem while deleting the like", results: results, error: error });
        } else {
          res.status(200).json({ success: true, message: "Like deleted successfully", results: results });
        }
      }
    );
  })

};

exports.getMonthEvents = (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `SELECT * FROM events WHERE (SELECT MONTH (beginDate) = "${dateProvider.actualMonth()}") AND state = "validé"`,
      (error, results) => {
        if (error) {
          console.error(`Error: ${error}`);
          res.status(500).send({ message: 'An error occurred while fetching the event', success: false });
        } else {
          console.log(results)
          res.status(200).send({ message: 'event is available', success: true, results: results });
        }
      }
    );
  });
}

exports.getLikeNumber = (req, res) => {
  const { id } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
    async () => {
    await connection.query(
      'CALL GetEventLikeNumber(?)',
      [id],
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while fetching number of likes" });
        } else {
          const likeCount = results[0];
          res.status(200).json({ message: "Number of likes fetched successfully", success: true, likeCount: likeCount });
        }
      }
    );
  })
};