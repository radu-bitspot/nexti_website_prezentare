# EmailJS Setup Guide

Formularul de contact este configurat să folosească EmailJS pentru trimiterea de email-uri fără backend.

## Pași de configurare

### 1. Creează cont EmailJS

1. Accesează [https://www.emailjs.com/](https://www.emailjs.com/)
2. Creează un cont gratuit (permite până la 200 email-uri/lună)
3. Verifică-ți emailul pentru activare

### 2. Adaugă un Email Service

1. Du-te la **Email Services** din dashboard
2. Click pe **Add New Service**
3. Alege provider-ul tău (Gmail, Outlook, Yahoo, etc.)
4. Urmează instrucțiunile pentru conectare
5. Copiază **Service ID** (va fi ceva de genul: `service_xxxxxxx`)

### 3. Creează Email Template

1. Du-te la **Email Templates** din dashboard
2. Click pe **Create New Template**
3. Folosește următorul template:

```
Subject: Mesaj nou de la {{from_name}} - Website NexTI

Ai primit un mesaj nou de pe site-ul NexTI:

-------------------------------------------
Nume: {{from_name}}
Email: {{from_email}}
Companie: {{company}}
-------------------------------------------

Mesaj:
{{message}}

-------------------------------------------
Răspunde la: {{from_email}}
```

4. În secțiunea **Settings**, setează:
   - **To Email**: `contact@nexti.ro` (sau emailul tău unde vrei să primești mesajele)
   - **From Name**: `NexTI Contact Form`
   - **Reply To**: `{{from_email}}`

5. Click pe **Save**
6. Copiază **Template ID** (va fi ceva de genul: `template_xxxxxxx`)

### 4. Obține Public Key

1. Du-te la **Account** → **General**
2. Găsește secțiunea **API Keys**
3. Copiază **Public Key** (va fi ceva de genul: `xxxxxxxxxxxx`)

### 5. Configurează aplicația

Deschide fișierul `src/config/emailjs.config.ts` și înlocuiește valorile:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_public_key_here',      // Din Account → General
  SERVICE_ID: 'service_xxxxxxx',           // Din Email Services
  TEMPLATE_ID: 'template_xxxxxxx'          // Din Email Templates
};
```

## Testare

1. Pornește aplicația: `npm start`
2. Navighează la secțiunea Contact
3. Completează formularul și trimite
4. Verifică:
   - Mesaj de succes în formular
   - Email primit la `contact@nexti.ro`

## Variabile disponibile în template

Formularul trimite următoarele variabile către EmailJS:

- `{{from_name}}` - Numele persoanei care a completat formularul
- `{{from_email}}` - Emailul persoanei
- `{{company}}` - Compania (opțional, va fi "N/A" dacă nu e completat)
- `{{message}}` - Mesajul
- `{{to_email}}` - Emailul destinatar (hardcodat: contact@nexti.ro)

## Limite și prețuri

### Free Plan (actual)
- 200 email-uri/lună
- 2 Email Services
- 1 Email Template
- Browserlist rate limit: 50 requests/hour

### Personal Plan ($9/lună)
- 1,000 email-uri/lună
- 3 Email Services
- 5 Email Templates
- Rate limit: 70 req/hour

Pentru detalii: [https://www.emailjs.com/pricing/](https://www.emailjs.com/pricing/)

## Securitate

✅ **Ce este sigur:**
- Public Key-ul poate fi văzut în cod (de aceea se numește "public")
- Emailul destinatar este hardcodat în template
- EmailJS validează originea request-urilor

❌ **Nu face:**
- Nu pune credențiale private în cod
- Nu permite attachment-uri arbitrare (risc security)

## Troubleshooting

### Eroare: "The public key is invalid"
- Verifică că ai copiat correct Public Key din EmailJS dashboard
- Asigură-te că nu sunt spații albe înainte/după key

### Eroare: "Template not found"
- Verifică Template ID
- Asigură-te că template-ul este salvat și activ

### Nu primesc email-uri
- Verifică folder-ul Spam/Junk
- Verifică că Service-ul este conectat corect
- Testează direct din EmailJS dashboard (Test Email)

### Rate limit exceeded
- Planul free permite 50 req/hour
- Implementează validare pe client pentru a preveni spam-ul
- Consideră upgrade la plan plătit

## Alternative (dacă nu vrei EmailJS)

### 1. Netlify Forms
- Gratis pentru site-uri hosted pe Netlify
- Simplu de integrat
- Limitat la 100 submissions/lună (free)

### 2. Formspree
- Free plan: 50 forms/lună
- $10/lună: 1000 forms

### 3. Backend propriu
- Node.js + Express + Nodemailer
- Control total, dar necesită server și întreținere

## Support

Documentație EmailJS: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

Pentru probleme cu aplicația, contactează echipa de dezvoltare.
