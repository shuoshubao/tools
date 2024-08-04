---
aside: false
---

<script setup>
import { ref } from 'vue';
import data from './rules.dox.json';

const comments = ref(data)
</script>

<Dox :data="comments" />
