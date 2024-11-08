import './globals.css';
import Navbar from '../components/Navbar';
import ScrollIndicator from '../components/ScrollIndicator';

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