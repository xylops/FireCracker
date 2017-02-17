module.exports = {
    'secret': 'thisissomerandomsecretkey',
    'database': 'mongodb://xylops:1234@ds153729.mlab.com:53729/firecracker',
    //refresh users token every 5 minutes
    'tokenExpiredIn': 300,
    //forced user to do a relogin every 6 hours
    'forceExpired':4800
};
