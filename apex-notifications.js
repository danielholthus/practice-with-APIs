// const accountSid = process.env.ACee6c608b571621cd9cea06253738bbb2;
// const authToken = process.env.66fc6bd3157954cc59595a7b08898eec;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+16073005670',
//      to: '+16207555383'
//    })
//   .then(message => console.log(message.sid));

const fetchMapData = () => {
    fetch('https://api.mozambiquehe.re/maprotation?auth=a15c51c67f777eddc9ec7a4f5d3d1d1e').then(resp => {
        resp.json().then(data => {
            console.log(data);
        });
    });
};