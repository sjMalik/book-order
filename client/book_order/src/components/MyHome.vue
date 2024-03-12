/* eslint-disable */
<template>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-lg-4 col-xl-3 col-md-3">
                <div class="card">
                    <div class="border-bottom p-15">
                        Filter
                    </div>
                    <div class="border-bottom p-15">
                        <div class="card-body">
                            <h5 class="card-title">Price of Books</h5>
                            <div class="price-bar-filter">
                                <label for="minPrice">Min Price:</label>
                                <input type="range" id="minprice" name="minprice" class="form-control-range" min="0"
                                    max="100">
                                <span class="range-value">0</span>
                                <label for="maxPrice">Max Price:</label>
                                <input type="range" id="maxprice" name="maxprice" class="form-control-range" min="0"
                                    max="100">
                                <span class="range-value">100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-xl-9 col-md-9">
                <form class="d-flex">
                    <input class="form-control" type="search" placeholder="Search by Title">
                    <input class="form-control ml-2" type="search" placeholder="Search by Author">
                    <a hre="javascript:void(0)" class="btn btn-primary ml-2">Search</a>
                    <a hre="javascript:void(0)" class="btn btn-secondary ml-1">Reset</a>
                </form>
                <div class="row mt-3">
                    <div class="col-md-3">
                        <div class="ibox">
                            <div class="ibox-content product-box">
                                <div class="product-imitation">
                                    [ INFO ]
                                </div>
                                <div class="product-desc">
                                    <span class="product-price">
                                        $10
                                    </span>
                                    <small class="text-muted">Category</small>
                                    <a href="#" class="product-name"> Product</a>

                                    <div class="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div class="m-t text-righ">

                                        <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i
                                                class="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="ibox">
                            <div class="ibox-content product-box">

                                <div class="product-imitation">
                                    [ INFO ]
                                </div>
                                <div class="product-desc">
                                    <span class="product-price">
                                        $10
                                    </span>
                                    <small class="text-muted">Category</small>
                                    <a href="#" class="product-name"> Product</a>



                                    <div class="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div class="m-t text-righ">

                                        <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i
                                                class="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="ibox">
                            <div class="ibox-content product-box active">

                                <div class="product-imitation">
                                    [ INFO ]
                                </div>
                                <div class="product-desc">
                                    <span class="product-price">
                                        $10
                                    </span>
                                    <small class="text-muted">Category</small>
                                    <a href="#" class="product-name"> Product</a>



                                    <div class="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div class="m-t text-righ">

                                        <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i
                                                class="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="ibox">
                            <div class="ibox-content product-box">

                                <div class="product-imitation">
                                    [ INFO ]
                                </div>
                                <div class="product-desc">
                                    <span class="product-price">
                                        $10
                                    </span>
                                    <small class="text-muted">Category</small>
                                    <a href="#" class="product-name"> Product</a>
                                    <div class="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div class="m-t text-righ">
                                        <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i
                                                class="fa fa-long-arrow-right"></i> </a>
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

<style scoped>
.price-bar-filter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.range-value {
    margin-top: 5px;
}

.p-15 {
    padding: 15px;
}

input[type="range"] {
    cursor: pointer;
}

body {
    margin-top: 20px;
    background: #eee;
}

/* E-commerce */
.product-box {
    padding: 0;
    border: 1px solid #e7eaec;
}

.product-box:hover,
.product-box.active {
    border: 1px solid transparent;
    -webkit-box-shadow: 0 3px 7px 0 #a8a8a8;
    -moz-box-shadow: 0 3px 7px 0 #a8a8a8;
    box-shadow: 0 3px 7px 0 #a8a8a8;
}

.product-imitation {
    text-align: center;
    padding: 90px 0;
    background-color: #f8f8f9;
    color: #bebec3;
    font-weight: 600;
}

.cart-product-imitation {
    text-align: center;
    padding-top: 30px;
    height: 80px;
    width: 80px;
    background-color: #f8f8f9;
}

.product-imitation.xl {
    padding: 120px 0;
}

.product-desc {
    padding: 20px;
    position: relative;
}

.ecommerce .tag-list {
    padding: 0;
}

.ecommerce .fa-star {
    color: #d1dade;
}

.ecommerce .fa-star.active {
    color: #f8ac59;
}

.ecommerce .note-editor {
    border: 1px solid #e7eaec;
}

table.shoping-cart-table {
    margin-bottom: 0;
}

table.shoping-cart-table tr td {
    border: none;
    text-align: right;
}

table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
    text-align: left;
}

table.shoping-cart-table tr td:last-child {
    width: 80px;
}

.product-name {
    font-size: 16px;
    font-weight: 600;
    color: #676a6c;
    display: block;
    margin: 2px 0 5px 0;
}

.product-name:hover,
.product-name:focus {
    color: #1ab394;
}

.product-price {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    background-color: #1ab394;
    padding: 6px 12px;
    position: absolute;
    top: -32px;
    right: 0;
}

.product-detail .ibox-content {
    padding: 30px 30px 50px 30px;
}

.image-imitation {
    background-color: #f8f8f9;
    text-align: center;
    padding: 200px 0;
}

.product-main-price small {
    font-size: 10px;
}

.product-images {
    margin: 0 20px;
}

.ibox {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
}

.ibox.collapsed .ibox-content {
    display: none;
}

.ibox.collapsed .fa.fa-chevron-up:before {
    content: "\f078";
}

.ibox.collapsed .fa.fa-chevron-down:before {
    content: "\f077";
}

.ibox:after,
.ibox:before {
    display: table;
}

.ibox-title {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 14px 15px 7px;
    min-height: 48px;
}

.ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
}

.ibox-footer {
    color: inherit;
    border-top: 1px solid #e7eaec;
    font-size: 90%;
    background: #ffffff;
    padding: 10px 15px;
}
</style>