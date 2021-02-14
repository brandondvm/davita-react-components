import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Counter from './components/Counter/Counter';
import Input from './components/Input/Input';
import RadioButtonGroup from './components/RadioButtonGroup/RadioButtonGroup';
import SegmentedController from './components/SegmentedController/SegmentedController';
import Stepper from './components/Stepper/Stepper';
import ReadOnlyInput from './components/ReadOnlyInput/ReadOnlyInput';

import './styles/styles.scss';

const radioGroupItems = [
  { id: 'radioOption1', label: 'Option 1', name: 'radiobuttongroup', value: 1, checked: true },
  { id: 'radioOption2', label: 'Option 2', name: 'radiobuttongroup', value: 2, checked: false },
  { id: 'radioOption3', label: 'Option 3', name: 'radiobuttongroup', value: 3, checked: false },
];

const segmentedControllerItems = [
  { id: "option1", label: "option 1", name: "segmentedControllerOption", value: 1, checked: true },
  { id: "option2", label: "option 2", name: "segmentedControllerOption", value: 2, checked: false },
  { id: "option3", label: "option 3", name: "segmentedControllerOption", value: 3, checked: false }
];

const handleRadioButtonClick = ({ value }) => {
  console.log('Radio Button: ', value);
}

const handleCheckboxClick = ({ label, isSelected }) => {
  console.log(`Checkbox ${label}: `, isSelected);
};

const handleButtonClick = () => {
  this.props.history.push('/');
};

function App() {
  return (
    <div className="app-wrapper">
      <Stepper steps={ 6 } />
      <Input id="empty-field" placeholder="Empty field"/>
      <Input selectButtons={{
          leftButtonLabel: 'lbs',
          leftButtonOnClick: () => {},
          rightButtonLabel: 'kg',
          rightButtonOnClick: () => {}
        }}
        placeholder="Placeholder"
        label="Label"
        id="select-buttons"
      />
      <br />
      <Input id="input-error" errorMessage="Error message" placeholder="Placeholder" label="Label"/>
      <Input id="inner-label" innerLabel="Units" placeholder="Placeholder" label="Label"/>
      <Input id="char-max" characterMax="20" placeholder="Placeholder" label="Label"/>
      <ReadOnlyInput value="Read only text" label="Read Only"/>
      <SegmentedController controllerOptions={ segmentedControllerItems } />
      <Checkbox id="checkbox1" name="checkbox1" checked label="Option 1" onChange={ handleCheckboxClick } />
      <Checkbox id="checkbox2" name="checkbox2" label="Option 2" onChange={ handleCheckboxClick } />
      <RadioButtonGroup options={ radioGroupItems } onItemClick={ handleRadioButtonClick } register={() => {}} />
      <Counter label="1.5% Yellow Bag" />
      <br />
      <Button label="Next" onClick={ handleButtonClick } />
      <Button label="Disabled" disabled={ true } />
    </div>
  );
}

export default App;
