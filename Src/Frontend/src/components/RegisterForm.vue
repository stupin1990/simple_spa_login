<template>
<div>
    <h1>Register new user</h1>

    <div v-if="confirmed" class="alert alert-success alert-dismissible mt-4" role="alert">
        <div>We've sent a confirmation link to your email, please go through it!</div>   
    </div>

    <div v-if="error" class="alert alert-danger alert-dismissible mt-4" role="alert">
        <div v-html="error"></div>
    </div>

    <div v-if="!confirmed" class="card-20 mt-4">
        <form class="mb-4" @submit.prevent="sendRegister($event)" >
            <div class="mb-3">
                <label for="name" class="form-label">User name</label>
                <input type="text" name="name" class="form-control" id="name" value="" required v-model="user.name">
            </div>
        
            <div class="mb-3">
                <label for="email" class="form-label">User email</label>
                <input type="email" name="email" class="form-control" value="" id="email" required v-model="user.email">
            </div>
        
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" value="" id="password" required v-model="user.password">
            </div>

            <div class="mb-3">
                <label for="password2" class="form-label">Password repeat</label>
                <input type="password" name="password2" class="form-control" value="" id="password2" required v-model="user.password2">
            </div>
        
            <button type="submit" class="btn btn-primary" ref="submit">Submit</button>
        </form>
    </div>
</div>
</template>
    
<script>
import axios from 'axios';

export default {
    name: 'register-form',

    props: ['options'],

    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password2: '',
            },
            confirmed: false,
            error: ''
        }
    },

    methods: {
        async sendRegister() {
            this.$refs.submit.disabled = true
            this.error = ''
            this.confirmed = false
            try {
                const response = await axios.post('/register', this.user, this.options)
                if (response?.data?.status) {
                    this.confirmed = true
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