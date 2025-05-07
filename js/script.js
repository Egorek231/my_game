let clicks=0
let count=1
let canClick=true
let canClickDelay=900
let language
let energyMoney=1
let energyReset=1000

let message1="вы не можете купить усиление хуже существующего или у вас недостаточно денег для этой покупки"
let message2="у вас недостаточно денег для этой покупки"
let message11="you can't buy a worse upgrade than the existing one or you don't have enough money to buy it"
let message22="you don't have enough money for this purchase"

$(document).keydown((event)=>{
    if(event.key=="="){
        clicks+=100
        $("#money").text(clicks + "$");
    }
    if(event.key=="-"){
        clicks-=100
        $("#money").text(clicks + "$");
    }
})

$(".language_ru").click(()=>{
    language="ru"
    $(".language1").text("умножить нажатие")
    $(".language2").text("задержка клика")
    $(".language3").text("миллисекунд")
    $(".click_btn").text("Клик!!!")
    $(".menu_btn1").text("магазин умножений нажатий")
    $(".menu_btn2").text("магазин задержек клика")
    $(".menu_btn3").text("магазин количества энергии")
    $(".menu_btn4").text("магазин скорости востановления энергии")
    $(".language4").text("количество денег за 1 энергию: ")
    $(".language5").text("востановление энергии в миллисекундах: ")
})
$(".language_en").click(()=>{
    language="en"
    $(".language1").text("multiply the press")
    $(".language2").text("click delay")
    $(".language3").text("milliseconds")
    $(".click_btn").text("Click!!!")
    $(".menu_btn1").text("click multiplier store")
    $(".menu_btn2").text("click delay store")
    $(".menu_btn3").text("energy quantity store")
    $(".menu_btn4").text("energy recovery speed ​​store")
    $(".language4").text("getting money for 1 energy: ")
    $(".language5").text("energy recovery in milliseconds: ")
})


$(".menu1, .menu2, .menu3, .menu4").hide()

function messag1(){
    if(language=="ru"){
        $("#message_text").text(message1);
    }
    else{
        $("#message_text").text(message11);
    }
    $(".message").css({"display":"flex"}).animate({
        "opacity":"100%"
    })
    setTimeout(()=>{
        $(".message").animate({
            "opacity":"0%"
        },500).hide()
    },2500)
}
function messag2(){
    if(language=="ru"){
        $("#message_text").text(message2);
    }
    else{
        $("#message_text").text(message22);
    }
    $(".message").animate({
        "opacity":"100%"
    },500)
    setTimeout(()=>{
        $(".message").animate({
            "opacity":"0%"
        },500)
    },2500)
}

$(".click_btn").click(()=>{
    if (canClick) {
        canClick = false;
        clicks += count;
        $("#money").text(clicks + "$");

        clickTimeout = setTimeout(() => {
            canClick = true;
        }, canClickDelay);
    }
})

$(".buy_btn1").click(()=>{
    if((count==1)&&(clicks>=100)){
        count=2
        clicks-=100
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy_btn2").click(()=>{
    if((count<=2)&&(clicks>=200)){
        count=4
        clicks-=200
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy_btn3").click(()=>{
    if((count<=4)&&(clicks>=500)){
        count=8
        clicks-=500
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy_btn4").click(()=>{
    if((count<=8)&&(clicks>=1000)){
        count=16
        clicks-=1000
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy_btn5").click(()=>{
    if((count<=16)&&(clicks>=5000)){
        count=32
        clicks-=5000
        $("#money").text(clicks + "$");
    }else{
        messag2()
    }
})



$(".buy2_btn1").click(()=>{
    if((canClickDelay==900)&&(clicks>=100)){
        canClickDelay=750
        clicks-=100
        $("#money").text(clicks + "$");
        console.log(clicks+"|"+canClickDelay)
    }else{
        messag1()
    }
})
$(".buy2_btn2").click(()=>{
    if((canClickDelay>500)&&(clicks>=200)){
        canClickDelay=500
        clicks-=200
        console.log(clicks+"|"+canClickDelay)
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy2_btn3").click(()=>{
    if((canClickDelay>300)&&(clicks>=500)){
        canClickDelay=300
        clicks-=500
        console.log(clicks+"|"+canClickDelay)
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy2_btn4").click(()=>{
    if((canClickDelay>250)&&(clicks>=1000)){
        canClickDelay=250
        clicks-=1000
        console.log(clicks+"|"+canClickDelay)
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy2_btn5").click(()=>{
    if((canClickDelay>50)&&(clicks>=5000)){
        canClickDelay=50
        clicks-=5000
        console.log(clicks+"|"+canClickDelay)
        $("#money").text(clicks + "$");
    }else{
        messag2()
    }
})



let energyClick=true
$(".top2").click(()=>{
    if(energyClick==true){
        energyClick=false
        let i=100
        let int=setInterval(()=>{
            if(i==1){
                clearInterval(int)
                let int2=setInterval(()=>{
                    if(i==99){
                        clearInterval(int2)
                    }
                    i++
                    $("#energy").text(i+"%")
                    $(".energy_img").css({
                        "opacity":i+"%"
                    })
                },energyReset)
            }
            i--
            clicks=clicks+energyMoney
            $("#money").text(clicks+"$");
            $("#energy").text(i+"%")
            $(".energy_img").css({
                "opacity":i+"%"
            })

        },100)
    }else{
        console.log("energy spam")   
    }
},)

$(".buy3_btn1").click(()=>{
    if((energyMoney==1)&&(clicks>=300)){
        energyMoney=2
        clicks-=1500
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy3_btn2").click(()=>{
    if((energyMoney<=2)&&(clicks>=200)){
        energyMoney=3
        clicks-=2500
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy3_btn3").click(()=>{
    if((energyMoney<=3)&&(clicks>=500)){
        energyMoney=4
        clicks-=3500
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy3_btn4").click(()=>{
    if((energyMoney<=4)&&(clicks>=1000)){
        energyMoney=5
        clicks-=4500
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy3_btn5").click(()=>{
    if((energyMoney<=5)&&(clicks>=6000)){
        energyMoney=6
        clicks-=6000
        $("#money").text(clicks + "$");
    }else{
        messag2()
    }
})


$(".buy4_btn1").click(()=>{
    if((energyReset==900)&&(clicks>=1000)){
        energyReset=750
        clicks-=1000
        $("#money").text(clicks + "$");
        console.log(clicks+"|"+energyReset)
    }else{
        messag1()
    }
})
$(".buy4_btn2").click(()=>{
    if((energyReset>500)&&(clicks>=2000)){
        energyReset=500
        clicks-=2000
        console.log(clicks+"|"+energyReset)
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy4_btn3").click(()=>{
    if((energyReset>300)&&(clicks>=5000)){
        energyReset=300
        clicks-=5000
        console.log(clicks+"|"+energyReset)
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy4_btn4").click(()=>{
    if((energyReset>150)&&(clicks>=10000)){
        energyReset=150
        clicks-=10000
        console.log(clicks+"|"+energyReset)
        $("#money").text(clicks + "$");
    }else{
        messag1()
    }
})
$(".buy4_btn5").click(()=>{
    if((energyReset>50)&&(clicks>=15000)){
        energyReset=50
        clicks-=15000
        console.log(clicks+"|"+energyReset)
        $("#money").text(clicks + "$");
    }else{
        messag2()
    }
})

$(".close").click(()=>{
    $(".menu1, .menu2, .menu3, .menu4").hide()
})

$(".menu_btn1").click(()=>{
    $(".menu1").show()
    $(".menu2, .menu3, .menu4").hide()
    console.log("1")
})
$(".menu_btn2").click(()=>{
    $(".menu2").show()
    $(".menu1, .menu3, .menu4").hide()
    console.log("2")
})
$(".menu_btn3").click(()=>{
    $(".menu3").show()
    $(".menu2, .menu1, .menu4").hide()
    console.log("3")
})
$(".menu_btn4").click(()=>{
    $(".menu4").show()
    $(".menu2, .menu3, .menu1").hide()
    console.log("4")
})