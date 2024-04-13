const getShout_outs = "SELECT * FROM Shout_outs";
const getShout_outBySOId = "SELECT * FROM Shout_outs WHERE soid = $1";
const checkSOIdExists = "SELECT s FROM Shout_outs s WHERE s.soid = $1";
const addShout_out = "INSERT INTO Shout_outs (soid, message, userid, eventid) VALUES ($1, $2, $3, $4)";
const removeShout_out = "DELETE FROM Shout_outs WHERE soid = $1";
const updateShout_out = "UPDATE Shout_outs SET message = $1, userid = $2, eventid = $3 WHERE soid = $4";
const getAwards = "SELECT * FROM Awards";
const getAwardByID = "SELECT * FROM Awards WHERE awardID = $1";
const checkAwardIdExists = "SELECT a FROM Awards a WHERE a.awardID = $1";
const addAward = "INSERT INTO Awards (AwardID, AwardName, UserID, Date) VALUES ($1, $2, $3, $4)";
const removeAward = "DELETE FROM Awards WHERE awardID = $1";
const updateAward = "UPDATE Awards SET AwardName = $2, UserID = $3, Date = $4 WHERE awardID = $1";

module.exports = {
    getShout_outs,
    getShout_outBySOId,
    checkSOIdExists,
    addShout_out,
    removeShout_out,
    updateShout_out,
    getAwards,
    getAwardByID,
    checkAwardIdExists,
    addAward,
    removeAward,
    updateAward,
};
