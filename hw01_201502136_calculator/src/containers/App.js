import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import AddBtn from '../components/addBtn';

import * as actions from '../actions';
import AddBtn from '../components/AddBtn';
import ClearBtn from '../components/ClearBtn';
import DivBtn from '../components/DivBtn';
import EqBtn from '../components/EqBtn';
import MulBtn from '../components/MulBtn';
import NumBtn from '../components/NumBtn';
import Result from '../components/Result';
import SubBtn from '../components/SubBtn';

class App extends Component {
    render() {
      const { calculator, actions } = this.props
      return (
    <div>
      <Result result={calculator.showingResult ? calculator.finalValue : calculator.inputValue} />
      <div>
        <NumBtn n={1} color="#f03e3e" onClick={() => actions.onNumClick(1)} />
        <NumBtn n={2} color="#fcc419" onClick={() => actions.onNumClick(2)} />
        <NumBtn n={3} color="#fd7e14" onClick={() => actions.onNumClick(3)} />
        <MulBtn color="#495057" onClick={actions.onMulBtnClick} />
      </div>
      <div>
        <NumBtn n={4} color="#94d82d" onClick={() => actions.onNumClick(4)} />
        <NumBtn n={5} color="#329af0" onClick={() => actions.onNumClick(5)} />
        <NumBtn n={6} color="#e64980" onClick={() => actions.onNumClick(6)} />
        <DivBtn color="#495057" onClick={actions.onDivBtnClick} />
      </div>
      <div>
        <NumBtn n={7} color="#7950f2" onClick={() => actions.onNumClick(7)} />
        <NumBtn n={8} color="#0ca678" onClick={() => actions.onNumClick(8)} />
        <NumBtn n={9} color="#ae3ec9" onClick={() => actions.onNumClick(9)} />
        <AddBtn color="#495057" onClick={actions.onAddBtnClick} />
      </div>
      <div>
        <ClearBtn color="#495057" onClick={actions.onClearBtnClick} />
        <NumBtn n={0} color="#4263eb" onClick={() => actions.onNumClick(0)} />
        <EqBtn color="#495057" onClick={actions.onEqBtnClick} />
        <SubBtn color="#495057" onClick={actions.onSubBtnClick} />
      </div>
    </div>
  );
    }
}

const mapState = (state, ownProps) => ({
  calculator: state.calculator
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(App);
