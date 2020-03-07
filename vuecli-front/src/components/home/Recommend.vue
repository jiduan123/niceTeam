<template>
    <div>
        <div class="title">猜你喜欢</div>
        <div class="box">
            <img src="https://p0.meituan.net/200.0/merchantpic/9867a9f7574f347c3819b62525f07902975883.jpg" alt="">
            <div class="right">
                <div >树树采摘园</div>
                <div class="pre">[呈贡区]草莓采摘入园费</div>
                <div class="bottom"> <span class="price">30元</span><span class="yishou">已售2561</span></div>
            </div>
        </div>
        <div class="seeall"><span>查看所有团购信息</span><span>></span></div>
        <div class="footer">----- @2020 niceTeam-----</div>
    </div>
</template>

<style scoped>
.title {
  font-size: 0.3rem;
  border-bottom: 1px solid #ccc;
  color: #000;
  margin: 0 0.2rem;
  padding: 0.1rem

}
.box {
  display: flex;
  padding: 0.1rem ;
  margin: 0 0.2rem;
  
  border-bottom: 1px solid #ccc;
}
.box img {
  width: 1.5rem;
  height: 1.5rem;
}
.right {
  font-size: 0.3rem;
  margin-left: .2rem;
  width: 70%;
}
.right .pre{
    font-size: 0.22rem;
    margin-top: 0.1rem
}
.right .bottom{
  margin-top: .2rem;
}
.bottom{
    display: flex;
    justify-content:space-between;
    
}
.bottom .price{
    font-size: 0.28rem;
    color: red
}
.bottom .yishou{
    font-size: 0.2rem;
    color:#ccc
}
.seeall{
    font-size: 0.26rem;
    color:#ffcf00;
    display: flex;
    justify-content: space-between;
    height: 0.5rem;
    align-items: center;
    margin: 0  0.2rem 0.1rem;
    
    border-bottom:1.5px solid #ccc
}
.footer{
    font-size: 0.2rem;
    text-align:center;
    color: #ccc;
}

</style>

