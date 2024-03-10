<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>Add Book</h1>
                <form @submit.prevent="addBook()">
                    <div class="form-group">
                        <label for="title" class="float-left">Title of the Book</label>
                        <input type="text" id="title" name="title" class="form-control" placeholder="Enter Title"
                            v-model="book.author" />
                    </div>
                    <div class="form-group">
                        <label for="author" class="float-left">Author Name</label>
                        <input type="text" id="author" name="author" class="form-control" placeholder="Enter Author"
                            v-model="book.title" />
                    </div>
                    <div class="form-group">
                        <label for="price" class="float-left">Price (Rs.)</label>
                        <input type="number" id="price" name="price" class="form-control" placeholder="Enter Price"
                            v-model="book.price" />
                    </div>
                    <div class="form-group">
                        <label for="quantity" class="float-left">Quantity Available</label>
                        <input type="number" id="quantity" name="quantity" class="form-control"
                            placeholder="Enter Quantity" v-model="book.quantity_available" />
                    </div>
                    <button type="submit" class="btn btn-success float-left">
                        Submit
                    </button>
                    <button type="reset" class="btn btn-secondary float-left ml-2">
                        Reset
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: 'AddBook',
    data() {
        return {
            book: {
                author: null,
                title: null,
                price: null,
                quantity_available: null
            }
        }
    },
    methods: {
        async addBook() {
            try {
                await this.$http.post("books", this.book);
                this.$router.push('/admin/books');
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Sucessfully book added',
                });
            } catch (e) {
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: e.response.data.message,
                });
            }
        }
    }
}
</script>