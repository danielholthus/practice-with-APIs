const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const axios = require('axios');
const numbers = ['+16207555383', '+18317470619'];

const fetchMapData = () => {
    axios.get('https://api.mozambiquehe.re/maprotation?auth=a15c51c67f777eddc9ec7a4f5d3d1d1e').then(resp => {

        mapData = resp.data;
        console.log(mapData);

        if (mapData.next.map == "World's Edge" && mapData.current.remainingMins < 31){
            for(i in numbers) {
                client.messages
                .create({
                    body: 'Cake time, bucko! World\'s Edge in 30 minutes!',
                    from: '+16073005670',
                    to: numbers[i]
                })
                .then(message => console.log("Message sent successfully! SID: ", message.sid))
                .catch(err => console.log(err));
            }
        }
    });
};

fetchMapData();