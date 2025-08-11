// src/components/Contact.tsx
const contactLinks = [
    {
        href: 'mailto:tanmaywork172@gmail.com',
        label: 'Email',
        text: 'tanmaywork172@gmail.com',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    {
        href: 'https://github.com/Tanmay-AW',
        label: 'GitHub',
        text: 'Tanmay-AW',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    },
    {
        href: 'https://www.linkedin.com/in/tanmaygunwantdev',
        label: 'LinkedIn',
        text: 'Tanmay Gunwant',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
{
href: 'https://x.com/tanmay_gunwant',
label: 'Twitter/X',
text: 'Tanmay Gunwant',
icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 300 271" fill="none"><path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" fill="currentColor"></path></svg>
}

]

const Contact = () => {
  return (
    <section id="contacts" className="my-16 md:my-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-green-400">#</span>Contacts
          </h2>
          <p className="text-gray-400 text-lg">
            I'm interested in freelance opportunities and ambitious projects. <br />Got an idea? Let’s turn it into a deploy link.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Connect with  me here</h3>
            <ul className="space-y-3">
              {contactLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                    <span className="text-green-400">{link.icon}</span>
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
