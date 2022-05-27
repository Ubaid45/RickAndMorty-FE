<template>
  <div class="card-container">
    <img
      :src="characterList.image"
      alt="avatar"
    >
    <p><span>Name:</span> {{ characterList.name }}</p>
    <p class="medium__item">
      <span>State:</span> {{ characterList.status }}
    </p>
    <p class="last__item">
      <span>Last known location:</span> {{ characterList.location.name }}
    </p>
  </div>
</template>

<script>

export default {
    name: "Card",
    props: ['characterList']
}
</script>


