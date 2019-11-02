import { MentionsInput, Mention } from "react-mentions";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const Section = styled.section`
  & textarea::-webkit-input-placeholder {
    font-style: italic;
    font-size: 0.9rem;
    padding: 0.1rem;
  }
`;

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value || "",
      error: false
    };
  }

  componentDidMount() {
    this.setState({
      error: false
    });
  }

  clearError = () => {
    ReactTooltip.hide(this.tooltip);
  };

  handleEnterKey = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (this.validate()) {
        this.props.setValue();
      }
    }
  };

  refreshState = () => {
    this.setState({ text: "" });
  };

  validate = () => {
    if (this.state.text.trim()) {
      this.setState(
        {
          error: false
        },
        () => {
          ReactTooltip.hide(this.tooltip);
        }
      );
      return true;
    } else {
      this.setState(
        {
          error: true
        },
        () => {
          ReactTooltip.show(this.tooltip);
        }
      );
      return false;
    }
  };

  textareaInput = () => {
    return (
      <MentionsInput
        data-enable-grammarly={false}
        placeholder={this.props.placeholder}
        autoFocus={this.props.autoFocus || true}
        singleLine={false}
        onKeyPress={this.handleEnterKey}
        style={this.props.style}
        ref={this.props.innerRef}
        disabled={this.props.disabled}
        value={this.state.text}
        onBlur={this.clearError}
        onChange={e => {
          this.setState(
            {
              text: e.target.value,
              error: false
            },
            () => {
              ReactTooltip.hide(this.tooltip);
              this.props.onChangeCB();
            }
          );
        }}
      >
        <Mention trigger="@" />
      </MentionsInput>
    );
  };

  render() {
    const showTooltip = this.state.error;
    if (!showTooltip) {
      return <Section>{this.textareaInput()}</Section>;
    }

    return (
      <Section>
        <span ref={ref => (this.tooltip = ref)} data-tip data-for="taskError">
          {this.textareaInput()}
          <ReactTooltip
            id="taskError"
            place="bottom"
            type="error"
            effect="solid"
          >
            <span>{this.props.errorMessage}</span>
          </ReactTooltip>
        </span>
      </Section>
    );
  }
}

Textarea.defaultProps = {
  errorMessage: ""
};

export default Textarea;
