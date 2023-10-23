//create class header
class Header extends React.Component {
    constructor() {
        super();
        //membuat objek state
        this.state = {
        angka1: "0",
        angka2: "0",
        result: "0"
    };
}

// set value
setValue1 = (val1) => { this.setState ({ angka1: ""+val1 }); }
setValue2 = (val2) => { this.setState ({ angka2: ""+val2 }); }

//arithmetic operations such as addition, substraction, division, multiplication
functMultiply = (val) => {
    var hasil = parseInt (this.state.angka1) * parseInt(this.state.angka2);
    this.setState({result: ""+hasil});
}

funcDevide = (val) => {
    var hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
    this.setState({result: ""+hasil});
}

funcSubtract = (val) => {
    var hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
    this.setState({result: ""+hasil});
}

funcAdd = (val) => {
    var hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
    this.setState({result: ""+hasil});
}

render () {
    return (
    <div>
        <h1>Simple Calculator ReactJS</h1>
        input 1: <input value={this.state.angka1} onChange= {(e) => {this.setValue1(e.target.value) } } />
        <br/>
        input 2: <input value={this.state.angka2} onChange={(e) => {this.setValue2(e.target.value) } } />
        <h1>Result: {this.state.result}</h1>
        <button onClick={this.functMultiply}>Multiply</button>
        <button onClick={this.funcDevide}>Devision</button>
        <button onClick={this.funcSubtract}>Substract</button>
        <button onClick={this.funcAdd}>Addition</button>
    </div>
        );
    }
}


//render komponen ke realDOM
ReactDOM.render(<Header />, document.getElementById("app"));