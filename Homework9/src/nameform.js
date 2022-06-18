import * as React from 'react';
import * as ReactDOM from 'react-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props); //透過super()就能取得所繼承的類別中的變數結構
    this.state = {
      value: '',
      itemList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
    
  handleSubmit(event) {
    this.state.itemList.push(this.state.value);
    this.setState({value: '', itemList: this.state.itemList,});
    event.preventDefault(); //使用 preventDefault() 阻止無效文本輸入到達輸入字段
}

render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <label>
    Name:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
    </form>
    <ul style={{ textAlign: 'left' }}>
    {this.state.itemList.map((item, index) => <li key={`item_${index}`}>{item}</li>) }
    </ul>
    </div>
  );
}
}
ReactDOM.render(<NameForm />,document.getElementById('root'));