const { date } = require('../utils/dateProvider');
const dbconnector = require('../utils/dbconnector');


exports.addIdea = (req, res) => {
  const { authorId, title, content } = req.body;
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
      `CALL InsertIdea(${authorId}, '${title}', '${content}', '${date}')`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while registering the idea" });
        } else {
          res.status(200).json({ message: "Idea proposed successfully", success: true, results: results });
        }
      }
    );
  });
};

exports.getIdeaById = (req, res) => {
  const { ideaId } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
      `CALL GetIdeaById(${ideaId})`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while fetching the idea" });
        } else {
          res.status(200).json({ message: "Idea returned successfully", success: true, results: results });
        }
      }
    );
  });
};


exports.getAllIdeas = (req, res) => {
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    await connection.query(
      `CALL GetAllIdeas()`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while fetching ideas" });
        } else {
          res.status(200).json({ message: "Ideas fetched successfully", success: true, results: results });
        }
      }
    );
  });
};


exports.removeIdeById = (req, res) => {
  const { ideaId } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
  async () => {
    await connection.query(
      `CALL RemoveIdeaById(${ideaId})`,
      (error, results) => {
        if (error) {
          res.status(500).json({ message: "An error occurred while deleting the idea" });
        } else {
          res.status(200).json({ message: "Idea deleted successfully", success: true, results: results });
        }
      }
    );
  });
};


exports.getAllComments = (req, res) => {
  const { id } = req.params
  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection, 
  async () => {
    try {
      const results = await new Promise((resolve, reject) => {
        connection.query(`CALL ShowIdeaComments(?)`, [id], (error, results) => {
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

exports.addIdeaLike = (req, res) => {
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

exports.removeIdeaLike = (req, res) => {
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

exports.getLikeNumber = (req, res) => {
  const { id } = req.params;

  const connection = dbconnector.createConnection();
  dbconnector.initConnection(connection,
    async () => {
    await connection.query(
      'CALL GetIdeaLikeNumber(?)',
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