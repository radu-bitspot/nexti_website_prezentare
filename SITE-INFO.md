# Site NexTI - Informații

## Despre Site

Site-ul a fost creat cu un design minimalist, modern și mobile-friendly pentru firma ta de consultanță și soluții IT - NexTI.

### Design
- **Culoare principală**: Teal/Turquoise (#2DBCB0) - din logo-ul tău
- **Stil**: Minimalist, alb, clean
- **Mobile-friendly**: Complet responsive pe toate device-urile
- **Navigare**: Smooth scroll, ușor de folosit

## Structura Site-ului

### Secțiuni:
1. **Header** - Navigare fixă cu logo și meniu
2. **Hero** - Secțiune principală cu CTA-uri
3. **Servicii** - Grid cu 6 servicii principale:
   - Dezvoltare Software
   - Cloud Solutions
   - Securitate IT
   - Consultanță IT
   - Suport & Mentenanță
   - Automatizare
4. **Despre Noi** - Povestea companiei și statistici
5. **Contact** - Formular de contact și informații
6. **Footer** - Informații și link-uri utile

## Cum să Rulezi Site-ul

### Development:
```bash
cd "c:\Users\Radu-\Documents\nexTI\Website\startup-presentation"
npm start
```
Site-ul va fi disponibil la: http://localhost:3000

### Build pentru Production:
```bash
npm run build
```
Fișierele pentru production vor fi în folderul `/build`

## Personalizări Recomandate

### 1. Informații de Contact (în Contact.tsx)
- Email: contact@nexti.ro
- Telefon: +40 XXX XXX XXX
- Locație: România

### 2. Social Media Links (în Footer.tsx)
- LinkedIn: adaugă link-ul tău
- Facebook: adaugă link-ul tău
- Twitter/X: adaugă link-ul tău

### 3. Statistici (în About.tsx)
Actualizează numerele cu datele reale:
- Ani de experiență
- Proiecte finalizate
- Clienți mulțumiți

### 4. Logo
Logo-ul este implementat ca text pentru moment. Pentru a folosi logo-ul tău PNG:
1. Copiază `NexIT.png` sau `NexIT-white.png` în `/public`
2. Înlocuiește textul logo-ului din Header.tsx și Footer.tsx cu:
```tsx
<img src="/NexIT.png" alt="NexTI Logo" className="logo-image" />
```

## Tehnologii Folosite

- **React 19.1.0** - Framework principal
- **TypeScript** - Type safety
- **CSS3** - Styling modern cu animații
- **Create React App** - Build tool

## Caracteristici

### Design:
- Smooth scroll între secțiuni
- Animații subtile la hover
- Mobile menu hamburger
- Header sticky cu efect la scroll
- Gradient backgrounds subtile

### Performance:
- Optimizat pentru Web Vitals
- Lazy loading implicit cu React
- CSS optimizat
- Build production minimizat

### Responsive:
- Desktop (>968px)
- Tablet (768px - 968px)
- Mobile (480px - 768px)
- Small mobile (<480px)

## Next Steps

1. Actualizează informațiile de contact reale
2. Adaugă logo-ul PNG în header și footer
3. Conectează formularul de contact la un backend/service (EmailJS, Formspree, etc.)
4. Adaugă Google Analytics pentru tracking
5. Optimizează SEO (meta tags, OpenGraph)
6. Configurează deployment (Vercel, Netlify, AWS)

## Deployment Rapid

### Vercel (Recomandat):
```bash
npm install -g vercel
vercel
```

### Netlify:
1. Conectează repo-ul la Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

---

**Creat cu**: Claude Code
**Data**: 2025-10-27
