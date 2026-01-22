import type { Metadata } from 'next';
import  HomeHeader  from '@/components/Header/HomeHeader';
import PageLoader from '@/components/ui/page-loader';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Portfolio - Ted',
  description: '27-year-old game software developer from Singapore',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader />
      <Suspense
      >
        {children}
      </Suspense>
    </>
  );
}
