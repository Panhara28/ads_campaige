import React from 'react';
import { Footer } from './footer';
import { MainNavbar } from './navbar';

export const Layout = (props: any) => {
  return(
    <>
      <MainNavbar />
        {
          props.children
        }
      <Footer />
    </>
  )
}