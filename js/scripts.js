var name = "Vicky"
console.log(`Hello my Dear ${name}!`)

//top part

var data0 = {
    href: "",
    target: "_top",
    clickablity: "inactive",
    title: "Home",
};
var data1 = {
    href: "/html/photoGallery002.html",
    target: "_top",
    clickablity: "active",
    title: "PhotoGallery <br>No.2",
};
var data2 = {
    href: "/html/photoGallery.html",
    target: "_top",
    clickablity: "active",
    title: "PhotoGallery <br>No.1",
};
var data3 = {
    href: "/html/GIndex.html",
    target: "_top",
    clickablity: "active",
    title: "GIndex",
};
var data4 = {
    href: "/html/videoGallery.html",
    target: "_top",
    clickablity: "inactive",
    title: "VideoGallery",
};

//single box calling
/* $('#imgBig').attr('src', data1.photo);
$('#photoTitle').text(data1.title);
$('#photoDescription').text(data1.description); */

// multiple box calling
var buttonData = [data0, data1, data2, data3, data4]

console.log(buttonData)



//bottom part
buttonData.forEach((item, index) => {
    $(".headerdiv").append(`<div class="buttonHolder">
    <a href=${item.href} target=${item.target} class=${item.clickablity} data-index="${index}">${item.title}</a>
    </div>`);
    $('.buttonHolder').click((e) => {
        var indexClicked = $(e.target).attr('data-index');
        // indexClicked is now a string! if you need it as a number you have to change it
        // because for example "1" + 1 is going to be "11" and not 2
        var numberIndex = parseInt(indexClicked);
        // now numberIndex is a number
        $('main').attr('src', buttonData[indexClicked].href);
        currentPhoto = indexClicked;
        console.log(buttonData.clickablity)
    });
});