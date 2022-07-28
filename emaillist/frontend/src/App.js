import React, { useState, useEffect } from 'react'
import styles from './assets/css/App.css';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

const App = (keyword) => {
  const [emails, setEmails] = useState([]);
  
  const fetchData = async () => {
    try{
      const response = await fetch(!keyword ? `/api?kw=${keyword}` : '/api', {
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
  }
  
  const notifyEmailDelete = function(no) {
    console.log(no);  
  }

  const notifyEmailAdd  = async function(email) {  
      try{
        const response = await fetch(`/api`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(email),
        });
  
        if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
        const json = await response.json();
  
        if(json.result !== 'success'){
          throw new Error(`${json.result} ${json.message}`);
        }
  
        setEmails([json.data, ...emails]);    

      } catch(error) {
        console.error(error);
      }
    
  }

  const notifyKeywordChanged = async function(keyword){  
    fetchData(keyword);  
  } 

  useEffect(() => {    
    fetchData('');
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