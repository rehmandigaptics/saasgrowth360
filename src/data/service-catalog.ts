export type ServiceItem = {
  file: string;
  no: string;
  type: string;
  icon: string;
  title: string;
  card: string;
  meta: string;
  kicker: string;
  headline: string;
  lead: string;
  image: string;
  image_alt: string;
  caption_small: string;
  caption_strong: string;
  float_label: string;
  float_value: string;
  proof: { strong: string; span: string }[];
  cta: string;
  contact: string;
  bridge?: string;
  signals: { small: string; strong: string; span: string }[];
  work_kicker: string;
  work_title: string;
  work_copy: string;
  work_image: string;
  work_image_alt: string;
  features: { icon: string; title: string; text: string }[];
  process_title: string;
  process_copy: string;
  steps: { icon: string; title: string; text: string; tags: string[]; output: string }[];
  outcomes: { icon: string; title: string; text: string }[];
  related: string[];
};

export const serviceCatalog = {
  "acquisition": {
    "file": "/services/acquisition",
    "no": "01",
    "type": "Demand",
    "icon": "bi-megaphone",
    "title": "Acquisition & demand generation",
    "card": "Build qualified pipeline through channel strategy, paid acquisition, content and campaign systems.",
    "meta": "Build qualified SaaS pipeline through channel strategy, paid acquisition, content and campaign systems.",
    "kicker": "Demand generation",
    "headline": "Qualified pipeline, built around a <span>clear buying motion.</span>",
    "lead": "We design the channels, offers and campaign systems that bring the right accounts into the funnel, then connect that demand to the pages, capture and follow-up that turn it into pipeline.",
    "image": "/assets/images/hero-services.png",
    "image_alt": "SaaS analytics dashboard used to review demand generation performance",
    "caption_small": "Demand system",
    "caption_strong": "Channel strategy, campaigns and capture in one plan",
    "float_label": "Primary outcome",
    "float_value": "Pipeline",
    "proof": [
      {
        "strong": "Paid",
        "span": "Acquisition"
      },
      {
        "strong": "Content",
        "span": "Campaign systems"
      },
      {
        "strong": "ICP",
        "span": "Qualified demand"
      }
    ],
    "cta": "Discuss demand generation",
    "contact": "Lead Generation & Demand",
    "signals": [
      {
        "small": "Plan",
        "strong": "Channel strategy",
        "span": "A focused mix tied to how your buyers actually evaluate."
      },
      {
        "small": "Create",
        "strong": "Campaign systems",
        "span": "Offers, creative and landing paths built for pipeline quality."
      },
      {
        "small": "Capture",
        "strong": "Intent into leads",
        "span": "Forms, pages and routing that keep context intact."
      },
      {
        "small": "Measure",
        "strong": "Quality over volume",
        "span": "Performance judged by opportunities, not raw traffic."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "Demand that sales can <span>actually work.</span>",
    "work_copy": "Acquisition breaks when channels, messaging and capture are planned separately. We connect them so every campaign has a clear audience, offer, destination and handoff.",
    "work_image": "/assets/images/Engagement-model.png",
    "work_image_alt": "Growth team planning an acquisition strategy",
    "features": [
      {
        "icon": "bi-bullseye",
        "title": "ICP and offer architecture",
        "text": "Define who the motion is for, the problem it speaks to and the offer that earns the next step."
      },
      {
        "icon": "bi-megaphone",
        "title": "Paid acquisition",
        "text": "Structure campaigns, audiences and creative around qualified pipeline instead of cheap clicks."
      },
      {
        "icon": "bi-layout-text-window",
        "title": "Content and landing systems",
        "text": "Build the pages and narratives that turn attention into a demo, trial or sales conversation."
      },
      {
        "icon": "bi-signpost-split",
        "title": "Campaign operating rhythm",
        "text": "Give the team a repeatable way to launch, read results and decide what to scale."
      }
    ],
    "process_title": "From channel ideas to a <span>working demand system.</span>",
    "process_copy": "We start with the constraint in the current motion, then design, launch and tighten the system around pipeline quality.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Diagnose the motion",
        "text": "Review channels, spend, message, landing paths and the quality of what reaches sales.",
        "tags": [
          "Audit",
          "ICP",
          "Leakage"
        ],
        "output": "Demand constraint map"
      },
      {
        "icon": "bi-sliders",
        "title": "Design the system",
        "text": "Choose the channel mix, offers, capture points and measurement that the motion will run on.",
        "tags": [
          "Offers",
          "Channels",
          "Measurement"
        ],
        "output": "Campaign architecture"
      },
      {
        "icon": "bi-lightning-charge",
        "title": "Launch focused work",
        "text": "Ship campaigns, pages and creative in a sequence the team can learn from quickly.",
        "tags": [
          "Creative",
          "Pages",
          "Launch"
        ],
        "output": "Live acquisition motion"
      },
      {
        "icon": "bi-graph-up-arrow",
        "title": "Optimize for quality",
        "text": "Shift budget and messaging toward the segments and offers that create real opportunities.",
        "tags": [
          "Quality",
          "Iteration",
          "Scale"
        ],
        "output": "Stronger pipeline mix"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-person-check",
        "title": "Higher-intent demand",
        "text": "More of the traffic and leads entering the funnel match the accounts you want to sell."
      },
      {
        "icon": "bi-funnel",
        "title": "Cleaner handoff",
        "text": "Sales receives context, source and next-step clarity instead of a raw lead list."
      },
      {
        "icon": "bi-speedometer2",
        "title": "A motion you can repeat",
        "text": "Campaigns become a system with owners, metrics and a cadence, not one-off launches."
      }
    ],
    "related": [
      "cro",
      "lead-generation",
      "revops"
    ]
  },
  "cro": {
    "file": "/services/cro",
    "no": "02",
    "type": "Conversion",
    "icon": "bi-funnel",
    "title": "CRO & buyer journeys",
    "card": "Improve the transition from first visit to lead, demo, trial, opportunity and paid customer.",
    "meta": "Improve the SaaS path from first visit to lead, demo, trial, opportunity and paid customer.",
    "kicker": "Conversion",
    "headline": "A buyer journey with fewer <span>places to stall.</span>",
    "lead": "We diagnose where qualified visitors drop between first visit, lead, demo, trial and purchase, then redesign the journey, pages and experiments that move them forward.",
    "image": "/assets/images/Outcomes.png",
    "image_alt": "Conversion analytics reviewed on a laptop",
    "caption_small": "Buyer journey",
    "caption_strong": "Visit, lead, demo, trial and opportunity",
    "float_label": "Primary outcome",
    "float_value": "Conversion",
    "proof": [
      {
        "strong": "CRO",
        "span": "Page and funnel"
      },
      {
        "strong": "UX",
        "span": "Journey friction"
      },
      {
        "strong": "Tests",
        "span": "Measured experiments"
      }
    ],
    "cta": "Discuss conversion",
    "contact": "CRO & Buyer Journey",
    "signals": [
      {
        "small": "See",
        "strong": "Funnel diagnostics",
        "span": "Find the step where qualified buyers actually stop."
      },
      {
        "small": "Clarify",
        "strong": "Message and offer",
        "span": "Make the next step obvious for the right visitor."
      },
      {
        "small": "Test",
        "strong": "Disciplined experiments",
        "span": "Change one meaningful variable and read the result."
      },
      {
        "small": "Connect",
        "strong": "Sales-ready journeys",
        "span": "Pages, forms and follow-up tell the same story."
      }
    ],
    "work_kicker": "What we improve",
    "work_title": "Conversion work tied to the <span>revenue step.</span>",
    "work_copy": "A higher click rate only matters if it creates a better demo, trial or opportunity. We treat pages, forms and journeys as one path into revenue.",
    "work_image": "/assets/images/Outcome-discipline.png",
    "work_image_alt": "Team reviewing funnel performance",
    "features": [
      {
        "icon": "bi-funnel",
        "title": "Funnel diagnostics",
        "text": "Map drop-off from visit to lead, demo, trial and paid customer using the data you already have."
      },
      {
        "icon": "bi-chat-square-text",
        "title": "Message and page clarity",
        "text": "Rewrite the promise, proof and call to action so the right buyer knows what happens next."
      },
      {
        "icon": "bi-bezier2",
        "title": "Journey design",
        "text": "Connect landing pages, forms, scheduling and follow-up so the path does not reset at every step."
      },
      {
        "icon": "bi-clipboard-data",
        "title": "Experiment system",
        "text": "Prioritize tests by expected leverage and keep a record of what the team should keep or kill."
      }
    ],
    "process_title": "Find the leak, then <span>fix the journey.</span>",
    "process_copy": "We isolate the highest-friction step before redesigning pages or launching a pile of tests.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Read the funnel",
        "text": "Identify where qualified buyers hesitate, abandon or arrive unprepared for sales.",
        "tags": [
          "Analytics",
          "Sessions",
          "Sales notes"
        ],
        "output": "Friction map"
      },
      {
        "icon": "bi-pencil",
        "title": "Redesign the step",
        "text": "Sharpen the offer, layout, proof and form so the next action is easier to take.",
        "tags": [
          "Copy",
          "UX",
          "Offer"
        ],
        "output": "Journey revision"
      },
      {
        "icon": "bi-lightning-charge",
        "title": "Ship experiments",
        "text": "Launch a short set of tests with a clear success signal and a decision date.",
        "tags": [
          "A/B tests",
          "Variants",
          "Goals"
        ],
        "output": "Measured changes"
      },
      {
        "icon": "bi-arrow-repeat",
        "title": "Keep what compounds",
        "text": "Standardize the winning pattern across related pages and handoffs.",
        "tags": [
          "Playbooks",
          "Rollout",
          "Learning"
        ],
        "output": "Repeatable conversion gains"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-filter-circle",
        "title": "Less funnel leakage",
        "text": "More of the right visitors reach a demo, trial or sales conversation."
      },
      {
        "icon": "bi-chat-left-dots",
        "title": "Clearer buying conversations",
        "text": "Prospects arrive with a better understanding of the offer and the next step."
      },
      {
        "icon": "bi-journal-check",
        "title": "A testing habit",
        "text": "The team gets a way to prioritize, run and learn from conversion work."
      }
    ],
    "related": [
      "acquisition",
      "onboarding",
      "lead-generation"
    ]
  },
  "onboarding": {
    "file": "/services/onboarding",
    "no": "03",
    "type": "Activation",
    "icon": "bi-person-check",
    "title": "Onboarding & product growth",
    "card": "Reduce time-to-value and help users reach the product moments that predict retention.",
    "meta": "Reduce time-to-value and help SaaS users reach the product moments that predict retention.",
    "kicker": "Activation",
    "headline": "Get new users to the moment that <span>predicts they stay.</span>",
    "lead": "We shorten the path from signup or closed-won to first value, using onboarding, segmentation and in-product guidance aimed at the milestones that matter.",
    "image": "/assets/images/Engagement-model.png",
    "image_alt": "Product growth team planning onboarding",
    "caption_small": "Activation",
    "caption_strong": "Signup to the milestone that predicts retention",
    "float_label": "Primary outcome",
    "float_value": "Time to value",
    "proof": [
      {
        "strong": "Onboarding",
        "span": "First-run experience"
      },
      {
        "strong": "Segments",
        "span": "Role and intent"
      },
      {
        "strong": "Milestones",
        "span": "Activation events"
      }
    ],
    "cta": "Discuss activation",
    "contact": "Product Growth & Lifecycle",
    "signals": [
      {
        "small": "Define",
        "strong": "Activation milestone",
        "span": "Name the product moment that predicts a retained customer."
      },
      {
        "small": "Guide",
        "strong": "Onboarding paths",
        "span": "Different first experiences for different users and intents."
      },
      {
        "small": "Prompt",
        "strong": "Timely nudges",
        "span": "Email, in-app and human follow-up aimed at the next step."
      },
      {
        "small": "Watch",
        "strong": "Early behavior",
        "span": "See who is progressing and who is stuck before churn starts."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "Onboarding that teaches the product <span>by getting work done.</span>",
    "work_copy": "New customers do not need a tour of every feature. They need a short path to the outcome they bought, with help that shows up when they stall.",
    "work_image": "/assets/images/System-layers.png",
    "work_image_alt": "Team mapping a product onboarding journey",
    "features": [
      {
        "icon": "bi-flag",
        "title": "Activation definition",
        "text": "Agree on the behaviors that show a user has reached value, and instrument them clearly."
      },
      {
        "icon": "bi-signpost",
        "title": "Segmented onboarding",
        "text": "Shape the first experience by role, use case or plan so the path matches the job to be done."
      },
      {
        "icon": "bi-envelope-check",
        "title": "Guidance and follow-up",
        "text": "Coordinate in-app prompts, lifecycle email and team outreach around the same milestones."
      },
      {
        "icon": "bi-people",
        "title": "Stuck-user recovery",
        "text": "Detect inactivity or missed steps and route a useful intervention before the account goes quiet."
      }
    ],
    "process_title": "Design the first days around <span>one outcome.</span>",
    "process_copy": "We identify the activation moment, remove the steps that delay it, and build the prompts that keep new users moving.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Find the value moment",
        "text": "Use product behavior and customer conversations to name what early success looks like.",
        "tags": [
          "Events",
          "Cohorts",
          "Interviews"
        ],
        "output": "Activation definition"
      },
      {
        "icon": "bi-diagram-3",
        "title": "Map the first journey",
        "text": "Lay out the steps, owners and messages between signup and that moment.",
        "tags": [
          "Journey",
          "Roles",
          "Friction"
        ],
        "output": "Onboarding map"
      },
      {
        "icon": "bi-lightning-charge",
        "title": "Build the path",
        "text": "Ship the flows, content and handoffs that guide each segment to first value.",
        "tags": [
          "Flows",
          "Email",
          "In-app"
        ],
        "output": "Live onboarding"
      },
      {
        "icon": "bi-graph-up-arrow",
        "title": "Improve time to value",
        "text": "Watch completion and drop-off, then remove the steps that slow activation.",
        "tags": [
          "Cohorts",
          "Drop-off",
          "Iteration"
        ],
        "output": "Faster activation"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-rocket",
        "title": "Faster time to value",
        "text": "More new users reach a meaningful product outcome in the first days."
      },
      {
        "icon": "bi-person-check",
        "title": "Fewer stalled accounts",
        "text": "Teams can see who needs help before a quiet account becomes churn."
      },
      {
        "icon": "bi-arrow-repeat",
        "title": "A foundation for retention",
        "text": "Lifecycle programs start from real usage, not a generic welcome series."
      }
    ],
    "related": [
      "cro",
      "retention",
      "ai-automation"
    ]
  },
  "retention": {
    "file": "/services/retention",
    "no": "04",
    "type": "Lifecycle",
    "icon": "bi-arrow-repeat",
    "title": "Retention & expansion",
    "card": "Create lifecycle programs that improve engagement, reduce churn and surface expansion opportunities.",
    "meta": "Create SaaS lifecycle programs that improve engagement, reduce churn and surface expansion opportunities.",
    "kicker": "Lifecycle",
    "headline": "Lifecycle programs that protect and <span>grow the account.</span>",
    "lead": "We build engagement, nurture and expansion motions around product behavior, so the right customers stay active and the right accounts are ready for a larger relationship.",
    "image": "/assets/images/Outcome-discipline.png",
    "image_alt": "Team reviewing retention and expansion performance",
    "caption_small": "Lifecycle",
    "caption_strong": "Engagement, retention and expansion",
    "float_label": "Primary outcome",
    "float_value": "Retention",
    "proof": [
      {
        "strong": "Nurture",
        "span": "Behavior-led"
      },
      {
        "strong": "Health",
        "span": "Churn signals"
      },
      {
        "strong": "Expand",
        "span": "Account growth"
      }
    ],
    "cta": "Discuss lifecycle",
    "contact": "Product Growth & Lifecycle",
    "signals": [
      {
        "small": "Segment",
        "strong": "Lifecycle states",
        "span": "Group customers by health, usage and expansion potential."
      },
      {
        "small": "Engage",
        "strong": "Useful nurture",
        "span": "Messages tied to behavior, not a fixed calendar blast."
      },
      {
        "small": "Save",
        "strong": "Churn prevention",
        "span": "Early signals that trigger a relevant save motion."
      },
      {
        "small": "Grow",
        "strong": "Expansion moments",
        "span": "Surface upgrades when usage shows the account is ready."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "Retention that follows <span>how customers actually use the product.</span>",
    "work_copy": "Generic nurture sequences fade quickly. We design programs around segments, product moments and the commercial motion your team already runs.",
    "work_image": "/assets/images/What-that-means-for-you.png",
    "work_image_alt": "Lifecycle planning session",
    "features": [
      {
        "icon": "bi-diagram-2",
        "title": "Lifecycle segmentation",
        "text": "Define states such as new, active, at risk and expansion-ready using behavior you can trust."
      },
      {
        "icon": "bi-envelope-paper",
        "title": "Engagement programs",
        "text": "Build email, in-app and success plays that help customers get more from what they already pay for."
      },
      {
        "icon": "bi-shield-check",
        "title": "Churn signals",
        "text": "Turn inactivity, failed milestones and declining usage into a clear intervention path."
      },
      {
        "icon": "bi-graph-up-arrow",
        "title": "Expansion prompts",
        "text": "Identify accounts ready for seats, plans or add-ons and route them to the right owner."
      }
    ],
    "process_title": "Turn customer behavior into a <span>lifecycle operating rhythm.</span>",
    "process_copy": "We define the states, the plays for each state, and the measurement that shows whether engagement and expansion are improving.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Read account health",
        "text": "Look at usage, renewal risk and expansion patterns to see where revenue is exposed.",
        "tags": [
          "Usage",
          "Renewal",
          "Segments"
        ],
        "output": "Health model"
      },
      {
        "icon": "bi-signpost-split",
        "title": "Design the plays",
        "text": "Create the messages, owners and triggers for engagement, save and expansion moments.",
        "tags": [
          "Triggers",
          "Owners",
          "Offers"
        ],
        "output": "Lifecycle playbook"
      },
      {
        "icon": "bi-lightning-charge",
        "title": "Launch the programs",
        "text": "Put the journeys, alerts and team workflows into the tools your customer team already uses.",
        "tags": [
          "Journeys",
          "Alerts",
          "CRM"
        ],
        "output": "Live lifecycle motion"
      },
      {
        "icon": "bi-arrow-repeat",
        "title": "Refine by cohort",
        "text": "Compare segments over time and keep the programs that change retention or expansion.",
        "tags": [
          "Cohorts",
          "Retention",
          "Expansion"
        ],
        "output": "Stronger account growth"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-heart-pulse",
        "title": "Healthier engagement",
        "text": "Customers hear from you when a product moment makes the message useful."
      },
      {
        "icon": "bi-arrow-down-circle",
        "title": "Earlier churn response",
        "text": "At-risk accounts are visible while there is still time to help."
      },
      {
        "icon": "bi-bar-chart-line",
        "title": "Clearer expansion",
        "text": "Growth inside the base is a designed motion, not an occasional upsell."
      }
    ],
    "related": [
      "onboarding",
      "revops",
      "ai-automation"
    ]
  },
  "revops": {
    "file": "/services/revops",
    "no": "05",
    "type": "Revenue Ops",
    "icon": "bi-bezier2",
    "title": "CRM, RevOps & attribution",
    "card": "Connect marketing, sales and customer data so teams operate from reliable workflows and metrics.",
    "meta": "Connect SaaS marketing, sales and customer data so teams operate from reliable workflows and metrics.",
    "kicker": "Revenue operations",
    "headline": "One operating picture from <span>first lead to revenue.</span>",
    "lead": "We connect CRM structure, lead routing, lifecycle stages and attribution so marketing, sales and success work from the same definitions and a trustworthy view of the funnel.",
    "image": "/assets/images/System-layers.png",
    "image_alt": "Revenue operations data and workflow planning",
    "caption_small": "RevOps",
    "caption_strong": "CRM, routing and attribution in one model",
    "float_label": "Primary outcome",
    "float_value": "Clarity",
    "proof": [
      {
        "strong": "CRM",
        "span": "Clean structure"
      },
      {
        "strong": "Routing",
        "span": "Fast handoff"
      },
      {
        "strong": "Attribution",
        "span": "Source you trust"
      }
    ],
    "cta": "Discuss RevOps",
    "contact": "CRM, GHL & RevOps",
    "signals": [
      {
        "small": "Model",
        "strong": "Shared definitions",
        "span": "Stages, sources and lifecycle states mean the same thing to every team."
      },
      {
        "small": "Route",
        "strong": "Lead ownership",
        "span": "The right record reaches the right person with context attached."
      },
      {
        "small": "Attribute",
        "strong": "Source of truth",
        "span": "Campaign performance is tied to opportunities, not vanity counts."
      },
      {
        "small": "Report",
        "strong": "Operating scorecard",
        "span": "Leaders see pipeline movement without rebuilding the spreadsheet."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "Revenue operations your team can <span>run every week.</span>",
    "work_copy": "RevOps is the layer that keeps acquisition, conversion and lifecycle honest. We design the objects, workflows and reporting that make that possible.",
    "work_image": "/assets/images/Growth-System.png",
    "work_image_alt": "Connected revenue systems",
    "features": [
      {
        "icon": "bi-hdd-stack",
        "title": "CRM architecture",
        "text": "Structure objects, fields, stages and required data so records stay usable as volume grows."
      },
      {
        "icon": "bi-signpost-split",
        "title": "Lead routing",
        "text": "Assign, notify and follow up based on fit, intent and ownership rules the team agrees on."
      },
      {
        "icon": "bi-pie-chart",
        "title": "Attribution",
        "text": "Connect campaign source to pipeline stages so channel decisions use the same numbers."
      },
      {
        "icon": "bi-speedometer",
        "title": "Revenue reporting",
        "text": "Build the views marketing, sales and leadership actually use in operating meetings."
      }
    ],
    "process_title": "Fix the definitions before <span>adding more tools.</span>",
    "process_copy": "We align the data model and handoffs first, then implement the workflows and reporting on top of them.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Audit the revenue path",
        "text": "Review stages, fields, duplicates, routing gaps and the reports people do not trust.",
        "tags": [
          "CRM",
          "Stages",
          "Data quality"
        ],
        "output": "RevOps audit"
      },
      {
        "icon": "bi-diagram-3",
        "title": "Design the model",
        "text": "Agree on lifecycle stages, ownership, source fields and the metrics each team owns.",
        "tags": [
          "Definitions",
          "Ownership",
          "Metrics"
        ],
        "output": "Operating model"
      },
      {
        "icon": "bi-tools",
        "title": "Implement workflows",
        "text": "Build routing, required fields, alerts and the handoffs between marketing and sales.",
        "tags": [
          "Routing",
          "Automation",
          "CRM"
        ],
        "output": "Working workflows"
      },
      {
        "icon": "bi-bar-chart",
        "title": "Publish the scorecard",
        "text": "Give the team a shared view of pipeline, conversion and source performance.",
        "tags": [
          "Reporting",
          "Attribution",
          "Reviews"
        ],
        "output": "Trusted funnel view"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-check2-square",
        "title": "Cleaner pipeline data",
        "text": "Stages and sources are consistent enough to manage the business from them."
      },
      {
        "icon": "bi-arrow-left-right",
        "title": "Faster, fairer routing",
        "text": "Leads move to an owner with the context needed to respond well."
      },
      {
        "icon": "bi-eye",
        "title": "Decisions from one view",
        "text": "Channel and funnel debates start from a shared scorecard."
      }
    ],
    "related": [
      "acquisition",
      "gohighlevel",
      "n8n"
    ]
  },
  "ai-automation": {
    "file": "/services/ai-automation",
    "no": "06",
    "type": "Automation",
    "icon": "bi-stars",
    "title": "AI & workflow automation",
    "card": "Automate repetitive growth operations while preserving the judgment points that still need humans.",
    "meta": "Automate repetitive SaaS growth operations while keeping human judgment where it still matters.",
    "kicker": "Automation",
    "headline": "Automate the repetitive work. <span>Keep the judgment.</span>",
    "lead": "We design AI and workflow automation for research, enrichment, follow-up, reporting and operations, with clear points where a person still decides.",
    "image": "/assets/images/Growth-System.png",
    "image_alt": "Connected automation and growth infrastructure",
    "caption_small": "Automation",
    "caption_strong": "AI steps inside a controlled workflow",
    "float_label": "Primary outcome",
    "float_value": "Speed",
    "proof": [
      {
        "strong": "AI",
        "span": "Practical workflows"
      },
      {
        "strong": "Ops",
        "span": "Less manual work"
      },
      {
        "strong": "Review",
        "span": "Human checkpoints"
      }
    ],
    "cta": "Discuss automation",
    "contact": "n8n, AI & Automation",
    "signals": [
      {
        "small": "Find",
        "strong": "Repetitive work",
        "span": "The tasks growth teams repeat every day with little variation."
      },
      {
        "small": "Assist",
        "strong": "AI where it helps",
        "span": "Research, drafting, enrichment and classification with a review step."
      },
      {
        "small": "Move",
        "strong": "Data between tools",
        "span": "Records, alerts and updates that should not depend on a spreadsheet."
      },
      {
        "small": "Guard",
        "strong": "Judgment stays human",
        "span": "Approvals remain on pricing, outreach and customer-facing decisions."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "Automation that removes work <span>without hiding the decision.</span>",
    "work_copy": "The useful version of AI in growth is specific. It prepares the work, enriches the record and routes the exception. It does not replace the person accountable for the outcome.",
    "work_image": "/assets/images/hero-why-us.png",
    "work_image_alt": "Team designing an automation workflow",
    "features": [
      {
        "icon": "bi-stars",
        "title": "AI workflow design",
        "text": "Place models on research, summarization, classification and first-draft work with a defined output."
      },
      {
        "icon": "bi-database-add",
        "title": "Enrichment",
        "text": "Add firmographic and intent context to leads before a person spends time on them."
      },
      {
        "icon": "bi-arrow-left-right",
        "title": "Ops automation",
        "text": "Move data, create tasks and notify owners when a funnel event needs action."
      },
      {
        "icon": "bi-shield-check",
        "title": "Review points",
        "text": "Keep a human checkpoint on anything customer-facing, commercial or hard to reverse."
      }
    ],
    "process_title": "Start with the task, then <span>automate the reliable part.</span>",
    "process_copy": "We pick a narrow workflow, define the inputs and the human review, and only then connect the tools.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Choose the workflow",
        "text": "Find the repeated task with clear inputs, a costly manual step and an obvious owner.",
        "tags": [
          "Ops",
          "Time",
          "Volume"
        ],
        "output": "Automation candidate"
      },
      {
        "icon": "bi-diagram-3",
        "title": "Design the flow",
        "text": "Map triggers, data, AI steps, exceptions and the point where a person approves.",
        "tags": [
          "Triggers",
          "AI",
          "Review"
        ],
        "output": "Workflow spec"
      },
      {
        "icon": "bi-tools",
        "title": "Build and test",
        "text": "Implement the automation and run it against real records before it touches customers.",
        "tags": [
          "Build",
          "QA",
          "Exceptions"
        ],
        "output": "Working workflow"
      },
      {
        "icon": "bi-arrow-repeat",
        "title": "Hand it to the team",
        "text": "Document how to run, pause and improve the workflow so it does not depend on one person.",
        "tags": [
          "Enablement",
          "Monitoring",
          "Iteration"
        ],
        "output": "Operable automation"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-clock",
        "title": "Hours returned to the team",
        "text": "Repetitive preparation and data movement stop consuming senior time."
      },
      {
        "icon": "bi-person-lines-fill",
        "title": "Better-prepared work",
        "text": "People start from enriched, summarized records instead of a blank screen."
      },
      {
        "icon": "bi-shield-lock",
        "title": "Controlled use of AI",
        "text": "Automation has an owner, a review step and a way to turn it off."
      }
    ],
    "related": [
      "n8n",
      "revops",
      "lead-generation"
    ]
  },
  "lead-generation": {
    "file": "/services/lead-generation",
    "no": "07",
    "type": "Lead Generation",
    "icon": "bi-person-lines-fill",
    "title": "Qualified lead generation systems",
    "card": "Build predictable lead flow with targeted outbound, inbound capture, enrichment, qualification and follow-up.",
    "meta": "Build predictable SaaS lead flow with outbound, inbound capture, enrichment, qualification and follow-up.",
    "kicker": "Lead generation",
    "headline": "A lead system built around <span>who you want to sell.</span>",
    "lead": "We combine ICP definition, outbound, inbound capture, enrichment, qualification and follow-up so lead flow is predictable and ready for a sales conversation.",
    "image": "/assets/images/What-that-means-for-you.png",
    "image_alt": "Team building a qualified lead generation system",
    "caption_small": "Lead system",
    "caption_strong": "ICP, capture, qualification and follow-up",
    "float_label": "Primary outcome",
    "float_value": "Qualified leads",
    "proof": [
      {
        "strong": "ICP",
        "span": "Targeting"
      },
      {
        "strong": "Inbound",
        "span": "Capture"
      },
      {
        "strong": "Outbound",
        "span": "Follow-up"
      }
    ],
    "cta": "Build your pipeline",
    "contact": "Lead Generation & Demand",
    "bridge": "Lead generation, n8n and GoHighLevel are designed to run as one acquisition system when you want them connected.",
    "signals": [
      {
        "small": "Define",
        "strong": "ICP strategy",
        "span": "A precise picture of the accounts and buyers worth pursuing."
      },
      {
        "small": "Capture",
        "strong": "Inbound and outbound",
        "span": "Both motions feed the same qualification standard."
      },
      {
        "small": "Enrich",
        "strong": "Context before outreach",
        "span": "Records arrive with the detail a rep needs to respond well."
      },
      {
        "small": "Follow up",
        "strong": "A reliable sequence",
        "span": "No qualified lead sits without an owner and a next step."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "Lead flow with a standard for <span>what “qualified” means.</span>",
    "work_copy": "Volume without a qualification rule creates noise. We design the system so every lead has a source, a fit check, an owner and a follow-up path.",
    "work_image": "/assets/images/hero-services.png",
    "work_image_alt": "Pipeline dashboard for lead generation",
    "features": [
      {
        "icon": "bi-bullseye",
        "title": "ICP and list strategy",
        "text": "Define the company, role and trigger that make an account worth a conversation."
      },
      {
        "icon": "bi-inboxes",
        "title": "Inbound capture",
        "text": "Forms, landing paths and routing that preserve source and intent."
      },
      {
        "icon": "bi-send",
        "title": "Outbound motion",
        "text": "A focused outbound program aimed at the same ICP, with messaging tied to the offer."
      },
      {
        "icon": "bi-person-check",
        "title": "Qualification and follow-up",
        "text": "Scoring, enrichment and sequences that move a fit lead to a meeting or a clear disqualify."
      }
    ],
    "process_title": "Build the system, then <span>fill it with the right leads.</span>",
    "process_copy": "We lock the definition of a qualified lead before scaling inbound or outbound volume.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Define qualified",
        "text": "Agree on fit, intent and the fields required before a lead reaches sales.",
        "tags": [
          "ICP",
          "Scoring",
          "Fields"
        ],
        "output": "Qualification standard"
      },
      {
        "icon": "bi-diagram-3",
        "title": "Design both motions",
        "text": "Connect inbound capture and outbound so they share routing, enrichment and follow-up.",
        "tags": [
          "Inbound",
          "Outbound",
          "Routing"
        ],
        "output": "Lead architecture"
      },
      {
        "icon": "bi-lightning-charge",
        "title": "Launch and staff it",
        "text": "Turn on capture, sequences and ownership rules with a visible queue.",
        "tags": [
          "Sequences",
          "Owners",
          "SLA"
        ],
        "output": "Live lead system"
      },
      {
        "icon": "bi-graph-up-arrow",
        "title": "Improve the mix",
        "text": "Shift effort toward sources and segments that become opportunities.",
        "tags": [
          "Source",
          "Quality",
          "Meetings"
        ],
        "output": "Predictable lead flow"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-person-lines-fill",
        "title": "Leads sales will work",
        "text": "The queue is filtered by fit and intent before it consumes rep time."
      },
      {
        "icon": "bi-clock-history",
        "title": "Follow-up that happens",
        "text": "Every qualified lead has an owner, a timer and a next action."
      },
      {
        "icon": "bi-intersect",
        "title": "A system you can connect",
        "text": "The same lead model can run through CRM, n8n and GoHighLevel."
      }
    ],
    "related": [
      "acquisition",
      "n8n",
      "gohighlevel"
    ]
  },
  "n8n": {
    "file": "/services/n8n",
    "no": "08",
    "type": "n8n",
    "icon": "bi-diagram-3",
    "title": "n8n workflow automation",
    "card": "Connect your SaaS stack with workflows that move data, trigger actions and remove repetitive handoffs.",
    "meta": "Connect your SaaS stack with n8n workflows that move data, trigger actions and remove manual handoffs.",
    "kicker": "n8n",
    "headline": "Your stack, connected by <span>workflows you can see.</span>",
    "lead": "We build n8n workflows that move data between your CRM, product, forms and communication tools, trigger the right actions and remove repetitive handoffs.",
    "image": "/assets/images/hero-why-us.png",
    "image_alt": "Team connecting SaaS tools with workflow automation",
    "caption_small": "n8n",
    "caption_strong": "APIs, webhooks, CRM sync and AI steps",
    "float_label": "Primary outcome",
    "float_value": "Connected stack",
    "proof": [
      {
        "strong": "APIs",
        "span": "Tool to tool"
      },
      {
        "strong": "Webhooks",
        "span": "Event triggers"
      },
      {
        "strong": "CRM",
        "span": "Clean sync"
      }
    ],
    "cta": "Automate your stack",
    "contact": "n8n, AI & Automation",
    "bridge": "n8n is often the layer that connects lead generation and GoHighLevel so data and follow-up stay in sync.",
    "signals": [
      {
        "small": "Trigger",
        "strong": "Event-based flows",
        "span": "A form, stage change or product event starts the work."
      },
      {
        "small": "Sync",
        "strong": "CRM and data movement",
        "span": "Records stay current across the tools your team already uses."
      },
      {
        "small": "Act",
        "strong": "Reliable next steps",
        "span": "Tasks, messages and enrichments fire without a manual export."
      },
      {
        "small": "Observe",
        "strong": "Flows you can debug",
        "span": "Failures are visible, owned and easy to pause."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "n8n workflows with an owner, a trigger and a <span>failure path.</span>",
    "work_copy": "A workflow is only useful if the team can tell what it does and what happens when a step fails. We build for that from the start.",
    "work_image": "/assets/images/Growth-System.png",
    "work_image_alt": "Workflow architecture across SaaS tools",
    "features": [
      {
        "icon": "bi-plug",
        "title": "API and webhook connections",
        "text": "Link forms, CRM, product events and communication tools through stable triggers."
      },
      {
        "icon": "bi-arrow-repeat",
        "title": "CRM sync",
        "text": "Create and update records so sales and success are not reconciling spreadsheets."
      },
      {
        "icon": "bi-stars",
        "title": "AI steps inside the flow",
        "text": "Add enrichment, classification or drafting where a model is useful and a person can review."
      },
      {
        "icon": "bi-exclamation-triangle",
        "title": "Error handling",
        "text": "Alert an owner, retry safely and keep a log when a step does not complete."
      }
    ],
    "process_title": "Map the handoff, then <span>replace it with a workflow.</span>",
    "process_copy": "We document the manual step, the systems involved and the exception cases before building in n8n.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Find the handoff",
        "text": "Identify the copy-paste, export or “someone remembers to update CRM” step.",
        "tags": [
          "Handoffs",
          "Tools",
          "Owners"
        ],
        "output": "Workflow brief"
      },
      {
        "icon": "bi-diagram-3",
        "title": "Specify the flow",
        "text": "Define trigger, payload, branches, AI steps and what a failure should do.",
        "tags": [
          "Trigger",
          "Payload",
          "Exceptions"
        ],
        "output": "n8n specification"
      },
      {
        "icon": "bi-tools",
        "title": "Build in n8n",
        "text": "Implement, test with real payloads and confirm the CRM or destination is correct.",
        "tags": [
          "n8n",
          "Testing",
          "CRM"
        ],
        "output": "Production workflow"
      },
      {
        "icon": "bi-journal-text",
        "title": "Document and monitor",
        "text": "Leave the team with a map of the flow, how to pause it and who gets the alert.",
        "tags": [
          "Docs",
          "Alerts",
          "Ownership"
        ],
        "output": "Operable automation"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-link-45deg",
        "title": "Tools that stay in sync",
        "text": "A change in one system shows up where the next team needs it."
      },
      {
        "icon": "bi-hourglass-split",
        "title": "Fewer manual handoffs",
        "text": "The repeated export-and-update loop is no longer a person’s job."
      },
      {
        "icon": "bi-eye",
        "title": "Automation you can trust",
        "text": "The team can see, pause and repair a workflow without starting over."
      }
    ],
    "related": [
      "lead-generation",
      "gohighlevel",
      "ai-automation"
    ]
  },
  "gohighlevel": {
    "file": "/services/gohighlevel",
    "no": "09",
    "type": "GoHighLevel",
    "icon": "bi-kanban",
    "title": "GHL CRM & automation",
    "card": "Turn GoHighLevel into a lead, pipeline, communication and conversion system built around your sales process.",
    "meta": "Turn GoHighLevel into a lead, pipeline, communication and conversion system built around your sales process.",
    "kicker": "GoHighLevel",
    "headline": "GoHighLevel configured around <span>how you sell.</span>",
    "lead": "We turn GoHighLevel into the system for pipelines, email and SMS, funnels, appointments and follow-up, shaped to your sales process instead of a default template.",
    "image": "/assets/images/Start-conversation.png",
    "image_alt": "Team configuring a GoHighLevel sales process",
    "caption_small": "GoHighLevel",
    "caption_strong": "Pipelines, messaging, funnels and booking",
    "float_label": "Primary outcome",
    "float_value": "Conversion system",
    "proof": [
      {
        "strong": "Pipelines",
        "span": "Sales stages"
      },
      {
        "strong": "SMS",
        "span": "Email and text"
      },
      {
        "strong": "Booking",
        "span": "Appointments"
      }
    ],
    "cta": "Optimize GHL",
    "contact": "CRM, GHL & RevOps",
    "bridge": "GoHighLevel works best when lead generation and n8n feed it, so capture, data and follow-up stay one motion.",
    "signals": [
      {
        "small": "Pipeline",
        "strong": "Stages that match sales",
        "span": "Opportunities move the way your team actually works a deal."
      },
      {
        "small": "Message",
        "strong": "Email and SMS",
        "span": "Follow-up is timely, relevant and tied to pipeline stage."
      },
      {
        "small": "Convert",
        "strong": "Funnels and forms",
        "span": "Capture pages hand a complete record into the pipeline."
      },
      {
        "small": "Book",
        "strong": "Appointments",
        "span": "Qualified leads can schedule without a manual back-and-forth."
      }
    ],
    "work_kicker": "What we build",
    "work_title": "A GoHighLevel account your team can <span>operate, not just log into.</span>",
    "work_copy": "Most GHL setups collect features. We configure the pipelines, communication, funnels and calendars around one sales motion and the definitions RevOps needs.",
    "work_image": "/assets/images/hero-services.png",
    "work_image_alt": "Sales pipeline and communication system",
    "features": [
      {
        "icon": "bi-kanban",
        "title": "Pipeline design",
        "text": "Stages, required fields and ownership that reflect how a deal moves from new lead to won."
      },
      {
        "icon": "bi-chat-dots",
        "title": "Email and SMS",
        "text": "Stage-based conversations that follow up without sounding like a generic blast."
      },
      {
        "icon": "bi-window",
        "title": "Funnels and forms",
        "text": "Capture experiences that write clean opportunities into the right pipeline."
      },
      {
        "icon": "bi-calendar-check",
        "title": "Appointments",
        "text": "Booking, reminders and no-show follow-up connected to the opportunity record."
      }
    ],
    "process_title": "Configure GHL around the <span>sales motion first.</span>",
    "process_copy": "We map how you sell, then build pipelines, messaging, funnels and calendars to support that motion.",
    "steps": [
      {
        "icon": "bi-search",
        "title": "Map the sales motion",
        "text": "Document stages, owners, speed-to-lead expectations and the messages already working.",
        "tags": [
          "Stages",
          "Owners",
          "SLA"
        ],
        "output": "GHL blueprint"
      },
      {
        "icon": "bi-kanban",
        "title": "Build the pipeline",
        "text": "Configure stages, fields, pipelines and the views the team will live in.",
        "tags": [
          "Pipelines",
          "Fields",
          "Views"
        ],
        "output": "Working CRM"
      },
      {
        "icon": "bi-lightning-charge",
        "title": "Add communication",
        "text": "Connect funnels, email, SMS, calendars and the automations each stage needs.",
        "tags": [
          "Funnels",
          "SMS",
          "Booking"
        ],
        "output": "Conversion workflows"
      },
      {
        "icon": "bi-people",
        "title": "Enable the team",
        "text": "Train owners on daily use, reporting and what not to change without a reason.",
        "tags": [
          "Training",
          "Reporting",
          "Governance"
        ],
        "output": "A system the team runs"
      }
    ],
    "outcomes": [
      {
        "icon": "bi-kanban",
        "title": "A pipeline people trust",
        "text": "Every opportunity has a stage, an owner and the fields sales needs."
      },
      {
        "icon": "bi-chat-left-text",
        "title": "Follow-up that matches the deal",
        "text": "Email and SMS respond to where the buyer actually is."
      },
      {
        "icon": "bi-calendar2-check",
        "title": "More conversations booked",
        "text": "Qualified leads can move from interest to a meeting inside the same system."
      }
    ],
    "related": [
      "lead-generation",
      "n8n",
      "revops"
    ]
  }
} as Record<string, ServiceItem>;

export type ServiceSlug = string;

export const serviceSlugs = Object.keys(serviceCatalog);

export function getService(slug: string): ServiceItem | undefined {
  return serviceCatalog[slug];
}

export function serviceHref(slug: string) {
  return `/services/${slug}`;
}
