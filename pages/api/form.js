export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('CITY');
    console.log(body);

    const jobs = showMeData();

    if (!jobs) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'No jobs found :(' })
      }
     
      // Found the name.
      // Sends a HTTP success code
      res.status(200).json({ data: `${jobs}` })
}

async function showMeData() {
    const getData = async () => {
        const response = await fetch('https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/junior-nl-all-fields.json');
        const data = await response.json();
        console.log(data)
        return data;
    }
    let jsonData = await getData();
}

