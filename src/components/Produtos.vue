<template>
    <v-container>
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" md="4">
                <v-card>
                    <v-img :src="product.image" height="200px"></v-img>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.description }}</v-card-subtitle>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    { id: 1, name: 'Tinta Acrílica', description: 'Alta durabilidade', image: '/images/tinta1.jpg' },
                    { id: 2, name: 'Esmalte Sintético', description: 'Ideal para acabamentos', image: '/images/tinta2.jpg' },
                    // Adicione mais produtos conforme necessário
                ],
            };
        },
    };
</script>
