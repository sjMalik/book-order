<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-lg-4 col-xl-3 col-md-3">
                <div data-v-25af5388="" class="card">
                    <div data-v-25af5388="" class="border-bottom p-15">
                        <h4 data-v-25af5388="">Filters </h4>
                    </div>
                    <div data-v-25af5388="" class="border-bottom p-15">
                        <div data-v-25af5388="" class="card-body">
                            <h5 data-v-25af5388="" class="card-title">Organization</h5>
                            <div class="price-bar-filter">
                                <label for="minPrice">Min Price:</label>
                                <input type="range" v-model="minPrice" id="minPrice" class="form-control-range"
                                    @change="handleSlideChange" min="0" :max="bookMaxPrice">
                                <span class="range-value">{{ minPrice }}</span>
                                <label for="maxPrice">Max Price:</label>
                                <input v-if="maxPrice > 0" type="range" v-model="maxPrice" id="maxPrice"
                                    class="form-control-range" @change="handleSlideChange" min="0" :max="bookMaxPrice">
                                <span class="range-value">{{ maxPrice }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-25af5388="" class="col-lg-8 col-xl-9 col-md-9">
                <div class="row">
                    <div class="col-md-3" v-for="(book, index) of books" :key="index">
                        <div class="ibox">
                            <div class="ibox-content product-box fixed-length">
                                <div class="product-imitation">
                                    {{ book?.title }}
                                </div>
                                <div class="product-desc custom-wrap">
                                    <span class="product-price">
                                        Rs {{ book?.price }}
                                    </span>
                                    <small class="text-muted">In Stock: {{ book?.quantity_available }}</small>
                                    <a href="#" class="product-name"> {{ truncateText(book?.title, 25, '...') }}</a>

                                    <div class="small m-t-xs">
                                        Written By: {{ book?.author }}
                                    </div>
                                    <div class="mt-3 text-righ">

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

<script>
export default {
    name: 'MyHome',
    data() {
        return {
            books: [],
            total: 0,
            minPrice: 0,
            maxPrice: 0, // Set maximum price as default
            bookMaxPrice: 100,
            filters: {
                title: null,
                author: null,
                maxPrice: null,
                minPrice: null
            }
        }
    },
    // watch: {
    //     minPrice(newValue, oldValue) {
    //         console.log(newValue, oldValue)
    //         // if (newValue > this.maxPrice) {
    //         //     this.minPrice = oldValue; // Reset to the old value
    //         // }
    //     },
    //     maxPrice(newValue, oldValue) {
    //         console.log(newValue, oldValue)
    //         // this.maxPrice = newValue;
    //         // if (newValue < this.minPrice) {
    //         //     this.maxPrice = oldValue; // Reset to the old value
    //         // }
    //     }
    // },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await this.getBooks();
            this.getMaxPrice();
        },
        async handleSlideChange() {
            // This method will be called when the slider is stopped after sliding
            this.filters.maxPrice = this.maxPrice;
            this.filters.minPrice = this.minPrice;
            await this.getBooks();
        },
        async getBooks() {
            try {
                const { data } = await this.$http.get("books", {
                    params: this.filters
                });
                this.books = data?.items;
                this.total = data?.total;
            } catch (e) {
                console.error(e)
            }
        },
        getMaxPrice() {
            this.maxPrice = this.bookMaxPrice = this.books.length > 0 ? this.books.reduce((max, book) => {
                const price = parseFloat(book.price);
                return price > max ? price : max;
            }, 0) : 100;
        },
        truncateText(text, length, suffix) {
            if (text.length <= length) return text;
            return text.substring(0, length) + suffix;
        }
    }
}
</script>

<style scoped>
.price-bar-filter {
    display: flex;
    flex-direction: column;
}

.range-value {
    margin-top: 5px;
}

/* Styling for the range inputs */
input[type="range"] {
    width: 100%;
}

/* Styling for the track */
input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #ddd;
}

/* Styling for the thumb */
input[type="range"]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #2196F3;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
}

/* Styling for thumb on hover */
input[type="range"]::-webkit-slider-thumb:hover {
    background: #0b7dda;
}

/* Styling for thumb when active */
input[type="range"]::-webkit-slider-thumb:active {
    background: #0b7dda;
}

.price-bar-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.p-15 {
    padding: 15px;
}

.custom-wrap {
    text-overflow: ellipsis;
    white-space: nowrap;
}

.fixed-length {
    width: 275px;
    height: 410px
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