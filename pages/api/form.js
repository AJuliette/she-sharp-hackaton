export default async function handler(req, res) {
    console.log('BODY');
    console.log(req.body.city);
    try {
        const result = await getAPIData(req.body);
        res.status(200).json({ result })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}

async function getAPIData(params) {
    return fetch('https://148581a8-8e6e-4837-a77e-d8733cf62e83.mock.pstmn.io/jobs',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"filters":[{"field": "city", "operator": "EQUALS", "value": params.city}]})
        })
        .then(response => response.json())
        .then(json => {
        // Found the name.
        // Sends a HTTP success code
        return json;
    });
}
