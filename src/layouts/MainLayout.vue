<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Minha Aplicação Quasar
        </q-toolbar-title>
        <q-btn :label="name" icon="person" rounded flat>
          <q-menu>
            <q-list>
              <q-btn label="Sair" @click="authStore.logout()" v-close-popup />
            </q-list>
          </q-menu>
        </q-btn>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from 'stores/auth'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const authStore = useAuthStore()
    const { name } = storeToRefs(authStore)

    authStore.login('admin', 'admin')

    return {
      authStore,
      name
    }
  }
})
</script>
