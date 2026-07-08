import './globals.css';

export const metadata = {
  title: 'OpenShop — Let your Shopify store handle itself',
  description:
    'OpenShop is an AI operator for Shopify merchants. It handles store work from one conversation, with approval before anything goes live.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
