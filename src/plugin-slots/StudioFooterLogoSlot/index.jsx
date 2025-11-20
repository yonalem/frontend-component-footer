import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { Hyperlink, Image } from '@openedx/paragon';
import afrolmsLogo from './images/afrolms-logo2.png';
const StudioFooterLogoSlot = () => (
  <PluginSlot id="org.openedx.frontend.layout.studio_footer_logo.v1" idAliases={['studio_footer_logo_slot']}>
    <Hyperlink destination="https://openedx.org" className="float-right">
      <Image
        width="120px"
        alt="Powered by AfroLMS"
        src={afrolmsLogo}
      />
    </Hyperlink>
  </PluginSlot>
);

export default StudioFooterLogoSlot;
