// src/app/faq/page.tsx
import React from 'react'; // Import React for JSX

// Define interfaces for better type safety
interface FaqItem {
  question: string;
  answer: string[]; // Explicitly type answer as an array of strings
}

export default function FaqPage() {
  // FAQ data directly from the document
  const faqData: FaqItem[] = [
    {
      question: "How do you balance equity between early post-labor workers (white collar) and those still working (blue collar) during the transition?",
      answer: [
        "The GCIN addresses these transition dynamics through several mechanisms:",
        "**Phased Transition:** We acknowledge the transition won't be uniform; initial automation might impact knowledge work first, creating temporary imbalances that our approach addresses.",
        "**Universal Basic Resources (UBR):** Instead of only currency, we focus on ensuring universal access to basic needs (housing, food, healthcare, education).",
        "**Contribution Recognition:** Additional benefits are tied to contributions to collective well-being, regardless of traditional labor vs. other value creation.",
        "**Value-Based Recognition:** Compensation shifts towards value created, allowing equitable recognition across different work types.",
        "**No 'Double Dipping' Issue:** During transition, those in traditional employment receive both UBR and labor compensation – appropriate recognition for continued contribution.",
        "**Status & Identity Management:** We explicitly address psychological/social aspects via programs for redefining purpose, community integration valuing diverse contributions, cultural narrative shifts, and educational discovery.",
        "**Practical Implementation:** Local pilots test models, gradual implementation allows cultural adaptation, feedback mechanisms address inequities, and transparent metrics track well-being.",
        "This holistic approach manages material needs and status concerns, aiming for social cohesion during a potentially divisive transition."
      ]
    },
    {
      question: "What incentive does the 'donor class' have to fund a system that might jeopardize their status?",
      answer: [
        "GCIN addresses this by appealing to various donor motivations:",
        "**Enlightened Self-Interest:** Recognizing that extreme inequality leads to social instability threatening everyone; opportunity for legacy creation as architects of a better system; mitigating risks of chaotic disruption.",
        "**Tiered Participation:** Opportunities for roles like 'Innovation Investors', 'Transition Architects', and 'Impact Pioneers', offering status within new frameworks.",
        "**Concrete Incentives:** Mechanisms like Impact NFTs (tokenized recognition), potential benefits from Prediction Markets, meaningful governance participation, and first-mover advantages.",
        "**Status Transformation:** Shifting status from wealth accumulation towards contribution to collective well-being and system stewardship.",
        "**Strategic Alignment:** Positioning GCIN within philanthropic evolution, appealing to tech leaders concerned about AI's impact, integrating with ESG goals, and engaging next-gen wealth holders seeking impact.",
        "**Strategic Communication:** Emphasizing opportunity, evolution (not revolution), the unsustainability of current paths, and dialogue.",
        "This strategy aims to secure initial funding by aligning with forward-thinking members of the current economic elite while building a model that eventually scales beyond traditional philanthropy."
      ]
    },
    {
        question: "Isn't focusing on Climate Action too complex for an initial pilot?",
        answer: [
            "While complex, the climate focus is strategic:",
            "**Multiple Parallel Pilots:** Climate is the flagship but runs alongside Food Systems and Education Resources, diversifying paths to success.",
            "**Scoped Interventions:** We focus on specific, achievable climate actions like coordinating renewable energy deployment, improving information sharing, and creating visualization tools, rather than tackling the entire problem at once.",
            "**Tiered Success Metrics:** We measure success in stages: short-term (improved coordination), medium-term (accelerated deployment), and long-term (measurable climate impact).",
            "**Why Climate?:** Its urgency demands action, significant momentum/funding already exists, it connects naturally to other domains (energy, food, health), and it offers rich visualization potential.",
            "**Value Delivery:** Our approach delivers immediate value (coordination), medium-term value (deployment), and builds capability for long-term transformation, starting now.",
            "**Risk Mitigation:** Clear stage-based success definitions, multiple pilots prevent over-reliance on climate outcomes, and focus on achievable process improvements."
      ]
    },
    {
        question: "What are the key 'quick wins' or focuses for the Minimum Viable Product (MVP)?",
        answer: [
            "Our MVP focuses on balancing demonstrable impact with building foundational infrastructure:",
            "**Priority Quick Wins Include:**",
            "- A Climate Action Coordination Dashboard visualizing renewable energy efforts.",
            "- Community Resource Mapping tools for efficient local allocation.",
            "- A Collective Decision-Making Platform demonstrating novel governance (like quadratic voting).",
            "- An Impact Verification System (laying groundwork for Impact NFTs).",
            "- An initial Knowledge Graph Visualization of interconnected challenges.",
            "**Selection Criteria:** We prioritize visibility, timeliness (addressing urgent needs), demonstrability (measurable results in 6-12 months), scalability, and foundation-building.",
            "**Most Promising Focus:** Combining the Climate Action Coordination Dashboard with the Impact Verification System addresses an urgent need (renewable deployment) while showcasing GCIN's coordination capabilities and innovative economic mechanisms, generating broad stakeholder excitement."
      ]
    },
    {
        question: "How does the AI remain aligned with evolving human values?",
        answer: [
            "GCIN uses multiple reinforcing mechanisms for dynamic AI alignment:",
            "**Dynamic Value Learning:** Continuous elicitation of values from stakeholders, structured deliberation processes, tracking cultural value shifts, and explicit conflict resolution.",
            "**Technical Implementation:** 'Constitutional AI+' with dynamic constitutions, multi-level alignment (individual, community, global), interpretability tools, value drift detection, and human corrective feedback loops.",
            "**Governance Structures:** AI Auditor roles, diverse oversight boards, graduated AI autonomy based on alignment confidence, regular alignment audits, and stakeholder appeal processes.",
            "**Cultural Integration:** Value literacy programs, cross-cultural dialogue, intergenerational value considerations, and value-sensitive design processes.",
            "**Practical Safeguards:** 'Value Sandboxes' for testing, reversibility mechanisms, diversity in AI implementations, human-in-the-loop requirements for critical decisions, and alignment red teams.",
            "This comprehensive approach combines technical and social innovations to create AI systems that can co-evolve with humanity's understanding of its values."
      ]
    },
    {
        question: "How can the DAO structure resist geopolitical pressures and regulations?",
        answer: [
            "GCIN builds resilience through multiple layers:",
            "**Legal Structure:** Swiss Association foundation provides international standing, potential for jurisdictional diversity, legal shields, regulatory sandbox agreements, and pursuit of international organization status.",
            "**Technical Resilience:** Distributed infrastructure (no single failure point), jurisdiction-adaptive interfaces, censorship-resistant communication, data sovereignty solutions, and graceful degradation under pressure.",
            "**Governance Adaptability:** Continuous regulatory monitoring, adaptable governance mechanisms, diplomatic engagement with regulators, compliance-by-design, and regulatory diversity among participants.",
            "**Strategic Positioning:** Framing as essential public good infrastructure, multi-stakeholder governance for broad support, transparency commitments, explicit value alignment, and demonstrating positive impact.",
            "**Implementation:** Phased decentralization, proactive regulatory engagement strategy, geopolitical balancing, crisis response protocols, and continuous legitimacy building.",
            "This multi-layered strategy provides flexibility to navigate complex geopolitical environments while maintaining the core mission."
      ]
    },
    {
        question: "What safeguards prevent hacking or co-option of the system?",
        answer: [
            "GCIN implements comprehensive technical and governance safeguards:",
            "**Technical Security:** Zero-trust model, defense-in-depth, formal verification of critical components, secure multi-party computation, threshold cryptography, quantum resistance planning, secure enclaves.",
            "**Distributed Design:** Byzantine fault tolerance, consensus diversity, heterogeneous implementations, redundant validation, gossip protocols for inconsistency detection, proof-of-personhood mechanisms.",
            "**Governance Safeguards:** Multi-signature requirements for critical actions, time-locked governance changes, Quadratic Voting (resists plutocracy), Conviction Voting (rewards commitment), Futarchy elements (prediction markets), and Governance Sandboxes for safe testing.",
            "**Transparency & Oversight:** Open-source core code, mandatory formal audits, transparent operations (verifiable logs), strong whistleblower protections, regular Red Team exercises, and bug bounty programs.",
            "**Resilience:** Graceful degradation, automatic circuit breakers for anomalies, clear recovery protocols, secure backups, adversarial simulations, and continuous monitoring.",
            "This overlapping approach addresses security at multiple levels against both technical attacks and governance corruption."
      ]
    },
    {
        question: "How does the DAO balance expert guidance with community participation for effective coordination?",
        answer: [
            "GCIN uses a nested governance framework with multiple mechanisms:",
            "**Nested Structure:** Clear sovereignty boundaries for Local, Domain (expert-led), Coordination, and Guardian (constitutional) Circles.",
            "**Participation Mechanisms:** Graduated involvement levels, contribution-based authority (not just financial stake), liquid/delegative democracy options, and Quadratic Voting.",
            "**Expert Integration:** Merit-based reputation systems, knowledge validation processes, defined expert advisory roles, requirements for diverse expertise (including lived experience), and knowledge translation tools.",
            "**Coordination Tools:** Shared mental models via visualization, dependency mapping, alignment metrics, transparent decision journals, and regular coordination rituals.",
            "**Adaptive Governance:** Governance experiments in sandboxes, regular effectiveness reviews, clear evolution pathways, meta-governance (governing the governance), and governance analytics.",
            "This balanced structure leverages both specialized expertise and broad participation for effective, decentralized coordination."
      ]
    },
    {
        question: "How is the system economically viable without traditional profit motives?",
        answer: [
            "GCIN uses innovative economic mechanisms focused on value circulation:",
            "**Value Model:** Circular design, commons-based resource management, regenerative economics (restoring resources), stakeholder value (not just shareholder), long-term value accounting.",
            "**Alternative Incentives:** Impact Certificates/NFTs (tokenized impact), reputation systems (non-financial status), purpose fulfillment (intrinsic motivation), community recognition, capability expansion.",
            "**Resource Allocation:** Quadratic Funding (community-driven matching), Conviction Voting (sustained support), Retroactive Public Goods Funding (rewarding past value), needs-based allocation for basics, abundance-based sharing.",
            "**Sustainable Funding:** Philanthropic endowments, public partnerships, community patronage, modest service fees (while maintaining core access), ethical data commons monetization.",
            "**Transition Strategy:** Hybrid models initially, demonstrating value to secure traditional funding, capturing efficiency gains, building network effects, and gradually decoupling from traditional economics.",
            "This model aims for viability aligned with human flourishing and planetary health, rather than profit maximization."
      ]
    },
     {
        question: "How do you measure success across diverse economic, social, and environmental goals?",
        answer: [
            "GCIN employs a comprehensive, multi-dimensional impact measurement framework:",
            "**Integrated Framework:** Tracks multiple forms of capital (financial, social, natural, human, built), direct wellbeing metrics, planetary boundary impacts, justice/equity measures, and resilience indicators.",
            "**Measurement Governance:** Participatory metric development, transparent methodologies, independent verification, continuous refinement, and incorporating diverse perspectives on success.",
            "**Technical Implementation:** Real-time dashboards, impact attribution modeling, uncertainty quantification, counterfactual analysis, and AI-enhanced insight generation.",
            "**Domain-Specific Metrics:** Tailored metrics for climate (e.g., carbon reduction), economy (e.g., distribution), social (e.g., trust), governance (e.g., decision quality), and knowledge (e.g., innovation rates).",
            "**Practical Application:** Impact learning cycles for improvement, tiered metrics for different scales, narrative integration (qualitative + quantitative), comparative benchmarking, and public accessibility.",
            "**Evolution:** Success criteria evolve via developmental evaluation, attention to emergent outcomes, stakeholder feedback, adaptive targets, and meta-evaluation (evaluating the evaluation system).",
             "This adaptive system tracks progress towards complex goals beyond traditional metrics."
      ]
    },
     {
        question: "How do you ensure inclusivity for marginalized groups or those without digital access?",
        answer: [
            "GCIN implements a multi-pronged strategy for genuine inclusivity:",
            "**Access Infrastructure:** Offline interfaces, low-bandwidth options, appropriate technology design (e.g., feature phones), community access hubs with support, and community-owned mesh networks.",
            "**Capability Building:** Graduated participation pathways (multiple entry points), peer learning networks, contextual training materials, voice/visual interfaces (reducing text dependency), and 'cultural translator' support roles.",
            "**Representation & Power:** Guaranteed representation quotas in governance, explicit power analysis in design, compensated participation for resource-constrained groups, deliberate outreach to underrepresented communities, and equity metrics tracking.",
            "**Cultural Inclusivity:** Multilingual design, cultural adaptation of interfaces/processes, integration of indigenous knowledge, respecting diverse epistemologies, and cultural safety practices.",
            "**Structural Inclusion:** Inclusive design methodologies centered on marginalized users, comprehensive accessibility standards (WCAG), proxy participation options, flexible timing, and practical support (e.g., childcare).",
            "**Implementation:** Inclusivity is foundational ('Inclusion From Day One'), co-design with marginalized communities, regular inclusion audits, prioritizing feedback from marginalized users, and continuous improvement.",
            "This comprehensive approach aims to overcome multiple barriers simultaneously."
      ]
    },
     {
        question: "How will GCIN interact with existing governments and power structures?",
        answer: [
            "GCIN adopts a strategic and adaptable approach:",
            "**Strategic Positioning:** Acting as complementary (enhancing existing structures), filling gaps where governance is weak, providing public goods, acting as a coordination platform, and serving as an innovation lab.",
            "**Engagement Models:** Tiered partnerships, strategic co-option (selective integration where values align), constructive tension (independent but engaged dialogue), collaborative demonstration projects, and knowledge exchange.",
            "**Specific Strategies:** Navigating regulations proactively, strategic policy advocacy, public-civic partnerships, respecting subsidiarity, reinforcing democratic processes, setting ethical standards for corporate engagement, seeking observer status in international forums, implementation partnerships with agencies.",
            "**Transition Strategy:** Parallel development (building alternatives while engaging), strategic autonomy (maintaining core independence), identifying leverage points, narrative bridging (connecting traditional/emerging governance), and resilience planning for various responses.",
            "The goal is strategic engagement for system evolution, not direct confrontation or complete absorption, adapting based on context."
      ]
    },
     {
        question: "What is a realistic timeline for GCIN to achieve meaningful impact?",
        answer: [
            "GCIN uses a flexible, milestone-based framework rather than fixed dates, recognizing that transformative change takes time but requires urgency:",
            "**Phase 0: Foundation (Years 0-1 - Completed):** Established legal/governance structure, core team, technical architecture, seed funding.",
            "**Phase 1: Initial Implementation (Years 1-3 - Current):** Launching climate, food, education pilots; building core platform/AI/visualization; testing governance; demonstrating initial value.",
            "**Phase 2: Expansion (Years 3-7):** Scaling successful pilots; adding new domains; expanding geographically; increasing decentralization; implementing token economics; deploying advanced tools.",
            "**Phase 3: Maturity & Transformation (Years 7-15):** Achieving global scale; full DAO governance; comprehensive token economics; demonstrable systemic impact; self-evolving architecture.",
            "**Progress Indicators:** We track technical (performance, security), social (participation, community health), impact (domain outcomes, systemic change), and governance (effectiveness, legitimacy) metrics across phases.",
            "**Adaptation:** The timeline includes 'Acceleration Triggers' and regular reassessment points, allowing flexibility to respond to challenges and opportunities."
      ]
    }
  ];

  /**
   * Helper function to format FAQ answer points.
   * Handles bolding subheadings and list items correctly.
   */
  const formatAnswerPoint = (point: string | null | undefined, pointIndex: number): React.ReactNode => {
    // Added check for null/undefined/empty string to prevent errors
    if (!point) {
      return null; // Return null if point is empty/null/undefined
    }

    const pointStr = String(point); // Ensure it's a string
    const colonIndex = pointStr.indexOf(':');

    // Handle **Subheading:** Body format
    if (pointStr.startsWith('**') && colonIndex > -1) {
      const subhead = pointStr.substring(2, colonIndex).trim();
      let body = pointStr.substring(colonIndex + 1).trim();
      // Remove leading/trailing ** from body
      if (body.startsWith('**')) { body = body.substring(2).trim(); }
      if (body.endsWith('**')) { body = body.substring(0, body.length - 2).trim(); }
      return (
        <p key={pointIndex}>
          <span className="font-semibold">{subhead}:</span> {body}
        </p>
      );
    }
    // Handle **Bold Heading Only** format (like Why Climate?)
    else if (pointStr.startsWith('**')) {
       let boldText = pointStr.substring(2).trim();
       // Remove potential trailing **
       if (boldText.endsWith('**')) {
           boldText = boldText.substring(0, boldText.length - 2).trim();
       }
       return <p key={pointIndex} className="font-semibold">{boldText}</p>;
    }
    // Handle simple list items starting with '-'
    else if (pointStr.startsWith('- ')) {
      return <li key={pointIndex} className="ml-4 list-item">{pointStr.substring(2)}</li>;
    }
    // Handle regular paragraph
    else {
      return <p key={pointIndex}>{pointStr}</p>;
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 bg-[#F5F7FA]">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-lg">

        <h1 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-[#1A5F7A] mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <details key={index} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 list-none">
                <h2 className="text-lg font-semibold font-['Montserrat'] text-[#1A5F7A]">
                  {item.question}
                </h2>
                <span className="ml-4 transition-transform duration-200 group-open:rotate-180 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A5F7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 border-t border-gray-200 bg-white">
                {/* Use the helper function to render formatted answer points */}
                {/* Added check for item.answer existence */}
                <div className="space-y-3 text-[#4A4A4A] font-['Open_Sans']">
                   {item.answer?.map(formatAnswerPoint) ?? <p>No answer available.</p>}
                </div>
              </div>
            </details>
          ))}
        </div>

      </div>
    </main>
  );
}
