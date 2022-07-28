import React, { useState, useEffect } from 'react'
import styles from './assets/css/App.css';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

const App = () => {
  const [emails, setEmails] = useState([]);
  
  const notifyEmailDelete = function(no) {
    console.log(no);  
  }
  const notifyEmailAdd  = function(email) {
    console.log(email);   
  }

  const notifyKeywordChanged = function(keyword){
    const result = data.filter(e => {
      e.firstName.indexOf(keyword) !== -1 ||
      e.lastName.indexOf(keyword) !== -1 ||
      e.email.indexOf(keyword) !== -1
    });
    console.log(result);
    setEmails(result);

  } 

  useEffect(async () => {
    try{
      const response = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null,
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success'){
        throw new Error(`${json.result} ${json.message}`);
      }

      setEmails(json.data);
    } catch(error) {
      console.error(error);
    }

  }, []);

  return (
    <div id={styles.App}>
      <RegisterForm  callback={notifyEmailAdd}/>
      <SearchBar callback={notifyKeywordChanged} />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App