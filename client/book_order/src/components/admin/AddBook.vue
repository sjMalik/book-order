<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>Login</h1>
                <form @submit.prevent="addBook()">
                    <div class="form-group">
                        <label for="fname" class="float-left">First Name</label>
                        <input type="text" id="fname" name="fname" class="form-control" placeholder="Enter First Name"
                            v-model="book.author" />
                    </div>
                    <div class="form-group">
                        <label for="lname" class="float-left">Last Name</label>
                        <input type="text" id="lname" name="lname" class="form-control" placeholder="Enter Last Name"
                            v-model="book.title" />
                    </div>
                    <div class="form-group">
                        <label for="lname" class="float-left">Last Name</label>
                        <input type="number" id="lname" name="lname" class="form-control" placeholder="Enter Last Name"
                            v-model="book.price" />
                    </div>
                    <div class="form-group">
                        <label for="lname" class="float-left">Last Name</label>
                        <input type="number" id="lname" name="lname" class="form-control" placeholder="Enter Last Name"
                            v-model="book.quantity_available" />
                    </div>
                    <button type="submit" class="btn btn-success float-left">
                        Submit
                    </button>
                </form>
                <p class="lead mt-4">
                    Go to Dashboard? <a href="/">Dashboard</a>
                </p>
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
                author: null,
                title: null,
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