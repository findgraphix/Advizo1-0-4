
import React, { useState } from 'react';
import Modal from './ImageModal';
import SmoothFadeIn from './SmoothFadeIn';

const caseStudies = [
  {
    id: 'pmf',
    title: 'PMF – Scaling a Fitness Coaching Business',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    industry: 'Fitness & Wellness',
    challenge: 'The founder of PMF, a fitness coaching company, led a team of seven with an annual turnover of ₹40 lakhs and a profit of ₹13 lakhs. Offering one-on-one personal training, diet charts, and health analysis, PMF had a solid foundation but lacked a clear strategy to expand. The founder struggled with marketing the business and generating quality leads to fuel growth.',
    solution: 'PMF partnered with Consult Advizo for a three-quarter engagement. In the first quarter, the Consult Advizo team conducted in-depth market research, analyzed competitors, and identified growth opportunities. They crafted a tailored plan for the next two quarters, focusing on a B2B approach. A breakthrough came when Consult Advizo secured a meeting with the director of India\'s leading hospital, enabling PMF to launch a fitness campaign targeting doctors and nurses. This initiative boosted PMF\'s brand visibility and credibility. Additionally, Consult Advizo revamped PMF\'s offerings, introducing customized services for different age groups and genders.',
    result: 'In just three quarters, PMF transformed from a small-scale operation into a recognized fitness brand with a robust market presence. Revenue soared to 3x its previous level, driven by smart marketing, high-value B2B partnerships, and diversified services—all thanks to Consult Advizo\'s expertise.',
  },
  {
    id: 'shehri',
    title: 'Shehri – Scaling a Female Clothing Brand on a Shoestring Budget',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    industry: 'Fashion & Retail',
    challenge: 'The founder of Shehri, an aspiring female clothing brand, faced a daunting challenge: launching a profitable business with just ₹1 lakh in capital. With this limited budget, purchasing sufficient raw materials, building a digital platform, or renting a physical shop seemed nearly impossible. The goal? To kickstart the business and turn a profit within the first quarter.',
    solution: 'Shehri\'s founder partnered with Consult Advizo, a consultancy firm tasked with devising a smart, cost-effective strategy. The Consult Advizo team hit the ground running, conducting thorough market research. They discovered an untapped opportunity: seasoned shops, operational for over a decade, had unsold or slightly damaged inventory that could be repurposed. After negotiating with shop owners, Consult Advizo secured raw materials at a steep discount—down from ₹300 per piece to a range of ₹60–₹100 per piece. Minor fixes, costing ₹50 per piece in bulk, transformed these items into market-ready products, allowing Shehri to maximize its limited funds.',
    result: 'With Consult Advizo\'s guidance, Shehri didn\'t just survive its first quarter—it thrived. The initial event success provided the capital to establish a website and expand sales channels, including Amazon and Myntra. Within three quarters, Shehri evolved into a multi-channel retail brand with a strong online presence, B2B sales, and a scalable business model—all from a modest ₹1 lakh start.',
  },
  {
    id: 'shankar',
    title: 'Shankar IAS: Strategic Revamp of a UPSC Institution\'s North India Expansion',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    industry: 'Education',
    challenge: 'The institution had successfully operated in South India for over a decade, known for its quality faculty and results. To capitalize on the growing UPSC aspirant base in North India, it expanded to Delhi 3 years ago. However, the North Indian UPSC coaching market is highly saturated, with cutthroat competition, price wars, and aspirants\' sensitivity to branding. Despite heavy monthly spending (₹10–12 lakhs) on branding and marketing, the institution struggled to convert leads into enrollments, leading to a widening gap between costs and revenue.',
    solution: 'ADVIZO restructured teams to align with North India\'s market needs. Marketing operations were decentralized from the South India HQ to enable localized campaigns. The institution hired North Indian educators to address regional aspirants\' academic needs, trained sales teams in consultative selling, and deployed an offline marketing team for grassroots activities. Geo-targeted digital ads on YouTube, Instagram, and Google highlighted North Indian alumni success stories. Over 10 free workshops in universities showcased the institution\'s expertise.',
    result: 'ADVIZO\'s interventions led to significant outcomes: Monthly costs dropped by 50% (from ₹12L to ₹6L) through localized hiring and eliminating redundant HQ campaigns. Hyper-localized offline/digital campaigns and college partnerships drove a 40% surge in footfall, while a trained sales team and premium course adoption boosted revenue by 10%. Revised pricing and aspirant-aligned course structures further fueled a 10% enrollment increase, solidifying the institution\'s competitiveness in North India\'s UPSC market.',
  },
];

const CaseStudies = () => {
  const [activeModal, setActiveModal] = useState<null | typeof caseStudies[0]>(null);

  return (
    <section id="case-studies" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SmoothFadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-text text-advizo-blue">Case Studies</h2>
          <p className="subheading-text">
            Real success stories demonstrating our proven approach to MSME growth
          </p>
        </div>
        </SmoothFadeIn>
        <SmoothFadeIn delay={180}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-8 mt-12">
          {caseStudies.map((caseStudy, idx) => (
            <SmoothFadeIn key={caseStudy.id} delay={120*idx}>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:ring-4 hover:ring-advizo-blue/20 transition cursor-pointer h-full"
              onClick={() => setActiveModal(caseStudy)}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-advizo-purple mb-1">{caseStudy.title}</h3>
                <p className="text-gray-700 mb-2">Industry: {caseStudy.industry}</p>
                <p className="text-gray-600 mb-2">{caseStudy.challenge.substring(0, 120)}...</p>
              </div>
            </div>
            </SmoothFadeIn>
          ))}
        </div>
        </SmoothFadeIn>
      </div>
      {activeModal && (
        <Modal
          open={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={activeModal.title}
          image={activeModal.image}
          alt={activeModal.title}
          className="w-[90vw] h-[80vh] max-w-4xl max-h-[700px] flex flex-col md:flex-row overflow-hidden"
        >
          <div className="overflow-y-auto p-4 max-h-full">
            <div className="mb-3">
              <span className="block font-bold text-advizo-blue">Industry:</span>
              <span className="block mb-2">{activeModal.industry}</span>
            </div>
            <div className="mb-3">
              <span className="block font-bold text-advizo-blue">Challenge</span>
              <p>{activeModal.challenge}</p>
            </div>
            <div className="mb-3">
              <span className="block font-bold text-advizo-blue">Solution</span>
              <p>{activeModal.solution}</p>
            </div>
            <div>
              <span className="block font-bold text-advizo-blue">Result</span>
              <p>{activeModal.result}</p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CaseStudies;
