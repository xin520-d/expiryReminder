import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // 默认只监听本机。需要手机真机联调时运行： npm run dev -- --host
    host: '127.0.0.1',
    open: false,
  },
  // 后端（B 角色）联调时把 /api 代理到模型服务，避免跨域
  // proxy: { '/api': { target: 'http://127.0.0.1:8000', changeOrigin: true } },
});
