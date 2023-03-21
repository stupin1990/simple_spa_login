<template>
<div>
    <h1>Forgot password</h1>

    <div v-if="error" class="alert alert-danger alert-dismissible mt-4" role="alert">
        <div v-html="error"></div>
    </div>

    <div class="card-20 mt-4">
        <form class="mb-4" @submit.prevent="sendChangePass($event)">
            <div class="mb-3">
                Please enter your email and we send you a link for changing password.
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" value="" id="email" required v-model="email">
            </div>
        
            <button type="submit" class="btn btn-primary" ref="submit">Submit</button>
        </form>
    </div>
</div>
</template>
            
<script>
import axios from 'axios';

export default {
    name: 'forgot-form',

    props: ['options'],

    data() {
        return {
            email: '',
            error: ''
        }
    },

    methods: {
        async sendChangePass() {
            this.$refs.submit.disabled = true
            this.error = ''
            try {
                const response = await axios.post('/password/send', {email: this.email}, this.options)
                if (response?.data?.status) {
                    this.$emit('forgot')
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