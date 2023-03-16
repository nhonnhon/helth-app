import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { ScrollTop } from '@/components/common';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollTop />
    </>
  );
};

MainLayout.displayName = 'MainLayout';
