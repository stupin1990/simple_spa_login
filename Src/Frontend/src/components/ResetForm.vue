<template>
<div>
    <h1>Reset password</h1>

    <div v-if="error" class="alert alert-danger alert-dismissible mt-4" role="alert">
        <div v-html="error"></div>
    </div>

    <div class="card-20 mt-4">
        <form class="mb-4" @submit.prevent="sendResetPass($event)">

            <div class="mb-3">
                <label for="password" class="form-label">New password</label>
                <input type="password" name="new_password" class="form-control" value="" id="password" required v-model="user.password">
            </div>

            <div class="mb-3">
                <label for="password2" class="form-label">New password repeat</label>
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
    name: 'reset-form',

    props: ['options', 'code'],

    data() {
        return {
            user: {
                password: '',
                password2: '',
                code: this.code
            },
            error: ''
        }
    },

    methods: {
        async sendResetPass() {
            this.$refs.submit.disabled = true
            this.error = '';
            try {
                const response = await axios.post('/password/change', this.user, this.options)
                if (response?.data?.status) {
                    this.$emit('reset')
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