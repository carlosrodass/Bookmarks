const jwt = require('jsonwebtoken');


function sendUnauthorized(res) {
    return res.status(403).json({ errorCode: 403, errorText: 'Forbidden' });
}

async function verifyJwtToken(token, secret) {
    try {
        const decoded = await jwt.verify(token, secret);

        if (decoded) {
            if (decoded.sign.secret != secret) {
                return false;
            }
            return decoded;
        }
        return false;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}


const checkAuth = async (token, res) => {

    try {
        const verified = await verifyJwtToken(token, 'secretkeycr');
        if (!verified) {
            sendUnauthorized(res);
            return false;
        }
        return true;
    }
    catch (err) {
        console.log(err);
        sendUnauthorized(res);
        throw err;
    }
}

module.exports = {
    checkAuth,
    sendUnauthorized
}