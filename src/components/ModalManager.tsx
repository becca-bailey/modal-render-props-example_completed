import * as React from "react";

// This is the type of the props that will be passed to the children
export interface ModalManagerChildProps {
  showModal(): void;
  hideModal(): void;
  visible: boolean;
}

interface ModalManagerProps {
  children(props: ModalManagerChildProps);
}

interface ModalManagerState {
  visible: boolean;
}

class ModalManager extends React.Component<
  ModalManagerProps,
  ModalManagerState
> {
  public state = {
    visible: false
  };

  public render() {
    const { children } = this.props;
    return (
      <React.Fragment>{children(this.getStateAndHelpers())}</React.Fragment>
    );
  }

  private showModal = () => {
    this.setState({
      visible: true
    });
  };

  private hideModal = () => {
    this.setState({
      visible: false
    });
  };

  private getStateAndHelpers() {
    const { showModal, hideModal } = this;
    const { visible } = this.state;
    return {
      showModal,
      hideModal,
      visible
    };
  }
}

export default ModalManager;
