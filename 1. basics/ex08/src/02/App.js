import React from 'react';

function App(props) {
    /**
     * 리엑트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
     * 오류: 
     * return (
     *      <h2>app02</h2>
     *      <p>JSX Tutorial - 특징2: Single Root Node</p>
     * )
     */
    return (
        <div>
            <h2>app02</h2>
            <p>JSX Tutorial - 특징2: Single Root Node</p>
        </div>
    );
}
/**
 * 리엑트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
 * 오류: 
 * return (
 *      <h2>app02</h2>
 *      <p>JSX Tutorial - 특징2: Single Root Node</p>
 * )
 */
export default App;