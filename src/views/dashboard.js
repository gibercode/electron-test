import React, { useEffect, useState } from 'react';
import './dashboard.scss';
import { getWallets } from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';
import avatar from '../assets/robot.png';

const Dashboard = (props) => {
  const { action, wallets } = props;
  const [ currentDB, setcurrentDB] = useState(null);

  useEffect(() => {
    if (!wallets) action.getWallets();
  }, [wallets]);

  useEffect(() => {
    testdb();
  }, []);

  const testdb = () => {
    if(!(indexedDB in window)){
      console.log('NO SUPPORT');
      
    }else {
      console.log('SUPPORT');
    }

    const database = indexedDB.open('test-db', 1);
    setCurrentDB(database);

    database.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore('users', { keyPath: "id", autoIncrement: true});
    }
  }

  const createObject = () => {
  const db = currentDB.result;
  const transaction = db.transaction('users', 'readwrite');
  const store = transaction.objectStore('users');

  const item = {
    name: 'Manuel',
    occupation: 'Developer'
  }

  store.add(item);
  };
    
  return (
    <div className='_main'>
      <div className='_menu'>
        <ul className='_list'>
          <li>Home</li>
          <li>Payments</li>
          <li>Graphics</li>
          <li>Summary</li>
          <li>Contact</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className='_body'>
        <button onClick={() => createObject()}>click me!</button>
        {
          wallets
            ?
            <div>
              <p>{wallets.result.data[0].walletId}</p>
              <p>{wallets.result.data[0].entityId}</p>
              <p>{wallets.result.data[0].type}</p>

              <QRCode value={walletId} includeMargin={true} />,
            </div>
            : null
        }
        <div>

      
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (wallets) => (
  wallets
);

const mapDispatchToProps = dispatch => {
  const actions = {
    getWallets
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


// export default Dashboard;
