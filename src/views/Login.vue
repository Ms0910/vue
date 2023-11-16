<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">ç
            <label for="username">Usuario:</label>
            <input type="text" v-model="username" required>

            <label for="password">Contraseña:</label>
            <input type="password" v-model="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            if (this.username === 'user' && this.password === 'password') {
                this.$store.commit('setAuthentication', true);
                this.$router.push('/');
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        },
    }
};
</script>