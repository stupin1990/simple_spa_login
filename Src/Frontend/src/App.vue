<template>
<div>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <router-link class="navbar-brand" to="/" @click="setForm('login')">{{title}}</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div ref="ref1" class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-if="!user" class="nav-item">
                        <router-link class="nav-link" to="/" @click="setForm('login')">Login</router-link>
                    </li>
                    <li v-if="!user" class="nav-item">
                        <router-link class="nav-link" to="/registration" @click="setForm('registration')">Registration</router-link>
                    </li>
                    <li v-if="user" class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" @click="logOut()">Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container mt-2">
        <div v-if="error" class="alert alert-danger alert-dismissible mt-4" role="alert">
            <div v-html="error"></div>
        </div>
        <div v-if="verified" class="alert alert-success alert-dismissible mt-4" role="alert">
            <div>You was successfully verified, now please log in!</div>
        </div>
        <div v-if="forgoted" class="alert alert-success alert-dismissible mt-4" role="alert">
            <div>Email with changing password link was successfully sent!</div>   
        </div>
        <div v-if="reseted" class="alert alert-success alert-dismissible mt-4" role="alert">
            <div>Your password was successfully changed, please log in!</div>   
        </div>
        <div v-if="user">
            Hello {{ user }}!
        </div>
        <div v-else>
            <register-form :options="options" v-if="current_form == 'registration'" />
            <login-form :options="options" v-if="current_form == 'login'" @forget="setForm('forgot')" @logged="setLogin" />
            <forgot-form :options="options" v-if="current_form == 'forgot'" @forgot="afterResetSend" />
            <reset-form :options="options" :code="code" v-if="current_form == 'reset'" @reset="afterPassReset" />
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        let params = window.$_data
        delete window.$_data

        return {
            title: params?.title,
            user: params?.user,
            options: {
                headers: {'X-CSRF-TOKEN': params?.csrf}
            },
            verified: params?.verified,
            current_form: params.form ?? 'login',
            code: params?.code,
            reseted: false,
            forgoted: false,
            error: ''
        }
    },

    methods: {
        setForm(form) {
            this.current_form = form
        },

        setLogin(user) {
            console.log(user)
            this.user = user
            this.current_form = ''
        },

        async logOut() {
            try {
                const response = await axios.post('/app/logout', this.user, this.options)
                if (response?.data?.status) {
                    this.user = null
                    this.current_form = 'login'
                }
                else if (response?.data?.error) {
                    this.error = response?.data?.error
                }
            }
            catch (error) {
                this.error = error.message ?? 'There was some error!'
            }
        },

        afterResetSend() {
            this.forgoted = true;
            this.current_form = 'login';
        },

        afterPassReset() {
            this.reseted = true;
            this.current_form = 'login';
        }
    }
}
</script>

<style>
.card-20 {
    width: 20rem;
}
.card-statuses {
    margin-left: var(--bs-card-spacer-x);
    margin-bottom: var(--bs-card-spacer-y);
}
.router-link-active, .router-link-exact-active {
    color: var(--bs-navbar-active-color);
}
</style>
