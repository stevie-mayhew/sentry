import React from 'react';

import {Organization, Project} from 'app/types';
import {Dialog} from 'app/components/dataPrivacyRules/dialog';

type DialogProps = React.ComponentProps<typeof Dialog>;
type Rule = NonNullable<DialogProps['rule']>;

type Props = {
  organization: Organization;
  project: Project;
  eventId: string;
  onClose: () => void;
};

class CreateDataPrivacyRule extends React.Component<Props> {
  handleSave = async (rule: Rule) => {
    console.log('rule', rule);
    return new Promise(resolve => resolve(undefined));
  };

  render() {
    const {onClose, eventId, ...props} = this.props;

    return <Dialog onSaveRule={this.handleSave} onClose={onClose} />;
  }
}

export default CreateDataPrivacyRule;
