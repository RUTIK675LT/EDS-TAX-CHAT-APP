/*
document.getElementById("sendButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    
    // Call the ChatGPT API here
    const apiKey = "YOUR_API_KEY"; // Replace with your API key
    const endpoint = "CHATGPT_API_ENDPOINT"; // Replace with the appropriate endpoint

    // Sample API call (you'll need to adjust this according to the actual API specifications)
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: userInput
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseArea").innerText = data.response;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

document.getElementById("cancelButton").addEventListener("click", function() {
    document.getElementById("userInput").value = "";
});
*/

document.getElementById("sendButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    
    const apiKey = "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" ; // Replace with your API key
    const endpoint = "https://api.openai.com/v1/engines/davinci/completions";

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150 // Limit response to 150 tokens (adjust as needed)
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("responseArea").innerText = data.choices[0].text.trim();
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("responseArea").innerText = "Error fetching response.";
    });
});

document.getElementById("cancelButton").addEventListener("click", function() {
    document.getElementById("userInput").value = "";
});

