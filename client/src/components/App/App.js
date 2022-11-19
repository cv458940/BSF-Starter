import React from 'react';
import "./App.css"
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import VoucherTable from "./Vouchers";
import Header from "./header";

function App() {

  return (
    <div className="App">
        <Header/>
        <br/>
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <VoucherTable/>
      <CurrentEntries />
    </div>
  )
}

export default App;

