import React, { useState } from 'react';
import Modal from './ImageModal';
import SmoothFadeIn from './SmoothFadeIn';

const offerings = [
  {
    id: 'strategy',
    title: 'Strategy Consulting',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    shortDescription: 'Develop clear business strategies to overcome challenges and drive growth for your MSME.',
    content: `
      <p class="mb-4">Micro, Small, and Medium Enterprises (MSMEs) are a critical component of India's economy, contributing significantly to employment, GDP, and exports. However, MSMEs often face unique challenges that can hinder their growth and sustainability. Strategy consulting can play a vital role in addressing these challenges and unlocking the potential of the MSME sector in India.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li> Lack formal business plans or long-term strategies, which can lead to directionless growth. </li>
        <li> Struggle to identify and enter new markets or expand their presence in existing ones. </li>
        <li> Inefficient operations can lead to high costs and reduced profitability. </li>
        <li> Limited marketing budgets and lack of expertise can hinder brand visibility and customer acquisition. </li>
        <li> Lag in adopting modern technologies, which can limit their competitiveness.</li>
        <li> Attracting and retaining talent is a challenge for MSMEs due to limited resources.</li>
        <li> Navigating the complex regulatory environment can be daunting for MSMEs.</li>
        <li> Inefficient supply chains can lead to delays and increased costs.</li>
        <li> Vulnerable to various risks, including market fluctuations and operational disruptions.</li>
      </ul>
      <p>Advizo Consulting provides MSMEs in India with the expertise and tools they need to overcome challenges and achieve sustainable growth. By addressing these challenges, we help MSMEs enhance their competitiveness, improve operational efficiency, and capitalize on new opportunities, thereby contributing to the overall economic development of the country.</p>
    `
  },
  {
    id: 'innovation',
    title: 'Innovation & Technology',
    img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
    shortDescription: 'Harness the power of technology to transform your business and stay ahead of competitors.',
    content: `
      <p class="mb-4">Innovations and technologies are crucial for the growth and sustainability of Micro, Small, and Medium Enterprises (MSMEs) in India. Adopting modern technologies can help MSMEs improve efficiency, reduce costs, enhance product quality, and expand their market reach. Here are some key advantages of innovations and technologies for the MSME sector in India:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li> Enhances brand visibility, customer engagement, and sales through digital channels.                </li>
        <li> Reduces IT infrastructure costs, improves data accessibility, and facilitates remote work.         </li>
        <li> Increases convenience for customers and streamlines business processes.                            </li>
        <li> Enhances operational efficiency, predictive maintenance, and real-time data collection.            </li>
        <li> Improves decision-making, personalizes customer experiences, and automates repetitive tasks.       </li>
        <li> Enhances security, reduces fraud, and improves traceability.                                       </li>
        <li> Facilitates easier access to finance, improves cash flow management, and simplifies transactions.  </li>
        <li> Increases production efficiency, reduces labor costs, and improves product consistency.            </li>
        <li> Provides actionable insights, improves decision-making, and identifies new business opportunities. </li>
      </ul>
      <p>    Adopting these innovations and technologies can significantly enhance the competitiveness and sustainability of MSMEs in India. By leveraging modern tools and solutions, MSMEs can overcome traditional challenges, improve operational efficiency, and capitalize on new opportunities for growth. Government initiatives, industry collaborations, and access to funding can further support the adoption of these technologies, driving the overall development of the MSME sector.    </p>
    `
  },
  
  
  {
    id: 'operations',
    title: 'Operational Excellence',
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    shortDescription: 'Optimize business processes to enhance efficiency, reduce waste, and improve customer satisfaction.',
    content: `
      <h2> Introduction to Operational Excellence for SMEs </h2>
      <p class="mb-4"> Operational excellence is about optimizing business processes to enhance efficiency, reduce waste, and improve customer satisfaction. For Small and Medium-sized Enterprises (SMEs) in India, it’s a vital strategy to stay competitive in a dynamic market. Consulting services can provide the expertise needed to achieve these improvements, especially given the unique challenges SMEs face.</p>
      
      <h2> Why SMEs Need Consulting </h2>
      <p class="mb-4">  SMEs often lack the internal resources or expertise to implement operational excellence on their own. Consultants bring tailored solutions, industry best practices, and training to help SMEs streamline operations, manage compliance, and adopt technology. This support is crucial for overcoming financial constraints, regulatory hurdles, and infrastructure issues, ensuring long-term sustainability.</p>
      
      <h2>  Unexpected Detail: Cultural and Regulatory Adaptation </h2>
      <p class="mb-4">   An unexpected benefit is how consultants help SMEs adapt operational excellence to India’s diverse cultural and regulatory landscape, ensuring strategies align with local market needs and compliance requirements, which can be particularly complex for smaller businesses.</p>
      
      <h2 class="mb-2">   Survey Note: Detailed Analysis of Operational Excellence Consulting for Indian SMEs </h2>
      <h3 class="mb-2">   Overview of Operational Excellence </h3>
      <p class="mb-2"> Operational excellence is defined as the systematic implementation of principles and tools to enhance organizational performance, focusing on continuous improvement and delivering value to customers. Common frameworks include lean management and Six Sigma, which emphasize efficiency, waste reduction, and quality improvement. For SMEs in India, operational excellence is crucial for staying competitive, especially given their significant contribution to the economy—accounting for 45% of industrial output and 40% of exports, as noted in various reports (SME Landscape in India - Growth, Challenges and Opportunities). </p>
      <p class="mb-4"> The concept, introduced in the 1970s by Dr. Joseph M. Juran, gained prominence in the U.S. during the 1980s and has since been adopted globally, including in India, to address operational inefficiencies. For SMEs, it involves creating a culture where employees are empowered to identify and enhance value flow, which is particularly challenging given their limited resources.  </p>
      
      <h3 class="mb-2"> Challenges Faced by Indian SMEs </h3>
      <p class="mb-2"> Indian SMEs face several operational hurdles that operational excellence can address: </p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li> <b>Access to Finance:</b> Only 16% of SMEs receive timely finance, forcing reliance on internal resources, as highlighted in a report (Challenges faced by the MSME sector in India | 5paisa). This limits growth and operational scalability.</li>
        <li> <b>Regulatory and Compliance Issues:</b> Complex tax laws and labor regulations pose significant burdens, often leading to high compliance costs and business closures</li>
        <li> <b>Technological Challenges:</b> Keeping up with digital transformation is difficult, with many SMEs lacking the infrastructure to adopt new technologies, impacting competitiveness.</li>
        <li> <b>Poor Infrastructure:</b> Unreliable power, transportation, and internet connectivity hinder operational efficiency, particularly in rural areas where many SMEs are based.</li>
        <li> <b>Limited Market Reach:</b> Expanding to new markets is challenging due to resource constraints for marketing and distribution.</li>
        <li> <b>Skilled Workforce:</b> Attracting and retaining talent is tough, especially in competition with larger firms, affecting operational capabilities.</li>
      </ul>
      <p class="mb-4">These challenges are well-documented in various studies, such as those from the Ministry of MSME, which note that over 99% of MSMEs are micro-sized, with 85% being Own Account Enterprises (OAEs) without outside labor, making operational improvements even more critical (SME development in India: Unlocking potential: Key strategies for accelerating SME development in India).</p>
     
      <h3 class="mb-2"> Benefits of Operational Excellence for SMEs </h3>
      <p class="mb-2"> Operational excellence offers several benefits that directly address these challenges: </p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li> <b>Improved Efficiency and Productivity:</b> Streamlined processes reduce waste, as seen in lean management practices, leading to cost savings and better resource utilization (Operational Excellence ⭐️ Definition & Best Practices Revealed ⭐️).</li>
        <li> <b>Enhanced Quality:</b> Incorporating quality checks into processes, as per Six Sigma, reduces defects and improves product/service quality, enhancing customer satisfaction (Operational Excellence: 10 Steps to Improve Your Business). </li>
        <li> <b>Better Customer Satisfaction:</b> Efficient operations lead to faster delivery and higher quality, boosting customer loyalty, which is vital for SMEs with limited market reach.</li>
        <li> <b>Increased Competitiveness:</b> By optimizing operations, SMEs can compete with larger firms, leveraging efficiency to offset scale disadvantages.</li>
        <li> <b>Higher Profitability:</b> Reduced costs and increased efficiency translate to higher profit margins, crucial for financial sustainability.</li>
        <li> <b>A Culture of Continuous Improvement: </b> Fosters innovation and adaptability, enabling SMEs to respond to market changes, as noted in discussions on operational excellence strategies (SMEs | Growing smarter with operational excellence - WeAreTheCity).</li>
      </ul>
      <p class="mb-4" > These benefits are particularly impactful for SMEs, as they often operate with tight budgets and need to maximize output, as discussed in various operational excellence guides (What Is Operational Excellence? | IBM). </p>

      <h3 class="mb-2"> Role of Consulting in Achieving Operational Excellence </h3>
      <p class="mb-2"> Given the complexity of implementing operational excellence, consulting is essential for SMEs. Operational excellence consulting involves experts providing tailored strategies, training, and support to implement best practices. Key reasons why SMEs need consulting include: </p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li> <b>Expertise and Experience:</b> Consultants bring industry-specific knowledge, such as lean management and Six Sigma, which SMEs may lack internally. Firms like Vedzen Consulting Group in India specialize in helping organizations achieve world-class status through operational excellence (Top Operational Excellence Consulting Company, India | Vedzen Consulting Group).</li>
        <li> <b>Customized Solutions:</b> Consultants assess the unique challenges of each SME, such as infrastructure issues, and design solutions that fit, ensuring relevance to the Indian context. </li>
        <li> <b>Training and Capacity Building:</b> They train employees to sustain improvements, fostering a culture of continuous improvement, which is crucial for long-term success.</li>
        <li> <b>Objective Assessment:</b> An external perspective helps identify inefficiencies and areas for improvement, which internal teams might overlook.</li>
        <li> <b>Risk Management:</b> Consultants assist in navigating regulatory compliance and minimizing operational risks, addressing a major challenge for Indian SMEs.</li>
      </ul>
      <p class="mb-4" > The need for consulting is underscored by the fact that SMEs often lack the bandwidth to implement complex methodologies, as noted in discussions on operational excellence consulting services (Operational Excellence Consulting | BCG). </p>

      <h3 class="mb-2"> Case Studies and Examples </h3>
      <p class="mb-2">While specific case studies for Indian SMEs are limited, larger Indian companies provide insights into the effectiveness of operational excellence. For instance: </p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li> <b>Tata Consultancy Services (TCS):</b> Known for its efficient IT services and continuous improvement initiatives, TCS has implemented operational excellence to maintain high customer satisfaction and profitability (12 Indian firms in Forbes' 50 best companies in Asia-Pacific - Rediff.com Business).</li>
        <li> <b>Mahindra & Mahindra:</b> Has adopted lean manufacturing and Six Sigma, improving quality and reducing costs, demonstrating applicability in the Indian manufacturing sector. </li>
      </ul>
      <p class="mb-4" > These examples suggest that operational excellence can be adapted for SMEs, with consulting providing the necessary framework. Additionally, global case studies, such as those from the Business Transformation & Operational Excellence Awards, show SMEs benefiting from consulting in similar contexts, which can be inferred for India (Operational Excellence Examples - Award Winning Case Studies). </p>

      <h3 class="mb-2"> Cultural and Regulatory Adaptation: An Unexpected Benefit </h3>
      <p class="mb-4" > An unexpected detail is how consultants help SMEs adapt operational excellence to India’s diverse cultural and regulatory landscape. This includes tailoring strategies to local market needs, addressing cultural differences in workforce management, and ensuring compliance with India-specific regulations, which can be particularly complex for smaller businesses (What is Operational Excellence? - Definition, Implementation & Benefits). </p>

      <h3 class="mb-2"> Conclusion and Recommendations </h3>
      <p class="mb-4" > In conclusion, operational excellence is vital for Indian SMEs to overcome operational challenges and achieve sustainable growth. Consulting services provide the expertise and support needed to implement these strategies effectively, addressing issues like finance, compliance, and technology adoption. SMEs are encouraged to consider partnering with operational excellence consultants to unlock their full potential, ensuring they remain competitive in a rapidly evolving market. </p>

      <h3 class="mb-2"> Table: Summary of Operational Challenges and Benefits for Indian SMEs </h3>
      
      <table class="mb-2 table-fixed border-collapse border-4 border-gray-600 ">
      <thead>
        <tr>
          <th class="border-4 border-gray-700 px-2 py-1">Operational Challenge</th>
          <th class="border-4 border-gray-700 px-2 py-1">How Operational Excellence Helps</th>
          <th class="border-4 border-gray-700 px-2 py-1">Role of Consulting</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-2 border-gray-700 px-2 py-1">Access to Finance</td>
          <td class="border-2 border-gray-700 px-2 py-1">Improves efficiency, making SMEs more attractive to lenders</td>
          <td class="border-2 border-gray-700 px-2 py-1">Designs financial process optimizations</td>
        </tr>
        <tr>
          <td class="border-2 border-gray-700 px-2 py-1">Regulatory Compliance</td>
          <td class="border-2 border-gray-700 px-2 py-1">Ensures compliance through best practices</td>
          <td class="border-2 border-gray-700 px-2 py-1">Navigates complex regulations</td>
        </tr>
        <tr>
          <td class="border-2 border-gray-700 px-2 py-1">Technological Adoption</td>
          <td class="border-2 border-gray-700 px-2 py-1">Facilitates technology integration for productivity</td>
          <td class="border-2 border-gray-700 px-2 py-1">Provides tech implementation strategies</td>
        </tr>
        <tr>
          <td class="border-2 border-gray-700 px-2 py-1"> Poor Infrastructure </td>
          <td class="border-2 border-gray-700 px-2 py-1"> Optimizes supply chain to mitigate infrastructure issues </td>
          <td class="border-2 border-gray-700 px-2 py-1"> Advises on logistics and </td>
        </tr>
        <tr>
          <td class="border-2 border-gray-700 px-2 py-1"> Limited Market Reach </td>
          <td class="border-2 border-gray-700 px-2 py-1"> Enhances quality and efficiency for market expansion </td>
          <td class="border-2 border-gray-700 px-2 py-1"> Develops marketing and distribution plans </td>
        </tr>
        <tr>
          <td class="border-2 border-gray-700 px-2 py-1"> Skilled Workforce </td>
          <td class="border-2 border-gray-700 px-2 py-1"> Improves HR processes to attract talent </td>
          <td class="border-2 border-gray-700 px-2 py-1"> Trains employees for continuous improvement </td>
        </tr>
      </tbody>
      </table>

      <p class=mb-4> This table summarizes the alignment between challenges, benefits, and the role of consulting, providing a clear roadmap for SMEs. </p>

    `
  },
  
  {
    id: 'revenue',
    title: 'Revenue Growth',
    img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
    shortDescription: 'Expand market share, increase sales, and drive sustainable revenue growth strategies.',
    content: `
    <h2> Introduction to Revenue Growth for Indian SMEs </h2>
    <p class="mb-4"> Revenue growth is the increase in a company's sales over time, vital for expanding market share, investing in new products, and remaining competitive. For Small and Medium-sized Enterprises (SMEs) in India, achieving this growth is essential but challenging due to limited resources and expertise.</p>
    
    <h2> Challenges Faced by Indian SMEs </h2>
    
    <h3 class="mb-2"> Challenges Faced by Indian SMEs </h3>
    <p class="mb-2"> Indian SMEs often struggle with: </p>
    <ul class="list-disc pl-5 mb-4 space-y-1">
      <li> <b>Limited Access to Capital:</b> Difficulty securing financing restricts growth investments.</li>
      <li> <b>Talent Acquisition and Retention:</b> Finding skilled employees is tough in a competitive market.</li>
      <li> <b>Market Access:</b> Expanding into new markets requires strategic planning, which can be resource-intensive.</li>
      <li> <b>Technological Challenges:</b>Adopting new technologies is costly and complex for smaller businesses.</li>
      <li> <b>Regulatory Compliance:</b> Navigating regulations can be time-consuming and expensive.</li>
    </ul>
   
    <h2 class="mb-2"> Role of Consulting in Driving Revenue Growth </h2>
    <p class="mb-2"> Consulting firms provide expertise in areas like marketing, sales, and finance, helping SMEs overcome these challenges. They assist in: </p>
    <ul class="list-disc pl-5 mb-4 space-y-1">
      <li> <b>Improved Efficiency and Productivity:</b> Developing growth strategies, including market research and competitive analysis.</li>
      <li> <b>Enhanced Quality:</b> Improving sales and marketing through digital tools and campaigns. </li>
      <li> <b>Better Customer Satisfaction:</b> Facilitating technology adoption to streamline operations and enhance customer engagement.</li>
      <li> <b>Increased Competitiveness:</b> Ensuring compliance to prevent legal issues that could hinder growth.</li>
    </ul>

    <h2 class="mb-2"> Benefits and Statistics</h2>
    <p class="mb-2"> Studies show businesses with consultants experience 20-30% higher revenue growth compared to those without support. Only 15% of Indian SMEs use consulting services, indicating a significant opportunity for growth. </p>
    <h2 class="mb-2"> Survey Note: Detailed Analysis of Revenue Growth Consulting for Indian SMEs </h2>
    <h3 class="mb-2"> Overview of Revenue Growth </h3>
    <p class="mb-2"> Revenue growth is defined as the increase in a company's sales over a specific period, reflecting its ability to generate more income from its products or services. For SMEs, it's crucial for expanding market share, investing in new products or services, hiring more staff, attracting investors, and remaining competitive in the market. In India, where SMEs contribute significantly to the economy—accounting for 30% of GDP and over 110 million jobs, as per What is MSME and Its Impact on Indian Economy—revenue growth is a key driver of economic development and sustainability.
    The concept of revenue growth has been studied extensively, with frameworks like the Ansoff Matrix and BCG Growth-Share Matrix often used to guide strategies. For SMEs, revenue growth involves increasing sales through new markets, product diversification, or enhanced marketing efforts, which can be particularly challenging given their limited resources. </p>
    
    <h3 class="mb-2"> Challenges Faced by Indian SMEs </h3>
    <p class="mb-2"> Indian SMEs face several operational and strategic hurdles that hinder revenue growth: </p>

    <ul class="list-disc pl-5 mb-4 space-y-1">
      <li> <b>Access to Finance:</b> Only 16% of SMEs receive timely finance, forcing reliance on internal resources, as highlighted in Challenges faced by the MSME sector in India | 5paisa. This limits growth and operational scalability.</li>
      <li> <b>Regulatory and Compliance Issues:</b>Complex tax laws and labor regulations pose significant burdens, often leading to high compliance costs and business closures. </li>
      <li> <b>Technological Challenges:</b> Keeping up with digital transformation is difficult, with many SMEs lacking the infrastructure to adopt new technologies, impacting competitiveness, as noted in IT adoption among SMEs can drive revenue growth, job creation: BCG.</li>
      <li> <b>Limited Market Reach:</b> Expanding to new markets is challenging due to resource constraints for marketing and distribution.</li>
      <li> <b>Skilled Workforce:</b> Attracting and retaining talent is tough, especially in competition with larger firms, affecting operational capabilities.</li>
    </ul>
    <p class="mb-4" > These challenges are well-documented in various studies, such as those from the Ministry of MSME, which note that over 99% of MSMEs are micro-sized, with 85% being Own Account Enterprises (OAEs) without outside labor, making revenue growth even more critical (SME development in India: Unlocking potential: Key strategies for accelerating SME development in India).</p>

    <h3 class="mb-2"> Benefits of Revenue Growth for SMEs </h3>
    <p class="mb-2">Revenue growth offers several benefits that directly address these challenges: </p>
    <ul class="list-disc pl-5 mb-4 space-y-1">
      <li> <b>Increased Market Share:</b> Higher sales allow SMEs to capture more market share, enhancing their competitive position.</li>
      <li> <b>Investment in Innovation:</b> Additional revenue can fund new product development or service enhancements, fostering innovation.</li>
      <li> <b>Better Financing Opportunities:</b> Higher revenue improves creditworthiness, making it easier to secure loans or attract investors.</li>
      <li> <b>Job Creation:</b> Increased sales often lead to hiring, contributing to employment and economic growth.</li>
      <li> <b>Sustainability and Scalability:</b> Revenue growth ensures long-term sustainability, enabling SMEs to scale operations and compete with larger firms.</li>
    </ul>
    <p class="mb-4" > These benefits are particularly impactful for SMEs, as they often operate with tight budgets and need to maximize output, as discussed in various business growth guides (Operational Excellence: 10 Steps to Improve Your Business).</p>

    <h3 class="mb-2"> Role of Consulting in Achieving Revenue Growth</h3>
    <p class="mb-4" > Given the complexity of driving revenue growth, consulting is essential for SMEs. Revenue growth consulting involves experts providing tailored strategies, training, and support to implement best practices. Key reasons why SMEs need consulting include: </p>

    <ul class="list-disc pl-5 mb-4 space-y-1">
      <li> <b>Expertise and Experience:</b> Consultants bring industry-specific knowledge, such as marketing strategies and sales optimization, which SMEs may lack internally. Firms like SolutionBuggy in India specialize in helping SMEs with business development and market expansion (SME Consulting – India’s Largest Consulting Platform).</li>
      <li> <b>Customized Solutions:</b> Consultants assess the unique challenges of each SME, such as market access issues, and design solutions that fit, ensuring relevance to the Indian context.</li>
      <li> <b>Training and Capacity Building:</b> They train employees to sustain growth initiatives, fostering a culture of continuous improvement, which is crucial for long-term success.</li>
      <li> <b>Objective Assessment:</b> An external perspective helps identify revenue growth opportunities and areas for improvement, which internal teams might overlook.</li>
      <li> <b>Risk Management:</b> Consultants assist in navigating regulatory compliance and minimizing financial risks, addressing a major challenge for Indian SMEs.</li>
    </ul>

    <p class="mb-4" > The need for consulting is underscored by the fact that SMEs often lack the bandwidth to implement complex growth strategies, as noted in discussions on management consulting services (Management Consulting for SMEs - Wadhwani Foundation).</p>

    <h3 class="mb-2"> Case Studies and Examples</h3>
    <p class="mb-4" > While specific case studies for Indian SMEs are limited, larger Indian companies provide insights into the effectiveness of consulting for revenue growth. For instance: </p>

    <ul class="list-disc pl-5 mb-4 space-y-1">
      <li> <b>Bharat Forge:</b> A Pune-based SME that expanded globally, supplying automotive components worldwide, likely benefited from consulting in market expansion and strategic planning (Small Business Success Stories: Lessons from Seasoned Entrepreneurs - SMEVENTURE).</li>
      <li> <b>Merhaki Foods and Nutrition:</b> Through the brand ‘&ME’, this Bengaluru-based SME blended Ayurveda and modern science to target lifestyle challenges, potentially leveraging consulting for marketing and product development (Thinking of starting up? Read these top inspiring stories of MSMEs here | YourStory).</li>
    </ul>

    <p class="mb-4" > These examples suggest that consulting can be adapted for SMEs, with potential impacts on revenue growth through strategic guidance. Additionally, global case studies, such as those from the Business Transformation & Operational Excellence Awards, show SMEs benefiting from consulting in similar contexts, which can be inferred for India (Operational Excellence Examples - Award Winning Case Studies).</p>

    <h3 class="mb-2"> Cultural and Regulatory Adaptation: An Unexpected Benefit</h3>
    <p class="mb-4" > An unexpected detail is how consultants help SMEs adapt revenue growth strategies to India’s diverse cultural and regulatory landscape. This includes tailoring marketing campaigns to local preferences, addressing cultural differences in workforce management, and ensuring compliance with India-specific regulations, which can be particularly complex for smaller businesses (What is Operational Excellence? - Definition, Implementation & Benefits).</p>

    <h3 class="mb-2"> Conclusion and Recommendations</h3>
    <p class="mb-4" > In conclusion, revenue growth is vital for Indian SMEs to overcome operational challenges and achieve sustainable growth. Consulting services provide the expertise and support needed to implement these strategies effectively, addressing issues like finance, compliance, and technology adoption. SMEs are encouraged to consider partnering with revenue growth consultants to unlock their full potential, ensuring they remain competitive in a rapidly evolving market.</p>

    <h3 class="mb-2"> Table: Summary of Revenue Growth Challenges and Benefits for Indian SMEs</h3>
    <table class="mb-2 table-fixed border-collapse border-4 border-gray-600 ">
    <thead>
      <tr>
        <th class="border-4 border-gray-700 px-2 py-1">Revenue Growth Challenge</th>
        <th class="border-4 border-gray-700 px-2 py-1">How Consulting Helps</th>
        <th class="border-4 border-gray-700 px-2 py-1">Role of Consulting</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-2 border-gray-700 px-2 py-1">Access to Finance</td>
        <td class="border-2 border-gray-700 px-2 py-1">Improves creditworthiness and secures funding</td>
        <td class="border-2 border-gray-700 px-2 py-1">Designs financial strategies and pitches</td>
      </tr>
      <tr>
        <td class="border-2 border-gray-700 px-2 py-1">Regulatory Compliance</td>
        <td class="border-2 border-gray-700 px-2 py-1">Ensures compliance to prevent legal issues</td>
        <td class="border-2 border-gray-700 px-2 py-1">Navigates complex regulations</td>
      </tr>
      <tr>
        <td class="border-2 border-gray-700 px-2 py-1">Technological Adoption</td>
        <td class="border-2 border-gray-700 px-2 py-1">Facilitates technology for sales and marketing</td>
        <td class="border-2 border-gray-700 px-2 py-1">Provides tech implementation strategies</td>
      </tr>
      <tr>
        <td class="border-2 border-gray-700 px-2 py-1"> Limited Market Reach </td>
        <td class="border-2 border-gray-700 px-2 py-1"> Identifies new markets and expands reach</td>
        <td class="border-2 border-gray-700 px-2 py-1"> Develops marketing and distribution plans </td>
      </tr>
      <tr>
        <td class="border-2 border-gray-700 px-2 py-1"> Skilled Workforce </td>
        <td class="border-2 border-gray-700 px-2 py-1"> Improves HR processes to attract talent </td>
        <td class="border-2 border-gray-700 px-2 py-1"> Trains employees for sales and growth </td>
      </tr>
    </tbody>
    </table>

    <p class=mb-4> This table summarizes the alignment between challenges, benefits, and the role of consulting, providing a clear roadmap for SMEs. </p>

  `
  },
  {
    id: 'market',
    title: 'Market Expansion',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    shortDescription: 'Enter new markets, reach new customers, and expand your business footprint successfully.',
    content: `
      <p class="mb-4">Market expansion is about reaching new customers ...</p>
      <p class="mb-4">Our market expansion consulting helps with:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Increased Market Share ...</li>
        <li>Revenue Growth ...</li>
        <li>Diversification ...</li>
        <li>Brand Recognition ...</li>
        <li>Localization ...</li>
        <li>Risk Management ...</li>
      </ul>
      <p>Our consultants bring tailored strategies ...</p>
    `
  }
];

const Offerings = () => {
  const [activeModal, setActiveModal] = useState<null | typeof offerings[0]>(null);

  return (
    <section id="offerings" className="section-padding">
      <div className="container mx-auto px-4">
        <SmoothFadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-text text-advizo-blue">Our Services</h2>
          <p className="subheading-text">
            Comprehensive consulting solutions tailored for the unique needs of MSMEs in India
          </p>
        </div>
        </SmoothFadeIn>
        <SmoothFadeIn delay={160}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-8 mt-12">
          {offerings.map((offering, idx) => (
            <SmoothFadeIn key={offering.id} delay={120*idx}>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:ring-4 hover:ring-advizo-blue/20 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label={`View service: ${offering.title}`}
              onClick={() => setActiveModal(offering)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveModal(offering);
                }
              }}
            >
              <img
                src={offering.img}
                alt={offering.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-advizo-purple mb-1">{offering.title}</h3>
                <p className="text-gray-700">{offering.shortDescription}</p>
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
          image={activeModal.img}
          alt={activeModal.title}
          className="w-[70vw] h-[70vh] max-w-[900px] max-h-[700px] flex flex-row"
        >
          <div
            className="prose max-w-none text-gray-700 overflow-y-auto pr-4"
            style={{ maxHeight: '100%' }}
            dangerouslySetInnerHTML={{ __html: activeModal.content }}
          />
        </Modal>
      )}
    </section>
  );
};

export default Offerings;
