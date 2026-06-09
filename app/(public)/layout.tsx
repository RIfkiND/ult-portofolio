import type { Metadata } from 'next';
import  HomeHeader  from '@/components/Header/HomeHeader';
import PageLoader from '@/components/ui/page-loader';
import { Suspense } from 'react';
import Footer from '@/components/Footer/Footer';
import DynamicTitle from '@/components/ui/DynamicTitle';

export const metadata: Metadata = {
  title: 'Rifki ND',
  description: ' Backend developer from indonesia',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DynamicTitle />
      <HomeHeader />
      <Suspense>
        {children}
      </Suspense>
      <Footer />
    </>
  );
}
