---
aside: false
---

<script setup>
import { ref } from 'vue';
import data from './date.dox.json';

const comments = ref(data)
</script>

<Dox :data="comments" />
