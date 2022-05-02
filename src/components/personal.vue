<template>
    <div>
        <Res v-if="rest === false"/>
        <div v-if="rest === true">
            <div class="navBar d-flex justify-content-between">
                <div class="d-flex">
                    <div>
                    </div>
                    <img src="../assets/arrow_back_ios_24px.png" alt="" style="width:20px; height: 20px;">
                    <p class="back ps-1" @click="makeOasis(asis = !asis)">Back</p>
                </div>
                <div class=" align-items-end">
                    <p class="step">STEP 01/03</p>
                    <div class="p-0 m-0">
                        <p class="pers">Personal Info.</p>
                    </div>
                </div>
            </div>
            <form class="fixed-height">
                <div class="row d-flex">
                    <div class="col-xl-10">
                        <h1>Register Individual Account!</h1>
                        <p class="text-wrap purpose">
                            For the purpose of industry regulation, your details are required.</p>
                        <hr style="width:427px; border: 1px solid #F5F5F5;"/>
                        <div class="form-group">
                            <label for="name">Your fullname*</label>
                            <input type="text" id="name" class="bes form-control" style="width: 426px; height: 55px;" />
                        </div>
                        <div class="form-group mt-4">
                            <label for="email">Email address*</label>
                            <input type="email" id="email" class="bes form-control" placeholder="Enter email address" style="width: 426px; height: 55px;"/>
                        </div>
                        <div class="form-group mt-4">
                            <label for="password">Create Password*</label>
                            <input type="password" id="password" class="bes form-control" placeholder="Enter Password" style="width: 426px; height: 55px;"/>
                        </div>
                        <div class="form-group mt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Terms" id="terms">
                                <label class="form-check-label" for="terms"> <p class="back">I agree to terms & conditions</p></label>
                            </div>
                        </div>
                        <div class="justify-content-center align-items-center mt-3" style="width:430px">
                            <div class="">
                                <button class="btn btn-xl btn-primary rounded" style="width: 426px; height: 60px;" @click="makeRest(rest = !rest)">Register Account</button>
                            </div>
                            <p class="or text-center my-3">Or</p>
                            <div class="d-flex justify-content-start">
                                <button class="google btn btn-xl btn-light d-flex justify-content-start align-items-center px-5 rounded-3">
                                    <img src="../assets/google.png" alt="" class="pe-5">
                                    Register with Google
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import Res from './residency.vue'
    export default {
        components: {
            Res,
        },
        data(){
            return{
                rest: true,
            }
        },
        methods: {
            makeRest(){
            }
        },
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
    .or {
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
    .google {
        width: 426px; 
        height: 60px; 
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
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