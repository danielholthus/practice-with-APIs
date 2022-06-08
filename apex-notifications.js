const fetchMapData = () => {
    fetch('https://api.mozambiquehe.re/maprotation?auth=a15c51c67f777eddc9ec7a4f5d3d1d1e').then(resp => {
        resp.json().then(data => {
            console.log(data);
            const mapData = data;
        });
    });
};