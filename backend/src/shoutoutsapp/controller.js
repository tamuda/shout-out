const pool = require('../../db');
const queries = require('./queries');

const getShout_outs = (req, res) => {
    pool.query(queries.getShout_outs, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getShout_outBySOId = (req, res) => {
    const soid = parseInt(req.params.soid);
    pool.query(queries.getShout_outBySOId, [soid], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const addShout_out = (req, res) => {
    const { soid, message, userid, eventid } = req.body;
    // Check if soid exists 
    pool.query(queries.checkSOIdExists, [soid], (error, results) => {
        if (error) {
            console.error("Error checking if soid exists:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        if (results.rows.length) {
            res.status(400).send('Shout_out ID already exists');
            return;
        }
        // If not, add the shout_out
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
        if (!results.rows.length) {
            res.send('Shout_out with that soid not found');
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
        if (!results.rows.length) {
            res.send('Shout_out with that soid not found');
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


module.exports = {
    getShout_outs,
    getShout_outBySOId,
    addShout_out,
    removeShout_out,
    updateShout_out,
};
