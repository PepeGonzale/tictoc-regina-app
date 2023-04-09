.<template>
  <div>
    <h1>Página: Bienvenido</h1>
    <b-button variant="primary">Primary</b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
    name: 'PaginaBienvenido',
    components: {
    'b-button': BButton
  }
}
</script>

<style scoped>
h1 {
    color: red
}
</style>