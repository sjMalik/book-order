<template lang="">
    <div class="row mt-5">
        <div class="col-md-10 m-auto">
            <div class="card card-body text-center">
                <h2>List of Books for Sale</h2>
                <table class="table table-striped mt-3">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>100</td>
                <td>999</td>
                <td><a href="javascript:void(0)" class="btn btn-sm btn-primary">Update</a></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>100</td>
                <td>999</td>
                <td><a href="javascript:void(0)" class="btn btn-sm btn-primary">Update</a></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>100</td>
                <td>999</td>
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
    name: 'ListBook'
}
</script>
<style lang="">

</style>