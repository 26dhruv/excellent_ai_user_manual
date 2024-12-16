document.addEventListener("DOMContentLoaded", () => {
  const data = {
    0: {
      section: "branding",
      component_id: 3,
      component_name: "7P's marketing mix",
      description:
        "The 7P's Marketing Mix empowers businesses to craft a holistic strategy by integrating Product, Price, Place, Promotion, People, Process, and Physical Evidence, ensuring optimal customer engagement and business growth.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/7p_marketing_mix.png",
    },
    1: {
      section: "perfomance_marketing",
      component_id: 23,
      component_name: "Abandoned Cart",
      description:
        "Abandoned Cart is a strategic tool that re-engages online shoppers through reminder emails and discounts, boosting conversion rates by encouraging them to return and complete their purchase for enhanced customer experience and sales growth.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/abandoned_cart.png",
    },
    2: {
      section: "perfomance_marketing",
      component_id: 32,
      component_name: "Ad creator",
      description:
        "The AD Creator is a versatile tool that simplifies ad design, customization, and deployment across platforms, combining user-friendly interfaces, advanced targeting, and powerful analytics to maximize engagement and achieve marketing goals.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/ad_creator.png",
    },
    3: {
      section: "copywriting",
      component_id: 18,
      component_name: "Article writer",
      description:
        "The Article Writer combines the skills of outlining and crafting content, ensuring each section is logically structured, informative, and engaging, for coherent and compelling articles that meet editorial standards.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/article_writer.png",
    },
    4: {
      section: "branding",
      component_id: 33,
      component_name:
        "Audience, tone of voice, personality, colour palettes & font options",
      description:
        "This comprehensive branding toolkit refines your marketing strategy by identifying your audience, establishing a unique tone of voice, and selecting cohesive color palettes and font options, ensuring effective brand communication and stronger market connection.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/atpcpfo.png",
    },
    5: {
      section: "copywriting",
      component_id: 25,
      component_name: "Blog writer",
      description:
        "The Blog Writer crafts engaging and informative content, blending expertise and SEO strategies to drive traffic and enhance online presence, ultimately boosting a brand's content marketing success.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/blog_writer.png",
    },
    6: {
      section: "copywriting",
      component_id: 22,
      component_name: "Brochure",
      description:
        "The Brochure is a versatile marketing tool that combines engaging visuals and concise text to promote products, services, or events, effectively communicating brand value through both print and digital formats.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/brochure.png",
    },
    7: {
      section: "socialmedia",
      component_id: 43,
      component_name: "Buyers journey touchpoint",
      description:
        "Buyer's Journey Touchpoints is a powerful tool that maps and analyzes customer interactions throughout the purchase process, providing insights to optimize marketing strategies, enhance customer experiences, and drive business growth.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/buyer_journey.png",
    },
    8: {
      section: "essential",
      component_id: 36,
      component_name: "Campaign strategy & budget planning",
      description:
        "The Campaign Strategy and Budget Planning tool empowers businesses to craft year-round digital marketing strategies, leveraging daily insights, market trends, and consumer behavior for maximum ROI. Seamlessly integrating channels like SEO, social media, and PPC, it ensures continuous engagement, growth, and measurable success in the digital landscape.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/campaign_strategy_and_budget_planning.png",
    },
    9: {
      section: "customeroutreach",
      component_id: 31,
      component_name: "Cold marketing message",
      description:
        "Cold Marketing Messages combine email and WhatsApp strategies to engage potential customers with personalized, relevant content, introducing your brand and driving new leads with clear calls to action.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/cold_marketing.png",
    },
    10: {
      section: "copywriting",
      component_id: 28,
      component_name: "Content improver",
      description:
        "The Content Improver uses advanced rewriting tools to refine clarity, engagement, and structure, making texts more appealing, unique, and optimized for different audiences and platforms while preserving the original message's intent.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/content_improver.png",
    },
    11: {
      section: "branding",
      component_id: 13,
      component_name: "Corporate video Generator",
      description:
        "The Corporate Video Generator transforms business storytelling with AI-driven templates and customizable features, making it effortless to create professional-quality videos for impactful presentations, marketing, and internal communications.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/corporate_video_generator.png",
    },
    12: {
      section: "customeroutreach",
      component_id: 42,
      component_name: "Customer engagement Techniques",
      description:
        "The Customer Engagement Techniques tool offers innovative strategies to enhance interaction and satisfaction, fostering meaningful connections and loyalty through personalized communication and engaging content.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/customer_engagement_techniques.png",
    },
    13: {
      section: "perfomance_marketing",
      component_id: 41,
      component_name: "E-commerce product description",
      description:
        "E-Commerce Product Descriptions craft compelling, SEO-optimized write-ups that highlight product features, benefits, and unique selling points to drive online sales and enhance customer experience.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/ecommerce_product_description.png",
    },
    14: {
      section: "branding",
      component_id: 12,
      component_name: "Elevator Pitch",
      description:
        "Elevator Pitch is your go-to tool for crafting concise, impactful statements that capture your brand's essence and unique value proposition, ensuring your ideas stand out in any room.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/elevator_pitch.png",
    },
    15: {
      section: "socialmedia",
      component_id: 38,
      component_name: "Festival post generator",
      description:
        "The Festival Post Generator is a cutting-edge tool that effortlessly crafts engaging, culturally apt social media posts for festivals, complete with themed visuals and text, ensuring a vibrant online presence for every celebration.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/festival_post.png",
    },
    16: {
      section: "google",
      component_id: 8,
      component_name: "Fifty business update generator",
      description:
        "The Fifty Business Update Generator crafts an extensive list of fifty update topics based relevant keywords to elevate SEO and content marketing strategies, enhancing online visibility and search engine rankings by diversifying and targeting audience search queries.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/fifty_business_updates.png",
    },
    17: {
      section: "copywriting",
      component_id: 21,
      component_name: "Framework based copywriting",
      description:
        "Framework-based Copywriting uses structured templates and psychological insights to craft compelling marketing messages, ensuring consistency and effectiveness in driving action, conversions, and brand loyalty.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/framework_copywriting.png",
    },
    18: {
      section: "customeroutreach",
      component_id: 17,
      component_name: "Funnel agent",
      description:
        " Funnel Agent combines strategic email, LinkedIn, and WhatsApp automation to guide potential customers from initial contact to conversion with personalized communication, fostering engagement and building meaningful relationships for business growth.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/funnel_agent.png",
    },
    19: {
      section: "google",
      component_id: 40,
      component_name: "Google business optimiser",
      description:
        "Google Business Optimizer boosts your business's online presence by enhancing Google My Business listings, optimizing information, improving photo and post quality, and amplifying local search visibility to attract more customers and elevate engagement.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_business_optimizer.png",
    },
    20: {
      section: "google",
      component_id: 30,
      component_name: "Google FAQs and answer writer",
      description:
        "The Google FAQs and Answer Writer tool empowers businesses to craft clear, comprehensive FAQ sections that enhance user understanding and satisfaction, reducing support queries and streamlining customer service operations.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_faq.png",
    },
    21: {
      section: "google",
      component_id: 34,
      component_name: "Google review response writer",
      description:
        "The Google Review Response Writer crafts personalized and brand-aligned responses to customer reviews, enhancing reputation and showcasing commitment to customer service excellence.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_review_response.png",
    },
    22: {
      section: "google",
      component_id: 14,
      component_name: "Google review writing",
      description:
        "Google Review Writing crafts detailed reviews that enhance brand reputation, provide valuable feedback, and influence customer perceptions, building trust and credibility online.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_review.png",
    },
    23: {
      section: "google",
      component_id: 2,
      component_name: "Google search keyword generator",
      description:
        "The Google Search Keyword Generator uncovers essential keywords and phrases to boost website content and ad optimization, enhancing SEO and PPC strategies to attract targeted traffic and amplify online marketing success.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_search_keyword.png",
    },
    24: {
      section: "google",
      component_id: 39,
      component_name: "Google service product description",
      description:
        "The Google Service Product Description crafts detailed, SEO-optimized descriptions that enhance search visibility, effectively attracting targeted traffic by highlighting service features and benefits.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/google_product_description.png",
    },
    25: {
      section: "customeroutreach",
      component_id: 15,
      component_name: "Growth hacking ideas",
      description:
        "The Growth Hacking Ideas tool offers creative, customized strategies that leverage trends and innovative marketing techniques to boost brand visibility, engagement, and conversions, fostering rapid and sustainable growth with cost-effective methods",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/growth_hacking_ideas.png",
    },
    26: {
      section: "essential",
      component_id: 6,
      component_name: "Image caption",
      description:
        "Image Captions are concise, engaging texts that enrich social media visuals, drive audience interaction, and amplify the reach and impact of your posts.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/image_caption.png",
    },
    27: {
      section: "customeroutreach",
      component_id: 16,
      component_name: "Inexpensive direct sales ideas",
      description:
        "The Inexpensive Direct Sales Ideas tool provides budget-friendly strategies to boost sales efforts, enhance customer engagement, and maximize ROI with creative and impactful direct selling tactics",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/inexpensive_direct_sales.png",
    },
    28: {
      section: "customeroutreach",
      component_id: 20,
      component_name: "Innovative Ideas",
      description:
        "The Innovative Ideas tool generates creative, trend-setting concepts to enhance brand strategies, products, and services, helping businesses stay ahead with personalized solutions that engage and grow their audience.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/innovative_ideas.png",
    },
    29: {
      section: "linkedin",
      component_id: 27,
      component_name: "Linkedin commenting tool",
      description:
        "The LinkedIn Commenting Tool boosts your professional presence by guiding you to craft impactful and relevant comments, fostering meaningful interactions and establishing you as a thought leader in your industry.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/linkedin_comment.png",
    },
    30: {
      section: "linkedin",
      component_id: 35,
      component_name: "Linkedin posts",
      description:
        "LinkedIn Posts are strategically crafted to engage a professional network by showcasing expertise, sharing industry insights, and maintaining consistent brand presence, ultimately enhancing credibility and fostering meaningful professional relationships.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/linkedin.png",
    },
    31: {
      section: "linkedin",
      component_id: 37,
      component_name: "LinkedIn skill assessment tool",
      description:
        "The LinkedIn Skill Assessment Tool is an intelligent AI-driven assistant designed to accurately solve varied MCQ questions, enabling users to validate their expertise and showcase skills effectively on their LinkedIn profiles.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/linkedin_skill_assessment.png",
    },
    32: {
      section: "linkedin",
      component_id: 26,
      component_name: "LinkedIn's top voice helper",
      description:
        "LinkedIn Top Voice Helper boosts your influence by enhancing content and engagement strategies, offering personalized, data-driven insights to maximize your impact and reach as an industry leader.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/linkedin_top_voice.png",
    },
    33: {
      section: "branding",
      component_id: 19,
      component_name: "Positioning Statement",
      description:
        "The Positioning Statement tool clarifies and communicates your brand's unique market position, aligning strengths with customer needs to ensure a compelling and memorable foundation for all marketing efforts",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/positioning_statement.png",
    },
    34: {
      section: "essential",
      component_id: 10,
      component_name: "PPC helper",
      description:
        "PPC Helper boosts your digital advertising strategies with detailed analytics, automated bid management, and targeted campaigns, ensuring maximum ROI in the pay-per-click world.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/pay-per-click.png",
    },
    35: {
      section: "customeroutreach",
      component_id: 11,
      component_name: "Quora answer",
      description:
        "Quora Answer optimizes your Quora engagement by analyzing top answers and suggesting improvements, helping you craft authoritative responses that boost visibility and establish thought leadership.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/quora_answer.png",
    },
    36: {
      section: "copywriting",
      component_id: 4,
      component_name: "Sales punchline",
      description:
        "Sales Punchlines deliver catchy, memorable phrases that encapsulate product benefits and solve customer pain points, boosting interest, brand recall, and conversions.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/sales_punchline.png",
    },
    37: {
      section: "socialmedia",
      component_id: 1,
      component_name: "Social media posts",
      description:
        "Social Media Posts empower brands with strategic Instagram content, including captivating visuals, reels, and stories, to enhance visibility, foster engagement, and align with marketing goals through consistent planning and creative execution.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/social_media.png",
    },
    38: {
      section: "essential",
      component_id: 7,
      component_name: "Stock image generation",
      description:
        "The Stock Image Generator leverages AI to craft unique, high-quality images from specific prompts, transforming content creation with instant, personalized visuals for any purpose.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/stock_images.png",
    },
    39: {
      section: "branding",
      component_id: 24,
      component_name: "Swot analysis",
      description:
        "The SWOT Analysis tool provides a clear framework for identifying and evaluating strengths, weaknesses, opportunities, and threats, empowering businesses to make informed decisions and strategic plans with confidence.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/swot_analysis.png",
    },
    40: {
      section: "socialmedia",
      component_id: 9,
      component_name: "Viral content strategy",
      description:
        "Viral Content Strategy is an innovative tool that crafts powerful Instagram content calendars using data-driven insights, tailored to boost engagement and maximize online presence for brands and influencers.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/viral_content.png",
    },
    41: {
      section: "copywriting",
      component_id: 5,
      component_name: "Website content writer",
      description:
        "A Website Content Writer crafts engaging and SEO-friendly digital content that enhances online presence, conveys brand messages, and boosts search rankings to drive visitor action and website success.\n",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/website_content_writer.png",
    },
    42: {
      section: "copywriting",
      component_id: 29,
      component_name: "Write like me",
      description:
        " Write Like Me is an innovative tool that replicates your unique writing style, ensuring content remains true to your personal or brand voice while maintaining consistency across all written materials.",
      logo_url:
        "https://ai-excellent-images.s3.us-east-1.amazonaws.com/Component_icons/write_like_me.png",
    },
  };
  const subtopicsContainer = document.getElementById("subtopicsContainer");

  // Function to create subtopic sections dynamically
  function createSubtopicSections() {
    // Group data by section
    const sectionGroups = {};
    Object.values(data).forEach((item) => {
      if (!sectionGroups[item.section]) {
        sectionGroups[item.section] = [];
      }
      sectionGroups[item.section].push(item);
    });

    // Clear existing content
    subtopicsContainer.innerHTML = "";

    // Create sections for each section group
    Object.keys(sectionGroups).forEach((sectionName) => {
      const sectionItems = sectionGroups[sectionName];

      sectionItems.forEach((item) => {
        const subtopicSection = document.createElement("section");
        subtopicSection.classList.add("subtopic-card");
        subtopicSection.classList.add(`${sectionName}-subtopics`);
        subtopicSection.setAttribute("data-title", item.component_name);
        subtopicSection.setAttribute("tabindex", "0");

        subtopicSection.innerHTML = `
          <div class="card-info">
            <h2>${item.component_name}</h2>
            <p>${item.description}</p>
            <button class="cta-button">Explore ${item.component_name}</button>
          </div>
          <div class="card-visual">
            <img 
              src="${item.logo_url}" 
              alt="${item.component_name} Icon" 
            />
          </div>
        `;

        subtopicsContainer.appendChild(subtopicSection);
      });
    });
  }

  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainTopics = document.getElementById("mainTopics");
  const hamburgerIcon = mobileNavToggle.querySelector(".hamburger-icon");
  const closeIcon = mobileNavToggle.querySelector(".close-icon");

  mobileNavToggle.addEventListener("click", () => {
    mainTopics.classList.toggle("show");
    hamburgerIcon.style.display = mainTopics.classList.contains("show")
      ? "none"
      : "inline";
    closeIcon.style.display = mainTopics.classList.contains("show")
      ? "inline"
      : "none";
  });

  // Search Functionality
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const subtopicCards = document.querySelectorAll(".subtopic-card");

    subtopicCards.forEach((card) => {
      const title = card.getAttribute("data-title").toLowerCase();
      card.style.display = title.includes(query) ? "grid" : "none";
    });
  });

  // Main Topic Selection
  const mainTopicElements = document.querySelectorAll(".main-topic");

  mainTopicElements.forEach((mainTopic) => {
    mainTopic.addEventListener("click", () => {
      // Deselect all main topics
      mainTopicElements.forEach((topic) => topic.classList.remove("selected"));

      // Select clicked main topic
      mainTopic.classList.add("selected");

      // Get the section name from the data attribute
      const sectionName = mainTopic
        .getAttribute("data-subtopic")
        .replace("-subtopics", "");

      // Show/hide subtopic cards based on section
      const subtopicCards = document.querySelectorAll(".subtopic-card");
      subtopicCards.forEach((card) => {
        // Check if the card matches the selected section
        card.style.display = card.classList.contains(`${sectionName}-subtopics`)
          ? "grid"
          : "none";
      });
    });
  });

  // Initial setup
  createSubtopicSections();
});
