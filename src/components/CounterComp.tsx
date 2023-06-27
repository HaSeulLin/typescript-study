import React, { useState } from 'react'

interface CounterProps {
    startNum: number;
}

export default function CounterComp(props: CounterProps) {

    const { startNum } = props;

    const [modifyNum, setModifyNum] = useState(startNum);
    const [array, setArray] = useState([
        {
            id: 1,
            text: "one",
        },
        {
            id: 2,
            text: "two",
        }
    ]);

    return (
        <div>
            <h2>Counter 컴포넌트,</h2>
            <p>props 값으로 전달된 처음 값 : {startNum}</p>
            <p>props 값을 받아와 값을 수정하는 state 값 : {modifyNum}</p>
            <label htmlFor="">수정할 숫자</label>
            <input type="number" name="" id=""
                onChange={(e) => { setModifyNum(parseInt(e.target.value)) }}
            />
            <ul style={{width:'300px', margin:'auto'}}>
                <li>id : text</li>
                {
                    array.map((a) =>
                        <li key={a.id}>
                            {a.id} :{a.text}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
