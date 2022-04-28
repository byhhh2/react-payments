import PropTypes from 'prop-types';

const propTypes = {
  /**
   * className of FormInput
   */
  className: PropTypes.string,
  /**
   * category of FormInput
   */
  item: PropTypes.string.isRequired,
  /**
   * name of FormInput
   */
  inputTitle: PropTypes.string.isRequired,
  /**
   * information of input tags in FormInput
   */
  inputInfoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      className: PropTypes.string,
    }),
  ).isRequired,
  /**
   * card information for input value
   */
  cardInfo: PropTypes.shape({
    number: PropTypes.object.isRequired,
    expiryDate: PropTypes.object.isRequired,
    ownerName: PropTypes.string,
    privacyCode: PropTypes.string.isRequired,
    password: PropTypes.object.isRequired,
  }),
  /**
   * handle change event of input tag
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  className: '',
  cardInfo: {},
  onChange: undefined,
};

// component
const FormInput = ({
  className,
  item,
  inputTitle,
  inputInfoList,
  cardInfo,
  onChange,
  children,
}) => {
  return (
    <div className="input-container">
      <label className="input-title">{inputTitle}</label>
      <div className={`input-box ${className}`}>
        {inputInfoList.map(
          ({ id, name, type, className = '', placeholder = '', isDisabled, maxLength }) => (
            <input
              key={id}
              name={name}
              type={type}
              className={`input-basic ${className}`}
              style={{ color: cardInfo.theme }}
              placeholder={placeholder}
              value={typeof cardInfo[item] === 'object' ? cardInfo[item][name] : cardInfo[item]}
              onChange={(e) => onChange(e, item)}
              disabled={isDisabled}
              maxLength={maxLength}
            />
          ),
        )}
        {children}
      </div>
    </div>
  );
};

FormInput.defaultProps = defaultProps;
FormInput.propTypes = propTypes;

export default FormInput;
