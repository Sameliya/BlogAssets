<!--左侧图标颜色and彩色标签云-->
let tags = document.querySelectorAll("#tag_cloud-2 a");
let infos = document.querySelectorAll(".badge");
let colorArr = ["#428BCA", "#AEDCAE", "#ECA9A7", "#DA99FF", "#FFB380", "#D9B999"];
tags.forEach(tag => {
    tagsColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    tag.style.backgroundColor = tagsColor;
});
infos.forEach(info => {
    infosColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    info.style.backgroundColor = infosColor;
});
function addNumber(a) {
    var length = document.getElementById("comment").value.length;
    if(length> 0){
        document.getElementById("comment").focus()
        document.getElementById("comment").value += '\n' + a + new Date
    }else{
        document.getElementById("comment").focus()
        document.getElementById("comment").value += a + new Date
    }
}
let leftHeader = document.querySelectorAll("span.nav-icon>svg,span.nav-icon>i");
let leftHeaderColorArr = ["#FF69B4", "#58c7ea", "#E066FF", "#FF69B4", "#FFA54F", "#90EE90"];
leftHeader.forEach(tag => {
    tagsColor = leftHeaderColorArr[Math.floor(Math.random() * colorArr.length)];
    tag.style.color = tagsColor;
});
