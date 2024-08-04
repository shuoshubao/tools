---
aside: false
---

<script setup>
import { ref } from 'vue';
import data from './dom.dox.json';

const comments = ref(data)
</script>

<Dox :data="comments" />
