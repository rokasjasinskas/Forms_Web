<!-- <template>
  <div>
    <button>Form</button>
    <form>
      <p>Formos elementas</p>
    </form>
  </div>
</template> -->
<template>
  <form class="">
    <!-- Profile Section -->
    <section>
      <h2 class="text-xl font-bold mb-4">Profile</h2>
      <div class="space-y-4">
        <div>
          <label class="block font-medium">Username</label>
          <input type="text" class="w-full border p-2 rounded" placeholder="workcation.com/username" />
        </div>
        <div>
          <label class="block font-medium">About</label>
          <textarea class="w-full border p-2 rounded" placeholder="Write a few sentences about yourself."></textarea>
        </div>
        <div>
          <label class="block font-medium">Photo</label>
          <input type="file" class="mt-2" />
        </div>
        <div>
          <label class="block font-medium">Cover Photo</label>
          <input type="file" class="mt-2" />
          <p class="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </section>

    <!-- Personal Information Section -->
    <section>
      <h2 class="text-xl font-bold mb-4">Personal Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First name" class="border p-2 rounded" />
        <input type="text" placeholder="Last name" class="border p-2 rounded" />
        <input type="email" placeholder="Email address" class="border p-2 rounded" />
        <select class="border p-2 rounded">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <input type="text" placeholder="Street address" class="border p-2 rounded col-span-2" />
        <input type="text" placeholder="City" class="border p-2 rounded" />
        <input type="text" placeholder="State / Province" class="border p-2 rounded" />
        <input type="text" placeholder="ZIP / Postal code" class="border p-2 rounded" />
      </div>
    </section>

    <!-- Notifications Section -->
    <section>
      <h2 class="text-xl font-bold mb-4">Notifications</h2>
      <div class="space-y-4">
        <div>
          <label class="font-medium">By Email</label>
          <div class="mt-2 space-y-2">
            <label><input type="checkbox" /> Comments</label><br />
            <label><input type="checkbox" /> Candidates</label><br />
            <label><input type="checkbox" /> Offers</label>
          </div>
        </div>
        <div>
          <label class="font-medium">Push Notifications</label>
          <div class="mt-2 space-y-2">
            <label><input type="radio" name="push" /> Everything</label><br />
            <label><input type="radio" name="push" /> No push notifications</label>
          </div>
        </div>
      </div>
    </section>

    <!-- Actions -->
    <div class="flex justify-end space-x-4">
      <button type="button" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
      <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
    </div>
  </form>
</template>

<script setup>
// No logic yet, but you can add reactive form handling here
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
