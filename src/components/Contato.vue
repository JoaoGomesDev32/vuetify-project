<template>
    <v-container>
        <h2>Entre em Contato</h2>
        <v-form ref="form">
            <v-text-field label="Nome" v-model="name" required></v-text-field>
            <v-text-field label="E-mail" v-model="email" required></v-text-field>
            <v-textarea label="Mensagem" v-model="message" required></v-textarea>
            <v-btn color="primary" @click="sendContact">Enviar</v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                message: '',
            };
        },
        methods: {
            sendContact() {
                if (this.$refs.form.validate()) {
                // Adicione a lógica para enviar a mensagem
                    alert('Mensagem enviada com sucesso!');
                }
            },
        },
    };
</script>
