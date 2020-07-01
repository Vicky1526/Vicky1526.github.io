const modal = document.querySelector('.modal');
const original = document.querySelector('.fullImage');
const caption = document.querySelector('.caption');

var currentPhoto = 0;


var images = [{
    fileName: "20150626-DSC_0053",
    title: "Silent River"
}, {
    fileName: "20150626-DSC_0086",
    title: "",
}, {
    fileName: "20150627-DSC_0255",
    title: "",
}, {
    fileName: "20150722-DSC_0035",
    title: "",
}, {
    fileName: "20150722-DSC_0038",
    title: "",
}, {
    fileName: "20150722-DSC_0125",
    title: "",
}, {
    fileName: "20150722-DSC_0129",
    title: "",
}, {
    fileName: "20150723-DSC_0251",
    title: "",
}, {
    fileName: "20150723-DSC_0355",
    title: "",
}, {
    fileName: "20150723-DSC_0390",
    title: "",
}, {
    fileName: "20150723-DSC_0456",
    title: "",
}, {
    fileName: "20150723-DSC_0460",
    title: "",
}, {
    fileName: "20150726-DSC_0525",
    title: "",
}, {
    fileName: "20150726-DSC_0533",
    title: "",
}, {
    fileName: "20150726-DSC_0547",
    title: "",
}, {
    fileName: "20150726-DSC_0569",
    title: "",
}, {
    fileName: "20150830-DSC_0091",
    title: "",
}, {
    fileName: "20150830-DSC_0102",
    title: "",
}, {
    fileName: "20150830-DSC_0133",
    title: "",
}, {
    fileName: "20150830-DSC_0141",
    title: "",
}, {
    fileName: "20151224-DSC_0350",
    title: "",
}, {
    fileName: "20151224-DSC_0542",
    title: "",
}, {
    fileName: "20151224-DSC_0634",
    title: "",
}, {
    fileName: "20160528-DSC_0042",
    title: "",
}, {
    fileName: "20160528-DSC_0055",
    title: "",
}, {
    fileName: "20160528-DSC_0065",
    title: "",
}, {
    fileName: "20160528-DSC_0085",
    title: "",
}, {
    fileName: "20160814-DSC_0045",
    title: "",
}, {
    fileName: "20160815-DSC_0088",
    title: "",
}, {
    fileName: "20160815-DSC_0094",
    title: "",
}, {
    fileName: "20160816-DSC_0180",
    title: "",
}, {
    fileName: "20160816-DSC_0219",
    title: "",
}, {
    fileName: "20160816-DSC_0246",
    title: "",
}, {
    fileName: "20160816-DSC_0269",
    title: "",
}, {
    fileName: "20170624-DSC_0433",
    title: "",
}, {
    fileName: "20170820-DSC_0018",
    title: "",
}, {
    fileName: "20171029-DSC_0109",
    title: "",
}, {
    fileName: "20171029-DSC_0111",
    title: "",
}, {
    fileName: "20180820-DSC_0037",
    title: "",
}, {
    fileName: "20180820-DSC_0045",
    title: "",
}, {
    fileName: "20180820-DSC_0062",
    title: "",
}, {
    fileName: "20180820-DSC_0067",
    title: "",
}, {
    fileName: "20180820-DSC_0081",
    title: "",
}, {
    fileName: "20180820-DSC_0116",
    title: "",
}, {
    fileName: "20180824-DSC_0109",
    title: "",
}, {
    fileName: "20180824-DSC_0202",
    title: "",
}, {
    fileName: "20180909-DSC_0074",
    title: "",
}, {
    fileName: "20180909-DSC_0078",
    title: "",
}, {
    fileName: "20190608-DSC_0139",
    title: "",
}, {
    fileName: "20190608-DSC_0224",
    title: "",
}, {
    fileName: "20190608-DSC_0231",
    title: "",
}, {
    fileName: "20190608-DSC_0235",
    title: "",
}, {
    fileName: "20190608-DSC_0240",
    title: "",
}, {
    fileName: "20190608-DSC_0292",
    title: "",
}, {
    fileName: "20190608-DSC_0388",
    title: "",
}, {
    fileName: "20190714-DSC_0030",
    title: "",
}, {
    fileName: "20190714-DSC_0062",
    title: "",
}, {
    fileName: "20190714-DSC_0069",
    title: "",
}, {
    fileName: "20190714-DSC_0093",
    title: "",
}, {
    fileName: "20190714-DSC_0094",
    title: "",
}, {
    fileName: "20190714-DSC_0098",
    title: "",
}, {
    fileName: "20190714-DSC_0099",
    title: "",
}, {
    fileName: "20190714-DSC_0117",
    title: "",
}, {
    fileName: "20190714-DSC_0154",
    title: "",
}, {
    fileName: "20190714-DSC_0162",
    title: "",
}, {
    fileName: "20190714-DSC_0163",
    title: "",
}, {
    fileName: "20190818-DSC_0050",
    title: "",
}, {
    fileName: "20190818-DSC_0051",
    title: "",
}, {
    fileName: "20190818-DSC_0084",
    title: "",
}, {
    fileName: "20190818-DSC_0369",
    title: "",
}, {
    fileName: "20191215-DSC_0059",
    title: "",
}, {
    fileName: "20191215-DSC_0066",
    title: "",
}, {
    fileName: "20191215-DSC_0163",
    title: "",
}, {
    fileName: "20191216-DSC_0241",
    title: "",
}, {
    fileName: "20191216-DSC_0261",
    title: "",
}, {
    fileName: "20191216-DSC_0291",
    title: "",
}, {
    fileName: "20191216-DSC_0369",
    title: "",
}, {
    fileName: "20191216-DSC_0413",
    title: "",
}, {
    fileName: "20191216-DSC_0445",
    title: "",
}, {
    fileName: "20191216-DSC_0499",
    title: "",
}, {
    fileName: "20191228-DSC_0002",
    title: "",
}, {
    fileName: "20200202-DSC_0093",
    title: "",
}, {
    fileName: "20200202-DSC_0100",
    title: "",
}, {
    fileName: "20200405-DSC_0168",
    title: "",
}, {
    fileName: "20200405-DSC_0182",
    title: "",
}, {
    fileName: "20200405-DSC_0199",
    title: "",
}, {
    fileName: "20200405-DSC_0220",
    title: "",
}, {
    fileName: "20200601-DSC_0247",
    title: "",
}, {
    fileName: "20200601-DSC_0253",
    title: "",
}, {
    fileName: "20200601-DSC_0287",
    title: "",
}, {
    fileName: "20200601-DSC_0323",
    title: "",
}, {
    fileName: "20200601-DSC_0326",
    title: "",
}, {
    fileName: "20200601-DSC_0340",
    title: "",
}, {
    fileName: "20200613-DSC_0371",
    title: "",
}, {
    fileName: "20200613-DSC_0402",
    title: "",
}, {
    fileName: "20200613-DSC_0438",
    title: "",
}, {
    fileName: "20200613-DSC_0525",
    title: "",
}, {
    fileName: "20200613-DSC_0561",
    title: "",
}, {
    fileName: "20200613-DSC_0602",
    title: "",
}, {
    fileName: "20200613-DSC_0810",
    title: "",
}, {
    fileName: "20200613-DSC_0833",
    title: "",
}, {
    fileName: "20200613-DSC_0842",
    title: "",
}, {
    fileName: "20200613-DSC_0857",
    title: "",
}, {
    fileName: "20200614-DSC_0875",
    title: "",
}, {
    fileName: "20200614-DSC_0878",
    title: "",
}, {
    fileName: "20200614-DSC_0895",
    title: "",
}, {
    fileName: "20200614-DSC_0897",
    title: "",
}, {
    fileName: "20200614-DSC_0904",
    title: "",
}, {
    fileName: "20200614-DSC_0939",
    title: "",
}, ]

function loadPhoto(e) {
    $('.fullImage').attr('src', `./images/full/${images[e].fileName}-full.jpg`);
    $('.caption').text(images[e].title);
}

$('#nextArrow').click(() => {
    currentPhoto++;
    if (currentPhoto > (images.length - 1)) { currentPhoto = 0 }
    loadPhoto(currentPhoto);
});

$('#backArrow').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) { currentPhoto = (images.length - 1) }
    loadPhoto(currentPhoto);
});

images.forEach((e, index) => {
    $('.gallery').append(`
        <div class="img-container">
        <img src="./images/preview/${e.fileName}-preview.jpg" alt="${e.title}" data-original="${e.fileName}-full.jpg" data-index="${index}">
        </div>`);
    $('.gallery img').click((e) => {
        modal.classList.add("open");
        original.classList.add('open');
        document.body.style.overflow = "hidden";
        //Dynamic change 
        const originalSrc = $(e.target).attr('data-original');
        original.src = `./images/full/${originalSrc}`;
        caption.textContent = $(e.target).attr('alt');
        var indexClicked = $(e.target).attr('data-index');
        currentPhoto = indexClicked;
        loadPhoto(currentPhoto);
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove("open")
        original.classList.remove('open');
        document.body.style.overflow = "auto";
    }
});

function getExif() {
    EXIF.getData(original, function() {
        var allMetaData = EXIF.getAllTags(this);
        var model = EXIF.getTag(this, "Model");
        var software = EXIF.getTag(this, "Software");
        var exposureTime = EXIF.getTag(this, "ExposureTime");
        var fNumber = EXIF.getTag(this, "FNumber");
        var ISOSpeedRatings = EXIF.getTag(this, "ISOSpeedRatings");
        var dateTimeOriginal = EXIF.getTag(this, "DateTimeOriginal");
        var undefine = EXIF.getTag(this, "undefined");
        var shutterSpeedValue = EXIF.getTag(this, "ShutterSpeedValue");
        var apertureValue = EXIF.getTag(this, "ApertureValue");
        var maxApertureValue = EXIF.getTag(this, "MaxApertureValue");
        var lightSource = EXIF.getTag(this, "LightSource");
        var flash = EXIF.getTag(this, "Flash");
        var focalLength = EXIF.getTag(this, "FocalLength");
        var sceneType = EXIF.getTag(this, "SceneType");
        var whiteBalance = EXIF.getTag(this, "WhiteBalance");
        var focalLengthIn35mmFilm = EXIF.getTag(this, "FocalLengthIn35mmFilm");
        var sceneCaptureType = EXIF.getTag(this, "SceneCaptureType");
        $('#allMetaDataSpan').append(`
        <div class="textContainer">
        <table>
            <tbody>
                <tr class="makeAndModel">
                    <td>Model:</td>
                    <td>${model}</td>
                </tr>
                <tr class="software">
                    <td>Edited with:</td>
                    <td>${software}</td>
                </tr>
                <tr class="exposureTime">
                    <td>Exposure Time:</td>
                    <td>${exposureTime}</td>
                </tr>
                <tr class="fNumber">
                    <td>f number: </td>
                    <td>${fNumber}</td>
                </tr>
                <tr class="ISOSpeedRatings">
                    <td>ISO Speed Ratings:</td>
                    <td>${ISOSpeedRatings}</td>
                </tr>
                <tr class="DateTimeOriginal">
                    <td>Date Time Original:</td>
                    <td>${dateTimeOriginal}</td>
                </tr>
                <tr class="undefined">
                    <td>undefined:</td>
                    <td>${undefine}</td>
                </tr>
                <tr class="ShutterSpeedValue">
                    <td>Shutter Speed Value:</td>
                    <td>${shutterSpeedValue}</td>
                </tr>
                <tr class="ApertureValue">
                    <td>Aperture Value:</td>
                    <td>${apertureValue}</td>
                </tr>
                <tr class="MaxApertureValue">
                    <td>Max Aperture Value:</td>
                    <td>${maxApertureValue}</td>
                </tr>
                <tr class="LightSource">
                    <td>Light Source:</td>
                    <td>${lightSource}</td>
                </tr>
                <tr class="Flash">
                    <td>Flash:</td>
                    <td>${flash}</td>
                </tr>
                <tr class="FocalLength">
                    <td>Focal Length:</td>
                    <td>${focalLength}</td>
                </tr>
                <tr class="SceneType">
                    <td>Scene Type:</td>
                    <td>${sceneType}</td>
                </tr>
                <tr class="WhiteBalance">
                    <td>White Balance:</td>
                    <td>${whiteBalance}</td>
                </tr>
                <!-- <tr class="FocalLengthIn35mmFilm">
                    <td>Focal Length In 35mm Film:</td>
                    <td>${focalLengthIn35mmFilm}</td>
                </tr> -->
                <tr class="SceneCaptureType">
                    <td>Scene Capture Type:</td>
                    <td>${sceneCaptureType}</td>
                </tr>
            </tbody>
        </table>
        </div>`);
    });
};