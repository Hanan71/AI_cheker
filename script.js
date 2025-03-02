document.getElementById("pingButton").addEventListener("click", async () => {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "examination...";

    try {
        let response = await fetch("http://localhost:3000/ping"); // Make sure of the right path
        let data = await response.json();

        let color = "green";
        if (data.latency > 150) color = "orange";
        if (data.latency > 300) color = "red";

        resultDiv.innerHTML = `Response time: ${data.latency} Millisecond`;
        resultDiv.style.color = color;
    } catch (error) {
        console.error("The test failed, try again:", error);
        resultDiv.innerHTML = "The test failed, try again.";
        resultDiv.style.color = "red";
    }
});
