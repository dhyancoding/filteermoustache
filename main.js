function preload() {
    moustache = loadImage("https://i.postimg.cc/G3W9yM3h/Screenshot-2024-02-05-at-6-44-55-pm-removebg-preview-1.png")
}

    noseX = 0
    noseY = 0

    function setup() {
        canvas = createCanvas(600, 450)
        canvas.center()
        v = createCapture(VIDEO)
        v.size(600, 450)
        v.hide()
        posenet = ml5.poseNet(v, model_Loaded)
        posenet.on("pose", gotResults)
    }

    function gotResults(result) {
        if (result.length > 0) {
            console.log("x = " + result[0].pose.nose.x)
            console.log("y = " + result[0].pose.nose.y)
            noseX = result[0].pose.nose.x
            noseY = result[0].pose.nose.y
        }

    }

    function model_Loaded() {
        console.log("poseNet has been loaded")
    }

    function draw() {
        image(v, 0, 0, 600, 450)
        image(moustache, noseX-100, noseY-5, 200, 55)
    }


    function take_Snapshot() {
        save("filterimage.png")
    }
