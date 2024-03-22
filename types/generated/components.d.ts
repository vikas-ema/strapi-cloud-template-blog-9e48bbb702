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

export interface DesktopGraphLeftSectionDesktopGraphLeftSection
  extends Schema.Component {
  collectionName: 'components_desktop_graph_left_section_desktop_graph_left_sections';
  info: {
    displayName: 'desktopGraphLeftSection';
  };
  attributes: {
    header: Attribute.Text;
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

export interface PartnerLogoPartnerLogo extends Schema.Component {
  collectionName: 'components_partner_logo_partner_logos';
  info: {
    displayName: 'partnerLogo';
  };
  attributes: {};
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-profile.about-profile': AboutProfileAboutProfile;
      'built-ema-points.built-ema-points': BuiltEmaPointsBuiltEmaPoints;
      'company-text.company-text': CompanyTextCompanyText;
      'desktop-graph-left-section.desktop-graph-left-section': DesktopGraphLeftSectionDesktopGraphLeftSection;
      'footer-head.footer-head': FooterHeadFooterHead;
      'footer-section-desktop1.footer-section-desktop1': FooterSectionDesktop1FooterSectionDesktop1;
      'footer-section-desktop2.footer-section-desktop2': FooterSectionDesktop2FooterSectionDesktop2;
      'fusion-model-values.fusion-model-values': FusionModelValuesFusionModelValues;
      'graph-chip-content.graph-chip-content': GraphChipContentGraphChipContent;
      'graph-role-cont.graph-role-cont': GraphRoleContGraphRoleCont;
      'green-box-content.green-box-content': GreenBoxContentGreenBoxContent;
      'leadership-bios.leadership-bios': LeadershipBiosLeadershipBios;
      'lowest-circle-badge-image.lowest-circle-badge-image': LowestCircleBadgeImageLowestCircleBadgeImage;
      'middle-graph-mobile.middle-graph-mobile': MiddleGraphMobileMiddleGraphMobile;
      'partner-logo.partner-logo': PartnerLogoPartnerLogo;
      'persona-support-content.persona-support-content': PersonaSupportContentPersonaSupportContent;
      'quotes-data.quotes-data': QuotesDataQuotesData;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'solution-text.solution-text': SolutionTextSolutionText;
      'specialzed-personas.specialzed-personas': SpecialzedPersonasSpecialzedPersonas;
      'tagline-content.tagline-content': TaglineContentTaglineContent;
      'tagline.tagline': TaglineTagline;
    }
  }
}
