<template>
<div>
    <h1>Log In</h1>

    <div v-if="error" class="alert alert-danger alert-dismissible mt-4" role="alert">
        <div v-html="error"></div>
    </div>

    <div class="card-20 mt-4">
        <form class="mb-4" @submit.prevent="logIn($event)">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" value="" id="email" required v-model="user.email">
            </div>
        
            <div class="mb-1">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" value="" id="password" required v-model="user.password">
            </div>

            <div class="mb-4">
                <router-link to="/forgot" @click="showForgotForm()">Forgot password</router-link>
            </div>
        
            <button type="submit" class="btn btn-primary" ref="submit">Submit</button>
        </form>
    </div>
</div>
</template>
        
<script>
import axios from 'axios';

export default {
    name: 'login-form',

    props: ['options'],

    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            error: ''
        }
    },

    methods: {
        showForgotForm() {
            this.$emit('forget')
        },

        async logIn() {
            this.$refs.submit.disabled = true
            this.error = ''
            try {
                const response = await axios.post('/app/login', this.user, this.options)
                if (response?.data?.status) {
                    this.$emit('logged', response?.data?.user)
                }
                else if (response?.data?.error) {
                    this.error = response?.data?.error
                }
            }
            catch (error) {
                this.error = error.message ?? 'There was some error!'
            }
            this.$refs.submit.disabled = false
        }
    }
}
</script>

<style>
</style>