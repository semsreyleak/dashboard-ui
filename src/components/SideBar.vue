<template>
  <aside class="w-48 bg-gray-100 text-gray-900 flex-shrink-0 p-3 h-screen font-semibold overflow-y-auto">
    <nav class="space-y-4 items-center justify-center">
      <a href="" class="flex text-sm items-center gap-2 hover:bg-purple-300 hover:p-2 p-2">
        <Squares2X2Icon class="w-5 h-5" />
        <span>Dashboard</span>
      </a>
      <a href="" class="items-center gap-2 flex text-sm hover:bg-purple-300 hover:p-2 p-2">
        <ChartBarSquareIcon class="w-5 h-5" />
        <span>Analytics</span>
      </a>
      <a href="" class="items-center gap-2 flex text-sm hover:bg-purple-300 hover:p-2 p-2">
        <WindowIcon class="w-5 h-5" />
        <span>Orders</span>
      </a>
      <a href="" class="items-center gap-2 flex text-sm hover:bg-purple-300 hover:p-2 p-2">
        <UserIcon class="w-5 h-5" />
        <span>Customer</span>
      </a>
      <a href="" class="items-center gap-2 flex text-sm hover:bg-purple-300 hover:p-2 p-2">
        <PencilIcon class="w-5 h-5" />
        <span>Review</span>
      </a>
      <a href="" class="items-center gap-2 flex text-sm hover:bg-purple-300 hover:p-2 p-2">
        <ChatBubbleOvalLeftIcon class="w-5 h-5" />
        <span>Chats</span>
      </a>
      <a href="" class="items-center gap-2 flex text-sm hover:bg-purple-300 hover:p-2 p-2">
        <WalletIcon class="w-5 h-5" />
        <span>Wallet</span>
      </a>
    </nav>
  </aside>
</template>
<script setup>
import { Squares2X2Icon, ChartBarSquareIcon, WalletIcon, ChatBubbleOvalLeftIcon, PencilIcon, UserIcon, WindowIcon } from '@heroicons/vue/24/outline';
</script>