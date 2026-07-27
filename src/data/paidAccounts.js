const mainResultCrop = { x: 3.5, y: 26.4, width: 93, height: 32.5, sourceWidth: 591, sourceHeight: 1280 }

export const paidAccounts = [
  {
    slug: 'greener',
    client: 'Greener',
    title: 'Messaging, sales, hiring, video views, and page growth',
    period: 'Meta Ads Manager screenshots supplied in July 2026',
    role:
      'Campaign setup, audience and ad-set testing, budget monitoring, result analysis, and keep-or-pause decisions.',
    summary:
      'I tested several campaign jobs for Greener instead of forcing every ad into one objective. The screenshots cover messaging conversations, product sales, hiring, video views, and page growth. The strongest messaging example in this set produced 342 conversations at EGP 7.24 each.',
    evidenceNote:
      'These are separate campaign snapshots with different objectives and reporting windows. I do not blend them into one average because a conversation, a video view, and a page follow are not the same result.',
    highlights: [
      { value: '342', label: 'messaging conversations', note: 'EGP 7.24 each' },
      { value: '4,473', label: 'ThruPlays', note: 'EGP 0.0671 each' },
      { value: '261', label: 'follows or likes', note: 'EGP 2.02 each' },
    ],
    campaigns: [
      {
        title: 'Lead Acid Batteries CBO',
        objective: 'Messaging conversations',
        result: 342,
        resultLabel: 'conversations',
        cost: 7.24,
        costLabel: 'cost per conversation',
        spend: 2477.49,
        reach: 25813,
        impressions: 83945,
        summary:
          'This was the strongest messaging result in the Greener screenshots. It produced the highest conversation volume and the lowest campaign-level cost per conversation in this set.',
        decision:
          'Use this campaign as the account benchmark. Increase budget carefully while checking conversation quality, not volume alone.',
        evidence: {
          src: '/work/paid-ads/greener/lead-acid.jpeg',
          alt: 'Meta Ads Manager result for the Greener Lead Acid Batteries CBO campaign showing 342 messaging conversations at EGP 7.24 each from EGP 2,477.49 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Triple Re mo2 sales campaign',
        objective: 'Messaging conversations',
        result: 42,
        resultLabel: 'conversations',
        cost: 13.88,
        costLabel: 'cost per conversation',
        spend: 582.92,
        reach: 5812,
        impressions: 8943,
        summary:
          'This sales-focused campaign produced 42 conversations from EGP 582.92. The EGP 13.88 cost per conversation made it one of the more efficient messaging campaigns in the supplied set.',
        decision:
          'Keep testing this setup. New creative and audience variants should beat or match EGP 13.88 before receiving more budget.',
        evidence: {
          src: '/work/paid-ads/greener/triple-sales.jpeg',
          alt: 'Meta Ads Manager result for the Greener Triple Re mo2 sales campaign showing 42 messaging conversations at EGP 13.88 each from EGP 582.92 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Engagement campaign',
        objective: 'Messaging conversations',
        result: 82,
        resultLabel: 'conversations',
        cost: 32.09,
        costLabel: 'cost per conversation',
        spend: 2631.58,
        reach: 13215,
        impressions: 27070,
        summary:
          'This campaign generated 82 conversations and gave me a useful cost benchmark. At EGP 32.09 per conversation, it was not the strongest efficiency result in the account.',
        decision:
          'Review the audience and creative before spending more because stronger campaigns produced conversations at a lower cost.',
        evidence: {
          src: '/work/paid-ads/greener/engagement.jpeg',
          alt: 'Meta Ads Manager result for a Greener engagement campaign showing 82 messaging conversations at EGP 32.09 each from EGP 2,631.58 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Triple Re mo2 copy',
        objective: 'Messaging conversations',
        result: 23,
        resultLabel: 'conversations',
        cost: 32.23,
        costLabel: 'cost per conversation',
        spend: 741.29,
        reach: 6604,
        impressions: 9729,
        summary:
          'The copied campaign produced 23 conversations at EGP 32.23 each. I would review its audience and creative breakdown before putting more budget behind it.',
        decision:
          'Do not scale this version yet. Use the ad-set breakdown to find the stronger audience and remove wasted spend.',
        evidence: {
          src: '/work/paid-ads/greener/triple-copy.jpeg',
          alt: 'Meta Ads Manager result for the Greener Triple Re mo2 copy campaign showing 23 messaging conversations at EGP 32.23 each from EGP 741.29 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Hiring campaign',
        objective: 'Messaging conversations',
        result: 2,
        resultLabel: 'conversations',
        cost: 120.2,
        costLabel: 'cost per conversation',
        spend: 240.4,
        reach: 3847,
        impressions: 6033,
        summary:
          'This hiring test produced only two conversations at EGP 120.20 each. I am keeping it in the portfolio because weak tests matter too. This one was not ready to scale.',
        decision:
          'Pause and rebuild the offer or creative before another test. The current cost is too high for expansion.',
        evidence: {
          src: '/work/paid-ads/greener/hiring.jpeg',
          alt: 'Meta Ads Manager result for a Greener hiring campaign showing 2 messaging conversations at EGP 120.20 each from EGP 240.40 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Competitor video-view campaign',
        objective: 'ThruPlay video views',
        result: 4473,
        resultLabel: 'ThruPlays',
        cost: 0.0671,
        costLabel: 'cost per ThruPlay',
        spend: 300,
        reach: 4532,
        impressions: 6414,
        summary:
          'This campaign was built for video consumption, not messages. It generated 4,473 ThruPlays at EGP 0.0671 each from a fixed EGP 300 budget.',
        decision:
          'Use the viewers as a warm retargeting pool. Do not compare this cost with lead or messaging campaigns.',
        evidence: {
          src: '/work/paid-ads/greener/video-views.jpeg',
          alt: 'Meta Ads Manager result for a Greener video-view campaign showing 4,473 ThruPlays at EGP 0.0671 each from EGP 300 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Battarity page promotion',
        objective: 'Page follows or likes',
        result: 261,
        resultLabel: 'follows or likes',
        cost: 2.02,
        costLabel: 'cost per follow or like',
        spend: 526.32,
        reach: 3986,
        impressions: 5654,
        summary:
          'This campaign had an audience-growth job. It produced 261 follows or likes at EGP 2.02 each, so I keep it separate from lead and messaging results.',
        decision:
          'Keep this only when page growth is the objective. Judge future tests by follow quality and later engagement, not lead cost.',
        evidence: {
          src: '/work/paid-ads/greener/page-likes.jpeg',
          alt: 'Meta Ads Manager result for the Battarity page promotion showing 261 follows or likes at EGP 2.02 each from EGP 526.32 spend',
          crop: mainResultCrop,
        },
      },
    ],
    breakdowns: [
      {
        title: 'Triple Re mo2 ad-set and ad breakdown, part 1',
        src: '/work/paid-ads/greener/triple-breakdown-01.jpeg',
        alt: 'Meta Ads Manager breakdown showing Triple Re mo2 ad sets and messaging conversation results',
        crop: { x: 3.5, y: 24.5, width: 93, height: 69, sourceWidth: 906, sourceHeight: 1600 },
      },
      {
        title: 'Triple Re mo2 ad-set and ad breakdown, part 2',
        src: '/work/paid-ads/greener/triple-breakdown-02.jpeg',
        alt: 'Meta Ads Manager breakdown showing Triple Re mo2 ad and ad-set conversation costs',
        crop: { x: 3.5, y: 20, width: 93, height: 77, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: 'Triple Re mo2 creative breakdown',
        src: '/work/paid-ads/greener/triple-breakdown-03.jpeg',
        alt: 'Meta Ads Manager creative breakdown for Triple Re mo2 showing results for multiple ads',
        crop: { x: 3.5, y: 17.5, width: 93, height: 81, sourceWidth: 608, sourceHeight: 1280 },
      },
      {
        title: 'Triple Re mo2 copy breakdown, part 1',
        src: '/work/paid-ads/greener/triple-copy-breakdown-01.jpeg',
        alt: 'Meta Ads Manager breakdown for the Triple Re mo2 copy campaign showing ad-set and ad results',
        crop: { x: 3.5, y: 21.5, width: 93, height: 77, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: 'Triple Re mo2 copy breakdown, part 2',
        src: '/work/paid-ads/greener/triple-copy-breakdown-02.jpeg',
        alt: 'Meta Ads Manager breakdown for the Triple Re mo2 copy campaign showing additional ads and costs',
        crop: { x: 3.5, y: 21.5, width: 93, height: 77, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: 'Triple Re mo2 additional creative results',
        src: '/work/paid-ads/greener/triple-breakdown-04.jpeg',
        alt: 'Meta Ads Manager creative results for Triple Re mo2 showing messaging conversations and spend by ad',
        crop: { x: 3.5, y: 21.5, width: 93, height: 77, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: 'Lead Acid Batteries audience breakdown, part 1',
        src: '/work/paid-ads/greener/lead-acid-breakdown-01.jpeg',
        alt: 'Meta Ads Manager audience and ad breakdown for the Lead Acid Batteries campaign',
        crop: { x: 3.5, y: 21.5, width: 93, height: 77, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: 'Lead Acid Batteries audience breakdown, part 2',
        src: '/work/paid-ads/greener/lead-acid-breakdown-02.jpeg',
        alt: 'Meta Ads Manager audience breakdown showing 211 and 104 messaging conversations from separate Lead Acid Batteries ad sets',
        crop: { x: 3.5, y: 21.5, width: 93, height: 77, sourceWidth: 591, sourceHeight: 1280 },
      },
    ],
  },
  {
    slug: 'pea-learning',
    client: 'Pea Learning',
    title: 'Course inquiry campaigns across adult and children programs',
    period: 'Meta Ads Manager screenshots supplied in July 2026',
    role:
      'Campaign setup, audience comparison, creative testing, budget monitoring, performance review, and optimization decisions.',
    summary:
      'I ran course campaigns for data analysis, children programs, and the 3 Power Strategy offer. I compared messaging volume, cost per conversation, spend, reach, and impressions across audiences and creative variants. The strongest supplied campaign snapshot produced 419 conversations at EGP 9.55 each.',
    evidenceNote:
      'The campaign screens below are shown individually. The account overview records EGP 19,302.09 in total spend, but I do not use that figure to calculate a blended cost because the screenshots cover different campaigns and levels of the account.',
    highlights: [
      { value: '419', label: 'data analyst conversations', note: 'EGP 9.55 each' },
      { value: '391', label: '3 Power conversations', note: 'EGP 21.14 each' },
      { value: 'EGP 19,302.09', label: 'account spend shown', note: 'supplied overview' },
    ],
    campaigns: [
      {
        title: 'Data Analyst engagement',
        objective: 'Messaging conversations',
        result: 419,
        resultLabel: 'conversations',
        cost: 9.55,
        costLabel: 'cost per conversation',
        spend: 3999.85,
        reach: 64065,
        impressions: 114612,
        summary:
          'This was the highest-volume campaign in the Pea Learning screenshots. It generated 419 conversations at EGP 9.55 each from EGP 3,999.85 in spend.',
        decision:
          'Scale carefully while checking the quality of the conversations. Use EGP 9.55 as the main Data Analyst benchmark.',
        evidence: {
          src: '/work/paid-ads/pea-learning/data-analyst.jpeg',
          alt: 'Meta Ads Manager result for the Pea Learning Data Analyst engagement campaign showing 419 messaging conversations at EGP 9.55 each from EGP 3,999.85 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: '3 Power Strategy, new variant',
        objective: 'Messaging conversations',
        result: 391,
        resultLabel: 'conversations',
        cost: 21.14,
        costLabel: 'cost per conversation',
        spend: 8267.23,
        reach: 108245,
        impressions: 253522,
        summary:
          'This campaign delivered the widest reach and the highest messaging volume for the 3 Power offer. It generated 391 conversations at EGP 21.14 each.',
        decision:
          'Keep it as the scale case, but continue testing because another 3 Power campaign produced conversations at a lower cost.',
        evidence: {
          src: '/work/paid-ads/pea-learning/three-power-new.jpeg',
          alt: 'Meta Ads Manager result for the Pea Learning 3 Power Strategy new campaign showing 391 messaging conversations at EGP 21.14 each from EGP 8,267.23 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Data Analyst engagement, copy',
        objective: 'Messaging conversations',
        result: 282,
        resultLabel: 'conversations',
        cost: 10.85,
        costLabel: 'cost per conversation',
        spend: 3061.02,
        reach: 50984,
        impressions: 78425,
        summary:
          'The copied Data Analyst campaign produced 282 conversations at EGP 10.85 each. The result stayed close to the stronger Data Analyst campaign while working with a different campaign setup.',
        decision:
          'Keep it as a second working setup and compare conversation quality with the EGP 9.55 campaign before shifting budget.',
        evidence: {
          src: '/work/paid-ads/pea-learning/data-analyst-copy.jpeg',
          alt: 'Meta Ads Manager result for the Pea Learning Data Analyst engagement copy campaign showing 282 messaging conversations at EGP 10.85 each from EGP 3,061.02 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: '3 Power Strategy',
        objective: 'Messaging conversations',
        result: 170,
        resultLabel: 'conversations',
        cost: 9.03,
        costLabel: 'cost per conversation',
        spend: 1534.57,
        reach: 24836,
        impressions: 36828,
        summary:
          'This 3 Power campaign produced 170 conversations at EGP 9.03 each. It was the lowest campaign-level conversation cost in the Pea Learning screenshots.',
        decision:
          'Use this as the 3 Power efficiency benchmark and test whether it can hold that cost with a larger budget.',
        evidence: {
          src: '/work/paid-ads/pea-learning/three-power.jpeg',
          alt: 'Meta Ads Manager result for the Pea Learning 3 Power Strategy campaign showing 170 messaging conversations at EGP 9.03 each from EGP 1,534.57 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Children campaign',
        objective: 'Messaging conversations',
        result: 31,
        resultLabel: 'conversations',
        cost: 23.42,
        costLabel: 'cost per conversation',
        spend: 725.99,
        reach: 7081,
        impressions: 10172,
        summary:
          'This children-focused campaign produced 31 conversations at EGP 23.42 each. I would use it as a baseline for testing the next offer and creative angle.',
        decision:
          'Test a stronger offer and a new creative angle before scaling. The current result is a baseline, not a winner.',
        evidence: {
          src: '/work/paid-ads/pea-learning/children.jpeg',
          alt: 'Meta Ads Manager result for a Pea Learning children campaign showing 31 messaging conversations at EGP 23.42 each from EGP 725.99 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'WhatsApp offer campaign',
        objective: 'Messaging conversations',
        result: 23,
        resultLabel: 'conversations',
        cost: 24.79,
        costLabel: 'cost per conversation',
        spend: 570.08,
        reach: 4536,
        impressions: 7867,
        summary:
          'This WhatsApp offer campaign generated 23 conversations at EGP 24.79 each. The ad-level proof is included below so the campaign result can be checked against its creative breakdown.',
        decision:
          'Review the offer and ad-level breakdown before spending more. The result needs a stronger cost or better conversation quality.',
        evidence: {
          src: '/work/paid-ads/pea-learning/whatsapp.jpeg',
          alt: 'Meta Ads Manager result for a Pea Learning WhatsApp campaign showing 23 messaging conversations at EGP 24.79 each from EGP 570.08 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Children programming diploma',
        objective: 'Messaging conversations',
        result: 12,
        resultLabel: 'conversations',
        cost: 24.56,
        costLabel: 'cost per conversation',
        spend: 294.66,
        reach: 2063,
        impressions: 3098,
        summary:
          'This Arabic children programming offer produced 12 conversations at EGP 24.56 each. It is a smaller result, so I treat it as a test rather than a scale case.',
        decision:
          'Keep the learning, then revise the offer and creative. The sample is too small and the cost is not ready for scale.',
        evidence: {
          src: '/work/paid-ads/pea-learning/programming-diploma.jpeg',
          alt: 'Meta Ads Manager result for a Pea Learning children programming diploma campaign showing 12 messaging conversations at EGP 24.56 each from EGP 294.66 spend',
          crop: mainResultCrop,
        },
      },
      {
        title: 'Data Analysis new test',
        objective: 'Messaging conversations',
        result: 7,
        resultLabel: 'conversations',
        cost: 11.91,
        costLabel: 'cost per conversation',
        spend: 83.39,
        reach: 1636,
        impressions: 1737,
        summary:
          'This small Data Analysis test produced seven conversations from EGP 83.39. The EGP 11.91 cost was promising, but the sample was still too small to call it a scale result.',
        decision:
          'Run a controlled follow-up test to collect more conversations before making a scale decision.',
        evidence: {
          src: '/work/paid-ads/pea-learning/data-analysis-new.jpeg',
          alt: 'Meta Ads Manager result for a Pea Learning Data Analysis test showing 7 messaging conversations at EGP 11.91 each from EGP 83.39 spend',
          crop: mainResultCrop,
        },
      },
    ],
    breakdowns: [
      {
        title: 'Pea Learning account overview',
        src: '/work/paid-ads/pea-learning/account-overview.jpeg',
        alt: 'Meta Ads Manager overview for Pea Learning showing EGP 19,302.09 total account spend and a list of campaigns',
        crop: { x: 3.5, y: 19.5, width: 93, height: 77, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: 'WhatsApp offer ad breakdown',
        src: '/work/paid-ads/pea-learning/whatsapp-breakdown.jpeg',
        alt: 'Meta Ads Manager ad breakdown for the Pea Learning WhatsApp offer campaign',
        crop: { x: 3.5, y: 20, width: 93, height: 78, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: '3 Power Strategy new audience breakdown',
        src: '/work/paid-ads/pea-learning/three-power-new-breakdown.jpeg',
        alt: 'Meta Ads Manager audience breakdown for the Pea Learning 3 Power Strategy new campaign',
        crop: { x: 3.5, y: 27, width: 93, height: 70, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: '3 Power Strategy audience breakdown',
        src: '/work/paid-ads/pea-learning/three-power-breakdown.jpeg',
        alt: 'Meta Ads Manager audience breakdown for the Pea Learning 3 Power Strategy campaign',
        crop: { x: 3.5, y: 27, width: 93, height: 70, sourceWidth: 591, sourceHeight: 1280 },
      },
      {
        title: 'Data Analyst copy ad breakdown',
        src: '/work/paid-ads/pea-learning/data-analyst-copy-breakdown.jpeg',
        alt: 'Meta Ads Manager ad breakdown for the Pea Learning Data Analyst engagement copy campaign',
        crop: { x: 3.5, y: 20, width: 93, height: 78, sourceWidth: 591, sourceHeight: 1280 },
      },
    ],
  },
]

export const paidAccountCampaignCount = paidAccounts.reduce(
  (total, account) => total + account.campaigns.length,
  0,
)

export const messagingConversationCount = paidAccounts.reduce(
  (total, account) =>
    total +
    account.campaigns
      .filter((campaign) => campaign.objective === 'Messaging conversations')
      .reduce((campaignTotal, campaign) => campaignTotal + campaign.result, 0),
  0,
)
