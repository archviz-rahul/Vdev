'use client';

import { ThemeProvider } from 'next-themes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/src/lib/queryClient';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="viztr-theme"
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
