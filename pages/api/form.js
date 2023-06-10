export default async function handler(req, res) {
    try {
        const result = await getAPIData();
        res.status(200).json({ result })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}

async function getAPIData() {
    return fetch('https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/junior-nl-all-fields.json')
        .then(response => response.json())
        .then(json => {
        // Found the name.
        // Sends a HTTP success code
        console.log(json);
        return json;
    });
}
