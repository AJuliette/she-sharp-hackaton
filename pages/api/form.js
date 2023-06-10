export default async function handler(req, res) {
    try {
        const result = await getAPIData();
        res.status(200).json({ result })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}

async function getAPIData() {
    return fetch('https://148581a8-8e6e-4837-a77e-d8733cf62e83.mock.pstmn.io/jobs',
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
        .then(response => response.json())
        .then(json => {
        // Found the name.
        // Sends a HTTP success code
        console.log(json);
        return json;
    });
}
