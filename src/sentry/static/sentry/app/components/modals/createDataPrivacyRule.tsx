import React from 'react';

import {Organization, Project} from 'app/types';
import {Dialog} from 'app/components/dataPrivacyRules/dialog';

type Props = {
  header: React.ReactElement;
  body: React.ReactElement;
  organization: Organization;
  project: Project;
  onClose: () => void;
  closeModal: () => void;
};

class CreateDataPrivacyRule extends React.Component<Props> {
  render() {
    const {Body, Header, closeModal, ...props} = this.props;

    return <Dialog />;
  }
}

export default CreateDataPrivacyRule;
