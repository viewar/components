## Slider (BETAv)

### Props
```jsx
  static propTypes = {
    label:    PropTypes.string,
    value:    PropTypes.number,
    decimals: PropTypes.number,
    max:      PropTypes.number,
    min:      PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    label:    null,
    value:    null,
    decimals: 2,
    min:      0,
    max:      100,
    onChange: (value) => {
      this.setState({ value: value });
    },
  }
```

### TODO
* UNcontrolled version (inner state)

### Bugs

* Draghandler doesn't release ? soemtimes
* value > max
* value = min | max
