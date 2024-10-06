<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form @submit.prevent="handleSubmit">
                            <IonInput v-model="email" class="ion-margin-bottom" label="Email" label-placement="floating" fill="outline" placeholder="Enter email"></IonInput>
                            <IonInput v-model="password" class="ion-margin-bottom" label="Password" label-placement="floating" fill="outline" placeholder="Enter password"></IonInput>
                            <IonButton type="submit" expand="block">Login</IonButton>
                            <IonButton expand="block" @click="navToSignUp">Create an account</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
    import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { useLogin } from '@/viewmodels/useLogin';

    const {email, password, handleSubmit, navToSignUp} = useLogin()
</script>