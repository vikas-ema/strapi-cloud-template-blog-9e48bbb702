import type { Schema, Attribute } from '@strapi/strapi';

export interface BuiltEmaPointsBuiltEmaPoints extends Schema.Component {
  collectionName: 'components_built_ema_points_built_ema_points';
  info: {
    displayName: 'builtEmaPoints';
  };
  attributes: {
    title: Attribute.Text;
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

export interface TaglineContentTaglineContent extends Schema.Component {
  collectionName: 'components_tagline_content_tagline_contents';
  info: {
    displayName: 'taglineContent';
  };
  attributes: {
    tagline: Attribute.Component<'tagline.tagline'>;
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
      'built-ema-points.built-ema-points': BuiltEmaPointsBuiltEmaPoints;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'tagline-content.tagline-content': TaglineContentTaglineContent;
      'tagline.tagline': TaglineTagline;
    }
  }
}
