'use client';
import Accordion from 'components/Accordion';
import "styles/faq.css";

const faqItems = [
  { title: 'about', content: 'Change the text and add your own content, including any information that is relevant to share. Then customize the font, size and scale to make it your own.' },
  { title: 'services', content: 'Change the text and add your own content, including any information that is relevant to share. Then customize the font, size and scale to make it your own.' },
  { title: 'contact', content: 'Change the text and add your own content, including any information that is relevant to share. Then customize the font, size and scale to make it your own.' },
];

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="rounded-4xl border-(--ad-gray) border-1 shadow-(--ad-box-shadow) bg-black/50 backdrop-blur faqs">
        <div className="text-right text-brand-yellow font-semibold mb-8 text-lg 3xl:text-[32px] 4xl:text-[42px]">
          faq
        </div>

        <Accordion items={faqItems} />
      </div>
      <p className="footer font-inter uppercase transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF] text-center">© {(new Date()).getFullYear()} Ad Agency Creatives. <br className="md:hidden" />All Rights Reserved.</p>
    </section>
  );
}

export default FAQ;
