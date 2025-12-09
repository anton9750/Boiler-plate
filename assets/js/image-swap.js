// HTML

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Image Swap Gallery</title>
//     <link rel="stylesheet" href="assets/css/main.css">
//     <script src="assets/js/main.js" defer></script>
// </head>
// <body>
//     <div class="gallery">
//         <div class="big-image">
//             <img src="assets/images/download.jpg" alt="Big Image">
//         </div>
//         <div class="small-images">
//             <img src="assets/images/images.jpg" alt="Small Image 1">
//             <img src="assets/images/images.png" alt="Small Image 2">
//             <img src="assets/images/download.png" alt="Small Image 3">
//             <img src="assets/images/download.png" alt="Small Image 4">
//         </div>
//     </div>
// </body>
// </html>






// image swap kode


const bigImageContainer = document.querySelector(".big-image img");
const smallImages = Array.from(document.querySelectorAll(".small-images img"));

smallImages.forEach((smallImg, index) => {
    smallImg.addEventListener("click", () => {
        // Swap the src of big image and clicked small image
        const temp = bigImageContainer.src;
        bigImageContainer.src = smallImg.src;
        smallImg.src = temp;
    });
});
