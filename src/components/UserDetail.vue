<template>
    <div class="container">
        <h3>User Detail Component</h3>
        <hr>
        <h1>asdasdasd</h1>
        <p>Kullanıcının id bilgisi : {{ $route.params.id[0].id }}</p>
        <router-link tag="button" class="btn btn-primary"
            :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { name: $route.query.name, lastName: $route.query.lastName } }">
            KuLLancıyı Düzenle
        </router-link>
    </div>
</template>
<script>
export default {

    beforeRouteEnter(to, from, next) {
        console.log("component seviyesinde kontrol");

        next(true);
    }



}
</script>
  