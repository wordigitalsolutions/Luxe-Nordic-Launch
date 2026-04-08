import { redirect } from 'next/navigation';

export default function Home() {
  // Reindirizza chiunque visiti la pagina principale all'Atrio
  redirect('/invitation');
}