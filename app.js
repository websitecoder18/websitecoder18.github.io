document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");

    for (const image of images) {
        console.log(image);
        fetch("https://placebear.com/g/200/300")
            .then(response => response.blob()) // Fetch the image as a blob
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob); // Create a local URL for the blob
                image.src = imageUrl;
                image.width = 100;
                image.height = 100;
            })
            .catch(error => console.error("Error fetching image:", error));
    }
});
