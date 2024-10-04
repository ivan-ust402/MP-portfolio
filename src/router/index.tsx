// import { createBrowserRouter, createRoutesFromElements, Route, useLocation } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { About, Contacts, Projects } from 'src/pages';
import { Layout } from 'src/components';
// import { useEffect } from 'react';

// export const ScrollToTop = () => {
//   const {pathname} = useLocation()

//   useEffect(() => {
//     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
//   }, [pathname])
//   return null
// }

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path='/contacts' element={<Contacts />} />
    </Route >
  )
)