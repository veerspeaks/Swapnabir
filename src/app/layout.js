import './globals.css';
import Navbar from '../components/Navbar';
import ScrollIndicator from '../components/ScrollIndicator';


export const metadata = {
  title: 'Swapnabir Dutta',
  description: 'Portfolio of Swapnabir Dutta,',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}