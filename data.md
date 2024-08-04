---
aside: false
---

<script setup>
import { ref } from 'vue';
import data from './data.dox.json';

const comments = ref(data)
</script>

<Dox :data="comments" />
