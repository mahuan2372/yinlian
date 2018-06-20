<template>
    <div>
        <div class="box_zin">
            <div class="box_zin_a"><img src="../../assets/img/img-logo.png"></div>
            <div class="box_zin_b" :class="{'active':isChoose}">
                <div class="box_zin_btn">
                    <img src="../../assets/img/img-zhanghao.png">
                    <input type="text" class="account" @focus="done()" @blur="blur()" placeholder="请输入你的账号">
                </div>
            </div>
            <div class="box_zin_c" :class="{'active':isChoose_z}">
                <div class="box_zin_ctn">
                    <img src="../../assets/img/img-mima.png">
                    <input type="text" class="password" @focus="done_z()" @blur="blur_z()" placeholder="请输入你的密码">
                </div>
            </div>
            <div class="box_dth">
                <div class="box_zin_d" :class="{'active':isChoose_e}">
                    <div class="box_zin_dtn">
                        <img src="../../assets/img/img-yanzhengma.png">
                        <input type="text" class="code" @focus="done_e()" @blur="blur_e()" placeholder="请输入验证码">
                    </div>
                </div>
                <div class="Verification">
                </div>
            </div>
            <div class="box_zin_e">
                <img src="../../assets/img/icon-denglu.png">
            </div>
        </div>
        <div class="footer">
            CHINANUMS.com &nbsp; ALL &nbsp; right &nbsp; reserved 网联上午有限公司版权所有
        </div>
    </div>
</template>

<script>
export default {
    name: "login-vue",
    data() {
        return {
            isChoose: false,
            isChoose_z: false,
            isChoose_e: false,
        }
    },
    methods: {
        done: function() {
            this.isChoose = true;
        },
        blur: function() {
            this.isChoose = false;
        },
        done_z: function() {
            this.isChoose_z = true;
        },
        blur_z: function() {
            this.isChoose_z = false;
        },
        done_e: function() {
            this.isChoose_e = true;
        },
        blur_e: function() {
            this.isChoose_e = false;
        }
    }
}
</script>

<style scoped>
input{
    font-size:12px;
}
input::-webkit-input-placeholder {
    color: white;
}
.box_zin {
    width: 328px;
    height: 322px;
    background-image: url('../../assets/img/img-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}

.box_zin_a {
    width: 100%;
    text-align: center;
    margin-top: 15px;
}

.box_zin_b {
    width: 230px;
    height: 44px;
    margin: 10px auto 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-top: 6px;
}

.box_zin_btn {
    width: 222px;
    height: 36px;
    margin: 0 auto;
    background-image: url("../../assets/img/img-shuru.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    line-height: 36px;
}

.box_zin_btn img {
    margin: 0 10px 0 10px;
}

.account,
.password {
    width: 80%;
    height: 100%;
    float: right;
    background: none;
    outline: none;
    border: none;
}

.box_zin_c {
    width: 230px;
    height: 44px;
    margin: 2px auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-top: 6px;
}

.box_zin_ctn {
    width: 222px;
    height: 36px;
    margin: 0 auto;
    background-image: url("../../assets/img/img-shuru.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    line-height: 36px;
}

.box_zin_ctn img {
    margin: 0 10px 0 10px;
}

.box_dth {
    width: 230px;
    height: 44px;
    margin: 0 auto;
}

.box_zin_d {
    width: 138px;
    height: 44px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-top: 6px;
    float: left;
}

.box_zin_dtn {
    width: 130px;
    height: 36px;
    margin: 0 auto;
    background-image: url("../../assets/img/img-shuru.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    line-height: 36px;
}

.box_zin_dtn img {
    margin: 0 10px 0 10px;
}

.code {
    width: 70%;
    height: 100%;
    float: right;
    background: none;
    outline: none;
    border: none;
}

.Verification {
    width: 84px;
    height: 36px;
    border-radius: 3px;
    border: 1px solid red;
    float: right;
    margin-top: 4px;
}

.box_zin_e {
    width: 100%;
    text-align: center;
}

.box_zin_e img {
    width: 222px;
    height: 36px;
    margin: 8px auto;
}

.active {
    background-image: url("../../assets/img/img-xuanze.png");
}
.footer{
    width:100%;
    text-align:center;
    color:#ffffff;
    font-size:12px;
    position: absolute;
    bottom:14px;
}
</style>