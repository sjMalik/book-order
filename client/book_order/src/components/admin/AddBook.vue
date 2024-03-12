<template lang="">

    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h2>Add Book for Sale</h2>
                <form @submit.prevent="addBook()">
                    <div class="form-group">
                        <label for="title" class="float-left">Title of the Book</label>
                        <input type="text" id="title" name="title" class="form-control" placeholder="Enter Title"
                            v-model="book.title" />
                    </div>
                    <div class="form-group">
                        <label for="author" class="float-left">Author Name</label>
                        <input type="text" id="author" name="author" class="form-control" placeholder="Enter Author Name"
                            v-model="book.author" />
                    </div>
                    <div class="form-group">
                        <label for="price" class="float-left">Price(Rs.)</label>
                        <input type="number" id="price" name="price" class="form-control" placeholder="Enter Price of the Book"
                            v-model="book.price" />
                    </div>
                    <div class="form-group">
                        <label for="quantity" class="float-left">Quantity Available</label>
                        <input type="number" id="quantity" name="quantity" class="form-control" placeholder="Enter Quantity Available"
                            v-model="book.quantity_available" />
                    </div>
                    <button type="submit" class="btn btn-success float-left">
                        Submit
                    </button>
                    <button type="submit" class="btn btn-secondary ml-2 float-left">
                        Reset
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddBook',
    data() {
        return {
            book: {
                title: null,
                author: null,
                price: null,
                quantity_available: null
            }
        }
    },
    methods: {
        addBook() { }
    }
}
</script>
<style lang="">

</style>