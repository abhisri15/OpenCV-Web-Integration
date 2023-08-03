function CV(){
    cv["onRuntimeInitialized"] = () => {
        console.log("OpenCV Ready")
        let imgMain = cv.imread("img-main");
        cv.imshow("main-canvas", imgMain);
        imgMain.delete();

        // RGB
        document.getElementById("button-rgb").onclick=function(){
            let imgMain = cv.imread("img-main");
            cv.imshow("main-canvas",imgMain);
            imgMain.delete();
        };

        // GrayScale
        document.getElementById("button-gray").onclick=function(){
            let imgMain = cv.imread("img-main");
            let imgGray = imgMain.clone();
            // Converting image to GrayScale
            cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY, 0);
            cv.imshow("main-canvas",imgGray);
            imgMain.delete();
            imgGray.delete();
        };

        // Blur
        document.getElementById("button-blur").onclick=function(){
            let imgMain = cv.imread("img-main");
            let imgBlur = imgMain.clone();
            // Adding Blur
            let ksize = new cv.Size(35,35);
            cv.GaussianBlur(imgMain, imgBlur, ksize, 0);
            cv.imshow("main-canvas",imgBlur);
            imgMain.delete();
            imgBlur.delete();
        };

        // Canny-outline
        document.getElementById("button-edge").onclick=function(){
            let imgMain = cv.imread("img-main");
            let imgCanny = imgMain.clone();
            // Find Edges using canny edge detector
            cv.Canny(imgMain, imgCanny, 50, 100);
            cv.imshow("main-canvas",imgCanny);
            imgMain.delete();
            imgCanny.delete();
        };

    };
}