<template>
    <div class="container">

        <button class="btn btn-success" @click="navigateToHome">Go home</button>
        <table class="table table-hover table-success table-striped">
            <thead>
                <tr>
                    <th v-for="keys in  Object.keys(this.userDetail[0])" scope="col">{{ keys }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in  userDetail ">

                    <th v-if="user.userId != null" scope="row"> {{ user.userId }}</th>
                    <td v-if="user.postId != null">{{ user.postId }}</td>

                    <td v-if="user.id != null">
                        {{
                            user.id
                        }}
                    </td>
                    <td v-if="user.title != null">{{ user.title }}</td>
                    <td v-if="user.name != null">{{ user.name }}</td>
                    <td v-if="user.username != null">{{ user.username }}</td>
                    <td v-if="user.email != null">{{ user.email }}</td>
                    <td v-if="user.body != null">{{ user.body }}</td>



                    <td v-if="user.address != null">
                        @{{
                            user.address.street +
                            " " +
                            user.address.suite +
                            " " +
                            user.address.city +
                            " " +
                            user.address.zipcode
                        }}
                    </td>
                    <td v-if="user.phone != null">{{ user.phone }}</td>
                    <td v-if="user.website != null">{{ user.website }}</td>
                    <td v-if="user.company != null">{{ user.company }}</td>
                    <td v-if="user.thumbnailUrl != null">{{ user.thumbnailUrl }}</td>
                    <td v-if="user.albumId != null">{{ user.albumId }}</td>
                    <td v-if="user.url != null">
                        <img v-bind:src="user.url" width="50px" height="50px" alt="" />
                    </td>
                    <td v-if="user.completed != null">
                        <input v-if="user.completed" type="checkbox" name="" id="" checked />
                        <input v-else type="checkbox" name="" id="" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    methods: {
        navigateToHome() {
            this.$router.push("/home");
        }
    },

    data() {
        return {
            userDetail: null,
            id: this.$route.params.id
        }
    },
    created() {
        axios
            .get(`https://jsonplaceholder.typicode.com/users?id=${this.id}`)
            .then(response => {
                this.userDetail = response.data;

            })
        console.log("CREATED");
        console.log(this.userDetail);
    },

}
</script>
  