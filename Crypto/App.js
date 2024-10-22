const crypto=require('crypto');

const hash=crypto.createHash('sha256').update('password').digest('hex');

console.log('Hash:',hash);


crypto.randomBytes(16, (err, buffer) => {
    if (err) throw err;
    console.log('Random bytes:', buffer.toString('hex'));
});
