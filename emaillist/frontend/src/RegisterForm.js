import React, { useCallback, useRef } from 'react';
import styles from './assets/css/RegisterForm.css';

function RegisterForm({callback}) {
    
    return (
        <div className={styles.RegisterForm}>
            <form
                className={styles.RegisterForm}
                onSubmit={ e => {
                    firstName: e.target.firstName.value;
                    lastName: e.target.lastName.value;
                    email: e.target.email.value;
                }}>
            <input type={'text'} name={'firstName'} placeholder={'성'} className={styles.InputFirstName} />
            <input type={'text'} name={'lastName'} placeholder={'이름'} className={styles.InputLastName} />
            <input type={'text'} name={'email'} placeholder={'이메일'} className={styles.InputEmail} />
            <input type={'submit'} value={'등록'} />
            </form>
        </div>
    );
}

export default RegisterForm;