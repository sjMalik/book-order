<template>
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h1>List of Books</h1>
                <table class="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(book, index) of books" :key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ book?.title }}</td>
                            <td>{{ book?.author }}</td>
                            <td>Rs. {{ book?.price }}</td>
                            <td>{{ book?.quantity_available }}</td>
                            <td><a href="javascript:void(0)" class="btn btn-sm btn-primary">Update</a></td>
                        </tr>
                    </tbody>
                </table>
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
        }
    },
    mounted() {
        this.getBooks();
    },
    methods: {
        async getBooks() {
            try {
                const { data } = await this.$http.get("books");
                this.books = data?.items;
                this.total = data?.total;
            } catch (e) {
                console.error(e)
            }
        },
    }
}
</script>