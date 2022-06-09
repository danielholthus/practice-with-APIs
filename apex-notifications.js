const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const axios = require('axios');

const fetchMapData = () => {
    axios.get('https://api.mozambiquehe.re/maprotation?auth=a15c51c67f777eddc9ec7a4f5d3d1d1e').then(resp => {
        console.log(resp.data);
    });
};

mapData = fetchMapData().data;

client.messages
  .create({
     body: 'This is a test run! OOGABOOGABOO',
     from: '+16073005670',
     to: '+16207555383'
   })
  .then(message => console.log(message.sid));