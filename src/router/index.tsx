import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { About, Contacts, Projects } from 'src/pages';
import { Layout } from 'src/components';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path='/contacts' element={<Contacts />} />
    </Route >
  )
)