<template>
    <div>
        <Ver v-if="bvn === false"/>
        <div v-if="bvn === true">
            <div class="navBar d-flex justify-content-between">
                <div class="d-flex">
                    <div>
                    </div>
                    <img src="../assets/arrow_back_ios_24px.png" alt="" style="width:20px; height: 20px;">
                    <p class="back ps-1">Back</p>
                </div>
                <div class=" align-items-end">
                    <p class="step">STEP 02/03</p>
                    <div class="p-0 m-0">
                        <p class="pers">Residency Info.</p>
                    </div>
                </div>
            </div>
            <form class="fixed-height">
                <div class="row d-flex">
                    <div class="col-xl-10">
                        <h1>Complete Your Profile!</h1>
                        <p class="text-wrap purpose">
                            For the purpose of industry regulation, your details are required.</p>
                        <hr style="width:427px; border: 1px solid #F5F5F5;"/>
                        <div class="form-group">
                            <label for="name">Phone number</label>
                            <div class="input-group mb-3" style="width: 420px; height: 50px;">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="../assets/nigeria-flag.png" alt=""> +234</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">+232</a></li>
                                    <li><a class="dropdown-item" href="#">+221</a></li>
                                    <li><a class="dropdown-item" href="#">+44</a></li>
                                    <li><a class="dropdown-item" href="#">+331</a></li>
                                </ul>
                                <input type="tel" class="form-control" aria-label="Text input with dropdown button">
                            </div>
                        </div>
                        <div class="form-group mt-4">
                            <label for="email">Your address</label>
                            <input type="text" id="address" class="form-control" placeholder="Please enter address" style="width: 426px; height: 55px;"/>
                        </div>
                        <div class="form-group mt-4">
                            <label for="password">Country of residence</label>
                            <div class="input-group mb-3" style="width: 420px; height: 50px;">
                                <input type="text" class="form-control" aria-label="Text input with dropdown button">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Nigeria</a></li>
                                    <li><a class="dropdown-item" href="#">Canada</a></li>
                                    <li><a class="dropdown-item" href="#">Londom</a></li>
                                    <li><a class="dropdown-item" href="#">UAE</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="justify-content-center align-items-center mt-5" style="width:430px">
                            <div class="">
                                <button class="btn btn-xl btn-primary rounded" style="width: 426px; height: 60px;" @click="makeBvn(bvn = !bvn)"> Save & Continue</button>
                            </div>
                            <p class="info text-center my-3">
                                <img src="../assets/lock_24px.png" alt=""> Your Info is safely secured</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Ver from './verify.vue'
    export default {
    data() {
        return {
            bvn: true,
        };
    },
    methods: {
        makeBvn() {
        }
    },
    components: { Ver }
}
</script>
<style scoped>
    h1{
        font-family: 'Inter', sans-serif;
        font-size: 30px;
        font-weight: 700;
    }
    label {
        color: rgba(134, 146, 166, 1);
    }
    .fixed-height {
        height: 95vh;
        overflow-y: auto;
    }
    .step {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #bababa;   
    }
    .info {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #bababa;
    }
    .purpose {
        width: 26rem; 
        color: #bababa; 
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        font-size: 18px;
    }
    .back {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #bababa;
    }
    .pers {
        color: #8692A6;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 16px;
    }
    .bes {
        max-width:462px;
        box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
    }

    .bes:hover {
        background-color:rgba(245, 249, 255, 1); 
        border: 1px solid rgba(21, 101, 216, 1); 
        box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
    }
</style>