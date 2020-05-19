import React from 'react';
import styled from '@emotion/styled';

import {IconInfo} from 'app/icons';
import {openCreateOwnershipRule} from 'app/actionCreators/modal';
import {t} from 'app/locale';
import Button from 'app/components/button';
import GuideAnchor from 'app/components/assistant/guideAnchor';
import Hovercard from 'app/components/hovercard';
import space from 'app/styles/space';
import {Project, Organization} from 'app/types';

import {Wrapper, Header, Heading} from './styles';

type Props = {
  project: Project;
  organization: Organization;
  issueId: string;
};

const OwnershipRules = ({project, organization, issueId}: Props) => {
  const handleOpenCreateOwnershipRule = () => {
    openCreateOwnershipRule({project, organization, issueId});
  };

  return (
    <Wrapper>
      <Header>
        <Heading>{t('Ownership Rules')}</Heading>
        <Hovercard
          body={
            <HelpfulBody>
              <p>
                {t(
                  'Ownership rules allow you to associate file paths and URLs to specific teams or users, so alerts can be routed to the right people.'
                )}
              </p>
              <Button
                href="https://docs.sentry.io/workflow/issue-owners/"
                priority="primary"
              >
                {t('Learn more')}
              </Button>
            </HelpfulBody>
          }
        >
          <IconInfo size="xs" />
        </Hovercard>
      </Header>
      <GuideAnchor target="owners" position="bottom" offset={space(3)}>
        <Button onClick={handleOpenCreateOwnershipRule} size="small">
          {t('Create Ownership Rule')}
        </Button>
      </GuideAnchor>
      <GuideAnchor target="owners" position="bottom" offset={space(3)}>
        <Button onClick={handleOpenCreateOwnershipRule} size="small">
          {t('Create Data Privacy Rule')}
        </Button>
      </GuideAnchor>
    </Wrapper>
  );
};

export {OwnershipRules};

const HelpfulBody = styled('div')`
  padding: ${space(1)};
  text-align: center;
`;
