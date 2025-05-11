
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How quickly will I see results with SlimVital?",
      answer: "Most of our UK customers report initial results within the first 2 weeks, with more significant weight loss becoming apparent after 4-6 weeks of consistent use. Individual results may vary based on starting weight, diet, and activity levels. Our clinical studies showed an average weight loss of 0.5-1kg per week when taken as directed."
    },
    {
      question: "Is SlimVital suitable for vegetarians and vegans?",
      answer: "Yes, SlimVital is 100% suitable for both vegetarians and vegans. Our formula contains no animal-derived ingredients and is certified by the Vegetarian Society UK. We're committed to ethical manufacturing practices while maintaining the highest efficacy standards."
    },
    {
      question: "How is delivery handled in the UK?",
      answer: "We offer free Royal Mail tracked delivery on all UK orders. Standard delivery takes 2-3 working days, with express next-day delivery options available for orders placed before 2 PM. All packages are discreetly packaged with no external mention of the product contents for your privacy."
    },
    {
      question: "Are there any side effects to taking SlimVital?",
      answer: "SlimVital is formulated with natural ingredients and has been extensively tested in UK laboratories. In clinical trials, 98% of participants reported no side effects. As with any supplement, some individuals may experience mild digestive adjustment in the first few days. If you have existing health conditions or take medication, we recommend consulting your GP before starting any new supplement."
    },
    {
      question: "What if SlimVital doesn't work for me?",
      answer: "We're confident in our product's effectiveness, which is why we offer a 60-day money-back guarantee for all UK customers. If you're not satisfied with your results after consistent use, simply return the unused portion for a full refund, no questions asked. This exceeds the standard UK consumer rights requirements to give you complete peace of mind."
    },
    {
      question: "How does the auto-ship programme work?",
      answer: "Our convenient auto-ship programme ensures you never run out of SlimVital. After your initial order, we'll automatically send your chosen supply every 30, 60, or 90 days, with a 15% discount applied to all future shipments. You can modify or cancel your subscription anytime through your account or by contacting our UK-based customer service team. All subscriptions are protected under the Consumer Contracts Regulations 2013."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about SlimVital
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Still have questions? Our UK-based customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:support@healthguarduk.com" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email Support
            </a>
            <a href="tel:+442012345678" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              Call +44 20 1234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
