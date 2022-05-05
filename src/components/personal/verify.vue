<template>
    <div>
            <div class="navBar d-flex justify-content-between">
                <div class="d-flex">
                    <div>
                    </div>
                    <img src="./img/arrowBack.png" alt="" style="width:20px; height: 20px;">
                    <p class="back ps-1">Back</p>
                </div>
                <div class=" align-items-end">
                    <p class="step">STEP 03/03</p>
                    <div class="">
                        <p class="pers">Bank Verification</p>
                    </div>
                </div>
            </div>
            <form class="fixed-height mt-5">
                <div class="row d-flex">
                    <div class="col-xl-10 mt-4">
                        <h1>Complete Your Profile!</h1>
                        <p class="text-wrap purpose">
                            For the purpose of industry regulation, your details are required.</p>
                        <hr style="width:427px; border: 1px solid #F5F5F5;"/>
                        <div class="form-group">
                            <label for="email">Bank verification number (BVN)</label>
                            <input type="value" id="address" class="form-control bes" placeholder="Enter BVN" style="width: 426px; height: 55px;"/>
                        </div>
                        <div class="justify-content-center align-items-center mt-5" style="width:430px">
                            <div class="">
                                <button class="btn btn-xl btn-primary rounded" style="width: 426px; height: 60px;"> Save & Continue</button>
                            </div>
                            <p class="info text-center my-3">
                                <img src="./img/lock_24px.png" alt=""> Your Info is safely secured</p>
                        </div>
                    </div>
                </div>
            </form>
    </div>
</template>

<script>
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