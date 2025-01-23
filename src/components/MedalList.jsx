// src/components/MedalList.jsx
import { useState } from "react";

const MEDAL_RECORDS = [];

const MedalList = () => {
    // 현재 상태 값(todos)을 SAMPLE_TODOS로 초기화하고 상태를 업데이트 할 때 setTodos를 사용
    const [records, setRecords] = useState(MEDAL_RECORDS);

        // 새로운 투두의 입력을 상태로 관리
    const [contryName, setContryName] = useState(""); // 상태 변수 이름을 수정

    // 인풋에 입력 또는 공백이면 실행시키지 않는 함수
    const handleSubmit = (e) => {
        e.preventDefault();

        // trim() todoList 앞뒤 공백을 제거하고, 비어있으면 아무 것도 하지 않음
        if (!contryName.trim()) {
            return;
        }
        // 입력된 인풋의 내용을 리스트에 추가가
        setRecords([{id : crypto.randomUUID(), 국가명 : contryName}, ...records]);

        setContryName("");
    };

    // 인풋의 value를 가져와서 todoText의 상태를 변경시켜주는 함수수
    const hendleChangeTodoText = (e) => {
        setContryName(e.target.value);
    };

    return (
        // return (소괄호) 안에는 하나의 태그만 들어갈 수 있어서 div로 감싸줌줌
        <div> 
            <form onSubmit={handleSubmit}>
                <div className="contry-name">국가명<br/>
                <input type="text" value={contryName} onChange={hendleChangeTodoText}/>
                </div>

                <div className="contry-name">금메달<br/>
                <input type="text" value={contryName} onChange={hendleChangeTodoText}/>

                </div>

                <div className="contry-name">은메달<br/>
                <input type="text" value={contryName} onChange={hendleChangeTodoText}/>
                </div>

                <div className="contry-name">동메달 <br/>
                <input type="text" value={contryName} onChange={hendleChangeTodoText}/>
                </div>

                <button type="submit">추가하기</button>
                <button type="submit">업데이트</button>


            </form>
        {/* ul, li 태그로 시맨틱한 리스트 작성 */}
            <ul>
                {records.map(({ id, 국가명 }) => (
                    <li key={id}>{국가명}</li>
                ))}
            </ul>
        </div>
    );
};

export default MedalList;
