---
aside: false
---

<script setup>
import { ref } from 'vue';
import data from './numeral.dox.json';

const comments = ref(data)
</script>

<Dox :data="comments" />
