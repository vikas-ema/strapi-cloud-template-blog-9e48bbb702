import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutProfileAboutProfile extends Schema.Component {
  collectionName: 'components_about_profile_about_profiles';
  info: {
    displayName: 'aboutProfile';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface AdnlPersonasAdnlPersonas extends Schema.Component {
  collectionName: 'components_adnl_personas_adnl_personas';
  info: {
    displayName: 'adnlPersonas';
  };
  attributes: {
    redirectId: Attribute.Text;
    title: Attribute.Text;
    description: Attribute.Text;
    showWatchBtn: Attribute.Boolean;
    iconClass: Attribute.Text;
    containerClass: Attribute.Text;
    customTitleClass: Attribute.Text;
    contentConatinerClass: Attribute.Text;
    video: Attribute.Media;
    icon: Attribute.Media;
  };
}

export interface BlogContValBlogContVal extends Schema.Component {
  collectionName: 'components_blog_cont_val_blog_cont_vals';
  info: {
    displayName: 'blogContVal';
  };
  attributes: {
    blogId: Attribute.Text;
    introDesc: Attribute.Text;
    lngTrmMemDes: Attribute.Text;
    cpbltsVal: Attribute.Text;
    lngSecVal: Attribute.Text;
    chlgsDesc: Attribute.Text;
    para6: Attribute.Text;
    para7: Attribute.Text;
    para8: Attribute.Text;
    para9: Attribute.Text;
    para10: Attribute.Text;
    para11: Attribute.Text;
    para12: Attribute.Text;
    para13: Attribute.Text;
  };
}

export interface BlogListDataBlogListData extends Schema.Component {
  collectionName: 'components_blog_list_data_blog_list_data';
  info: {
    displayName: 'blogListData';
  };
  attributes: {
    blogListId: Attribute.Text;
    title: Attribute.Text;
    link: Attribute.Text;
    ctaText: Attribute.Text;
    blogId: Attribute.Text;
    bannerImg: Attribute.Media;
  };
}

export interface BuiltEmaPointsBuiltEmaPoints extends Schema.Component {
  collectionName: 'components_built_ema_points_built_ema_points';
  info: {
    displayName: 'builtEmaPoints';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    pointsImage: Attribute.Media;
  };
}

export interface BulletPointsBulletPoints extends Schema.Component {
  collectionName: 'components_bullet_points_bullet_points';
  info: {
    displayName: 'bulletPoints';
  };
  attributes: {
    title: Attribute.Text;
    iconClassName: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface BxContBxCont extends Schema.Component {
  collectionName: 'components_bx_cont_bx_conts';
  info: {
    displayName: 'bxCont';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface CompanyTextCompanyText extends Schema.Component {
  collectionName: 'components_company_text_company_texts';
  info: {
    displayName: 'companyText';
  };
  attributes: {
    title: Attribute.Text;
    redirectLink: Attribute.Text;
  };
}

export interface CustStrsDtListCustStrsDtList extends Schema.Component {
  collectionName: 'components_cust_strs_dt_list_cust_strs_dt_lists';
  info: {
    displayName: 'custStrsDtList';
  };
  attributes: {
    custStoriesid: Attribute.Text;
    title: Attribute.Text;
    link: Attribute.Text;
    ctaText: Attribute.Text;
    customerStoriesId: Attribute.Text;
    bannerImg: Attribute.Media;
  };
}

export interface CustomerListCustomerList extends Schema.Component {
  collectionName: 'components_customer_list_customer_lists';
  info: {
    displayName: 'customerList';
  };
  attributes: {
    title: Attribute.Text;
    iconClassName: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface DataData extends Schema.Component {
  collectionName: 'components_data_data';
  info: {
    displayName: 'data';
    description: '';
  };
  attributes: {
    custStrsId: Attribute.Text;
    whPprHead: Attribute.Text;
    whPprSHead: Attribute.Text;
    desc1: Attribute.Text;
    desc2: Attribute.Text;
    desc4: Attribute.Text;
    scndHdrSec: Attribute.Text;
    custSprtDesc: Attribute.Text;
    custSprtPara1: Attribute.Text;
    custSprtPara2: Attribute.Text;
    custPara2: Attribute.Text;
    quoteMsg: Attribute.Text;
    quoteAthr: Attribute.Text;
    custSprtPara3: Attribute.Text;
    addUser: Attribute.Text;
    userQuotes: Attribute.Text;
    siteLink: Attribute.Text;
    custPara3: Attribute.Text;
    secSecnPara3: Attribute.Text;
    custPara4: Attribute.Text;
    about: Attribute.Text;
    extraGraphText: Attribute.Text;
    aboutDesc: Attribute.Text;
    industry: Attribute.Text;
    industryDesc: Attribute.Text;
    featuringName: Attribute.Text;
    boxContHdr: Attribute.Text;
    featureDesig: Attribute.Text;
    bxCont: Attribute.Component<'bx-cont.bx-cont', true>;
    logo: Attribute.Media;
    featureImg: Attribute.Media;
    custChatImg: Attribute.Media;
    extraGraphImg: Attribute.Media;
    desc3: Attribute.Text;
  };
}

export interface FaqListFaqList extends Schema.Component {
  collectionName: 'components_faq_list_faq_lists';
  info: {
    displayName: 'faqList';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface FooterHeadFooterHead extends Schema.Component {
  collectionName: 'components_footer_head_footer_heads';
  info: {
    displayName: 'footerHead';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface FooterSectionDesktop1FooterSectionDesktop1
  extends Schema.Component {
  collectionName: 'components_footer_section_desktop1_footer_section_desktop1s';
  info: {
    displayName: 'footerSectionDesktop1';
  };
  attributes: {
    title: Attribute.Text;
    redirectLink: Attribute.Text;
  };
}

export interface FooterSectionDesktop2FooterSectionDesktop2
  extends Schema.Component {
  collectionName: 'components_footer_section_desktop2_footer_section_desktop2s';
  info: {
    displayName: 'footerSectionDesktop2';
  };
  attributes: {
    title: Attribute.Text;
    redirectLink: Attribute.Text;
  };
}

export interface FusionModelValuesFusionModelValues extends Schema.Component {
  collectionName: 'components_fusion_model_values_fusion_model_values';
  info: {
    displayName: 'fusionModelValues';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface GraphChipContentGraphChipContent extends Schema.Component {
  collectionName: 'components_graph_chip_content_graph_chip_contents';
  info: {
    displayName: 'graphChipContent';
  };
  attributes: {
    chipValue: Attribute.Text;
  };
}

export interface GraphRoleContGraphRoleCont extends Schema.Component {
  collectionName: 'components_graph_role_cont_graph_role_conts';
  info: {
    displayName: 'graphRoleCont';
  };
  attributes: {
    roleName: Attribute.Text;
    roleImg: Attribute.Media;
  };
}

export interface GreenBoxContentGreenBoxContent extends Schema.Component {
  collectionName: 'components_green_box_content_green_box_contents';
  info: {
    displayName: 'greenBoxContent';
  };
  attributes: {
    title: Attribute.Text;
    hoverFirstText: Attribute.Text;
    hoverSecondLine: Attribute.Text;
    buttonText: Attribute.Text;
    redirectLink: Attribute.Text;
  };
}

export interface HeroTextPromptsHeroTextPrompts extends Schema.Component {
  collectionName: 'components_hero_text_prompts_hero_text_prompts';
  info: {
    displayName: 'heroTextPrompts';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface IntroBulletPointsIntroBulletPoints extends Schema.Component {
  collectionName: 'components_intro_bullet_points_intro_bullet_points';
  info: {
    displayName: 'introBulletPoints';
  };
  attributes: {
    title: Attribute.Text;
    iconClassName: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface InvestorsLogoInvestorsLogo extends Schema.Component {
  collectionName: 'components_investors_logo_investors_logos';
  info: {
    displayName: 'investorsLogo';
  };
  attributes: {
    className: Attribute.Text;
    logo: Attribute.Media;
  };
}

export interface LeadershipBiosLeadershipBios extends Schema.Component {
  collectionName: 'components_leadership_bios_leadership_bios';
  info: {
    displayName: 'leadershipBios';
  };
  attributes: {
    name: Attribute.Text;
    designation: Attribute.Text;
    designationMobile: Attribute.Text;
    profilePic: Attribute.Media;
    aboutProfile: Attribute.Component<'about-profile.about-profile', true>;
  };
}

export interface LookingAheadDescMobLookingAheadDescMob
  extends Schema.Component {
  collectionName: 'components_looking_ahead_desc_mob_looking_ahead_desc_mobs';
  info: {
    displayName: 'lookingAheadDescMob';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface LookingAheadDescLookingAheadDesc extends Schema.Component {
  collectionName: 'components_looking_ahead_desc_looking_ahead_descs';
  info: {
    displayName: 'lookingAheadDesc';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface LowestCircleBadgeImageLowestCircleBadgeImage
  extends Schema.Component {
  collectionName: 'components_lowest_circle_badge_image_lowest_circle_badge_images';
  info: {
    displayName: 'lowestCircleBadgeImage';
  };
  attributes: {
    badgeIcon: Attribute.Media;
  };
}

export interface MiddleGraphMobileMiddleGraphMobile extends Schema.Component {
  collectionName: 'components_middle_graph_mobile_middle_graph_mobiles';
  info: {
    displayName: 'middleGraphMobile';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface NewsListDataNewsListData extends Schema.Component {
  collectionName: 'components_news_list_data_news_list_data';
  info: {
    displayName: 'newsListData';
    description: '';
  };
  attributes: {
    blogListId: Attribute.Text;
    title: Attribute.Text;
    link: Attribute.Text;
    ctaText: Attribute.Text;
    blogId: Attribute.Text;
    bannerImg: Attribute.Media;
    className: Attribute.Text;
    isLink: Attribute.Boolean;
  };
}

export interface OurCustomerOurCustomer extends Schema.Component {
  collectionName: 'components_our_customer_our_customers';
  info: {
    displayName: 'ourCustomer';
  };
  attributes: {};
}

export interface OurValueContentOurValueContent extends Schema.Component {
  collectionName: 'components_our_value_content_our_value_contents';
  info: {
    displayName: 'ourValueContent';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    ourValueKey: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface PartnerLogoPartnerLogo extends Schema.Component {
  collectionName: 'components_partner_logo_partner_logos';
  info: {
    displayName: 'partnerLogo';
  };
  attributes: {};
}

export interface PersonaInfoPersonaInfo extends Schema.Component {
  collectionName: 'components_persona_info_persona_infos';
  info: {
    displayName: 'personaInfo';
  };
  attributes: {
    redirectId: Attribute.Text;
    title: Attribute.Text;
    description: Attribute.Text;
    showWatchBtn: Attribute.Boolean;
    iconClass: Attribute.Text;
    containerClass: Attribute.Text;
    customTitleClass: Attribute.Text;
    contentConatinerClass: Attribute.Text;
    video: Attribute.Media;
    icon: Attribute.Media;
  };
}

export interface PersonaQuotesDataPersonaQuotesData extends Schema.Component {
  collectionName: 'components_persona_quotes_data_persona_quotes_data';
  info: {
    displayName: 'personaQuotesData';
  };
  attributes: {
    quotes: Attribute.Text;
    quotesSubTitle: Attribute.Text;
  };
}

export interface PersonaSupportContentPersonaSupportContent
  extends Schema.Component {
  collectionName: 'components_persona_support_content_persona_support_contents';
  info: {
    displayName: 'personaSupportContent';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    showVideo: Attribute.Boolean;
    customerVideo: Attribute.Media;
    sideBannerImg: Attribute.Media;
  };
}

export interface PersonasDetailsPersonasDetails extends Schema.Component {
  collectionName: 'components_personas_details_personas_details';
  info: {
    displayName: 'personasDetails';
  };
  attributes: {
    sideBannerClass: Attribute.Text;
    moreClients: Attribute.Text;
    isQuotesVisible: Attribute.Boolean;
    personaInfo: Attribute.Component<'persona-info.persona-info'>;
    sideBanner: Attribute.Media;
    customerList: Attribute.Component<'customer-list.customer-list', true>;
    sideBannerMobile: Attribute.Media;
    personaQuotesData: Attribute.Component<'persona-quotes-data.persona-quotes-data'>;
    bulletPoints: Attribute.Component<'bullet-points.bullet-points', true>;
  };
}

export interface ProdVidListDataProdVidListData extends Schema.Component {
  collectionName: 'components_prod_vid_list_data_prod_vid_list_data';
  info: {
    displayName: 'prodVidListData';
  };
  attributes: {
    prodVidId: Attribute.Text;
    title: Attribute.Text;
    videoUrl: Attribute.Text;
    bannerImg: Attribute.Media;
    vidUrl: Attribute.Media;
  };
}

export interface QuotesDataQuotesData extends Schema.Component {
  collectionName: 'components_quotes_data_quotes_data';
  info: {
    displayName: 'quotesData';
  };
  attributes: {
    quotes: Attribute.Text;
    quotesSubTitle: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SolutionTextSolutionText extends Schema.Component {
  collectionName: 'components_solution_text_solution_texts';
  info: {
    displayName: 'solutionText';
  };
  attributes: {
    title: Attribute.Text;
    redirectLink: Attribute.Text;
  };
}

export interface SpcldPersonasDetsSpcldPersonasDets extends Schema.Component {
  collectionName: 'components_spcld_personas_dets_spcld_personas_dets';
  info: {
    displayName: 'spcldPersonasDets';
    description: '';
  };
  attributes: {
    sideBannerClass: Attribute.Text;
    moreClients: Attribute.Text;
    isQuotesVisible: Attribute.Boolean;
    personaInfo: Attribute.Component<'persona-info.persona-info'>;
    sideBanner: Attribute.Media;
    customerList: Attribute.Component<'customer-list.customer-list', true>;
    sideBannerMobile: Attribute.Media;
    personaQuotesData: Attribute.Component<'quotes-data.quotes-data'>;
    bulletPoints: Attribute.Component<'bullet-points.bullet-points', true>;
  };
}

export interface SpecialPersonaListSpecialPersonaList extends Schema.Component {
  collectionName: 'components_special_persona_list_special_persona_lists';
  info: {
    displayName: 'SpecialPersonaList';
  };
  attributes: {};
}

export interface SpecialzedPersonasSpecialzedPersonas extends Schema.Component {
  collectionName: 'components_specialzed_personas_specialzed_personas';
  info: {
    displayName: 'specialzedPersonas';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    showVideo: Attribute.Boolean;
    customerVideo: Attribute.Media;
    sideBannerImg: Attribute.Media;
  };
}

export interface TaglineContentTaglineContent extends Schema.Component {
  collectionName: 'components_tagline_content_tagline_contents';
  info: {
    displayName: 'taglineContent';
    description: '';
  };
  attributes: {
    tagline: Attribute.Text;
    taglineImage: Attribute.Media;
  };
}

export interface TaglineTagline extends Schema.Component {
  collectionName: 'components_tagline_taglines';
  info: {
    displayName: 'tagline';
  };
  attributes: {
    tagline: Attribute.Text;
    taglineImage: Attribute.Media;
  };
}

export interface WhitePprListDataWhitePprListData extends Schema.Component {
  collectionName: 'components_white_ppr_list_data_white_ppr_list_data';
  info: {
    displayName: 'whitePprListData';
  };
  attributes: {
    whitePprListId: Attribute.Text;
    title: Attribute.Text;
    ctaText: Attribute.Text;
    link: Attribute.Text;
    bannerImg: Attribute.Media;
    dwnldData: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-profile.about-profile': AboutProfileAboutProfile;
      'adnl-personas.adnl-personas': AdnlPersonasAdnlPersonas;
      'blog-cont-val.blog-cont-val': BlogContValBlogContVal;
      'blog-list-data.blog-list-data': BlogListDataBlogListData;
      'built-ema-points.built-ema-points': BuiltEmaPointsBuiltEmaPoints;
      'bullet-points.bullet-points': BulletPointsBulletPoints;
      'bx-cont.bx-cont': BxContBxCont;
      'company-text.company-text': CompanyTextCompanyText;
      'cust-strs-dt-list.cust-strs-dt-list': CustStrsDtListCustStrsDtList;
      'customer-list.customer-list': CustomerListCustomerList;
      'data.data': DataData;
      'faq-list.faq-list': FaqListFaqList;
      'footer-head.footer-head': FooterHeadFooterHead;
      'footer-section-desktop1.footer-section-desktop1': FooterSectionDesktop1FooterSectionDesktop1;
      'footer-section-desktop2.footer-section-desktop2': FooterSectionDesktop2FooterSectionDesktop2;
      'fusion-model-values.fusion-model-values': FusionModelValuesFusionModelValues;
      'graph-chip-content.graph-chip-content': GraphChipContentGraphChipContent;
      'graph-role-cont.graph-role-cont': GraphRoleContGraphRoleCont;
      'green-box-content.green-box-content': GreenBoxContentGreenBoxContent;
      'hero-text-prompts.hero-text-prompts': HeroTextPromptsHeroTextPrompts;
      'intro-bullet-points.intro-bullet-points': IntroBulletPointsIntroBulletPoints;
      'investors-logo.investors-logo': InvestorsLogoInvestorsLogo;
      'leadership-bios.leadership-bios': LeadershipBiosLeadershipBios;
      'looking-ahead-desc-mob.looking-ahead-desc-mob': LookingAheadDescMobLookingAheadDescMob;
      'looking-ahead-desc.looking-ahead-desc': LookingAheadDescLookingAheadDesc;
      'lowest-circle-badge-image.lowest-circle-badge-image': LowestCircleBadgeImageLowestCircleBadgeImage;
      'middle-graph-mobile.middle-graph-mobile': MiddleGraphMobileMiddleGraphMobile;
      'news-list-data.news-list-data': NewsListDataNewsListData;
      'our-customer.our-customer': OurCustomerOurCustomer;
      'our-value-content.our-value-content': OurValueContentOurValueContent;
      'partner-logo.partner-logo': PartnerLogoPartnerLogo;
      'persona-info.persona-info': PersonaInfoPersonaInfo;
      'persona-quotes-data.persona-quotes-data': PersonaQuotesDataPersonaQuotesData;
      'persona-support-content.persona-support-content': PersonaSupportContentPersonaSupportContent;
      'personas-details.personas-details': PersonasDetailsPersonasDetails;
      'prod-vid-list-data.prod-vid-list-data': ProdVidListDataProdVidListData;
      'quotes-data.quotes-data': QuotesDataQuotesData;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'solution-text.solution-text': SolutionTextSolutionText;
      'spcld-personas-dets.spcld-personas-dets': SpcldPersonasDetsSpcldPersonasDets;
      'special-persona-list.special-persona-list': SpecialPersonaListSpecialPersonaList;
      'specialzed-personas.specialzed-personas': SpecialzedPersonasSpecialzedPersonas;
      'tagline-content.tagline-content': TaglineContentTaglineContent;
      'tagline.tagline': TaglineTagline;
      'white-ppr-list-data.white-ppr-list-data': WhitePprListDataWhitePprListData;
    }
  }
}
