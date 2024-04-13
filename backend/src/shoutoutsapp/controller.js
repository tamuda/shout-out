const pool = require('../../db');
const queries = require('./queries');

// FOR SHOUT OUTS
const getShout_outs = (req, res) => {
    pool.query(queries.getShout_outs, (error, results) => {
        if (error) {
            console.error("Error retrieving shout outs:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const getShout_outBySOId = (req, res) => {
    const soid = parseInt(req.params.soid);
    pool.query(queries.getShout_outBySOId, [soid], (error, results) => {
        if (error) {
            console.error("Error retrieving shout out by SOID:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const addShout_out = (req, res) => {
    const { soid, message, userid, eventid } = req.body;

    pool.query(queries.checkSOIdExists, [soid], (error, results) => {
        if (error) {
            console.error("Error checking if soid exists:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        if (results.rows.length > 0) {
            res.status(400).send('Shout_out ID already exists');
            return;
        }
        pool.query(queries.addShout_out, [soid, message, userid, eventid], (error, results) => {
            if (error) {
                console.error("Error adding shout_out:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(201).send(`Shout_out added successfully`);
            console.log("Shout_out added successfully");
        });
    });
};

const removeShout_out = (req, res) => {
    const soid = parseInt(req.params.soid);
    pool.query(queries.getShout_outBySOId, [soid], (error, results) => {
        if (error) {
            console.error("Error getting shout_out by SOID:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        if (results.rows.length === 0) {
            res.status(404).send('Shout_out with that soid not found');
            return;
        }
        pool.query(queries.removeShout_out, [soid], (error, results) => {
            if (error) {
                console.error("Error deleting shout_out:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(200).send(`Shout_out deleted successfully`);
            console.log(`Shout_out deleted`);
        });
    });
};

const updateShout_out = (req, res) => {
    const soid = parseInt(req.params.soid);
    const { message, userid, eventid } = req.body;

    pool.query(queries.getShout_outBySOId, [soid], (error, results) => {
        if (error) {
            console.error("Error getting shout_out by SOID:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        if (results.rows.length === 0) {
            res.status(404).send('Shout_out with that soid not found');
            return;
        }
        pool.query(queries.updateShout_out, [message, userid, eventid, soid], (error, results) => {
            if (error) {
                console.error("Error updating shout_out:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(200).send(`Shout_out updated successfully`);
            console.log(`Shout_out updated successfully`);
        });
    });
};

// FOR AWARDS
const getAwards = (req, res) => {
    pool.query(queries.getAwards, (error, results) => {
        if (error) {
            console.error("Error retrieving awards:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const addAward = (req, res) => {
    const { awardid, awardname, userid, date } = req.body;

    // Convert the date string to a JavaScript Date object
    const formattedDate = new Date(date);

    // Check if the awardID already exists
    pool.query(queries.checkAwardIdExists, [awardid], (error, results) => {
        if (error) {
            console.error("Error checking if awardID exists:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        // If the awardID already exists, return an error
        if (results.rows.length > 0) {
            res.send('AwardID already exists');
            return;
        }
        // If the awardID doesn't exist, add the award
        pool.query(queries.addAward, [awardid, awardname, userid, formattedDate], (error, results) => {
            if (error) {
                console.error("Error adding award:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(201).send('Award added successfully');
            console.log("Award added successfully");
        });
    });
};


const getAwardByID = (req, res) => {
    const awardid = parseInt(req.params.awardID);
    pool.query(queries.getAwardByID, [awardid], (error, results) => {
        if (error) {
            console.error("Error getting award by AwardID:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        if (results.rows.length === 0) {
            res.status(404).send('Award with that AwardID not found');
            return;
        }
        res.status(200).json(results.rows);
    });
};

const updateAward = (req, res) => {
    const awardid = parseInt(req.params.awardID);
    const { awardname, userid, date } = req.body;

    // Convert the date string to a JavaScript Date object
    const formattedDate = new Date(date);

    // Check if the date is valid
    if (isNaN(formattedDate.getTime())) {
        res.status(400).send('Invalid date format');
        return;
    }

    pool.query(queries.getAwardByID, [awardid], (error, results) => {
        if (error) {
            console.error("Error getting award by AwardID:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        if (!results.rows.length) {
            res.status(404).send('Award with that AwardID not found');
            return;
        }

        pool.query(queries.updateAward, [awardid, awardname, userid, formattedDate], (error, results) => {
            if (error) {
                console.error("Error updating award:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(200).send(`Award updated successfully`);
            console.log(`Award updated successfully`);
        });
    });
};


const removeAward = (req, res) => {
    const awardid = parseInt(req.params.awardID);
    pool.query(queries.getAwardByID, [awardid], (error, results) => {
        if (error) {
            console.error("Error getting award by AwardID:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        if (results.rows.length === 0) {
            res.status(404).send('Award with that AwardID not found');
            return;
        }
        pool.query(queries.removeAward, [awardid], (error, results) => {
            if (error) {
                console.error("Error deleting award:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.status(200).send(`Award deleted successfully`);
            console.log(`Award deleted successfully`);
        });
    });
};


module.exports = {
    getShout_outs,
    getShout_outBySOId,
    addShout_out,
    removeShout_out,
    updateShout_out,
    getAwards,
    addAward,
    getAwardByID,
    updateAward,
    removeAward,
};
