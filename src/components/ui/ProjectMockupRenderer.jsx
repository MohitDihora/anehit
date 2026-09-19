import React from 'react';
import MockupMultiTranslate from './MockupMultiTranslate';
import MockupAgenStory from './MockupAgenStory';
import MockupImposter from './MockupImposter';
import MockupMedExplain from './MockupMedExplain';
import MockupOfficialCoders from './MockupOfficialCoders';
import MockupLumoraCafe from './MockupLumoraCafe';

export default function ProjectMockupRenderer({ projectId }) {
  switch (projectId) {
    case 'multitranslate-ai':
      return <MockupMultiTranslate />;
    case 'agenstory':
      return <MockupAgenStory />;
    case 'imposter':
      return <MockupImposter />;
    case 'medexplain-ai':
      return <MockupMedExplain />;
    case 'officialcoders':
      return <MockupOfficialCoders />;
    case 'lumora-cafe':
      return <MockupLumoraCafe />;
    default:
      return <MockupMultiTranslate />;
  }
}
