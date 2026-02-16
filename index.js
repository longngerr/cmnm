const contentLetterSrart_actived = "Chào Kiều Linh ( Vợ sắp cưới), Hôm nay là năm mới chúng ta ở bên cạnh nhau nữa roài, anh sẽ thử thách năm 2026 này không để em rơi giọt nước mắt nào. Bấm hộp quà bên dưới để xem nhé ♥ !!!" //Lời mở đầu cho bức thư
const mainContentLetter = "Anh chúc vợ luôn may mắn, xinh đẹp, tài giỏi, ngoan ngoãn, chúc những điều em muốn trở thành hiện thực, chúc cuộc sống nhẹ nhàng với em hơn. Chúc cho tình yêu của 2 ta thêm mặn nồng. Mãi mãi yêu em ♥" //Nội dung của bức thư

// ---- Nhận thưởng: mở app tin nhắn gửi đến số này, nội dung "Nhận" ----
const NOTIFY_PHONE = "0337105303";

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s")
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s");
                    setTimeout(() => {
                        document.querySelector(".giftBoxWrap").classList.add("show");
                    }, 600);
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
        document.querySelector(".giftBoxWrap").classList.remove("show");
    }
})

// ---- Hộp quà: bấm mở modal nhận thưởng ----
const giftBoxWrap = document.querySelector(".giftBoxWrap");
const rewardOverlay = document.querySelector(".rewardModalOverlay");
const btnReward = document.querySelector(".btnReward");
const btnCloseModal = document.querySelector(".btnCloseModal");
const rewardStatus = document.querySelector(".rewardStatus");

function openRewardModal() {
    if (!rewardOverlay) return;
    rewardOverlay.classList.add("open");
    if (rewardStatus) rewardStatus.textContent = "";
}
function closeRewardModal() {
    if (!rewardOverlay) return;
    rewardOverlay.classList.remove("open");
}

if (giftBoxWrap) giftBoxWrap.addEventListener("click", openRewardModal);
if (btnCloseModal) btnCloseModal.addEventListener("click", closeRewardModal);
if (rewardOverlay) rewardOverlay.addEventListener("click", function (e) {
    if (e.target === rewardOverlay) closeRewardModal();
});

// Bấm "Nhận thưởng" → mở app tin nhắn với số 0337105303 và nội dung "Nhận"
var REWARD_SMS_BODY = "Nhận";
if (btnReward) {
    btnReward.addEventListener("click", function () {
        var smsUrl = "sms:" + NOTIFY_PHONE + "?body=" + encodeURIComponent(REWARD_SMS_BODY);
        rewardStatus.textContent = "Đang mở tin nhắn...";
        window.location.href = smsUrl;
        rewardStatus.textContent = "Đã mở tin nhắn. Gửi tin \"" + REWARD_SMS_BODY + "\" đến " + NOTIFY_PHONE + " để nhận thưởng nhé!";
    });
}

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");

            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}