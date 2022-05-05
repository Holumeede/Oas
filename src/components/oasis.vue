<template>
    <div>
        <div class="row">
            <div class="col-md-5">
                <img src="../assets/bgImage.png" alt="" style="width: 100%">
            </div>
            <div class="col-md-7 p-5">
                <Pers v-if="layout === false"></Pers>
                <div v-if="layout === true">    
                    <div class="navBar d-flex justify-content-end">
                        <p class="d-flex text-right fs-4"> Already have an account? <a href=""> Sign In</a></p>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <div class="m-4">
                                <div class="justify-content-center align-items-center mt-5">
                                     <div>
                                         <h1 class="pt-3"> Join Us! </h1>
                                    </div>
                                <p class="text-wrap fs-5" style="width: 25rem">To begin this journey, tell us what type of account you'd be opening.</p>
                                </div>
                                <div class="mt-5">
                                    <div class="bes d-flex justify-content-between rounded" style="" type="button" @click="makeVisible(layout = false)">
                                        <div class="d-flex align-items-center ps-3">
                                            <img src="../assets/Polygon_1.png" alt="" style="width: 52px; height: 52px;  ">
                                            <img src="../assets/user.png" alt="" style="z-index: 2; position: absolute; margin-left: 15px;">
                                        </div>
                                        <div class="p-3">
                                            <h2 class=""> Individual</h2>
                                            <p class="text-wrap fs-6" style="width: 17rem"> Personal account to manage all you activities.</p>
                                        </div>
                                        <div class="d-flex align-items-center pe-5">
                                            <img src="../assets/arrow-right.png" alt="" style="height: 20px; width: 20px;">
                                        </div>
                                    </div>
                                    <div class="bes d-flex justify-content-start rounded py-3 mt-4" type="button">
                                        <div class="d-flex align-items-center ps-4">
                                            <img src="../assets/Polygon_2.png" alt="" style="width: 52px; height: 52px;">
                                            <img src="../assets/briefcase.png" alt="" style="z-index: 3; position: absolute; margin-left: 15px;">
                                        </div>
                                        <div class="ps-4">
                                            <h2>Business</h2>
                                            <p class="text-wrap fs-6" style="width: 17rem;"> Own or belong to a company, this is for you.</p>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pers from '../components/personal/personal.vue'
    export default {
        components: {
            Pers
        },
        data(){
            return {
                layout: true,
            }
        },
        methods:{
            makeVisible(){
            }
        }
    }
</script>

<style scoped>
    h2 {
       color: #000000;
       font-weight: 500; 
        font-family: 'Inter', sans-serif;
    }
    p {
        color: rgba(134, 146, 166, 1);
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        /* font-size: 18px; */
    }
    .ind {
        background-color:rgba(245, 249, 255, 1); 
        max-width:462px;
        border: 1px solid rgba(21, 101, 216, 1); 
        box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
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